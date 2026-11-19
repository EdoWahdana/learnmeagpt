# Sampling

Status: not started

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `sampling`
- Title: Sampling
- Route: `/technical/gpt-2/sampling`
- Section: technical
- Group: gpt-2
- Kind: article
- Phase: later
- Order: 33
- Aliases: sampling, top-k, top-p, greedy
- Depends on:
- `roadmap/00-foundations/04-article-template.md`
- `roadmap/00-foundations/02-curriculum-manifest.md`

## Reader promise

Sampling turns the next-token distribution into one id: greedy, temperature, top-k, or top-p.

## Reader already knows

Temperature beginner page and logits.

## This page stops before

KV cache.

## Voice

Objective. No byline, no author name, no first person, no personal origin story. The first paragraph defines the idea.

If a number is printed in this spec, the page matches it. If this spec says to compute a value from a library, run the library. Do not fill token ids, activations, or parameter counts from memory.

## Files

- Create `src/content/technical/gpt-2/sampling.mdx`
- Register it as `technicalPages["gpt-2/sampling"]`
- Set curriculum entry `sampling` to `status: "ready"` only when the route renders
- Frontmatter `title` and `description` match this spec. `description` is the reader promise. Set `updated` to the day you write the page.

## Required sections

These are the `h2` headings, in this order: Greedy, Temperature, Top-k and top-p.

1. **Greedy.** Pick the maximum probability.
2. **Temperature.** softmax(logits / T), already computed for T = 2 on (1, 2, 3).
3. **Top-k and top-p.** Top-k keeps the k largest logits and sets the rest to −∞ before softmax. Top-p keeps the smallest set of highest probabilities whose sum is at least p, then renormalizes. Use a written 5-logit example and show which entries survive for a chosen k and p.

## Facts that must stay true

- Greedy is the mode.
- Temperature divides logits before softmax.
- Top-k and top-p both renormalize after the cut.

## Diagram

A 5-bar distribution with two bars marked dropped. Caption: A cut removes scores, then softmax runs again.

## Python

The T = 2 check, plus one top-k = 2 example on written logits.

Numeric check: T = 2 matches [0.1863, 0.3072, 0.5065] on [1, 2, 3]. The top-k example’s survivors are the two largest logits.

## Toy slot

Embed TemperatureSampler and, when it exists, SamplingCompare.

## Terms

- `<Term id="kv-cache">KV cache</Term>`

Link only through `Term`, so a planned target stays plain text.

## Out of scope

- A claim that a setting is more truthful

## Checklist

- [ ] `/technical/gpt-2/sampling` renders in `npm run dev`
- [ ] The first paragraph defines the idea in the reader promise
- [ ] The `h2` headings match this spec, in order
- [ ] Every fact in the facts list is stated, and none is contradicted
- [ ] The diagram is an SVG using `currentColor`, with the caption from this spec, inside `Figure`
- - [ ] The Python block matches the numeric check in this spec
- - [ ] The named toy is embedded when its component file exists; leave this box open if it does not
- [ ] Named terms use `Term` and no link on the page 404s
- [ ] There is no byline, author name, or first person
- [ ] Curriculum entry `sampling` is `ready`
- [ ] Light and dark both use the token colors, including the diagram
- [ ] At 375px the page has no horizontal scroll


## Notes
