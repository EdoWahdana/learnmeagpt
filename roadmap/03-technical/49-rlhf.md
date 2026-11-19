# Reinforcement learning from human feedback

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `rlhf`
- Title: Reinforcement learning from human feedback
- Route: `/technical/modern/rlhf`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 49
- Aliases: rlhf, reward model
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

RLHF trains a reward model on human comparisons, then updates the language model so that higher-reward answers become more likely.

## Reader already knows

Supervised fine-tuning.

## This page stops before

A PPO derivation.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/rlhf.mdx`
- Register it as `technicalPages["modern/rlhf"]`
- Set curriculum entry `rlhf` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Comparisons, The policy, A constraint.

1. **Comparisons.** People rank two answers to the same prompt. The reward model is trained on those pairs.
2. **The policy.** The language model is then updated using the reward. The InstructGPT work used PPO. Say that, and do not derive PPO.
3. **A constraint.** Updates are kept near the starting model by a penalty term. Name it as a penalty on the change. Do not write an unstated equation.

## Facts that must stay true

- The reward model is trained on comparisons.
- The language model is updated afterward.
- InstructGPT used PPO. Do not add a second algorithm unless you cite it.

## Diagram

Two answers, a preference arrow, a reward box, then an arrow into the language model. Caption: Comparisons train a reward. The reward trains the model.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="dpo">DPO</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A PPO implementation

## Checklist

- [ ] `/technical/modern/rlhf` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `rlhf` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
