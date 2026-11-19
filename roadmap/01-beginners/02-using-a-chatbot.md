# Using a chatbot

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `using-a-chatbot`
- Title: Using a chatbot
- Route: `/beginners/using-a-chatbot`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 2
- Aliases: chatbot, chat, assistant
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A chatbot sends the conversation so far to a model and appends the model’s new tokens to that conversation.

## Reader already knows

How a GPT works.

## This page stops before

Prompt structure, tokenization, and any vendor policy.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/using-a-chatbot.mdx`
- Register it as `beginnerPages["using-a-chatbot"]`
- Set curriculum entry `using-a-chatbot` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The window holds a transcript, Roles label the messages, The model still only continues tokens, A reply is appended, then the loop can run again.

1. **The window holds a transcript.** A transcript is an ordered list of messages. The newest reply is more tokens on that list.
2. **Roles label the messages.** Name the three labels common in chat APIs: system, user, and assistant. They are text in the transcript, not separate models.
3. **The model still only continues tokens.** After the product packs the transcript, the model does the same next-token loop as on the previous page.
4. **A reply is appended, then the loop can run again.** The next user message is more text added after the assistant tokens.

## Facts that must stay true

- A chat reply is generated text appended to a transcript.
- System, user, and assistant are role labels in that transcript.
- The underlying step is still next-token prediction.

## Diagram

An SVG of three stacked rows labeled system, user, and assistant, an arrow into a box labeled model, and an arrow back onto a new assistant row. Caption: The transcript is the model’s input.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="how-a-gpt-works">next-token prediction</Term>`
- `<Term id="tokens">tokens</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Prompt-writing advice
- Screenshots of a commercial product
- A claim about a specific vendor’s storage

## Checklist

- [x] `/beginners/using-a-chatbot` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `using-a-chatbot` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

Verified from the MDX file: h2 order, defining first paragraph, all facts, inline SVG (system/user/assistant rows, model box, new assistant row) with currentColor only and the spec caption inside Figure, no python fence (one plain text fence shows a packed transcript), no tool embed, Term ids tokens/how-a-gpt-works exist, no byline or first person. MDX compiles. Render, curriculum status, themes, and 375px left for the parent.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
