// Coffearium quote check: pure logic (no network, no file system), shared by check.mjs and the tests.
//
//  - text normalisation and matching (exact, fuzzy)
//  - HTML / JATS XML to text, detection of pages that only show an abstract
//  - full-text fallbacks for DOIs (Europe PMC, MDPI /htm and /pdf, PMC) and the Crossref abstract
//  - final status per quote, including "inconclusive (abstract only)"
//  - the Markdown report, built from the JSON result (so --reclassify can rebuild it offline)

export const FUZZY_MIN = 0.9;
export const FUZZY_MIN_TOKENS = 6;
export const ORDER_MIN = 0.85;

// ---------- normalisation ----------
const KEEP_SYMBOLS = /^[<>=±≤≥×+~≈]+$/;
const EDGE = /^[\s"'()[\]{}.,;:!?*†‡§¶…\-_|]+|[\s"'()[\]{}.,;:!?*†‡§¶…\-_|]+$/gu;

export function normaliseText(s) {
  return s
    .replace(/[º˚◦∘](?=\s*[CF]\b)/g, '°') // º, ˚, ◦, ∘ used as a degree sign (before NFKC turns º into o)
    .normalize('NFKC') // ligatures (ﬁ ﬂ), full-width forms, … → ...
    .replace(/[­​-‍⁠﻿]/g, '') // soft hyphens, zero-width
    .replace(/[‘’‚‛′`´]/g, "'")
    .replace(/[“”„‟″«»]/g, '"')
    .replace(/[‐-―−﹘﹣－]/g, '-')
    .replace(/(\p{L})-[ \t]*\r?\n\s*(\p{L})/gu, '$1$2') // hyphenation at a line break
    .replace(/\s*\[\d+(?:\s*[,-]\s*\d+)*\]/g, '') // numeric citation marks such as [12] or [3, 5-7]
    .replace(/(\d)\s+%/g, '$1%')
    .replace(/(\d)\s*°\s*([CF])\b/g, '$1 °$2') // 60°C = 60 °C = 60 ° C
    .replace(/\s+/g, ' ')
    .trim();
}

function canonToken(t) {
  let c = t.replace(EDGE, '');
  if (!c) return KEEP_SYMBOLS.test(t) ? t : '';
  return c
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[-']/g, ''); // post-harvest = postharvest (line-break joins), farmer's = farmers
}

/** Returns { orig: string[], canon: string[] } with empty tokens dropped (arrays stay aligned). */
export function tokenise(text) {
  const orig = [];
  const canon = [];
  for (const t of normaliseText(text).split(' ')) {
    const c = canonToken(t);
    // drop an immediately repeated word (PDF text layers often double a word: "drastically drastically")
    if (c && !(c.length > 2 && /^\p{L}+$/u.test(c) && c === canon[canon.length - 1])) {
      orig.push(t);
      canon.push(c);
    }
  }
  return { orig, canon };
}

export function prepareDoc(text) {
  const tk = tokenise(text);
  // character offset of each token in the joined canonical string, for exact search
  const offs = new Array(tk.canon.length);
  let pos = 1;
  for (let i = 0; i < tk.canon.length; i++) {
    offs[i] = pos;
    pos += tk.canon[i].length + 1;
  }
  return { ...tk, joined: ' ' + tk.canon.join(' ') + ' ', offs };
}

function tokenIndexAt(doc, charPos) {
  let lo = 0, hi = doc.offs.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (doc.offs[mid] <= charPos) lo = mid; else hi = mid - 1;
  }
  return lo;
}

/** Exact match. A quote may skip text with "..." / "…" / "[...]": the parts must then appear in order. */
export function exactMatch(doc, quote) {
  const parts = normaliseText(quote)
    .split(/\[\s*\.\.\.\s*\]|\.\.\.+/)
    .map((p) => tokenise(p).canon)
    .filter((p) => p.length);
  if (!parts.length) return null;
  let from = 0, startTok = -1, endTok = -1;
  for (const p of parts) {
    const needle = ' ' + p.join(' ') + ' ';
    const at = doc.joined.indexOf(needle, from);
    if (at < 0) return null;
    const ti = tokenIndexAt(doc, at + 1);
    if (startTok < 0) startTok = ti;
    endTok = ti + p.length;
    from = at + needle.length - 1;
  }
  return { start: startTok, end: endTok };
}

export function lcsLen(a, b) {
  let prev = new Uint16Array(b.length + 1);
  let cur = new Uint16Array(b.length + 1);
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
    [prev, cur] = [cur, prev];
  }
  return prev[b.length];
}

/**
 * Fuzzy match.
 * 1. Sliding window of the quote's length (and 1.2 x) scored by token overlap: the share of the quote's
 *    words present in the window.
 * 2. If that is below the threshold: wider windows (2 x, 3 x) scored by the share of the quote's words
 *    found IN ORDER (longest common subsequence). This catches quotes split by a PDF column, page or table
 *    break; it is reported as a close match with a note, never as found.
 */
export function fuzzyMatch(doc, quote) {
  const q = tokenise(quote.replace(/\[\s*\.\.\.\s*\]|\.\.\.+|…/g, ' ')).canon;
  const n = q.length;
  const N = doc.canon.length;
  if (!n || !N) return { score: 0, start: 0, end: 0, n };
  const need = new Map();
  for (const t of q) need.set(t, (need.get(t) || 0) + 1);

  function slide(w, onWindow) {
    const win = new Map();
    let matched = 0;
    const add = (t) => {
      const k = need.get(t);
      if (!k) return;
      const c = win.get(t) || 0;
      if (c < k) matched++;
      win.set(t, c + 1);
    };
    const del = (t) => {
      const k = need.get(t);
      if (!k) return;
      const c = win.get(t) - 1;
      win.set(t, c);
      if (c < k) matched--;
    };
    w = Math.min(w, N);
    for (let i = 0; i < w; i++) add(doc.canon[i]);
    onWindow(0, w, matched);
    for (let s = 1; s + w <= N; s++) {
      del(doc.canon[s - 1]);
      add(doc.canon[s + w - 1]);
      onWindow(s, w, matched);
    }
  }

  let best = { score: 0, start: 0, end: 0, n };
  for (const w of new Set([n, Math.max(n, Math.round(n * 1.2))])) {
    slide(w, (s, w, m) => {
      if (m / n > best.score + 1e-9) best = { score: m / n, start: s, end: s + w, n };
    });
  }
  if (best.score < FUZZY_MIN && n >= FUZZY_MIN_TOKENS) {
    for (const w of [2 * n, 3 * n]) {
      const cands = [];
      slide(w, (s, w, m) => {
        if (m / n >= FUZZY_MIN && (!cands.length || s - cands[cands.length - 1] >= Math.max(1, n >> 2))) cands.push(s);
      });
      for (const s of cands.slice(0, 3000)) {
        const sc = lcsLen(q, doc.canon.slice(s, s + w)) / n;
        if (sc > best.score + 1e-9) best = { score: sc, start: s, end: Math.min(s + w, N), n, gapped: true };
      }
    }
  }
  // trim the passage to the span between the first and last matching tokens
  const qs = new Set(q);
  let { start, end } = best;
  while (start < end && !qs.has(doc.canon[start])) start++;
  while (end > start && !qs.has(doc.canon[end - 1])) end--;
  return { ...best, start, end };
}

function passage(doc, start, end, pad = 0) {
  const s = Math.max(0, start - pad);
  const e = Math.min(doc.orig.length, end + pad);
  let p = doc.orig.slice(s, e).join(' ');
  if (p.length > 700) p = p.slice(0, 700) + ' …';
  return p;
}

export function matchQuote(doc, quote) {
  const ex = exactMatch(doc, quote);
  if (ex) return { result: 'found', score: 1, order: 1, passage: passage(doc, ex.start, ex.end) };
  const fz = fuzzyMatch(doc, quote);
  // share of the quote's words found in the same order in the passage: catches swapped words that change the meaning
  const q = tokenise(quote.replace(/\[\s*\.\.\.\s*\]|\.\.\.+|…/g, ' ')).canon;
  const order = q.length ? lcsLen(q, doc.canon.slice(fz.start, fz.end)) / q.length : 0;
  const close = fz.n >= FUZZY_MIN_TOKENS && fz.score >= FUZZY_MIN && order >= ORDER_MIN;
  const r3 = (x) => Math.round(x * 1000) / 1000;
  return {
    result: close ? 'close' : 'not-found',
    score: r3(fz.score),
    order: r3(order),
    reordered: !close && fz.score >= FUZZY_MIN && order < ORDER_MIN ? true : undefined,
    gapped: close && fz.gapped ? true : undefined,
    passage: fz.score > 0 ? passage(doc, fz.start, fz.end) : '',
  };
}

// ---------- HTML / XML to text ----------
let entities = { nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
try {
  entities = { ...(await import('character-entities-html4')).characterEntitiesHtml4, apos: "'" };
} catch {
  /* small built-in table is enough for most pages */
}
export function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, (m, e) => {
    if (e[0] === '#') {
      const cp = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      try { return String.fromCodePoint(cp); } catch { return ' '; }
    }
    return entities[e] ?? entities[e.toLowerCase()] ?? m;
  });
}

export function htmlToText(html) {
  // Abstracts often live in meta tags (citation_abstract, dc.description, og:description).
  const metas = [];
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = m[0];
    const name = (tag.match(/\b(?:name|property)\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    if (/abstract|description/i.test(name)) {
      const c = (tag.match(/\bcontent\s*=\s*"([^"]*)"/i) || tag.match(/\bcontent\s*=\s*'([^']*)'/i) || [])[1];
      if (c) metas.push(c);
    }
  }
  let body = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(script|style|noscript|svg|template)\b[\s\S]*?<\/\1\s*>/gi, ' ')
    .replace(/<(br|hr)\b[^>]*>/gi, '\n')
    .replace(/<\/?(p|div|li|ul|ol|h[1-6]|tr|td|th|table|section|article|header|footer|blockquote|pre|dd|dt|figure|figcaption|abstract|title|sec)\b[^>]*>/gi, '\n')
    .replace(/<\/?(sup|sub)\b[^>]*>/gi, '')
    .replace(/<[^>]+>/g, ' ');
  return decodeEntities(metas.join('\n') + '\n' + body);
}

/**
 * JATS XML (Europe PMC fullTextXML) to text. The reference list is dropped; superscript citation
 * clusters (<sup><xref ref-type="bibr">3</xref>,<xref …>4</xref></sup>) are dropped so they do not stick
 * to the preceding word; bracketed numeric citations stay as "[12]" and are removed by the normaliser.
 */
export function jatsToText(xml) {
  const s = xml
    .replace(/<\?[\s\S]*?\?>|<!DOCTYPE[^>]*>/gi, ' ')
    .replace(/<ref-list\b[\s\S]*?<\/ref-list>/gi, ' ')
    .replace(/<sup>\s*((?:<xref\b[^>]*ref-type=["']bibr["'][^>]*>[^<]*<\/xref>[\s,;–—-]*)+)<\/sup>/gi, '')
    .replace(/<\/?xref\b[^>]*>/gi, '') // "[<xref>1</xref>,<xref>2]</xref>" -> "[1,2]", removed by the normaliser
    .replace(/<\/?(caption|label|list-item|ack|fn|disp-quote|def|term|kwd-group|article-title|trans-title)\b[^>]*>/gi, '\n');
  return htmlToText(s);
}

// ---------- abstract-only pages ----------
const SECTION_HEADS = new Set([
  'introduction', 'background', 'materials and methods', 'material and methods', 'methods', 'methodology',
  'experimental', 'results', 'results and discussion', 'discussion', 'conclusion', 'conclusions',
  'acknowledgements', 'acknowledgments',
]);
const ABSTRACT_META = /<meta\b[^>]*\b(?:name|property)\s*=\s*["'](?:citation_abstract|dc\.description|dcterms\.abstract|eprints\.abstract|prism\.teaser)["']/i;

/** How many distinct full-text section headings (Introduction, Methods, Results, …) stand alone on a line. */
export function sectionHeadingCount(text) {
  const seen = new Set();
  for (const line of text.split('\n')) {
    const l = line.trim().toLowerCase().replace(/^(\d+(\.\d+)*\.?|[ivx]+\.)\s+/, '').replace(/[.:]$/, '');
    if (l.length < 40 && SECTION_HEADS.has(l)) seen.add(l === 'acknowledgments' ? 'acknowledgements' : l);
  }
  return seen.size;
}

/**
 * Is an HTML page clearly only an abstract (a publisher landing page, a repository record)?
 * Yes when it carries an abstract (abstract meta tag, or an "Abstract" heading line), has fewer than three
 * full-text section headings, and either shows a paywall/login prompt or is short (< 2500 words).
 * `raw` (the HTML) may be null for older cache records: then only the heading line is used.
 */
export function isAbstractPage(raw, text, hint) {
  const marker = (raw && ABSTRACT_META.test(raw)) || /^\s*abstract\s*:?\s*$/im.test(text);
  if (!marker) return false;
  if (sectionHeadingCount(text) >= 3) return false;
  const words = text.split(/\s+/).filter(Boolean).length;
  return !!hint || words < 2500;
}

// ---------- fallback URLs ----------
export const cleanDoi = (d) => String(d).toLowerCase().trim().replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
export const doiUrl = (doi) => 'https://doi.org/' + String(doi).trim().replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
export const crossrefUrl = (doi) => 'https://api.crossref.org/works/' + encodeURIComponent(String(doi).trim().replace(/^https?:\/\/(dx\.)?doi\.org\//, ''));
const EPMC = 'https://www.ebi.ac.uk/europepmc/webservices/rest';
export const epmcSearchUrl = (doi) => `${EPMC}/search?query=${encodeURIComponent(`DOI:"${cleanDoi(doi)}"`)}&format=json&resultType=core`;
export const epmcFullTextUrl = (pmcid) => `${EPMC}/${pmcid.toUpperCase()}/fullTextXML`;

/** PMCID from a PMC article URL (pmc.ncbi.nlm.nih.gov/articles/PMC…, www.ncbi.nlm.nih.gov/pmc/articles/PMC…, europepmc.org/article/PMC/PMC…). */
export function pmcIdFromUrl(url) {
  let u;
  try { u = new URL(url); } catch { return null; }
  if (!/(^|\.)ncbi\.nlm\.nih\.gov$|(^|\.)europepmc\.org$/.test(u.hostname)) return null;
  if (u.hostname.startsWith('pubmed.')) return null;
  const m = u.pathname.match(/\b(PMC\d+)\b/i);
  return m ? m[1].toUpperCase() : null;
}

/** The /htm and /pdf variants of an MDPI article URL (www.mdpi.com/<ISSN>/<vol>/<issue>/<article>). */
export function mdpiVariants(url) {
  let u;
  try { u = new URL(url); } catch { return null; }
  if (!/(^|\.)mdpi\.com$/.test(u.hostname)) return null;
  const p = u.pathname.replace(/\/+$/, '').replace(/\/(htm|pdf)$/i, '');
  if (!/^\/[\dxX]{4}-[\dxX]{4}\/\d+\/\d+\/\d+$/.test(p)) return null;
  const base = `${u.protocol}//${u.host}${p}`;
  return { htm: base + '/htm', pdf: base + '/pdf' };
}

/** Parse a Europe PMC search response: the record for this DOI, or null. */
export function parseEpmcSearch(jsonText, doi) {
  let j;
  try { j = JSON.parse(jsonText); } catch { return { error: 'Europe PMC: unreadable response' }; }
  const list = j?.resultList?.result || [];
  const want = cleanDoi(doi);
  const r = list.find((x) => x.doi && cleanDoi(x.doi) === want);
  if (!r) return { error: 'Europe PMC: DOI not indexed' };
  const oa = r.isOpenAccess === 'Y';
  if (!r.pmcid) return { error: 'Europe PMC: no PMC full text' };
  if (!oa) return { error: `Europe PMC: ${r.pmcid} is not open access` };
  return { pmcid: r.pmcid.toUpperCase() };
}

// ---------- the check pipeline ----------
export const rank = (r) => ({ found: 3, close: 2, 'not-found': 1 })[r] || 0;

/** Best attempt: best result; at equal result, full text before abstract; then the higher score. */
export function bestAttempt(attempts) {
  let b = null;
  for (const a of attempts) {
    if (
      !b ||
      rank(a.result) > rank(b.result) ||
      (rank(a.result) === rank(b.result) && b.abstract && !a.abstract) ||
      (rank(a.result) === rank(b.result) && !!a.abstract === !!b.abstract && a.score > b.score)
    )
      b = a;
  }
  return b;
}

/**
 * Check all items.
 *   items:     [{ entry, id, title, url, doi, abstractOnly, quote, src }]
 *   fetchAll:  async (urls, label, opts) => Map(url -> { ok, text, kind, finalUrl, reason, abstractPage, … })
 *              opts: { raw: true } (return the body as is), { as: 'jats' } (JATS XML), { browserAccept: true }
 *   locals:    local copies (see check.mjs); findLocal: (locals, src) => hits
 * Sets on each item: fetch, attempts, tried, local, and the final fields (see finalise()).
 */
export async function checkItems(items, { fetchAll, locals = [], findLocal = null, localRoot = '' }) {
  const docs = new Map();
  const docFor = (key, text) => {
    if (!docs.has(key)) docs.set(key, prepareDoc(text));
    return docs.get(key);
  };
  const memo = new Map();
  const get = async (urls, label, opts = {}) => {
    const todo = [...new Set(urls)].filter((u) => !memo.has(u));
    if (todo.length) for (const [u, r] of await fetchAll(todo, label, opts)) memo.set(u, r);
    return memo;
  };
  const found = (it) => it.attempts.some((a) => a.result === 'found');
  const tryText = (it, key, text, via, abstract) => {
    it.attempts.push({ ...matchQuote(docFor(key, text), it.quote), via, abstract: !!abstract });
  };

  // 1. Primary URLs
  for (const it of items) {
    it.attempts = [];
    it.tried = [];
  }
  const primary = await get(items.filter((i) => i.url).map((i) => i.url), 'Fetching sources');
  for (const it of items) {
    if (!it.url) {
      it.fetch = { ok: false, reason: 'no url or doi' };
      continue;
    }
    it.fetch = primary.get(it.url) || { ok: false, reason: 'not fetched' };
    if (it.fetch.ok) {
      const via = it.fetch.kind === 'pdf' ? 'PDF at url' : it.fetch.abstractPage ? 'page at url (abstract only)' : 'page at url';
      tryText(it, it.url, it.fetch.text, via, it.fetch.abstractPage);
    }
  }
  // the primary text is full text unless it failed or is only an abstract page
  const noFullText = (it) => !it.fetch?.ok || it.fetch.abstractPage;

  // 2. PMC article URLs: Europe PMC full text for that PMCID
  const pmcItems = items.filter((i) => !found(i) && i.url && pmcIdFromUrl(i.url));
  if (pmcItems.length) {
    const r = await get(pmcItems.map((i) => epmcFullTextUrl(pmcIdFromUrl(i.url))), 'Europe PMC full text', { as: 'jats' });
    for (const it of pmcItems) {
      const id = pmcIdFromUrl(it.url);
      const f = r.get(epmcFullTextUrl(id));
      it.epmcTried = id;
      if (f?.ok) tryText(it, 'epmc:' + id, f.text, `full text via Europe PMC (${id})`);
      else it.tried.push(`Europe PMC full text ${id}: ${f?.reason || 'not fetched'}`);
    }
  }

  // 3. DOIs: Europe PMC search, then the open-access full text
  const doiItems = items.filter((i) => !found(i) && i.doi && !i.epmcTried);
  if (doiItems.length) {
    const s = await get(doiItems.map((i) => epmcSearchUrl(i.doi)), 'Europe PMC search', { raw: true });
    const want = [];
    for (const it of doiItems) {
      const f = s.get(epmcSearchUrl(it.doi));
      if (!f?.ok) {
        it.tried.push(`Europe PMC search: ${f?.reason || 'not fetched'}`);
        continue;
      }
      const p = parseEpmcSearch(f.text, it.doi);
      if (p.error) it.tried.push(p.error);
      else {
        it.epmcTried = p.pmcid;
        want.push(it);
      }
    }
    if (want.length) {
      const r = await get(want.map((i) => epmcFullTextUrl(i.epmcTried)), 'Europe PMC full text', { as: 'jats' });
      for (const it of want) {
        const f = r.get(epmcFullTextUrl(it.epmcTried));
        if (f?.ok) tryText(it, 'epmc:' + it.epmcTried, f.text, `full text via Europe PMC (${it.epmcTried})`);
        else it.tried.push(`Europe PMC full text ${it.epmcTried}: ${f?.reason || 'not fetched'}`);
      }
    }
  }

  // 4. MDPI: the /htm page, then the PDF (only when the article page itself gave no full text)
  const mdpiOf = (it) => mdpiVariants(it.url || '') || (it.fetch?.finalUrl && mdpiVariants(it.fetch.finalUrl));
  for (const v of ['htm', 'pdf']) {
    const list = items.filter((i) => !found(i) && noFullText(i) && mdpiOf(i) && !i.attempts.some((a) => !a.abstract && a.via.startsWith('full text via')));
    if (!list.length) continue;
    const r = await get(list.map((i) => mdpiOf(i)[v]), `MDPI /${v}`, { browserAccept: true });
    for (const it of list) {
      const u = mdpiOf(it)[v];
      const f = r.get(u);
      if (f?.ok && !f.abstractPage) tryText(it, u, f.text, v === 'pdf' ? 'full text via MDPI PDF (/pdf)' : 'full text via MDPI (/htm)');
      else it.tried.push(`MDPI /${v}: ${f?.ok ? 'only an abstract' : f?.reason || 'not fetched'}`);
    }
  }

  // 5. Crossref abstract, for DOIs still not found
  const crItems = items.filter((i) => !found(i) && i.doi);
  if (crItems.length) {
    const r = await get(crItems.map((i) => crossrefUrl(i.doi)), 'Crossref abstracts');
    for (const it of crItems) {
      const f = r.get(crossrefUrl(it.doi));
      let abs = '';
      if (f?.ok) try { abs = JSON.parse(f.text)?.message?.abstract || ''; } catch { /* not JSON */ }
      if (abs) tryText(it, 'crossref:' + it.doi, htmlToText(abs), 'Crossref abstract', true);
      else it.tried.push(`Crossref: ${f?.ok ? 'no abstract deposited' : f?.reason || 'not fetched'}`);
    }
  }

  // 6. Local copies (fallback text), for everything not found on the web
  if (locals.length && findLocal) {
    for (const it of items) {
      if (found(it)) continue;
      let best = null;
      for (const h of findLocal(locals, it.src || it)) {
        if (!h.L.docs) h.L.docs = h.L.texts.map(prepareDoc);
        for (const d of h.L.docs) {
          const m = matchQuote(d, it.quote);
          if (!best || rank(m.result) > rank(best.result) || (m.result === best.result && m.score > best.score)) {
            best = { ...m, file: localRoot ? relPath(localRoot, h.L.file) : h.L.file, how: h.how };
          }
        }
      }
      if (best) it.local = best;
    }
  }

  for (const it of items) finalise(it);
  return items;
}

const relPath = (root, f) => (f.startsWith(root) ? f.slice(root.length).replace(/^[\\/]+/, '') : f);

/**
 * Final status of one item from its attempts (web texts) and local copy:
 *   found > found-local > close > close-local > not-found (a full text was checked) > not-found-local >
 *   inconclusive (only an abstract was available; not-found instead if the source is marked abstractOnly) >
 *   unreachable.
 * Legacy: a not-found against an ordinary page at url, on a source marked abstractOnly (the verifier read an
 * abstract the checker could not see, e.g. rendered by JavaScript), stays "abstract-only".
 */
export function finalise(it) {
  const w = bestAttempt(it.attempts || []);
  const wFull = bestAttempt((it.attempts || []).filter((a) => !a.abstract));
  const l = it.local;
  let status, m;
  if (w?.result === 'found') [status, m] = ['found', w];
  else if (l?.result === 'found') [status, m] = ['found-local', l];
  else if (w?.result === 'close') [status, m] = ['close', w];
  else if (l?.result === 'close') [status, m] = ['close-local', l];
  else if (wFull) [status, m] = ['not-found', wFull];
  else if (l) [status, m] = ['not-found-local', l];
  else if (w) [status, m] = [it.abstractOnly ? 'not-found' : 'inconclusive', w];
  else [status, m] = ['unreachable', null];
  if (it.abstractOnly && status === 'not-found' && m?.via === 'page at url') status = 'abstract-only';
  it.status = status;
  it.score = m?.score ?? null;
  it.passage = m?.passage || '';
  it.matchedIn = !m ? null : m === l ? `local copy ${l.file} (matched by ${l.how})` : m.via;
  it.checkedText = !m ? null : m === l ? 'full text' : m.abstract ? 'abstract' : 'full text';
  it.reason = it.fetch?.ok ? null : it.fetch?.reason || 'not fetched';
  it.fetchedAt = it.fetch?.ok ? it.fetch.fetchedAt : null;
  it.hint = it.fetch?.hint || null;
  it.gapped = !!m?.gapped;
  it.reordered = !!m?.reordered;
  it.order = m?.order ?? null;
  return it;
}

/** The JSON form of one item (also the input of the report). */
export function toJsonItem(i) {
  return {
    entry: i.entry,
    sourceId: i.id,
    title: i.title,
    url: i.url,
    doi: i.doi,
    abstractOnly: i.abstractOnly || undefined,
    status: i.status,
    score: i.score,
    checkedAgainst: i.matchedIn,
    checkedText: i.checkedText || undefined,
    urlResult: i.fetch?.ok ? (i.fetch.abstractPage ? 'fetched (abstract only)' : 'fetched') : 'unreachable',
    unreachableReason: i.reason,
    alsoTried: i.tried?.length ? i.tried : undefined,
    fetchedAt: i.fetchedAt,
    note: i.hint || undefined,
    interrupted: i.gapped || undefined,
    inOrder: i.order,
    reordered: i.reordered || undefined,
    quote: i.quote,
    bestPassage: i.passage,
  };
}

// ---------- reclassification of an existing result file ----------
/**
 * Apply the "inconclusive (abstract only)" rule to a result JSON written by an older version:
 * a not-found that was checked only against an abstract (the Crossref abstract, or a page marked as
 * abstract only) and whose url gave no full text becomes "inconclusive", unless the source is
 * marked abstractOnly. Nothing else changes. Returns { json, changed }.
 */
export function reclassify(json) {
  let changed = 0;
  for (const i of json.items) {
    const abstractText =
      i.checkedText === 'abstract' ||
      i.checkedAgainst === 'Crossref abstract' ||
      /\(abstract only\)$/.test(i.checkedAgainst || '');
    const noFullText = i.urlResult !== 'fetched';
    if (i.status === 'not-found' && abstractText && noFullText && !i.abstractOnly) {
      i.status = 'inconclusive';
      i.checkedText = 'abstract';
      changed++;
    } else if (i.status === 'abstract-only' && abstractText && noFullText && i.abstractOnly) {
      // marked abstractOnly and the abstract was seen: a miss is a real not-found
      i.status = 'not-found';
      changed++;
    }
  }
  json.totals = { quotes: json.items.length, ...tally(json.items), blockedFromThisEnvironment: blockedCount(json.items) };
  return { json, changed };
}

// ---------- report ----------
export const CATS = ['found', 'found-local', 'close', 'not-found', 'inconclusive', 'abstract-only', 'unreachable'];
export const cat = (s) => (s === 'close-local' ? 'close' : s === 'not-found-local' ? 'not-found' : s);
export function tally(list) {
  const t = Object.fromEntries(CATS.map((c) => [c, 0]));
  for (const i of list) t[cat(i.status)]++;
  return t;
}
export const blockedCount = (list) =>
  list.filter((i) => i.status === 'unreachable' && /blocked from this environment/.test(i.unreachableReason || '')).length;

export const LABEL = {
  found: 'found',
  'found-local': 'found (local copy)',
  close: 'close match',
  'close-local': 'close match (local copy)',
  'not-found': 'not found',
  'not-found-local': 'not found (local copy)',
  inconclusive: 'inconclusive (abstract only)',
  'abstract-only': 'not found, marked abstract-only',
  unreachable: 'unreachable',
};

const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

/** Markdown report from the JSON result. opts: { command, localNote, reclassifiedNote } */
export function renderReport(json, opts = {}) {
  const items = json.items;
  const total = tally(items);
  const blocked = blockedCount(items);
  const entries = [...new Set(items.map((i) => i.entry))];
  const md = [];
  md.push(`# Quote check – ${json.date}${json.entry ? ` – ${json.entry}` : ''}`);
  md.push('');
  md.push(
    `Mechanical check (no AI) that each \`quote:\` in an entry's \`sources:\` appears in the source. Made with \`${opts.command || `npm run quotes${json.entry ? ` -- --entry ${json.entry}` : ''}`}\` (tools/quote-check/check.mjs). Text is normalised (Unicode NFKC, quotes, dashes, ligatures, soft hyphens, line-break hyphenation, white space, case) before matching. A **close match** has at least ${FUZZY_MIN * 100}% of the quote's words within one passage of the source, at least ${ORDER_MIN * 100}% of them in the same order; it usually means a small slip in copying or a PDF break, but read the passage. Order of text sources: the page or PDF at \`url\` (or doi.org); for PMC links and DOIs the open-access full text from Europe PMC; for MDPI links the \`/htm\` page and the PDF; the Crossref abstract for DOIs; then local copies${opts.localNote ? ` in \`${opts.localNote}\`` : ''} (never committed). **Inconclusive (abstract only)**: the only text the checker could read was an abstract and the quote is not in it; quotes usually come from the full text, so this is not a failure.`,
  );
  md.push('');
  if (opts.reclassifiedNote) {
    md.push(`> ${opts.reclassifiedNote}`);
    md.push('');
  }
  md.push(`## Totals`);
  md.push('');
  md.push(`| Quotes | Found | Found (local copy) | Close match | Not found | Inconclusive (abstract only) | Not found, marked abstract-only | Unreachable |`);
  md.push(`|---:|---:|---:|---:|---:|---:|---:|---:|`);
  md.push(`| ${items.length} | ${total.found} | ${total['found-local']} | ${total.close} | ${total['not-found']} | ${total.inconclusive} | ${total['abstract-only']} | ${total.unreachable} |`);
  md.push('');
  if (blocked) {
    md.push(
      `> ${blocked} source(s) were **unreachable (blocked from this environment)**: the network proxy of the machine that ran the check refused the connection. This says nothing about the source. Run \`npm run quotes\` on your own computer to check them.`,
    );
    md.push('');
  }
  md.push(`## By entry`);
  md.push('');
  md.push(`| Entry | Sources with quotes | Found | Found (local copy) | Close | Not found | Inconclusive | Unreachable |`);
  md.push(`|---|---:|---:|---:|---:|---:|---:|---:|`);
  for (const e of entries) {
    const list = items.filter((i) => i.entry === e);
    const t = tally(list);
    md.push(`| ${e} | ${list.length} | ${t.found} | ${t['found-local']} | ${t.close} | ${t['not-found']} | ${t.inconclusive} | ${t.unreachable} |`);
  }
  md.push('');

  const itemBlock = (i) => {
    const out = [];
    out.push(`### ${i.entry} · ${i.sourceId} – ${LABEL[i.status]}${i.score != null && i.status !== 'found' ? (i.score === 1 ? ' (all words present; extra or reordered text)' : ` (${Math.round(i.score * 100)}% of words)`) : ''}`);
    out.push('');
    out.push(`- **Source:** ${esc(i.title)}`);
    if (i.url) out.push(`- **URL:** ${i.url}${i.doi ? ` (DOI ${i.doi})` : ''}`);
    if (i.unreachableReason) out.push(`- **URL result:** unreachable – ${i.unreachableReason}`);
    if (i.checkedAgainst) out.push(`- **Checked against:** ${i.checkedAgainst}`);
    if (i.alsoTried?.length) out.push(`- **Also tried:** ${i.alsoTried.map(esc).join('; ')}`);
    if (i.reordered) out.push(`- **Note:** the passage has the same words but in a different order (${Math.round(i.inOrder * 100)}% in order): the quote may change what the source says.`);
    if (i.interrupted) out.push(`- **Note:** the words are there in order but interrupted by other text (often a PDF column, page or table break); check the passage.`);
    if (i.note) out.push(`- **Note:** ${i.note}`);
    if (i.abstractOnly) out.push(`- **Marked abstract-only** in the entry.`);
    out.push(`- **Quote:** “${i.quote}”`);
    out.push(`- **Best passage:** ${i.bestPassage ? `“${i.bestPassage}”` : '(none)'}`);
    out.push('');
    return out;
  };

  const notFound = items.filter((i) => cat(i.status) === 'not-found');
  const close = items.filter((i) => cat(i.status) === 'close');
  md.push(`## Not found (${notFound.length})`);
  md.push('');
  md.push(
    notFound.length
      ? 'Each must be resolved by the entry’s verifier: correct the quote from the source (a full text, or the abstract of a source marked `abstractOnly: true`, was checked and does not contain it), or remove the quote. See docs/VERIFY_BRIEF.md (S3).'
      : 'None.',
  );
  md.push('');
  for (const i of notFound) md.push(...itemBlock(i));
  md.push(`## Close matches (${close.length})`);
  md.push('');
  md.push(close.length ? 'Usually a small slip in copying (a word, a number format, a citation mark). Compare and correct the quote if it differs.' : 'None.');
  md.push('');
  for (const i of close) md.push(...itemBlock(i));

  const incon = items.filter((i) => i.status === 'inconclusive');
  md.push(`## Inconclusive – abstract only (${incon.length})`);
  md.push('');
  if (incon.length) {
    md.push(
      'Not an open problem. The full text could not be read (403, captcha, needs JavaScript, not open access in Europe PMC), and the quote is not in the abstract, which is all the checker saw. Nothing is required; optionally give the source an open full-text `url` (e.g. a PMC or repository copy) so the next run can check it.',
    );
    md.push('');
    md.push('| Entry | Source | Checked against | Why no full text | URL |');
    md.push('|---|---|---|---|---|');
    for (const i of incon)
      md.push(`| ${i.entry} | ${i.sourceId} | ${esc(i.checkedAgainst)} | ${esc([i.unreachableReason || (i.urlResult || '').replace(/^fetched /, 'page: '), ...(i.alsoTried || [])].filter(Boolean).join('; '))} | ${i.url || ''} |`);
  } else md.push('None.');
  md.push('');

  const absOnly = items.filter((i) => i.status === 'abstract-only');
  if (absOnly.length) {
    md.push(`## Not found, marked abstract-only (${absOnly.length})`);
    md.push('');
    md.push('The verifier set `abstractOnly: true`: the quote is said to come from an abstract the checker could not see. Confirm by hand when convenient.');
    md.push('');
    for (const i of absOnly) md.push(...itemBlock(i));
  }

  const unreach = items.filter((i) => i.status === 'unreachable');
  md.push(`## Unreachable (${unreach.length})`);
  md.push('');
  if (unreach.length) {
    const reasons = {};
    for (const i of unreach) reasons[i.unreachableReason] = (reasons[i.unreachableReason] || 0) + 1;
    md.push('| Reason | Sources |');
    md.push('|---|---:|');
    for (const [r, n] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) md.push(`| ${esc(r)} | ${n} |`);
    md.push('');
    md.push('<details><summary>All unreachable sources</summary>');
    md.push('');
    md.push('| Entry | Source | Reason | Also tried | URL |');
    md.push('|---|---|---|---|---|');
    for (const i of unreach) md.push(`| ${i.entry} | ${i.sourceId} | ${esc(i.unreachableReason)} | ${esc((i.alsoTried || []).join('; '))} | ${i.url || ''} |`);
    md.push('');
    md.push('</details>');
  } else md.push('None.');
  md.push('');
  return md.join('\n');
}

export function summaryLine(json) {
  const t = tally(json.items);
  const b = blockedCount(json.items);
  return `Quotes: ${json.items.length} · found ${t.found} · found (local copy) ${t['found-local']} · close ${t.close} · not found ${t['not-found']} · inconclusive (abstract only) ${t.inconclusive}${t['abstract-only'] ? ` · abstract-only ${t['abstract-only']}` : ''} · unreachable ${t.unreachable}${b ? ` (${b} blocked from this environment)` : ''}`;
}
