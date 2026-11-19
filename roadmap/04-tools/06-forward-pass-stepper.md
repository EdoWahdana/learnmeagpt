# Tool: Forward-pass stepper

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-forward-pass-stepper`
- Title: Forward-pass stepper
- Route: `/tools/forward-pass-stepper`
- Section: tools
- Kind: tool
- Phase: later
- Order: 10
- Aliases: forward pass tool
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool steps through a tiny forward pass with hidden size 4 and a 4-word vocabulary.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/ForwardPassStepper.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `forward-pass-stepper` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-forward-pass-stepper` to `ready` when the route renders

## Behavior

1. Written weights live in the component. Steps: embed, add position, one residual block with a tiny attention and a tiny MLP, then logits.
2. The page says this is a teaching model with its own weights, not GPT-2.
3. Each step shows the vector after that step.
4. The last step’s shape is (sequence, 4) for the tiny vocabulary.

## Numeric or functional check

Stepping from the start reaches the same logits as the Python copy of the weights.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/technical/gpt-2/forward-pass.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

The same tiny weights and the same final logits.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- Loading GPT-2
- A network request

## Checklist

- [ ] `/tools/forward-pass-stepper` renders the tool inside the shell
- [ ] The page states, in one sentence, what the tool computes
- [ ] The functional check in this spec passes
- [ ] Changing an input updates the result without a network request
- [ ] The Python block agrees with the tool on the shared example
- [ ] Inputs use token colors in light and dark and remain visible
- [ ] At 375px the controls wrap and do not overflow
- [ ] Curriculum entry `tool-forward-pass-stepper` is `ready`
- [ ] No first person, and colors come only from the design tokens


## Notes
