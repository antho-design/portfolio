import { useTheme } from "../context/ThemeContext";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";
import { DownloadIcon } from "./UI";
import { CV_URL } from "../data/constants";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anthonin-sautet",
    external: true,
  },
];

export default function Footer({ onNavigate }) {
  const { isMobile } = useBreakpoint();
  const { lang } = useLanguage();
  const { tokens: T } = useTheme();
  const year = new Date().getFullYear();
  const t = UI[lang].footer;

  return (
    <footer
      style={{
        padding: isMobile ? "28px 20px" : "36px 40px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: isMobile ? 20 : 40,
          right: isMobile ? 20 : 40,
          height: 1,
          background: `linear-gradient(to right, transparent, ${T.border} 15%, ${T.border} 85%, transparent)`,
        }}
      />
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
        <div
          style={{
            display: "flex",
            gap: isMobile ? 14 : 24,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 13,
                color: T.textMuted,
                textDecoration: "none",
                transition: "color .3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = T.textMuted)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/legal"
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.("/legal");
            }}
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 13,
              color: T.textMuted,
              textDecoration: "none",
              transition: "color .3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.textMuted)}
          >
            {t.legal}
          </a>
          <a
            href={CV_URL}
            download
            style={{
              padding: "8px 14px",
              border: "1px solid transparent",
              color: T.text,
              borderRadius: 999,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `
                linear-gradient(${T.surface}, ${T.surface}) padding-box,
                linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) border-box
              `,
              transition: "filter .3s, color .3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(0.985)";
              e.currentTarget.style.color = T.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.color = T.text;
            }}
          >
            {t.cv}
            <DownloadIcon />
          </a>
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
