import { useInView, useScrollProgress } from "../hooks/useInView";
import { tokens as T } from "../styles/tokens";

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
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${progress * 100}%`,
        background: T.accent,
        zIndex: 1000,
        transition: "width 0.1s linear",
      }}
    />
  );
}

/* ─── Label de section (ex: "— Portfolio") ─── */
export function SectionLabel({ children }) {
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
