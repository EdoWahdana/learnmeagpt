# Tool: Matrix multiply

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-matrix-multiply`
- Title: Matrix multiply
- Route: `/tools/matrix-multiply`
- Section: tools
- Kind: tool
- Phase: later
- Order: 5
- Aliases: matmul, matrix multiply
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool multiplies a small matrix by a vector and shows each row’s dot product.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/MatrixMultiply.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `matrix-multiply` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-matrix-multiply` to `ready` when the route renders

## Behavior

1. A 2×3 matrix and a length-3 vector, with the numbers written in the component as the initial example.
2. Show two dot products and the length-2 result.
3. Reject a vector whose length is not 3 by showing the sentence “The inner sizes differ.” and no result.

## Numeric or functional check

The initial result equals the two expanded dot products.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/technical/numbers/matrix.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

The same multiply in Python.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- A batched matmul
- A network request

## Checklist

- [ ] `/tools/matrix-multiply` renders the tool inside the shell
- [ ] The page states, in one sentence, what the tool computes
- [ ] The functional check in this spec passes
- [ ] Changing an input updates the result without a network request
- [ ] The Python block agrees with the tool on the shared example
- [ ] Inputs use token colors in light and dark and remain visible
- [ ] At 375px the controls wrap and do not overflow
- [ ] Curriculum entry `tool-matrix-multiply` is `ready`
- [ ] No first person, and colors come only from the design tokens


## Notes
