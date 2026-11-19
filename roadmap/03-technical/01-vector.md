# Vector

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `vector`
- Title: Vector
- Route: `/technical/numbers/vector`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 1
- Aliases: vector
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A vector is a one-dimensional array of real numbers with a fixed length.

## Reader already knows

The beginner vectors page.

## This page stops before

Matrices and any dot-product identity beyond a pointer.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/vector.mdx`
- Register it as `technicalPages["numbers/vector"]`
- Set curriculum entry `vector` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Length is part of the object, Addition needs the same length, A scalar multiplies every entry.

1. **Length is part of the object.** A vector of length 768 is a different object from a vector of length 3. GPT-2 hidden states have length 768.
2. **Addition needs the same length.** Position-wise addition is defined only when lengths match. State that a mismatch is undefined.
3. **A scalar multiplies every entry.** Show 2 × (1, 0, -1) = (2, 0, -2).

## Facts that must stay true

- Hidden size in GPT-2 small is 768.
- Addition of different lengths is undefined.
- 2 × (1, 0, -1) = (2, 0, -2).

## Diagram

An SVG stack marked 768, drawn with an ellipsis. Caption: A GPT-2 hidden vector has 768 entries.

## Python

Scale and add.

Numeric check: 2*(1, 0, -1) + (0, 1, 1) = (2, 1, -1).

## Toy slot

No toy on this page.

## Terms

- `<Term id="vectors">vectors</Term>`
- `<Term id="matrix">matrix</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- NumPy as a required install

## Checklist

- [ ] `/technical/numbers/vector` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `vector` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
