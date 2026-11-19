# Linear layer

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `linear-layer`
- Title: Linear layer
- Route: `/technical/network/linear-layer`
- Section: technical
- Group: network
- Kind: article
- Phase: later
- Order: 14
- Aliases: linear layer, dense
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A linear layer computes Wx + b.

## Reader already knows

Matrix.

## This page stops before

GELU.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/network/linear-layer.mdx`
- Register it as `technicalPages["network/linear-layer"]`
- Set curriculum entry `linear-layer` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Shapes, GPT-2 biases, Shared across positions.

1. **Shapes.** Expanding 768 to 3072 uses a 3072×768 matrix in the mathematical convention, plus a bias of length 3072. If you show another layout, name it.
2. **GPT-2 biases.** GPT-2 attention and MLP projections include biases.
3. **Shared across positions.** The same W applies at every position and does not read other positions.

## Facts that must stay true

- The map is Wx + b.
- MLP expansion is 768 → 3072.
- Weights are shared across positions.

## Diagram

A 768-vector entering a box and a 3072-vector leaving. Caption: One position, one matrix.

## Python

Wx + b for a written 2×3 W, length-3 x, and length-2 b.

Numeric check: The result matches the arithmetic.

## Toy slot

No toy on this page.

## Terms

- `<Term id="gelu">GELU</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Convolution

## Checklist

- [ ] `/technical/network/linear-layer` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `linear-layer` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
