import type { Metadata } from "next";
import { EntryList } from "@/components/article/EntryList";
import { curriculum } from "@/content/curriculum";

export const metadata: Metadata = {
  title: "Beginners",
  description: "This reading order starts from a chat window and ends at the shape of a GPT-2 model.",
};

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
