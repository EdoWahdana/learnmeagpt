# Byte-pair encoding

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `byte-pair-encoding`
- Title: Byte-pair encoding
- Route: `/technical/data/byte-pair-encoding`
- Section: technical
- Group: data
- Kind: article
- Phase: later
- Order: 10
- Aliases: bpe, byte pair encoding
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

BPE repeatedly merges the most frequent adjacent pair, starting from bytes or characters.

## Reader already knows

Token.

## This page stops before

GPT-2’s real merge table.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/data/byte-pair-encoding.mdx`
- Register it as `technicalPages["data/byte-pair-encoding"]`
- Set curriculum entry `byte-pair-encoding` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Start small, Count pairs, Apply later.

1. **Start small.** The toy corpus starts from characters.
2. **Count pairs.** Merge the adjacent pair with the highest count. State the tie break in the code.
3. **Apply later.** Encoding uses the saved merge order. It does not recount a new string.

## Facts that must stay true

- The winner is the highest adjacent count.
- The tie rule is written in the code.
- This toy is not GPT-2’s merge list.

## Diagram

Two symbols joining into one, twice. Caption: Each step merges the most frequent adjacent pair.

## Python

Run BPE on the words low×4, lower×2, newest×3, widest×2, from characters.

Numeric check: Two runs print the same first three merges, and the page shows those merges.

## Toy slot

The BPE trainer tool may embed here when it exists.

## Terms

- `<Term id="token">token</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A remembered GPT-2 merge order

## Checklist

- [ ] `/technical/data/byte-pair-encoding` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The named toy is embedded when its component file exists; leave this box open if it does not
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `byte-pair-encoding` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
