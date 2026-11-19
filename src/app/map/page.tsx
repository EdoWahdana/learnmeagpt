import type { Metadata } from "next";
import { EntryList } from "@/components/article/EntryList";
import { curriculum, groups, type Entry } from "@/content/curriculum";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Map of every page",
  description: "Every page on learn me a gpt, grouped by section, including titles that are not written yet.",
  path: "/map",
});

function listed(entries: Entry[]) {
  return entries
    .filter((entry) => entry.kind !== "index" && entry.kind !== "utility")
    .sort((a, b) => a.order - b.order);
}

export default function MapPage() {
  const beginners = listed(curriculum.filter((entry) => entry.section === "beginners"));
  const tools = listed(curriculum.filter((entry) => entry.section === "tools"));
  const explorer = listed(curriculum.filter((entry) => entry.section === "explorer"));
  const technical = groups
    .filter((group) => group.section === "technical")
    .sort((a, b) => a.order - b.order)
    .map((group) => ({
      ...group,
      entries: listed(curriculum.filter((entry) => entry.section === "technical" && entry.group === group.id)),
    }))
    .filter((group) => group.entries.length > 0);

  return (
    <div className="article">
      <h1>Map</h1>
      <p className="article-description">Written pages are links. The other titles are not written yet.</p>
      <section>
        <h2>Beginners</h2>
        <EntryList entries={beginners} />
      </section>
      <section>
        <h2>Technical</h2>
        {technical.map((group) => (
          <section key={group.id}>
            <h3>{group.title}</h3>
            <EntryList entries={group.entries} />
          </section>
        ))}
      </section>
      <section>
        <h2>Tools</h2>
        <EntryList entries={tools} />
      </section>
      <section>
        <h2>Explorer</h2>
        <EntryList entries={explorer} />
      </section>
    </div>
  );
}
