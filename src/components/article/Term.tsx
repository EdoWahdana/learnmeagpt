import Link from "next/link";
import type { ReactNode } from "react";
import { getEntry } from "@/content/curriculum";

export function Term({ id, children }: { id: string; children: ReactNode }) {
  const entry = getEntry(id);
  if (!entry || entry.status !== "ready") {
    return <>{children}</>;
  }
  return <Link href={entry.route}>{children}</Link>;
}
