# Coffearium – open data and verification tools

[Coffearium](https://coffearium.org/) is an open coffee compendium, from seed to cup. Every statement carries a source,
and every entry passes a source check that is separate from its writing. This repository publishes:

- **The entries** (`src/content/entries/`, 173 published) and the **glossary** (`src/content/glossary/terms.yaml`) –
  Markdown with YAML front matter, licensed **CC BY 4.0**.
- **The tools that check them** (`tools/`), licensed **MIT**. None of them uses AI.

It is exported from the site's repository on each release; the site code itself is not part of it.

## Entry format
Each entry is one file. The front matter holds the metadata; the body is the text. Main fields:

| Field | Meaning |
|---|---|
| `title`, `summary` | Title and one-sentence summary |
| `domain`, `stage`, `kind`, `topics` | Where it sits: seven stages from plant to cup, cross-cutting topics |
| `status` | `verified` (source-checked) or `expert-reviewed` (signed off by a named expert) |
| `lastVerified`, `updated`, `added`, `literatureSearched` | Dates: last source check, last change, first published, last literature search |
| `brief`, `quickFacts` | Short summary points and key values, with citations |
| `contested` | Questions where good sources disagree |
| `corrections` | Public change log: date, what changed, why |
| `sources` | Numbered sources (see below); `<sup><a href="#src-s3">3</a></sup>` in the text cites `s3` |

Each source has `id`, `title`, `authors`, `year`, `publisher`, `url` or `doi`, a **tier** (A authoritative, B trade and
expert, C general; a number needs one A or two independent B sources), an optional `tierNote`, the supporting
`quote` and optional further `quotes` (`text`, `for`), and an optional `scope` (`claim`: whose statement the quote is;
`context`: the conditions it holds for).

The same data is served live as JSON: `https://coffearium.org/entries/<id>.json`, with an index at
`https://coffearium.org/entries/index.json`.

## Tools
Node 22 or later. `npm install`, then:

| Command | What it does |
|---|---|
| `npm run quotes` (`-- --entry <id>`) | Fetches each source and checks mechanically that every stored quote occurs in it. Report in `docs/verification/`. Paywalls and captchas are never worked around; such sources are reported as unreachable. Optional local copies: `--papers <dir>` |
| `npm run test:quotes` | Tests of the matching logic |
| `npm run consistency` | Finds every mention of shared quantities (`tools/consistency/facts.yaml`) across entries and lists values no known source gives |
| `npm run audit:sample` / `audit:tally` | Draws a reproducible random sample of cited statements for a context audit and counts the verdicts (`docs/CONTEXT_AUDIT.md`) |
| `npm run lit:due` | Lists entries whose literature search is older than 90 days (`docs/LITERATURE_WATCH.md`) |

Results of the context audits so far are in `docs/verification/` and on https://coffearium.org/how-we-verify/.

## Contributing
Found a statement its source does not support, or a newer study? Use *Suggest a change* or *Suggest a source* on the
entry at coffearium.org, or open an issue here with the entry, the sentence and the source.

Exported 2026-10-25.
