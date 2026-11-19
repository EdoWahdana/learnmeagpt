# Design tokens

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `design-tokens`
- Phase: v1
- Depends on: [00-project-scaffold.md](00-project-scaffold.md)

## What this session builds

The visual system: warm light and dark colors, serif articles, sans UI, underlined ink links, and quiet controls. Later sessions use these variables and classes. They do not introduce a second palette.

The dark theme follows Claude.ai. The background is warm charcoal, lifted off pure black. The text is warm paper, not pure white. The light theme uses the matching warm paper background and warm near-black text. A pure `#000000` page or a pure `#ffffff` body text fails this session.

## Files

- Replace `src/app/globals.css`
- Load fonts in `src/app/layout.tsx` with `next/font/google`: Source Serif 4, Source Sans 3, Source Code Pro. Expose them as CSS variables. Do not add a runtime stylesheet request to a third-party font host beyond what `next/font` self-hosts at build time.
- Add a tiny inline script in `src/app/layout.tsx`, before paint, that sets `data-theme` on `<html>` from `localStorage` key `theme`, and otherwise from `prefers-color-scheme`.
- Do not build the theme button. The app-shell session does. This session only makes both themes exist.

## Color variables

Define both themes on `html[data-theme="light"]` and `html[data-theme="dark"]`.

Light:

- `--bg: #faf9f5`
- `--bg-elevated: #ffffff`
- `--fg: #141413`
- `--fg-muted: #6b6a65`
- `--border: #e6e4dc`
- `--code-bg: #f0eee6`

Dark:

- `--bg: #262624`
- `--bg-elevated: #30302e`
- `--fg: #faf9f5`
- `--fg-muted: #a8a59a`
- `--border: #3d3d38`
- `--code-bg: #1e1e1c`

If Claude.ai’s computed dark background and primary text differ when you check the live site, use those live values, keep them warm, and record the hex under Notes. Do not move to pure black or pure white.

Also set:

- `--focus`: the current `--fg` at low opacity, used as an outline
- `--font-ui`, `--font-serif`, `--font-mono` from `next/font`
- `--measure: 38rem`
- Space steps `--space-1` through `--space-6` on an 8px scale
- `color-scheme` matching the active theme so native controls are not bright white inside the dark theme

## Type and links

- `body` uses the sans variable, `--bg`, and `--fg`. Size `16px`.
- `.prose` uses the serif variable, size `1.1875rem`, line-height `1.65`, max-width `var(--measure)`.
- Headings inside `.prose` use the serif, with a tight line-height. `h1` is about `2.25rem`.
- Muted text uses `--fg-muted` and is for captions, metadata, and the “not written yet” label. Long paragraphs use `--fg`.
- Article links: `color: inherit`, underlined, underline offset about `0.15em`.
- Nav links: no underline, except the current page.
- Do not set a link color that differs from the text. No blue, no terracotta, no purple.
- `::selection` uses `--accent-soft`.
- `:focus-visible` shows a 2px outline in `--fg`. Do not remove outlines without replacing them.

## Controls and code

- Inputs, textareas, and buttons: `--bg-elevated` background, `--fg` text, `1px solid var(--border)`, radius `6px`.
- Hover on a button darkens the border to `--fg`. It does not fill the button with a new color.
- `pre` and inline `code` use `--code-bg`, `--fg`, and the mono font. Comments, if highlighted later, use `--fg-muted`. Do not add a rainbow syntax theme in this session.
- `svg` in articles uses `currentColor` and does not hardcode black or white fills.

## Motion and width

- Respect `prefers-reduced-motion: reduce` by shortening transitions to almost nothing.
- The page background is `--bg` on `html` and `body`, so the dark theme has no white strip at the edges.

## Out of scope

- Header, footer, menu, search, pages, toys
- A theme button
- Syntax colors beyond muted comments
- Any second font loaded from a CDN link in the document

## Checklist

- [x] `html[data-theme="dark"]` sets `--bg` to `#262624` or the live Claude.ai dark background recorded in Notes
- [x] Dark `--fg` is warm paper and is not `#ffffff`
- [x] Dark `--bg` is not `#000000`
- [x] Light `--bg` is `#faf9f5` or the live Claude.ai paper background recorded in Notes
- [x] Light `--fg` is `#141413` or the matching warm near-black
- [x] `.prose` computes to Source Serif 4
- [x] `body` computes to Source Sans 3
- [x] `pre` computes to Source Code Pro and `--code-bg`
- [x] An article link is underlined and the same computed color as its paragraph
- [x] An inline script sets `data-theme` before paint from `localStorage` or the system preference
- [x] No stylesheet link to `fonts.googleapis.com` remains in the document
- [x] Keyboard focus shows an outline
- [x] `prefers-reduced-motion` shortens transitions

## Notes

Live Claude.ai was not opened for a pixel comparison; the hex values used are the spec values given above, which are already Claude.ai's warm-paper/warm-charcoal palette:

- Light: `--bg #faf9f5`, `--bg-elevated #ffffff`, `--fg #141413`, `--fg-muted #6b6a65`, `--border #e6e4dc`, `--code-bg #f0eee6`
- Dark: `--bg #262624`, `--bg-elevated #30302e`, `--fg #faf9f5`, `--fg-muted #a8a59a`, `--border #3d3d38`, `--code-bg #1e1e1c`

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` (`Source_Serif_4` → `--font-serif`, `Source_Sans_3` → `--font-ui`, `Source_Code_Pro` → `--font-mono`), applied as a className on `<html>`, and consumed in `globals.css`. Verified all three family names exist in Next's bundled Google Fonts metadata (`node_modules/next/dist/compiled/@next/font/dist/google/font-data.json`). `npm run dev`/`npm run build` were not run (per instructions, to avoid colliding with another session), so computed styles were verified by reading source rather than by inspecting a live DOM; `npx tsc --noEmit` passed with no errors.
