# Token

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `token`
- Title: Token
- Route: `/technical/data/token`
- Section: technical
- Group: data
- Kind: article
- Phase: later
- Order: 9
- Aliases: token
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A GPT-2 token is an integer id from 0 through 50256 from the model’s byte-level BPE tokenizer.

## Reader already knows

The beginner tokens page.

## This page stops before

Merge training.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/data/token.mdx`
- Register it as `technicalPages["data/token"]`
- Set curriculum entry `token` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Range, Bytes, End marker.

1. **Range.** 50257 ids, from 0 through 50256.
2. **Bytes.** Base symbols include bytes, so every Unicode string encodes. A word is not a token boundary.
3. **End marker.** Confirm `<|endoftext|>` with the library and print its id.

## Facts that must stay true

- Vocabulary size is 50257.
- Ids are indexes.
- The end-of-text id is the library’s value.

## Diagram

A string arrowing to id cells filled from the library. Caption: Ids for this string come from the tokenizer.

## Python

Encode one fixed sentence twice.

Numeric check: Both calls return the same ids, and those ids are what the page prints.

## Toy slot

Embed Tokenizer when it exists.

## Terms

- `<Term id="byte-pair-encoding">byte-pair encoding</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- An id typed from memory

## Checklist

- [ ] `/technical/data/token` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The named toy is embedded when its component file exists; leave this box open if it does not
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `token` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
