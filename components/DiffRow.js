"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function DiffRow({ index, title, desc }) {
  const [ref, revealed] = useRevealOnScroll(0.35);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 1.4fr",
        gap: 32,
        alignItems: "baseline",
        padding: "28px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        willChange: "opacity,transform",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s cubic-bezier(.16,.84,.44,1), transform 0.7s cubic-bezier(.16,.84,.44,1)",
      }}
    >
      <span style={{ fontFamily: "var(--font-space-grotesk), monospace", fontSize: 13, color: "#e2661d" }}>{String(index + 1).padStart(2, "0")}</span>
      <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 19, fontWeight: 600, margin: 0, letterSpacing: "-0.2px" }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8b9096", margin: 0 }}>{desc}</p>
    </div>
  );
}
