#!/usr/bin/env node
// Coffearium consistency scan: entries are checked one at a time, so the same quantity can drift between pages.
// For each canonical quantity in facts.yaml, find every sentence or table row about it in every entry and report
// values that are not among the known values (each known value has a cited source). Warns; does not fail the build.
// Usage: npm run consistency            report → docs/verification/consistency-<date>.md
//        npm run consistency -- --fail  exit 1 when an unknown value is found
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const facts = yaml.load(fs.readFileSync(path.join(ROOT, 'tools/consistency/facts.yaml'), 'utf8'));
const DIR = path.join(ROOT, 'src/content/entries');
const norm = (v) => v.replace(/\s+/g, ' ').replace(/ ?– ?/g, '–').trim();
const plain = (s) => s.replace(/<sup>.*?<\/sup>/g, '').replace(/<[^>]+>/g, '').replace(/[*_]/g, '').replace(/&nbsp;| /g, ' ');
const hits = Object.fromEntries(facts.map((f) => [f.id, []]));
for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).sort()) {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const lines = raw.split('\n');
  lines.forEach((line, i) => {
    const units = /^\s*\|/.test(line) ? [line] : plain(line).split(/(?<=[.;])\s+(?=[A-Z(])/);
    for (const u of units) {
      const t = plain(u);
      for (const f of facts) {
        if (!new RegExp(f.subject, 'i').test(t)) continue;
        for (const m of t.matchAll(new RegExp(f.value, 'gi'))) {
          const v = norm(m[1]);
          hits[f.id].push({ entry: file.slice(0, -3), line: i + 1, value: v, known: (f.known || []).map(norm).includes(v), text: t.trim().slice(0, 220) });
        }
      }
    }
  });
}
const today = new Date().toISOString().slice(0, 10);
let unknown = 0;
const md = [`# Consistency scan ${today}`, '', 'Values of canonical quantities across all entries (tools/consistency/facts.yaml). **New** = a value not among the known values: check it against its source, and if it is right, add it to `known` with its source and make sure the entries name which source gives which value.', ''];
for (const f of facts) {
  const h = hits[f.id], vals = [...new Set(h.map((x) => x.value))];
  const bad = h.filter((x) => !x.known); unknown += bad.length;
  md.push(`## ${f.label}`, '', `Known: ${(f.known || []).join(' · ')}${f.note ? ` – ${f.note}` : ''}`, '', `${h.length} mentions in ${new Set(h.map((x) => x.entry)).size} entries; values found: ${vals.join(' · ') || 'none'}`, '');
  for (const x of bad) md.push(`- **New: ${x.value}** – ${x.entry}:${x.line} – “${x.text}”`);
  md.push('');
}
const out = path.join(ROOT, 'docs/verification', `consistency-${today}.md`);
fs.writeFileSync(out, md.join('\n'));
console.log(`consistency: ${facts.length} quantities, ${unknown} value(s) to check → ${path.relative(ROOT, out)}`);
if (unknown && process.argv.includes('--fail')) process.exit(1);
