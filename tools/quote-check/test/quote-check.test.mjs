// Offline tests for the quote check (no network): node --test tools/quote-check/test/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  htmlToText, jatsToText, isAbstractPage, prepareDoc, matchQuote, parseEpmcSearch, pmcIdFromUrl, mdpiVariants,
  epmcSearchUrl, epmcFullTextUrl, crossrefUrl, checkItems, toJsonItem, reclassify, renderReport,
} from '../lib.mjs';

const FX = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures');
const fx = (f) => fs.readFileSync(path.join(FX, f), 'utf8');
const PAYWALL = /access this article|buy article|log in via an institution/i;

/**
 * A fake fetchAll that serves fixtures the way check.mjs's fetchText would return them.
 * routes: url -> { html | xml | pdfText | raw } or { fail: reason }. Unknown URLs: HTTP 403.
 * Records every call (url, label, opts) in `calls`.
 */
function fakeFetch(routes) {
  const calls = [];
  async function fetchAll(urls, label, opts = {}) {
    const out = new Map();
    for (const u of urls) {
      calls.push({ url: u, label, opts });
      const r = routes[u];
      if (!r || r.fail) {
        out.set(u, { ok: false, reason: r?.fail || 'HTTP 403 forbidden' });
        continue;
      }
      if (r.raw != null) out.set(u, { ok: true, kind: 'raw', text: r.raw });
      else if (r.xml != null) out.set(u, { ok: true, kind: 'xml', text: jatsToText(r.xml) });
      else if (r.pdfText != null) out.set(u, { ok: true, kind: 'pdf', text: r.pdfText });
      else {
        const text = htmlToText(r.html);
        const hint = PAYWALL.test(text) ? 'page shows a paywall or login prompt; only part of the text may be open' : undefined;
        out.set(u, { ok: true, kind: 'html', text, hint, abstractPage: isAbstractPage(r.html, text, hint) || undefined });
      }
    }
    return out;
  }
  return { fetchAll, calls };
}

const item = (o) => ({ entry: 'test', id: 's1', title: 'T', abstractOnly: false, ...o, url: o.url ?? (o.doi ? 'https://doi.org/' + o.doi : null) });

// ---------- text extraction ----------
test('JATS: superscript citation clusters dropped, reference list dropped, entities decoded', () => {
  const t = jatsToText(fx('epmc-fulltext.xml'));
  const d = prepareDoc(t);
  assert.equal(matchQuote(d, 'Leuconostoc and Lactobacillus species increased in all tanks.').result, 'found');
  assert.equal(matchQuote(d, 'The pH of the fermentation water fell from 5.8 to 4.2 within 36 h').result, 'found');
  assert.equal(matchQuote(d, 'Wet processing removes the mucilage by fermentation in tanks.').result, 'found');
  assert.equal(matchQuote(d, 'the coffee cherry has two seeds that face each other').result, 'not-found');
  const n = d.orig.join(' ');
  assert.ok(!/increased7|\[1/.test(n), 'no citation numbers left in the text: ' + n);
});

test('abstract-only page detection', () => {
  const abs = fx('abstract-page.html');
  const full = fx('fulltext-page.html');
  const news = '<html><body><h1>The complexity of coffee</h1><p>' + 'Coffee is a complex drink. '.repeat(80) + '</p></body></html>';
  assert.equal(isAbstractPage(abs, htmlToText(abs), 'paywall'), true);
  assert.equal(isAbstractPage(null, htmlToText(abs), undefined), true, 'older cache records: heading line alone');
  assert.equal(isAbstractPage(full, htmlToText(full), undefined), false, 'full text has section headings');
  assert.equal(isAbstractPage(news, htmlToText(news), undefined), false, 'no abstract marker');
});

// ---------- URL helpers ----------
test('Europe PMC search parsing', () => {
  assert.deepEqual(parseEpmcSearch(fx('epmc-search-oa.json'), '10.9999/test.oa'), { pmcid: 'PMC1234567' });
  assert.match(parseEpmcSearch(fx('epmc-search-closed.json'), '10.9999/test.closed').error, /not open access/);
  assert.match(parseEpmcSearch(fx('epmc-search-empty.json'), '10.9999/none').error, /not indexed/);
  assert.match(parseEpmcSearch('<html>', '10.9999/x').error, /unreadable/);
  assert.equal(
    epmcSearchUrl('https://doi.org/10.1016/S0308-8146(00)00153-X'),
    'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fs0308-8146(00)00153-x%22&format=json&resultType=core',
  );
  assert.equal(epmcFullTextUrl('pmc123'), 'https://www.ebi.ac.uk/europepmc/webservices/rest/PMC123/fullTextXML');
});

test('PMC and MDPI URL helpers', () => {
  assert.equal(pmcIdFromUrl('https://pmc.ncbi.nlm.nih.gov/articles/PMC7879952/'), 'PMC7879952');
  assert.equal(pmcIdFromUrl('https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11002029'), 'PMC11002029');
  assert.equal(pmcIdFromUrl('https://pubmed.ncbi.nlm.nih.gov/17439234/'), null);
  assert.equal(pmcIdFromUrl('https://example.org/PMC123'), null);
  assert.deepEqual(mdpiVariants('https://www.mdpi.com/2306-5710/6/3/44'), {
    htm: 'https://www.mdpi.com/2306-5710/6/3/44/htm',
    pdf: 'https://www.mdpi.com/2306-5710/6/3/44/pdf',
  });
  assert.equal(mdpiVariants('https://www.mdpi.com/2306-5710/6/3/44/htm').pdf, 'https://www.mdpi.com/2306-5710/6/3/44/pdf');
  assert.equal(mdpiVariants('https://www.mdpi.com/journal/foods'), null);
});

// ---------- pipeline ----------
test('DOI, page 403: full text via Europe PMC finds the quote (before Crossref is asked)', async () => {
  const doi = '10.9999/test.oa';
  const { fetchAll, calls } = fakeFetch({
    [epmcSearchUrl(doi)]: { raw: fx('epmc-search-oa.json') },
    [epmcFullTextUrl('PMC1234567')]: { xml: fx('epmc-fulltext.xml') },
  });
  const [it] = await checkItems([item({ doi, quote: 'Leuconostoc and Lactobacillus species increased in all tanks' })], { fetchAll });
  assert.equal(it.status, 'found');
  assert.equal(it.matchedIn, 'full text via Europe PMC (PMC1234567)');
  assert.equal(it.checkedText, 'full text');
  assert.ok(!calls.some((c) => c.url === crossrefUrl(doi)), 'Crossref not needed');
  assert.deepEqual(calls.find((c) => c.url === epmcSearchUrl(doi)).opts, { raw: true });
});

test('DOI, page 403, not open access, quote not in Crossref abstract: inconclusive', async () => {
  const doi = '10.9999/test.closed';
  const { fetchAll } = fakeFetch({
    [epmcSearchUrl(doi)]: { raw: fx('epmc-search-closed.json') },
    [crossrefUrl(doi)]: { raw: fx('crossref-abstract.json') },
  });
  const [it] = await checkItems([item({ doi, quote: 'The first crack began at a bean temperature of 196 °C in all batches.' })], { fetchAll });
  assert.equal(it.status, 'inconclusive');
  assert.equal(it.matchedIn, 'Crossref abstract');
  assert.equal(it.checkedText, 'abstract');
  assert.ok(it.tried.some((t) => /not open access/.test(t)));
  const j = toJsonItem(it);
  assert.equal(j.status, 'inconclusive');
  assert.equal(j.urlResult, 'unreachable');
});

test('same, but the source is marked abstractOnly: a real not found', async () => {
  const doi = '10.9999/test.closed';
  const { fetchAll } = fakeFetch({
    [epmcSearchUrl(doi)]: { raw: fx('epmc-search-closed.json') },
    [crossrefUrl(doi)]: { raw: fx('crossref-abstract.json') },
  });
  const [it] = await checkItems([item({ doi, abstractOnly: true, quote: 'The first crack began at a bean temperature of 196 °C in all batches.' })], { fetchAll });
  assert.equal(it.status, 'not-found');
});

test('quote that is in the Crossref abstract: found', async () => {
  const doi = '10.9999/test.closed';
  const { fetchAll } = fakeFetch({ [crossrefUrl(doi)]: { raw: fx('crossref-abstract.json') } });
  const [it] = await checkItems([item({ doi, quote: 'weight loss followed first-order kinetics' })], { fetchAll });
  assert.equal(it.status, 'found');
  assert.equal(it.matchedIn, 'Crossref abstract');
});

test('no Crossref abstract and nothing else: unreachable', async () => {
  const doi = '10.9999/test.noabs';
  const { fetchAll } = fakeFetch({ [crossrefUrl(doi)]: { raw: fx('crossref-no-abstract.json') } });
  const [it] = await checkItems([item({ doi, quote: 'Anything at all, said in the paper.' })], { fetchAll });
  assert.equal(it.status, 'unreachable');
  assert.ok(it.tried.includes('Crossref: no abstract deposited'));
});

test('page at url that is only an abstract (paywalled landing page): inconclusive, or found if in the abstract', async () => {
  const url = 'https://link.example.org/article/10.1007/x';
  const { fetchAll } = fakeFetch({ [url]: { html: fx('abstract-page.html') } });
  const items = await checkItems(
    [
      item({ url, quote: 'The Bourbon genetic base originated from coffee trees introduced from Mocha (Yemen) to the Bourbon Island.' }),
      item({ url, id: 's2', quote: 'The Typica base showed lower diversity than the Bourbon base.' }),
    ],
    { fetchAll },
  );
  assert.equal(items[0].status, 'inconclusive');
  assert.equal(items[0].matchedIn, 'page at url (abstract only)');
  assert.equal(toJsonItem(items[0]).urlResult, 'fetched (abstract only)');
  assert.equal(items[1].status, 'found');
});

test('full-text page at url without the quote: a real not found', async () => {
  const url = 'https://journal.example.org/full';
  const { fetchAll } = fakeFetch({ [url]: { html: fx('fulltext-page.html') } });
  const [it] = await checkItems([item({ url, quote: 'Natural coffees had a lower fructose content than washed coffees in one harvest.' })], { fetchAll });
  assert.equal(it.status, 'not-found');
});

test('full-text PDF at url misses, Crossref abstract misses too: not found, checked against the PDF', async () => {
  const doi = '10.9999/test.closed';
  const url = 'https://repo.example.org/paper.pdf';
  const { fetchAll } = fakeFetch({
    [url]: { pdfText: fx('mdpi-pdf.txt') },
    [crossrefUrl(doi)]: { raw: fx('crossref-abstract.json') },
  });
  const [it] = await checkItems([item({ url, doi, quote: 'The roaster was preheated to 220 °C before every batch was charged.' })], { fetchAll });
  assert.equal(it.status, 'not-found');
  assert.equal(it.matchedIn, 'PDF at url');
});

test('MDPI 403: /htm tried first with a browser Accept header, then the /pdf', async () => {
  const url = 'https://www.mdpi.com/2306-5710/6/3/44';
  const doi = '10.3390/beverages6030044';
  const { fetchAll, calls } = fakeFetch({
    [epmcSearchUrl(doi)]: { raw: fx('epmc-search-empty.json').replace('10.9999/none', doi) },
    [url + '/htm']: { fail: 'HTTP 403 forbidden' },
    [url + '/pdf']: { pdfText: fx('mdpi-pdf.txt') },
  });
  const [it] = await checkItems([item({ url, doi, quote: 'At the finest setting the shot time exceeded 40 s and the extraction yield rose to 22.1%' })], { fetchAll });
  assert.equal(it.status, 'found');
  assert.equal(it.matchedIn, 'full text via MDPI PDF (/pdf)');
  const order = calls.map((c) => c.url);
  assert.ok(order.indexOf(epmcSearchUrl(doi)) < order.indexOf(url + '/htm'), 'Europe PMC before MDPI');
  assert.ok(order.indexOf(url + '/htm') < order.indexOf(url + '/pdf'), '/htm before /pdf');
  assert.ok(!order.includes(crossrefUrl(doi)), 'Crossref not needed once found');
  assert.equal(calls.find((c) => c.url === url + '/pdf').opts.browserAccept, true);
  assert.ok(it.tried.includes('MDPI /htm: HTTP 403 forbidden'));
});

test('PMC URL with a captcha: Europe PMC full text for that PMCID, no DOI search', async () => {
  const url = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1234567/';
  const doi = '10.9999/test.oa';
  const { fetchAll, calls } = fakeFetch({
    [url]: { fail: 'HTTP 200, captcha or bot check' },
    [epmcFullTextUrl('PMC1234567')]: { xml: fx('epmc-fulltext.xml') },
  });
  const [it] = await checkItems([item({ url, doi, quote: 'The pH of the fermentation water fell from 5.8 to 4.2 within 36 h' })], { fetchAll });
  assert.equal(it.status, 'found');
  assert.equal(it.matchedIn, 'full text via Europe PMC (PMC1234567)');
  assert.ok(!calls.some((c) => c.url === epmcSearchUrl(doi)));
  assert.equal(calls.find((c) => c.url === epmcFullTextUrl('PMC1234567')).opts.as, 'jats');
});

test('full text found elsewhere beats a close match on the page', async () => {
  const doi = '10.9999/test.oa';
  const url = 'https://journal.example.org/full';
  const { fetchAll } = fakeFetch({
    [url]: { html: '<p>' + 'Unrelated words here. '.repeat(30) + 'Leuconostoc and Lactobacillus species increased in the tanks.</p>' },
    [epmcSearchUrl(doi)]: { raw: fx('epmc-search-oa.json') },
    [epmcFullTextUrl('PMC1234567')]: { xml: fx('epmc-fulltext.xml') },
  });
  const [it] = await checkItems([item({ url, doi, quote: 'Leuconostoc and Lactobacillus species increased in all tanks' })], { fetchAll });
  assert.equal(it.status, 'found');
  assert.match(it.matchedIn, /Europe PMC/);
});

// ---------- reclassify and report ----------
test('reclassify: only abstract-only misses on unreachable pages become inconclusive', () => {
  const base = { entry: 'e', title: 't', url: 'u', quote: 'q', bestPassage: '' };
  const json = {
    date: '2026-10-13',
    entry: null,
    totals: {},
    items: [
      { ...base, sourceId: 'a', status: 'not-found', checkedAgainst: 'Crossref abstract', urlResult: 'unreachable', unreachableReason: 'HTTP 403 forbidden' },
      { ...base, sourceId: 'b', status: 'not-found', checkedAgainst: 'Crossref abstract', urlResult: 'unreachable', abstractOnly: true },
      { ...base, sourceId: 'c', status: 'not-found', checkedAgainst: 'Crossref abstract', urlResult: 'fetched' },
      { ...base, sourceId: 'd', status: 'not-found', checkedAgainst: 'PDF at url', urlResult: 'fetched' },
      { ...base, sourceId: 'e', status: 'found', checkedAgainst: 'Crossref abstract', urlResult: 'unreachable' },
      { ...base, sourceId: 'f', status: 'unreachable', checkedAgainst: null, urlResult: 'unreachable', unreachableReason: 'timeout (20 s)' },
    ],
  };
  const { json: out, changed } = reclassify(json);
  assert.equal(changed, 1);
  assert.deepEqual(out.items.map((i) => i.status), ['inconclusive', 'not-found', 'not-found', 'not-found', 'found', 'unreachable']);
  assert.equal(out.totals.inconclusive, 1);
  assert.equal(out.totals['not-found'], 3);
  assert.equal(out.totals.quotes, 6);
  const md = renderReport(out);
  assert.match(md, /\| Quotes \| Found \| Found \(local copy\) \| Close match \| Not found \| Inconclusive \(abstract only\) \|/);
  assert.match(md, /## Inconclusive – abstract only \(1\)/);
  assert.match(md, /## Not found \(3\)/);
  assert.match(md, /\| Entry \| Sources with quotes \| Found \| Found \(local copy\) \| Close \| Not found \| Inconclusive \| Unreachable \|/);
  // reclassifying twice changes nothing
  assert.equal(reclassify(out).changed, 0);
});
