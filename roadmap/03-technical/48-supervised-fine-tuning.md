# Supervised fine-tuning

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `supervised-fine-tuning`
- Title: Supervised fine-tuning
- Route: `/technical/modern/supervised-fine-tuning`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 48
- Aliases: sft, fine-tuning, instruction tuning
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Supervised fine-tuning continues next-token training on pairs of a prompt and a desired answer.

## Reader already knows

Training step and dataset.

## This page stops before

Preference optimization.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/supervised-fine-tuning.mdx`
- Register it as `technicalPages["modern/supervised-fine-tuning"]`
- Set curriculum entry `supervised-fine-tuning` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The sequences, The mask, What changes.

1. **The sequences.** Each example is prompt tokens followed by answer tokens.
2. **The mask.** The loss is applied to the answer tokens. Prompt tokens are context. If you show a mask, zeros cover the prompt.
3. **What changes.** The same parameters are updated. This is still cross-entropy. It is not a new output head.

## Facts that must stay true

- The target is still the next token.
- The loss mask selects answer tokens.
- The base model’s architecture stays.

## Diagram

A prompt span with no loss marks, then an answer span with loss marks. Caption: The loss is on the answer tokens.

## Python

A mask [0,0,1,1] and per-token losses, averaged only over the 1s.

Numeric check: The mean uses two terms, not four.

## Toy slot

No toy on this page.

## Terms

- `<Term id="dpo">DPO</Term>`
- `<Term id="rlhf">RLHF</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A dataset of instructions

## Checklist

- [ ] `/technical/modern/supervised-fine-tuning` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `supervised-fine-tuning` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
