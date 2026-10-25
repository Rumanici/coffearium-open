#!/usr/bin/env node
// Coffearium literature watch: lists entries whose literature was last searched more than N days ago
// (`literatureSearched`, else `added`), oldest first, so a watch round knows where to start.
// Health, safety and legal entries come first at equal age.
// Usage: npm run lit:due                 entries older than 90 days
//        npm run lit:due -- --days 30 --limit 20
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
const args = process.argv.slice(2);
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const DAYS = +arg('--days', 90), LIMIT = +arg('--limit', 1000);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const DIR = path.join(ROOT, 'src/content/entries');
const SENSITIVE = /health|safety|ochratoxin|contaminant|caffeine|acrylamide|digestion|regulation|eudr|legal/i;
const now = Date.now();
const rows = [];
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  const d = yaml.load(fs.readFileSync(path.join(DIR, f), 'utf8').split(/^---$/m)[1]);
  if (d.status === 'draft') continue;
  const when = d.literatureSearched ?? d.added;
  const t = when ? new Date(when).getTime() : 0;
  const age = when ? Math.floor((now - t) / 864e5) : Infinity;
  if (age < DAYS) continue;
  rows.push({ slug: f.slice(0, -3), title: d.title, searched: when ? new Date(when).toISOString().slice(0, 10) : 'never recorded', age, sensitive: SENSITIVE.test(f + ' ' + d.title) });
}
rows.sort((a, b) => b.age - a.age || b.sensitive - a.sensitive);
for (const r of rows.slice(0, LIMIT)) console.log(`${r.searched}  ${r.sensitive ? '!' : ' '} ${r.slug}  (${r.title})`);
console.log(`\n${rows.length} entries due (older than ${DAYS} days or never recorded; ! = health, safety or legal).`);
