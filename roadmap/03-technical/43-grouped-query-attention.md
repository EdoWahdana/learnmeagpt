# Grouped-query attention

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `grouped-query-attention`
- Title: Grouped-query attention
- Route: `/technical/modern/grouped-query-attention`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 43
- Aliases: gqa, grouped query, mqa
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Grouped-query attention uses fewer key and value heads than query heads. Several query heads share one key/value head.

## Reader already knows

Multi-head attention.

## This page stops before

A kernel.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/grouped-query-attention.mdx`
- Register it as `technicalPages["modern/grouped-query-attention"]`
- Set curriculum entry `grouped-query-attention` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Counts, Multi-query is the extreme, GPT-2.

1. **Counts.** If there are 12 query heads and 4 key/value heads, three query heads share one K/V head.
2. **Multi-query is the extreme.** One K/V head for all query heads.
3. **GPT-2.** GPT-2 uses 12 key heads and 12 value heads, the same count as query heads.

## Facts that must stay true

- Sharing is on K and V.
- Queries stay per head.
- GPT-2 does not share them.

## Diagram

12 query marks and 4 key marks, with brackets grouping the queries. Caption: Several queries share one key and value.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="multi-head-attention">multi-head</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A memory-savings percentage without a measurement

## Checklist

- [ ] `/technical/modern/grouped-query-attention` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `grouped-query-attention` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
