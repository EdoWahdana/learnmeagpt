# GPT-2 and later models

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `gpt-2-and-later-models`
- Title: GPT-2 and later models
- Route: `/beginners/gpt-2-and-later-models`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 17
- Aliases: gpt-2, chatgpt, llama
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 small is a public transformer this site can open. Later models keep that stack and change named pieces. A chat product adds training and serving around a model.

## Reader already knows

The beginner pages through parameters.

## This page stops before

The formulas for RoPE, RMSNorm, SwiGLU, and grouped-query attention.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/gpt-2-and-later-models.mdx`
- Register it as `beginnerPages["gpt-2-and-later-models"]`
- Set curriculum entry `gpt-2-and-later-models` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: What is public in GPT-2, A chat product is not the base model, Later open models change specific pieces, The technical section continues from here.

1. **What is public in GPT-2.** Weights and code for GPT-2 small are public. The context length is 1024. The explorer shows one traced sentence, not a live service.
2. **A chat product is not the base model.** A product such as ChatGPT adds further training, serving, and a transcript UI around a model. This site does not load that product’s weights.
3. **Later open models change specific pieces.** Without formulas, name rotary position, RMSNorm, a gated feed-forward, and grouped-query attention. Point each at its technical id with Term.
4. **The technical section continues from here.** Link `/map` and `/technical`. The technical order starts at vectors and reaches those later pieces.

## Facts that must stay true

- GPT-2 small weights are public.
- Closed chat models are not inspected on this site.
- Rotary position, RMSNorm, a gated feed-forward, and grouped-query attention are later changes, each with its own page.

## Diagram

An SVG stack labeled GPT-2, and a second stack with four labels only on the later column: rotary position, RMSNorm, gated MLP, grouped query. Caption: Later models change named pieces of the same stack.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="rope">rotary position</Term>`
- `<Term id="rmsnorm">RMSNorm</Term>`
- `<Term id="swiglu">gated feed-forward</Term>`
- `<Term id="grouped-query-attention">grouped-query attention</Term>`
- `<Term id="config">GPT-2 config</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A ranking of models
- A parameter count for a closed model
- Instructions for obtaining gated weights

## Checklist

- [x] `/beginners/gpt-2-and-later-models` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `gpt-2-and-later-models` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

- 2026-11-19: Wrote `src/content/beginners/gpt-2-and-later-models.mdx`. It compiles with `@mdx-js/mdx` `compile` plus `remark-frontmatter`. The h2 order, facts, caption, the absence of hex colors, Python fences, tools, and first person were checked from the file. Term ids: `config`, `rope`, `rmsnorm`, `swiglu`, `grouped-query-attention`, `technical-index`, `map`. `/technical` goes through `<Term id="technical-index">` because that entry is `planned` and has no index route yet, so it stays plain text until it is built. The GPT-2 column in the diagram names its own pieces (token table, position, layer norm, attention, feed-forward, next-token scores). Only the later column carries the four changed labels. No numbers were computed. Not yet registered in `beginnerPages`, and not checked in `npm run dev`.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
