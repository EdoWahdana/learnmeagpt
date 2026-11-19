"use client";

import { useEffect, useState } from "react";
import { Nav } from "./Nav";

export function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="shell-menu">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      {open ? (
        <div className="menu-panel">
          <Nav />
        </div>
      ) : null}
    </div>
  );
}
