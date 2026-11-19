# Transformer block

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `transformer-block`
- Title: Transformer block
- Route: `/technical/block/transformer-block`
- Section: technical
- Group: block
- Kind: article
- Phase: later
- Order: 25
- Aliases: transformer block, block
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

One GPT-2 block is attention and a feed-forward network, each preceded by layer norm and wrapped in a residual add.

## Reader already knows

Residual, layer norm, multi-head attention, and the feed-forward network.

## This page stops before

Stacking, beyond saying the output is the next block’s input.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/block/transformer-block.mdx`
- Register it as `technicalPages["block/transformer-block"]`
- Set curriculum entry `transformer-block` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Equations, Shape, Order.

1. **Equations.** x = x + attn(ln1(x)), then x = x + mlp(ln2(x)).
2. **Shape.** Input and output both have hidden size 768.
3. **Order.** Attention runs before the feed-forward network inside the block.

## Facts that must stay true

- The two equations above.
- Shape is unchanged.
- Attention comes before the MLP.

## Diagram

The block diagram from the layer-norm page, now with both sublayers labeled. Caption: One GPT-2 block.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="stack">stack</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A code listing of every tensor

## Checklist

- [ ] `/technical/block/transformer-block` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `transformer-block` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
