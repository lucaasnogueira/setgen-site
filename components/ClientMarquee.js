import { CLIENT_LOGOS } from "@/data/content";
import { eyebrowStyle } from "@/lib/styles";

export default function ClientMarquee() {
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto 40px", padding: "0 48px", textAlign: "center" }}>
        <span style={eyebrowStyle}>Confiança de mais de 400 clientes</span>
      </div>
      <div
        style={{
          position: "relative",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div style={{ display: "flex", gap: 56, width: "max-content", animation: "marqueeScroll 28s linear infinite" }}>
          {[0, 1].map((dup) => (
            <div key={dup} style={{ display: "flex", gap: 32, alignItems: "center" }} aria-hidden={dup === 1}>
              {CLIENT_LOGOS.map((c) => (
                <div key={c.name} style={{ width: 150, height: 70, borderRadius: 10, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 14 }}>
                  <img src={c.image} alt={c.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
