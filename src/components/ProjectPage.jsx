import { useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../context/ThemeContext";
import { Reveal } from "./UI";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useLanguage } from "../context/LanguageContext";
import { useContent } from "../hooks/useContent";
import { UI } from "../data/translations";
import { PROJECT_COLORS, HEX_MESH_BG, CARD_BORDER_BG, CARD_BORDER_BG_DARK } from "../data/constants";
import MotifSVG from "./MotifSVG";

/* ─── Image with lightbox ────────────────────────────────────── */
function Images({ srcs, fallbackLabel, fallbackRatio = "16/9", grid = false }) {
  const [lightbox, setLightbox] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(0);
  const { tokens: T } = useTheme();
  const list = Array.isArray(srcs) ? srcs.filter(Boolean) : srcs ? [srcs] : [];

  if (list.length === 0) return <ImageSlot label={fallbackLabel} ratio={fallbackRatio} />;

  const openLightbox = (src) => { setLightbox(src); setZoomLevel(0); };

  const img = (src, key, full) => (
    <img
      key={key} src={src} alt=""
      onClick={() => openLightbox(src)}
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
            background: "rgba(0,0,0,0.85)",
            overflow: "auto",
            cursor: "zoom-out",
          }}
        >
          <div style={{
            minHeight: "100%", minWidth: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 32, boxSizing: "border-box",
          }}>
            <img
              src={lightbox} alt=""
              onClick={(e) => { e.stopPropagation(); setZoomLevel(z => z === 0 ? 1 : 0); }}
              style={{
                display: "block",
                borderRadius: T.radius,
                cursor: zoomLevel === 0 ? "zoom-in" : "zoom-out",
                ...(zoomLevel === 0
                  ? { maxWidth: "calc(100vw - 64px)", maxHeight: "calc(100vh - 64px)", width: "auto", height: "auto", objectFit: "contain" }
                  : { width: "auto", height: "auto" }
                ),
              }}
            />
          </div>
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

/* ─── Hex decorations ─────────────────────────────────────── */
function HexDot({ color = "currentColor", size = 7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
      <polygon points="5,0 10,2.5 10,7.5 5,10 0,7.5 0,2.5" fill={color} />
    </svg>
  );
}

function HexHoneycombDecor({ color = "currentColor", size = 160, opacity = 0.05, style = {} }) {
  const r = size / 2;
  // Proper honeycomb geometry for pointy-top hexagons
  const rowH = size * 0.81;                   // vertical spacing — slightly detached
  const hOff = size * 0.50;                   // horizontal offset between columns
  const W = hOff + size;
  const H = 3 * rowH + size;

  const pts = (cx, cy) => {
    const a = [];
    for (let i = 0; i < 6; i++) {
      const rad = (Math.PI / 180) * (60 * i - 30);
      a.push(`${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`);
    }
    return a.join(" ");
  };

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true" overflow="visible"
      style={{ position: "absolute", pointerEvents: "none", opacity, ...style }}>
      <polygon points={pts(hOff + r,  r)}              fill={color} />  {/* col A, row 1 */}
      <polygon points={pts(r,         rowH + r)}        fill={color} />  {/* col B, row 1 */}
      <polygon points={pts(hOff + r,  2 * rowH + r)}   fill={color} />  {/* col A, row 2 */}
      <polygon points={pts(r,         3 * rowH + r)}   fill={color} />  {/* col B, row 2 */}
    </svg>
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

  const hasHubTab = !!(details?.isHub && details?.designSystem);
  const [activeTab, setActiveTab] = useState(0);
  const hubTabs = details?.isHub && details.subProjects
    ? [
        ...(hasHubTab ? [{ id: "hub", label: "Librairie UI Figma" }] : []),
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
  const sectionGap = isMobile ? "48px" : "72px";
  const sectionPad = isMobile ? 48 : 72;

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
    backgroundImage: HEX_MESH_BG,
    backgroundRepeat: "repeat",
    opacity: 0.5, mixBlendMode: "screen", pointerEvents: "none",
    maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
  };

  const hexMesh = {
    position: "absolute", inset: 0, pointerEvents: "none",
    backgroundImage: HEX_MESH_BG,
    backgroundRepeat: "repeat",
    maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
    opacity: 0.9,
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

  /* ─── Ghost number helper ─────────────────────────────────── */
  const ghostNum = (num) => (
    <span style={{
      position: "absolute", top: -20, left: -4,
      fontFamily: "'Work Sans', sans-serif",
      fontSize: isMobile ? 72 : 88, fontWeight: 800,
      letterSpacing: "-0.05em", color: colors.to,
      opacity: theme === "dark" ? 0.18 : 0.10, lineHeight: 1,
      userSelect: "none", pointerEvents: "none",
    }}>{num}</span>
  );

  /* ─── Sections réutilisables pour le contenu par onglet ─── */
  function SectionContext({ d, num = "01" }) {
    const imgs = Array.isArray(d.images?.context)
      ? d.images.context.filter(Boolean)
      : d.images?.context ? [d.images.context] : [];
    return (
      <Reveal>
        <div style={{ paddingTop: isMobile ? 8 : 0 }}>
          {/* Texte */}
          <div style={{ position: "relative", marginBottom: isMobile ? 32 : 40 }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              {ghostNum(num)}
              <HexDot color={colors.from} />
              <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.context}</span>
            </div>
            <p style={BODY}>{d.context}</p>
          </div>
          {/* Images — en ligne si plusieurs */}
          {imgs.length === 0 ? (
            <div style={{ border: `1px solid ${T.border}`, borderRadius: T.radius, background: T.surface, padding: isMobile ? 12 : 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Images srcs={null} fallbackLabel={t.imgContext} />
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : `repeat(${imgs.length}, 1fr)`,
              gap: 8,
            }}>
              {imgs.map((src, i) => (
                <div key={i} style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: T.radius,
                  background: T.surface,
                  padding: isMobile ? 10 : 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  maxHeight: imgs.length > 1 ? (isMobile ? 220 : 300) : undefined,
                }}>
                  <img
                    src={src} alt=""
                    style={{
                      maxWidth: "100%", maxHeight: "100%",
                      objectFit: "contain", display: "block",
                      borderRadius: 2,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    );
  }

  function SectionProblematique({ d, num = "02" }) {
    if (!d.problematique) return null;
    return (
      <section style={{ marginTop: sectionGap }}>
        <Reveal>
          <div style={{
            borderTop: `1px solid ${T.border}`,
            paddingTop: sectionPad,
            position: "relative",
          }}>
            <HexHoneycombDecor
              color={colors.to}
              size={isMobile ? 80 : 160}
              opacity={theme === "dark" ? 0.18 : 0.10}
              style={{ top: isMobile ? -10 : -40, right: isMobile ? -30 : -60 }}
            />
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              {ghostNum(num)}
              <HexDot color={colors.from} />
              <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.problematique}</span>
            </div>
            <p style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: isMobile ? "clamp(14px, 3.5vw, 16px)" : "clamp(15px, 1.1vw, 17px)",
              fontWeight: 300, color: T.text,
              lineHeight: 1.75, margin: 0, fontStyle: "italic",
              maxWidth: "82%", position: "relative",
            }}>
              {d.problematique}
            </p>
          </div>
        </Reveal>
      </section>
    );
  }

  function SectionMethodology({ d, num = "03" }) {
    if (!d.methodology) return null;
    const [lightbox, setLightbox] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(0);
    const openLightbox = (src) => { setLightbox(src); setZoomLevel(0); };

    const NUM_COL = "56px";

    const numEl = (phase, alignRight = false) => (
      <span style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 11, fontWeight: 700,
        letterSpacing: "0.22em", textTransform: "uppercase",
        color: theme === "dark" ? colors.to : colors.from, display: "block",
        textAlign: alignRight ? "right" : "left",
        paddingTop: 3,
      }}>{phase}</span>
    );

    const titleEl = (title) => (
      <h3 style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "clamp(13px, 1.05vw, 16px)", fontWeight: 800,
        letterSpacing: "-0.01em", textTransform: "uppercase",
        color: T.text, margin: "0 0 14px", lineHeight: 1.25,
      }}>{title}</h3>
    );

    const bodyEl = (desc) => (
      <p style={{ ...BODY, fontSize: isMobile ? 14 : 15, margin: 0, lineHeight: 1.8 }}>{desc}</p>
    );

    const textBlock = (m) => <div>{titleEl(m.title)}{bodyEl(m.description)}</div>;

    const imgFrame = (src, style = {}) => (
      <div style={{
        borderRadius: T.radius, overflow: "hidden",
        background: T.surface, border: `1px solid ${T.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 10, ...style,
      }}>
        <img
          src={src} alt=""
          onClick={() => openLightbox(src)}
          style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", display: "block", objectFit: "contain", cursor: "zoom-in" }}
        />
      </div>
    );

    return (
      <>
      <section style={{ marginTop: sectionGap }}>
        <Reveal>
          <div style={{
            borderTop: `1px solid ${T.border}`,
            paddingTop: sectionPad,
            marginBottom: isMobile ? 44 : 64,
          }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
              {ghostNum(num)}
              <HexDot color={colors.from} />
              <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.methodology}</span>
            </div>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {d.methodology.map((m, i) => {
            const phaseImgs = d.images?.phases?.[i];
            const imgCount = phaseImgs?.length ?? 0;
            const isLast = i === d.methodology.length - 1;
            const isVariantA = i % 2 === 0;

            /* ── Rendu mobile commun ── */
            const mobileLayout = (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  {numEl(m.phase)}
                  {titleEl(m.title)}
                  {bodyEl(m.description)}
                </div>
                {imgCount > 0 && (
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: imgCount === 1 ? "1fr" : "repeat(2, 1fr)",
                    gap: 8,
                  }}>
                    {phaseImgs.map((src, si) => imgFrame(src, { maxHeight: "50vh" }, si))}
                  </div>
                )}
              </div>
            );

            /* ── Layout desktop Type 1 ── */
            const type1Desktop = isVariantA
              ? <div style={{ display: "grid", gridTemplateColumns: `${NUM_COL} 1fr`, gap: 28, alignItems: "start" }}>
                  <div>{numEl(m.phase)}</div>
                  {textBlock(m)}
                </div>
              : <div style={{ display: "grid", gridTemplateColumns: `1fr ${NUM_COL}`, gap: 28, alignItems: "start" }}>
                  {textBlock(m)}
                  <div>{numEl(m.phase, true)}</div>
                </div>;

            /* ── Layout desktop Type 2 — image s'étire à la hauteur du texte ── */
            const type2Desktop = isVariantA
              ? <div style={{ display: "grid", gridTemplateColumns: `${NUM_COL} 1fr 1fr`, gap: 40, alignItems: "stretch" }}>
                  <div>{numEl(m.phase)}</div>
                  {textBlock(m)}
                  {imgFrame(phaseImgs?.[0], { height: "100%", maxHeight: "70vh" })}
                </div>
              : <div style={{ display: "grid", gridTemplateColumns: `1fr 1fr ${NUM_COL}`, gap: 40, alignItems: "stretch" }}>
                  {imgFrame(phaseImgs?.[0], { height: "100%", maxHeight: "70vh" })}
                  {textBlock(m)}
                  <div>{numEl(m.phase, true)}</div>
                </div>;

            /* ── Layout desktop Type 3 — gap fixe, image s'adapte, total max 60vh ── */
            const imgsGrid = (
              <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${imgCount}, 1fr)`,
                gap: 12,
              }}>
                {phaseImgs?.map((src, si) => (
                  <div key={si} style={{
                    borderRadius: T.radius, overflow: "hidden",
                    background: T.surface, border: `1px solid ${T.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: 10,
                  }}>
                    <img
                      src={src} alt=""
                      onClick={() => openLightbox(src)}
                      style={{ display: "block", maxWidth: "100%", maxHeight: "42vh", width: "auto", height: "auto", cursor: "zoom-in" }}
                    />
                  </div>
                ))}
              </div>
            );

            const type3Desktop = isVariantA
              ? <div style={{ display: "grid", gridTemplateColumns: `${NUM_COL} 1fr`, gap: 28, alignItems: "start" }}>
                  <div>{numEl(m.phase)}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {textBlock(m)}
                    {imgsGrid}
                  </div>
                </div>
              : <div style={{ display: "grid", gridTemplateColumns: `1fr ${NUM_COL}`, gap: 28, alignItems: "start" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {textBlock(m)}
                    {imgsGrid}
                  </div>
                  <div>{numEl(m.phase, true)}</div>
                </div>;

            return (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{
                  paddingTop: isMobile ? 36 : 52,
                  paddingBottom: isLast ? 0 : (isMobile ? 36 : 52),
                  borderBottom: isLast ? "none" : `1px solid ${T.border}`,
                }}>
                  {isMobile ? mobileLayout
                    : imgCount === 0 ? type1Desktop
                    : imgCount === 1 ? type2Desktop
                    : type3Desktop}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      {lightbox && createPortal(
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            overflow: "auto",
            cursor: "zoom-out",
          }}
        >
          <div style={{
            minHeight: "100%", minWidth: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 32, boxSizing: "border-box",
          }}>
            <img
              src={lightbox} alt=""
              onClick={(e) => { e.stopPropagation(); setZoomLevel(z => z === 0 ? 1 : 0); }}
              style={{
                display: "block",
                borderRadius: T.radius,
                cursor: zoomLevel === 0 ? "zoom-in" : "zoom-out",
                ...(zoomLevel === 0
                  ? { maxWidth: "calc(100vw - 64px)", maxHeight: "calc(100vh - 64px)", width: "auto", height: "auto", objectFit: "contain" }
                  : { width: "auto", height: "auto" }
                ),
              }}
            />
          </div>
        </div>,
        document.body
      )}
    </>
    );
  }

  function SectionResultat({ d, num = "04" }) {
    if (!d.resultat) return null;
    return (
      <section style={{ marginTop: sectionGap }}>
        {d.images?.resultat && (
          <Reveal>
            <div style={{
              border: `1px solid ${T.border}`,
              borderRadius: T.radius,
              background: T.surface,
              padding: isMobile ? 12 : 16,
              marginBottom: 28,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <img
                src={Array.isArray(d.images.resultat) ? d.images.resultat[0] : d.images.resultat}
                alt=""
                style={{ maxWidth: "100%", objectFit: "contain", display: "block", borderRadius: 2 }}
              />
            </div>
          </Reveal>
        )}
        <Reveal>
          <div style={{
            borderTop: `1px solid ${T.border}`,
            paddingTop: sectionPad,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
            gap: isMobile ? 12 : 24,
            alignItems: "start",
          }}>
            <div>
              <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
                {ghostNum(num)}
                <HexDot color={colors.from} />
                <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.resultat}</span>
              </div>
            </div>
            <p style={{
              ...BODY,
              paddingTop: isMobile ? 0 : 2,
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              fontSize: isMobile ? 18 : 20,
              fontWeight: 400,
              lineHeight: 1.85,
            }}>{d.resultat}</p>
          </div>
        </Reveal>
      </section>
    );
  }

  /* ─── Impact items (réutilisé hub + standard) ─── */
  function ImpactSection({ items }) {
    if (!items?.length) return null;
    return (
      <section style={{ marginTop: sectionGap }}>
        <div style={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          padding: isMobile ? "64px 20px" : "96px 64px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={hexMesh} />
          <MotifSVG
            size={isMobile ? 200 : 320}
            color="#ffffff"
            opacity={0.06}
            outerOpacity={0.03}
            style={{ position: "absolute", right: isMobile ? -50 : -70, bottom: -50, pointerEvents: "none" }}
          />
          <div style={{ maxWidth: maxW, margin: "0 auto", position: "relative" }}>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
                <HexDot color="rgba(255,255,255,0.5)" />
                <span style={{ ...LB_WHITE, marginBottom: 0 }}>{t.impact}</span>
              </div>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {items.map((item, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <div style={{
                    display: "flex", gap: isMobile ? 20 : 32, alignItems: "flex-start",
                    padding: "24px 0",
                    borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
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
    ? (hasHubTab && activeTab === 0 ? details.impact : projectDetails[hubTabs?.[activeTab]?.id]?.impact)
    : details.impact;

  return (
    <article>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
        padding: isMobile ? "88px 20px 52px" : "120px 64px 72px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={hexMesh} />
        <MotifSVG
          size={isMobile ? 200 : 320}
          color="#ffffff"
          opacity={0.06}
          outerOpacity={0.03}
          style={{ position: "absolute", right: isMobile ? -60 : -80, top: isMobile ? -40 : -60, pointerEvents: "none" }}
        />
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
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {details.images?.cover ? (
                  <img
                    src={details.images.cover} alt=""
                    style={{ width: "100%", height: "auto", objectFit: "contain", display: "block", borderRadius: T.radius }}
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

            {hasHubTab && activeTab === 0 ? (

              /* Onglet Design System */
              <>
                <SectionContext d={details} num="01" />

                {details.designSystem && (
                  <section style={{ marginTop: sectionGap }}>
                    <Reveal>
                      <div style={{
                        borderTop: `1px solid ${T.border}`,
                        paddingTop: sectionPad,
                        marginBottom: 28,
                      }}>
                        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
                          {ghostNum("02")}
                          <HexDot color={colors.from} />
                          <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.hubDesignSystem}</span>
                        </div>
                      </div>
                    </Reveal>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {details.designSystem.items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.07}>
                          <div style={{
                            display: "flex", gap: isMobile ? 16 : 28, alignItems: "flex-start",
                            padding: "22px 0",
                            borderBottom: i < details.designSystem.items.length - 1 ? `1px solid ${T.border}` : "none",
                          }}>
                            <span style={{
                              fontFamily: "'Work Sans', sans-serif",
                              fontSize: isMobile ? 20 : 26, fontWeight: 800,
                              letterSpacing: "-0.03em", color: colors.from,
                              opacity: 0.13, lineHeight: 1, flexShrink: 0, userSelect: "none",
                              minWidth: isMobile ? 36 : 44,
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
              let hn = 0;
              const hsn = () => String(++hn).padStart(2, "0");
              const ctxN = hsn();
              const probN = ad.problematique ? hsn() : null;
              const methN = ad.methodology ? hsn() : null;
              const resN = ad.resultat ? hsn() : null;
              return (
                <>
                  <SectionContext d={ad} num={ctxN} />
                  {probN && <SectionProblematique d={ad} num={probN} />}
                  {methN && <SectionMethodology d={ad} num={methN} />}
                  {resN && <SectionResultat d={ad} num={resN} />}
                </>
              );
            })()}

          </div>
        </div>

      ) : (

        /* ── Projets standard ── */
        <div style={{ padding: `0 ${hPad}` }}>
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>
            {/* Calcul des numéros de section */}
            {(() => {
              let sn = 0;
              const ns = () => String(++sn).padStart(2, "0");
              const ctxN  = ns();
              const probN = details.problematique ? ns() : null;
              const chalN = details.challenges    ? ns() : null;
              const methN = details.methodology   ? ns() : null;
              const decN  = details.decisions     ? ns() : null;
              const resN  = details.resultat      ? ns() : null;
              const modN  = details.modules       ? ns() : null;

              return (
                <>

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
              <SectionContext d={details} num={ctxN} />
            </section>

            {/* PROBLÉMATIQUE */}
            {probN && <SectionProblematique d={details} num={probN} />}

            {/* DÉFIS */}
            {chalN && details.challenges && (
              <section style={{ marginTop: sectionGap }}>
                <Reveal>
                  <div style={{
                    borderTop: `1px solid ${T.border}`,
                    paddingTop: sectionPad,
                    marginBottom: 28,
                  }}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
                      {ghostNum(chalN)}
                      <HexDot color={colors.from} />
                      <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.challenges}</span>
                    </div>
                  </div>
                </Reveal>
                <div>
                  {details.challenges.map((c, i) => (
                    <Reveal key={i} delay={i * 0.07}>
                      <div style={{
                        display: "flex", gap: isMobile ? 20 : 32, alignItems: "flex-start",
                        padding: "24px 0",
                        borderBottom: i < details.challenges.length - 1 ? `1px solid ${T.border}` : "none",
                      }}>
                        <span style={{
                          fontFamily: "'Work Sans', sans-serif",
                          fontSize: isMobile ? 22 : 28, fontWeight: 800,
                          letterSpacing: "-0.03em", color: colors.from,
                          opacity: 0.14, lineHeight: 1, flexShrink: 0, userSelect: "none",
                          minWidth: isMobile ? 38 : 46,
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p style={{ ...BODY, color: T.text, fontSize: isMobile ? 14 : 15, alignSelf: "center" }}>
                          {c}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* DÉMARCHE */}
            {methN && <SectionMethodology d={details} num={methN} />}

            {/* DÉCISIONS CLÉS */}
            {decN && details.decisions && (
              <section style={{ marginTop: sectionGap }}>
                <Reveal>
                  <div style={{
                    borderTop: `1px solid ${T.border}`,
                    paddingTop: sectionPad,
                    marginBottom: 28,
                  }}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
                      {ghostNum(decN)}
                      <HexDot color={colors.from} />
                      <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.decisionsLabel}</span>
                    </div>
                  </div>
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
            {resN && <SectionResultat d={details} num={resN} />}

            {/* MODULES */}
            {modN && details.modules && (
              <section style={{ marginTop: sectionGap }}>
                <Reveal>
                  <div style={{
                    borderTop: `1px solid ${T.border}`,
                    paddingTop: sectionPad,
                    marginBottom: 40,
                  }}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
                      {ghostNum(modN)}
                      <HexDot color={colors.from} />
                      <span style={{ ...LB, marginBottom: 0, position: "relative" }}>{t.realizations}</span>
                    </div>
                  </div>
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

              </>
              );
            })()}

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
                gridTemplateColumns: isMobile ? "repeat(auto-fill, minmax(76px, 88px))" : `repeat(${projects.filter((p) => p.parentId === details.parentId && p.id !== projectId).length + 1}, 1fr)`,
                gap: 12,
                justifyContent: isMobile ? "start" : undefined,
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
                gridTemplateColumns: isMobile ? "repeat(auto-fill, minmax(76px, 88px))" : `repeat(${projects.filter((p) => p.id !== projectId && !p.parentId).length}, 1fr)`,
                gap: 12,
                justifyContent: isMobile ? "start" : undefined,
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

/* ─── Card nav hexagonale ─────────────────────────────────────── */
function ProjectNavCard({ project, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const { tokens: T } = useTheme();
  const colors = PROJECT_COLORS[project.id] || { from: T.accent, to: T.accentMid };

  const R = 16;
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
  const meshD = [hexPt(W/2, R), hexPt(0, 2.5*R), hexPt(W, 2.5*R)].join(" ");
  const meshSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}'><path d='${meshD}' stroke='rgba(255,255,255,0.09)' stroke-width='0.6' fill='none'/></svg>`;
  const meshUrl = `url("data:image/svg+xml,${encodeURIComponent(meshSvg)}")`;

  return (
    <div
      role="button" tabIndex={0}
      onClick={() => onNavigate(`/projects/${project.id}`)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onNavigate(`/projects/${project.id}`); } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        aspectRatio: "1 / 1.15",
        backgroundImage: `${meshUrl}, linear-gradient(135deg, ${colors.from}, ${colors.to})`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, 100% 100%",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        filter: hovered ? "brightness(1.2)" : "brightness(1)",
        transition: "filter .25s ease",
      }}
    >
      <span style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "clamp(10px, 0.7vw, 13px)", fontWeight: 800,
        letterSpacing: "-0.01em", textTransform: "uppercase",
        color: "#fff", textAlign: "center", lineHeight: 1.2,
        padding: "0 18%",
      }}>
        {project.title}
      </span>
    </div>
  );
}
