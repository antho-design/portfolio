import { useState, useEffect } from "react";
import { tokens as T } from "../styles/tokens";
import MotifSVG from "./MotifSVG";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const anim = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(40px)",
    transition: `all 0.9s cubic-bezier(.22,1,.36,1) ${delay}s`,
  });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 40px 80px",
        position: "relative",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Contenu texte */}
      <div style={{ flex: 1 }}>
        <div style={anim(0.2)}>
          <span
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 13,
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
                width: 24,
                height: 1.5,
                background: T.accent,
                display: "inline-block",
              }}
            />
            Product Designer
          </span>
        </div>

        <div style={{ ...anim(0.4), marginTop: 20 }}>
          <h1
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 200,
              fontSize: "clamp(40px, 7vw, 72px)",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              color: T.text,
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            ANTHONIN
          </h1>
          <h1
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 7vw, 72px)",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              color: T.accent,
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            SAUTET
          </h1>
        </div>

        <p
          style={{
            ...anim(0.6),
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 17,
            color: T.textMuted,
            maxWidth: 440,
            lineHeight: 1.7,
            marginTop: 28,
          }}
        >
          Interfaces, design systems & recherche utilisateur.
          <br />
          De l'atome au template, du problème à la solution.
        </p>

        <div
          style={{ ...anim(0.8), display: "flex", gap: 14, marginTop: 40 }}
        >
          <a
            href="#projects"
            style={{
              padding: "13px 32px",
              background: T.accent,
              color: "#fff",
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.02em",
              transition: "transform .25s, box-shadow .25s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 24px rgba(26,75,92,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Voir les projets
          </a>
          <a
            href="#experience"
            style={{
              padding: "13px 32px",
              border: `1.5px solid ${T.border}`,
              color: T.text,
              borderRadius: 28,
              textDecoration: "none",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              transition: "border-color .3s",
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = T.textMuted)}
            onMouseLeave={(e) => (e.target.style.borderColor = T.border)}
          >
            Mon parcours
          </a>
        </div>
      </div>

      {/* Motif décoratif */}
      <div
        style={{
          ...anim(0.7),
          flex: "0 0 auto",
          position: "relative",
          width: 360,
          height: 360,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MotifSVG
          size={320}
          color={T.accent}
          opacity={0.12}
          outerOpacity={0.5}
          style={{ position: "absolute" }}
        />
        <MotifSVG size={180} color={T.accent} opacity={0.85} outerOpacity={0.4} />
      </div>

      {/* Indicateur de scroll */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          ...anim(1.2),
        }}
      >
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 11,
            color: T.textLight,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: `linear-gradient(to bottom, ${T.textLight}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
