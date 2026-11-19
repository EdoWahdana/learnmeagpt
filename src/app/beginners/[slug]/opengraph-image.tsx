import { getByRoute } from "@/content/curriculum";
import { beginnerPages } from "@/content/registry/beginners";
import { ogContentType, ogSize, renderOgImage, truncate } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "learn me a gpt, beginners page";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return Object.keys(beginnerPages).map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getByRoute(`/beginners/${slug}`);
  return renderOgImage({
    kicker: "How GPT works · Beginners",
    title: entry?.title ?? "How GPT works",
    description: entry ? truncate(entry.description) : undefined,
  });
}
