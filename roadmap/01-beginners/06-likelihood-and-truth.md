# Likelihood and truth

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `likelihood-and-truth`
- Title: Likelihood and truth
- Route: `/beginners/likelihood-and-truth`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 6
- Aliases: hallucination, false, truth
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The training target is the next token in the text, so a fluent continuation is not a check that the continuation matches the world.

## Reader already knows

The context window.

## This page stops before

Retrieval products, citations, and a theory of knowledge.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/likelihood-and-truth.mdx`
- Register it as `beginnerPages["likelihood-and-truth"]`
- Set curriculum entry `likelihood-and-truth` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The target is the next token, Fluency is a property of the continuation, A database is a separate system.

1. **The target is the next token.** Training compares the model’s distribution with the token that followed in the training text. It does not attach a separate true-or-false label.
2. **Fluency is a property of the continuation.** Likely tokens can form grammatical text whether or not a person would call the claim true.
3. **A database is a separate system.** The base model does not consult a fact list. The later tool-use page describes a product that appends outside text. Keep the two systems apart.

## Facts that must stay true

- The base objective is next-token prediction on text.
- That objective does not compare a sentence to an external fact list.
- A fluent answer can still be false.

## Diagram

An SVG of one prompt splitting into a likely continuation, with a separate unconnected box labeled fact list. Caption: Likelihood is measured against text, not against a fact list.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="how-a-gpt-works">next token</Term>`
- `<Term id="tool-use">tool</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Advice about trusting a named product
- Medical, legal, or financial guidance
- An unsourced statistic

## Checklist

- [x] `/beginners/likelihood-and-truth` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `likelihood-and-truth` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

- 2026-11-19: Wrote `src/content/beginners/likelihood-and-truth.mdx` (about 651 body words). Verified from the file: h2 order, definition first, facts (next-token objective, no comparison to a fact list, fluent can be false), SVG with currentColor only and the spec caption inside `Figure`, no python fence, no tool embed, Terms `how-a-gpt-works` and `tool-use`, no first person, no statistics. Compiles with `@mdx-js/mdx` + `remark-frontmatter`. The Canberra/Sydney example states no GPT-2 probabilities; it only says Sydney can receive a share.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
