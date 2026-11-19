# Prompts

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `prompts`
- Title: Prompts
- Route: `/beginners/prompts`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 3
- Aliases: prompt, instruction, context
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A prompt is the token sequence already present when generation starts.

## Reader already knows

Using a chatbot.

## This page stops before

Tokenizer training, sampling math, and a catalog of prompt tricks.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/prompts.mdx`
- Register it as `beginnerPages["prompts"]`
- Set curriculum entry `prompts` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The prompt is the starting sequence, A prompt can contain an instruction, source text, and a question, The model continues that sequence, The same words can tokenize in more than one way.

1. **The prompt is the starting sequence.** A prompt is the tokens the model conditions on. In a chat product, the packed transcript is the prompt.
2. **A prompt can contain an instruction, source text, and a question.** Describe those three as parts of one input string. Show one short example with an instruction line, a paragraph, and a question line. Do not say the pattern guarantees a result.
3. **The model continues that sequence.** The output is the continuation. It is not a separate lookup in a database.
4. **The same words can tokenize in more than one way.** The next page shows the split. Do not list token ids from memory.

## Facts that must stay true

- The prompt is input, already tokenized, before any new token is produced.
- An instruction is text inside the prompt.
- Generation continues the prompt.

## Diagram

An SVG of one horizontal token strip. A bracket marks the prompt. A dotted cell marks the next token, not yet chosen. Caption: The prompt is the sequence already filled in.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="tokens">tokens</Term>`
- `<Term id="using-a-chatbot">transcript</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Recommended phrasings
- Temperature
- Jailbreak content

## Checklist

- [x] `/beginners/prompts` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `prompts` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

Verified from the MDX file: h2 order, defining first paragraph, all facts, inline SVG token strip with prompt bracket and dotted next-token cell in currentColor with the spec caption inside Figure, no python fence (one plain text fence holds the example prompt), no tool embed, Term ids tokens/using-a-chatbot exist, no token ids listed, no byline or first person. MDX compiles. Render, curriculum status, themes, and 375px left for the parent.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
