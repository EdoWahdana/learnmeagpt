# Tool: Sampling compare

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-sampling-compare`
- Title: Sampling compare
- Route: `/tools/sampling-compare`
- Section: tools
- Kind: tool
- Phase: later
- Order: 11
- Aliases: top-k, top-p, nucleus
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool shows greedy, temperature, top-k, and top-p on one list of logits.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/SamplingCompare.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `sampling-compare` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-sampling-compare` to `ready` when the route renders

## Behavior

1. Initial logits of length 5, written in the component.
2. Controls for T, k, and p.
3. Show which logits survive top-k and top-p, then the renormalized probabilities.
4. Greedy highlights the max.

## Numeric or functional check

Top-k = 1 matches greedy on the initial logits. Temperature 1 leaves a full softmax.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/technical/gpt-2/sampling.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

The same cuts.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- A claim about truthfulness
- A network request

## Checklist

- [ ] `/tools/sampling-compare` renders the tool inside the shell
- [ ] The page states, in one sentence, what the tool computes
- [ ] The functional check in this spec passes
- [ ] Changing an input updates the result without a network request
- [ ] The Python block agrees with the tool on the shared example
- [ ] Inputs use token colors in light and dark and remain visible
- [ ] At 375px the controls wrap and do not overflow
- [ ] Curriculum entry `tool-sampling-compare` is `ready`
- [ ] No first person, and colors come only from the design tokens


## Notes
