# The context window

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `context-window`
- Title: The context window
- Route: `/beginners/context-window`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 5
- Aliases: context, context length, context window
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The context window is the maximum number of tokens the model will take at one step.

## Reader already knows

Tokens.

## This page stops before

RoPE, the quadratic cost formula, and methods for extending context.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/context-window.mdx`
- Register it as `beginnerPages["context-window"]`
- Set curriculum entry `context-window` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The limit is counted in tokens, The prompt and the new tokens share the window, Position matters inside the window.

1. **The limit is counted in tokens.** GPT-2 small’s context length is 1024 tokens. Tokens are not words, so a short-looking paragraph can still be many tokens.
2. **The prompt and the new tokens share the window.** Each generated token takes one more position. A product whose window is full has to drop tokens or stop. Describe the limit, not a vendor’s UI.
3. **Position matters inside the window.** The model also receives where each token sits. The text-becomes-numbers page covers GPT-2’s position vector.

## Facts that must stay true

- GPT-2 small’s context length is 1024.
- The count is tokens, not words or characters.
- Generated tokens consume positions in the same window.

## Diagram

An SVG row of cells with a bracket labeled 1024, and a shorter bracket labeled prompt. Caption: GPT-2 small reads at most 1024 tokens at once.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="tokens">tokens</Term>`
- `<Term id="text-becomes-numbers">position</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- The quadratic attention formula
- Any method for contexts longer than 1024

## Checklist

- [x] `/beginners/context-window` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `context-window` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

- 2026-11-19: Wrote `src/content/beginners/context-window.mdx` (about 536 body words). Verified from the file: h2 order, definition first, facts (1024, counted in tokens, generated tokens use the same window), SVG with currentColor only and the spec caption inside `Figure`, no python fence, no tool embed, Terms `tokens` and `text-becomes-numbers`, no first person. Compiles with `@mdx-js/mdx` + `remark-frontmatter`. The token count example was computed with `gpt-tokenizer/encoding/r50k_base`: `"Tokenization splits text."` -> [30642,1634,30778,2420,13] = Token|ization| splits| text|. (5 tokens, 3 words). Diagram adds a third bracket, new tokens, beside the prompt bracket to show section 2.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
