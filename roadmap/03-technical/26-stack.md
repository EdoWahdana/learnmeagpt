# Stack

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `stack`
- Title: Stack
- Route: `/technical/block/stack`
- Section: technical
- Group: block
- Kind: article
- Phase: later
- Order: 26
- Aliases: stack, layers
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 small runs 12 blocks, then a final layer norm, then the tied embedding to produce logits.

## Reader already knows

One block.

## This page stops before

Sampling.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/block/stack.mdx`
- Register it as `technicalPages["block/stack"]`
- Set curriculum entry `stack` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Count, Final norm, Logits.

1. **Count.** 12 identical block shapes, not 12 shared weight copies. Each block has its own parameters.
2. **Final norm.** ln_f is applied to the last block’s output.
3. **Logits.** hidden @ embeddingᵀ, using the tied token embedding, producing a 50257-vector at each position.

## Facts that must stay true

- There are 12 blocks with separate weights.
- ln_f follows the last block.
- Logits have vocabulary size 50257.

## Diagram

Twelve blocks, a final norm, and a logit box. Caption: The stack keeps the hidden size and ends in logits.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="logits">logits</Term>`
- `<Term id="forward-pass">forward pass</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Dropout placement details

## Checklist

- [ ] `/technical/block/stack` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `stack` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
