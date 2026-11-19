# The next token

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `the-next-token`
- Title: The next token
- Route: `/beginners/the-next-token`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 12
- Aliases: softmax, probability, logits
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The model produces one score per vocabulary id, and softmax turns those scores into probabilities that sum to 1.

## Reader already knows

A model is a function.

## This page stops before

Cross-entropy and the temperature formula. Temperature is its own page.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/the-next-token.mdx`
- Register it as `beginnerPages["the-next-token"]`
- Set curriculum entry `the-next-token` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Scores come first, Softmax makes a distribution, A higher logit becomes a higher probability, One id is then chosen.

1. **Scores come first.** Logits are one real number per vocabulary id. They may be negative and do not sum to 1.
2. **Softmax makes a distribution.** Subtract the max, exponentiate, and divide by the sum. softmax of (1, 2, 3) rounded to 4 decimals is 0.0900, 0.2447, and 0.6652.
3. **A higher logit becomes a higher probability.** In that triple, 3 becomes 0.6652.
4. **One id is then chosen.** The largest probability is the simplest choice. Temperature changes the distribution before the choice and is not derived here.

## Facts that must stay true

- Logits are one real number per vocabulary id.
- Softmax outputs are positive and sum to 1.
- softmax([1, 2, 3]) rounded to 4 decimals is [0.0900, 0.2447, 0.6652].

## Diagram

An SVG of bars for logits 1, 2, 3 and bars for the three probabilities. Caption: Softmax turns scores into probabilities.

## Python

Implement stable softmax.

Numeric check: softmax([1, 2, 3]) matches [0.0900, 0.2447, 0.6652] at 4 decimal places.

## Toy slot

Embed `Softmax` when `src/components/tools/Softmax.tsx` exists, starting from logits 1, 2, and 3.

## Terms

- `<Term id="temperature">temperature</Term>`
- `<Term id="logits">logits</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- The training loss
- Attention softmax
- A sampling library

## Checklist

- [x] `/beginners/the-next-token` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The Python block matches the numeric check in this spec
- - [x] The named toy is embedded when its component file exists; leave this box open if it does not
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `the-next-token` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes
- Python run: `python3` on the block extracted from `the-next-token.mdx` printed `0.0900, 0.2447, 0.6652` and a sum of `1.0000` (stable softmax, subtracts the max). The page notes the rounded values add to 0.9999 only because of rounding.
- MDX compiles with `@mdx-js/mdx` `compile` plus remark-frontmatter and remark-gfm. Body is about 720 words.
- Figure caption is written with its final period, as printed in this spec.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
