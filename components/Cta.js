"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { WHATSAPP_URL } from "@/data/content";
import { ctaButtonStyle, revealStyle } from "@/lib/styles";

export default function Cta() {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <section id="contato" ref={ref} style={{ position: "relative", padding: "160px var(--pad-x)", textAlign: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, rgba(226,102,29,0.14), transparent 60%)" }} />
      <div style={{ ...revealStyle(revealed), position: "relative", maxWidth: 760, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(32px,5vw,58px)", fontWeight: 700, letterSpacing: "-1px", margin: "0 0 26px" }}>
          Sua operação não pode parar.
        </h2>
        <p style={{ fontSize: "17.5px", lineHeight: 1.65, color: "#9aa0a8", margin: "0 0 44px" }}>
          Quando a energia falha, cada segundo importa. A SETGEN entrega soluções inteligentes e confiáveis para manter grandes operações funcionando sem interrupções.
        </p>
        <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{ ...ctaButtonStyle, padding: "16px 32px", fontSize: "15.5px", fontWeight: 700, boxShadow: "0 0 30px rgba(226,102,29,0.4)" }}>
            Solicitar orçamento
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{ textDecoration: "none", padding: "16px 32px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.16)", color: "#e9ebee", fontWeight: 600, fontSize: "15.5px" }}>
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
