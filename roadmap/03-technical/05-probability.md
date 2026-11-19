# Probability

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `probability`
- Title: Probability
- Route: `/technical/numbers/probability`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 5
- Aliases: probability, distribution
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A discrete distribution on a finite set assigns non-negative numbers that sum to 1.

## Reader already knows

The beginner next-token page.

## This page stops before

Continuous densities.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/probability.mdx`
- Register it as `technicalPages["numbers/probability"]`
- Set curriculum entry `probability` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The set is the vocabulary, A sample is one draw, The mode is the largest bar.

1. **The set is the vocabulary.** GPT-2 has 50257 items.
2. **A sample is one draw.** One generated id is one draw, not the distribution.
3. **The mode is the largest bar.** Greedy decoding picks the mode.

## Facts that must stay true

- Entries are ≥ 0 and sum to 1.
- Greedy decoding picks the maximum.
- A sample is not the mode unless the draw lands there.

## Diagram

Four bars summing to 1, the tallest marked mode. Caption: The mode is the largest probability.

## Python

Validate a distribution.

Numeric check: [0.1, 0.2, 0.7] passes. [0.5, 0.5, 0.5] fails.

## Toy slot

No toy on this page.

## Terms

- `<Term id="sampling">sampling</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Calibration claims

## Checklist

- [ ] `/technical/numbers/probability` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `probability` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
