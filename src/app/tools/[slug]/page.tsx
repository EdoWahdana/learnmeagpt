import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/article/Article";
import { getByRoute } from "@/content/curriculum";
import { articleContent } from "@/content/registry/article";
import { toolPages } from "@/content/registry/tools";
import { entryMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(toolPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getByRoute(`/tools/${slug}`);
  if (!entry || !toolPages[slug]) {
    return {};
  }
  return entryMetadata(entry, articleContent(toolPages[slug]).updated);
}

export default async function ToolPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = toolPages[slug];
  const entry = getByRoute(`/tools/${slug}`);
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
