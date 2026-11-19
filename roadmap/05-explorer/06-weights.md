# Explorer weights

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `explorer-weights`
- Route: `/explorer/weights`
- Phase: later
- Depends on:
- `roadmap/05-explorer/00-trace-data.md`

## What this session builds

The parameter list.


## Rules for every explorer view

- Import JSON from `src/content/traces/`. Do not fetch a model at page load.
- If the JSON file is missing, render the sentence `The trace file is not in the repository yet.` and leave the data boxes unchecked.
- Do not type activations, token ids, or weight values from memory.
- The fixed sentence is `A cat sat on the mat.`
- No first person. No byline.


## Behavior

- A table of name and shape from the JSON.
- A preview of the first 8 values of `transformer.ln_f.weight`, also from the JSON.
- The count of tensors.
- No other values. Do not offer a download of the checkpoint.

## Checklist

- [ ] Every name and shape is from the JSON
- [ ] The preview is 8 numbers from `transformer.ln_f.weight`
- [ ] The tensor count equals the JSON length
- [ ] `explorer-weights` is `ready` when the table renders
- [ ] The page does not link to a weight file download hosted here

## Notes
