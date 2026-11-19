# Layer norm

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `layer-norm`
- Title: Layer norm
- Route: `/technical/network/layer-norm`
- Section: technical
- Group: network
- Kind: article
- Phase: later
- Order: 17
- Aliases: layer norm, layernorm
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 layer norm recenters a 768-vector, scales by its spread, then applies a learned weight and bias.

## Reader already knows

Residual.

## This page stops before

RMSNorm, beyond a pointer.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/network/layer-norm.mdx`
- Register it as `technicalPages["network/layer-norm"]`
- Set curriculum entry `layer-norm` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Axis, Parameters, Block placement.

1. **Axis.** Normalize across the hidden entries of one position, not across the batch.
2. **Parameters.** Weight and bias, each length 768.
3. **Block placement.** x = x + attn(ln1(x)), then x = x + mlp(ln2(x)). A final ln_f runs after the stack.

## Facts that must stay true

- Norm is per token, over the hidden axis.
- GPT-2 layer norm has weight and bias.
- The two block equations above are the placement.

## Diagram

A block diagram with ln on the sublayer inputs and residual adds. Caption: GPT-2 normalizes the sublayer input.

## Python

Layer-norm a written length-4 vector with weight 1, bias 0, and a stated ε.

Numeric check: The normalized vector’s mean is about 0. Print it.

## Toy slot

No toy on this page.

## Terms

- `<Term id="rmsnorm">RMSNorm</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Batch norm

## Checklist

- [ ] `/technical/network/layer-norm` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `layer-norm` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
