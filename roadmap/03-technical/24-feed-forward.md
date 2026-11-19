# Feed-forward network

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `feed-forward`
- Title: Feed-forward network
- Route: `/technical/block/feed-forward`
- Section: technical
- Group: block
- Kind: article
- Phase: later
- Order: 24
- Aliases: feed-forward, mlp, ffn
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The GPT-2 feed-forward network is Linear 768→3072, GELU, Linear 3072→768, applied independently at each position.

## Reader already knows

GELU and the linear layer.

## This page stops before

The residual around it.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/block/feed-forward.mdx`
- Register it as `technicalPages["block/feed-forward"]`
- Set curriculum entry `feed-forward` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Widths, Per position, Biases.

1. **Widths.** 3072 = 4 × 768.
2. **Per position.** The same weights run at every position. There is no mix across positions inside this sublayer.
3. **Biases.** Both linear maps have biases in GPT-2.

## Facts that must stay true

- Inner width is 3072.
- The sublayer does not mix positions.
- Both maps have biases.

## Diagram

One position entering, expanding to 3072, contracting to 768. Caption: The feed-forward network does not look at other positions.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="gelu">GELU</Term>`
- `<Term id="residual">residual</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- SwiGLU formulas

## Checklist

- [ ] `/technical/block/feed-forward` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `feed-forward` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
