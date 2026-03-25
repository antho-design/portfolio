import { tokens as T } from "../styles/tokens";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";

export default function Footer() {
  const { isMobile } = useBreakpoint();
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const t = UI[lang].footer;

  return (
    <footer
      style={{
        padding: isMobile ? "28px 20px" : "36px 40px",
        borderTop: `1px solid ${T.border}`,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          gap: isMobile ? 20 : 0,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <MotifSVG
            size={20}
            color={T.accent}
            opacity={0.8}
            outerOpacity={0.35}
          />
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: 200, color: T.text }}>ANTHONIN </span>
            <span style={{ fontWeight: 700, color: T.accent }}>SAUTET</span>
          </span>
        </div>

        {/* Liens */}
        <div style={{ display: "flex", gap: 24 }}>
          {["LinkedIn", "Email"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 13,
                color: T.textMuted,
                textDecoration: "none",
                transition: "color .3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = T.accent)}
              onMouseLeave={(e) => (e.target.style.color = T.textMuted)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 12,
            color: T.textLight,
          }}
        >
          {t.copyright.replace("2025", String(year))}
        </span>
      </div>
    </footer>
  );
}
