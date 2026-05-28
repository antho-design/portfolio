import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Reveal } from "./UI";
import { PROJECT_COLORS, BLUEPRINT_GRID_BG, CARD_BORDER_BG, CARD_BORDER_BG_DARK } from "../data/constants";

const PROJECT_CARD_IMAGES = {
  apec:           { src: "/apec-card.png", width: "90%", paddingLeft: "4%" },
  cetelem:        { src: "/cetelem/card.png", width: "82%", centered: true },
  autossimo:      { src: "/autossimo-card.png" },
  npc:            { src: "/npc/card.png" },
  cerfal:         { src: "/cerfal/card.png", paddingLeft: "16%", width: "88%" },
  globedreamers:  { src: "/globedreamers/accueil-multidevice.png", paddingLeft: "2%", width: "96%" },
};

function HexWatermark({ color }) {
  return (
    <svg
      viewBox="0 0 165 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", color }}
      aria-hidden="true"
    >
      <path d="M83.5869 48.2265L121.908 26.0632L121.908 32.7872L89.3971 51.5559L83.5869 48.2265Z" fill="currentColor"/>
      <path d="M100.038 48.4876L100.038 57.6924L105.848 61.0544L105.848 45.1256L100.038 48.4876Z" fill="currentColor"/>
      <path d="M113.845 40.4905L108.035 43.8526L108.068 62.3274L113.878 65.6568L113.845 40.4905Z" fill="currentColor"/>
      <path d="M121.908 35.8228L116.097 39.1849L116.13 66.9625L121.94 70.3245L121.908 35.8228Z" fill="currentColor"/>
      <path d="M83.6648 48.1105L83.6311 92.3789L89.4543 89.0168L89.4532 51.4776L83.6648 48.1105Z" fill="currentColor"/>
      <path d="M92.1165 62.2271L100.088 57.6247L105.905 60.9754L92.11 68.9398L92.1165 62.2271Z" fill="currentColor"/>
      <path d="M92.0945 78.183L92.101 71.4703L108.117 62.2611L113.905 65.6281L92.0945 78.183Z" fill="currentColor"/>
      <path d="M92.0833 87.499L92.0898 80.7863L116.162 66.9258L121.979 70.2765L92.0833 87.499Z" fill="currentColor"/>
      <path d="M123.78 73.5688L162.134 95.6739L156.311 99.0359L123.801 80.2652L123.78 73.5688Z" fill="currentColor"/>
      <path d="M131.779 87.9465L123.807 92.5489L123.801 99.2616L137.596 91.2972L131.779 87.9465Z" fill="currentColor"/>
      <path d="M145.608 95.9054L139.792 92.5547L123.808 101.82L123.83 108.517L145.608 95.9054Z" fill="currentColor"/>
      <path d="M153.682 100.554L147.865 97.203L123.825 111.12L123.819 117.833L153.682 100.554Z" fill="currentColor"/>
      <path d="M123.919 73.5783L85.5646 95.6833L91.3878 99.0453L123.897 80.2747L123.919 73.5783Z" fill="currentColor"/>
      <path d="M115.92 87.956L123.891 92.5584L123.898 99.2711L110.103 91.3067L115.92 87.956Z" fill="currentColor"/>
      <path d="M102.09 95.9148L107.907 92.5642L123.89 101.83L123.869 108.526L102.09 95.9148Z" fill="currentColor"/>
      <path d="M94.0168 100.563L99.8334 97.2124L123.873 111.13L123.88 117.842L94.0168 100.563Z" fill="currentColor"/>
      <path d="M121.929 121.048L121.963 165.316L116.139 161.954L116.14 124.415L121.929 121.048Z" fill="currentColor"/>
      <path d="M113.477 135.164L105.506 130.562L99.6889 133.913L113.484 141.877L113.477 135.164Z" fill="currentColor"/>
      <path d="M113.499 151.12L113.493 144.408L97.4766 135.198L91.6882 138.565L113.499 151.12Z" fill="currentColor"/>
      <path d="M113.51 160.436L113.504 153.724L89.4314 139.863L83.6148 143.214L113.51 160.436Z" fill="currentColor"/>
      <path d="M121.99 121.173L83.6697 99.01L83.6697 105.734L116.18 124.503L121.99 121.173Z" fill="currentColor"/>
      <path d="M105.539 121.434L105.539 130.639L99.7291 134.001L99.7291 118.072L105.539 121.434Z" fill="currentColor"/>
      <path d="M91.732 113.437L97.5421 116.799L97.5094 135.274L91.6993 138.604L91.732 113.437Z" fill="currentColor"/>
      <path d="M83.6697 108.77L89.4798 112.132L89.4471 139.909L83.637 143.271L83.6697 108.77Z" fill="currentColor"/>
      <path d="M79.8854 143.185L41.5647 165.348L41.5647 158.624L74.0753 139.855L79.8854 143.185Z" fill="currentColor"/>
      <path d="M63.4343 142.923L63.4343 133.719L57.6241 130.357L57.6241 146.286L63.4343 142.923Z" fill="currentColor"/>
      <path d="M49.627 150.921L55.4372 147.559L55.4045 129.084L49.5944 125.754L49.627 150.921Z" fill="currentColor"/>
      <path d="M41.5648 155.588L47.3749 152.226L47.3422 124.449L41.5321 121.087L41.5648 155.588Z" fill="currentColor"/>
      <path d="M79.8075 143.301L79.8412 99.0322L74.018 102.394L74.0191 139.934L79.8075 143.301Z" fill="currentColor"/>
      <path d="M71.3558 129.184L63.3842 133.786L57.5675 130.436L71.3624 122.471L71.3558 129.184Z" fill="currentColor"/>
      <path d="M71.3779 113.228L71.3713 119.941L55.3553 129.15L49.5669 125.783L71.3779 113.228Z" fill="currentColor"/>
      <path d="M71.3891 103.912L71.3825 110.625L47.3101 124.485L41.4934 121.135L71.3891 103.912Z" fill="currentColor"/>
      <path d="M39.6927 117.842L1.33836 95.7372L7.16157 92.3752L39.671 111.146L39.6927 117.842Z" fill="currentColor"/>
      <path d="M31.6933 103.465L39.6649 98.8622L39.6714 92.1495L25.8766 100.114L31.6933 103.465Z" fill="currentColor"/>
      <path d="M17.864 95.5057L23.6807 98.8564L39.6641 89.5907L39.6423 82.8943L17.864 95.5057Z" fill="currentColor"/>
      <path d="M9.79051 90.8574L15.6072 94.2081L39.647 80.291L39.6535 73.5783L9.79051 90.8574Z" fill="currentColor"/>
      <path d="M39.5534 117.833L77.9077 95.7278L72.0845 92.3658L39.5751 111.136L39.5534 117.833Z" fill="currentColor"/>
      <path d="M47.5528 103.455L39.5812 98.8527L39.5747 92.14L53.3695 100.114L47.5528 103.455Z" fill="currentColor"/>
      <path d="M61.3821 95.4962L55.5654 98.8469L39.582 89.5812L39.6037 82.8848L61.3821 95.4962Z" fill="currentColor"/>
      <path d="M69.4556 90.848L63.6389 94.1986L39.5991 80.2816L39.5926 73.5689L69.4556 90.848Z" fill="currentColor"/>
      <path d="M41.5435 70.3632L41.5098 26.0949L47.333 29.4569L47.3319 66.9962L41.5435 70.3632Z" fill="currentColor"/>
      <path d="M49.9952 56.2467L57.9668 60.8491L63.7834 57.4984L49.9886 49.5339L49.9952 56.2467Z" fill="currentColor"/>
      <path d="M49.9731 40.2907L49.9797 47.0035L65.9957 56.2126L71.7841 52.8456L49.9731 40.2907Z" fill="currentColor"/>
      <path d="M49.9619 30.9747L49.9685 37.6875L74.0409 51.548L79.8576 48.1973L49.9619 30.9747Z" fill="currentColor"/>
      <path d="M41.482 70.2378L79.8027 92.4011L79.8027 85.6771L47.2921 66.9084L41.482 70.2378Z" fill="currentColor"/>
      <path d="M57.9332 69.9767L57.9332 60.7719L63.7433 57.4098L63.7433 73.3387L57.9332 69.9767Z" fill="currentColor"/>
      <path d="M71.7404 77.9737L65.9303 74.6117L65.9629 56.1368L71.773 52.8074L71.7404 77.9737Z" fill="currentColor"/>
      <path d="M79.8027 82.6414L73.9925 79.2794L74.0252 51.5018L79.8353 48.1398L79.8027 82.6414Z" fill="currentColor"/>
    </svg>
  );
}

export default function ProjectCard({ project, index, onNavigate, compact = false, compactScale = 1.2, hexShape = false, hexWatermark = false }) {
  const [hovered, setHovered] = useState(false);
  const { tokens: T, theme } = useTheme();
  const colors = PROJECT_COLORS[project.id] || { from: T.accent, to: T.accentMid };
  const cardConfig = PROJECT_CARD_IMAGES[project.id];
  const projectImage = cardConfig?.src ?? null;
  const cardPaddingLeft = cardConfig?.paddingLeft ?? "9%";
  const cardWidth = cardConfig?.width ?? "74%";
  const cardCentered = cardConfig?.centered ?? false;

  const yRest  = compact ? Math.max(0, 10 - (compactScale - 1.2) * 10.5) : 20;
  const yHover = compact ? Math.max(0,  6 - (compactScale - 1.2) * 10.5) : 14;

  const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  const pill = {
    padding: "6px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.26)",
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,0.92)",
    letterSpacing: "0.05em",
    backdropFilter: "blur(8px) saturate(120%)",
    WebkitBackdropFilter: "blur(8px) saturate(120%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
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
    backgroundImage: BLUEPRINT_GRID_BG,
    backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
    backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0",
    opacity: hovered ? 0.78 : 0.42,
    mixBlendMode: "screen",
    transition: "opacity .5s ease",
    maskImage: "radial-gradient(circle at center, black 62%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(circle at center, black 62%, transparent 100%)",
  };

  const cardBorder = {
    position: "absolute",
    inset: 0,
    borderRadius: T.radius,
    pointerEvents: "none",
    background: theme === "dark" ? CARD_BORDER_BG_DARK : CARD_BORDER_BG,
    zIndex: 3,
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    onNavigate?.(`/projects/${project.id}`, {
      transition: {
        type: "project",
        projectId: project.id,
        title: project.title,
        subtitle: project.subtitle,
        tasks: project.tasks,
        rect: { left: rect.left, top: rect.top, width: rect.width, height: rect.height },
      },
    });
  };

  return (
    <Reveal delay={index * 0.07} y={compact ? 16 : 40} style={compact ? { height: "100%" } : {}}>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onNavigate?.(`/projects/${project.id}`);
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          borderRadius: hexShape ? 0 : (compact ? 6 : T.radius),
          overflow: "hidden",
          background: T.surface,
          cursor: "pointer",
          ...(hexShape ? {
            clipPath: hexClipPath,
            filter: hovered
              ? "drop-shadow(0 12px 32px rgba(26,75,92,0.28))"
              : "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
            transition: "filter .4s ease",
          } : {
            boxShadow: hovered
              ? "0 24px 64px rgba(26,75,92,0.14)"
              : "0 2px 8px rgba(0,0,0,0.04)",
            transition: "box-shadow .4s ease",
            willChange: "box-shadow",
            contain: "layout style paint",
          }),
          ...(compact && { height: "100%" }),
        }}
      >
        {/* ── Zone visuelle ── */}
        <div style={(compact || hexShape)
          ? { position: "relative", height: "100%", overflow: "hidden", filter: hovered ? "none" : "grayscale(50%) brightness(0.9)", transition: "filter .5s ease" }
          : { position: "relative", aspectRatio: "16/9", overflow: "hidden", filter: hovered ? "none" : "grayscale(50%) brightness(0.9)", transition: "filter .5s ease" }
        }>

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

          {/* Motif hex watermark (mode mobile) */}
          {hexWatermark && (
            <div style={{
              position: "absolute",
              right: "-8%", bottom: "-8%",
              width: "58%", aspectRatio: "165 / 191",
              opacity: 0.09,
              pointerEvents: "none",
              mixBlendMode: "screen",
              color: "rgba(255,255,255,1)",
            }}>
              <HexWatermark color="rgba(255,255,255,1)" />
            </div>
          )}

          {/* Grille subtile */}
          <div style={blueprintGrid} />

          {/* Mockup flottant */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: projectImage ? (hexShape ? "center" : "flex-end") : "center",
              justifyContent: projectImage ? ((hexShape || cardCentered) ? "center" : "flex-start") : "center",
              paddingLeft: (hexShape || cardCentered || !projectImage) ? 0 : cardPaddingLeft,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: projectImage ? (compact ? `calc(${cardWidth} * ${compactScale})` : cardWidth) : "52%",
                aspectRatio: projectImage ? "1.22 / 1" : "16/10",
                background: projectImage ? "transparent" : "rgba(255,255,255,0.11)",
                backdropFilter: projectImage ? "none" : "blur(10px)",
                borderRadius: projectImage ? 0 : 10,
                border: projectImage ? "none" : "1px solid rgba(255,255,255,0.24)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: hovered
                  ? projectImage
                    ? `translate(-2%, ${yHover}%) scale(1.02)`
                    : "translateY(-10px) scale(1.03)"
                  : projectImage
                    ? `translate(-2%, ${yRest}%) scale(1)`
                    : "translateY(0) scale(1)",
                transition: "transform .65s cubic-bezier(.22,1,.36,1), box-shadow .65s ease",
                boxShadow: hovered
                  ? projectImage ? "none" : "0 28px 56px rgba(0,0,0,0.32)"
                  : projectImage ? "none" : "0 8px 24px rgba(0,0,0,0.22)",
              }}
            >
              {projectImage ? (
                <img
                  src={projectImage}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    transition: "transform .65s ease",
                  }}
                />
              ) : (
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
              )}
            </div>
          </div>

          {/* Overlay bas — mode normal : apparaît au hover */}
          {!compact && (
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
            </div>
          )}

          {/* Overlay bas — mode compact uniquement (pas en hexShape, texte géré à l'extérieur) */}
          {compact && !hexShape && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, ${colors.from}F2 0%, ${colors.from}88 32%, transparent 62%)`,
                opacity: hovered ? 1 : 0,
                transition: "opacity .35s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                padding: "14px 16px",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {project.tasks.map((task, i) => (
                  <span
                    key={task}
                    style={{
                      ...pill,
                      fontSize: 10,
                      padding: "4px 9px",
                      transform: hovered ? "translateY(0)" : "translateY(10px)",
                      opacity: hovered ? 1 : 0,
                      transition: `transform .35s cubic-bezier(.22,1,.36,1) ${0.03 + i * 0.04}s, opacity .28s ease ${0.03 + i * 0.04}s`,
                    }}
                  >
                    {task}
                  </span>
                ))}
              </div>
              <div>
                <h3
                  style={{
                    ...titleStyle,
                    fontSize: "clamp(13px, 1.1vw, 17px)",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "clamp(10px, 0.75vw, 12px)",
                    color: "rgba(255,255,255,0.58)",
                    margin: "3px 0 0",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Zone texte (mode normal uniquement) ── */}
        {!compact && (
          <div
            style={{
              padding: "18px 22px 22px",
              background: hovered ? colors.from : T.surface,
              transition: "background .55s cubic-bezier(.22,1,.36,1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
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

            <div style={{ overflow: "hidden", position: "relative", marginBottom: 4 }}>
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
        )}

        {!hexShape && <div style={cardBorder} />}
      </div>
    </Reveal>
  );
}
