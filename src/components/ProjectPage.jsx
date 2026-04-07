import { useState } from "react";
import { tokens as T } from "../styles/tokens";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { useContent } from "../hooks/useContent";
import { UI } from "../data/translations";
import { PROJECT_COLORS, BLUEPRINT_GRID_BG, CARD_BORDER_BG } from "../data/constants";

/* ─── Placeholder image ─────────────────────────────────────── */
function ImageSlot({ label, ratio = "16/9", caption = "" }) {
  return (
    <div style={{ width: "100%", marginTop: 0 }}>
      <div
        style={{
          width: "100%",
          aspectRatio: ratio,
          border: `2px dashed ${T.border}`,
          borderRadius: T.radius,
          background: "#F5F4F1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={T.textLight} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 13,
            color: T.textLight,
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          {label}
        </span>
      </div>
      {caption && (
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 12,
            color: T.textLight,
            marginTop: 10,
            textAlign: "center",
            letterSpacing: "0.03em",
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

/* ─── Page projet ───────────────────────────────────────────── */
export default function ProjectPage({ projectId, onNavigate }) {
  const { isMobile, isTablet } = useBreakpoint();
  const { lang } = useLanguage();
  const { projects, projectDetails } = useContent();
  const t = UI[lang].project;
  const project = projects.find((p) => p.id === projectId);
  const details = projectDetails[projectId];
  const colors = PROJECT_COLORS[projectId] || { from: T.accent, to: T.accentMid };

  if (!project || !details) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Work Sans', sans-serif", color: T.textMuted }}>
          {t.notFound}
        </p>
      </div>
    );
  }

  const hPad = isMobile ? "20px" : isTablet ? "32px" : "40px";
  const maxW = 860;
  const sectionGap = isMobile ? "64px" : "96px";
  const cardBorder = {
    position: "absolute",
    inset: 0,
    borderRadius: T.radius,
    pointerEvents: "none",
    background: CARD_BORDER_BG,
    zIndex: 1,
  };
  const blueprintGrid = {
    position: "absolute",
    inset: 0,
    backgroundImage: BLUEPRINT_GRID_BG,
    backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
    backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0",
    opacity: 0.55,
    mixBlendMode: "screen",
    pointerEvents: "none",
    maskImage: "radial-gradient(circle at center, black 64%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(circle at center, black 64%, transparent 100%)",
  };

  return (
    <article>

      {/* ── Hero ────────────────────────────────────────────── */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          padding: isMobile ? "100px 20px 56px" : "130px 40px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grille décorative */}
        <div style={blueprintGrid} />

        <div style={{ maxWidth: maxW, margin: "0 auto", position: "relative" }}>

          {/* Tag + année */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            <span style={tagStyle}>
              {project.tag}
            </span>
            <span style={{ ...tagStyle, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)", fontWeight: 400, letterSpacing: "0.04em", textTransform: "none" }}>
              {project.year}
            </span>
          </div>

          {/* Titre */}
          <h1
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? "clamp(36px, 10vw, 52px)" : "clamp(48px, 6vw, 72px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "0 0 10px",
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? 16 : 20,
              fontWeight: 300,
              color: "rgba(255,255,255,0.65)",
              margin: "0 0 40px",
            }}
          >
            {project.subtitle}
          </p>

          {/* Méta — client, rôle, année, outils */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? "20px 16px" : "0 32px",
              paddingTop: 32,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.15) 85%, transparent)",
              }}
            />
            {[
              { label: t.client, value: details.client },
              { label: t.role, value: details.role },
              { label: t.year, value: project.year },
              { label: t.tools, value: details.tools.join(", ") },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.45)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 6,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Image hero ──────────────────────────────────────── */}
      <div
        style={{
          padding: `0 ${hPad}`,
          maxWidth: maxW + Number.parseInt(hPad, 10) * 2,
          margin: "0 auto",
        }}
      >
        <div style={{ transform: "translateY(-32px)" }}>
          <ImageSlot label={t.imgCover} ratio="16/7" caption={t.imgCoverCaption} />
        </div>
      </div>

      {/* ── Contenu principal ───────────────────────────────── */}
      <div style={{ padding: `0 ${hPad}` }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>

          {/* Contexte */}
          <section style={{ paddingTop: isMobile ? "8px" : "16px" }}>
            <Reveal>
              <SectionLabel>{t.context}</SectionLabel>
              <SectionTitle>{t.contextTitle}</SectionTitle>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: isMobile ? 15 : 17,
                  color: T.textMuted,
                  lineHeight: 1.8,
                  marginTop: 20,
                  maxWidth: 640,
                }}
              >
                {details.context}
              </p>
            </Reveal>

            {/* Défis */}
            <Reveal delay={0.15}>
              <div
                style={{
                  marginTop: 32,
                  padding: isMobile ? "20px" : "28px 32px",
                  background: T.accentLight,
                  borderRadius: T.radius,
                  border: `1px solid ${T.accentMid}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: T.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 14,
                  }}
                >
                  {t.challenges}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {details.challenges.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: T.accent, flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 14, color: T.text, lineHeight: 1.55 }}>
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div style={{ marginTop: 40 }}>
              <ImageSlot label={t.imgContext} caption={t.imgContextCaption} />
            </div>
          </section>

          {/* Objectifs + Démarche côte à côte */}
          <section style={{ marginTop: sectionGap }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1px 1fr",
                gap: isMobile ? sectionGap : "0 48px",
                alignItems: "start",
              }}
            >
              {/* ── Colonne Objectifs ── */}
              <div>
                <Reveal>
                  <SectionLabel>{t.objectives}</SectionLabel>
                  <SectionTitle style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}>
                    {t.objectivesTitle}
                  </SectionTitle>
                </Reveal>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginTop: 24,
                  }}
                >
                  {details.objectives.map((obj, i) => (
                    <Reveal key={i} delay={i * 0.07}>
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          gap: 14,
                          padding: "16px 18px",
                          background: T.surface,
                          borderRadius: T.radius,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Work Sans', sans-serif",
                            fontSize: 20,
                            fontWeight: 200,
                            color: T.accentMid,
                            lineHeight: 1,
                            flexShrink: 0,
                            letterSpacing: "-0.02em",
                            paddingTop: 1,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, color: T.text, lineHeight: 1.6, margin: 0 }}>
                          {obj}
                        </p>
                        <div style={cardBorder} />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* ── Séparateur vertical (desktop seulement) ── */}
              {!isMobile && (
                <div
                  style={{
                    width: 1,
                    alignSelf: "stretch",
                    background: `linear-gradient(to bottom, transparent, ${T.border} 15%, ${T.border} 85%, transparent)`,
                  }}
                />
              )}

              {/* ── Colonne Démarche ── */}
              <div>
                <Reveal delay={0.1}>
                  <SectionLabel>{t.methodology}</SectionLabel>
                  <SectionTitle style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}>
                    {t.methodologyTitle}
                  </SectionTitle>
                </Reveal>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginTop: 24,
                  }}
                >
                  {details.methodology.map((m, i) => (
                    <Reveal key={i} delay={0.1 + i * 0.08}>
                      <div
                        style={{
                          position: "relative",
                          padding: "14px 16px",
                          background: T.surface,
                          borderRadius: T.radius,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                          <span
                            style={{
                              fontFamily: "'Work Sans', sans-serif",
                              fontSize: 18,
                              fontWeight: 200,
                              color: T.accentMid,
                              lineHeight: 1,
                              flexShrink: 0,
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {m.phase}
                          </span>
                          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 13, fontWeight: 600, color: T.text }}>
                            {m.title}
                          </span>
                        </div>
                        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 12, color: T.textMuted, lineHeight: 1.6, margin: 0 }}>
                          {m.description}
                        </p>
                        <div style={cardBorder} />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 48 }}>
              <ImageSlot label={t.imgMethod} caption={t.imgMethodCaption} />
            </div>
          </section>

          {/* Modules */}
          <section style={{ marginTop: sectionGap }}>
            <Reveal>
              <SectionLabel>{t.realizations}</SectionLabel>
              <SectionTitle>{t.realizationsTitle}</SectionTitle>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 48, marginTop: 36 }}>
              {details.modules.map((mod, i) => (
                <Reveal key={i} delay={0.05}>
                  <div>
                    {/* En-tête du module */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "200px 1fr",
                        gap: isMobile ? 10 : 32,
                        paddingBottom: 20,
                        position: "relative",
                        marginBottom: 20,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: 1,
                          background: `linear-gradient(to right, transparent, ${T.border} 15%, ${T.border} 85%, transparent)`,
                        }}
                      />
                      <div>
                        <div style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 16, fontWeight: 700, color: T.text, letterSpacing: "-0.01em" }}>
                          {mod.title}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 8 }}>
                          {mod.features.map((f) => (
                            <span
                              key={f}
                              style={{
                                padding: "3px 10px",
                                borderRadius: 999,
                                background: T.accentLight,
                                border: `1px solid ${T.accentMid}`,
                                fontFamily: "'Work Sans', sans-serif",
                                fontSize: 11,
                                fontWeight: 500,
                                color: T.accent,
                              }}
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 14, color: T.textMuted, lineHeight: 1.7, margin: 0 }}>
                        {mod.description}
                      </p>
                    </div>

                    {/* Image du module */}
                    <ImageSlot
                      label={t.imgModule(mod.title)}
                      caption={t.imgModuleCaption(mod.title)}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Livrables & Impact */}
          <section
            style={{
              marginTop: sectionGap,
              paddingBottom: isMobile ? "80px" : "120px",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? 40 : 56,
            }}
          >
            {/* Livrables */}
            <Reveal>
              <SectionLabel>{t.deliverables}</SectionLabel>
              <SectionTitle style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}>
                {t.deliverablesTitle}
              </SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
                {details.deliverables.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: T.accentLight,
                        border: `1.5px solid ${T.accentMid}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke={T.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: 14, color: T.text, lineHeight: 1.55 }}>
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Impact */}
            <Reveal delay={0.1}>
              <SectionLabel>{t.impact}</SectionLabel>
              <SectionTitle style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}>
                {t.impactTitle}
              </SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
                {details.impact.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "13px 16px",
                      background: T.surface,
                      border: `1px solid ${T.border}`,
                      borderLeft: `3px solid ${colors.from}`,
                      borderRadius: `0 ${T.radius}px ${T.radius}px 0`,
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 14,
                      color: T.text,
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

        </div>
      </div>

      {/* ── Navigation entre projets ─────────────────────────── */}
      <div
        style={{
          background: T.surface,
          padding: isMobile ? "48px 20px 64px" : "64px 40px 80px",
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
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: T.textLight,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 24,
            }}
          >
            {t.otherProjects}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : `repeat(${projects.filter((p) => p.id !== projectId).length}, 1fr)`,
              gap: 12,
            }}
          >
            {projects.filter((p) => p.id !== projectId).map((p) => (
              <ProjectNavCard key={p.id} project={p} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </div>

    </article>
  );
}

function ProjectNavCard({ project, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const colors = PROJECT_COLORS[project.id] || { from: T.accent, to: T.accentMid };
  const navCardBorder = {
    position: "absolute",
    inset: 0,
    borderRadius: T.radius,
    pointerEvents: "none",
    background: CARD_BORDER_BG,
    zIndex: 3,
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onNavigate(`/projects/${project.id}`)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onNavigate(`/projects/${project.id}`);
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: T.radius,
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow .35s ease, transform .4s cubic-bezier(.22,1,.36,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.10)" : "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      {/* Bande couleur */}
      <div
        style={{
          height: 72,
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity .35s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 22,
            fontWeight: 200,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.1em",
          }}
        >
          {project.title.substring(0, 2).toUpperCase()}
        </span>
      </div>

      {/* Texte */}
      <div style={{ padding: "14px 16px 16px", background: hovered ? colors.from : "#fff", transition: "background .4s ease" }}>
        <div
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: hovered ? "#fff" : T.text,
            letterSpacing: "-0.01em",
            transition: "color .35s ease",
            marginBottom: 2,
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 12,
            color: hovered ? "rgba(255,255,255,0.55)" : T.textMuted,
            transition: "color .35s ease",
          }}
        >
          {project.subtitle}
        </div>
      </div>
      <div style={navCardBorder} />
    </div>
  );
}

/* Styles partagés */
const tagStyle = {
  padding: "5px 14px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.28)",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: 11,
  fontWeight: 600,
  color: "rgba(255,255,255,0.9)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};
