# About

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `about`
- Phase: v1
- Route: `/about`
- Kind: utility
- Depends on: [04-article-template.md](04-article-template.md), [02-curriculum-manifest.md](02-curriculum-manifest.md)

## What this session builds

A factual page about the site. No author, no biography, no contact form, no first person.

## Files

- `src/content/about.mdx`
- `src/app/about/page.tsx` rendering that MDX through `Article` if the entry exists, or through the same prose classes if you keep About outside the article registry
- Set the manifest entry `about` to `ready` when the route renders

## Required sections

1. **What the site covers.** GPT-style language models: tokens, training versus use, the transformer calculation, and a GPT-2 forward pass.
2. **How a page is organized.** The first paragraph defines the idea. A figure shows it. Calculation pages include a short Python block and, where listed, a browser tool.
3. **Which model is inspected.** GPT-2 small: 12 layers, hidden size 768, 12 heads, context length 1024, vocabulary size 50257. The weights are public. The explorer reads a committed trace of one sentence, not a live GPU.
4. **Which models are only described.** Closed chat products, and later open architectures, are described on their own pages. Their weights are not loaded by this site in the explorer.
5. **What the site does not do.** It does not host accounts. It does not run a chat with a model. It does not accept private keys, passwords, or documents. The tools do not upload their input.

## Voice

Third person or bare statements: “The site explains…”, “GPT-2 small has…”. No “I”, “we”, or a name.

## Out of scope

- An email address or a feedback form
- A license for the site’s prose beyond a one-line statement that the explanatory text is part of this project. Do not invent a legal license name in this session.
- A changelog

## Checklist

- [x] `/about` renders the five sections as `h2`s
- [x] The page states the GPT-2 small configuration numbers from this spec
- [x] The page says tools do not upload their input
- [x] The page has no personal name and no first person
- [x] Manifest entry `about` is `ready`
- [x] Light and dark stay on the token colors
- [x] The document title is `About · learn me a gpt`

## Notes

About is rendered through `Article`. The date line is `17 Nov 2026`.
