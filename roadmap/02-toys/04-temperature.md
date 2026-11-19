# Tool: Temperature

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-temperature`
- Title: Temperature
- Route: `/tools/temperature`
- Section: tools
- Kind: tool
- Phase: v1
- Order: 4
- Aliases: temperature tool, sampling
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool divides logits by a temperature and shows the softmax.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/TemperatureSampler.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `temperature` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-temperature` to `ready` when the route renders

## Behavior

1. Initial logits 1, 2, 3. Slider or field for T from 0.2 to 2, step 0.1, starting at 1.
2. Show probabilities for T = 1 and the probabilities at the chosen T.
3. At T = 1 the probabilities are 0.0900, 0.2447, 0.6652.
4. At T = 2 they are 0.1863, 0.3072, 0.5065.
5. A Draw button samples one index from the current distribution. The probabilities stay visible. One draw is labeled as one sample.

## Numeric or functional check

T = 1 and T = 2 match the two triples at 4 decimals.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/beginners/temperature.mdx`
- `src/content/technical/gpt-2/sampling.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

softmax([1, 2, 3] / T) with the stable softmax. Include T = 1 and T = 2.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- Top-k and top-p. Those belong to the later sampling tool.
- A network request

## Checklist

- [x] `/tools/temperature` renders the tool inside the shell
- [x] The page states, in one sentence, what the tool computes
- [x] The functional check in this spec passes
- [x] Changing an input updates the result without a network request
- [x] The Python block agrees with the tool on the shared example
- [x] Inputs use token colors in light and dark and remain visible
- [x] At 375px the controls wrap and do not overflow
- [x] Curriculum entry `tool-temperature` is `ready`
- [x] No first person, and colors come only from the design tokens


## Notes

- Files: `src/components/tools/TemperatureSampler.tsx` (export `TemperatureSampler`, props `initialLogits?: number[]` default `[1, 2, 3]`, `initialTemperature?: number` default `1`, clamped to 0.2–2 and rounded to 0.1), `src/content/tools/temperature.mdx`. Uses `softmaxWithTemperature`, `sampleIndex`, and `round` from `src/lib/numeric.ts`.
- Three editable score boxes (each with an aria-label), a range slider for T (0.2 to 2, step 0.1), a table with probabilities at T = 1 and at the chosen T side by side, a bar for the chosen T, and a Draw button. The draw result reads "One sample at T = …: option …" and clears when an input changes. Empty or out-of-range scores (outside -100 to 100) show an inline message instead of the table.
- Numeric check:

  ```bash
  node --experimental-strip-types --no-warnings -e "import('/Users/edowahdana/portfolio/learnmeagpt/src/lib/numeric.ts').then(m=>{console.log(m.softmaxWithTemperature([1,2,3],1).map(v=>v.toFixed(4)), m.softmaxWithTemperature([1,2,3],2).map(v=>v.toFixed(4)))})"
  ```

  ```text
  [ '0.0900', '0.2447', '0.6652' ] [ '0.1863', '0.3072', '0.5065' ]
  ```

- Python block (standard library, stable softmax) run with `python3`:

  ```text
  T = 1: ['0.0900', '0.2447', '0.6652']
  T = 2: ['0.1863', '0.3072', '0.5065']
  ```

- MDX compiles with `@mdx-js/mdx` + `remark-frontmatter` + `remark-mdx-frontmatter`. `npx tsc --noEmit`: no errors.
- For the parent: register `temperature` in `src/content/registry/tools.tsx` (`import * as temperature from "@/content/tools/temperature.mdx"`), then check render-in-shell, no-network, light/dark, 375px, curriculum `ready`, and the embeds.
- Integration 2026-11-19: registered in `toolPages`; curriculum `ready`; renders inside the shell; inputs changed in the browser update the result with zero new resource requests; checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark. Technical concept-page embeds are tracked in the technical feature files, which do not exist as MDX yet.
