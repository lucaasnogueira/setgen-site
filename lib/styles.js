export const navLinkStyle = { color: "#b8bcc2", textDecoration: "none", fontSize: 14, fontWeight: 500 };

export const ctaButtonStyle = {
  textDecoration: "none",
  padding: "10px 22px",
  borderRadius: 8,
  background: "#e2661d",
  color: "#100a06",
  fontWeight: 600,
  fontSize: 14,
  boxShadow: "0 0 20px rgba(226,102,29,0.35)",
};

export const eyebrowStyle = { fontSize: "12.5px", letterSpacing: "1.6px", color: "#e2661d", fontWeight: 600, textTransform: "uppercase" };

export const sectionTitleStyle = {
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontSize: "clamp(28px,3.4vw,42px)",
  fontWeight: 700,
  lineHeight: 1.2,
  margin: "18px 0 24px",
  letterSpacing: "-0.5px",
};

export const footerHeadingStyle = { fontSize: 13, textTransform: "uppercase", letterSpacing: "1px", color: "#6d7278", margin: "0 0 18px" };

export const footerLinkStyle = { color: "#b8bcc2", textDecoration: "none", fontSize: 14 };

export const socialIconStyle = {
  width: 36,
  height: 36,
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};

export function revealStyle(on, { distance = 28, duration = 0.9 } = {}) {
  return {
    opacity: on ? 1 : 0,
    transform: on ? "translateY(0)" : `translateY(${distance}px)`,
    transition: `opacity ${duration}s cubic-bezier(.16,.84,.44,1), transform ${duration}s cubic-bezier(.16,.84,.44,1)`,
  };
}
