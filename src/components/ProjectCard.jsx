import { useState } from "react";
import { tokens as T } from "../styles/tokens";
import { Reveal } from "./UI";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={index * 0.08} y={50}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          minHeight: 320,
          background: hovered ? T.surface : "transparent",
          borderRadius: T.radius,
          border: `1px solid ${hovered ? T.border : "transparent"}`,
          transition: "all .4s ease",
          cursor: "pointer",
          overflow: "hidden",
          marginBottom: 12,
        }}
      >
        {/* Côté texte */}
        <div
          style={{
            padding: "44px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            order: isEven ? 0 : 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: T.accent,
                fontWeight: 600,
              }}
            >
              {project.tag}
            </span>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: T.textLight,
              }}
            />
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.06em",
                color: T.textLight,
                fontWeight: 500,
              }}
            >
              {project.year}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 700,
              color: T.text,
              margin: 0,
              letterSpacing: "-0.02em",
              transform: hovered ? "translateX(8px)" : "translateX(0)",
              transition: "transform .4s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 15,
              color: T.textMuted,
              margin: "6px 0 0",
            }}
          >
            {project.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginTop: 20,
            }}
          >
            {project.tasks.map((task) => (
              <span
                key={task}
                style={{
                  padding: "5px 12px",
                  borderRadius: 16,
                  background: T.accentLight,
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: T.accent,
                  letterSpacing: "0.02em",
                }}
              >
                {task}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: T.accent,
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0)" : "translateX(-8px)",
              transition: "all .35s ease",
            }}
          >
            Voir le projet
            <svg
              width="16"
              height="16"
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

        {/* Côté visuel */}
        <div
          style={{
            background: T.accentLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            order: isEven ? 1 : 0,
            position: "relative",
            overflow: "hidden",
            borderRadius: isEven
              ? `0 ${T.radius}px ${T.radius}px 0`
              : `${T.radius}px 0 0 ${T.radius}px`,
          }}
        >
          <div
            style={{
              width: "70%",
              height: "60%",
              borderRadius: 10,
              background: T.surface,
              border: `1px solid ${T.accentMid}`,
              transform: hovered ? "scale(1.04) rotate(-1deg)" : "scale(1)",
              transition: "transform .5s cubic-bezier(.22,1,.36,1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 48,
                fontWeight: 200,
                color: T.accentMid,
                letterSpacing: "0.05em",
              }}
            >
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
