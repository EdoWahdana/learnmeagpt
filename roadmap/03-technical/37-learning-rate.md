# Learning rate

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `learning-rate`
- Title: Learning rate
- Route: `/technical/training/learning-rate`
- Section: technical
- Group: training
- Kind: article
- Phase: later
- Order: 37
- Aliases: learning rate
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The learning rate scales the parameter step. GPT-2’s paper describes a warmup and a decay. Quote that schedule from the paper if you state numbers.

## Reader already knows

Gradient.

## This page stops before

Adam hyperparameters beyond naming Adam as the optimizer the paper used, if you verify the sentence.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/training/learning-rate.mdx`
- Register it as `technicalPages["training/learning-rate"]`
- Set curriculum entry `learning-rate` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The step size, Warmup, Too large and too small.

1. **The step size.** η in w ← w − η g.
2. **Warmup.** The paper increases the rate from a small value at the start. If you print the length of the warmup, quote the paper.
3. **Too large and too small.** A step can diverge when η is large and move little when η is small. Show the toy (w − 3)² with two η values, not a GPT-2 run.

## Facts that must stay true

- η scales the step.
- Any GPT-2 schedule number is quoted, not remembered.
- The toy shows two step sizes on (w − 3)².

## Diagram

Two arrows of different lengths on the same slope. Caption: The learning rate scales the step.

## Python

One gradient step on (w-3)^2 from w = 0 with η = 0.1 and η = 0.01.

Numeric check: Slopes are -6, so the steps land at 0.6 and 0.06.

## Toy slot

No toy on this page.

## Terms

- `<Term id="training-step">step</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A universal best rate

## Checklist

- [ ] `/technical/training/learning-rate` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `learning-rate` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
