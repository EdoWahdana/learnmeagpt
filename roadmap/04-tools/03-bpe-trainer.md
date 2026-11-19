# Tool: BPE trainer

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-bpe-trainer`
- Title: BPE trainer
- Route: `/tools/bpe-trainer`
- Section: tools
- Kind: tool
- Phase: later
- Order: 7
- Aliases: bpe trainer
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool runs byte-pair encoding on a fixed toy corpus and lists each merge.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/BpeTrainer.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `bpe-trainer` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-bpe-trainer` to `ready` when the route renders

## Behavior

1. The corpus is fixed: low×4, lower×2, newest×3, widest×2, starting from characters.
2. Show the first merges one step at a time.
3. The merges match the Python on the BPE page.
4. State that this corpus is not GPT-2’s merge list.

## Numeric or functional check

Two runs show the same first three merges.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/technical/data/byte-pair-encoding.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

The same trainer.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- GPT-2’s real merges
- A network request

## Checklist

- [ ] `/tools/bpe-trainer` renders the tool inside the shell
- [ ] The page states, in one sentence, what the tool computes
- [ ] The functional check in this spec passes
- [ ] Changing an input updates the result without a network request
- [ ] The Python block agrees with the tool on the shared example
- [ ] Inputs use token colors in light and dark and remain visible
- [ ] At 375px the controls wrap and do not overflow
- [ ] Curriculum entry `tool-bpe-trainer` is `ready`
- [ ] No first person, and colors come only from the design tokens


## Notes
