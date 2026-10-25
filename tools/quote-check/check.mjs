#!/usr/bin/env node
// Coffearium quote check: confirms mechanically (no AI) that each `quote:` in an entry's
// `sources:` really appears in the source it is attributed to.
//
// Usage:  npm run quotes                      all entries
//         npm run quotes -- --entry drying    one entry
//         npm run quotes -- --refresh         ignore the cache and fetch again
//         npm run quotes -- --papers <dir>    folder of local .txt copies (fallback text)
//         npm run quotes -- --no-local        do not use local copies
//         npm run quotes -- --reclassify <file.json>
//                                             no fetching: apply the current status rules to an existing
//                                             result file and rewrite it and its .md report
//
// Text sources, in order: the page or PDF at url (or doi.org); for PMC article URLs the Europe PMC full
// text; for DOIs the Europe PMC open-access full text; for MDPI URLs the /htm page and the /pdf; the
// Crossref abstract for DOIs; local copies.
//
// Results per source: found | found-local | close | close-local | not-found | not-found-local |
//   inconclusive (only an abstract could be read and the quote is not in it) | abstract-only | unreachable
// Report: docs/verification/quote-check-<YYYY-MM-DD>[-<entry>].md and .json
//
// Politeness: one request per host at a time, 1 s between requests to the same host,
// 20 s timeout, an identifying User-Agent. Captchas and paywalls are never worked around:
// "unreachable" is a valid result. The pure logic lives in lib.mjs (tested in test/).

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  htmlToText, jatsToText, isAbstractPage, prepareDoc, exactMatch, fuzzyMatch, tokenise, lcsLen, cleanDoi, doiUrl,
  checkItems, toJsonItem, reclassify, renderReport, summaryLine, tally, blockedCount, FUZZY_MIN,
} from './lib.mjs';

// --- Behind an HTTPS proxy, Node's fetch only uses it with NODE_USE_ENV_PROXY=1 (Node >= 22.21).
if ((process.env.HTTPS_PROXY || process.env.https_proxy) && !process.env.NODE_USE_ENV_PROXY) {
  const r = spawnSync(process.execPath, ['--disable-warning=UNDICI-EHPA', ...process.execArgv, ...process.argv.slice(1)], {
    stdio: 'inherit',
    env: { ...process.env, NODE_USE_ENV_PROXY: '1' },
  });
  process.exit(r.status ?? 1);
}

const yaml = (await import('js-yaml')).default;

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const ENTRIES = path.join(root, 'src/content/entries');
const CACHE = path.join(here, '.cache');
const OUTDIR = path.join(root, 'docs/verification');
const UA = 'CoffeariumQuoteCheck/1.0 (+https://coffearium.org/how-we-verify/)';
const TIMEOUT_MS = 20_000;
const HOST_DELAY_MS = 1_000;
const MAX_HOSTS_PARALLEL = 8;
const MAX_BYTES = 40 * 1024 * 1024;
// for the MDPI fallback only: the Accept header a browser sends when it opens a page (the User-Agent stays honest)
const BROWSER_ACCEPT = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8';

// ---------- arguments ----------
const argv = process.argv.slice(2);
const opt = { entry: null, refresh: false, papers: null, local: true, reclassify: null };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--entry') opt.entry = argv[++i];
  else if (a === '--refresh') opt.refresh = true;
  else if (a === '--papers') opt.papers = argv[++i];
  else if (a === '--no-local') opt.local = false;
  else if (a === '--reclassify') opt.reclassify = argv[++i];
  else if (a === '-h' || a === '--help') {
    console.log('npm run quotes [-- --entry <slug>] [--refresh] [--papers <dir>] [--no-local]\nnpm run quotes -- --reclassify <result.json>');
    process.exit(0);
  } else {
    console.error(`Unknown option: ${a}`);
    process.exit(2);
  }
}
if (opt.reclassify) {
  // offline: no fetching, no entries read
  const file = path.resolve(process.cwd(), opt.reclassify);
  if (!fs.existsSync(file)) {
    console.error(`No such file: ${opt.reclassify}`);
    process.exit(2);
  }
  const { json, changed } = reclassify(JSON.parse(fs.readFileSync(file, 'utf8')));
  const today = new Date().toISOString().slice(0, 10);
  json.reclassified = { date: today, tool: 'tools/quote-check/check.mjs --reclassify', changed };
  const md = renderReport(json, {
    reclassifiedNote: `Reclassified on ${today} with \`npm run quotes -- --reclassify\` (no new fetching): ${changed} result(s) changed by the current rules – a quote checked only against an abstract (the url gave no full text) is **inconclusive**, not **not found**, unless the source is marked \`abstractOnly: true\`. The fallbacks to Europe PMC and MDPI full text were not tried for this file; run the check again to use them.`,
  });
  fs.writeFileSync(file, JSON.stringify(json, null, 2));
  fs.writeFileSync(file.replace(/\.json$/, '') + '.md', md);
  console.log(summaryLine(json));
  console.log(`Reclassified ${changed} result(s). Rewrote ${path.relative(root, file)} and ${path.relative(root, file.replace(/\.json$/, ''))}.md`);
  process.exit(0);
}
if (!opt.papers) {
  const env = process.env.QUOTE_CHECK_PAPERS;
  const def = path.join(os.homedir(), 'papers');
  opt.papers = env || (fs.existsSync(def) ? def : null);
}

// ---------- HTML / XML / PDF to text ----------
let pdftotextOk = null;
async function pdfToText(buf) {
  if (pdftotextOk === null) pdftotextOk = spawnSync('pdftotext', ['-v']).error ? false : true;
  if (pdftotextOk) {
    const tmp = path.join(os.tmpdir(), `qc-${process.pid}-${crypto.randomBytes(4).toString('hex')}.pdf`);
    fs.writeFileSync(tmp, buf);
    try {
      const r = spawnSync('pdftotext', ['-enc', 'UTF-8', tmp, '-'], { maxBuffer: 200 * 1024 * 1024 });
      if (r.status === 0) return r.stdout.toString('utf8');
    } finally {
      fs.rmSync(tmp, { force: true });
    }
  }
  const { default: pdfParse } = await import('pdf-parse/lib/pdf-parse.js');
  const r = await pdfParse(buf);
  return r.text;
}

// ---------- fetching ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const hash = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 24);
fs.mkdirSync(CACHE, { recursive: true });

function readCache(url) {
  if (opt.refresh) return null;
  const f = path.join(CACHE, hash(url) + '.json');
  if (!fs.existsSync(f)) return null;
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return null; }
}
function writeCache(url, rec) {
  fs.writeFileSync(path.join(CACHE, hash(url) + '.json'), JSON.stringify({ url, ...rec }));
}

const blockedHosts = new Map(); // host -> reason, to stop retrying a host refused by a proxy

function classifyError(e) {
  let msg = '';
  for (let c = e, d = 0; c && d < 6; c = c.cause, d++) msg += ` ${c.name || ''} ${c.message || ''} ${c.code || ''}`;
  if (e?.name === 'TimeoutError' || /timeout|timed out|UND_ERR_.*TIMEOUT/i.test(msg)) return { reason: 'timeout (20 s)' };
  const proxy = msg.match(/Proxy response \((\d+)\)/i);
  if (proxy) return { reason: `blocked from this environment (proxy refused CONNECT, ${proxy[1]})`, blocked: true };
  if (/ENOTFOUND|EAI_AGAIN/i.test(msg)) return { reason: 'DNS lookup failed' };
  if (/ECONNREFUSED/i.test(msg)) return { reason: 'connection refused' };
  if (/ECONNRESET|socket hang up/i.test(msg)) return { reason: 'connection reset' };
  if (/certificate|SSL|TLS/i.test(msg)) return { reason: 'TLS error' };
  if (/redirect/i.test(msg)) return { reason: 'too many redirects' };
  return { reason: `network error (${msg.trim().slice(0, 80)})` };
}

function looksLikeCaptcha(text, status) {
  return /captcha|verify you are (a )?human|are you a robot|just a moment\.\.\.|attention required|cf-browser-verification|challenge-platform|ddos protection by|unusual traffic/i.test(
    text.slice(0, 20000),
  ) && (status === 403 || status === 429 || status === 503 || text.length < 30000);
}

function statusReason(status, text) {
  if (looksLikeCaptcha(text || '', status)) return `HTTP ${status}, captcha or bot check`;
  if (status === 401 || status === 402) return `HTTP ${status}, paywall or login required`;
  if (status === 403) return 'HTTP 403 forbidden';
  if (status === 404 || status === 410) return `HTTP ${status}, page not found`;
  if (status === 429) return 'HTTP 429, rate limited';
  if (status >= 500) return `HTTP ${status}, server error`;
  return `HTTP ${status}`;
}

const PAYWALL_HINT = /access through your institution|purchase (this )?article|buy (this )?article|get access|subscribe to (read|access)|log ?in to (view|read|access)|rent this article|full text access/i;

/**
 * Fetch a URL and return { ok, text, kind, finalUrl, status, fetchedAt, reason, cached, hint, abstractPage }.
 * fo.raw: keep the body as is (JSON APIs); fo.as === 'jats': JATS XML; fo.browserAccept: browser Accept header.
 */
async function fetchText(url, fo = {}) {
  const c = readCache(url);
  if (c) {
    // older cache records have no abstractPage flag: decide from the text alone
    if (c.kind === 'html' && c.abstractPage === undefined) c.abstractPage = isAbstractPage(null, c.text, c.hint) || undefined;
    return { ...c, ok: true, cached: true };
  }
  const host = new URL(url).host;
  if (blockedHosts.has(host)) return { ok: false, reason: blockedHosts.get(host) };
  let res;
  try {
    res = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        'User-Agent': UA,
        Accept: fo.browserAccept
          ? BROWSER_ACCEPT
          : fo.raw
            ? 'application/json,*/*;q=0.5'
            : 'text/html,application/xhtml+xml,application/pdf,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5',
        'Accept-Language': fo.browserAccept ? 'en-GB,en;q=0.9' : 'en,*;q=0.5',
      },
    });
  } catch (e) {
    const r = classifyError(e);
    if (r.blocked) blockedHosts.set(host, r.reason);
    return { ok: false, reason: r.reason };
  }
  let buf;
  try {
    const ab = await res.arrayBuffer();
    buf = Buffer.from(ab.byteLength > MAX_BYTES ? ab.slice(0, MAX_BYTES) : ab);
  } catch (e) {
    return { ok: false, reason: classifyError(e).reason, status: res.status };
  }
  const ctype = (res.headers.get('content-type') || '').toLowerCase();
  const isPdf = ctype.includes('pdf') || buf.subarray(0, 5).toString('latin1') === '%PDF-';
  if (!res.ok) {
    const t = isPdf ? '' : buf.toString('utf8');
    return { ok: false, status: res.status, reason: statusReason(res.status, t) };
  }
  let text, kind, raw;
  try {
    if (fo.raw && !isPdf) {
      kind = 'raw';
      text = buf.toString('utf8');
      const rec = { finalUrl: res.url, status: res.status, kind, fetchedAt: new Date().toISOString(), text };
      writeCache(url, rec);
      return { ...rec, ok: true, cached: false };
    }
    if (isPdf) {
      kind = 'pdf';
      text = await pdfToText(buf);
    } else {
      raw = buf.toString('utf8');
      if (looksLikeCaptcha(raw, res.status)) return { ok: false, status: res.status, reason: `HTTP ${res.status}, captcha or bot check` };
      if (fo.as === 'jats') {
        kind = 'xml';
        text = jatsToText(raw);
      } else {
        kind = /html|xml/.test(ctype) || /^\s*</.test(raw) ? 'html' : 'text';
        text = kind === 'html' ? htmlToText(raw) : raw;
      }
    }
  } catch (e) {
    return { ok: false, status: res.status, reason: `could not extract text (${(e.message || '').slice(0, 60)})` };
  }
  if (!text || text.replace(/\s/g, '').length < 200) {
    return { ok: false, status: res.status, reason: `page has almost no text (${kind}; probably needs JavaScript)` };
  }
  const hint = kind === 'html' && PAYWALL_HINT.test(text) ? 'page shows a paywall or login prompt; only part of the text may be open' : undefined;
  const rec = {
    finalUrl: res.url,
    status: res.status,
    kind,
    fetchedAt: new Date().toISOString(),
    hint,
    abstractPage: kind === 'html' && isAbstractPage(raw, text, hint) ? true : undefined,
    text,
  };
  writeCache(url, rec);
  return { ...rec, ok: true, cached: false };
}

/** Fetch many URLs: hosts in parallel (capped), one request per host at a time, 1 s apart. */
async function fetchAll(urls, label, fo = {}) {
  const byHost = new Map();
  for (const u of new Set(urls)) {
    let h;
    try { h = new URL(u).host; } catch { continue; }
    if (!byHost.has(h)) byHost.set(h, []);
    byHost.get(h).push(u);
  }
  const out = new Map();
  const hosts = [...byHost.keys()];
  let done = 0;
  const total = [...byHost.values()].reduce((a, b) => a + b.length, 0);
  async function worker() {
    while (hosts.length) {
      const h = hosts.shift();
      let last = 0;
      for (const u of byHost.get(h)) {
        const wait = last + HOST_DELAY_MS - Date.now();
        const c = readCache(u);
        if (!c && wait > 0 && !blockedHosts.has(h)) await sleep(wait);
        const r = await fetchText(u, fo);
        if (!r.cached) last = Date.now();
        out.set(u, r);
        done++;
        if (process.stderr.isTTY) process.stderr.write(`\r${label}: ${done}/${total}   `);
      }
    }
  }
  await Promise.all(Array.from({ length: MAX_HOSTS_PARALLEL }, worker));
  if (process.stderr.isTTY) process.stderr.write('\n');
  return out;
}

// ---------- local copies ----------
// A folder of copies supplied by the editor (.txt extractions and/or .pdf). Never copied into the repo.
// Where a .pdf sits next to the .txt, its text is extracted again in reading order (a -layout .txt
// interleaves the columns of two-column papers) and both texts are tried.

/**
 * Undo a `pdftotext -layout` extraction: split each page into its text columns (by the start positions of
 * segments separated by 3+ spaces) and read the columns one after the other.
 */
function deLayout(text) {
  return text
    .split('\f')
    .map((page) => {
      const lines = page.split('\n');
      const segs = [];
      lines.forEach((line, li) => {
        for (const m of line.matchAll(/\S(?:.*?\S)?(?=\s{3,}|\s*$)/g)) segs.push({ li, start: m.index, text: m[0] });
      });
      const nonEmpty = lines.filter((l) => l.trim()).length;
      const hist = new Map();
      for (const g of segs) hist.set(g.start, (hist.get(g.start) || 0) + 1);
      const min = Math.max(3, Math.round(nonEmpty * 0.1));
      const starts = [...hist].filter(([, c]) => c >= min).map(([p]) => p).sort((a, b) => a - b);
      const bounds = [];
      for (const p of starts) if (!bounds.length || p - bounds[bounds.length - 1] > 8) bounds.push(p);
      if (bounds.length < 2) return page;
      bounds[0] = 0;
      const cols = bounds.map(() => []);
      for (const g of segs) {
        let c = 0;
        for (let i = 0; i < bounds.length; i++) if (bounds[i] <= g.start + 2) c = i;
        cols[c].push(g.text);
      }
      return cols.map((c) => c.join('\n')).join('\n\n');
    })
    .join('\n\f\n');
}

async function loadLocalCopies(dir) {
  if (!dir || !fs.existsSync(dir)) return [];
  const byStem = new Map();
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else {
        const m = e.name.match(/^(.*)\.(txt|pdf)$/i);
        if (!m) continue;
        const stem = path.join(d, m[1]);
        if (!byStem.has(stem)) byStem.set(stem, {});
        byStem.get(stem)[m[2].toLowerCase()] = p;
      }
    }
  };
  walk(dir);
  const seen = new Set();
  const out = [];
  for (const [stem, f] of [...byStem].sort()) {
    const texts = [];
    if (f.txt) {
      const t = fs.readFileSync(f.txt, 'utf8');
      texts.push(t);
      if ((t.match(/\S {3,}\S/g) || []).length > 50) texts.push(deLayout(t)); // a -layout extraction
    }
    if (f.pdf) {
      // extracted in memory only: local copies are never written into the repository (not even the cache)
      try {
        texts.push(await pdfToText(fs.readFileSync(f.pdf)));
      } catch {
        /* unreadable PDF: the .txt alone is used */
      }
    }
    if (!texts.length) continue;
    const id = hash(texts[0]);
    if (seen.has(id)) continue; // identical copies in two folders
    seen.add(id);
    const main = texts[texts.length - 1];
    const lower = main.toLowerCase();
    out.push({
      file: f.pdf || f.txt,
      texts,
      docs: null,
      lower,
      head: main.slice(0, 8000).toLowerCase(),
      headDoc: prepareDoc(main.slice(0, 5000)),
    });
  }
  return out;
}

const isbnDigits = (s) => (String(s).match(/97[89][\d -]{10,16}\d/g) || []).map((x) => x.replace(/\D/g, ''));

/**
 * Match a source to local copies:
 *  - DOI printed on the first pages, or at least three times (page footers), not just in a reference list;
 *  - ISBN given in the source title, printed in the copy;
 *  - title: at least 85% of the title's words, in order, within one passage of the copy's first pages.
 */
function findLocal(locals, src) {
  const hits = [];
  const doi = src.doi ? cleanDoi(src.doi) : null;
  const isbns = isbnDigits(src.title || '');
  const title = String(src.title || '').replace(/\([^)]*\)|\[[^\]]*\]/g, ' ');
  const titleN = tokenise(title).canon.length;
  for (const L of locals) {
    if (doi) {
      // on the first pages, or printed at least 3 times (page footers); a reference list may cite a DOI twice
      if (L.head.includes(doi) || L.lower.split(doi).length - 1 >= 3) {
        hits.push({ L, how: 'DOI' });
        continue;
      }
    }
    if (isbns.length && isbns.some((i) => L.lower.replace(/[\s-]/g, '').includes(i))) {
      hits.push({ L, how: 'ISBN' });
      continue;
    }
    if (titleN >= 3) {
      const tt = tokenise(title).canon;
      const ex = exactMatch(L.headDoc, title);
      let ordered = 1;
      if (!ex) {
        const fz = fuzzyMatch(L.headDoc, title);
        ordered = lcsLen(tt, L.headDoc.canon.slice(fz.start, Math.max(fz.end, fz.start + Math.round(tt.length * 1.5)))) / tt.length;
      }
      if (ex || ordered >= 0.85)
        hits.push({ L, how: ex ? 'title' : `title, ${Math.round(ordered * 100)}% of words` });
    }
  }
  return hits;
}

// ---------- entries ----------
function readEntries() {
  let files = fs.readdirSync(ENTRIES).filter((f) => f.endsWith('.md')).sort();
  if (opt.entry) {
    files = files.filter((f) => f === `${opt.entry}.md`);
    if (!files.length) {
      console.error(`No entry src/content/entries/${opt.entry}.md`);
      process.exit(2);
    }
  }
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(ENTRIES, f), 'utf8');
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const fm = m ? yaml.load(m[1]) : {};
    return { slug: f.replace(/\.md$/, ''), title: fm.title || f, sources: Array.isArray(fm.sources) ? fm.sources : [] };
  });
}


// ---------- main ----------
const today = new Date().toISOString().slice(0, 10);
const entries = readEntries();
const items = [];
for (const e of entries)
  for (const s of e.sources) {
    if (!s) continue;
    // The main `quote` and any further `quotes: [{ text, for }]` are checked one by one (id s3, s3·2, s3·3 …).
    const all = [];
    if (typeof s.quote === 'string' && s.quote.trim()) all.push(s.quote.trim());
    if (Array.isArray(s.quotes)) for (const q of s.quotes) if (q && typeof q.text === 'string' && q.text.trim()) all.push(q.text.trim());
    all.forEach((quote, k) =>
      items.push({
        entry: e.slug,
        id: k === 0 ? s.id : `${s.id}·${k + 1}`,
        title: s.title,
        url: s.url || (s.doi ? doiUrl(s.doi) : null),
        doi: s.doi || null,
        abstractOnly: s.abstractOnly === true,
        quote,
        src: s,
      }));
  }

console.error(`Quote check: ${items.length} quotes in ${entries.length} entr${entries.length === 1 ? 'y' : 'ies'}.`);

const locals = opt.local ? await loadLocalCopies(opt.papers) : [];
await checkItems(items, { fetchAll, locals, findLocal, localRoot: opt.papers || '' });

// ---------- report ----------
const json = {
  date: today,
  tool: 'tools/quote-check/check.mjs',
  userAgent: UA,
  fuzzyThreshold: FUZZY_MIN,
  entry: opt.entry,
  totals: null,
  items: items.map(toJsonItem),
};
json.totals = { quotes: items.length, ...tally(json.items), blockedFromThisEnvironment: blockedCount(json.items) };

fs.mkdirSync(OUTDIR, { recursive: true });
const base = path.join(OUTDIR, `quote-check-${today}${opt.entry ? `-${opt.entry}` : ''}`);
fs.writeFileSync(base + '.md', renderReport(json, { localNote: opt.local && opt.papers ? opt.papers : '' }));
fs.writeFileSync(base + '.json', JSON.stringify(json, null, 2));

console.log(summaryLine(json));
console.log(`Report: ${path.relative(root, base)}.md (+ .json)`);
