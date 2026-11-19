# Multi-head attention

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `multi-head-attention`
- Title: Multi-head attention
- Route: `/technical/attention/multi-head-attention`
- Section: technical
- Group: attention
- Kind: article
- Phase: later
- Order: 22
- Aliases: multi-head, multi head
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 runs 12 heads on slices of the 768-vector and concatenates their outputs back to 768.

## Reader already knows

One head.

## This page stops before

The mask.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/attention/multi-head-attention.mdx`
- Register it as `technicalPages["attention/multi-head-attention"]`
- Set curriculum entry `multi-head-attention` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Split, Independent scores, Concat then project.

1. **Split.** 12 heads × 64 = 768.
2. **Independent scores.** Each head has its own Q, K, and V slices and its own weights.
3. **Concat then project.** Concatenate the 12 outputs to 768, then apply the output projection, including its bias in GPT-2.

## Facts that must stay true

- 12 × 64 = 768.
- Heads do not share their score weights.
- The output projection returns length 768.

## Diagram

A 768 bar split into 12 slices, then joined. Caption: Twelve heads cover the hidden vector without overlap.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="attention-head">head</Term>`
- `<Term id="causal-mask">mask</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A speed benchmark

## Checklist

- [ ] `/technical/attention/multi-head-attention` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `multi-head-attention` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
