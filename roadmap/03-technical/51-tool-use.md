# Tool use

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-use`
- Title: Tool use
- Route: `/technical/modern/tool-use`
- Section: technical
- Group: modern
- Kind: article
- Phase: later
- Order: 51
- Aliases: tool use, function call
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Tool use is a loop: the model emits a call, a program returns text, and that text is appended before the model continues.

## Reader already knows

The beginner likelihood page’s note that a base model has no database.

## This page stops before

An agent framework.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/modern/tool-use.mdx`
- Register it as `technicalPages["modern/tool-use"]`
- Set curriculum entry `tool-use` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The call is text, The result is more prompt, The model still predicts tokens.

1. **The call is text.** The model produces tokens that a program parses as a name and arguments.
2. **The result is more prompt.** The program’s output is appended to the token sequence.
3. **The model still predicts tokens.** The tool does not change the forward pass. It changes the text the next forward pass sees.

## Facts that must stay true

- The call is generated text.
- The tool result is appended text.
- The forward pass is unchanged.

## Diagram

Model → call → program → text → model. Caption: The program appends text. The model continues.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="likelihood-and-truth">likelihood</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A working agent
- Any exploit or abuse procedure

## Checklist

- [ ] `/technical/modern/tool-use` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The page has no `python` code fence
- - [ ] The page does not embed a tool component
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `tool-use` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
