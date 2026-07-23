import { WHATSAPP_URL } from "@/data/content";
import { ctaButtonStyle } from "@/lib/styles";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <img
        src="/assets/hero-fachada.jpeg"
        alt="Fachada da SETGEN em Manaus"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,9,11,0.15), rgba(8,9,11,0.3) 55%, #08090b 96%)", zIndex: 1 }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(6,7,8,0.88) 0%, rgba(6,7,8,0.75) 38%, rgba(6,7,8,0.25) 62%, transparent 78%)",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "140px 48px 120px", width: "100%" }}>
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(40px, 6vw, 76px)",
            lineHeight: 1.06,
            fontWeight: 700,
            maxWidth: 920,
            margin: "0 0 26px",
            letterSpacing: "-1.5px",
          }}
        >
          Energia{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#e2661d,#f4a15c)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Inteligente
          </span>{" "}
          para Grandes Operações.
        </h1>

        <p style={{ fontSize: 19, lineHeight: 1.6, color: "#9aa0a8", maxWidth: 600, margin: "0 0 44px", fontWeight: 400 }}>
          Engenharia elétrica, grupos geradores e soluções completas em energia para manter o seu negócio funcionando 24 horas por dia.
        </p>

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={{ ...ctaButtonStyle, padding: "16px 30px", fontSize: "15.5px", fontWeight: 700, boxShadow: "0 0 30px rgba(226,102,29,0.4)" }}>
            Solicitar orçamento
          </a>
          <a
            href="#servicos"
            style={{
              textDecoration: "none",
              padding: "16px 30px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.16)",
              color: "#e9ebee",
              fontWeight: 600,
              fontSize: "15.5px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>
    </section>
  );
}
