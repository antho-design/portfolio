import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import MotifSVG from "./MotifSVG";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { useContent } from "../hooks/useContent";
import { UI } from "../data/translations";
import { BLUEPRINT_AURA_BG, PROJECT_COLORS } from "../data/constants";
import { PROJECTS } from "../data/content";

function ProjectHexBtn({ project }) {
  const [hovered, setHovered] = useState(false);
  const colors = PROJECT_COLORS[project.id] || { from: "#333", to: "#666" };

  const R = 14;
  const W = +(R * Math.sqrt(3)).toFixed(2);
  const H = 3 * R;
  const hexPt = (cx, cy) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      pts.push(`${(cx + R * Math.sin(a)).toFixed(2)},${(cy - R * Math.cos(a)).toFixed(2)}`);
    }
    return `M${pts.join("L")}Z`;
  };
  const meshD = [hexPt(W / 2, R), hexPt(0, 2.5 * R), hexPt(W, 2.5 * R)].join(" ");
  const meshSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}'><path d='${meshD}' stroke='rgba(255,255,255,0.09)' stroke-width='0.6' fill='none'/></svg>`;
  const meshUrl = `url("data:image/svg+xml,${encodeURIComponent(meshSvg)}")`;

  const handleClick = () => {
    window.history.pushState({}, "", `/projects/${project.id}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={project.title}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleClick(); }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 76,
        aspectRatio: "1 / 1.15",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        backgroundImage: `${meshUrl}, linear-gradient(135deg, ${colors.from}, ${colors.to})`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, 100% 100%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: hovered ? "brightness(1.2)" : "brightness(1)",
        transition: "filter .25s ease",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: 8,
          fontWeight: 800,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.2,
          padding: "0 18%",
        }}
      >
        {project.title}
      </span>
    </div>
  );
}

export default function Experience() {
  const { isMobile } = useBreakpoint();
  const { lang } = useLanguage();
  const { tokens: T, theme } = useTheme();
  const { experiences } = useContent();
  const t = UI[lang].experience;
  const blueprintAura = {
    position: "absolute",
    inset: "-14% -16% -12% -8%",
    backgroundImage: BLUEPRINT_AURA_BG,
    opacity: 0.26,
    maskImage: "radial-gradient(circle at 86% 14%, black 0%, black 26%, transparent 66%)",
    WebkitMaskImage: "radial-gradient(circle at 86% 14%, black 0%, black 26%, transparent 66%)",
    pointerEvents: "none",
  };

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
          top: 16,
          right: -84,
          pointerEvents: "none",
          filter:
            "drop-shadow(1px 1px 0 rgba(255,255,255,0.8)) drop-shadow(-1px -1px 0 rgba(176,168,156,0.16))",
          mixBlendMode: "multiply",
        }}
      />

      <Reveal>
        <div style={{ position: "relative", marginBottom: 40 }}>
          <span style={{
            position: "absolute", top: -20, left: -4,
            fontFamily: "'Work Sans', sans-serif",
            fontSize: isMobile ? 72 : 88, fontWeight: 800,
            letterSpacing: "-0.05em", color: T.text,
            opacity: theme === "dark" ? 0.09 : 0.05,
            lineHeight: 1, userSelect: "none", pointerEvents: "none",
          }}>02</span>
          <SectionLabel>{t.label}</SectionLabel>
        </div>
      </Reveal>

      <div style={{ position: "relative" }}>
        {/* Vertical timeline line */}
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

        {experiences.map((exp, i) => {
          const linkedProjects = (exp.projectIds || [])
            .map((pid) => PROJECTS.find((p) => p.id === pid))
            .filter(Boolean);

          return (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <div
                style={{
                  paddingBottom: 44,
                  position: "relative",
                  paddingLeft: itemPaddingLeft,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: isMobile ? 12 : 24,
                  }}
                >
                  {/* Content */}
                  <div style={{ flex: 1, position: "relative" }}>
                    {/* Timeline dot */}
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

                  {/* Hex project buttons */}
                  {linkedProjects.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 6,
                        paddingTop: 4,
                        flexShrink: 0,
                        alignSelf: "flex-start",
                      }}
                    >
                      {linkedProjects.map((proj) => (
                        <ProjectHexBtn key={proj.id} project={proj} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
