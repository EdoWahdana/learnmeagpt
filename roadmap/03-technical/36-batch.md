# Batch

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `batch`
- Title: Batch
- Route: `/technical/training/batch`
- Section: technical
- Group: training
- Kind: article
- Phase: later
- Order: 36
- Aliases: batch
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A batch is several token sequences stacked on a batch axis and run through the same forward pass.

## Reader already knows

Shape and dataset.

## This page stops before

Gradient accumulation.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/training/batch.mdx`
- Register it as `technicalPages["training/batch"]`
- Set curriculum entry `batch` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Axes, The loss, Memory.

1. **Axes.** Shape (batch, sequence) for ids, then (batch, sequence, 768) for hidden states.
2. **The loss.** Average the per-token cross-entropy over the targets in the batch.
3. **Memory.** The batch axis multiplies activation storage. State that as the tradeoff, with no hardware number.

## Facts that must stay true

- Ids have shape (batch, sequence).
- The loss averages token terms.
- A larger batch stores more activations.

## Diagram

Three sequences stacked. Caption: The batch axis stacks sequences.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="training-step">training step</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A recommended batch size

## Checklist

- [ ] `/technical/training/batch` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `batch` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
