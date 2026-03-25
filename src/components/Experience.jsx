import { tokens as T } from "../styles/tokens";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { useContent } from "../hooks/useContent";
import { UI } from "../data/translations";

export default function Experience() {
  const { isMobile } = useBreakpoint();
  const { lang } = useLanguage();
  const { experiences } = useContent();
  const t = UI[lang].experience;

  const timelineLeft = isMobile ? 16 : 95;
  const itemPaddingLeft = isMobile ? 44 : 130;
  const dotLeft = isMobile ? -28 : -40;

  return (
    <section
      id="experience"
      style={{
        padding: isMobile ? "60px 20px 80px" : "100px 40px 120px",
        maxWidth: 900,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Motif décoratif */}
      <MotifSVG
        size={460}
        color="#D9D4CC"
        opacity={0.22}
        outerOpacity={0.12}
        style={{
          position: "absolute",
          top: 28,
          right: 28,
          pointerEvents: "none",
          filter:
            "drop-shadow(1px 1px 0 rgba(255,255,255,0.8)) drop-shadow(-1px -1px 0 rgba(176,168,156,0.16))",
          mixBlendMode: "multiply",
        }}
      />

      <Reveal>
        <SectionLabel>{t.label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <SectionTitle style={{ margin: "14px 0 40px" }}>
          {t.title}
        </SectionTitle>
      </Reveal>

      <div style={{ position: "relative" }}>
        {/* Ligne verticale */}
        <div
          style={{
            position: "absolute",
            left: timelineLeft,
            top: 8,
            bottom: 0,
            width: 1,
            background: `linear-gradient(to bottom, ${T.accentMid}, ${T.border}, transparent)`,
          }}
        />

        {experiences.map((exp, i) => (
          <Reveal key={i} delay={0.1 + i * 0.06}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                paddingBottom: 44,
                position: "relative",
                paddingLeft: itemPaddingLeft,
              }}
            >
              <div style={{ position: "relative" }}>
                {/* Point sur la timeline */}
                <div
                  style={{
                    position: "absolute",
                    left: dotLeft,
                    top: 6,
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: T.surface,
                    border: `2px solid ${T.accent}`,
                    boxShadow: `0 0 0 4px ${T.bg}`,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "flex-start",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: isMobile ? 16 : 18,
                      fontWeight: 700,
                      color: T.text,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.role}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: T.textLight,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: T.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 2,
                    display: "inline-block",
                  }}
                >
                  {exp.type}
                </span>

                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {exp.items.map((item, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: "'Work Sans', sans-serif",
                        fontSize: 14,
                        color: T.textMuted,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
