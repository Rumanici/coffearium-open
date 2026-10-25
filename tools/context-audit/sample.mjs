#!/usr/bin/env node
// Coffearium context audit – step 1: draw a random, reproducible sample of cited statements.
//
// The quote check proves that a stored quote exists in its source. It cannot tell whether the statement that cites
// the source keeps the source's meaning: the authors' own result or one they cite, a rejected hypothesis, one cultivar
// under drought, a lab model. The context audit checks exactly that on a random sample, and the result is published
// on /how-we-verify/ as a measured rate.
//
// Usage:  npm run audit:sample                      40 statements, seed = today's date
//         npm run audit:sample -- --n 60 --seed 2026-10-24
//
// Writes docs/verification/context-audit-<seed>.md (worksheet) and .json (the sample).
// Step 2 is done by a pass that did not write or verify the entries (docs/CONTEXT_AUDIT.md): it reads each source
// around the cited passage and fills in a verdict. Step 3: `npm run audit:tally -- <json>` writes src/data/context-audit.json.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const args = process.argv.slice(2);
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const N = +arg('--n', 40);
const SEED = arg('--seed', new Date().toISOString().slice(0, 10));
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const DIR = path.join(ROOT, 'src/content/entries');

// Small seeded generator (mulberry32) so a sample can be drawn again exactly.
let h = 1779033703 ^ SEED.length;
for (const c of SEED) { h = Math.imul(h ^ c.charCodeAt(0), 3432918353); h = (h << 13) | (h >>> 19); }
let st = h >>> 0;
const rnd = () => { st += 0x6D2B79F5; let t = st; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

const strip = (s) => s.replace(/<sup>.*?<\/sup>/g, '').replace(/<[^>]+>/g, '').replace(/\*\*?|_/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
const pool = [];
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).sort()) {
  const raw = fs.readFileSync(path.join(DIR, f), 'utf8');
  const [, fm, body] = raw.split(/^---$/m);
  const d = yaml.load(fm);
  if (d.status === 'draft') continue;
  const src = Object.fromEntries((d.sources || []).map((s) => [s.id, s]));
  // Body text only: no tables, figures, legends or headings; one cited sentence at a time.
  const text = body.split('\n').filter((l) => l && !/^\s*(\||#|<figure|<\/figure|<div|<\/div|<ol|<\/ol|<li|<p class="(fig|meta)|<figcaption|- \*\*)/.test(l)).join(' ');
  const sentences = text.match(/[^.!?]+?[.!?]?(<sup>(?:.*?)<\/sup>)/g) || [];
  for (const s of sentences) {
    const ids = [...s.matchAll(/#src-(s\d+)/g)].map((m) => m[1]);
    const plain = strip(s);
    if (!ids.length || plain.length < 40) continue;
    pool.push({ entry: f.replace(/\.md$/, ''), statement: plain, sources: [...new Set(ids)].map((id) => ({ id, title: src[id]?.title, url: src[id]?.url ?? (src[id]?.doi ? `https://doi.org/${src[id].doi}` : undefined), quote: src[id]?.quote })) });
  }
}
const pick = [];
const used = new Set();
while (pick.length < Math.min(N, pool.length)) { const i = Math.floor(rnd() * pool.length); if (!used.has(i)) { used.add(i); pick.push(pool[i]); } }
pick.forEach((p, i) => { p.n = i + 1; p.verdict = null; p.note = ''; });

const out = path.join(ROOT, 'docs/verification', `context-audit-${SEED}`);
fs.writeFileSync(out + '.json', JSON.stringify({ seed: SEED, poolSize: pool.length, n: pick.length, items: pick }, null, 2));
const md = [`# Context audit ${SEED}`, '', `Random sample of ${pick.length} cited statements from ${pool.length} in verified entries (seed ${SEED}).`, '',
  'Verdicts: **ok** (the source, read in context, supports the statement as written) · **narrower** (true, but the source holds for narrower conditions than the statement says) · **misread** (the passage is a cited result, a hypothesis, an outlier or otherwise does not support the statement) · **unreadable** (the source could not be read in full; not counted).', '',
  ...pick.flatMap((p) => [`## ${p.n}. ${p.entry}`, '', `> ${p.statement}`, '', ...p.sources.map((s) => `- ${s.id}: ${s.title ?? '?'}${s.url ? ` – ${s.url}` : ''}`), '', 'Verdict: · Note:', ''])].join('\n');
fs.writeFileSync(out + '.md', md);
console.log(`sampled ${pick.length} of ${pool.length} statements → ${path.relative(ROOT, out)}.md / .json`);
