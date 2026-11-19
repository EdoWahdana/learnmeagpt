# KV cache

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `kv-cache`
- Title: KV cache
- Route: `/technical/gpt-2/kv-cache`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 34
- Aliases: kv cache, cache
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A KV cache stores past keys and values so the next token does not recompute them.

## Reader already knows

Multi-head attention and sampling.

## This page stops before

Paged attention.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/kv-cache.mdx`
- Register it as `technicalPages["gpt-2/kv-cache"]`
- Set curriculum entry `kv-cache` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: What is stored, What is new, The result matches a full recompute.

1. **What is stored.** Per layer, per head, the keys and values for tokens already in the context.
2. **What is new.** The newest query attends to cached keys and to its own key.
3. **The result matches a full recompute.** State that a correct cache matches full attention on the same prefix. Do not claim a speed number.

## Facts that must stay true

- The cache holds K and V, not Q, for past tokens.
- A new token appends one K and one V per head.
- The outputs match a full recompute when the cache is correct.

## Diagram

A growing row of cached keys and a single new query. Caption: Past keys stay. The new token adds one.

## Python

On a 3-token toy, show full scores and cached scores are equal.

Numeric check: The two score rows match for the last query.

## Toy slot

No toy on this page.

## Terms

- `<Term id="inference-batching">batching</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A server

## Checklist

- [ ] `/technical/gpt-2/kv-cache` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `kv-cache` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
