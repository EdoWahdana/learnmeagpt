# Explorer overview

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `explorer-overview`
- Route: `/explorer`
- Phase: later
- Depends on:
- `roadmap/00-foundations/03-app-shell.md`
- `roadmap/00-foundations/08-section-indexes.md`
- `roadmap/05-explorer/00-trace-data.md`

## What this session builds

The explorer index. It says what is inspected and lists the other explorer pages.


## Rules for every explorer view

- Import JSON from `src/content/traces/`. Do not fetch a model at page load.
- If the JSON file is missing, render the sentence `The trace file is not in the repository yet.` and leave the data boxes unchecked.
- Do not type activations, token ids, or weight values from memory.
- The fixed sentence is `A cat sat on the mat.`
- No first person. No byline.


## Required sections

1. **One sentence.** A precomputed forward pass of GPT-2 small on the fixed sentence.
2. **What is stored.** Token ids, per-layer residual sizes, attention weights, parameter names and shapes, and a short weight preview. Not the full tensors.
3. **What is not here.** No live GPU, no chat box, no closed model.
4. **The list.** Use `EntryList` for explorer entries other than this overview, in order.

Set `explorer-overview` to `ready` when the route renders.

## Checklist

- [ ] `/explorer` states the fixed sentence
- [ ] The page says the numbers come from a committed trace
- [ ] The page does not embed a chat box
- [ ] Child explorer entries are listed
- [ ] `explorer-overview` is `ready`
- [ ] Light and dark use token colors
- [ ] No personal name and no first person

## Notes
