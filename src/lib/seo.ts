import type { Metadata } from "next";
import type { Entry } from "@/content/curriculum";

export const siteUrl = "https://learnmeagpt.com";
export const siteName = "learn me a gpt";
export const siteTagline = "How GPT and ChatGPT work, explained simply";
export const siteDescription =
  "A free, plain-language guide to how GPT models and chatbots like ChatGPT work: tokens, prompts, embeddings, attention, transformers, temperature, and training, with interactive tools and real GPT-2 numbers.";

export function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

/** Title shown in search results, before the " · learn me a gpt" template suffix. */
export function entrySeoTitle(entry: Entry): string {
  if (entry.kind === "article" && entry.section === "beginners") {
    return `${entry.title} · How GPT works`;
  }
  if (entry.kind === "tool") {
    return `${entry.title} · Interactive GPT tool`;
  }
  return entry.title;
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  modified,
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  modified?: string;
  image?: string;
}): Metadata {
  const images = [{ url: image, width: 1200, height: 630, alt: `${title} · ${siteName}` }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName,
      locale: "en_US",
      url: path,
      title: `${title} · ${siteName}`,
      description,
      images,
      ...(type === "article" && modified ? { modifiedTime: modified } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteName}`,
      description,
      images,
    },
  };
}

/** For pages under a route that has its own `opengraph-image.tsx`. */
export function entryMetadata(entry: Entry, modified?: string): Metadata {
  return pageMetadata({
    title: entrySeoTitle(entry),
    description: entry.description,
    path: entry.route,
    type: "article",
    modified,
    image: `${entry.route}/opengraph-image`,
  });
}
