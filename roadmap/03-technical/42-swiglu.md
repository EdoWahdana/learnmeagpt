# SwiGLU

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `swiglu`
- Title: SwiGLU
- Route: `/technical/modern/swiglu`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 42
- Aliases: swiglu, gated mlp
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A SwiGLU feed-forward multiplies a gated linear path by a SiLU path, using three matrices instead of GPT-2’s two.

## Reader already knows

GELU feed-forward.

## This page stops before

A theorem that it is better.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/swiglu.mdx`
- Register it as `technicalPages["modern/swiglu"]`
- Set curriculum entry `swiglu` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Three matrices, The product, GPT-2’s MLP is the other one.

1. **Three matrices.** up, gate, and down. The hidden width is often 2/3 of 4×d so the parameter count stays near the two-matrix MLP. If you state a fraction, attribute it.
2. **The product.** down(silu(gate(x)) * up(x)). SiLU(x) = x * sigmoid(x).
3. **GPT-2’s MLP is the other one.** GPT-2 is Linear, GELU, Linear. SwiGLU replaces that pattern in later models such as LLaMA.

## Facts that must stay true

- SiLU(x) = x σ(x).
- The gate and the up projection are multiplied elementwise.
- GPT-2 uses GELU, not SwiGLU.

## Diagram

Two branches, a multiply, then a down projection. Caption: The gate multiplies the other branch.

## Python

SiLU(0) and SiLU(1).

Numeric check: SiLU(0) = 0. SiLU(1) = 1/(1+e^-1) ≈ 0.7311.

## Toy slot

No toy on this page.

## Terms

- `<Term id="gelu">GELU</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A benchmark table

## Checklist

- [ ] `/technical/modern/swiglu` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `swiglu` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
