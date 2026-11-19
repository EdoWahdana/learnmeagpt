# Matrix

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `matrix`
- Title: Matrix
- Route: `/technical/numbers/matrix`
- Section: technical
- Group: numbers
- Kind: article
- Phase: later
- Order: 2
- Aliases: matrix
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A matrix is a rectangular array. An m×n matrix times an n-vector produces an m-vector.

## Reader already knows

Vector.

## This page stops before

Batched shapes and GPT-2 projection tensor names.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/numbers/matrix.mdx`
- Register it as `technicalPages["numbers/matrix"]`
- Set curriculum entry `matrix` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Rows and columns, A matrix times a vector, Inner sizes must match.

1. **Rows and columns.** Shape is rows by columns. The GPT-2 token embedding is 50257 by 768.
2. **A matrix times a vector.** Result entry i is the dot product of row i with the vector. Use a 2×3 matrix and a length-3 vector written in the page.
3. **Inner sizes must match.** A 2×3 matrix does not multiply a length-2 vector on the right.

## Facts that must stay true

- Each output entry is one row’s dot product.
- Inner dimensions must be equal.
- The embedding table is 50257×768.

## Diagram

An SVG 2×3 grid times a column of 3, producing a column of 2. Caption: Each output entry is a dot product with one row.

## Python

Multiply the written 2×3 matrix by the written vector.

Numeric check: The code equals the expanded two dot products.

## Toy slot

Embed MatrixMultiply on this page when that tool exists.

## Terms

- `<Term id="vector">vector</Term>`
- `<Term id="linear-layer">linear layer</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- GPU kernels

## Checklist

- [ ] `/technical/numbers/matrix` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The named toy is embedded when its component file exists; leave this box open if it does not
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `matrix` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
