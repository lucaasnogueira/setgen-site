"use client";

import { useActiveWordOnScroll } from "@/hooks/useActiveWordOnScroll";
import { SCROLL_WORDS } from "@/data/content";

export default function ScrollWords() {
  const [wordRefs, activeIndex] = useActiveWordOnScroll(SCROLL_WORDS.length);

  return (
    <section style={{ padding: "100px var(--pad-x) 60px", maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
      <span
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(16px,1.8vw,20px)",
          fontWeight: 500,
          color: "#6d7278",
          letterSpacing: "0.3px",
          display: "block",
          marginBottom: 8,
        }}
      >
        Sua operação pode
      </span>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {SCROLL_WORDS.map((w, i) => {
          const active = activeIndex === i;
          return (
            <span
              key={w}
              ref={(el) => { wordRefs.current[i] = el; }}
              data-word-index={i}
              style={{
                display: "block",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(34px,6vw,68px)",
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: "-1px",
                padding: "28px 0",
                willChange: "opacity,transform",
                opacity: active ? 1 : 0.18,
                transform: active ? "scale(1)" : "scale(0.82)",
                color: active ? "#e2661d" : "#3a3d42",
                textShadow: active ? "0 0 44px rgba(226,102,29,.45)" : "none",
                transition: "opacity 0.55s ease, transform 0.55s ease, color 0.55s ease, text-shadow 0.55s ease",
              }}
            >
              {w}
            </span>
          );
        })}
      </div>
    </section>
  );
}
