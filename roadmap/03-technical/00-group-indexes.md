# Technical group indexes

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `technical-groups`
- Phase: later
- Depends on:
- `roadmap/00-foundations/08-section-indexes.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## What this session builds

`/technical` and one page per group. Reuse `EntryList` from the section-index session. Do not write the concept articles.

## Groups

- `numbers` — Numbers. Vectors, matrices, probability, and the functions later pages use.
- `data` — Data. Tokens, the vocabulary, embeddings, and positions.
- `network` — Network. Linear layers, GELU, residuals, layer norm, and dropout.
- `attention` — Attention. Queries, keys, values, heads, and the causal mask.
- `block` — Block. The feed-forward network, one transformer block, and the stack.
- `gpt-2` — GPT-2. The 124M configuration, the forward pass, the loss, and sampling.
- `training` — Training. Data, batches, the learning rate, overfitting, and checkpoints.
- `modern` — Modern. The pieces later models changed, and the training that follows pretraining.

## Pages

- `/technical` lists the eight groups in the order above. Each group name links to `/technical/{id}`. Under the name, the group description is the sentence in this file.
- `/technical/[group]` lists manifest entries with that `group` and `kind: "article"`, in `order`. Ready entries are links. Planned entries say `Not written yet`.
- An unknown group calls `notFound()`.
- Set curriculum entry `technical-index` to `ready`.

## Out of scope

- Concept articles
- The explorer
- New groups

## Checklist

- [ ] `/technical` lists Numbers, Data, Network, Attention, Block, GPT-2, Training, and Modern in that order
- [ ] Each group page lists only its articles
- [ ] Planned articles are not links
- [ ] `/technical/not-a-group` uses the 404
- [ ] `technical-index` is `ready`
- [ ] Both themes use the token colors
- [ ] At 375px the lists wrap

## Notes
