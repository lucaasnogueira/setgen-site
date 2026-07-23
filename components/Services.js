"use client";

import { useState } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { SERVICES } from "@/data/content";
import { eyebrowStyle, sectionTitleStyle, revealStyle } from "@/lib/styles";

export default function Services() {
  const [headerRef, headerRevealed] = useRevealOnScroll();
  const [activeService, setActiveService] = useState(0);
  const activeSvc = { ...SERVICES[activeService], indexLabel: String(activeService + 1).padStart(2, "0") };

  return (
    <section id="servicos" ref={headerRef} style={{ padding: "140px var(--pad-x)", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ ...revealStyle(headerRevealed), marginBottom: 64, maxWidth: 620 }}>
        <span style={eyebrowStyle}>Serviços</span>
        <h2 style={{ ...sectionTitleStyle, fontSize: "clamp(28px,3.4vw,40px)" }}>Soluções completas em energia, do projeto à operação.</h2>
      </div>
      <div className="grid-services" style={{ alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              onMouseEnter={() => setActiveService(i)}
              onClick={() => setActiveService(i)}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                padding: "18px 4px",
                borderBottom: "1px solid",
                transition: "color 0.3s ease, border-color 0.3s ease",
                color: i === activeService ? "#eef0f2" : "#6d7278",
                borderColor: i === activeService ? "rgba(226,102,29,0.5)" : "rgba(255,255,255,0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk), monospace",
                  fontSize: 13,
                  letterSpacing: "0.5px",
                  transition: "color 0.3s ease",
                  color: i === activeService ? "#e2661d" : "#4a4e54",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 19, fontWeight: 600, letterSpacing: "-0.2px" }}>{svc.title}</span>
            </div>
          ))}
        </div>
        <div style={{ position: "sticky", top: 120, minHeight: 420, borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "linear-gradient(160deg,#121418,#0b0c0e)", overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", height: 280 }}>
            <img src={activeSvc.image} alt={activeSvc.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,12,14,0) 55%, rgba(11,12,14,0.9) 100%)" }} />
            <span
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                fontFamily: "var(--font-space-grotesk), monospace",
                fontSize: 13,
                letterSpacing: "0.5px",
                color: "#e2661d",
                background: "rgba(8,9,11,0.7)",
                padding: "4px 10px",
                borderRadius: 6,
                border: "1px solid rgba(226,102,29,0.3)",
              }}
            >
              {activeSvc.indexLabel}
            </span>
          </div>
          <div style={{ padding: "36px 44px 44px" }}>
            <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 28, fontWeight: 700, margin: "0 0 14px", letterSpacing: "-0.4px" }}>{activeSvc.title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#9aa0a8", margin: 0, maxWidth: 440 }}>{activeSvc.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
