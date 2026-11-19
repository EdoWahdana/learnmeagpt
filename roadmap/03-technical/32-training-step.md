# Training step

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `training-step`
- Title: Training step
- Route: `/technical/gpt-2/training-step`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 32
- Aliases: training step, backward
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

One training step runs the forward pass, the cross-entropy, a backward pass, and a parameter update.

## Reader already knows

Cross-entropy and gradient.

## This page stops before

A learning-rate schedule.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/training-step.mdx`
- Register it as `technicalPages["gpt-2/training-step"]`
- Set curriculum entry `training-step` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Order, What changes, What a step needs.

1. **Order.** Forward, loss, backward, update.
2. **What changes.** Parameters change. Optimizer moments, if present, are extra state, not model parameters.
3. **What a step needs.** A batch of token sequences and the ids that follow.

## Facts that must stay true

- The four-part order.
- Parameters change only in the update.
- Inference omits backward and update.

## Diagram

Four boxes in a row. Caption: One training step.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="learning-rate">learning rate</Term>`
- `<Term id="batch">batch</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A working trainer for GPT-2

## Checklist

- [ ] `/technical/gpt-2/training-step` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `training-step` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
