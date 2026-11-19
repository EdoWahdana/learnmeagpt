import { getByRoute } from "@/content/curriculum";
import { toolPages } from "@/content/registry/tools";
import { ogContentType, ogSize, renderOgImage, truncate } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "learn me a gpt, interactive tool";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return Object.keys(toolPages).map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getByRoute(`/tools/${slug}`);
  return renderOgImage({
    kicker: "Interactive GPT tool",
    title: entry?.title ?? "GPT tools",
    description: entry ? truncate(entry.description) : undefined,
  });
}
