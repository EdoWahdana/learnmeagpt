# GPT-2 config

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `config`
- Title: GPT-2 config
- Route: `/technical/gpt-2/config`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 27
- Aliases: config, 124m, 117m
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

GPT-2 small is the configuration n_layer 12, n_head 12, n_embd 768, n_ctx 1024, vocab 50257.

## Reader already knows

The stack page.

## This page stops before

A parameter total that was not computed in this session.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/config.mdx`
- Register it as `technicalPages["gpt-2/config"]`
- Set curriculum entry `config` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The five numbers, Paper and checkpoint, What this site traces.

1. **The five numbers.** List them and the derived sizes: head dim 64 and MLP width 3072.
2. **Paper and checkpoint.** The paper says 117M for small. A loaded checkpoint’s numel can differ. Compute numel from the library, say whether tied embeddings were counted once, and print the integer you got plus the library version.
3. **What this site traces.** The explorer uses this configuration only.

## Facts that must stay true

- n_layer 12, n_head 12, n_embd 768, n_ctx 1024, vocab 50257.
- Head dim is 64. MLP width is 3072.
- The printed parameter integer comes from a run, and the note says how ties were counted.

## Diagram

A definition list of the five numbers, set as text, not as a picture of a logo. Caption: GPT-2 small.

## Python

If the checkpoint cannot be downloaded, leave the computed count out and leave that checklist box open. Do not invent the integer.

Numeric check: Any integer on the page is pasted from the program output recorded in Notes.

## Toy slot

No toy on this page.

## Terms

- `<Term id="weight-names">names</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A second model’s config mixed into the table

## Checklist

- [ ] `/technical/gpt-2/config` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `config` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
