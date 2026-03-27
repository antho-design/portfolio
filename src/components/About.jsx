import { tokens as T } from "../styles/tokens";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";
import { BLUEPRINT_AURA_BG } from "../data/constants";

const GALLERY_PLACEHOLDERS = [
  180, 260, 210, 320, 190,
  240, 170, 280, 200, 300,
  220, 310, 180, 250, 210,
  290, 190, 340, 230, 270,
  200, 260, 185, 300, 220,
];

export default function About() {
  const { isMobile, isTablet } = useBreakpoint();
  const { lang } = useLanguage();
  const t = UI[lang].about;
  const blueprintAura = {
    position: "absolute",
    inset: "-12% -14% -10% -10%",
    backgroundImage: BLUEPRINT_AURA_BG,
    opacity: 0.26,
    maskImage: "radial-gradient(circle at 82% 18%, black 0%, black 26%, transparent 66%)",
    WebkitMaskImage: "radial-gradient(circle at 82% 18%, black 0%, black 26%, transparent 66%)",
    pointerEvents: "none",
  };

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "100px 20px 80px" : isTablet ? "120px 32px 80px" : "140px 40px 100px",
        maxWidth: 1200,
        margin: "0 auto",
        minHeight: "100vh",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div style={blueprintAura} />
      <MotifSVG
        size={432}
        color="#D9D4CC"
        opacity={0.22}
        outerOpacity={0.12}
        style={{
          position: "absolute",
          top: "12%",
          right: -116,
          pointerEvents: "none",
          filter:
            "drop-shadow(1px 1px 0 rgba(255,255,255,0.8)) drop-shadow(-1px -1px 0 rgba(176,168,156,0.16))",
          mixBlendMode: "multiply",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 56,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: 28,
              background: `linear-gradient(135deg, ${T.accentLight}, #F5F8F7)`,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 320,
            }}
          >
            <MotifSVG
              size={240}
              color={T.accent}
              opacity={0.9}
              outerOpacity={0.45}
            />
            <MotifSVG
              size={340}
              color={T.accent}
              opacity={0.06}
              outerOpacity={0.3}
              style={{ position: "absolute" }}
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <SectionLabel>{t.label}</SectionLabel>
          </Reveal>

          <Reveal delay={0.2}>
            <SectionTitle>
              {t.titleParts[0]}{" "}
              <span style={{ color: T.accent }}>{t.titleParts[1]}</span>{" "}
              {t.titleParts[2]}
            </SectionTitle>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 16,
                color: T.textMuted,
                lineHeight: 1.8,
                margin: "20px 0 0",
              }}
            >
              {t.p1}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 16,
                color: T.textMuted,
                lineHeight: 1.8,
                margin: "12px 0 0",
              }}
            >
              {t.p2}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div
              style={{
                marginTop: 36,
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 28,
                fontWeight: 200,
                color: T.accent,
                letterSpacing: "0.07em",
                flexWrap: "wrap",
              }}
            >
              <span style={{ width: 40, height: 1, background: T.accentMid }} />
              {t.quote}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        style={{
          marginTop: isMobile ? 60 : 120,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <div style={{ marginBottom: 36 }}>
            <SectionLabel>{t.galleryLabel}</SectionLabel>
            <SectionTitle>{t.galleryTitle}</SectionTitle>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              alignItems: "start",
            }}
          >
            {GALLERY_PLACEHOLDERS.map((height, index) => (
              <div
                key={index}
                style={{
                  height,
                  borderRadius: 18,
                  background: "#E3E0DA",
                  border: `1px solid ${T.border}`,
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
