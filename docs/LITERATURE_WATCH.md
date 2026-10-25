# Literature watch (since 24 Oct 2026)

An entry is faithful to the sources it lists. The literature watch keeps that list current, so that a major newer study does not stay missing.

## Round (quarterly; health, safety and legal entries first)
1. `npm run lit:due` lists the entries whose literature was last searched more than 90 days ago (`literatureSearched`, else `added`), oldest first.
2. For each entry, search for work published since that date: systematic reviews and meta-analyses first, then large or frequently cited primary studies, new standards, regulations and official statistics on the entry's subject. Use the open indexes (Crossref, Europe PMC, Semantic Scholar, publisher pages); never work around paywalls.
3. For each find, decide:
   - **changes a statement or a number** → update the entry through the normal writing and verification rules (tiers, number rule, quote, scope), with a `corrections:` line;
   - **adds something worth saying** → add it the same way, or put it on the entry's to-do list in the round report;
   - **nothing new** → no change.
4. Set `literatureSearched:` to the day of the search, whether or not anything changed, and `updated:` only if the content changed.
5. Reader suggestions marked *Missing or newer source* go into the same round.

Report each round in `docs/verification/lit-watch-<date>.md`: entries searched, finds, decisions.
