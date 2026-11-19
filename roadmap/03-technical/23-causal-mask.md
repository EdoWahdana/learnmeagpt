# Causal mask

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `causal-mask`
- Title: Causal mask
- Route: `/technical/attention/causal-mask`
- Section: technical
- Group: attention
- Kind: article
- Phase: later
- Order: 23
- Aliases: causal mask, mask
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The causal mask stops a position from reading later positions by setting those scores to −∞ before softmax.

## Reader already knows

Attention scores.

## This page stops before

Bidirectional encoders, beyond one contrast sentence.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/attention/causal-mask.mdx`
- Register it as `technicalPages["attention/causal-mask"]`
- Set curriculum entry `causal-mask` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The rule, The fill, A 4×4 picture.

1. **The rule.** Position i may attend to keys 0…i.
2. **The fill.** Disallowed scores are −∞, so their softmax weight is 0.
3. **A 4×4 picture.** Show a lower triangle, including the diagonal, as allowed.

## Facts that must stay true

- Allowed keys are the current and earlier positions.
- −∞ scores become weight 0.
- The diagonal is allowed.

## Diagram

A 4×4 grid, lower triangle filled, upper triangle marked blocked. Caption: A position cannot read the future.

## Python

Softmax a row where one entry is a large negative standing in for −∞.

Numeric check: That entry’s weight rounds to 0.

## Toy slot

No toy on this page.

## Terms

- `<Term id="attention-scores">score</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Padding masks

## Checklist

- [ ] `/technical/attention/causal-mask` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `causal-mask` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
