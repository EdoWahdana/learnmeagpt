# App shell

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `app-shell`
- Phase: v1
- Depends on: [01-design-tokens.md](01-design-tokens.md), [02-curriculum-manifest.md](02-curriculum-manifest.md)

## What this session builds

The frame around every page: wordmark, theme control, search slot, section links, footer, skip link, and a 404. It reads sections from the curriculum manifest. It does not write article prose.

## Files

- `src/app/layout.tsx`
- `src/components/shell/Header.tsx`
- `src/components/shell/Footer.tsx`
- `src/components/shell/Nav.tsx`
- `src/components/shell/ThemeToggle.tsx`
- `src/components/shell/Menu.tsx`
- `src/app/not-found.tsx`
- A search slot component that renders the children passed for search. The search session fills the slot. Until then, the header may render an empty labeled region with `aria-label="Search"` so layout does not jump later.

## Header

Top row:

- Wordmark `learn me a gpt`, lowercase, linking to `/`. Sans, not serif.
- Theme control on the same row.

Second row: the search slot, full width of the content column.

Third row, wide screens: text links `Beginners`, `Technical`, `Tools`, `Explorer` to `/beginners`, `/technical`, `/tools`, `/explorer`. The current section is underlined. Use `aria-current="page"` when the path is inside that section.

Narrow screens, at 720px and below: those four links move into a panel opened by a button whose visible label is `Menu`. The button’s expanded state is `aria-expanded`. Escape closes the panel. Search and the theme control stay outside the panel.

Do not use an icon-only hamburger, an emoji, or a logo image.

## Theme control

A button. When the theme is dark, the label is `Light`. When the theme is light, the label is `Dark`. Activating it sets `document.documentElement.dataset.theme` and `localStorage` key `theme` to `light` or `dark`. It uses the token button style. It uses the shared tokens.

## Footer

Text links: `Home` (`/`), `Map` (`/map`), `About` (`/about`). No email, no donation, no social accounts, no author name.

## Skip link

The first focusable control is `Skip to content`. It is visually available on focus and targets the main element’s id.

## 404

`not-found.tsx` uses the same shell. The heading is `This page is not in the curriculum.` The body has links to `/` and tells the reader the header search lists written pages. No joke, no illustration.

## Metadata

- `lang="en"` on `html`
- Default title `learn me a gpt`
- Title template `%s · learn me a gpt`
- A one-sentence default description: `Explanations of how GPT-style language models work, from tokens to a GPT-2 forward pass.`
- No analytics script, no cookie banner, no third-party script

## Layout

- Main content sits in a column with horizontal padding from the space scale.
- The shell itself does not force the article measure. The article template does.
- Background of the shell is `--bg`, so light and dark both paint the full viewport.

## Out of scope

- Search behavior
- Article typography beyond using the shell
- Page prose for home, map, and about
- A progress indicator or account menu

## Checklist

- [x] Every page shows the wordmark `learn me a gpt` linking to `/`
- [x] The theme button switches light and dark and keeps the choice after reload
- [x] The button label names the theme it will switch to
- [x] Wide layout shows Beginners, Technical, Tools, and Explorer as text links
- [x] At 375px width the section links are inside a `Menu` button panel
- [x] Escape closes that panel
- [x] The current section link has `aria-current="page"`
- [x] Skip link is the first focusable control and moves focus to `main`
- [x] An unknown URL renders the 404 copy inside the shell
- [x] Footer links Home, Map, and About, and shows no personal name
- [x] View source includes no analytics or chat widget script
- [x] Header, menu, and footer use the sans font and the token colors in both themes

## Notes

Verified in the browser on the running dev server. Wide layout and a 375px viewport. Light and dark both use the token colors, and the choice survives a reload. `/beginners/tokens` marks Beginners as the current section. Unknown URLs render the 404 heading inside the shell. The home, map, and about pages are still the later sessions, so `/map` and `/about` 404 until then.

`html` has `suppressHydrationWarning` because the theme script sets `data-theme` before React hydrates. The theme button shows one label at a time with CSS, so the server and client render the same markup. A client `ThemeBoot` repeats that choice when a dev 404 fallback renders the layout without running the script.
