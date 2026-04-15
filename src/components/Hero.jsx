import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";
import { DownloadIcon } from "./UI";
import { CV_URL } from "../data/constants";

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const { lang } = useLanguage();
  const { tokens: T } = useTheme();
  const t = UI[lang].hero;

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  const anim = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(40px)",
    transition: `all 0.9s cubic-bezier(.22,1,.36,1) ${delay}s`,
  });

  const hPad = isMobile ? "20px" : "40px";
  const vPadTop = isMobile ? "100px" : isTablet ? "110px" : "120px";
  const vPadBottom = isMobile ? "120px" : "80px";

  const titleSize = isMobile
    ? "clamp(30px, 9vw, 38px)"
    : isTablet
    ? "clamp(34px, 6vw, 52px)"
    : "clamp(40px, 7vw, 72px)";
  const secondaryButtonBackground = `
    linear-gradient(${T.surface}, ${T.surface}) padding-box,
    linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) border-box
  `;

  const btnHoverOn = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.filter = "brightness(0.985)";
    e.currentTarget.style.boxShadow = "0 8px 18px rgba(51,51,51,0.08)";
  };
  const btnHoverOff = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.filter = "none";
    e.currentTarget.style.boxShadow = "0 2px 6px rgba(51,51,51,0.04)";
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        padding: `${vPadTop} ${hPad} ${vPadBottom}`,
        position: "relative",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Contenu texte */}
      <div style={{ flex: 1 }}>
        <div style={anim(0.2)}>
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: T.accent,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1.5,
                background: T.accent,
                display: "inline-block",
              }}
            />
            {t.role}
          </span>
        </div>

        <div style={{ ...anim(0.4), marginTop: isMobile ? 10 : isTablet ? 14 : 20 }}>
          <h1 style={{ margin: 0 }}>
            <span
              style={{
                display: "block",
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 200,
                fontSize: titleSize,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                color: T.text,
                lineHeight: 1.08,
              }}
            >
              ANTHONIN
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 700,
                fontSize: titleSize,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                color: T.accent,
                lineHeight: 1.08,
              }}
            >
              SAUTET
            </span>
          </h1>
        </div>

        <p
          style={{
            ...anim(0.6),
            fontFamily: "'Work Sans', sans-serif",
            fontSize: isMobile ? 15 : 17,
            color: T.textMuted,
            maxWidth: 440,
            lineHeight: 1.7,
            marginTop: isMobile ? 14 : isTablet ? 18 : 28,
          }}
        >
          {t.desc1}
          <br />
          {t.desc2}
        </p>

        <div
          style={{
            ...anim(0.8),
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: isMobile ? 8 : 12,
            marginTop: isMobile ? 16 : isTablet ? 22 : 40,
            alignItems: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: isMobile ? "9px 22px" : isTablet ? "11px 26px" : "13px 32px",
              border: "1.5px solid transparent",
              background: secondaryButtonBackground,
              color: T.text,
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 13 : isTablet ? 13 : 14,
              fontWeight: 500,
              transition: "transform .25s, filter .25s, box-shadow .25s",
              boxShadow: "0 2px 6px rgba(51,51,51,0.04)",
            }}
            onMouseEnter={btnHoverOn}
            onMouseLeave={btnHoverOff}
          >
            {t.cta1}
          </a>
          <a
            href="#experience"
            style={{
              padding: isMobile ? "9px 22px" : isTablet ? "11px 26px" : "13px 32px",
              border: "1.5px solid transparent",
              background: secondaryButtonBackground,
              color: T.text,
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 13 : isTablet ? 13 : 14,
              fontWeight: 500,
              transition: "transform .25s, filter .25s, box-shadow .25s",
              boxShadow: "0 2px 6px rgba(51,51,51,0.04)",
            }}
            onMouseEnter={btnHoverOn}
            onMouseLeave={btnHoverOff}
          >
            {t.cta2}
          </a>
          <a
            href="/about"
            onClick={(event) => {
              event.preventDefault();
              const rect = event.currentTarget.getBoundingClientRect();
              onNavigate?.("/about", {
                transition: {
                  type: "about",
                  label: t.cta3,
                  rect: {
                    left: rect.left,
                    top: rect.top,
                    width: rect.width,
                    height: rect.height,
                  },
                },
              });
            }}
            style={{
              padding: isMobile ? "9px 22px" : isTablet ? "11px 26px" : "13px 32px",
              border: "1.5px solid transparent",
              background: secondaryButtonBackground,
              color: T.text,
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 13 : isTablet ? 13 : 14,
              fontWeight: 500,
              transition: "transform .25s, filter .25s, box-shadow .25s",
              boxShadow: "0 2px 6px rgba(51,51,51,0.04)",
            }}
            onMouseEnter={btnHoverOn}
            onMouseLeave={btnHoverOff}
          >
            {t.cta3}
          </a>
          <a
            href={CV_URL}
            download
            style={{
              padding: isMobile ? "9px 22px" : isTablet ? "11px 26px" : "13px 32px",
              background: "linear-gradient(180deg, rgba(26,75,92,0.94) 0%, rgba(26,75,92,0.84) 100%)",
              color: "#fff",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.14)",
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 13 : isTablet ? 13 : 14,
              fontWeight: 600,
              letterSpacing: "0.02em",
              transition: "transform .25s, box-shadow .25s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              lineHeight: 1,
              boxShadow:
                "0 6px 16px rgba(26,75,92,0.14), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px) saturate(135%)",
              WebkitBackdropFilter: "blur(12px) saturate(135%)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(26,75,92,0.18), inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(26,75,92,0.14), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.08)";
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center" }}>{t.cta4}</span>
            <span style={{ display: "inline-flex", alignItems: "center", transform: "translateY(0.5px)" }}>
              <DownloadIcon />
            </span>
          </a>
        </div>
      </div>

      {/* Motif décoratif — masqué sur mobile */}
      {!isMobile && (
        <div
          style={{
            ...anim(0.7),
            flex: "0 0 auto",
            position: "relative",
            width: isTablet ? 240 : 320,
            height: isTablet ? 240 : 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MotifSVG
            size={isTablet ? 160 : 220}
            color={T.accent}
            opacity={0.9}
            outerOpacity={0.35}
          />
        </div>
      )}

      {/* Indicateur de scroll */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(40px)",
          transition: `all 0.9s cubic-bezier(.22,1,.36,1) 1.2s`,
        }}
      >
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 11,
            color: T.textLight,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {t.scroll}
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: `linear-gradient(to bottom, ${T.textLight}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
