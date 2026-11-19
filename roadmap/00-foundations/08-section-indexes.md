# Section indexes

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `section-indexes`
- Phase: v1
- Depends on: [02-curriculum-manifest.md](02-curriculum-manifest.md), [03-app-shell.md](03-app-shell.md), [04-article-template.md](04-article-template.md)

## What this session builds

The Beginners and Tools index pages, plus a shared list component. `/technical` is built by the technical group-index session. `/explorer` is built by the explorer overview session. Both of those sessions should reuse this list component.

## Files

- `src/components/article/EntryList.tsx`
- `src/app/beginners/page.tsx`
- `src/app/tools/page.tsx`

`EntryList` props:

- `entries: Entry[]`
- Ready entries render as links with their description
- Planned entries render as text with `Not written yet`
- Order is the array order the caller passes

## Beginners page

- Route: `/beginners`
- Heading: `Beginners`
- One sentence: `This reading order starts from a chat window and ends at the shape of a GPT-2 model.`
- List every manifest entry with `section: "beginners"` and `kind: "article"`, sorted by `order`

## Tools page

- Route: `/tools`
- Heading: `Tools`
- One sentence: `These calculators run in the browser. The input is not sent anywhere.`
- List every manifest entry with `section: "tools"` and `kind: "tool"`, sorted by `order`

## Out of scope

- `/technical`, `/explorer`, and group pages
- Implementing any calculator
- Writing the beginner articles

## Checklist

- [x] `/beginners` lists the 17 beginner articles in filename order
- [x] `/tools` lists the four v1 toys and the later tools
- [x] Planned rows are not links
- [x] Ready rows link to their routes
- [x] `EntryList` is exported for the technical and explorer sessions
- [x] Both pages use the shell and token colors in light and dark
- [x] At 375px the lists do not overflow
- [x] Manifest entries `beginners-index` and `tools-index` are `ready`

## Notes

`EntryList` shows the description for every row. A planned row adds the label `Not written yet` and is not a link.
