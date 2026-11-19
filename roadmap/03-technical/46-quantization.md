# Quantization

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `quantization`
- Title: Quantization
- Route: `/technical/modern/quantization`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 46
- Aliases: quantization, int8, int4
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Quantization stores weights as small integers plus a scale, so the loaded numbers are an approximation of the original floats.

## Reader already knows

Parameters.

## This page stops before

GPTQ or AWQ procedures. You may name them in one sentence each if you describe them as post-training methods, without steps.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/quantization.mdx`
- Register it as `technicalPages["modern/quantization"]`
- Set curriculum entry `quantization` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The map, Error, What is not claimed.

1. **The map.** A float is reconstructed as scale × integer, or with a zero point if you include one. Say which form you show.
2. **Error.** The reconstructed weight is not always the original. The page shows one worked rounding.
3. **What is not claimed.** No sentence says quality is unchanged. Say the difference has to be measured on held-out loss or another stated task.

## Facts that must stay true

- The page’s formula matches its worked numbers.
- Integers are smaller to store than float32.
- No quality claim is made without a measurement, and this page does not include one.

## Diagram

A number line, a float, and the nearest tick. Caption: The stored integer is a rounded weight.

## Python

Quantize 1.2, -0.3, and 0.05 to signed 4-bit-style ticks you define, and dequantize.

Numeric check: The code’s ticks match the prose.

## Toy slot

No toy on this page.

## Terms

- `<Term id="checkpoint">checkpoint</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A compression ratio presented as quality

## Checklist

- [ ] `/technical/modern/quantization` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `quantization` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
