import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#faf9f5",
          color: "#141413",
          borderTop: "16px solid #b5502b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 22, height: 26, borderRadius: 5, background: "#6b6a65" }} />
            <div style={{ width: 22, height: 26, borderRadius: 5, background: "#6b6a65" }} />
            <div style={{ width: 22, height: 50, borderRadius: 5, background: "#b5502b" }} />
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            learn me a&nbsp;<span style={{ color: "#b5502b" }}>gpt</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 30, color: "#8f3f1f", textTransform: "uppercase", letterSpacing: 3 }}>{kicker}</div>
          <div style={{ fontSize: title.length > 40 ? 64 : 80, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          {description ? (
            <div style={{ fontSize: 30, color: "#6b6a65", lineHeight: 1.35 }}>{description}</div>
          ) : null}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6b6a65" }}>learnmeagpt.com</div>
      </div>
    ),
    ogSize,
  );
}

export function truncate(text: string, max = 140): string {
  return text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}
