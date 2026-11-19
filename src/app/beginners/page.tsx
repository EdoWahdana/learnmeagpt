import type { Metadata } from "next";
import { EntryList } from "@/components/article/EntryList";
import { curriculum } from "@/content/curriculum";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How GPT works for beginners",
  description:
    "Short, plain-language pages on how GPT and chatbots like ChatGPT work, read in order: from a chat window to tokens, attention, the transformer, and the shape of a GPT-2 model.",
  path: "/beginners",
});

export default function BeginnersIndex() {
  const entries = curriculum
    .filter((entry) => entry.section === "beginners" && entry.kind === "article")
    .sort((a, b) => a.order - b.order);

  return (
    <div className="article">
      <h1>Beginners</h1>
      <p className="article-description">
        This reading order starts from a chat window and ends at the shape of a GPT-2 model.
      </p>
      <EntryList entries={entries} />
    </div>
  );
}
