#!/usr/bin/env node
// Coffearium context audit – step 3: count the verdicts in a filled sample and write src/data/context-audit.json,
// which /how-we-verify/ shows. Earlier rounds are kept, newest first.
// Usage: npm run audit:tally -- docs/verification/context-audit-<seed>.json
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const file = process.argv[2];
if (!file) { console.error('usage: npm run audit:tally -- <context-audit-….json>'); process.exit(1); }
const a = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
const c = { ok: 0, narrower: 0, misread: 0, unreadable: 0 };
for (const it of a.items) { if (!(it.verdict in c)) { console.error(`item ${it.n}: no verdict`); process.exit(1); } c[it.verdict]++; }
const judged = c.ok + c.narrower + c.misread;
const round = { date: a.seed, sampled: a.n, pool: a.poolSize, judged, ...c, corrected: a.items.filter((i) => i.verdict !== 'ok' && i.verdict !== 'unreadable' && i.fixed).length };
const out = path.join(ROOT, 'src/data/context-audit.json');
const prev = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, 'utf8')) : { rounds: [] };
prev.rounds = [round, ...prev.rounds.filter((r) => r.date !== round.date)];
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(prev, null, 2) + '\n');
console.log(round);
