# Parameters

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `parameters`
- Title: Parameters
- Route: `/beginners/parameters`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 16
- Aliases: parameters, weights, 124M
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A parameter is a number stored in the model. The forward pass reads the set, and training writes it.

## Reader already knows

Training and inference, and the transformer stack.

## This page stops before

A hand-written parameter total. The config page computes one from a checkpoint.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/parameters.mdx`
- Register it as `beginnerPages["parameters"]`
- Set curriculum entry `parameters` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Name the main stores, The shape fixes the count, Published totals differ by what they count, Inference reads them as constants.

1. **Name the main stores.** Token embedding, position embedding, and, in each block, the attention projections, the feed-forward projections, and the layer-norm scales and shifts. Do not list every tensor name.
2. **The shape fixes the count.** 12 layers, hidden size 768, 12 heads, context 1024, vocabulary 50257, and feed-forward width 3072, which is 4 × 768.
3. **Published totals differ by what they count.** The GPT-2 paper calls the small model 117M. Checkpoint reports are often near 124M because embeddings are counted differently. State both, and say the config page computes a count from a loaded checkpoint and records what it included.
4. **Inference reads them as constants.** Tie this back to training versus inference in one sentence.

## Facts that must stay true

- GPT-2 small uses hidden size 768, 12 heads, 12 layers, context 1024, vocabulary 50257, and feed-forward width 3072.
- The paper’s small model is called 117M.
- This page does not present a freshly computed parameter total.

## Diagram

An SVG of a token table, a position table, and one block’s weights marked × 12. Caption: Parameters are the stored tables and the block weights.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="config">config</Term>`
- `<Term id="weight-names">weight names</Term>`
- `<Term id="training-and-inference">training</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- An invented exact parameter integer
- Adam moments described as model parameters

## Checklist

- [x] `/beginners/parameters` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `parameters` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

- 2026-11-19: Wrote `src/content/beginners/parameters.mdx`. It compiles with `@mdx-js/mdx` `compile` plus `remark-frontmatter`. The h2 order, facts, caption, Term ids (`training-and-inference`, `weight-names`, `config`), the absence of hex colors, Python fences, tools, and first person were checked from the file. The page gives no total. It shows single-store sizes computed with `python3 -c "print(50257*768, 1024*768, 4*768, 768*3072)"`, which gives 38597376, 786432, 3072, and 2359296. Not yet registered in `beginnerPages`, and not checked in `npm run dev`.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
