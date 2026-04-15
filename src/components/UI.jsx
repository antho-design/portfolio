import { useInView, useScrollProgress } from "../hooks/useInView";
import { useTheme } from "../context/ThemeContext";

/* ─── Reveal — animation d'apparition au scroll ─── */
export function Reveal({ children, delay = 0, y = 40, style = {} }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.75s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.75s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Barre de progression du scroll ─── */
export function ProgressBar() {
  const progress = useScrollProgress();
  const { tokens: T } = useTheme();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
        height: 3,
        background: "rgba(255,255,255,0.92)",
        boxShadow: "inset 0 -1px 0 rgba(51,51,51,0.06)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          background: T.accent,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

/* ─── Icône de téléchargement ─── */
export function DownloadIcon({ color = "currentColor" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path d="M12 3v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/* ─── Label de section (ex: "— Portfolio") ─── */
export function SectionLabel({ children }) {
  const { tokens: T } = useTheme();
  return (
    <span
      style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: T.accent,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span
        style={{
          width: 20,
          height: 1.5,
          background: T.accent,
          display: "inline-block",
        }}
      />
      {children}
    </span>
  );
}

/* ─── Titre de section (h2) ─── */
export function SectionTitle({ children, style = {} }) {
  const { tokens: T } = useTheme();
  return (
    <h2
      style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "clamp(26px, 3.5vw, 38px)",
        fontWeight: 700,
        color: T.text,
        lineHeight: 1.25,
        margin: "14px 0 0",
        letterSpacing: "-0.02em",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
