import { tokens as T } from "../styles/tokens";
import { SKILLS } from "../data/content";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import MotifSVG from "./MotifSVG";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "120px 40px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Motif comme pièce d'identité visuelle */}
        <Reveal>
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: 20,
              background: T.accentLight,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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

        {/* Texte */}
        <div>
          <Reveal delay={0.1}>
            <SectionLabel>À propos</SectionLabel>
          </Reveal>

          <Reveal delay={0.2}>
            <SectionTitle>
              Product Designer avec une appétence pour le{" "}
              <span style={{ color: T.accent }}>design d'interface</span> & les
              design systems.
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
              J'ai eu l'occasion de travailler sur de multiples projets à
              destination de consommateurs, entreprises et collaborateurs
              internes. Je crée UI kits, variables, composants et templates
              avec la méthodologie de l'Atomic Design.
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
              J'effectue de la recherche utilisateur, de la discovery, du
              benchmark, des user journeys et bien plus encore.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 32,
              }}
            >
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 20,
                    background: i % 3 === 0 ? T.accentLight : "transparent",
                    border: `1px solid ${
                      i % 3 === 0 ? "transparent" : T.border
                    }`,
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: i % 3 === 0 ? T.accent : T.textMuted,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.5}>
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
              }}
            >
              <span
                style={{ width: 40, height: 1, background: T.accentMid }}
              />
              De l'atome au template.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
