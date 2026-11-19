# Tool: Tokenizer

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `tool-tokenizer`
- Title: Tokenizer
- Route: `/tools/tokenizer`
- Section: tools
- Kind: tool
- Phase: v1
- Order: 3
- Aliases: tokenizer, token ids, gpt-2 tokenizer
- Depends on:
- `roadmap/00-foundations/01-design-tokens.md`
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

The tool encodes text with the GPT-2 tokenizer and shows the token strings and ids.

## Voice

The tool page is a calculator, not an essay. One sentence says what it computes. The concept pages own the explanation. No first person. No upload warning written as a story: state that the calculation stays in the browser.

## Files

- Create `src/components/tools/Tokenizer.tsx`
- Create the page at the route above, using the tool-page switch in `src/app/tools/[slug]/page.tsx` if the article-template session added one. If that switch does not exist yet, add the route file for this slug only, using the shell and `.prose` width.
- Register `tokenizer` in `src/content/registry/tools.tsx`
- Set curriculum entry `tool-tokenizer` to `ready` when the route renders

## Behavior

1. A text field, empty at start, with room for at least a sentence.
2. Encode with `gpt-tokenizer`, or with `js-tiktoken` using the `gpt2` encoding if the first package cannot run in the browser. Record which one under Notes.
3. Show the token count, each token’s string, and each id.
4. Cap the input at 200 characters and say so next to the field.
5. Do not send the text anywhere.

## Numeric or functional check

Encoding `A cat sat on the mat.` twice returns the same ids. The page does not hardcode those ids.

## Embed

When the component exists, import it into these pages if those MDX files exist, under the figure, and check the toy box in that feature file:

- `src/content/beginners/tokens.mdx`
- `src/content/technical/data/token.mdx`

If an MDX file does not exist, leave this session’s embed box open and name the missing file under Notes. Do not create the article.

## Python shown beside the tool

A short Python comment showing the same library call is not required to run. The visible Python can show a call shape, and the ids on the page come from the browser library. Add a note that the Python is the same mapping, not a second algorithm.

The numbers in the Python block and the numbers in the tool start from the same example and agree.

## Out of scope

- Training BPE
- A server round trip

## Checklist

- [x] `/tools/tokenizer` renders the tool inside the shell
- [x] The page states, in one sentence, what the tool computes
- [x] The functional check in this spec passes
- [x] Changing an input updates the result without a network request
- [x] The Python block agrees with the tool on the shared example
- [x] Inputs use token colors in light and dark and remain visible
- [x] At 375px the controls wrap and do not overflow
- [x] Curriculum entry `tool-tokenizer` is `ready`
- [x] No first person, and colors come only from the design tokens
- [x] The component name is `Tokenizer`

## Notes

- Library: `gpt-tokenizer` 4.1.2, imported as `import { decode, encode } from "gpt-tokenizer/encoding/r50k_base"` inside the client component only. The package default export is `o200k_base` in this version (it encodes the example as `[32,9059,10139,402,290,2450,13]`), so it is not used. `gpt-tokenizer/encoding/gpt2` gives the same ids as `r50k_base`; vocabulary size 50257.
- `encode` is called with `{ disallowedSpecial: new Set() }` so typed text such as `<|endoftext|>` is encoded as ordinary characters instead of throwing. Encoding is also wrapped in try/catch with an inline message.
- Files: `src/components/tools/Tokenizer.tsx` (export `Tokenizer`, prop `initialText?: string`, default empty), `src/components/tools/Tokenizer.module.css` (chips use `--code-bg` and `--border`), `src/content/tools/tokenizer.mdx`.
- A space in a chip renders as `·`, a newline as `↵`, a tab as `→`; a `.tool-note` explains the dot. Tokens that hold only part of a character (for example an emoji, which GPT-2 splits into byte pieces) decode to `�`, and a note appears when that happens.
- Functional check:

  ```bash
  node --input-type=module -e "
  import * as r50k from 'gpt-tokenizer/encoding/r50k_base';
  const s='A cat sat on the mat.';
  const a=r50k.encode(s), b=r50k.encode(s);
  console.log('ids', JSON.stringify(a));
  console.log('same twice', JSON.stringify(a)===JSON.stringify(b));
  console.log('decoded', JSON.stringify(r50k.decode(a)), r50k.decode(a)===s);
  console.log('pieces', JSON.stringify(a.map(i=>r50k.decode([i]))));"
  ```

  ```text
  ids [32,3797,3332,319,262,2603,13]
  same twice true
  decoded "A cat sat on the mat." true
  pieces ["A"," cat"," sat"," on"," the"," mat","."]
  ```

- The component does not hardcode these ids. The Python block (tiktoken `get_encoding("gpt2")`, a call shape, not run) shows the same ids from the node check above, with a note that it is the same mapping, not a second algorithm.
- MDX compiles with `@mdx-js/mdx` + `remark-frontmatter` + `remark-mdx-frontmatter`. `npx tsc --noEmit`: no errors.
- For the parent: register `tokenizer` in `src/content/registry/tools.tsx` (`import * as tokenizer from "@/content/tools/tokenizer.mdx"`), then check render-in-shell, no-network, light/dark, 375px, curriculum `ready`, and the embeds.
- Integration 2026-11-19: registered in `toolPages`; curriculum `ready`; renders inside the shell; inputs changed in the browser update the result with zero new resource requests; checked in dark mode; at 375px `scrollWidth` ≤ 375 in light and dark. Technical concept-page embeds are tracked in the technical feature files, which do not exist as MDX yet.
