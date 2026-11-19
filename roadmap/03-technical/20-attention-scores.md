# Attention scores

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `attention-scores`
- Title: Attention scores
- Route: `/technical/attention/attention-scores`
- Section: technical
- Group: attention
- Kind: article
- Phase: later
- Order: 20
- Aliases: attention score, scaled dot product
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A score is a query-key dot product divided by √d, with d = 64 in GPT-2 small.

## Reader already knows

Dot product and QKV.

## This page stops before

The causal mask’s −∞ fill, beyond saying future scores are removed before softmax.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/attention/attention-scores.mdx`
- Register it as `technicalPages["attention/attention-scores"]`
- Set curriculum entry `attention-scores` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Dot then scale, Softmax over keys, Future positions.

1. **Dot then scale.** score = (q · k) / √64. √64 = 8.
2. **Softmax over keys.** The scores at one query position become weights that sum to 1.
3. **Future positions.** A GPT removes future keys before that softmax. The mask page specifies the fill value.

## Facts that must stay true

- The scale is √64 = 8.
- Softmax is applied over the key axis.
- Future keys are excluded in a GPT.

## Diagram

A query row and a key row, a dot, then ÷ 8. Caption: The score is a scaled dot product.

## Python

Compute (q·k)/8 for a written pair of length-4 vectors, and note that GPT-2’s real d is 64 even though the toy vectors are short.

Numeric check: The toy quotient matches the arithmetic. The prose still says GPT-2 divides by 8.

## Toy slot

No toy on this page.

## Terms

- `<Term id="causal-mask">causal mask</Term>`
- `<Term id="softmax">softmax</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A multi-head implementation

## Checklist

- [ ] `/technical/attention/attention-scores` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `attention-scores` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
