import { useState, useEffect } from "react";
import { tokens as T } from "../styles/tokens";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const { lang } = useLanguage();
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
          <h1
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 200,
              fontSize: titleSize,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              color: T.text,
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            ANTHONIN
          </h1>
          <h1
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: titleSize,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              color: T.accent,
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            SAUTET
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
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 8 : 12,
            marginTop: isMobile ? 16 : isTablet ? 22 : 40,
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: isMobile ? "9px 22px" : isTablet ? "11px 26px" : "13px 32px",
              background: T.accent,
              color: "#fff",
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 13 : isTablet ? 13 : 14,
              fontWeight: 600,
              letterSpacing: "0.02em",
              transition: "transform .25s, box-shadow .25s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 24px rgba(26,75,92,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            {t.cta1}
          </a>
          <a
            href="#experience"
            style={{
              padding: isMobile ? "9px 22px" : isTablet ? "11px 26px" : "13px 32px",
              border: `1.5px solid ${T.border}`,
              color: T.text,
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 13 : isTablet ? 13 : 14,
              fontWeight: 500,
              transition: "border-color .3s",
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = T.textMuted)}
            onMouseLeave={(e) => (e.target.style.borderColor = T.border)}
          >
            {t.cta2}
          </a>
          <a
            href="/about"
            style={{
              padding: isMobile ? "9px 22px" : isTablet ? "11px 26px" : "13px 32px",
              border: `1.5px solid ${T.border}`,
              color: T.text,
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 13 : isTablet ? 13 : 14,
              fontWeight: 500,
              transition: "border-color .3s",
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = T.textMuted)}
            onMouseLeave={(e) => (e.target.style.borderColor = T.border)}
          >
            {t.cta3}
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
