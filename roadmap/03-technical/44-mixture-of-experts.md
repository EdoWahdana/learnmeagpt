# Mixture of experts

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `mixture-of-experts`
- Title: Mixture of experts
- Route: `/technical/modern/mixture-of-experts`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 44
- Aliases: moe, experts, router
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A mixture-of-experts layer picks a few feed-forward networks per token with a router, instead of running one feed-forward network.

## Reader already knows

Feed-forward network.

## This page stops before

Training stability tricks.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/mixture-of-experts.mdx`
- Register it as `technicalPages["modern/mixture-of-experts"]`
- Set curriculum entry `mixture-of-experts` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Experts, Router, Compute versus parameters.

1. **Experts.** Several MLPs with separate weights.
2. **Router.** A linear map produces one score per expert. Top-k experts run for that token.
3. **Compute versus parameters.** Parameters grow with the number of experts. A token pays for the k experts that run, not for every expert.

## Facts that must stay true

- The router chooses k experts per token.
- Unchosen experts do not run for that token.
- GPT-2 has one MLP per block, not a router.

## Diagram

One token, a router, two of four MLPs lit. Caption: Only the chosen experts run for this token.

## Python

Given four router scores and k = 2, select the top two indexes.

Numeric check: The indexes are the two largest scores you wrote down.

## Toy slot

No toy on this page.

## Terms

- `<Term id="feed-forward">feed-forward</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A training run

## Checklist

- [ ] `/technical/modern/mixture-of-experts` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `mixture-of-experts` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
