import Link from "next/link";
import type { Entry } from "@/content/curriculum";

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="entry-list">
      {entries.map((entry) => (
        <li key={entry.id}>
          {entry.status === "ready" ? (
            <Link href={entry.route}>{entry.title}</Link>
          ) : (
            <span>{entry.title}</span>
          )}
          <p>{entry.description}</p>
          {entry.status === "ready" ? null : <p>Not written yet</p>}
        </li>
      ))}
    </ul>
  );
}
