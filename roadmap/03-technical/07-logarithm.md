# Logarithm

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `logarithm`
- Title: Logarithm
- Route: `/technical/numbers/logarithm`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 7
- Aliases: logarithm, log
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The natural log turns a product of probabilities into a sum, which is how the next-token loss is written.

## Reader already knows

Probability.

## This page stops before

A full derivation of cross-entropy.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/logarithm.mdx`
- Register it as `technicalPages["numbers/logarithm"]`
- Set curriculum entry `logarithm` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Range, Product, The chosen token.

1. **Range.** For p in (0, 1], ln(p) ≤ 0 and ln(1) = 0.
2. **Product.** ln(p1 p2) = ln p1 + ln p2.
3. **The chosen token.** The loss uses the log of the probability of the token that occurred. Point at cross-entropy.

## Facts that must stay true

- ln(1) = 0.
- ln(0.5) ≈ -0.6931.
- The loss sums logs. It does not multiply the probabilities inside the sum.

## Diagram

A curve of ln on (0, 1] with a mark at 1. Caption: A probability of 1 has log 0.

## Python

Print ln(1) and ln(0.5).

Numeric check: 0 and about -0.6931.

## Toy slot

No toy on this page.

## Terms

- `<Term id="cross-entropy">cross-entropy</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Base-10 presented as the training loss

## Checklist

- [ ] `/technical/numbers/logarithm` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `logarithm` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
