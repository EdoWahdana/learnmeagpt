import Link from "next/link";
import { curriculum, groups, type Entry } from "@/content/curriculum";

type PageGroup = { title?: string; entries: Entry[] };

export function sectionPages(entry: Entry): PageGroup[] {
  if (entry.kind !== "article" && entry.kind !== "tool") {
    return [];
  }
  const siblings = curriculum
    .filter(
      (candidate) =>
        candidate.section === entry.section && candidate.kind === entry.kind && candidate.status === "ready",
    )
    .sort((a, b) => a.order - b.order);
  if (siblings.length < 2) {
    return [];
  }
  if (entry.section !== "technical") {
    return [{ entries: siblings }];
  }
  return groups
    .filter((group) => group.section === "technical")
    .sort((a, b) => a.order - b.order)
    .map((group) => ({ title: group.title, entries: siblings.filter((page) => page.group === group.id) }))
    .filter((group) => group.entries.length > 0);
}

function sectionIndex(entry: Entry): Entry | undefined {
  return curriculum.find((candidate) => candidate.section === entry.section && candidate.kind === "index");
}

function PageList({ entry, pages }: { entry: Entry; pages: PageGroup[] }) {
  const ordered = entry.section === "beginners";
  return (
    <>
      {pages.map((group) => {
        const items = group.entries.map((page) => (
          <li key={page.id}>
            <Link href={page.route} aria-current={page.id === entry.id ? "page" : undefined}>
              {page.title}
            </Link>
          </li>
        ));
        return (
          <div key={group.title ?? "pages"} className="sidebar-group">
            {group.title ? <p className="sidebar-group-title">{group.title}</p> : null}
            {ordered ? <ol>{items}</ol> : <ul>{items}</ul>}
          </div>
        );
      })}
    </>
  );
}

export function ArticleSidebar({ entry, pages }: { entry: Entry; pages: PageGroup[] }) {
  const index = sectionIndex(entry);
  const label = index?.title ?? "Pages";
  return (
    <aside className="article-sidebar">
      <nav aria-label={`${label} pages`}>
        {index ? (
          <Link href={index.route} className="sidebar-title">
            {index.title}
          </Link>
        ) : null}
        <PageList entry={entry} pages={pages} />
      </nav>
    </aside>
  );
}

export function SectionPagesDisclosure({ entry, pages }: { entry: Entry; pages: PageGroup[] }) {
  const index = sectionIndex(entry);
  return (
    <details className="article-pages-narrow">
      <summary>Pages in {index?.title ?? "this section"}</summary>
      <nav aria-label={`${index?.title ?? "Section"} pages`}>
        <PageList entry={entry} pages={pages} />
      </nav>
    </details>
  );
}
