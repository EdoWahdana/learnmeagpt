"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getByRoute, type Entry } from "@/content/curriculum";

const SECTION_ROUTES = ["/beginners", "/technical", "/tools", "/explorer"];

function isCurrent(pathname: string, route: string) {
  return pathname === route || pathname.startsWith(`${route}/`);
}

export function Nav() {
  const pathname = usePathname();
  const sections = SECTION_ROUTES.map((route) => getByRoute(route)).filter(
    (entry): entry is Entry => entry !== undefined,
  );

  return (
    <nav aria-label="Sections">
      <ul className="section-list">
        {sections.map((section) => {
          const current = isCurrent(pathname, section.route);
          return (
            <li key={section.id}>
              {section.status === "ready" ? (
                <Link href={section.route} aria-current={current ? "page" : undefined}>
                  {section.title}
                </Link>
              ) : (
                <span className="nav-planned" title="Not written yet">
                  {section.title}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
