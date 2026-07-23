"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { eyebrowStyle, sectionTitleStyle, revealStyle } from "@/lib/styles";

export default function About() {
  const [ref, revealed] = useRevealOnScroll();

  return (
    <section
      id="sobre"
      ref={ref}
      style={{
        position: "relative",
        padding: "160px 48px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div style={revealStyle(revealed)}>
          <span style={eyebrowStyle}>Sobre a SETGEN</span>
          <h2 style={sectionTitleStyle}>
            Há mais de 10 anos levando energia, segurança e continuidade
            operacional para empresas.
          </h2>
          <p style={{ fontSize: "16.5px", lineHeight: 1.75, color: "#9aa0a8" }}>
            Combinamos engenharia própria, monitoramento de precisão e uma
            equipe técnica especializada para garantir que grandes operações
            nunca parem — do projeto elétrico à manutenção contínua de grupos
            geradores.
          </p>
        </div>
        <div
          style={{
            ...revealStyle(revealed),
            position: "relative",
            aspectRatio: "4/5",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/sobre-equipe.jpeg"
            alt="Equipe técnica SETGEN em campo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
