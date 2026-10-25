# Context audit (since 24 Oct 2026)

The quote check proves that a stored quote exists in its source. The context audit checks what the quote check cannot: whether a cited statement keeps the meaning the source gives it in context.

## Round
1. `npm run audit:sample -- --n 40 --seed <YYYY-MM-DD>` draws a reproducible random sample of cited sentences from verified entries. Output: `docs/verification/context-audit-<seed>.md` and `.json`.
2. A pass that neither wrote nor verified the entries judges each item (brief below) and fills `verdict`, `note` and, where the entry was corrected, `fixed: true` in the `.json`.
3. Corrections go into the entries as usual (one `corrections:` line each).
4. `npm run audit:tally -- docs/verification/context-audit-<seed>.json` writes `src/data/context-audit.json`. How we verify shows the latest round and the earlier ones.

Run one round per month, and after any large wave of new entries.

## Brief for the judging pass
For each item, open the cited source and read the passage the statement rests on **with its surroundings** (the paragraph, the table and its notes, the methods for the conditions).
- **ok**: the source supports the statement as written.
- **narrower**: the statement is true, but the source holds for narrower conditions than the statement gives (one cultivar, one site, a lab model, drought stress, one year) and the statement does not say so.
- **misread**: the passage is a result the authors cite from others while the statement presents it as theirs (where that matters), a hypothesis they reject, an outlier, a different quantity or basis, or otherwise does not support the statement.
- **unreadable**: the source cannot be read in full (paywall, offline). Not counted in the rate.

Write one short note per item (what the source says, in your words). Never invent: if unsure, say so. Do not work around paywalls or captchas.

## Scope fields
Verifiers fill `scope` on each source they check (see `docs/VERIFY_BRIEF.md`, S4): `claim` (finding, cited, hypothesis, guidance, data, definition, description) and `context` (species or cultivar, lab / field / survey / model, place, number of samples). Entries show it under the source.
