import type { ReactNode } from "react";

type NoteType = "note" | "tip" | "warning";

const defaultTitles: Record<NoteType, string> = {
  note: "Note",
  tip: "Tip",
  warning: "Careful",
};

function NoteIcon({ type }: { type: NoteType }) {
  if (type === "tip") {
    return (
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
        <path d="M8 1.5a4.5 4.5 0 0 0-2.6 8.2V11h5.2V9.7A4.5 4.5 0 0 0 8 1.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 13.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "warning") {
    return (
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
        <path d="M8 1.8 15 14H1L8 1.8Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 6.5v3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11.8" r="0.9" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function Note({
  type = "note",
  title,
  children,
}: {
  type?: NoteType;
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className={`note note-${type}`} role="note">
      <p className="note-title">
        <NoteIcon type={type} />
        <span>{title ?? defaultTitles[type]}</span>
      </p>
      <div className="note-body">{children}</div>
    </aside>
  );
}
