import { useState } from "react";
import { tokens as T } from "../styles/tokens";
import { Reveal } from "./UI";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/translations";

const PROJECT_COLORS = {
  apec:          { from: "#1A4B5C", to: "#2D7D9A" },
  autossimo:     { from: "#7A3B1E", to: "#C4714A" },
  npc:           { from: "#1E5C3B", to: "#4A9B6F" },
  cerfal:        { from: "#3D2B6B", to: "#7B5EA7" },
  globedreamers: { from: "#6B2B2B", to: "#C4655A" },
};

export default function ProjectCard({ project, index, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const { lang } = useLanguage();
  const t = UI[lang].projects;
  const colors = PROJECT_COLORS[project.id] || { from: T.accent, to: T.accentMid };

  const pill = {
    padding: "5px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.28)",
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    color: "rgba(255,255,255,0.92)",
    letterSpacing: "0.02em",
    backdropFilter: "blur(6px)",
  };

  const titleStyle = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "clamp(20px, 2.2vw, 26px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: 0,
    lineHeight: 1.2,
  };

  const blueprintGrid = {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.085) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.085) 1px, transparent 1px),
      linear-gradient(115deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.006) 46%, transparent 47%, transparent 53%, rgba(255,255,255,0.006) 54%, rgba(255,255,255,0.03) 100%),
      linear-gradient(12deg, rgba(255,255,255,0.025) 0%, transparent 38%, rgba(255,255,255,0.018) 50%, transparent 62%, rgba(255,255,255,0.025) 100%)
    `,
    backgroundSize: "18px 18px, 18px 18px, 72px 72px, 72px 72px, 100% 100%, 100% 100%",
    backgroundPosition: "0 0, 0 0, -1px -1px, -1px -1px, 0 0, 0 0",
    opacity: hovered ? 0.78 : 0.42,
    mixBlendMode: "screen",
    transition: "opacity .5s ease",
  };

  return (
    <Reveal delay={index * 0.07} y={40}>
      <div
        onClick={() => onNavigate?.(`/projects/${project.id}`)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: T.radius,
          overflow: "hidden",
          background: T.surface,
          border: `1px solid ${T.border}`,
          cursor: "pointer",
          transition: "box-shadow .4s ease, transform .45s cubic-bezier(.22,1,.36,1)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 24px 64px rgba(26,75,92,0.14)"
            : "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* ── Zone visuelle ── */}
        <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>

          {/* Fond gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform .8s cubic-bezier(.22,1,.36,1)",
            }}
          />

          {/* Grille subtile */}
          <div style={blueprintGrid} />

          {/* Mockup flottant */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "52%",
                aspectRatio: "16/10",
                background: "rgba(255,255,255,0.11)",
                backdropFilter: "blur(10px)",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.24)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: hovered
                  ? "translateY(-10px) scale(1.03)"
                  : "translateY(0) scale(1)",
                transition: "transform .65s cubic-bezier(.22,1,.36,1), box-shadow .65s ease",
                boxShadow: hovered
                  ? "0 28px 56px rgba(0,0,0,0.32)"
                  : "0 8px 24px rgba(0,0,0,0.22)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(22px, 3.5vw, 36px)",
                  fontWeight: 200,
                  color: "rgba(255,255,255,0.65)",
                  letterSpacing: "0.12em",
                }}
              >
                {project.title.substring(0, 2).toUpperCase()}
              </span>
            </div>
          </div>

          {/* Overlay bas : pills + CTA */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${colors.from}F0 0%, ${colors.from}60 40%, transparent 70%)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity .4s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "18px 20px",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {project.tasks.map((task, i) => (
                <span
                  key={task}
                  style={{
                    ...pill,
                    transform: hovered ? "translateY(0)" : "translateY(14px)",
                    opacity: hovered ? 1 : 0,
                    transition: `transform .38s cubic-bezier(.22,1,.36,1) ${0.04 + i * 0.045}s, opacity .3s ease ${0.04 + i * 0.045}s`,
                  }}
                >
                  {task}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                color: "#fff",
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                transform: hovered ? "translateY(0)" : "translateY(10px)",
                opacity: hovered ? 1 : 0,
                transition: "transform .38s cubic-bezier(.22,1,.36,1) .22s, opacity .3s ease .22s",
              }}
            >
              {t.viewProject}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Zone texte ── */}
        <div
          style={{
            padding: "18px 22px 22px",
            background: hovered ? colors.from : T.surface,
            transition: "background .55s cubic-bezier(.22,1,.36,1)",
          }}
        >
          {/* Tag · Année */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: hovered ? "rgba(255,255,255,0.55)" : T.accent,
                fontWeight: 600,
                transition: "color .45s ease",
              }}
            >
              {project.tag}
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: hovered ? "rgba(255,255,255,0.3)" : T.textLight,
                transition: "background .45s ease",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.06em",
                color: hovered ? "rgba(255,255,255,0.4)" : T.textLight,
                fontWeight: 500,
                transition: "color .45s ease",
              }}
            >
              {project.year}
            </span>
          </div>

          {/* Titre — effet rideau (dark sort par le haut, blanc entre par le bas) */}
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              marginBottom: 4,
            }}
          >
            {/* Titre clair — sort vers le haut */}
            <h3
              style={{
                ...titleStyle,
                color: T.text,
                transform: hovered ? "translateY(-110%)" : "translateY(0)",
                transition: "transform .5s cubic-bezier(.22,1,.36,1)",
              }}
            >
              {project.title}
            </h3>
            {/* Titre blanc — entre depuis le bas */}
            <h3
              style={{
                ...titleStyle,
                color: "#fff",
                position: "absolute",
                inset: 0,
                transform: hovered ? "translateY(0)" : "translateY(110%)",
                transition: "transform .5s cubic-bezier(.22,1,.36,1)",
              }}
            >
              {project.title}
            </h3>
          </div>

          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 14,
              color: hovered ? "rgba(255,255,255,0.6)" : T.textMuted,
              margin: "3px 0 0",
              transition: "color .45s ease",
            }}
          >
            {project.subtitle}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
