# Context length

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `context-length`
- Title: Context length
- Route: `/technical/modern/context-length`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 45
- Aliases: context length, long context
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Self-attention’s score matrix grows with the square of the sequence length. GPT-2’s length is 1024. Later models use longer limits.

## Reader already knows

Causal mask and GPT-2 config.

## This page stops before

A survey of every long-context paper.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/context-length.mdx`
- Register it as `technicalPages["modern/context-length"]`
- Set curriculum entry `context-length` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The square, GPT-2’s limit, What changed later.

1. **The square.** A sequence of length S has S×S scores per head. Compare S = 1024 and S = 2048 by writing both products.
2. **GPT-2’s limit.** 1024 tokens, from the config.
3. **What changed later.** Name three facts without procedures: some models train with a longer limit, RoPE can be scaled, and some attention patterns skip pairs. Point at the RoPE page. Do not derive a scaling formula.

## Facts that must stay true

- 1024² = 1,048,576 scores per head per layer, before any batching.
- 2048² = 4,194,304.
- GPT-2’s trained limit is 1024.

## Diagram

Two squares, the second with four times the area. Caption: Doubling the length quadruples the score matrix.

## Python

Print 1024**2 and 2048**2.

Numeric check: 1048576 and 4194304.

## Toy slot

No toy on this page.

## Terms

- `<Term id="rope">RoPE</Term>`
- `<Term id="context-window">context window</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A recipe for extending a checkpoint

## Checklist

- [ ] `/technical/modern/context-length` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `context-length` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
