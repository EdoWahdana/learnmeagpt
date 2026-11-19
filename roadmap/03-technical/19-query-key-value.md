# Query, key, and value

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `query-key-value`
- Title: Query, key, and value
- Route: `/technical/attention/query-key-value`
- Section: technical
- Group: attention
- Kind: article
- Phase: later
- Order: 19
- Aliases: query, key, value, qkv
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Attention projects each hidden vector into a query, a key, and a value.

## Reader already knows

Linear layer and the beginner picture of attention.

## This page stops before

Scores and the mask.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/attention/query-key-value.mdx`
- Register it as `technicalPages["attention/query-key-value"]`
- Set curriculum entry `query-key-value` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Three linear maps, Roles, One projection in GPT-2.

1. **Three linear maps.** From a 768-vector, GPT-2 produces Q, K, and V. Per head they are length 64, because 768 / 12 = 64.
2. **Roles.** The query is what this position looks for. The key is what a position offers for the match. The value is what gets mixed. Keep the definitions to those roles.
3. **One projection in GPT-2.** The common implementation uses one combined weight from 768 to 2304, then a split. Say so, and let the weight-names page confirm the checkpoint shape.

## Facts that must stay true

- Head dimension is 64.
- Q, K, and V are linear projections.
- A combined 768→2304 map is the usual GPT-2 layout.

## Diagram

One vector splitting into three smaller vectors labeled Q, K, and V. Caption: Three projections of the same hidden vector.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="attention-scores">score</Term>`
- `<Term id="weight-names">weight names</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A score formula

## Checklist

- [ ] `/technical/attention/query-key-value` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `query-key-value` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
