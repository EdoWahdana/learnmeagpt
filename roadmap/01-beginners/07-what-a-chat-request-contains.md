# What a chat request contains

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `what-a-chat-request-contains`
- Title: What a chat request contains
- Route: `/beginners/what-a-chat-request-contains`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 7
- Aliases: privacy, request, log
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

A chat request contains the text the product packs for the model, and a hosted product processes that text on the operator’s computers.

## Reader already knows

Using a chatbot.

## This page stops before

Any named company’s current retention policy.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/what-a-chat-request-contains.mdx`
- Register it as `beginnerPages["what-a-chat-request-contains"]`
- Set curriculum entry `what-a-chat-request-contains` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The request holds the packed prompt, A hosted chat leaves the reader’s machine, Storage is defined by the operator.

1. **The request holds the packed prompt.** Include the current message and the earlier transcript the product chose to send. Do not guess a hidden system prompt word for word.
2. **A hosted chat leaves the reader’s machine.** The calculation runs on the operator’s hardware. The tools on this site run in the browser and do not upload the field.
3. **Storage is defined by the operator.** Whether a request is stored, and for how long, is that operator’s policy. This page does not restate one.

## Facts that must stay true

- A hosted chat sends the packed prompt to the operator.
- This site’s tools do not send their inputs to a server.
- This page does not state a retention period.

## Diagram

An SVG of a laptop, an arrow labeled prompt, and a box labeled operator. A second box labeled browser tool has no outgoing arrow. Caption: A hosted chat sends the prompt. A tool on this site does not.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="prompts">prompt</Term>`
- `<Term id="using-a-chatbot">transcript</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Legal advice
- A quoted privacy policy
- Instructions for concealing activity

## Checklist

- [x] `/beginners/what-a-chat-request-contains` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `what-a-chat-request-contains` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

2026-11-19: Page written. Verified from the MDX file: h2 headings in spec order, first paragraph defines a chat request, all three facts stated with no retention period, Figure with the spec caption around a currentColor-only SVG, no python fence, no tool embed, Term ids prompts, using-a-chatbot, context-window all exist in curriculum.ts, no byline or first person, compiles with @mdx-js/mdx. Not checked here: dev render, curriculum status, light/dark, 375px.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
