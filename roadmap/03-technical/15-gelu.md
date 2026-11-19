# GELU

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `gelu`
- Title: GELU
- Route: `/technical/network/gelu`
- Section: technical
- Group: network
- Kind: article
- Phase: later
- Order: 15
- Aliases: gelu, activation
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 applies the tanh approximation of GELU between the two feed-forward linear layers.

## Reader already knows

Linear layer.

## This page stops before

SwiGLU.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/network/gelu.mdx`
- Register it as `technicalPages["network/gelu"]`
- Set curriculum entry `gelu` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Placement, Formula, Values.

1. **Placement.** 768 → 3072, GELU, 3072 → 768.
2. **Formula.** 0.5 * x * (1 + tanh(√(2/π) * (x + 0.044715 x³))).
3. **Values.** gelu(0) = 0, gelu(1) = 0.8412, gelu(-1) = -0.1588 at 4 decimals.

## Facts that must stay true

- The page uses the tanh approximation.
- gelu(0) = 0.
- gelu(1) = 0.8412 and gelu(-1) = -0.1588 at 4 decimals.

## Diagram

A curve through those three points. Caption: GELU is applied to each expanded entry.

## Python

Implement the approximation.

Numeric check: The three values match at 4 decimals.

## Toy slot

No toy on this page.

## Terms

- `<Term id="swiglu">SwiGLU</Term>`
- `<Term id="feed-forward">feed-forward</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- The exact Gaussian CDF presented as GPT-2’s code

## Checklist

- [ ] `/technical/network/gelu` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `gelu` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
