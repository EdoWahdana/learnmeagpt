# RMSNorm

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `rmsnorm`
- Title: RMSNorm
- Route: `/technical/modern/rmsnorm`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 41
- Aliases: rmsnorm, rms norm
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

RMSNorm divides a vector by its root-mean-square and multiplies by a learned scale. It does not subtract the mean.

## Reader already knows

Layer norm.

## This page stops before

A speed claim.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/rmsnorm.mdx`
- Register it as `technicalPages["modern/rmsnorm"]`
- Set curriculum entry `rmsnorm` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Formula, No bias and no recenter, Where later models put it.

1. **Formula.** rms = sqrt(mean(x²) + ε), then output = x / rms * weight.
2. **No bias and no recenter.** Contrast with GPT-2 layer norm, which subtracts the mean and has a bias.
3. **Where later models put it.** Many later decoder models normalize the sublayer input, as GPT-2 did, but with RMSNorm. Do not assign RMSNorm to GPT-2.

## Facts that must stay true

- RMSNorm does not subtract the mean.
- It has a scale and, in the usual form, no bias.
- GPT-2 uses layer norm, not RMSNorm.

## Diagram

A vector, a single rms value, and a scaled result. Caption: Divide by the root-mean-square. Do not recenter.

## Python

RMSNorm the vector (1, -1, 1, -1) with weight 1 and a stated ε of 0.

Numeric check: The rms is 1, so the vector is unchanged.

## Toy slot

No toy on this page.

## Terms

- `<Term id="layer-norm">layer norm</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A performance percentage

## Checklist

- [ ] `/technical/modern/rmsnorm` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `rmsnorm` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
