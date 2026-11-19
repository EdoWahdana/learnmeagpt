# Tokens

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tokens`
- Title: Tokens
- Route: `/beginners/tokens`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 4
- Aliases: token, token id, vocabulary
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A token is an item in a fixed vocabulary, and a piece of text is a sequence of those items’ ids.

## Reader already knows

Prompts.

## This page stops before

How byte-pair merges are trained. That is the technical BPE page.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/tokens.mdx`
- Register it as `beginnerPages["tokens"]`
- Set curriculum entry `tokens` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Text is split before any layer runs, GPT-2 uses a byte-level vocabulary of 50257, A word is not always one token, The ids are indexes.

1. **Text is split before any layer runs.** The model does not read letters directly. A tokenizer maps a string to integer ids.
2. **GPT-2 uses a byte-level vocabulary of 50257.** The vocabulary covers bytes, so any Unicode string can be encoded. 50257 is the GPT-2 vocabulary size. Do not invent the id for a word.
3. **A word is not always one token.** Once the tokenizer tool is embedded, the reader can see a common word as one id and a rarer form as several.
4. **The ids are indexes.** An id picks a row in the embedding table. The number 17 is not the meaning of a token.

## Facts that must stay true

- GPT-2’s vocabulary size is 50257.
- The tokenizer maps a string to a list of integers.
- Those integers are indexes, not magnitudes.
- The encoding in the tool runs locally.

## Diagram

An SVG of a word split into boxes, then an arrow to integer cells marked id. Caption: Text becomes a sequence of vocabulary ids. Do not print guessed ids.

## Python

Do not include a Python block on this page.

## Toy slot

Embed `Tokenizer` from the tokenizer toy when `src/components/tools/Tokenizer.tsx` exists.

## Terms

- `<Term id="text-becomes-numbers">embedding</Term>`
- `<Term id="vocabulary">vocabulary</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Training a BPE merge list
- A claim that tokens match English words
- Sending the typed string to a server

## Checklist

- [x] `/beginners/tokens` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The named toy is embedded when its component file exists; leave this box open if it does not
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `tokens` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll
- [x] When the tokenizer component exists, its ids for a fixed sentence match the library named in the toy spec

## Notes

- 2026-11-19: Wrote `src/content/beginners/tokens.mdx` (about 755 body words). Verified from the file: h2 order, definition first, facts (50257, string to integers, ids are indexes, tool runs locally), SVG with currentColor only and the spec caption inside `Figure`, no python fence, Terms `vocabulary` and `text-becomes-numbers`, no first person. Compiles with `@mdx-js/mdx` + `remark-frontmatter`. Not registered, no tool embedded; the figure ends section 3 so the `Tokenizer` can sit right under it.
- Splits and ids on the page were computed, not recalled. Command (run from repo root so `node_modules` resolves): `node tok.mjs` with `import { encode, decode } from 'gpt-tokenizer/encoding/r50k_base'` (gpt-tokenizer 4.1.2), printing `encode(s)` and `decode([id])` per id. Output: `"The cat sat on the mat."` -> [464,3797,3332,319,262,2603,13] = The| cat| sat| on| the| mat|. ; `" cat"` -> [3797] ; `"tokenization"` -> [30001,1634] = token|ization ; `" ChatGPT"` -> [24101,38,11571] = Chat|G|PT ; `" antidisestablishmentarianism"` -> [1885,29207,44390,3699,1042] = ant|idis|establishment|arian|ism ; `"Hello"` -> [15496] ; `" hello"` -> [23748] ; `"I love tokenization!"` -> [40,1842,11241,1634,0] = I| love| token|ization|! (figure, ids not printed).
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
