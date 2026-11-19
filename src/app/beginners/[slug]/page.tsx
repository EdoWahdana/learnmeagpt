import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/article/Article";
import { getByRoute } from "@/content/curriculum";
import { articleContent } from "@/content/registry/article";
import { beginnerPages } from "@/content/registry/beginners";

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(beginnerPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getByRoute(`/beginners/${slug}`);
  if (!entry || !beginnerPages[slug]) {
    return {};
  }
  return { title: entry.title, description: entry.description };
}

export default async function BeginnerPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = beginnerPages[slug];
  const entry = getByRoute(`/beginners/${slug}`);
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
