import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollWords from "@/components/ScrollWords";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import ClientMarquee from "@/components/ClientMarquee";
import Differentials from "@/components/Differentials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative", background: "#08090b", color: "#e9ebee", overflowX: "hidden", minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          top: -1,
          left: 0,
          width: 640,
          height: 640,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 2,
          background: "radial-gradient(circle, rgba(226,102,29,0.06), transparent 70%)",
        }}
      />
      <Navbar />
      <Hero />
      <ScrollWords />
      <About />
      <Services />
      <Stats />
      <ClientMarquee />
      <Differentials />
      <Cta />
      <Footer />
    </div>
  );
}
