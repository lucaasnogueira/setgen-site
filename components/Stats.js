"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/data/content";
import { revealStyle } from "@/lib/styles";

export default function Stats() {
  const [ref, revealed] = useRevealOnScroll();
  const values = useCountUp(STATS.map((s) => s.target), revealed);

  return (
    <section ref={ref} style={{ padding: "120px var(--pad-x)", background: "linear-gradient(180deg,#0b0c0e,#0e1013)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ ...revealStyle(revealed), maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 40, textAlign: "center" }}>
        {STATS.map((s, i) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(36px,4.4vw,56px)",
                fontWeight: 700,
                background: "linear-gradient(90deg,#f4a15c,#e2661d)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {s.prefix}{Math.round(values[i])}{s.suffix}
            </div>
            <div style={{ fontSize: 14, color: "#8b9096", marginTop: 8, letterSpacing: "0.3px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
