# Roadmap

This folder is the build plan for learn me a gpt. The website is not started. Each feature file is one agent session. The checklist in that file is the status.

## If you are an agent

1. Read this file once.
2. Open only the feature file you were assigned.
3. Implement that feature. Do not start another feature file.
4. Verify each checklist item against the running app or the files it names.
5. Change `- [ ]` to `- [x]` only when that item is true.
6. If a checked item is no longer true, set it back to `- [ ]`. Under `## Notes`, add `Reopened:` and one sentence on what is missing.
7. Set the `Status` line to `in progress` when you start, and to `done` only when every box in that file is checked.

Assign work in the order below. A session can start when every file in its `Depends on` list is `done`, except where that file says an embed box may stay open.

## Locked decisions

- Next.js App Router, TypeScript, MDX, npm. Global CSS. No Tailwind. No component library.
- Article text is serif. The menu, header, and tools are a plain sans.
- Light and dark follow Claude.ai’s warm paper and warm charcoal. Body text is not pure white. Backgrounds are not pure black. Light background is warm paper, not stark white.
- One warm terracotta accent (`--accent`, `--accent-strong`, `--accent-soft`, `--accent-line`) marks links, defined terms, the current page, and the logo. Article links use the accent, underlined, and gain a soft background on hover. Asides use the `Note` component (`note`, `tip`, `warning`), each with its own token colors. Colors come only from the tokens in `globals.css`, never hard-coded hex, and every text color passes 4.5:1 contrast in both themes. (Changed on 2026-11-19 at the user's request; this replaces the earlier no-accent rule.)
- No byline, no author name, no first-person origin story. The home page is not a personal essay. State what the system does.
- GPT-2 small is the model the site inspects. Closed chat products are described and are not opened.
- Short Python is shown on calculation pages. Interactive toys run in the browser and do not send the input anywhere.
- v1 is the foundation sessions, the Beginners pages, and four toys. Later sessions are specified now and are built only when assigned.
- One session, one feature file.
- The site is a static export (`output: "export"`) deployed to Cloudflare from `out/` via `wrangler.jsonc`. Every dynamic route must generate at least one page at build time. The technical route is parked at `src/app/_technical/` (the `_` prefix keeps it out of routing) until the first technical page exists. The first technical session renames it back to `src/app/technical/`.

## Voice

Define the idea in the first paragraph. Use short sentences. One idea per page. Do not praise the model, the reader, or the site. Do not give a personal anecdote. A reading order is a list of pages, not advice written as opinion.

When a term has a curriculum id, wrap it in `<Term id="...">`. `Term` renders a link only after that entry is `ready`, so planned pages never 404.

## Plain language

The reader may have never written code and may not remember school algebra. Write so that reader finishes the page understanding the idea. The model for this is [Learn Me a Bitcoin](https://learnmeabitcoin.com/): it states the idea simply first, then shows it, then adds detail.

- **Answer first.** The first paragraph says what the thing is in one or two everyday sentences. Bold the term the page defines, once.
- **Simple, then precise.** Give the plain version, then the exact version. A beginner can stop after the plain version and still be right.
- **Show a concrete example early.** Use real small inputs: a short sentence, three numbers, two tiny lists. Walk through what happens to them, step by step.
- **Numbered steps for processes.** If something happens in order, list the steps.
- **Short sentences and short paragraphs.** One idea per paragraph. Two to four sentences is normal.
- **Define every technical word the first time it appears**, in the same sentence or the next one. If a word is not needed, leave it out.
- **Everyday comparisons are allowed** when they make the idea click. Say where the comparison stops being true, in one sentence.
- **Address the reader as “you”** when describing what they see or do (“you type a message”). Never use “I” or “we”.
- **No hype and no fear.** Do not call the model smart, magical, alive, or dangerous. Say what it computes.
- **Diagrams carry the idea.** The figure should make sense to someone who skipped the paragraph above it. Label boxes with plain words, not symbols.
- **Math is optional reading.** Show arithmetic with the actual numbers (1 × 4 + 2 × 5 + 3 × 6 = 32) before any symbol form. Python blocks come after the plain explanation, with a sentence saying what the code does.
- **End with what comes next** only through the previous/next links. Do not write a summary paragraph that repeats the page.

## Checklist rules

Boxes start empty because nothing is built. A later agent may check a box that a previous session left open, if that later session is the one the file names for that box (usually an embed). Do not check a box in a file you were not assigned unless your own feature file tells you to.

Suggested check from the repo root:

```bash
grep -R -n -- "- \[ \]" roadmap
grep -R -n "^Status:" roadmap
```

## Stack the sessions must keep

| Choice | Value |
|---|---|
| App | Next.js App Router, `src/` |
| Content | MDX in `src/content`, registered from `src/content/registry` |
| Styles | `src/app/globals.css` variables only |
| Curriculum | `src/content/curriculum.ts` |
| Fonts | Source Serif 4, Source Sans 3, Source Code Pro, via `next/font` |
| Tokenizer toy | `gpt-tokenizer`, or `js-tiktoken` with the `gpt2` encoding if the first cannot run in the browser |
| Traces | JSON committed under `src/content/traces`. Model weights are not committed |

`create-next-app` will refuse this folder because `roadmap/` is already here. The scaffold session says how to handle that. Do not delete `roadmap/`.

## v1 order

These can be assigned first.

1. [00-foundations/00-project-scaffold.md](00-foundations/00-project-scaffold.md)
2. [00-foundations/01-design-tokens.md](00-foundations/01-design-tokens.md) and [00-foundations/02-curriculum-manifest.md](00-foundations/02-curriculum-manifest.md), in parallel after the scaffold
3. [00-foundations/03-app-shell.md](00-foundations/03-app-shell.md)
4. [00-foundations/04-article-template.md](00-foundations/04-article-template.md)
5. In parallel after the template: [05-search.md](00-foundations/05-search.md), [06-home.md](00-foundations/06-home.md), [07-curriculum-map.md](00-foundations/07-curriculum-map.md), [08-section-indexes.md](00-foundations/08-section-indexes.md), [09-about.md](00-foundations/09-about.md)
6. Beginner pages, in parallel, after the article template and the manifest. See [01-beginners](01-beginners).
7. The four toys, after design tokens and the app shell. See [02-toys](02-toys). Embed them into pages when both sides exist.

## Later order

Assign these after v1, or earlier only if the foundation they depend on is `done`. Build technical pages in file order. Each page assumes the previous idea and does not re-teach it.

- [03-technical/00-group-indexes.md](03-technical/00-group-indexes.md), then the numbered pages in that folder
- [04-tools](04-tools), any order after design tokens, the shell, and the manifest
- [05-explorer/00-trace-data.md](05-explorer/00-trace-data.md) before the other explorer files

## Feature index

### Foundations

| File | What the session builds |
|---|---|
| [00-project-scaffold.md](00-foundations/00-project-scaffold.md) | Next.js app around this roadmap, folders, MDX and font dependencies |
| [01-design-tokens.md](00-foundations/01-design-tokens.md) | Warm light and dark tokens, type, links, controls |
| [02-curriculum-manifest.md](00-foundations/02-curriculum-manifest.md) | The single list of every page, tool, and explorer view |
| [03-app-shell.md](00-foundations/03-app-shell.md) | Header, search slot, menu, theme control, footer, 404 |
| [04-article-template.md](00-foundations/04-article-template.md) | MDX article, contents, figures, Python blocks, Term, prev/next |
| [05-search.md](00-foundations/05-search.md) | Header search across titles, aliases, and descriptions |
| [06-home.md](00-foundations/06-home.md) | Objective home page and reading-order door |
| [07-curriculum-map.md](00-foundations/07-curriculum-map.md) | Full map, written pages linked, the rest marked not written |
| [08-section-indexes.md](00-foundations/08-section-indexes.md) | `/beginners` and `/tools` indexes |
| [09-about.md](00-foundations/09-about.md) | What the site covers and which model it inspects |

### Beginners

Reading order is the filename order.

| File | Route |
|---|---|
| [01-how-a-gpt-works.md](01-beginners/01-how-a-gpt-works.md) | `/beginners/how-a-gpt-works` |
| [02-using-a-chatbot.md](01-beginners/02-using-a-chatbot.md) | `/beginners/using-a-chatbot` |
| [03-prompts.md](01-beginners/03-prompts.md) | `/beginners/prompts` |
| [04-tokens.md](01-beginners/04-tokens.md) | `/beginners/tokens` |
| [05-context-window.md](01-beginners/05-context-window.md) | `/beginners/context-window` |
| [06-likelihood-and-truth.md](01-beginners/06-likelihood-and-truth.md) | `/beginners/likelihood-and-truth` |
| [07-what-a-chat-request-contains.md](01-beginners/07-what-a-chat-request-contains.md) | `/beginners/what-a-chat-request-contains` |
| [08-a-model-is-a-function.md](01-beginners/08-a-model-is-a-function.md) | `/beginners/a-model-is-a-function` |
| [09-training-and-inference.md](01-beginners/09-training-and-inference.md) | `/beginners/training-and-inference` |
| [10-vectors.md](01-beginners/10-vectors.md) | `/beginners/vectors` |
| [11-text-becomes-numbers.md](01-beginners/11-text-becomes-numbers.md) | `/beginners/text-becomes-numbers` |
| [12-the-next-token.md](01-beginners/12-the-next-token.md) | `/beginners/the-next-token` |
| [13-attention.md](01-beginners/13-attention.md) | `/beginners/attention` |
| [14-the-transformer.md](01-beginners/14-the-transformer.md) | `/beginners/the-transformer` |
| [15-temperature.md](01-beginners/15-temperature.md) | `/beginners/temperature` |
| [16-parameters.md](01-beginners/16-parameters.md) | `/beginners/parameters` |
| [17-gpt-2-and-later-models.md](01-beginners/17-gpt-2-and-later-models.md) | `/beginners/gpt-2-and-later-models` |

### Toys

| File | Route |
|---|---|
| [01-vector-dot-product.md](02-toys/01-vector-dot-product.md) | `/tools/vector-dot-product` |
| [02-softmax.md](02-toys/02-softmax.md) | `/tools/softmax` |
| [03-tokenizer.md](02-toys/03-tokenizer.md) | `/tools/tokenizer` |
| [04-temperature.md](02-toys/04-temperature.md) | `/tools/temperature` |

### Technical

[00-group-indexes.md](03-technical/00-group-indexes.md) builds `/technical` and one page per group. The other files are one concept each, in reading order. Groups: Numbers, Data, Network, Attention, Block, GPT-2, Training, Modern.

### Tools

Later calculators. The v1 toys already occupy `/tools/vector-dot-product`, `/tools/softmax`, `/tools/tokenizer`, and `/tools/temperature`.

| File | Route |
|---|---|
| [01-matrix-multiply.md](04-tools/01-matrix-multiply.md) | `/tools/matrix-multiply` |
| [02-attention-heatmap.md](04-tools/02-attention-heatmap.md) | `/tools/attention-heatmap` |
| [03-bpe-trainer.md](04-tools/03-bpe-trainer.md) | `/tools/bpe-trainer` |
| [04-positional-encoding.md](04-tools/04-positional-encoding.md) | `/tools/positional-encoding` |
| [05-nearest-embedding.md](04-tools/05-nearest-embedding.md) | `/tools/nearest-embedding` |
| [06-forward-pass-stepper.md](04-tools/06-forward-pass-stepper.md) | `/tools/forward-pass-stepper` |
| [07-sampling-compare.md](04-tools/07-sampling-compare.md) | `/tools/sampling-compare` |

### Explorer

[00-trace-data.md](05-explorer/00-trace-data.md) produces the JSON. The view sessions only read that JSON. They do not invent activations.

| File | Route |
|---|---|
| [01-overview.md](05-explorer/01-overview.md) | `/explorer` |
| [02-model.md](05-explorer/02-model.md) | `/explorer/model` |
| [03-trace.md](05-explorer/03-trace.md) | `/explorer/trace` |
| [04-layers.md](05-explorer/04-layers.md) | `/explorer/layers` |
| [05-attention.md](05-explorer/05-attention.md) | `/explorer/attention` |
| [06-weights.md](05-explorer/06-weights.md) | `/explorer/weights` |
