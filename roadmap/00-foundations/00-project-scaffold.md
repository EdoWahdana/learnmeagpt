# Project scaffold

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `scaffold`
- Phase: v1
- Depends on: none

## What this session builds

A Next.js App Router app in this repository, with TypeScript, the folders later sessions will fill, and the dependencies those sessions import. The roadmap stays where it is. No page content, no visual design, no curriculum entries.

## Files

Create or leave in place:

- `package.json`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `eslint.config.mjs` or the ESLint file the installer writes
- `src/app/layout.tsx` with a temporary title `learn me a gpt` and an empty body wrapper. Do not design it. The app-shell session replaces the frame.
- `src/app/page.tsx` with a single line of text: `learn me a gpt`. The home session replaces it.
- `src/app/globals.css` may be the installer default. The design-tokens session replaces it.
- `src/content/curriculum.ts` exporting the types below and empty arrays
- `src/content/registry/beginners.tsx` exporting `beginnerPages` as an empty record
- `src/content/registry/technical.tsx` exporting `technicalPages` as an empty record
- `src/content/registry/tools.tsx` exporting `toolPages` as an empty record
- `src/content/registry/explorer.tsx` exporting `explorerPages` as an empty record
- `src/components/shell/`, `src/components/article/`, `src/components/tools/`, `src/lib/`, `scripts/`, `src/content/traces/`
- `.prettierrc` with `semi: true` and `singleQuote: false`
- A root `.gitignore` that includes `.next`, `node_modules`, and `.env*`

Do not delete `roadmap/` or the root `README.md`.

## Commands

The directory is not empty, so `create-next-app` may refuse to run here. Generate into a temporary directory, then copy the app in without overwriting `roadmap/` or `README.md`.

Match these choices if the installer asks: TypeScript, App Router, ESLint, no Tailwind, `src/` directory, npm, import alias `@/*`.

Install, and record the versions in `package.json`:

- `next`, `react`, `react-dom`
- `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`
- `remark-gfm`, `rehype-slug`
- `gpt-tokenizer`
- `prettier` as a dev dependency

Add scripts:

- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`
- `lint`: `next lint`
- `format`: `prettier --write .`

Wire MDX in `next.config.ts` with `remark-gfm` and `rehype-slug`, and page extensions `ts`, `tsx`, `md`, `mdx`. Do not add Tailwind, a CSS framework, or an analytics package.

## Curriculum types

`src/content/curriculum.ts` exports these types and empty `curriculum` and `groups` arrays. The manifest session fills the arrays. Do not invent page rows in this session.

```ts
export type Phase = "v1" | "later";
export type Status = "planned" | "ready";
export type Section = "beginners" | "technical" | "tools" | "explorer";
export type Kind = "article" | "tool" | "explorer" | "index" | "utility";

export type Entry = {
  id: string;
  title: string;
  description: string;
  route: string;
  section: Section;
  group: string;
  phase: Phase;
  status: Status;
  order: number;
  kind: Kind;
  aliases: string[];
};

export type Group = {
  id: string;
  title: string;
  section: Section;
  order: number;
  description: string;
};

export const curriculum: Entry[] = [];
export const groups: Group[] = [];
```

Registry files export empty records typed as `Record<string, ComponentType>`.

## Out of scope

- Colors, fonts, header, footer, search, articles, toys, and page prose
- Filling `curriculum` or `groups`
- A git commit, unless the user asks in that session
- Accounts, a database, Tailwind, a component library

## Checklist

- [x] `npm run dev` serves a page that reads `learn me a gpt`
- [x] `npm run build` completes
- [x] `roadmap/` and the root `README.md` are unchanged by the installer
- [x] `package.json` depends on `@next/mdx`, `remark-gfm`, `rehype-slug`, and `gpt-tokenizer`
- [x] `next.config.ts` compiles MDX with those remark and rehype plugins
- [x] No Tailwind package and no analytics package are installed
- [x] `src/content/curriculum.ts` exports the types and empty arrays
- [x] The four registry files exist and export empty records
- [x] `npm run format` runs Prettier
- [x] `.gitignore` ignores `.next`, `node_modules`, and `.env*`

## Notes

- Next.js 16.4.6 removed `next lint` (it treats the word `lint` as a directory). `npm run lint` runs `eslint` instead.
- Turbopack cannot serialize imported remark/rehype functions. `next.config.ts` passes `["remark-gfm"]` and `["rehype-slug"]`. A temporary MDX page with a GFM table compiled, then was removed.
- `src/mdx-components.tsx` exports `useMDXComponents`. Without it, an MDX page fails with `createContext is not a function`.
- The installer turned on `cacheComponents` and `partialPrefetching`. Those were left off so later sessions use ordinary App Router pages.
- `.prettierignore` skips `roadmap/` so `npm run format` does not rewrite the session files.
- The dev server on port 3456 was stopped after the homepage check.
