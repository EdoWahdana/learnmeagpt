# Tool: Nearest embedding

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-nearest-embedding`
- Title: Nearest embedding
- Route: `/tools/nearest-embedding`
- Section: tools
- Kind: tool
- Phase: later
- Order: 9
- Aliases: nearest embedding
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool lists the nearest tokens to a chosen token in a committed slice of embeddings.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/NearestEmbedding.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `nearest-embedding` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-nearest-embedding` to `ready` when the route renders

## Behavior

1. The slice is a JSON file of at most a few hundred tokens, produced by a script in this session from the public GPT-2 token embedding. Do not commit the full table.
2. Distance is the dot product, and the page says so.
3. Choosing a token shows the five others in the slice with the largest dot product, excluding itself.
4. If the checkpoint cannot be loaded, leave the checklist open and do not invent neighbors.

## Numeric or functional check

The five neighbors for the first token in the file match a recomputation from that file.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/technical/data/embedding.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

The dot product used for the ranking, on two rows copied from the JSON.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- The full vocabulary
- A network request at click time

## Checklist

- [ ] `/tools/nearest-embedding` renders the tool inside the shell
- [ ] The page states, in one sentence, what the tool computes
- [ ] The functional check in this spec passes
- [ ] Changing an input updates the result without a network request
- [ ] The Python block agrees with the tool on the shared example
- [ ] Inputs use token colors in light and dark and remain visible
- [ ] At 375px the controls wrap and do not overflow
- [ ] Curriculum entry `tool-nearest-embedding` is `ready`
- [ ] No first person, and colors come only from the design tokens


## Notes
