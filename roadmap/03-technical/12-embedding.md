# Embedding

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `embedding`
- Title: Embedding
- Route: `/technical/data/embedding`
- Section: technical
- Group: data
- Kind: article
- Phase: later
- Order: 12
- Aliases: embedding
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

An embedding maps an id to a row of a learned matrix.

## Reader already knows

Vocabulary.

## This page stops before

Adding the position vector.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/data/embedding.mdx`
- Register it as `technicalPages["data/embedding"]`
- Set curriculum entry `embedding` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Lookup, Learned rows, Tied logits.

1. **Lookup.** table[id] with shape (50257, 768).
2. **Learned rows.** Training writes the rows. Inference reads them.
3. **Tied logits.** GPT-2 multiplies the final hidden state by the transpose of this matrix.

## Facts that must stay true

- Shape is 50257×768.
- Lookup is indexing.
- The output matrix is tied to this one.

## Diagram

A highlighted matrix row. Caption: The id selects a row.

## Python

Return row 1 of a written 3×4 table.

Numeric check: The vector equals that row.

## Toy slot

No toy on this page.

## Terms

- `<Term id="positional-encoding">position</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A real weight dump

## Checklist

- [ ] `/technical/data/embedding` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `embedding` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
