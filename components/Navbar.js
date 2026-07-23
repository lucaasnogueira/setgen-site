"use client";

import { useNavScroll } from "@/hooks/useNavScroll";
import { WHATSAPP_URL } from "@/data/content";
import { navLinkStyle, ctaButtonStyle } from "@/lib/styles";

export default function Navbar() {
  const scrolled = useNavScroll();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 48px",
        background: scrolled ? "rgba(8,9,11,0.85)" : "rgba(8,9,11,0.15)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(226,102,29,0.18)" : "1px solid rgba(255,255,255,0.04)",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/assets/logo-setgen.png" alt="SETGEN" style={{ height: 84, width: "auto", objectFit: "contain" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        <a href="#sobre" style={navLinkStyle}>Sobre</a>
        <a href="#servicos" style={navLinkStyle}>Serviços</a>
        <a href="#diferenciais" style={navLinkStyle}>Diferenciais</a>
        <a href="#contato" style={navLinkStyle}>Contato</a>
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={ctaButtonStyle}>Solicitar orçamento</a>
    </nav>
  );
}
