# Tool: Vector dot product

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-vector-dot-product`
- Title: Vector dot product
- Route: `/tools/vector-dot-product`
- Section: tools
- Kind: tool
- Phase: v1
- Order: 1
- Aliases: dot product, vector tool
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool multiplies two equal-length vectors position by position and adds the products.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/VectorDotProduct.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `vector-dot-product` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-vector-dot-product` to `ready` when the route renders

## Behavior

1. Two vectors, initial values (1, 2, 3) and (4, 5, 6). Length can be 2, 3, or 4. Both vectors share that length.
2. Show each product and the sum.
3. The sum for the initial vectors is 32.
4. Changing a cell updates the sum in the browser.

## Numeric or functional check

Initial vectors show products 4, 10, and 18, and a total of 32.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/beginners/vectors.mdx` and the vectors feature checklist
- `src/content/technical/numbers/dot-product.mdx` and that feature checklist

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

The same `dot` function as the vectors page. The initial call returns 32.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- A matrix multiply
- A network request

## Checklist

- [x] `/tools/vector-dot-product` renders the tool inside the shell
- [x] The page states, in one sentence, what the tool computes
- [x] The functional check in this spec passes
- [x] Changing an input updates the result without a network request
- [x] The Python block agrees with the tool on the shared example
- [x] Inputs use token colors in light and dark and remain visible
- [x] At 375px the controls wrap and do not overflow
- [x] Curriculum entry `tool-vector-dot-product` is `ready`
- [x] No first person, and colors come only from the design tokens


## Notes

- Component: `VectorDotProduct` in `src/components/tools/VectorDotProduct.tsx`. Props: `initialA?: readonly number[]` (default `[1, 2, 3]`), `initialB?: readonly number[]` (default `[4, 5, 6]`). The length selector offers 2, 3, or 4; props outside that range are clamped and short vectors are padded with 0.
- Page: `src/content/tools/vector-dot-product.mdx`. It still needs registering as `vector-dot-product` in `src/content/registry/tools.tsx`; that is left to the parent session.
- Functional check: a server render with the default props shows `1 × 4 + 2 × 5 + 3 × 6 = 32` and `4 + 10 + 18 = 32`. Empty or non-number cells, and products too large to compute, show a plain message instead of NaN.
- `node --experimental-strip-types` on `src/lib/numeric.ts`: `32 [ '0.0900', '0.2447', '0.6652' ]`.
- Python 3.14.6 output: `[4, 10, 18]` and `32`.
- Both MDX files compile with `@mdx-js/mdx` plus `remark-frontmatter`. `npx tsc --noEmit` reports no errors.
- Embedded under the figure in `src/content/beginners/vectors.mdx`. `src/content/technical/numbers/dot-product.mdx` does not exist yet.
- Left for the parent to check: render in the shell, no network request on input change, light and dark modes, 375px width, and the curriculum entry set to `ready`.
- Integration 2026-11-19: registered in `toolPages`; curriculum `ready`; renders inside the shell; inputs changed in the browser update the result with zero new resource requests; checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark. Technical concept-page embeds are tracked in the technical feature files, which do not exist as MDX yet.
