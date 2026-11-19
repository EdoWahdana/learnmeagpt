import type { Metadata } from "next";
import { Article } from "@/components/article/Article";
import AboutBody, { frontmatter } from "@/content/about.mdx";
import { getEntry } from "@/content/curriculum";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "What learn me a gpt covers, and why its worked examples inspect GPT-2 small.",
  path: "/about",
});

export default function AboutPage() {
  const entry = getEntry("about");
  if (!entry) {
    notFound();
  }
  const updated = typeof frontmatter?.updated === "string" ? frontmatter.updated : undefined;
  return (
    <Article entry={entry} updated={updated}>
      <AboutBody />
    </Article>
  );
}
