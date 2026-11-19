# Explorer model

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `explorer-model`
- Route: `/explorer/model`
- Phase: later
- Depends on:
- `roadmap/05-explorer/00-trace-data.md`
- `roadmap/05-explorer/01-overview.md`

## What this session builds

A model page for the checkpoint the trace used.


## Rules for every explorer view

- Import JSON from `src/content/traces/`. Do not fetch a model at page load.
- If the JSON file is missing, render the sentence `The trace file is not in the repository yet.` and leave the data boxes unchecked.
- Do not type activations, token ids, or weight values from memory.
- The fixed sentence is `A cat sat on the mat.`
- No first person. No byline.


## Required facts

- Configuration from the trace JSON: 12 layers, 12 heads, hidden size 768, context 1024, vocabulary 50257. If the JSON disagrees, show the JSON and record the disagreement in Notes.
- Library name and version stored in the JSON.
- License lines copied from the model card you read while producing the trace, not paraphrased from memory. If the card was not saved into the JSON, leave this box open.
- A link to `/explorer/trace`.

## Checklist

- [ ] The five configuration numbers are visible
- [ ] The library version is visible and matches the JSON
- [ ] License text is present only if it was stored from the card
- [ ] `explorer-model` is `ready` once the configuration renders
- [ ] No invented parameter count
- [ ] Token colors in both themes

## Notes
