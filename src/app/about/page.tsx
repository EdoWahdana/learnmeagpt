import type { Metadata } from "next";
import { Article } from "@/components/article/Article";
import AboutBody, { frontmatter } from "@/content/about.mdx";
import { getEntry } from "@/content/curriculum";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
  description: "What this site covers and which model it inspects.",
};

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
