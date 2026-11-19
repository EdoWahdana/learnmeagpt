# Cross-entropy

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `cross-entropy`
- Title: Cross-entropy
- Route: `/technical/gpt-2/cross-entropy`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 31
- Aliases: cross-entropy, loss
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The next-token loss is the negative log of the softmax probability of the id that actually came next.

## Reader already knows

Logarithm and logits.

## This page stops before

A training loop.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/cross-entropy.mdx`
- Register it as `technicalPages["gpt-2/cross-entropy"]`
- Set curriculum entry `cross-entropy` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: One position, A worked case, Mean over positions.

1. **One position.** loss = −ln softmax(logits)[target].
2. **A worked case.** If the softmax probability of the target is 0.5, the loss is −ln(0.5) ≈ 0.6931.
3. **Mean over positions.** A batch loss averages the per-position terms that have targets. Padding, if mentioned, is excluded only when a mask exists. GPT-2 documents in the training page are full tokens.

## Facts that must stay true

- The loss is −ln p_target.
- p = 0.5 gives about 0.6931.
- Lower loss means higher probability on the token that occurred.

## Diagram

A distribution with one bar marked target, and the number −ln of that bar. Caption: The loss reads only the target’s probability.

## Python

Compute -ln(0.5) and also -ln(softmax([1,2,3])[2]) using the known softmax third entry 0.6652.

Numeric check: -ln(0.5) ≈ 0.6931. -ln(0.6652) ≈ 0.4077.

## Toy slot

No toy on this page.

## Terms

- `<Term id="training-step">training step</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Label smoothing

## Checklist

- [ ] `/technical/gpt-2/cross-entropy` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `cross-entropy` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
