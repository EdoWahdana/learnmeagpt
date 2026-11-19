# Temperature

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `temperature`
- Title: Temperature
- Route: `/beginners/temperature`
- Section: beginners
- Group: —
- Kind: article
- Phase: v1
- Order: 15
- Aliases: temperature, sampling
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Temperature divides the logits by a positive number before softmax. Above 1 the distribution flattens. Below 1 it sharpens.

## Reader already knows

The next token and softmax.

## This page stops before

Top-k, top-p, and the rest of the sampling page.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/beginners/temperature.mdx`
- Register it as `beginnerPages["temperature"]`
- Set curriculum entry `temperature` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Divide the logits, then softmax, T = 1 leaves the model’s distribution, T = 2 flattens it, A draw is one sample.

1. **Divide the logits, then softmax.** The operation is softmax(logits / T) with T positive.
2. **T = 1 leaves the model’s distribution.** Dividing (1, 2, 3) by 1 keeps the probabilities 0.0900, 0.2447, and 0.6652.
3. **T = 2 flattens it.** softmax of (0.5, 1, 1.5) rounded to 4 decimals is 0.1863, 0.3072, and 0.5065. The largest probability is lower than at T = 1.
4. **A draw is one sample.** One chosen id is not the distribution. Show the probabilities as what temperature changes, and a draw as a separate action.

## Facts that must stay true

- Temperature scales logits before softmax.
- T = 1 recovers softmax of the original logits.
- For logits (1, 2, 3) at T = 2, the probabilities are 0.1863, 0.3072, and 0.5065 at 4 decimal places.

## Diagram

Two SVG bar groups for T = 1 and T = 2 using those probabilities. Caption: A larger temperature moves probability toward the smaller scores.

## Python

Implement softmax(logits / T) with stable softmax.

Numeric check: T = 2 on [1, 2, 3] matches [0.1863, 0.3072, 0.5065] at 4 decimals.

## Toy slot

Embed `TemperatureSampler` when its component exists. Start at logits 1, 2, 3 and T = 1.

## Terms

- `<Term id="the-next-token">softmax</Term>`
- `<Term id="sampling">sampling</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- Top-k and nucleus formulas
- A claim that a temperature is creative or safe

## Checklist

- [x] `/beginners/temperature` renders in `npm run dev`
- [x] The first paragraph defines the idea in the reader promise
- [x] The `h2` headings match this spec, in order
- [x] Every fact in the facts list is stated, and none is contradicted
- [x] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [x] The Python block matches the numeric check in this spec
- - [x] The named toy is embedded when its component file exists; leave this box open if it does not
- [x] Named terms use `Term` and no link on the page 404s
- [x] There is no byline, author name, or first person
- [x] Curriculum entry `temperature` is `ready`
- [x] Light and dark both use the token colors, including the diagram
- [x] At 375px the page has no horizontal scroll


## Notes

- 2026-11-19: Wrote `src/content/beginners/temperature.mdx`. `python3` on the page's block printed `T = 1 ['0.0900', '0.2447', '0.6652']` and `T = 2 ['0.1863', '0.3072', '0.5065']`, matching the numeric check. Also checked by hand: T = 0.5 gives 0.0159 / 0.1173 / 0.8668 (not printed on the page). MDX compiles with `@mdx-js/mdx` + remark-frontmatter. `TemperatureSampler` not embedded; the parent embeds it under the figure. Not registered in `beginnerPages` and curriculum status not changed.
- Integration 2026-11-19: registered in `beginnerPages`; curriculum `ready`; `npm run build` prerenders the route; `npm run dev` returns 200 with one h1 and previous/next links in curriculum order; every internal link in the article body resolves; SVGs carry no hex colors and the diagram was checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark.
