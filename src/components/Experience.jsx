import { tokens as T } from "../styles/tokens";
import { EXPERIENCES } from "../data/content";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import MotifSVG from "./MotifSVG";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 40px 120px",
        maxWidth: 900,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Motif décoratif */}
      <MotifSVG
        size={100}
        color={T.accent}
        opacity={0.05}
        outerOpacity={0.3}
        style={{ position: "absolute", top: 60, right: 0 }}
      />

      <Reveal>
        <SectionLabel>Parcours</SectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <SectionTitle style={{ margin: "14px 0 56px" }}>
          Expériences
        </SectionTitle>
      </Reveal>

      <div style={{ position: "relative" }}>
        {/* Ligne verticale */}
        <div
          style={{
            position: "absolute",
            left: 95,
            top: 8,
            bottom: 0,
            width: 1,
            background: `linear-gradient(to bottom, ${T.accentMid}, ${T.border}, transparent)`,
          }}
        />

        {EXPERIENCES.map((exp, i) => (
          <Reveal key={i} delay={0.1 + i * 0.06}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 36,
                paddingBottom: 44,
                position: "relative",
              }}
            >
              {/* Période */}
              <div
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: T.textLight,
                  textAlign: "right",
                  paddingTop: 2,
                  whiteSpace: "nowrap",
                }}
              >
                {exp.period}
              </div>

              {/* Contenu */}
              <div style={{ position: "relative" }}>
                {/* Point sur la timeline */}
                <div
                  style={{
                    position: "absolute",
                    left: -40,
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
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: T.text,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {exp.role}
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
