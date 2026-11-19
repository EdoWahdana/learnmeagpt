"use client";

import { useEffect, useState } from "react";

type Item = { id: string; text: string };

export function TableOfContents() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const body = document.getElementById("article-body");
    if (!body) {
      return;
    }
    const headings = [...body.querySelectorAll("h2")]
      .filter((heading): heading is HTMLHeadingElement => heading instanceof HTMLHeadingElement && heading.id !== "")
      .map((heading) => ({ id: heading.id, text: heading.textContent ?? "" }));
    setItems(headings);
  }, []);

  if (items.length < 2) {
    return null;
  }

  return (
    <nav className="article-contents" aria-label="Contents">
      <p>Contents</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
