# Vectors

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `vectors`
- Title: Vectors
- Route: `/beginners/vectors`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 10
- Aliases: vector, dot product
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A vector is an ordered list of numbers. The dot product multiplies matching positions and adds those products.

## Reader already knows

A model is a function, at the level of inputs and outputs.

## This page stops before

Matrices, tensor shapes, and attention scores.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/vectors.mdx`
- Register it as `beginnerPages["vectors"]`
- Set curriculum entry `vectors` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Order matters, Addition and scaling stay in the list, The dot product is one number, A long vector can store a token.

1. **Order matters.** (1, 2) and (2, 1) are different vectors.
2. **Addition and scaling stay in the list.** Add two vectors of the same length position by position. Multiply every position by one number. Give one numeric example of each.
3. **The dot product is one number.** For (1, 2, 3) and (4, 5, 6), show 1×4 + 2×5 + 3×6 = 32.
4. **A long vector can store a token.** An embedding vector in GPT-2 small has length 768. Do not explain how it is trained.

## Facts that must stay true

- (1, 2) and (2, 1) are different vectors.
- The dot product of (1, 2, 3) and (4, 5, 6) is 32.
- GPT-2 small embedding vectors have length 768.

## Diagram

An SVG of two columns of three cells, matching positions joined, and a sum of 32. Caption: The dot product pairs positions and adds.

## Python

A function `dot(a, b)` that multiplies matching positions and adds them.

Numeric check: `dot([1, 2, 3], [4, 5, 6])` is 32.

## Toy slot

Embed `VectorDotProduct` when `src/components/tools/VectorDotProduct.tsx` exists. Its initial vectors are (1, 2, 3) and (4, 5, 6).

## Terms

- `<Term id="text-becomes-numbers">embedding</Term>`
- `<Term id="dot-product">dot product</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Matrix multiplication
- Attention

## Checklist

- [x] `/beginners/vectors` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The Python block matches the numeric check in this spec
- - [x] The named toy is embedded when its component file exists; leave this box open if it does not
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `vectors` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes
- Python run: `python3` on the block extracted from `vectors.mdx` printed `32` for `dot([1, 2, 3], [4, 5, 6])`.
- MDX compiles with `@mdx-js/mdx` `compile` plus remark-frontmatter and remark-gfm. Body is about 660 words.
- Figure caption is written with its final period, as printed in this spec.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
