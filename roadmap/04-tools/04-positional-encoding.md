# Tool: Positional encoding

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-positional-encoding`
- Title: Positional encoding
- Route: `/tools/positional-encoding`
- Section: tools
- Kind: tool
- Phase: later
- Order: 8
- Aliases: position tool
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool adds a token vector and a position vector elementwise.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/PositionalEncoding.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `positional-encoding` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-positional-encoding` to `ready` when the route renders

## Behavior

1. Length-4 vectors the user can edit, with a stated initial pair.
2. Show the sum.
3. A sentence on the page: GPT-2 learns a table of such position vectors, one per index up to 1023, each of length 768. This tool uses length 4.

## Numeric or functional check

The displayed sum equals the elementwise sum of the initial pair.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/technical/data/positional-encoding.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

The same add.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- A real 1024×768 dump
- RoPE animation
- A network request

## Checklist

- [ ] `/tools/positional-encoding` renders the tool inside the shell
- [ ] The page states, in one sentence, what the tool computes
- [ ] The functional check in this spec passes
- [ ] Changing an input updates the result without a network request
- [ ] The Python block agrees with the tool on the shared example
- [ ] Inputs use token colors in light and dark and remain visible
- [ ] At 375px the controls wrap and do not overflow
- [ ] Curriculum entry `tool-positional-encoding` is `ready`
- [ ] No first person, and colors come only from the design tokens


## Notes
