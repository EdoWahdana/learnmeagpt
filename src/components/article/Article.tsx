import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { getByRoute, neighbors, type Entry } from "@/content/curriculum";
import { absoluteUrl, siteName, siteUrl } from "@/lib/seo";
import { ArticleSidebar, SectionPagesDisclosure, sectionPages } from "./ArticleSidebar";
import { TableOfContents } from "./TableOfContents";

function articleData(entry: Entry, updated?: string) {
  const site = { "@type": "Organization", name: siteName, url: siteUrl };
  const sectionIndex = getByRoute(`/${entry.section}`);
  const trail = [
    { name: siteName, url: siteUrl },
    ...(sectionIndex && sectionIndex.id !== entry.id && sectionIndex.status === "ready"
      ? [{ name: sectionIndex.title, url: absoluteUrl(sectionIndex.route) }]
      : []),
    { name: entry.title, url: absoluteUrl(entry.route) },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: entry.title,
        description: entry.description,
        url: absoluteUrl(entry.route),
        mainEntityOfPage: absoluteUrl(entry.route),
        inLanguage: "en",
        isAccessibleForFree: true,
        ...(updated ? { dateModified: updated } : {}),
        author: site,
        publisher: site,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ],
  };
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatUpdated(value: string): string | undefined {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) {
    return undefined;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return undefined;
  }
  return `${day} ${months[month - 1]} ${year}`;
}

export function Article({
  entry,
  updated,
  children,
}: {
  entry: Entry;
  updated?: string;
  children: ReactNode;
}) {
  const formatted = updated ? formatUpdated(updated) : undefined;
  const { prev, next } = neighbors(entry.id);
  const previous = prev?.status === "ready" ? prev : undefined;
  const following = next?.status === "ready" ? next : undefined;

  const pages = sectionPages(entry);
  const hasSidebar = pages.length > 0;

  return (
    <div className={hasSidebar ? "article-layout has-sidebar" : "article-layout"}>
      <JsonLd data={articleData(entry, updated)} />
      {hasSidebar ? <ArticleSidebar entry={entry} pages={pages} /> : null}
      <article className="article">
        {hasSidebar ? <SectionPagesDisclosure entry={entry} pages={pages} /> : null}
        {formatted ? <p className="article-updated">{formatted}</p> : null}
        <h1>{entry.title}</h1>
        <p className="article-description">{entry.description}</p>
        <TableOfContents />
        <div className="prose" id="article-body">
          {children}
        </div>
        {previous || following ? (
          <nav className="article-neighbors" aria-label="Adjacent pages">
            {previous ? (
              <Link href={previous.route}>
                <span className="article-neighbor-label">Previous</span>
                {previous.title}
              </Link>
            ) : null}
            {following ? (
              <Link className="article-next" href={following.route}>
                <span className="article-neighbor-label">Next</span>
                {following.title}
              </Link>
            ) : null}
          </nav>
        ) : null}
      </article>
    </div>
  );
}
