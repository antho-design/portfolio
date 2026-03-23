import { useState, useEffect } from "react";
import { tokens as T } from "../styles/tokens";
import MotifSVG from "./MotifSVG";

const LINKS = [
  { label: "Projets", id: "projects" },
  { label: "À propos", id: "about" },
  { label: "Parcours", id: "experience" },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 3,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "14px 40px" : "24px 40px",
        background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${T.border}`
          : "1px solid transparent",
        transition: "all .4s ease",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo — nom complet style Hero */}
      <a
        href="#hero"
        style={{
          fontFamily: "'Work Sans', sans-serif",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <MotifSVG size={24} color={T.accent} opacity={1} outerOpacity={0.35} />
        <span
          style={{
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            lineHeight: 1,
          }}
        >
          <span style={{ fontWeight: 200, color: T.text }}>ANTHONIN </span>
          <span style={{ fontWeight: 700, color: T.accent }}>SAUTET</span>
        </span>
      </a>

      {/* Navigation */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 13,
              fontWeight: activeSection === l.id ? 600 : 500,
              color: activeSection === l.id ? T.accent : T.textMuted,
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              transition: "color .3s",
              position: "relative",
            }}
          >
            {l.label}
            {activeSection === l.id && (
              <span
                style={{
                  position: "absolute",
                  bottom: -6,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: T.accent,
                }}
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
