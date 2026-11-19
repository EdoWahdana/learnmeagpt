# Article template

Status: done

Agent: implement only this file. Read [../README.md](../README.md) first. One session, this feature only.

## Identity

- Id: `article-template`
- Phase: v1
- Depends on: [01-design-tokens.md](01-design-tokens.md), [02-curriculum-manifest.md](02-curriculum-manifest.md), [03-app-shell.md](03-app-shell.md)

## What this session builds

The shared article: title, description, contents, prose, figures, Python blocks, term links, and previous/next. Page sessions add MDX and register it. They should not restyle the article.

Also create the dynamic routes and empty-safe registries so a missing slug calls `notFound()`.

## Files

- `src/components/article/Article.tsx`
- `src/components/article/TableOfContents.tsx`
- `src/components/article/Figure.tsx`
- `src/components/article/Term.tsx`
- `src/components/mdx.tsx` mapping `Term` and `Figure` into MDX
- `src/app/beginners/[slug]/page.tsx`
- `src/app/technical/[group]/[slug]/page.tsx`
- `src/lib/neighbors.ts` if the manifest session did not already export `neighbors`

Routes:

- Beginners look up `beginnerPages[slug]`
- Technical pages look up `technicalPages["${group}/${slug}"]`
- Unknown keys call `notFound()`
- `generateStaticParams` lists the registry keys
- `generateMetadata` uses the curriculum entry title and description

Do not add sample articles. A registry that is still empty means those routes 404, which is correct.

## Article anatomy

`Article` receives the curriculum entry and the MDX body.

1. No byline, no author, no avatar, no date of a person’s life. A `updated` date may appear in muted type only if the MDX frontmatter has `updated`. Format it as `17 Nov 2026` style. If the field is absent, show nothing.
2. `h1` is the entry title.
3. The description is the line under the title, in muted serif, one sentence.
4. `Contents`, only when the article has two or more `h2` elements. Each item scrolls to that `h2`. Hashes come from `rehype-slug`.
5. The body uses `.prose`.
6. Previous and next, from `neighbors(entry.id)`, only when those neighbors exist and are `ready`. The labels are the neighbor titles. They are links in the same ink.

## Term

```tsx
export function Term({ id, children }: { id: string; children: React.ReactNode }) {
  const entry = getEntry(id);
  if (!entry || entry.status !== "ready") return <>{children}</>;
  return <Link href={entry.route}>{children}</Link>;
}
```

`getEntry` comes from the curriculum module. Planned targets render as plain text.

## Figure

```tsx
export function Figure({ caption, children }: { caption: string; children: React.ReactNode })
```

Render a `figure` and `figcaption`. The caption uses muted type. Children are the SVG or toy. The figure is full width of the measure and does not overflow on a 375px screen.

## Python blocks

MDX fences tagged `python` render inside `pre` with the token code styles. Do not run the Python. Do not add a copy-to-clipboard control in this session. Do not color keywords with a rainbow theme. Comments in a later highlighter may use `--fg-muted` only.

## Frontmatter

Page sessions may set:

```md
---
title: How a GPT works
description: A GPT-style model repeats one step: it turns the current tokens into a distribution over the next token.
updated: 2026-11-17
---
```

The template does not render an `author` field even if one is present.

## Out of scope

- Writing any beginner, technical, tool, or explorer page
- The search index
- Executing Python in the browser
- Comments, quizzes, or reading-progress bars

## Checklist

- [x] `Article` renders title, description, body, and omits any byline
- [x] Contents lists every `h2` when there are at least two, and hides when there are fewer
- [x] Contents links scroll to the matching heading
- [x] `Term` links to a `ready` entry and renders text for a `planned` or unknown id
- [x] `Figure` shows the caption and does not overflow at 375px
- [x] A `python` fence uses `--code-bg` and the mono font in both themes
- [x] Previous and next appear only for ready neighbors in the same section
- [x] `/beginners/not-a-page` and `/technical/numbers/not-a-page` use the 404
- [x] Registries that are empty do not crash the build
- [x] Article text uses the serif measure and token colors in light and dark

## Notes

Checked with two temporary beginner pages and one temporary technical page, then removed them. The registries are empty again, and `npm run build` still passes. Those routes 404 until a page session registers an MDX module.

Register a page as the module, not only the default export: `import * as page from "...mdx"` then `beginnerPages[slug] = page` or `technicalPages["group/slug"] = page`. YAML frontmatter is exported as `frontmatter` through `remark-frontmatter` and `remark-mdx-frontmatter`. `updated: 2026-11-17` renders as `17 Nov 2026`. An `author` field is ignored. Title and description on the page come from the curriculum entry.

`neighbors` was already exported by the manifest, so this session did not add `src/lib/neighbors.ts`.
- 2026-11-19: for the static export, `src/app/technical/` was renamed to `src/app/_technical/`, because an export cannot build a dynamic route with zero pages. The first technical page session renames it back.
