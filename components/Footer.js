import { WHATSAPP_URL } from "@/data/content";
import { footerHeadingStyle, footerLinkStyle, socialIconStyle } from "@/lib/styles";
import { InstagramMark, WhatsappMark, EmailMark } from "@/components/icons";

export default function Footer() {
  return (
    <footer style={{ padding: "80px var(--pad-x) 32px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0a0b0d" }}>
      <div className="footer-grid" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div>
          <div style={{ marginBottom: 16 }}>
            <img src="/assets/logo-setgen.png" alt="SETGEN" style={{ height: 64, width: "auto", objectFit: "contain" }} />
          </div>
          <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: "#75797f", maxWidth: 280 }}>
            Serviços técnicos em geradores de energia, engenharia elétrica e soluções para operações que não podem parar.
          </p>
        </div>
        <div>
          <h4 style={footerHeadingStyle}>Links rápidos</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="#sobre" style={footerLinkStyle}>Sobre</a>
            <a href="#servicos" style={footerLinkStyle}>Serviços</a>
            <a href="#diferenciais" style={footerLinkStyle}>Diferenciais</a>
            <a href="#contato" style={footerLinkStyle}>Contato</a>
          </div>
        </div>
        <div>
          <h4 style={footerHeadingStyle}>Contato</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="mailto:comercial@setgen.com.br" style={footerLinkStyle}>comercial@setgen.com.br</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" style={footerLinkStyle}>(92) 99299-9999 — WhatsApp</a>
            <span style={{ color: "#75797f", fontSize: 14 }}>R. Secundária 7, 115 - Nova Cidade, Manaus - AM</span>
          </div>
        </div>
        <div>
          <h4 style={footerHeadingStyle}>Redes</h4>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" style={socialIconStyle}>
              <InstagramMark />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp" style={socialIconStyle}>
              <WhatsappMark />
            </a>
            <a href="mailto:comercial@setgen.com.br" aria-label="Email" style={socialIconStyle}>
              <EmailMark />
            </a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "56px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: "12.5px", color: "#5c6167" }}>© 2026 SETGEN Serviços Técnicos. Todos os direitos reservados.</span>
        <span style={{ fontSize: "12.5px", color: "#5c6167" }}>Política de Privacidade · LGPD</span>
      </div>
    </footer>
  );
}
