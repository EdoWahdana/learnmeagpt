# The transformer

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `the-transformer`
- Title: The transformer
- Route: `/beginners/the-transformer`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 14
- Aliases: transformer, block, layer
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A GPT-2 transformer is a stack of blocks. Each block mixes tokens with attention and then passes each position through the same feed-forward network.

## Reader already knows

Attention as a weighted sum.

## This page stops before

Residual equations, layer norm, and GELU.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/the-transformer.mdx`
- Register it as `beginnerPages["the-transformer"]`
- Set curriculum entry `the-transformer` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: One block does two jobs, GPT-2 small stacks 12 blocks, A final step produces logits, The same stack runs at every generation step.

1. **One block does two jobs.** Attention mixes across positions. The feed-forward network then transforms each position on its own, with weights shared across positions.
2. **GPT-2 small stacks 12 blocks.** The output of one block is the input of the next. The hidden size stays 768.
3. **A final step produces logits.** After the stack, a linear map produces one logit per vocabulary id. In GPT-2 that matrix is tied to the token embedding. Leave tensor names to the weight-names page.
4. **The same stack runs at every generation step.** Point back to the first page’s loop in two sentences.

## Facts that must stay true

- GPT-2 small has 12 blocks.
- Each block includes attention and a position-wise feed-forward network.
- Hidden size 768 is constant through the stack.
- GPT-2 ties the final logit matrix to the token embedding.

## Diagram

An SVG of a row entering three drawn blocks, a gap, and a twelfth block, then a logits box. Caption: GPT-2 small stacks 12 blocks.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="attention">attention</Term>`
- `<Term id="transformer-block">block</Term>`
- `<Term id="logits">logits</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- The residual formula
- A full GPT-2 forward implementation

## Checklist

- [x] `/beginners/the-transformer` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `the-transformer` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

- 2026-11-19: Wrote `src/content/beginners/the-transformer.mdx`. No python fence. MDX compiles with `@mdx-js/mdx` + remark-frontmatter. Added an extra `<Term id="how-a-gpt-works">` for the pointer back to the first page's loop. Helper steps (layer norm, residual add, final layer norm) are named in one plain sentence each without formulas. Not registered in `beginnerPages` and curriculum status not changed (parent owns those files).
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
