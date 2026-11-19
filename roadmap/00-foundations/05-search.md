# Search

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `search`
- Phase: v1
- Depends on: [02-curriculum-manifest.md](02-curriculum-manifest.md), [03-app-shell.md](03-app-shell.md)

## What this session builds

One search field in the header. It matches curriculum titles, aliases, and descriptions in the browser. It does not call a server.

## Files

- `src/lib/search.ts`
- `src/components/shell/Search.tsx`
- Mount `Search` in the header slot the app shell left open

## Behavior

- Placeholder: `Search pages and tools`
- Label the input with `aria-label="Search pages and tools"`
- Empty input shows no results
- From the first character, match case-insensitively against `title`, `aliases`, and `description`
- Rank a title or alias match above a description-only match
- Show at most 12 results
- Each result is a link: title, and the section name in muted type (`Beginners`, `Technical`, `Tools`, `Explorer`)
- An entry with kind `utility` shows the title only, with no section name
- A `planned` entry is omitted. Search lists written pages only
- Escape clears the query and closes the list
- Arrow up and down move the active result. Enter follows it
- Clicking outside closes the list
- The list uses `--bg-elevated`, `--fg`, and `--border`
- The active row uses the `--accent-soft` background

## Matcher

`searchEntries(query: string): Entry[]` lives in `src/lib/search.ts` and is pure. A short query that is only spaces returns an empty list.

## Out of scope

- Full-text search of MDX body
- A command palette library
- Searching explorer tensors or token ids
- Recent searches stored on the server

## Checklist

- [x] The field is in the header on `/` and on an article route
- [x] Typing `token` shows the ready token pages and hides planned ones
- [x] An alias from the manifest finds its page
- [x] More than 12 matches still render only 12
- [x] Escape clears the field
- [x] Arrow keys move the active result and Enter navigates
- [x] The list is usable in light and dark with token colors
- [x] Using the field sends no network request
- [x] At 375px the field fits without horizontal scroll

## Notes

`searchEntries` returns at most 12 matches and the list renders that array. Tested with 15 ready title matches, one description-only match, and one planned match: 12 came back, the planned one was left out, and the description-only match ranked below the title matches. Four pages are written, so a normal query stays under that cap. A temporary ready match for `token` appeared in the list while planned token pages stayed out; that entry was set back to planned because its article is not written. `guide` and `calculators` find Beginners and Tools by alias. Escape clears the field. Arrow Down then Enter opened `/tools`. No new network request was recorded while typing.
