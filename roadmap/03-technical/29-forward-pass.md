# Forward pass

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `forward-pass`
- Title: Forward pass
- Route: `/technical/gpt-2/forward-pass`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 29
- Aliases: forward pass, forward
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The forward pass maps token ids to logits with the stack on this site’s pages.

## Reader already knows

Stack, embeddings, and position add.

## This page stops before

Backprop.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/forward-pass.mdx`
- Register it as `technicalPages["gpt-2/forward-pass"]`
- Set curriculum entry `forward-pass` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Steps in order, Shapes, What is not in the pass.

1. **Steps in order.** Ids → token rows → add position rows → 12 blocks → ln_f → tied logits.
2. **Shapes.** For a sequence of length S, logits have shape (S, 50257) for one example.
3. **What is not in the pass.** No parameter update and no sampling.

## Facts that must stay true

- The order above.
- Logit shape ends in 50257.
- Sampling is outside the forward pass.

## Diagram

A vertical list of those steps. Caption: Forward pass from ids to logits.

## Python

On a toy of 2 positions and hidden size 4, with written weights, run the same order of operations using plain Python. Do not claim the toy is GPT-2.

Numeric check: The toy’s logit shape is (2, vocab_toy) for the tiny vocab you defined.

## Toy slot

The forward-pass stepper tool may embed the toy, not a real 768-d run.

## Terms

- `<Term id="sampling">sampling</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Training code

## Checklist

- [ ] `/technical/gpt-2/forward-pass` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The named toy is embedded when its component file exists; leave this box open if it does not
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `forward-pass` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
