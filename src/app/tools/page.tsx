import type { Metadata } from "next";
import { EntryList } from "@/components/article/EntryList";
import { curriculum } from "@/content/curriculum";

export const metadata: Metadata = {
  title: "Tools",
  description: "These calculators run in the browser. The input is not sent anywhere.",
};

export default function ToolsIndex() {
  const entries = curriculum
    .filter((entry) => entry.section === "tools" && entry.kind === "tool")
    .sort((a, b) => a.order - b.order);

  return (
    <div className="article">
      <h1>Tools</h1>
      <p className="article-description">
        These calculators run in the browser. The input is not sent anywhere.
      </p>
      <EntryList entries={entries} />
    </div>
  );
}
