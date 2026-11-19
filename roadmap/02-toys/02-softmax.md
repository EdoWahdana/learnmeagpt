# Tool: Softmax

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-softmax`
- Title: Softmax
- Route: `/tools/softmax`
- Section: tools
- Kind: tool
- Phase: v1
- Order: 2
- Aliases: softmax tool
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool turns a list of scores into probabilities that sum to 1.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/Softmax.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `softmax` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-softmax` to `ready` when the route renders

## Behavior

1. Start with three scores: 1, 2, and 3. Allow 2 to 6 scores.
2. Subtract the max, exponentiate, divide by the sum.
3. Show each probability and the total, which stays at 1 within rounding.
4. Initial probabilities rounded to 4 decimals are 0.0900, 0.2447, and 0.6652.

## Numeric or functional check

The initial row matches [0.0900, 0.2447, 0.6652] and the displayed total is 1.0000 at 4 decimals.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/beginners/the-next-token.mdx`
- `src/content/technical/numbers/softmax.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

Stable softmax. The check triple matches the probabilities above.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- Temperature. That is the other tool.
- A network request

## Checklist

- [x] `/tools/softmax` renders the tool inside the shell
- [x] The page states, in one sentence, what the tool computes
- [x] The functional check in this spec passes
- [x] Changing an input updates the result without a network request
- [x] The Python block agrees with the tool on the shared example
- [x] Inputs use token colors in light and dark and remain visible
- [x] At 375px the controls wrap and do not overflow
- [x] Curriculum entry `tool-softmax` is `ready`
- [x] No first person, and colors come only from the design tokens


## Notes

- Component: `Softmax` in `src/components/tools/Softmax.tsx`. Prop: `initialLogits?: readonly number[]` (default `[1, 2, 3]`), clamped to between 2 and 6 scores. The Add and Remove buttons stay within that range.
- The table shows each score, the score minus the largest, e raised to that number, the probability, and a bar, plus a total row. It sits inside `.tool-scroll`.
- Page: `src/content/tools/softmax.mdx`. It still needs registering as `softmax` in `src/content/registry/tools.tsx`; that is left to the parent session.
- Functional check: a server render with the default props shows probabilities 0.0900, 0.2447, 0.6652 and a total of 1.0000. Empty or non-number scores show a plain message, and so do scores too far apart to compute.
- `node --experimental-strip-types` on `src/lib/numeric.ts`: `32 [ '0.0900', '0.2447', '0.6652' ]`.
- Python 3.14.6 output: `0.0900, 0.2447, 0.6652` and `1.0000`.
- Both MDX files compile with `@mdx-js/mdx` plus `remark-frontmatter`. `npx tsc --noEmit` reports no errors.
- Embedded under the figure in `src/content/beginners/the-next-token.mdx`. `src/content/technical/numbers/softmax.mdx` does not exist yet.
- Left for the parent to check: render in the shell, no network request on input change, light and dark modes, 375px width, and the curriculum entry set to `ready`.
- Integration 2026-11-19: registered in `toolPages`; curriculum `ready`; renders inside the shell; inputs changed in the browser update the result with zero new resource requests; checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark. Technical concept-page embeds are tracked in the technical feature files, which do not exist as MDX yet.
