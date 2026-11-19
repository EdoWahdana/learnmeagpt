# Overfitting

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `overfitting`
- Title: Overfitting
- Route: `/technical/training/overfitting`
- Section: technical
- Group: training
- Kind: article
- Phase: later
- Order: 38
- Aliases: overfitting
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Overfitting is a falling training loss while loss on held-out text stops falling or rises.

## Reader already knows

Dataset and loss.

## This page stops before

Regularization recipes.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/training/overfitting.mdx`
- Register it as `technicalPages["training/overfitting"]`
- Set curriculum entry `overfitting` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Two losses, The pattern, What this page does not conclude.

1. **Two losses.** Training loss and held-out loss.
2. **The pattern.** Training loss keeps dropping after held-out loss does not.
3. **What this page does not conclude.** A lower training loss alone is not a claim about held-out text.

## Facts that must stay true

- Held-out text is not used for the update.
- The definition is the gap in those two curves.
- Training loss by itself is not the held-out result.

## Diagram

Two curves, one still falling, one flat. Caption: Overfitting is the split between the two losses.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="checkpoint">checkpoint</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Advice to stop at a particular epoch

## Checklist

- [ ] `/technical/training/overfitting` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `overfitting` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
