import { curriculum, type Entry } from "@/content/curriculum";

export function searchEntries(query: string, entries: readonly Entry[] = curriculum): Entry[] {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return [];
  }

  const ranked = entries.flatMap((entry) => {
    if (entry.status !== "ready") {
      return [];
    }
    const title = entry.title.toLowerCase().includes(needle);
    const alias = entry.aliases.some((item) => item.toLowerCase().includes(needle));
    if (title || alias) {
      return [{ entry, rank: 0 }];
    }
    if (entry.description.toLowerCase().includes(needle)) {
      return [{ entry, rank: 1 }];
    }
    return [];
  });

  ranked.sort((a, b) => a.rank - b.rank);
  return ranked.slice(0, 12).map((item) => item.entry);
}
