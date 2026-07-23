"use client";

import { useState } from "react";
import { useNavScroll } from "@/hooks/useNavScroll";
import { WHATSAPP_URL } from "@/data/content";
import { navLinkStyle, ctaButtonStyle } from "@/lib/styles";
import { MenuMark, CloseMark } from "@/components/icons";

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const scrolled = useNavScroll();
  const [open, setOpen] = useState(false);

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
        padding: "10px var(--pad-x)",
        background: scrolled || open ? "rgba(8,9,11,0.85)" : "rgba(8,9,11,0.15)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled || open ? "1px solid rgba(226,102,29,0.18)" : "1px solid rgba(255,255,255,0.04)",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/assets/logo-setgen.png" alt="SETGEN" style={{ height: 84, width: "auto", objectFit: "contain" }} />
      </div>

      <div className="nav-links-desktop" style={{ alignItems: "center", gap: 36 }}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} style={navLinkStyle}>{item.label}</a>
        ))}
      </div>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="nav-cta-desktop" style={ctaButtonStyle}>
        Solicitar orçamento
      </a>

      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="nav-burger"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {open ? <CloseMark /> : <MenuMark />}
      </button>

      <div
        style={{
          position: "fixed",
          inset: "68px 0 0 0",
          zIndex: 49,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "rgba(8,9,11,0.98)",
          backdropFilter: "blur(14px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)} style={{ ...navLinkStyle, fontSize: 22 }}>
            {item.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          style={{ ...ctaButtonStyle, padding: "14px 28px", fontSize: 16, marginTop: 12 }}
        >
          Solicitar orçamento
        </a>
      </div>
    </nav>
  );
}
