# Softmax

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `softmax`
- Title: Softmax
- Route: `/technical/numbers/softmax`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 6
- Aliases: softmax
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Softmax maps real scores to positive numbers that sum to 1.

## Reader already knows

Probability.

## This page stops before

Temperature, beyond naming it.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/softmax.mdx`
- Register it as `technicalPages["numbers/softmax"]`
- Set curriculum entry `softmax` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Stable formula, Worked triple, Two uses.

1. **Stable formula.** Subtract the max, then exp, then divide by the sum.
2. **Worked triple.** softmax([1, 2, 3]) = [0.0900, 0.2447, 0.6652] at 4 decimals.
3. **Two uses.** Attention weights, and the next-token distribution. Do not derive either system.

## Facts that must stay true

- Subtracting the max does not change the ratios.
- The worked triple matches those 4 decimals.
- Outputs sum to 1.

## Diagram

Bars for the worked triple. Caption: Exponentiate, then divide by the sum.

## Python

Stable softmax.

Numeric check: The worked triple matches at 4 decimals.

## Toy slot

Embed Softmax when it exists.

## Terms

- `<Term id="temperature">temperature</Term>`
- `<Term id="attention-scores">attention</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- The loss gradient

## Checklist

- [ ] `/technical/numbers/softmax` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The named toy is embedded when its component file exists; leave this box open if it does not
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `softmax` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
