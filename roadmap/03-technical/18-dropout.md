# Dropout

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `dropout`
- Title: Dropout
- Route: `/technical/network/dropout`
- Section: technical
- Group: network
- Kind: article
- Phase: later
- Order: 18
- Aliases: dropout
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Dropout zeros a random fraction of values during training. At inference it is the identity.

## Reader already knows

Linear layer.

## This page stops before

A recommended dropout rate.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/network/dropout.mdx`
- Register it as `technicalPages["network/dropout"]`
- Set curriculum entry `dropout` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Two modes, Seed the example, GPT-2.

1. **Two modes.** Training applies a random mask. Inference returns the input unchanged.
2. **Seed the example.** The page’s mask comes from a stated seed.
3. **GPT-2.** Dropout modules exist in the GPT-2 block for training. Any rate you print is read from the code version you cite.

## Facts that must stay true

- Inference dropout is the identity.
- The example mask is seeded.
- A quoted rate names its source.

## Diagram

Four cells, two empty, labeled training; the same four filled, labeled inference. Caption: Dropout zeros entries during training only.

## Python

Drop a length-8 vector at p = 0.5 with a fixed seed, and show inference returning the vector.

Numeric check: A second run drops the same positions.

## Toy slot

No toy on this page.

## Terms

- `<Term id="training-step">training</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Advice to choose a rate

## Checklist

- [ ] `/technical/network/dropout` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `dropout` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
