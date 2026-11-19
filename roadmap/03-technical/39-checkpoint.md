# Checkpoint

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `checkpoint`
- Title: Checkpoint
- Route: `/technical/training/checkpoint`
- Section: technical
- Group: training
- Kind: article
- Phase: later
- Order: 39
- Aliases: checkpoint
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A checkpoint is a saved copy of the parameters, and usually the step count.

## Reader already knows

Training step.

## This page stops before

Optimizer-state formats, beyond naming that they may be saved separately.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/training/checkpoint.mdx`
- Register it as `technicalPages["training/checkpoint"]`
- Set curriculum entry `checkpoint` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: What is required to reload the model, What is extra, GPT-2 small on this site.

1. **What is required to reload the model.** The parameter tensors.
2. **What is extra.** Optimizer moments and the step counter, if training should resume.
3. **GPT-2 small on this site.** The explorer loads the public checkpoint rather than a checkpoint this site trains.

## Facts that must stay true

- Parameters are sufficient to run inference.
- Resume training needs more than the parameters if the optimizer has state.
- This site does not publish a trained-from-scratch checkpoint.

## Diagram

A box labeled parameters saved at step n. Caption: A checkpoint stores the parameters.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="config">config</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Instructions to upload a checkpoint

## Checklist

- [ ] `/technical/training/checkpoint` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `checkpoint` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
