import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/article/Article";
import { getByRoute } from "@/content/curriculum";
import { articleContent } from "@/content/registry/article";
import { technicalPages } from "@/content/registry/technical";

type Params = { group: string; slug: string };

export function generateStaticParams() {
  return Object.keys(technicalPages).flatMap((key) => {
    const slash = key.indexOf("/");
    if (slash <= 0 || slash === key.length - 1) {
      return [];
    }
    return [{ group: key.slice(0, slash), slug: key.slice(slash + 1) }];
  });
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { group, slug } = await params;
  const entry = getByRoute(`/technical/${group}/${slug}`);
  if (!entry || !technicalPages[`${group}/${slug}`]) {
    return {};
  }
  return { title: entry.title, description: entry.description };
}

export default async function TechnicalPage({ params }: { params: Promise<Params> }) {
  const { group, slug } = await params;
  const page = technicalPages[`${group}/${slug}`];
  const entry = getByRoute(`/technical/${group}/${slug}`);
  if (!page || !entry) {
    notFound();
  }
  const { Content, updated } = articleContent(page);
  return (
    <Article entry={entry} updated={updated}>
      <Content />
    </Article>
  );
}
