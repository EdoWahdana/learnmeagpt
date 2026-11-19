# Home

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `home`
- Phase: v1
- Route: `/`
- Depends on: [01-design-tokens.md](01-design-tokens.md), [03-app-shell.md](03-app-shell.md), [02-curriculum-manifest.md](02-curriculum-manifest.md)

## What this session builds

The home page. It tells a new reader what the site contains and where the reading order starts. It is not a personal essay. There is no author, no origin story, and no first person.

## Files

- Replace `src/app/page.tsx`

## Required sections

Use the serif prose measure for the text. The shell already provides the wordmark, so the page does not repeat a giant logo.

1. **What this is.** One paragraph: this site explains how GPT-style language models work, from the text in a chat window down to the calculation that produces the next token. When a page inspects a real model, that model is GPT-2 small.
2. **Four sections.** A list of four links, each with one factual sentence:
   - Beginners (`/beginners`): the reading order, in plain language.
   - Technical (`/technical`): the same system, one calculation at a time.
   - Tools (`/tools`): small calculators for the operations those pages describe.
   - Explorer (`/explorer`): GPT-2 small, opened on one fixed sentence.
3. **Reading order.** The first ready Beginners page is a link. If none are ready yet, the sentence says the first page is “How a GPT works” and does not link. A second link points to `/map` with the words `Full list`.
4. **Search.** One sentence: the header field finds a written page or tool by name.

## Voice

No “I”, “my”, or “we built”. No greeting. No quotation for decoration. No illustration of a robot, a brain, or a person.

## Out of scope

- A newsletter, a latest-post list, or a blog
- Embedding a toy on the home page
- Animations other than the theme and hover styles already in the tokens

## Checklist

- [x] `/` shows the four sections with the sentences above
- [x] The page contains no first person and no personal name
- [x] The reading-order link targets the first ready Beginners entry, or stays unlinked text when none are ready
- [x] `Full list` goes to `/map`
- [x] The page uses token colors in light and dark and the serif for the paragraphs
- [x] At 375px the list does not overflow horizontally
- [x] The document title is `learn me a gpt`

## Notes

No beginner article is ready, so the first page is the unlinked text “How a GPT works”.
