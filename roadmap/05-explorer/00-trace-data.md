# Trace data

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `trace-data`
- Phase: later
- Depends on:
- `roadmap/00-foundations/00-project-scaffold.md`

## What this session builds

A Python script that runs one GPT-2 small forward pass and writes JSON the site can commit. It does not build a page.

## Files

- `scripts/build_gpt2_trace.py`
- `scripts/requirements.txt` with the `torch` and `transformers` versions you ran
- `src/content/traces/a-cat-sat.json`

Do not commit model weights. Do not add torch to the Next.js app.

## The run

- Model id: `gpt2`
- Sentence: `A cat sat on the mat.`
- Device: CPU is enough
- Record `transformers` version, `torch` version, and the tokenizer’s id for `<|endoftext|>`

Write JSON with:

- `sentence`
- `model`
- `library_versions`
- `config`: n_layer 12, n_head 12, n_embd 768, n_ctx 1024, vocab_size 50257, or whatever the loaded config actually has. Do not edit the file to force these numbers.
- `tokens`: list of `{ "id", "text" }` from the tokenizer
- `next_token_top5`: at the last position, temperature 1, five objects with id, text, and probability
- `residual_l2`: 12 lists, one per block, of the L2 norm of the residual output at each token
- `attention`: 12 layers × 12 heads × tokens × tokens, rounded to 4 decimals
- `parameters`: list of `{ "name", "shape" }` for every parameter
- `ln_f_weight_preview`: the first 8 values of `transformer.ln_f.weight`
- `license_note`: lines you copied from the model card, or an empty string if you could not open the card

Keep the file under 2 MB. A short sentence makes that easy. If it is larger, store attention rounded to 4 decimals and do not store full hidden states.

If the download fails, do not write stand-in numbers. Leave the checklist open.

## Checklist

- [ ] The script exists and `requirements.txt` pins the versions you ran
- [ ] The JSON is produced by the script
- [ ] The sentence in the JSON is `A cat sat on the mat.`
- [ ] Token ids in the JSON match a second tokenizer call
- [ ] Attention rows are softmax rows from the model, summing to about 1
- [ ] No weight file other than the 8-value preview is committed
- [ ] The Next.js `package.json` does not depend on torch
- [ ] Notes record the library versions

## Notes
