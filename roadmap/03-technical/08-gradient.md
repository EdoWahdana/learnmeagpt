# Gradient

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `gradient`
- Title: Gradient
- Route: `/technical/numbers/gradient`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 8
- Aliases: gradient, derivative
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The gradient is the direction of steepest increase. A training step moves the other way.

## Reader already knows

The beginner distinction between training and inference.

## This page stops before

Backprop through a block, and Adam.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/gradient.mdx`
- Register it as `technicalPages["numbers/gradient"]`
- Set curriculum entry `gradient` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: One slope, The step, Inference skips it.

1. **One slope.** The derivative of (w − 3)² at w = 0 is −6.
2. **The step.** w ← w − η g. Call η the learning rate and do not give a GPT-2 value here.
3. **Inference skips it.** Inference does not apply the step.

## Facts that must stay true

- The slope at w = 0 is −6.
- The step subtracts a scaled gradient.
- Inference does not update w.

## Diagram

A parabola and an arrow toward the minimum from w = 0. Caption: The step follows the decrease.

## Python

Compute that derivative.

Numeric check: The value is -6.

## Toy slot

No toy on this page.

## Terms

- `<Term id="learning-rate">learning rate</Term>`
- `<Term id="training-step">training step</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- An optimizer implementation

## Checklist

- [ ] `/technical/numbers/gradient` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `gradient` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
