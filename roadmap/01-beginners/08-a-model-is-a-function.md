# A model is a function

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `a-model-is-a-function`
- Title: A model is a function
- Route: `/beginners/a-model-is-a-function`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 8
- Aliases: function, model, input
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

During a reply, the model is a fixed function from the current token ids to a distribution over the next id.

## Reader already knows

How a GPT works.

## This page stops before

Gradients, loss, and the layer equations.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/a-model-is-a-function.mdx`
- Register it as `beginnerPages["a-model-is-a-function"]`
- Set curriculum entry `a-model-is-a-function` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: The inputs are token ids, The parameters are part of the function, The output is one distribution, Sampling reads that distribution.

1. **The inputs are token ids.** The input is a list of integers no longer than the context window.
2. **The parameters are part of the function.** They are stored numbers and, for one reply, constants. State the relationship in words: the next-token distribution is a function of the token ids and the parameters.
3. **The output is one distribution.** There is a score for every vocabulary id, turned into probabilities. They are non-negative and sum to 1. The softmax page owns the formula.
4. **Sampling reads that distribution.** Choosing one id happens after the function. Temperature is a later page.

## Facts that must stay true

- One forward pass maps token ids and fixed parameters to a distribution over the vocabulary.
- Parameters are constants during that pass.
- The distribution assigns a probability to each vocabulary id.

## Diagram

An SVG with token ids and parameters entering a box labeled function, and one output labeled distribution. Caption: One forward pass is a function call.

## Python

Do not include a Python block on this page.

## Toy slot

No toy on this page.

## Terms

- `<Term id="parameters">parameters</Term>`
- `<Term id="the-next-token">distribution</Term>`
- `<Term id="tokens">token ids</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Backpropagation
- A specific layer formula

## Checklist

- [x] `/beginners/a-model-is-a-function` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The page has no `python` code fence
- - [x] The page does not embed a tool component
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `a-model-is-a-function` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

2026-11-19: Page written. Verified from the MDX file: h2 headings in spec order, first paragraph defines the model as a fixed function, all three facts stated, Figure with the spec caption around a currentColor-only SVG, no python fence, no tool embed, Term ids tokens, context-window, parameters, the-next-token, softmax, sampling, temperature all exist in curriculum.ts, no byline or first person, compiles with @mdx-js/mdx. Token ids for "The cat sat on the" (464, 3797, 3332, 319, 262) and " mat" (2603) come from gpt-tokenizer r50k_base; the example probabilities are labeled made-up. Not checked here: dev render, curriculum status, light/dark, 375px.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
