# Tool: Attention heatmap

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-attention-heatmap`
- Title: Attention heatmap
- Route: `/tools/attention-heatmap`
- Section: tools
- Kind: tool
- Phase: later
- Order: 6
- Aliases: attention heatmap
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool shows a causal attention weight matrix for a typed list of scores.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/AttentionHeatmap.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `attention-heatmap` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-attention-heatmap` to `ready` when the route renders

## Behavior

1. Four positions. The user edits the lower triangle, including the diagonal.
2. Each row is softmaxed on its allowed entries. Upper-triangle cells are blank, not zero weights the user can edit.
3. Each visible row sums to 1.
4. Label the figure as an illustration the user edits, not a GPT-2 activation.

## Numeric or functional check

A row with one allowed score has weight 1. A row with equal allowed scores is uniform.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/technical/attention/causal-mask.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

Row softmax that skips the upper triangle.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- Loading a real activation
- A network request

## Checklist

- [ ] `/tools/attention-heatmap` renders the tool inside the shell
- [ ] The page states, in one sentence, what the tool computes
- [ ] The functional check in this spec passes
- [ ] Changing an input updates the result without a network request
- [ ] The Python block agrees with the tool on the shared example
- [ ] Inputs use token colors in light and dark and remain visible
- [ ] At 375px the controls wrap and do not overflow
- [ ] Curriculum entry `tool-attention-heatmap` is `ready`
- [ ] No first person, and colors come only from the design tokens


## Notes
