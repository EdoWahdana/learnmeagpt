# Dot product

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `dot-product`
- Title: Dot product
- Route: `/technical/numbers/dot-product`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 3
- Aliases: dot product, inner product
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The dot product of two equal-length vectors is the sum of the products of matching entries.

## Reader already knows

Vector.

## This page stops before

The attention-score derivation. One pointer sentence is enough.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/dot-product.mdx`
- Register it as `technicalPages["numbers/dot-product"]`
- Set curriculum entry `dot-product` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Definition, A sign pattern changes the sum, Where it is used next.

1. **Definition.** (1, 2, 3) · (4, 5, 6) = 32.
2. **A sign pattern changes the sum.** (1, 1) · (1, 1) = 2 and (1, 1) · (1, -1) = 0.
3. **Where it is used next.** An attention score starts as a query-key dot product.

## Facts that must stay true

- (1, 2, 3) · (4, 5, 6) = 32.
- (1, 1) · (1, -1) = 0.
- Attention scores start from a dot product.

## Diagram

Pairing figure with the sum 32. Caption: Matching entries multiply, then add.

## Python

dot(a, b).

Numeric check: dot([1,2,3],[4,5,6]) == 32.

## Toy slot

Embed VectorDotProduct when it exists.

## Terms

- `<Term id="attention-scores">attention score</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Cosine as a required extra formula

## Checklist

- [ ] `/technical/numbers/dot-product` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The named toy is embedded when its component file exists; leave this box open if it does not
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `dot-product` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
