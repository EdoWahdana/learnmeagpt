# Explorer layers

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `explorer-layers`
- Route: `/explorer/layers`
- Phase: later
- Depends on:
- `roadmap/05-explorer/00-trace-data.md`

## What this session builds

A table of residual-stream L2 norms from the trace: 12 blocks by token position.


## Rules for every explorer view

- Import JSON from `src/content/traces/`. Do not fetch a model at page load.
- If the JSON file is missing, render the sentence `The trace file is not in the repository yet.` and leave the data boxes unchecked.
- Do not type activations, token ids, or weight values from memory.
- The fixed sentence is `A cat sat on the mat.`
- No first person. No byline.


## Behavior

- Rows are blocks 0 through 11.
- Columns are token positions, labeled with the token strings from the trace.
- Each cell is the norm stored in the JSON, rounded to 4 decimals for display. The JSON remains the source.
- Say that a norm is a size, not an attention weight.

## Checklist

- [ ] The table has 12 rows
- [ ] Column labels are the trace’s token strings
- [ ] Values are not typed by hand
- [ ] `explorer-layers` is `ready` when the table renders
- [ ] The table scrolls inside itself on a 375px screen rather than stretching the page

## Notes
