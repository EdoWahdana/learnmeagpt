# Rotary position

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `rope`
- Title: Rotary position
- Route: `/technical/modern/rope`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 40
- Aliases: rope, rotary
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Rotary position embeddings rotate the query and key at each position so their dot product depends on the relative offset.

## Reader already knows

GPT-2’s learned position add.

## This page stops before

A derivation of every angle. State the mechanism and one property.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/rope.mdx`
- Register it as `technicalPages["modern/rope"]`
- Set curriculum entry `rope` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: What is rotated, Relative offset, GPT-2 does not do this.

1. **What is rotated.** Q and K are rotated. V is not, in the usual formulation.
2. **Relative offset.** The score depends on the difference of positions, not on each absolute index alone.
3. **GPT-2 does not do this.** GPT-2 adds a learned position vector. RoPE is a later replacement, used by models such as LLaMA. Say that split.

## Facts that must stay true

- V is not rotated in the usual RoPE block.
- The score uses a relative offset.
- GPT-2 uses added position vectors instead.

## Diagram

Two vectors at positions i and j, each drawn with a small rotation arc, then a dot. Caption: Queries and keys are rotated by position.

## Python

Rotate a 2-d vector (1, 0) by 90 degrees and show the result (0, 1). Label it as a toy rotation, not a model’s angles.

Numeric check: (1, 0) rotated by 90° is (0, 1) within rounding.

## Toy slot

No toy on this page.

## Terms

- `<Term id="positional-encoding">GPT-2 positions</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A claim that RoPE is strictly better

## Checklist

- [ ] `/technical/modern/rope` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `rope` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
