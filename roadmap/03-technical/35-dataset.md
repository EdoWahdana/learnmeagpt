# Dataset

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `dataset`
- Title: Dataset
- Route: `/technical/training/dataset`
- Section: technical
- Group: training
- Kind: article
- Phase: later
- Order: 35
- Aliases: dataset, webtext
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 is trained to predict the next token in documents. The paper’s corpus is called WebText.

## Reader already knows

Training step.

## This page stops before

Building a new corpus.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/training/dataset.mdx`
- Register it as `technicalPages["training/dataset"]`
- Set curriculum entry `dataset` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Documents become token streams, WebText, This site does not ship WebText.

1. **Documents become token streams.** Training sequences are token ids, not a table of labels.
2. **WebText.** The GPT-2 paper describes WebText as outbound links from Reddit with a score filter. Do not invent the document count. If you cite a count, cite the paper and the number it prints.
3. **This site does not ship WebText.** Say that.

## Facts that must stay true

- The target is the next token.
- WebText is the paper’s corpus name.
- This site does not distribute it.

## Diagram

A document split into tokens with each arrow pointing at the next id. Caption: Each position’s target is the following token.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="batch">batch</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A download link presented as official if you are not sure

## Checklist

- [ ] `/technical/training/dataset` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `dataset` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
