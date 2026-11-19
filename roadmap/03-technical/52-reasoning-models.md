# Reasoning models

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `reasoning-models`
- Title: Reasoning models
- Route: `/technical/modern/reasoning-models`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 52
- Aliases: reasoning, chain of thought
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A reasoning model spends extra generated tokens on intermediate steps before the tokens it presents as the answer.

## Reader already knows

Sampling and supervised fine-tuning.

## This page stops before

A claim about a hidden training method of a named commercial model.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/reasoning-models.mdx`
- Register it as `technicalPages["modern/reasoning-models"]`
- Set curriculum entry `reasoning-models` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The tokens are ordinary tokens, Training can target those steps, Cost.

1. **The tokens are ordinary tokens.** Intermediate steps are still next-token generation inside the context window.
2. **Training can target those steps.** Supervised updates can include the intermediate tokens, not only the final answer. Say this as a possible target mask, not as the method of any one product.
3. **Cost.** More generated tokens mean more forward passes and a longer context. Point at context length.

## Facts that must stay true

- Intermediate steps are generated tokens.
- They occupy the context window.
- This page does not state an undisclosed training recipe.

## Diagram

A prompt, a span labeled intermediate tokens, and a span labeled answer. Caption: The intermediate tokens are generated before the answer.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="context-length">context length</Term>`
- `<Term id="supervised-fine-tuning">fine-tuning</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A hidden-policy claim
- Chain-of-thought extraction advice

## Checklist

- [ ] `/technical/modern/reasoning-models` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `reasoning-models` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
