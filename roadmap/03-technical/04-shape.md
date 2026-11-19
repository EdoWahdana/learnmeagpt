# Shape

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `shape`
- Title: Shape
- Route: `/technical/numbers/shape`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 4
- Aliases: shape, tensor
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A shape is the list of axis lengths of a tensor.

## Reader already knows

Matrix.

## This page stops before

Framework stride layouts.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/shape.mdx`
- Register it as `technicalPages["numbers/shape"]`
- Set curriculum entry `shape` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Names on this site, Contraction, The vocabulary axis.

1. **Names on this site.** A GPT-2 hidden state can have shape (batch, sequence, 768).
2. **Contraction.** (2, 3) @ (3, 4) has shape (2, 4).
3. **The vocabulary axis.** Logits for one sequence have shape (sequence, 50257).

## Facts that must stay true

- (2, 3) @ (3, 4) → (2, 4).
- Logits use a 50257-sized axis.
- 768 is the hidden axis in GPT-2 small.

## Diagram

A 3-axis box labeled batch, sequence, 768. Caption: A hidden state names every axis.

## Python

State the result shape in a comment next to the multiply.

Numeric check: The comment says (2, 4).

## Toy slot

No toy on this page.

## Terms

- `<Term id="logits">logits</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A broadcasting tutorial

## Checklist

- [ ] `/technical/numbers/shape` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `shape` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
