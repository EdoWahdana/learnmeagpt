# Weight names

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `weight-names`
- Title: Weight names
- Route: `/technical/gpt-2/weight-names`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 28
- Aliases: weights, parameters, checkpoint
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Each GPT-2 parameter tensor has a name and a shape in the checkpoint.

## Reader already knows

Config.

## This page stops before

A full dump of values.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/weight-names.mdx`
- Register it as `technicalPages["gpt-2/weight-names"]`
- Set curriculum entry `weight-names` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: How to list them, Shapes to expect, Tie.

1. **How to list them.** Load `gpt2` and print name and shape. The page’s table is that printout.
2. **Shapes to expect.** Token embedding (50257, 768), position embedding (1024, 768), and per block the norms, the attention projections, and the MLP projections. If a library layout transposes a matrix, say so next to that row.
3. **Tie.** State whether `lm_head` is a separate tensor or an alias of the token embedding in the build you loaded.

## Facts that must stay true

- The table is generated from the checkpoint.
- Library version is on the page.
- A disagreement with this spec is resolved by the checkpoint, and Notes record it.

## Diagram

No decorative diagram. The table is the figure. Caption: Names and shapes from the loaded checkpoint.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="forward-pass">forward pass</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Printing every scalar

## Checklist

- [ ] `/technical/gpt-2/weight-names` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `weight-names` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
