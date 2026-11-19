# Curriculum map

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `map`
- Phase: v1
- Route: `/map`
- Kind: utility
- Depends on: [02-curriculum-manifest.md](02-curriculum-manifest.md), [03-app-shell.md](03-app-shell.md)

## What this session builds

`/map`, the full curriculum. Ready entries are links. Planned entries are visible as text so the road is readable before those pages exist.

## Files

- `src/app/map/page.tsx`
- Register a utility curriculum row only if the manifest session left `map` out. The manifest session is supposed to include it. Do not duplicate the row.

## Layout

Heading: `Map`.

One sentence under it: `Written pages are links. The other titles are not written yet.`

Then, in order:

1. Beginners, flat, by `order`
2. Technical, by group order, then page order inside the group
3. Tools, by `order`
4. Explorer, by `order`

Skip entries whose kind is `index` or `utility` so the map does not list itself, About, or the section indexes.

A ready row is a link with the title and the description in muted type. A planned row is the same text, not a link, with the muted label `Not written yet`.

No percentages, no checkmarks, no accounts.

## Out of scope

- Editing page status. Page sessions do that.
- Filtering controls. The page is a list.

## Checklist

- [x] `/map` lists every article, tool, and explorer entry from the manifest
- [x] A `planned` row is not a link and shows `Not written yet`
- [x] A `ready` row links to its route
- [x] Technical pages are grouped under Numbers, Data, Network, Attention, Block, GPT-2, Training, and Modern
- [x] Map, About, and the section indexes are not listed as lessons
- [x] Light and dark use token colors
- [x] At 375px titles wrap instead of overflowing
- [x] Manifest entry `map` is `ready`

## Notes

The map lists 86 lessons. Map, About, and the section indexes are omitted. A ready `EntryList` row was checked by marking one beginner article ready, confirming the link, and setting it back to planned.
