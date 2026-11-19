# Explorer attention

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `explorer-attention`
- Route: `/explorer/attention`
- Phase: later
- Depends on:
- `roadmap/05-explorer/00-trace-data.md`

## What this session builds

Attention weights for the fixed sentence.


## Rules for every explorer view

- Import JSON from `src/content/traces/`. Do not fetch a model at page load.
- If the JSON file is missing, render the sentence `The trace file is not in the repository yet.` and leave the data boxes unchecked.
- Do not type activations, token ids, or weight values from memory.
- The fixed sentence is `A cat sat on the mat.`
- No first person. No byline.


## Behavior

- A control for layer 0–11 and head 0–11.
- A matrix whose rows and columns are the trace tokens.
- Cells are the stored weights. Each displayed row sums to 1 within 0.01, because the trace stored a softmax.
- The upper triangle is blank or zero as stored. Do not recompute attention in the browser.

## Checklist

- [ ] Changing layer or head changes the matrix
- [ ] Values come from the JSON
- [ ] A row sum check is shown
- [ ] `explorer-attention` is `ready` when a matrix renders
- [ ] Light and dark stay on token colors
- [ ] The matrix fits or scrolls inside the measure

## Notes
