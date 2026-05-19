import { useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../context/ThemeContext";
import { Reveal } from "./UI";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { useContent } from "../hooks/useContent";
import { UI } from "../data/translations";
import { PROJECT_COLORS, BLUEPRINT_GRID_BG, CARD_BORDER_BG, CARD_BORDER_BG_DARK } from "../data/constants";

/* ─── Image with lightbox ────────────────────────────────────── */
function Images({ srcs, fallbackLabel, fallbackRatio = "16/9", grid = false }) {
  const [lightbox, setLightbox] = useState(null);
  const { tokens: T } = useTheme();
  const list = Array.isArray(srcs) ? srcs.filter(Boolean) : srcs ? [srcs] : [];

  if (list.length === 0) return <ImageSlot label={fallbackLabel} ratio={fallbackRatio} />;

  const img = (src, key, full) => (
    <img
      key={key} src={src} alt=""
      onClick={() => setLightbox(src)}
      style={{
        width: "auto", maxWidth: "100%",
        maxHeight: full ? "90vh" : "50vh",
        display: "block", borderRadius: T.radius,
        cursor: "zoom-in", margin: "0 auto",
      }}
    />
  );

  let content;
  if (list.length === 1) {
    content = img(list[0], 0, true);
  } else if (grid) {
    content = (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {list.map((s, i) => img(s, i, false))}
      </div>
    );
  } else {
    const rest = list.slice(1);
    const pairs = [];
    for (let i = 0; i < rest.length; i += 2) pairs.push(rest.slice(i, i + 2));
    content = (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {img(list[0], 0, true)}
        {pairs.map((pair, pi) => (
          <div key={pi} style={{ display: "grid", gridTemplateColumns: `repeat(${pair.length}, 1fr)`, gap: 12 }}>
            {pair.map((s, i) => img(s, `${pi}-${i}`, false))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {content}
      {lightbox && createPortal(
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox} alt=""
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "90vh", borderRadius: T.radius, objectFit: "contain" }}
          />
        </div>,
        document.body
      )}
    </>
  );
}

function ImageSlot({ label, ratio = "16/9" }) {
  const { tokens: T } = useTheme();
  return (
    <div
      style={{
        width: "100%", aspectRatio: ratio,
        border: `2px dashed ${T.border}`, borderRadius: T.radius,
        background: T.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <span style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
        textTransform: "uppercase", color: T.textLight,
        padding: "5px 12px", borderRadius: 999, border: `1px solid ${T.border}`,
      }}>
        Work in progress
      </span>
    </div>
  );
}

/* ─── Page projet ───────────────────────────────────────────── */
export default function ProjectPage({ projectId, onNavigate }) {
  const { isMobile, isTablet } = useBreakpoint();
  const { lang } = useLanguage();
  const { tokens: T, theme } = useTheme();
  const { projects, projectDetails } = useContent();
  const t = UI[lang].project;
  const project = projects.find((p) => p.id === projectId);
  const details = projectDetails[projectId];
  const colors = PROJECT_COLORS[projectId] || PROJECT_COLORS[details?.parentId] || { from: T.accent, to: T.accentMid };

  const [activeTab, setActiveTab] = useState(0);
  const hubTabs = details?.isHub && details.subProjects
    ? [
        { id: "hub", label: "Librairie UI Figma" },
        ...details.subProjects.map(spId => ({
          id: spId,
          label: projects.find(p => p.id === spId)?.title || spId,
        }))
      ]
    : null;

  if (!project || !details) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Work Sans', sans-serif", color: T.textMuted }}>{t.notFound}</p>
      </div>
    );
  }

  const hPad = isMobile ? "20px" : isTablet ? "40px" : "64px";
  const maxW = 860;
  const gap = isMobile ? "56px" : "88px";

  const LB = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "clamp(9px, 0.7vw, 11px)",
    fontWeight: 300,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: T.accent,
    display: "block",
    marginBottom: 12,
  };
  const LB_WHITE = { ...LB, color: "rgba(255,255,255,0.5)" };

  const H2 = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "clamp(13px, 1.1vw, 17px)",
    fontWeight: 800,
    letterSpacing: "-0.01em",
    textTransform: "uppercase",
    color: T.text,
    lineHeight: 1.15,
    margin: 0,
  };

  const BODY = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: isMobile ? 14 : 15,
    fontWeight: 300,
    color: T.textMuted,
    lineHeight: 1.8,
    margin: 0,
  };

  const blueprintGrid = {
    position: "absolute", inset: 0,
    backgroundImage: BLUEPRINT_GRID_BG,
    backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
    backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0",
    opacity: 0.5, mixBlendMode: "screen", pointerEvents: "none",
    maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
  };

  const cardBorder = {
    position: "absolute", inset: 0, borderRadius: T.radius, pointerEvents: "none",
    background: theme === "dark" ? CARD_BORDER_BG_DARK : CARD_BORDER_BG, zIndex: 1,
  };

  const heroTaskPill = {
    padding: "5px 12px", borderRadius: 999,
    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
    color: "rgba(255,255,255,0.85)",
    fontFamily: "'Work Sans', sans-serif", fontSize: 11, fontWeight: 300,
    letterSpacing: "0.18em", textTransform: "uppercase",
    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
  };

  /* ─── Sections réutilisables pour le contenu par onglet ─── */
  function SectionContext({ d }) {
    return (
      <Reveal>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 40 : 64,
          alignItems: "center",
        }}>
          <div>
            <span style={LB}>{t.context}</span>
            <h2 style={{ ...H2,marginBottom: 20 }}>{t.contextTitle}</h2>
            <p style={BODY}>{d.context}</p>
          </div>
          <div>
            <Images srcs={d.images?.context} fallbackLabel={t.imgContext} />
          </div>
        </div>
      </Reveal>
    );
  }

  function SectionProblematique({ d }) {
    if (!d.problematique) return null;
    return (
      <section style={{ marginTop: gap }}>
        <Reveal>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 64,
            alignItems: "center",
          }}>
            <div>
              <span style={LB}>{t.problematique}</span>
              <h2 style={{ ...H2,marginBottom: 20 }}>{t.problematiqueTitle}</h2>
              <p style={BODY}>{d.problematique}</p>
            </div>
            <div style={{
              borderLeft: isMobile ? "none" : `3px solid ${colors.from}`,
              paddingLeft: isMobile ? 0 : 32,
              opacity: 0.18,
            }}>
              <p style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: isMobile ? 40 : 56, fontWeight: 800,
                letterSpacing: "-0.04em", color: colors.from,
                lineHeight: 1, margin: 0,
              }}>?</p>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  function SectionMethodology({ d }) {
    if (!d.methodology) return null;
    return (
      <section style={{ marginTop: gap }}>
        <Reveal>
          <span style={LB}>{t.methodology}</span>
          <h2 style={{ ...H2,marginBottom: 36 }}>{t.methodologyTitle}</h2>
        </Reveal>
        {d.images?.phases ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {d.methodology.map((m, i) => {
              const phaseImgs = d.images.phases[i];
              const isEven = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? 32 : 56,
                    alignItems: "center",
                    ...(isMobile ? {} : isEven ? {} : { direction: "rtl" }),
                  }}>
                    <div style={{ direction: "ltr" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
                        <span style={{
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: isMobile ? 32 : 44, fontWeight: 800,
                          letterSpacing: "-0.03em", color: colors.from,
                          opacity: 0.14, lineHeight: 1, flexShrink: 0,
                        }}>
                          {m.phase}
                        </span>
                        <h3 style={{
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: "clamp(13px, 1.1vw, 16px)", fontWeight: 800,
                          letterSpacing: "-0.01em", color: T.text, margin: 0,
                        }}>
                          {m.title}
                        </h3>
                      </div>
                      <p style={BODY}>{m.description}</p>
                    </div>
                    <div style={{ direction: "ltr" }}>
                      {phaseImgs?.length ? (
                        <Images srcs={phaseImgs} fallbackLabel={m.title} grid={phaseImgs.length >= 2} />
                      ) : (
                        <ImageSlot label={m.title} />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {d.methodology.map((m, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  display: "flex", gap: isMobile ? 20 : 32, padding: "32px 0",
                  borderBottom: `1px solid ${T.border}`,
                }}>
                  <span style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: isMobile ? 28 : 40, fontWeight: 800,
                    letterSpacing: "-0.03em", color: colors.from,
                    opacity: 0.12, lineHeight: 1, flexShrink: 0, userSelect: "none",
                  }}>
                    {m.phase}
                  </span>
                  <div style={{ paddingTop: 4 }}>
                    <h3 style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: 800,
                      letterSpacing: "-0.01em", color: T.text, margin: "0 0 10px",
                    }}>
                      {m.title}
                    </h3>
                    <p style={BODY}>{m.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
        {!d.images?.phases && d.images?.methodology && (
          <div style={{ marginTop: 48 }}>
            <Images
              srcs={d.images.methodology} fallbackLabel={t.imgMethod}
              grid={Array.isArray(d.images.methodology) && d.images.methodology.length >= 2}
            />
          </div>
        )}
      </section>
    );
  }

  function SectionResultat({ d }) {
    if (!d.resultat) return null;
    return (
      <section style={{ marginTop: gap }}>
        <Reveal>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 64,
            alignItems: "start",
          }}>
            <div>
              <span style={LB}>{t.resultat}</span>
              <h2 style={{ ...H2,marginBottom: 20 }}>{t.resultatTitle}</h2>
              <p style={BODY}>{d.resultat}</p>
            </div>
            <div>
              <Images srcs={d.images?.resultat} fallbackLabel={t.resultatTitle} />
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  /* ─── Impact items (réutilisé hub + standard) ─── */
  function ImpactSection({ items }) {
    if (!items?.length) return null;
    return (
      <section style={{ marginTop: gap }}>
        <div style={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          padding: isMobile ? "64px 20px" : "96px 64px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={blueprintGrid} />
          <div style={{ maxWidth: maxW, margin: "0 auto", position: "relative" }}>
            <Reveal>
              <span style={LB_WHITE}>{t.impact}</span>
              <h2 style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: isMobile ? "clamp(16px, 4.5vw, 22px)" : "clamp(14px, 1.3vw, 20px)",
                fontWeight: 800, letterSpacing: "-0.01em", textTransform: "uppercase",
                color: "#fff", lineHeight: 1.1, margin: "0 0 32px",
              }}>
                {t.impactTitle}
              </h2>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {items.map((item, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <div style={{
                    display: "flex", gap: isMobile ? 20 : 32, alignItems: "flex-start",
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}>
                    <span style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: isMobile ? 18 : 22, fontWeight: 800,
                      letterSpacing: "-0.02em", color: "#fff",
                      opacity: 0.25, lineHeight: 1, flexShrink: 0, userSelect: "none",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: isMobile ? 14 : 15, fontWeight: 300,
                      color: "rgba(255,255,255,0.82)", lineHeight: 1.75,
                      margin: 0, alignSelf: "center",
                    }}>
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ─── Compute current impact items ─── */
  const activeImpact = details.isHub
    ? (activeTab === 0 ? details.impact : projectDetails[hubTabs?.[activeTab]?.id]?.impact)
    : details.impact;

  return (
    <article>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
        padding: isMobile ? "88px 20px 52px" : "120px 64px 72px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={blueprintGrid} />
        <div style={{ maxWidth: maxW, margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 56,
            alignItems: "center",
          }}>

            {/* Colonne gauche */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <span style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(10px, 0.75vw, 12px)",
                  fontWeight: 300, letterSpacing: "0.28em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
                }}>
                  {project.tag}
                </span>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(10px, 0.75vw, 12px)",
                  fontWeight: 300, letterSpacing: "0.28em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
                }}>
                  {project.year}
                </span>
              </div>

              <h1 style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: isMobile ? "clamp(32px, 9vw, 44px)" : "clamp(28px, 3.2vw, 46px)",
                fontWeight: 800, letterSpacing: "-0.02em", textTransform: "uppercase",
                color: "#fff", lineHeight: 1, margin: "0 0 22px",
              }}>
                {project.title}
              </h1>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
                {project.tasks.map((task) => (
                  <span key={task} style={heroTaskPill}>{task}</span>
                ))}
              </div>

              {/* Meta 2×2 */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px 24px",
                paddingTop: 24,
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 1,
                  background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 15%, rgba(255,255,255,0.15) 85%, transparent)",
                }} />
                {[
                  { label: t.client,   value: details.client },
                  { label: t.role,     value: details.role },
                  { label: t.duration, value: details.duration },
                  { label: t.tools,    value: details.tools.join(", ") },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{
                      fontFamily: "'Work Sans', sans-serif", fontSize: 10, fontWeight: 300,
                      color: "rgba(255,255,255,0.4)", textTransform: "uppercase",
                      letterSpacing: "0.22em", marginBottom: 6,
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "'Work Sans', sans-serif", fontSize: 14, fontWeight: 400,
                      color: "rgba(255,255,255,0.9)", lineHeight: 1.4,
                    }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite : image */}
            {!isMobile && (
              <div style={{
                borderRadius: T.radius,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
                maxHeight: "340px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(0,0,0,0.1)",
              }}>
                {details.images?.cover ? (
                  <img
                    src={details.images.cover} alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  <div style={{
                    width: "100%", aspectRatio: "16/9",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                      padding: "5px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)",
                    }}>
                      Work in progress
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Onglets hub (sticky) ────────────────────────────────── */}
      {hubTabs && (
        <div style={{
          position: "sticky", top: 52, zIndex: 99,
          background: T.bg, borderBottom: `1px solid ${T.border}`,
        }}>
          {isMobile ? (
            /* Mobile : select natif */
            <div style={{ padding: "12px 20px", position: "relative" }}>
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(Number(e.target.value))}
                style={{
                  width: "100%",
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 12, fontWeight: 600,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: T.text,
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderLeft: `3px solid ${colors.from}`,
                  borderRadius: T.radius,
                  padding: "12px 40px 12px 14px",
                  cursor: "pointer",
                  appearance: "none", WebkitAppearance: "none",
                  outline: "none",
                }}
              >
                {hubTabs.map((tab, i) => (
                  <option key={tab.id} value={i}>{tab.label}</option>
                ))}
              </select>
              {/* Flèche custom */}
              <div style={{
                position: "absolute", right: 34, top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: `5px solid ${colors.from}`,
              }} />
            </div>
          ) : (
            /* Desktop/tablette : onglets texte centrés */
            <div style={{
              padding: `12px ${hPad}`,
              display: "flex", justifyContent: "center",
              gap: 4, flexWrap: "wrap",
            }}>
              {hubTabs.map((tab, i) => {
                const isActive = activeTab === i;
                const activeColor = theme === "dark" ? colors.to : colors.from;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: "clamp(9px, 0.68vw, 11px)",
                      fontWeight: isActive ? 700 : 300,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: isActive ? activeColor : T.textMuted,
                      background: "none", border: "none",
                      cursor: "pointer",
                      padding: "8px 16px",
                      display: "flex", alignItems: "center", gap: 8,
                      transition: "color .2s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0 }}>
                      <polygon
                        points="4,0.5 7.5,2.5 7.5,6.5 4,8.5 0.5,6.5 0.5,2.5"
                        fill={isActive ? activeColor : "none"}
                        stroke={isActive ? activeColor : T.border}
                        strokeWidth="1"
                      />
                    </svg>
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Body ───────────────────────────────────────────────── */}
      {details.isHub ? (

        /* ── Hub : contenu par onglet ── */
        <div style={{ padding: `${gap} ${hPad} 0` }}>
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>

            {activeTab === 0 ? (

              /* Onglet Design System */
              <>
                <SectionContext d={details} />

                {details.designSystem && (
                  <section style={{ marginTop: gap }}>
                    <Reveal>
                      <span style={LB}>{t.hubDesignSystem}</span>
                      <h2 style={{ ...H2,marginBottom: 20 }}>{details.designSystem.description}</h2>
                    </Reveal>
                    <div style={{ marginTop: 28, display: "flex", flexDirection: "column" }}>
                      {details.designSystem.items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.07}>
                          <div style={{
                            display: "flex", gap: isMobile ? 16 : 24, alignItems: "flex-start",
                            padding: "20px 0", borderBottom: `1px solid ${T.border}`,
                          }}>
                            <span style={{
                              fontFamily: "'Work Sans', sans-serif",
                              fontSize: isMobile ? 20 : 28, fontWeight: 800,
                              letterSpacing: "-0.03em", color: colors.from,
                              opacity: 0.14, lineHeight: 1, flexShrink: 0, userSelect: "none",
                            }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <p style={{ ...BODY, color: T.text, fontSize: isMobile ? 14 : 15, alignSelf: "center" }}>
                              {item}
                            </p>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </section>
                )}
              </>

            ) : (() => {
              const ad = projectDetails[hubTabs[activeTab]?.id];
              if (!ad) return null;
              return (
                <>
                  <SectionContext d={ad} />
                  <SectionProblematique d={ad} />
                  <SectionMethodology d={ad} />
                  <SectionResultat d={ad} />
                </>
              );
            })()}

          </div>
        </div>

      ) : (

        /* ── Projets standard ── */
        <div style={{ padding: `0 ${hPad}` }}>
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>

            {/* INTRO */}
            {details.intro && (
              <Reveal>
                <section style={{ paddingTop: isMobile ? 8 : 0, paddingBottom: gap }}>
                  <div style={{
                    borderLeft: `3px solid ${T.accent}`,
                    paddingLeft: isMobile ? 20 : 32,
                  }}>
                    <p style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: isMobile ? "clamp(15px, 4vw, 18px)" : "clamp(16px, 1.5vw, 21px)",
                      fontWeight: 300, color: T.text, lineHeight: 1.7, margin: 0,
                    }}>
                      {details.intro}
                    </p>
                  </div>
                </section>
              </Reveal>
            )}

            {/* CONTEXTE */}
            <section style={{ marginTop: details.intro ? 0 : gap }}>
              <SectionContext d={details} />
            </section>

            {/* PROBLÉMATIQUE */}
            <SectionProblematique d={details} />

            {/* DÉFIS */}
            {details.challenges && (
              <section style={{ marginTop: gap }}>
                <Reveal>
                  <span style={LB}>{t.challenges}</span>
                  <h2 style={{ ...H2,marginBottom: 0 }}>{t.challenges}</h2>
                </Reveal>
                <div style={{ marginTop: 32 }}>
                  {details.challenges.map((c, i) => (
                    <Reveal key={i} delay={i * 0.07}>
                      <div style={{
                        display: "flex", gap: isMobile ? 20 : 32, alignItems: "flex-start",
                        padding: "28px 0", borderBottom: `1px solid ${T.border}`,
                      }}>
                        <span style={{
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: isMobile ? 24 : 32, fontWeight: 800,
                          letterSpacing: "-0.03em", color: T.accentMid,
                          opacity: 0.18, lineHeight: 1, flexShrink: 0, userSelect: "none",
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p style={{ ...BODY, color: T.text, fontSize: isMobile ? 15 : 16, alignSelf: "center" }}>
                          {c}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* DÉMARCHE */}
            <SectionMethodology d={details} />

            {/* DÉCISIONS CLÉS */}
            {details.decisions && (
              <section style={{ marginTop: gap }}>
                <Reveal>
                  <span style={LB}>{t.decisionsLabel}</span>
                  <h2 style={{ ...H2,marginBottom: 32 }}>{t.decisionsTitle}</h2>
                </Reveal>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                  gap: 16,
                }}>
                  {details.decisions.map((d, i) => (
                    <Reveal key={i} delay={i * 0.08}>
                      <div style={{
                        position: "relative", padding: isMobile ? 24 : 32,
                        background: T.surface, borderRadius: T.radius,
                        overflow: "hidden",
                      }}>
                        <div style={{ ...blueprintGrid, opacity: 0.28 }} />
                        <span style={{
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em",
                          color: colors.from, opacity: 0.09,
                          lineHeight: 1, display: "block", marginBottom: 8,
                          userSelect: "none",
                        }}>
                          {d.number}
                        </span>
                        <h3 style={{
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: "clamp(12px, 1vw, 15px)", fontWeight: 800,
                          letterSpacing: "-0.01em", color: T.text,
                          margin: "0 0 10px", position: "relative", zIndex: 1,
                        }}>
                          {d.title}
                        </h3>
                        <p style={{ ...BODY, fontSize: 14, position: "relative", zIndex: 1 }}>
                          {d.text}
                        </p>
                        <div style={cardBorder} />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* RÉSULTAT */}
            <SectionResultat d={details} />

            {/* MODULES */}
            {details.modules && (
              <section style={{ marginTop: gap }}>
                <Reveal>
                  <span style={LB}>{t.realizations}</span>
                  <h2 style={{ ...H2,marginBottom: 40 }}>{t.realizationsTitle}</h2>
                </Reveal>
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 64 : 80 }}>
                  {details.modules.map((mod, i) => {
                    const isEven = i % 2 === 0;
                    return (
                      <Reveal key={i} delay={0.05}>
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                          gap: isMobile ? 32 : 64,
                          alignItems: "center",
                          ...(isMobile ? {} : isEven ? {} : { direction: "rtl" }),
                        }}>
                          <div style={{ direction: "ltr" }}>
                            <span style={{
                              fontFamily: "'Work Sans', sans-serif",
                              fontSize: "clamp(10px, 0.75vw, 12px)", fontWeight: 300,
                              letterSpacing: "0.28em", textTransform: "uppercase",
                              color: T.accent, display: "block", marginBottom: 14,
                            }}>
                              {String(i + 1).padStart(2, "0")} / {t.realizations}
                            </span>
                            <h3 style={{
                              fontFamily: "'Work Sans', sans-serif",
                              fontSize: "clamp(13px, 1.1vw, 17px)", fontWeight: 800,
                              letterSpacing: "-0.01em", textTransform: "uppercase",
                              color: T.text, margin: "0 0 14px", lineHeight: 1.1,
                            }}>
                              {mod.title}
                            </h3>
                            <p style={{ ...BODY, marginBottom: 20 }}>{mod.description}</p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                              {mod.features.map((f) => (
                                <span key={f} style={{
                                  fontFamily: "'Work Sans', sans-serif",
                                  fontSize: "clamp(9px, 0.7vw, 11px)", fontWeight: 300,
                                  letterSpacing: "0.18em", textTransform: "uppercase",
                                  padding: "4px 12px", borderRadius: 999,
                                  border: `1px solid ${T.border}`, color: T.textMuted,
                                }}>
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div style={{ direction: "ltr" }}>
                            <Images
                              srcs={details.images?.modules?.[i]}
                              fallbackLabel={t.imgModule(mod.title)}
                              grid={details.images?.moduleLayouts?.[i] === "grid"}
                            />
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </section>
            )}

          </div>
        </div>
      )}

      {/* ── Impact ─────────────────────────────────────────────── */}
      <ImpactSection items={activeImpact} />

      {/* ── Navigation ─────────────────────────────────────────── */}
      <div style={{
        background: T.surface,
        padding: isMobile ? "56px 20px 72px" : "72px 64px 96px",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: isMobile ? 20 : 64, right: isMobile ? 20 : 64,
          height: 1,
          background: `linear-gradient(to right, transparent, ${T.border} 15%, ${T.border} 85%, transparent)`,
        }} />
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          {details.parentId ? (
            <>
              <span style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "clamp(10px, 0.75vw, 12px)", fontWeight: 300,
                letterSpacing: "0.28em", textTransform: "uppercase",
                color: T.textLight, display: "block", marginBottom: 32,
              }}>
                {t.hubModules}
              </span>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : `repeat(${projects.filter((p) => p.parentId === details.parentId && p.id !== projectId).length + 1}, 1fr)`,
                gap: 12,
              }}>
                <ProjectNavCard project={projects.find((p) => p.id === details.parentId)} onNavigate={onNavigate} isHub />
                {projects
                  .filter((p) => p.parentId === details.parentId && p.id !== projectId)
                  .map((p) => (
                    <ProjectNavCard key={p.id} project={p} onNavigate={onNavigate} />
                  ))}
              </div>
            </>
          ) : (
            <>
              <span style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "clamp(10px, 0.75vw, 12px)", fontWeight: 300,
                letterSpacing: "0.28em", textTransform: "uppercase",
                color: T.textLight, display: "block", marginBottom: 32,
              }}>
                {t.otherProjects}
              </span>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : `repeat(${projects.filter((p) => p.id !== projectId && !p.parentId).length}, 1fr)`,
                gap: 12,
              }}>
                {projects.filter((p) => p.id !== projectId && !p.parentId).map((p) => (
                  <ProjectNavCard key={p.id} project={p} onNavigate={onNavigate} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

    </article>
  );
}

/* ─── Card nav ───────────────────────────────────────────────── */
function ProjectNavCard({ project, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const { tokens: T, theme } = useTheme();
  const colors = PROJECT_COLORS[project.id] || { from: T.accent, to: T.accentMid };

  return (
    <div
      role="button" tabIndex={0}
      onClick={() => onNavigate(`/projects/${project.id}`)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onNavigate(`/projects/${project.id}`); } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: T.radius, overflow: "hidden",
        background: T.bg, cursor: "pointer",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.1)" : "none",
        transition: "box-shadow .35s ease",
      }}
    >
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
        opacity: hovered ? 1 : 0.4,
        transition: "opacity .3s ease",
      }} />
      <div style={{ padding: "16px 18px" }}>
        <div style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: 10, fontWeight: 300,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: T.textLight, marginBottom: 6,
        }}>
          {project.tag}
        </div>
        <div style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 800,
          letterSpacing: "-0.01em", textTransform: "uppercase",
          color: hovered ? colors.from : T.text,
          transition: "color .3s ease",
        }}>
          {project.title}
        </div>
      </div>
      <div style={{
        position: "absolute", inset: 0, borderRadius: T.radius, pointerEvents: "none",
        background: theme === "dark" ? CARD_BORDER_BG_DARK : CARD_BORDER_BG,
      }} />
    </div>
  );
}
