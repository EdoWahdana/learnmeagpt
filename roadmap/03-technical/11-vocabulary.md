# Vocabulary

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `vocabulary`
- Title: Vocabulary
- Route: `/technical/data/vocabulary`
- Section: technical
- Group: data
- Kind: article
- Phase: later
- Order: 11
- Aliases: vocabulary
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The vocabulary is the ordered set that indexes embedding rows and the logit axis.

## Reader already knows

Token.

## This page stops before

The merge algorithm.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/data/vocabulary.mdx`
- Register it as `technicalPages["data/vocabulary"]`
- Set curriculum entry `vocabulary` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Two matrices share the size, Order matters, What fills the 50257.

1. **Two matrices share the size.** Embedding rows and logits are both 50257 in GPT-2, and the matrices are tied.
2. **Order matters.** Id 0 and id 1 are different tokens.
3. **What fills the 50257.** 256 bytes, merged symbols, and special tokens, totaling 50257.

## Facts that must stay true

- 50257 indexes both embeddings and logits.
- The matrices are tied in GPT-2.
- Order is part of the vocabulary.

## Diagram

One id column beside a matrix with the same row count. Caption: The vocabulary indexes embeddings and logits.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="embedding">embedding</Term>`
- `<Term id="logits">logits</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A dump of all token strings

## Checklist

- [ ] `/technical/data/vocabulary` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `vocabulary` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
