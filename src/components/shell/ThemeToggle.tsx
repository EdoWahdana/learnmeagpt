"use client";

export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle}>
      <span className="label-for-dark">Light</span>
      <span className="label-for-light">Dark</span>
    </button>
  );
}
