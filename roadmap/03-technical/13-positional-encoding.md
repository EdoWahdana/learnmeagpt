# Positional encoding

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `positional-encoding`
- Title: Positional encoding
- Route: `/technical/data/positional-encoding`
- Section: technical
- Group: data
- Kind: article
- Phase: later
- Order: 13
- Aliases: position, positional encoding
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 adds a learned vector for the position index, from 0 to 1023.

## Reader already knows

Embedding.

## This page stops before

RoPE, beyond one contrast sentence.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/data/positional-encoding.mdx`
- Register it as `technicalPages["data/positional-encoding"]`
- Set curriculum entry `positional-encoding` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Table, Sum, Not the 2017 sinusoid.

1. **Table.** Shape (1024, 768). Position p adds row p.
2. **Sum.** hidden = token vector + position vector, elementwise.
3. **Not the 2017 sinusoid.** The original transformer used fixed sinusoids. GPT-2 learns the rows.

## Facts that must stay true

- Position shape is 1024×768.
- The add is elementwise.
- GPT-2 positions are learned.

## Diagram

Two rows added into one. Caption: Token row plus position row.

## Python

Add two written length-4 vectors.

Numeric check: The sum is position-wise.

## Toy slot

No toy on this page.

## Terms

- `<Term id="rope">rotary position</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- ALiBi

## Checklist

- [ ] `/technical/data/positional-encoding` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `positional-encoding` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
