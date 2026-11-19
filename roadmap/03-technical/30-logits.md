# Logits

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `logits`
- Title: Logits
- Route: `/technical/gpt-2/logits`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 30
- Aliases: logits
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Logits are the 50257 real scores at a position, before softmax.

## Reader already knows

Forward pass.

## This page stops before

Temperature.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/logits.mdx`
- Register it as `technicalPages["gpt-2/logits"]`
- Set curriculum entry `logits` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Shape, They are not probabilities, The next page’s input.

1. **Shape.** One position yields a vector of length 50257.
2. **They are not probabilities.** They may be negative and need not sum to 1.
3. **The next page’s input.** Softmax of the last position’s logits is the next-token distribution at T = 1.

## Facts that must stay true

- Length 50257.
- Not a distribution until softmax.
- The last position predicts the next id.

## Diagram

A long bar marked 50257. Caption: One logit per vocabulary id.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="softmax">softmax</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A dumped logit vector from a real run, unless it comes from the trace file

## Checklist

- [ ] `/technical/gpt-2/logits` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `logits` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
