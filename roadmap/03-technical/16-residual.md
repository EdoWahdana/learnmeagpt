# Residual

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `residual`
- Title: Residual
- Route: `/technical/network/residual`
- Section: technical
- Group: network
- Kind: article
- Phase: later
- Order: 16
- Aliases: residual, skip connection
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A residual connection sets y = x + f(x).

## Reader already knows

Linear layer.

## This page stops before

Where layer norm sits.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/network/residual.mdx`
- Register it as `technicalPages["network/residual"]`
- Set curriculum entry `residual` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The add, Hidden size, What is preserved.

1. **The add.** y = x + f(x), with matching shapes.
2. **Hidden size.** In GPT-2 both terms have length 768.
3. **What is preserved.** x is still present. The sublayer contributes an added change.

## Facts that must stay true

- The operation is addition, not concatenation.
- Shapes match.
- Length 768 is the GPT-2 case.

## Diagram

x splitting through f and adding back. Caption: The sublayer output is added to its input.

## Python

Add a written f(x) to x.

Numeric check: Position-wise sum.

## Toy slot

No toy on this page.

## Terms

- `<Term id="layer-norm">layer norm</Term>`
- `<Term id="transformer-block">block</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A vanishing-gradient proof

## Checklist

- [ ] `/technical/network/residual` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `residual` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
