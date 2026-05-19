import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "./ProjectCard";
import HexPattern from "./HexPattern";

function hexVars(vw) {
  // HW capped so total grid height (HW×2.8861 + 60px) never exceeds 100vh
  const vwHW  = `calc((${vw}vw - 36px) / 3)`;
  const maxHW = `calc((100vh - 60px) / 2.8861)`;
  const HW    = `min(${vwHW}, ${maxHW})`;
  return {
    HW,
    HH:      `calc(${HW} * 1.1547)`,
    NEG:     `calc(-1 * ${HW} * 0.289 + 6px)`,
    OFFSET:  `calc(${HW} / 2 + 5px)`,
    LABEL_W: `calc(${HW} * 0.9)`,
  };
}

// Slot layout:
//  Row 0 (offset):   [0=hex1 left]  [1=hex2 right]
//  Row 1 (no offset):[2=hex3 left]  [3=logo center]  [4=hex5 right]
//  Row 2 (offset):   [5=hex6 left]  [6=hex7 right / NPC]
const SLOT_CONFIG = [
  { projectIdx: 0, side: "left"  },
  { projectIdx: 1, side: "right" },
  { projectIdx: 2, side: "left"  },
  { projectIdx: null, side: null },  // logo
  { projectIdx: 3, side: "right" },
  { projectIdx: 4, side: "left"  },
  { projectIdx: 5, side: "right" },  // NPC
];

const ROWS = [
  { slotIndices: [0, 1],    offset: true  },
  { slotIndices: [2, 3, 4], offset: false },
  { slotIndices: [5, 6],    offset: true  },
];

function HexLabel({ project, side }) {
  const { tokens: T } = useTheme();
  const isLeft = side === "left";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: isLeft ? "flex-end" : "flex-start" }}>

      {/* Titre — style Mon Parcours : black, serré */}
      <h3 style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "clamp(18px, 1.6vw, 26px)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        color: T.text,
        margin: 0,
        lineHeight: 1.1,
        textAlign: isLeft ? "right" : "left",
      }}>
        {project.title}
      </h3>

      {/* Tag — style CV/LinkedIn : fin, espacé */}
      <span style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "clamp(10px, 0.75vw, 12px)",
        fontWeight: 300,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: T.accent,
      }}>
        {project.tag}
      </span>

      {/* Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: isLeft ? "flex-end" : "flex-start" }}>
        {project.tasks.map(task => (
          <span key={task} style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(9px, 0.65vw, 11px)",
            fontWeight: 300,
            padding: "3px 10px",
            borderRadius: 999,
            border: `1px solid ${T.border}`,
            color: T.textMuted,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}>
            {task}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HoneycombGrid({ projects, onNavigate, widthVw = 52, showLabels = true }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const { HW, HH, NEG, OFFSET, LABEL_W } = hexVars(widthVw);

  // NPC always goes to slot 6 (hex 7, bottom-right)
  const npc    = projects.find(p => p.id === "npc");
  const others = projects.filter(p => p.id !== "npc");
  const ordered = [...others, npc].filter(Boolean);

  const renderSlot = (slotIdx) => {
    const { projectIdx, side } = SLOT_CONFIG[slotIdx];
    const project   = projectIdx !== null ? ordered[projectIdx] : null;
    const isHovered = hoveredIdx === slotIdx;
    const isLeft    = side === "left";

    return (
      <div
        key={slotIdx}
        style={{ position: "relative", width: HW, height: HH, flexShrink: 0 }}
        onMouseEnter={() => setHoveredIdx(slotIdx)}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {/* Side label */}
        {project && showLabels && (
          <div style={{
            position: "absolute",
            ...(isLeft ? { right: "calc(100% + 14px)" } : { left: "calc(100% + 14px)" }),
            top: "50%",
            width: LABEL_W,
            transform: `translateY(-50%) translateX(${isHovered ? 0 : (isLeft ? -10 : 10)}px)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity .25s ease, transform .32s cubic-bezier(.22,1,.36,1)",
            pointerEvents: "none",
            zIndex: 20,
          }}>
            <HexLabel project={project} side={side} />
          </div>
        )}

        {/* Hex content */}
        <div style={{ position: "absolute", inset: 0 }}>
          {project ? (
            <ProjectCard
              project={project}
              index={projectIdx}
              onNavigate={onNavigate}
              compact
              hexShape
              compactScale={1.4}
            />
          ) : (
            <HexPattern />
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "24px 8px" }}>
      {ROWS.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: "flex",
            gap: "10px",
            marginTop: ri > 0 ? NEG : 0,
            paddingLeft: row.offset ? OFFSET : 0,
          }}
        >
          {row.slotIndices.map(slotIdx => renderSlot(slotIdx))}
        </div>
      ))}
    </div>
  );
}
