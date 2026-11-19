import type { ReactNode } from "react";

export function SearchSlot({ children }: { children?: ReactNode }) {
  return (
    <div className="search-slot" role="search" aria-label="Search">
      {children}
    </div>
  );
}
