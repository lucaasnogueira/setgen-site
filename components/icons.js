export function InstagramMark() {
  return (
    <div style={{ width: 16, height: 16, borderRadius: 5, border: "1.5px solid #b8bcc2", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, margin: "auto", width: 6, height: 6, borderRadius: "50%", border: "1.5px solid #b8bcc2" }} />
      <div style={{ position: "absolute", top: "-1.5px", right: "-1.5px", width: "2.5px", height: "2.5px", borderRadius: "50%", background: "#b8bcc2" }} />
    </div>
  );
}

export function WhatsappMark() {
  return <div style={{ width: 16, height: 16, borderRadius: "50% 50% 50% 4px", border: "1.5px solid #b8bcc2" }} />;
}

export function EmailMark() {
  return (
    <div style={{ width: 17, height: 12, border: "1.5px solid #b8bcc2", borderRadius: 2, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -1, left: -1, width: 9, height: 9, borderRight: "1.5px solid #b8bcc2", borderBottom: "1.5px solid #b8bcc2", transform: "rotate(45deg) translate(1px,-4px)" }} />
    </div>
  );
}
