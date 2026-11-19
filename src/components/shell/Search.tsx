"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import type { Section } from "@/content/curriculum";
import { searchEntries } from "@/lib/search";

const sectionLabel: Record<Section, string> = {
  beginners: "Beginners",
  technical: "Technical",
  tools: "Tools",
  explorer: "Explorer",
};

export function Search() {
  const router = useRouter();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const results = useMemo(() => searchEntries(query), [query]);
  const visible = open && results.length > 0;

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setQuery("");
      setOpen(false);
      setActive(0);
      return;
    }
    if (!visible) {
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const entry = results[active];
      if (entry) {
        setOpen(false);
        router.push(entry.route);
      }
    }
  }

  return (
    <div className="search" ref={rootRef}>
      <input
        className="search-field"
        type="search"
        value={query}
        placeholder="Search pages and tools"
        aria-label="Search pages and tools"
        aria-expanded={visible}
        aria-controls={listId}
        aria-activedescendant={visible ? `${listId}-${active}` : undefined}
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
      />
      {visible ? (
        <ul className="search-results" id={listId} role="listbox">
          {results.map((entry, index) => (
            <li key={entry.id} role="presentation">
              <Link
                id={`${listId}-${index}`}
                href={entry.route}
                role="option"
                aria-selected={index === active}
                className={index === active ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{entry.title}</span>
                {entry.kind === "utility" ? null : (
                  <span className="search-section">{sectionLabel[entry.section]}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
