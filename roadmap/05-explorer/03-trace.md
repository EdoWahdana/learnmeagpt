# Explorer trace

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `explorer-trace`
- Route: `/explorer/trace`
- Phase: later
- Depends on:
- `roadmap/05-explorer/00-trace-data.md`

## What this session builds

The fixed sentence as tokens.


## Rules for every explorer view

- Import JSON from `src/content/traces/`. Do not fetch a model at page load.
- If the JSON file is missing, render the sentence `The trace file is not in the repository yet.` and leave the data boxes unchecked.
- Do not type activations, token ids, or weight values from memory.
- The fixed sentence is `A cat sat on the mat.`
- No first person. No byline.


## Behavior

- Show the sentence.
- Show each token string and id from the JSON, in order.
- Show the token count.
- Link each id nowhere. They are not pages.
- The next-token top 5 at the final position, if the JSON includes them: id, token string, probability.

## Checklist

- [ ] Tokens render only from the JSON
- [ ] The count equals the JSON length
- [ ] A missing file shows the missing-trace sentence
- [ ] `explorer-trace` is `ready` when the tokens render
- [ ] No horizontal scroll at 375px

## Notes
