"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { DIFFS } from "@/data/content";
import { eyebrowStyle, sectionTitleStyle, revealStyle } from "@/lib/styles";
import DiffRow from "@/components/DiffRow";

export default function Differentials() {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <section id="diferenciais" ref={ref} style={{ padding: "140px 48px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ ...revealStyle(revealed), marginBottom: 64, maxWidth: 620 }}>
        <span style={eyebrowStyle}>Diferenciais</span>
        <h2 style={{ ...sectionTitleStyle, fontSize: "clamp(28px,3.4vw,40px)" }}>Por que grandes operações confiam na SETGEN.</h2>
      </div>
      <div>
        {DIFFS.map((d, i) => (
          <DiffRow key={d.title} index={i} title={d.title} desc={d.desc} />
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      </div>
    </section>
  );
}
