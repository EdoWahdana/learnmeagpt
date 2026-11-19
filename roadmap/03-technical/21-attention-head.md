# Attention head

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `attention-head`
- Title: Attention head
- Route: `/technical/attention/attention-head`
- Section: technical
- Group: attention
- Kind: article
- Phase: later
- Order: 21
- Aliases: attention head, head
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

One head turns scaled scores into weights and outputs a weighted sum of values.

## Reader already knows

Attention scores.

## This page stops before

Concatenating heads.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/attention/attention-head.mdx`
- Register it as `technicalPages["attention/attention-head"]`
- Set curriculum entry `attention-head` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Weights, Mixture, A tiny numeric head.

1. **Weights.** softmax of the scaled scores over allowed keys.
2. **Mixture.** output = Σ weight_k * value_k.
3. **A tiny numeric head.** Use two positions and length-2 values. Include 0.25 and 0.75 as the weights and show the mixture (0.25, 0.75) if the values are (1, 0) and (0, 1).

## Facts that must stay true

- Weights sum to 1.
- The output is a weighted sum of values.
- The numeric example equals (0.25, 0.75).

## Diagram

Two value vectors combining with weights 0.25 and 0.75. Caption: The head mixes values.

## Python

The weighted sum.

Numeric check: [0.25, 0.75].

## Toy slot

No toy on this page.

## Terms

- `<Term id="multi-head-attention">multi-head</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Real GPT-2 activations

## Checklist

- [ ] `/technical/attention/attention-head` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `attention-head` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
