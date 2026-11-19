# Direct preference optimization

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `dpo`
- Title: Direct preference optimization
- Route: `/technical/modern/dpo`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 50
- Aliases: dpo, preference
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

DPO updates the language model on preferred and rejected answers directly, without a separate reward model at training time.

## Reader already knows

RLHF.

## This page stops before

The closed-form proof. State the training pair and what is increased.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/dpo.mdx`
- Register it as `technicalPages["modern/dpo"]`
- Set curriculum entry `dpo` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The pair, The direction, What is absent.

1. **The pair.** Each example has a prompt, a preferred completion, and a rejected completion.
2. **The direction.** The update raises the relative likelihood of the preferred completion.
3. **What is absent.** No reward-model training step sits in the loop. Say that as the difference from the RLHF page.

## Facts that must stay true

- DPO uses preferred and rejected completions.
- It does not train a separate reward model in the loop.
- The preferred completion’s relative likelihood is what the update increases.

## Diagram

One prompt, two completions, one marked preferred. Caption: The update uses the pair directly.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="rlhf">RLHF</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A derived loss copied from memory. If you print a formula, cite the paper and the equation number.

## Checklist

- [ ] `/technical/modern/dpo` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `dpo` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
