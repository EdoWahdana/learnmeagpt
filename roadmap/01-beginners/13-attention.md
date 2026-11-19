# Attention

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `attention`
- Title: Attention
- Route: `/beginners/attention`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 13
- Aliases: attention, attention head
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Attention builds a new vector for each token as a weighted sum of value vectors from tokens it is allowed to read.

## Reader already knows

Vectors, in the plain sense.

## This page stops before

Queries, keys, multi-head splitting, and the mask matrix.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/attention.mdx`
- Register it as `beginnerPages["attention"]`
- Set curriculum entry `attention` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Each token can read earlier tokens, Weights decide how much to take, The result is a mixture of vectors, That mixture moves information forward.

1. **Each token can read earlier tokens.** In a GPT, a position may use itself and earlier positions, not later ones.
2. **Weights decide how much to take.** The weights used on the values at one position are positive and sum to 1. Do not derive them from queries and keys.
3. **The result is a mixture of vectors.** 0.25 times (1, 0) plus 0.75 times (0, 1) equals (0.25, 0.75).
4. **That mixture moves information forward.** A later token’s vector can contain information from earlier tokens. Connect this to next-token prediction in one sentence.

## Facts that must stay true

- A GPT position attends to itself and earlier positions.
- The weights on the values are non-negative and sum to 1.
- The output is a weighted sum of value vectors.
- 0.25*(1, 0) + 0.75*(0, 1) = (0.25, 0.75).

## Diagram

An SVG of three tokens. The third has arrows to earlier tokens labeled as an illustration, not as a real GPT-2 head. Caption: Weights choose a mixture of earlier vectors. The caption states the numbers are an illustration.

## Python

Compute 0.25 * [1, 0] + 0.75 * [0, 1].

Numeric check: The result is [0.25, 0.75].

## Toy slot

No toy on this page.

## Terms

- `<Term id="vectors">vector</Term>`
- `<Term id="causal-mask">causal mask</Term>`
- `<Term id="attention-head">head</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Q, K, and V formulas
- A real GPT-2 attention map
- Multi-head concatenation

## Checklist

- [x] `/beginners/attention` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The Python block matches the numeric check in this spec
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `attention` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

- 2026-11-19: Wrote `src/content/beginners/attention.mdx`. `python3` on the page's block printed `[0.25, 0.75]`, matching the numeric check. MDX compiles with `@mdx-js/mdx` + remark-frontmatter. Diagram weights 0.1 / 0.6 / 0.3 are labeled as an illustration in the caption. Not registered in `beginnerPages` and curriculum status not changed (parent owns those files).
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
