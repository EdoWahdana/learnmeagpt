# Inference batching

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `inference-batching`
- Title: Inference batching
- Route: `/technical/modern/inference-batching`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 47
- Aliases: batching, continuous batching
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Inference batching runs several requests through the same matrix multiplies. Continuous batching adds a new request when another request finishes a token.

## Reader already knows

KV cache and batch.

## This page stops before

A serving-system implementation.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/inference-batching.mdx`
- Register it as `technicalPages["modern/inference-batching"]`
- Set curriculum entry `inference-batching` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The matmul, The snag, Continuous batching.

1. **The matmul.** Several queries can share one multiplication with the same weights.
2. **The snag.** Requests finish at different times because they generate different numbers of tokens.
3. **Continuous batching.** When one request ends, another can take its slot. Name the idea. Do not specify a scheduler’s code.

## Facts that must stay true

- Weights are shared across the requests in the batch.
- Generation lengths differ.
- Continuous batching refills a free slot.

## Diagram

Three requests, one ending, a fourth entering that row. Caption: A finished request frees a slot.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="kv-cache">KV cache</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A server configuration

## Checklist

- [ ] `/technical/modern/inference-batching` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `inference-batching` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
