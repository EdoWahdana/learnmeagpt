# How a GPT works

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `how-a-gpt-works`
- Title: How a GPT works
- Route: `/beginners/how-a-gpt-works`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 1
- Aliases: gpt, how gpt works, language model
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A GPT-style model repeats one step: it turns the current tokens into a distribution over the next token, appends one token, and repeats.

## Reader already knows

No earlier page.

## This page stops before

The tokenizer algorithm, attention math, and the training loop.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/how-a-gpt-works.mdx`
- Register it as `beginnerPages["how-a-gpt-works"]`
- Set curriculum entry `how-a-gpt-works` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: A GPT continues text, A chat window is a product around that loop, Parameters stay fixed during a reply, Attention is the step that mixes tokens, GPT-2 small is the model this site opens.

1. **A GPT continues text.** Define the loop: tokens in, a distribution over the next token, one token chosen and appended. The same model is used at every step.
2. **A chat window is a product around that loop.** Separate the model from the product. The window sends a transcript and displays the continuation. Do not describe a vendor’s features.
3. **Parameters stay fixed during a reply.** Parameters are stored numbers. A reply reads them. Training is the separate process that sets them. Name both processes and do not explain the optimizer.
4. **Attention is the step that mixes tokens.** One paragraph: each new representation can use information from earlier tokens. Point at the attention page with Term. Do not introduce query, key, or value.
5. **GPT-2 small is the model this site opens.** State 12 layers, hidden size 768, 12 heads, context length 1024, vocabulary size 50257. Later open models change specific pieces. Closed products are not loaded.

## Facts that must stay true

- Generation is repeated next-token prediction.
- The transcript is turned into tokens before the model runs.
- Parameters do not change during a single reply.
- GPT-2 small has 12 layers, hidden size 768, 12 heads, context length 1024, and vocabulary size 50257.
- This site uses GPT-2 small when a page shows a real model’s internals.

## Diagram

An SVG loop in currentColor: tokens, then a distribution over the next token, then one appended token, then back. Caption: Generation appends one token at a time. No robot, brain, or person.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="tokens">tokens</Term>`
- `<Term id="attention">attention</Term>`
- `<Term id="parameters">parameters</Term>`
- `<Term id="gpt-2-and-later-models">GPT-2 small</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Byte-pair encoding
- The softmax formula
- A training recipe
- A claim that any named product is accurate or inaccurate

## Checklist

- [x] `/beginners/how-a-gpt-works` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `how-a-gpt-works` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

Verified from the MDX file: h2 order, defining first paragraph, all facts (including GPT-2 small sizes), inline SVG loop with currentColor only and the spec caption inside Figure, no python fence, no tool embed, Term ids tokens/attention/parameters/gpt-2-and-later-models exist in curriculum.ts, no byline or first person. MDX compiles with @mdx-js/mdx. Distribution percentages on the page are labeled as made up. Render, curriculum status, themes, and 375px left for the parent.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
