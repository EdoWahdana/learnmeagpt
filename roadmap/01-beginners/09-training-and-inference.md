# Training and inference

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `training-and-inference`
- Title: Training and inference
- Route: `/beginners/training-and-inference`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 9
- Aliases: training, inference, forward pass
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Training changes parameters so the next-token distributions match the training text. Inference uses the parameters and does not change them.

## Reader already knows

A model is a function.

## This page stops before

The optimizer, the learning-rate schedule, and the loss formula.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/training-and-inference.mdx`
- Register it as `beginnerPages["training-and-inference"]`
- Set curriculum entry `training-and-inference` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Inference is the forward pass, Training adds a comparison and an update, A chat product is inference, The same forward calculation appears in both.

1. **Inference is the forward pass.** Token ids go in. A distribution comes out. Parameters are read.
2. **Training adds a comparison and an update.** The training text supplies the id that came next. The comparison is the loss. An update then changes parameters. Name the loss as cross-entropy and leave the formula to that page.
3. **A chat product is inference.** The reply path does not apply the training update.
4. **The same forward calculation appears in both.** Training runs the forward pass and then more steps. Inference stops after the forward pass and a choice of token.

## Facts that must stay true

- Inference does not update parameters.
- Training does update parameters.
- Both use the forward pass.
- The training comparison for this family of models is a next-token loss.

## Diagram

Two SVG rows. Inference reads parameters. Training adds a loss and an arrow back to the parameters. Caption: Only training writes parameters.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="cross-entropy">cross-entropy</Term>`
- `<Term id="a-model-is-a-function">forward pass</Term>`
- `<Term id="parameters">parameters</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A training script
- A learning rate presented as universal

## Checklist

- [x] `/beginners/training-and-inference` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `training-and-inference` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

2026-11-19: Page written. Verified from the MDX file: h2 headings in spec order, first paragraph defines training and inference, all four facts stated, Figure with the spec caption around a currentColor-only SVG, no python fence, no tool embed, Term ids a-model-is-a-function, parameters, cross-entropy all exist in curriculum.ts, no byline or first person, compiles with @mdx-js/mdx. Token ids come from gpt-tokenizer r50k_base; the 0.05 probability is labeled made-up. Not checked here: dev render, curriculum status, light/dark, 375px.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
