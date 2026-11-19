# Text becomes numbers

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `text-becomes-numbers`
- Title: Text becomes numbers
- Route: `/beginners/text-becomes-numbers`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 11
- Aliases: embedding, position
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Each token id selects a vector from an embedding table, and GPT-2 adds a second vector that depends on the position.

## Reader already knows

Tokens and vectors.

## This page stops before

How the embedding is trained, and RoPE.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/text-becomes-numbers.mdx`
- Register it as `beginnerPages["text-becomes-numbers"]`
- Set curriculum entry `text-becomes-numbers` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The id is an index into a table, The looked-up row is the token vector, GPT-2 adds a learned position vector, That sum enters the first block.

1. **The id is an index into a table.** GPT-2 small’s token embedding table has 50257 rows of length 768.
2. **The looked-up row is the token vector.** Write the selection as row = table[id]. The id’s size is not a magnitude.
3. **GPT-2 adds a learned position vector.** There is a vector for each position from 0 through 1023. The block input is token vector plus position vector. These are learned parameters, not the sinusoidal positions from the 2017 transformer paper.
4. **That sum enters the first block.** Stop at the entrance to the stack.

## Facts that must stay true

- The GPT-2 token embedding table has shape 50257 by 768.
- The position table has shape 1024 by 768.
- The block input is the sum of the token vector and the position vector.
- GPT-2’s position vectors are learned.

## Diagram

An SVG of a highlighted embedding row, a highlighted position row, and a plus sign. Caption: Token vector plus position vector.

## Python

Use a tiny table of 3 vocabulary rows and 2 positions, with numbers written beside the code, and add them position-wise.

Numeric check: A comment states the real shapes 50257×768 and 1024×768, and the tiny example’s sum is the position-wise sum of the two rows you defined.

## Toy slot

No toy on this page.

## Terms

- `<Term id="tokens">token id</Term>`
- `<Term id="vectors">vector</Term>`
- `<Term id="positional-encoding">position</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- RoPE
- A dump of real embedding weights

## Checklist

- [x] `/beginners/text-becomes-numbers` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The Python block matches the numeric check in this spec
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `text-becomes-numbers` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes
- Python run: `python3` on the block extracted from `text-becomes-numbers.mdx` printed `[2, 4, 0]` and `[0, 3, 5]`. Tiny tables: token rows (2, 0, 1), (1, 3, 0), (0, 1, 4); position rows (1, 1, 0), (0, 2, 1); "cat" id 1 at position 0 and "sat" id 2 at position 1. A comment states 50257×768 and 1024×768.
- MDX compiles with `@mdx-js/mdx` `compile` plus remark-frontmatter and remark-gfm. Body is about 810 words.
- The ids 0, 1, 2 are labeled on the page as invented, not GPT-2 ids.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
