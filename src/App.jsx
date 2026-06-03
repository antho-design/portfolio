import { useState, useEffect, useRef } from "react";
import { useTheme } from "./context/ThemeContext";
import { UI } from "./data/translations";
import { useBreakpoint } from "./hooks/useBreakpoint";
import { useContent } from "./hooks/useContent";
import { useLanguage } from "./context/LanguageContext";
import { BLUEPRINT_AURA_BG, HEX_MESH_BG, PROJECT_COLORS, CV_URL, LINKEDIN_URL } from "./data/constants";
import {
  ProgressBar,
  Reveal,
  DownloadIcon,
} from "./components/UI";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import HoneycombGrid from "./components/HoneycombGrid";
import About, { GallerySection } from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import LegalPage from "./components/LegalPage";
import MotifSVG from "./components/MotifSVG";

const FILTER_ALIASES = {
  UI: ["UI", "UI design", "UI Design"],
  UX: ["UX", "UX design", "UX Design"],
  "User Research": ["User Research", "UX Research"],
  Discovery: ["Discovery"],
  "Design system": ["Design system", "Design System"],
  "UI Kit": ["UI Kit", "UI Kits"],
  Figma: ["Figma"],
  Prototypage: ["Prototypage", "Prototype", "Prototypes", "Prototyping"],
  Wireframe: ["Wireframe", "Wireframes"],
  "Mobile first": ["Mobile first", "Responsive"],
};

function normalizeValue(value) {
  return value.toLowerCase().replace(/[’']/g, "").trim();
}

function projectMatchesFilter(project, filter, allLabel) {
  if (filter === allLabel) return true;

  const aliases = FILTER_ALIASES[filter] || [filter];
  const projectTerms = [project.tag, project.subtitle, ...project.tasks].map(normalizeValue);

  return aliases.some((alias) => {
    const normalizedAlias = normalizeValue(alias);
    return projectTerms.some((term) => term.includes(normalizedAlias));
  });
}

function SwitchGroup({ children, label }) {
  const { tokens: T, theme } = useTheme();
  const switchBg = theme === "dark" ? "rgba(255,255,255,0.07)" : T.surfaceAlt;
  const switchBorder = theme === "dark" ? "rgba(255,255,255,0.18)" : T.border;

  return (
    <div
      role="group"
      aria-label={label}
      style={{
        padding: 4,
        borderRadius: 999,
        border: "1px solid transparent",
        background: `
          linear-gradient(${switchBg}, ${switchBg}) padding-box,
          linear-gradient(to right, transparent, ${switchBorder} 14%, ${switchBorder} 86%, transparent) border-box
        `,
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      {children}
    </div>
  );
}

function SwitchBtn({ active, onClick, children, ariaLabel }) {
  const { tokens: T, theme } = useTheme();
  const isDark = theme === "dark";
  const switchText = isDark ? "rgba(255,255,255,0.92)" : T.text;
  const switchMuted = isDark ? "rgba(255,255,255,0.38)" : T.textLight;

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 11,
        fontWeight: active ? 700 : 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        padding: "7px 12px",
        borderRadius: 999,
        border: "none",
        background: active ? (isDark ? "rgba(255,255,255,0.12)" : T.surface) : "transparent",
        color: active ? switchText : switchMuted,
        cursor: "pointer",
        transition: "background .25s ease, color .25s ease, box-shadow .25s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        boxShadow: active && !isDark ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
        lineHeight: 1,
      }}
    >
      {children}
    </button>
  );
}

function HomePage({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);
  const { isMobile, isTablet } = useBreakpoint();
  const { projects } = useContent();
  const { lang, toggle: toggleLang } = useLanguage();
  const { tokens: T, theme, toggle: toggleTheme } = useTheme();
  const th = UI[lang].hero;

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const anim = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity .8s cubic-bezier(.22,1,.36,1) ${delay}s, transform .8s cubic-bezier(.22,1,.36,1) ${delay}s`,
  });

  const cvBtnBackground = `
    linear-gradient(${T.surface}, ${T.surface}) padding-box,
    linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) border-box
  `;

  if (isMobile) {
    /* ── Layout mobile : scrollable ── */
    return (
      <div style={{ minHeight: "100vh", background: T.bg }}>

        {/* Identité + switchers */}
        <div style={{ padding: "28px 20px 20px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <span style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 10, letterSpacing: "0.38em", textTransform: "uppercase",
              color: T.accent, fontWeight: 400,
              display: "flex", alignItems: "center", gap: 8, marginBottom: 8,
            }}>
              <span style={{ width: 16, height: 1, background: T.accent, display: "inline-block" }} />
              {th.role}
            </span>
            <h1 style={{ margin: 0, lineHeight: 0.95 }}>
              <span style={{ display: "block", fontFamily: "'Work Sans', sans-serif", fontWeight: 100, fontSize: "clamp(30px, 9vw, 42px)", textTransform: "uppercase", letterSpacing: "0.09em", color: T.text }}>ANTHONIN</span>
              <span style={{ display: "block", fontFamily: "'Work Sans', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 9vw, 42px)", textTransform: "uppercase", letterSpacing: "0.02em", color: T.accent }}>SAUTET</span>
            </h1>
          </div>
          {/* Switches compact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end", paddingTop: 4 }}>
            <SwitchGroup label="Theme switcher">
              {[{ value: "light", icon: "☀️" }, { value: "dark", icon: "🌙" }].map(({ value, icon }) => (
                <SwitchBtn key={value} active={theme === value} onClick={() => { if (theme !== value) toggleTheme(); }}>
                  <span style={{ fontSize: 12, lineHeight: 1 }}>{icon}</span>
                </SwitchBtn>
              ))}
            </SwitchGroup>
            <SwitchGroup label="Language switcher">
              {["fr", "en"].map((l) => (
                <SwitchBtn key={l} active={lang === l} onClick={() => { if (lang !== l) toggleLang(); }}>
                  {l.toUpperCase()}
                </SwitchBtn>
              ))}
            </SwitchGroup>
          </div>
        </div>

        {/* Projets — full-width stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "8px 12px 0" }}>
          {projects.filter(p => !p.parentId).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onNavigate={onNavigate} hexWatermark />
          ))}
        </div>

        {/* Bas de page — liens + mentions légales */}
        <div style={{ padding: "48px 24px 40px", display: "flex", flexDirection: "column", gap: 16 }}>
          <a
            href={CV_URL}
            download
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(22px, 6vw, 32px)",
              fontWeight: 100, letterSpacing: "0.28em", textTransform: "uppercase",
              color: T.textMuted, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 12,
            }}
          >
            {th.cta4} <span style={{ display: "inline-flex" }}><DownloadIcon /></span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(22px, 6vw, 32px)",
              fontWeight: 100, letterSpacing: "0.28em", textTransform: "uppercase",
              color: T.textMuted, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 12,
            }}
          >
            LinkedIn
          </a>
          <a
            href="/about"
            onClick={(e) => { e.preventDefault(); onNavigate("/about"); }}
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(24px, 6.5vw, 36px)",
              fontWeight: 800, letterSpacing: "-0.02em", textTransform: "uppercase",
              color: T.text, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 12,
            }}
          >
            {th.parcours}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <div style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: `1px solid ${T.border}`,
          }}>
            <a
              href="/legal"
              onClick={(e) => { e.preventDefault(); onNavigate("/legal"); }}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 10, letterSpacing: "0.38em", textTransform: "uppercase",
                color: T.textMuted, fontWeight: 400, textDecoration: "none",
              }}
            >
              {UI[lang].footer.legal}
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    /* ── Layout tablette : 3 colonnes, honeycomb élargi ── */
    return (
      <div style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "14% 72% 14%",
        overflow: "hidden",
      }}>
        {/* Col gauche : identité compacte */}
        <div style={{
          display: "flex", flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px 16px 40px 24px",
        }}>
          <div style={anim(0.2)}>
            <span style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(8px, 0.65vw, 10px)",
              letterSpacing: "0.4em", textTransform: "uppercase",
              color: T.accent, fontWeight: 400,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ width: 18, height: 1, background: T.accent, display: "inline-block", flexShrink: 0 }} />
              {th.role}
            </span>
            <div style={{ ...anim(0.28), marginTop: 10 }}>
              <h1 style={{ margin: 0, lineHeight: 0.95 }}>
                <span style={{ display: "block", fontFamily: "'Work Sans', sans-serif", fontWeight: 100, fontSize: "clamp(22px, 2.4vw, 34px)", textTransform: "uppercase", letterSpacing: "0.11em", color: T.text }}>ANTHONIN</span>
                <span style={{ display: "block", fontFamily: "'Work Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.4vw, 34px)", textTransform: "uppercase", letterSpacing: "0.03em", color: T.accent }}>SAUTET</span>
              </h1>
            </div>
          </div>
          <div style={anim(0.5)}>
            <a
              href="/legal"
              onClick={(e) => { e.preventDefault(); onNavigate("/legal"); }}
              style={{
                fontFamily: "'Work Sans', sans-serif", fontSize: 10,
                letterSpacing: "0.34em", textTransform: "uppercase",
                color: T.textMuted, fontWeight: 400, textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = T.textMuted; }}
            >
              {UI[lang].footer.legal}
            </a>
          </div>
        </div>

        {/* Col centrale : honeycomb élargi */}
        <div style={{ ...anim(0.1), display: "flex", alignItems: "center", justifyContent: "center" }}>
          <HoneycombGrid projects={projects.filter(p => !p.parentId)} onNavigate={onNavigate} widthVw={68} showLabels={false} />
        </div>

        {/* Col droite : switches + liens */}
        <div style={{
          display: "flex", flexDirection: "column",
          justifyContent: "space-between", alignItems: "flex-end",
          padding: "36px 24px 40px 16px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end", ...anim(0.3) }}>
            <SwitchGroup label="Theme switcher">
              {[{ value: "light", icon: "☀️" }, { value: "dark", icon: "🌙" }].map(({ value, icon }) => (
                <SwitchBtn key={value} active={theme === value} onClick={() => { if (theme !== value) toggleTheme(); }}>
                  <span style={{ fontSize: 12, lineHeight: 1 }}>{icon}</span>
                </SwitchBtn>
              ))}
            </SwitchGroup>
            <SwitchGroup label="Language switcher">
              {["fr", "en"].map((l) => (
                <SwitchBtn key={l} active={lang === l} onClick={() => { if (lang !== l) toggleLang(); }}>
                  {l.toUpperCase()}
                </SwitchBtn>
              ))}
            </SwitchGroup>
          </div>
          <div style={{ ...anim(0.45), display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
            <a
              href={CV_URL}
              download
              style={{
                fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(13px, 1.4vw, 18px)",
                fontWeight: 100, letterSpacing: "0.26em", color: T.textMuted,
                textDecoration: "none", textTransform: "uppercase",
                display: "inline-flex", alignItems: "center", gap: 10,
                transition: "color .25s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = T.textMuted; }}
            >
              {th.cta4} <span style={{ display: "inline-flex" }}><DownloadIcon /></span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(13px, 1.4vw, 18px)",
                fontWeight: 100, letterSpacing: "0.26em", color: T.textMuted,
                textDecoration: "none", textTransform: "uppercase",
                display: "inline-flex", alignItems: "center", gap: 10,
                transition: "color .25s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = T.textMuted; }}
            >
              LinkedIn
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/about", { transition: { type: "about", label: th.parcours, rect: e.currentTarget.getBoundingClientRect() } });
              }}
              style={{
                fontFamily: "'Work Sans', sans-serif", fontSize: "clamp(14px, 1.5vw, 20px)",
                fontWeight: 800, letterSpacing: "-0.02em", color: T.text,
                textDecoration: "none", textTransform: "uppercase",
                display: "inline-flex", alignItems: "center", gap: 10,
                transition: "color .25s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = T.text; }}
            >
              {th.parcours}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ── Layout desktop : 3 colonnes 100vh ── */
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "24% 52% 24%",
        overflow: "hidden",
      }}
    >
      {/* ── Colonne gauche : identité ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "48px 32px 48px 48px",
        }}
      >
        {/* "Product Designer" — label premium */}
        <div style={anim(0.2)}>
          <span style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(9px, 0.68vw, 11px)",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: T.accent,
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}>
            <span style={{ width: 28, height: 1, background: T.accent, display: "inline-block", flexShrink: 0 }} />
            {th.role}
          </span>
        </div>

        {/* ANTHONIN SAUTET — contraste ultralight / ultrabold */}
        <div style={{ ...anim(0.32), marginTop: 14 }}>
          <h1 style={{ margin: 0, lineHeight: 0.95 }}>
            <span style={{
              display: "block",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 100,
              fontSize: "clamp(38px, 3.6vw, 58px)",
              textTransform: "uppercase",
              letterSpacing: "0.11em",
              color: T.text,
            }}>
              ANTHONIN
            </span>
            <span style={{
              display: "block",
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px, 3.6vw, 58px)",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              color: T.accent,
            }}>
              SAUTET
            </span>
          </h1>
        </div>

        {/* Mentions légales — bas de colonne */}
        <div style={{ ...anim(0.55), marginTop: "auto" }}>
          <a
            href="/legal"
            onClick={(e) => { e.preventDefault(); onNavigate("/legal"); }}
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: T.textMuted,
              fontWeight: 400,
              textDecoration: "none",
              transition: "color .25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = T.textMuted; }}
          >
            {UI[lang].footer.legal}
          </a>
        </div>
      </div>

      {/* ── Colonne centrale : grille hexagonale 2-3-2 ── */}
      <div style={{ ...anim(0.1), display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HoneycombGrid projects={projects.filter(p => !p.parentId)} onNavigate={onNavigate} />
      </div>

      {/* ── Colonne droite : switches + CV + Mon Parcours ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "40px 48px 48px 32px",
        }}
      >
        {/* Switches en haut, alignés à droite */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end", ...anim(0.3) }}>
          <SwitchGroup label="Theme switcher">
            {[
              { value: "light", icon: "☀️", label: "Mode clair" },
              { value: "dark",  icon: "🌙", label: "Mode sombre" },
            ].map(({ value, icon, label }) => (
              <SwitchBtn
                key={value}
                active={theme === value}
                onClick={() => { if (theme !== value) toggleTheme(); }}
                ariaLabel={label}
              >
                <span style={{ fontSize: 13, lineHeight: 1 }}>{icon}</span>
              </SwitchBtn>
            ))}
          </SwitchGroup>

          <SwitchGroup label="Language switcher">
            {["fr", "en"].map((optionLang) => (
              <SwitchBtn
                key={optionLang}
                active={lang === optionLang}
                onClick={() => { if (lang !== optionLang) toggleLang(); }}
                ariaLabel={optionLang === "fr" ? "Français" : "English"}
              >
                {optionLang.toUpperCase()}
              </SwitchBtn>
            ))}
          </SwitchGroup>
        </div>

        {/* CV + LinkedIn + Mon Parcours en bas, alignés à droite */}
        <div style={{ ...anim(0.45), display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
          {/* CV */}
          <a
            href={CV_URL}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 24,
              fontWeight: 100,
              letterSpacing: "0.28em",
              color: T.textMuted,
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color .25s ease, gap .25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; e.currentTarget.style.gap = "16px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = T.textMuted; e.currentTarget.style.gap = "12px"; }}
          >
            {th.cta4}
            <span style={{ display: "inline-flex", alignItems: "center" }}><DownloadIcon /></span>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 24,
              fontWeight: 100,
              letterSpacing: "0.28em",
              color: T.textMuted,
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color .25s ease, gap .25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; e.currentTarget.style.gap = "16px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = T.textMuted; e.currentTarget.style.gap = "12px"; }}
          >
            LinkedIn
            {/* Icône "ouvre dans un nouvel onglet" */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {/* Mon Parcours — display bold */}
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              const rect = e.currentTarget.getBoundingClientRect();
              onNavigate("/about", {
                transition: {
                  type: "about",
                  label: th.parcours,
                  rect: { left: rect.left, top: rect.top, width: rect.width, height: rect.height },
                },
              });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(20px, 2.1vw, 32px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: T.text,
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color .25s ease, gap .25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; e.currentTarget.style.gap = "20px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = T.text; e.currentTarget.style.gap = "14px"; }}
          >
            {th.parcours}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function RouteTransition({ transition }) {
  const { tokens: T, theme } = useTheme();
  if (!transition) return null;

  if (transition.type === "about") {
    const { phase, rect, label } = transition;
    const expanded = phase !== "idle";
    const faded = phase === "fade";
    const curve = "cubic-bezier(.52,0,.24,1)";

    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: expanded ? 0 : rect.left,
          top: expanded ? 0 : rect.top,
          width: expanded ? "100vw" : rect.width,
          height: expanded ? "100vh" : rect.height,
          borderRadius: expanded ? 0 : 999,
          background: theme === "dark"
            ? "linear-gradient(180deg, rgba(17,24,39,0.97) 0%, rgba(10,15,28,0.98) 100%)"
            : "linear-gradient(180deg, rgba(250,250,248,0.96) 0%, rgba(245,243,239,0.98) 100%)",
          zIndex: 300,
          pointerEvents: "none",
          overflow: "hidden",
          opacity: faded ? 0 : 1,
          transform: faded ? "scale(1.008)" : "scale(1)",
          transition: [
            `left .72s ${curve}`,
            `top .72s ${curve}`,
            `width .72s ${curve}`,
            `height .72s ${curve}`,
            `border-radius .72s ${curve}`,
            "opacity .5s ease-out",
            "transform .5s ease-out",
          ].join(", "),
          boxShadow: expanded
            ? "0 26px 80px rgba(51,51,51,0.1)"
            : "0 12px 36px rgba(51,51,51,0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: BLUEPRINT_AURA_BG,
            opacity: expanded ? 0.34 : 0.18,
            maskImage: "radial-gradient(circle at 78% 18%, black 0%, black 28%, transparent 68%)",
            WebkitMaskImage: "radial-gradient(circle at 78% 18%, black 0%, black 28%, transparent 68%)",
            transition: `opacity .6s ${curve}`,
          }}
        />
        <MotifSVG
          size={432}
          color="#D9D4CC"
          opacity={expanded ? 0.24 : 0.12}
          outerOpacity={expanded ? 0.14 : 0.08}
          style={{
            position: "absolute",
            top: 92,
            right: -108,
            filter:
              "drop-shadow(1px 1px 0 rgba(255,255,255,0.82)) drop-shadow(-1px -1px 0 rgba(176,168,156,0.16))",
            mixBlendMode: "multiply",
            transition: `opacity .6s ${curve}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0) 22%, rgba(217,212,204,0.05) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: T.text,
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(28px, 5vw, 54px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
            opacity: faded ? 0 : expanded ? 1 : 0,
            transition: `opacity .4s ease-in-out ${expanded && !faded ? "0.2s" : "0s"}`,
          }}
        >
          {label}
        </div>
      </div>
    );
  }

  if (transition.type === "back-project") {
    const { phase, colors } = transition;
    const closing = phase === "shrink";
    const curve = "cubic-bezier(.36,0,.2,1)";

    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
          zIndex: 300,
          pointerEvents: "none",
          overflow: "hidden",
          opacity: closing ? 0 : 1,
          transform: closing ? "scale(0.88)" : "scale(1)",
          transition: [
            `opacity .55s ease-out`,
            `transform .65s ${curve}`,
          ].join(", "),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: HEX_MESH_BG,
            backgroundRepeat: "repeat",
            opacity: closing ? 0.2 : 0.58,
            mixBlendMode: "screen",
            maskImage: "radial-gradient(circle at center, black 74%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 74%, transparent 100%)",
            transition: `opacity .55s ease-out`,
          }}
        />
      </div>
    );
  }

  const { phase, rect, colors, title, subtitle, tasks = [] } = transition;
  const expanded = phase !== "idle";
  const faded = phase === "fade";
  const curve = "cubic-bezier(.52,0,.24,1)";

  const contentOpacity = (delay) => ({
    opacity: faded ? 0 : expanded ? 1 : 0,
    transition: `opacity .38s ease-in-out ${faded ? "0s" : `${delay}s`}`,
  });

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: expanded ? 0 : rect.left,
        top: expanded ? 0 : rect.top,
        width: expanded ? "100vw" : rect.width,
        height: expanded ? "100vh" : rect.height,
        borderRadius: expanded ? 0 : T.radius,
        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
        zIndex: 300,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: faded ? 0 : 1,
        transform: faded ? "scale(1.008)" : "scale(1)",
        transition: [
          `left .90s ${curve}`,
          `top .90s ${curve}`,
          `width .90s ${curve}`,
          `height .90s ${curve}`,
          `border-radius .90s ${curve}`,
          "opacity .52s ease-out",
          "transform .52s ease-out",
        ].join(", "),
        boxShadow: expanded
          ? "0 32px 80px rgba(0,0,0,0.18)"
          : "0 20px 50px rgba(26,75,92,0.16)",
      }}
    >
      {/* Grille décorative */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: HEX_MESH_BG,
          backgroundRepeat: "repeat",
          opacity: expanded ? 0.58 : 0.32,
          mixBlendMode: "screen",
          maskImage: "radial-gradient(circle at center, black 74%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 74%, transparent 100%)",
          transition: `opacity .6s ${curve}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 28%, rgba(10,20,24,0.1) 100%)",
        }}
      />

      {/* Contenu centré — positionné uniquement par transform, pas de left/top animés */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          textAlign: "center",
        }}
      >
        {/* Titre */}
        <div
          style={{
            color: "rgba(255,255,255,0.88)",
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
            ...contentOpacity(0.22),
          }}
        >
          {title}
        </div>

        {/* Sous-titre */}
        {subtitle && (
          <div
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(14px, 1.8vw, 20px)",
              fontWeight: 300,
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              ...contentOpacity(0.34),
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Gélules */}
        {tasks.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
              gap: 7,
              marginTop: 4,
            }}
          >
            {tasks.map((task, i) => (
              <span
                key={task}
                style={{
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.11)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.88)",
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  ...contentOpacity(0.44 + i * 0.06),
                }}
              >
                {task}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BackToTopButton({ visible }) {
  const { lang } = useLanguage();
  const t = UI[lang].common;

  return (
    <button
      type="button"
      aria-label={t.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: 32,
        bottom: 32,
        zIndex: 90,
        width: 52,
        height: 52,
        borderRadius: 999,
        border: "1px solid transparent",
        background: `
          linear-gradient(180deg, rgba(26,75,92,0.94) 0%, rgba(26,75,92,0.84) 100%) padding-box,
          linear-gradient(to right, transparent, rgba(255,255,255,0.18) 14%, rgba(255,255,255,0.18) 86%, transparent) border-box
        `,
        color: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "0 8px 18px rgba(26,75,92,0.16), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px) saturate(135%)",
        WebkitBackdropFilter: "blur(12px) saturate(135%)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity .25s ease, transform .25s ease",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [currentPath, setCurrentPath] = useState(window.location.pathname || "/");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [routeTransition, setRouteTransition] = useState(null);
  const { isMobile, isTablet } = useBreakpoint();
  const { lang } = useLanguage();
  const { tokens: T } = useTheme();
  const { projects } = useContent();
  const transitionTimers = useRef([]);
  const lastProjectEntry = useRef(null);

  useEffect(() => {
    return () => {
      transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
      const hash = window.location.hash;

      if (!hash) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      window.requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        }
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath !== "/") {
      setActiveSection("");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25 }
    );

    ["hero", "projects", "experience"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPath]);

  useEffect(() => {
    const enabled = !isMobile && (currentPath === "/" || currentPath.startsWith("/projects/"));

    if (!enabled) {
      setShowBackToTop(false);
      return undefined;
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath, isMobile]);

  useEffect(() => {
    if (currentPath === "/about") {
      document.title = lang === "en" ? "About | Anthonin Sautet" : "À propos | Anthonin Sautet";
    } else if (currentPath === "/legal") {
      document.title = lang === "en" ? "Legal notice | Anthonin Sautet" : "Mentions légales | Anthonin Sautet";
    } else if (currentPath.startsWith("/projects/")) {
      const id = currentPath.replace("/projects/", "");
      const project = projects.find((item) => item.id === id);
      document.title = project ? `${project.title} | Anthonin Sautet` : "Anthonin Sautet";
    } else {
      document.title = "Anthonin Sautet";
    }
  }, [currentPath, lang, projects]);

  const applyNavigation = (path) => {
    const [pathname, hash = ""] = path.split("#");
    const normalizedPath = pathname || "/";
    const nextUrl = hash ? `${normalizedPath}#${hash}` : normalizedPath;
    const currentUrl = `${currentPath}${window.location.hash}`;

    if (nextUrl === currentUrl) return;

    window.history.pushState({}, "", nextUrl);
    setCurrentPath(normalizedPath);

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });
  };

  const navigate = (path, options = {}) => {
    const transition = options.transition;
    const shouldAnimateProjectRoute =
      transition &&
      transition.type === "project" &&
      !isMobile &&
      currentPath === "/" &&
      path.startsWith("/projects/");
    const shouldAnimateAboutRoute =
      transition &&
      transition.type === "about" &&
      !isMobile &&
      currentPath === "/" &&
      path === "/about";
    const shouldAnimateBackProject =
      transition?.type === "back-project" &&
      !isMobile &&
      currentPath.startsWith("/projects/") &&
      path === "/";

    if (!shouldAnimateProjectRoute && !shouldAnimateAboutRoute && !shouldAnimateBackProject) {
      applyNavigation(path);
      return;
    }

    if (shouldAnimateAboutRoute) {
      transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
      transitionTimers.current = [];

      setRouteTransition({
        type: "about",
        phase: "idle",
        rect: transition.rect,
        label: transition.label,
      });

      // expand
      transitionTimers.current.push(
        window.setTimeout(() => {
          setRouteTransition((current) => (current ? { ...current, phase: "expand" } : current));
        }, 20)
      );

      // navigate pendant l'expansion
      transitionTimers.current.push(
        window.setTimeout(() => {
          applyNavigation(path);
        }, 380)
      );

      // fade 80ms après la fin de l'expansion
      transitionTimers.current.push(
        window.setTimeout(() => {
          setRouteTransition((current) => (current ? { ...current, phase: "fade" } : current));
        }, 820)
      );

      // cleanup après le fade (.5s)
      transitionTimers.current.push(
        window.setTimeout(() => {
          setRouteTransition(null);
        }, 1340)
      );

      return;
    }

    if (shouldAnimateBackProject) {
      const entry = lastProjectEntry.current;
      const projectId = currentPath.replace("/projects/", "");
      const colors = entry?.colors || PROJECT_COLORS[projectId] || { from: T.accent, to: T.accentMid };

      transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
      transitionTimers.current = [];

      setRouteTransition({ type: "back-project", phase: "cover", colors });

      // Naviguer immédiatement (l'overlay couvre tout)
      transitionTimers.current.push(
        window.setTimeout(() => applyNavigation(path), 20)
      );

      // Déclencher le scale-down + fade
      transitionTimers.current.push(
        window.setTimeout(() => {
          setRouteTransition((curr) => (curr ? { ...curr, phase: "shrink" } : curr));
        }, 120)
      );

      // Cleanup après la fin de l'animation (~650ms)
      transitionTimers.current.push(
        window.setTimeout(() => setRouteTransition(null), 800)
      );

      return;
    }

    const colors = PROJECT_COLORS[transition.projectId] || { from: T.accent, to: T.accentMid };
    lastProjectEntry.current = { rect: transition.rect, projectId: transition.projectId, colors };

    transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
    transitionTimers.current = [];

    setRouteTransition({
      type: "project",
      phase: "idle",
      rect: transition.rect,
      title: transition.title,
      subtitle: transition.subtitle,
      tasks: transition.tasks,
      colors,
    });

    // expand: overlay commence à s'étendre (~900ms)
    transitionTimers.current.push(
      window.setTimeout(() => {
        setRouteTransition((current) => (current ? { ...current, phase: "expand" } : current));
      }, 20)
    );

    // navigate: l'overlay couvre ~65% de l'écran à ce stade
    transitionTimers.current.push(
      window.setTimeout(() => {
        applyNavigation(path);
      }, 560)
    );

    // fade: 120ms après la fin de l'expansion (t=20+900=920ms)
    transitionTimers.current.push(
      window.setTimeout(() => {
        setRouteTransition((current) => (current ? { ...current, phase: "fade" } : current));
      }, 1040)
    );

    // cleanup: après le fade (.52s)
    transitionTimers.current.push(
      window.setTimeout(() => {
        setRouteTransition(null);
      }, 1600)
    );
  };

  const isDesktopHome = currentPath === "/";

  return (
    <>
      {!isDesktopHome && <ProgressBar />}
      {!isDesktopHome && (
        <Navbar
          activeSection={activeSection}
          currentPath={currentPath}
          onNavigate={navigate}
        />
      )}
      {currentPath === "/about" ? (
        <>
          <About />
          <Experience />
          <GallerySection />
        </>
      ) : currentPath === "/legal" ? (
        <LegalPage />
      ) : currentPath.startsWith("/projects/") ? (
        <ProjectPage
          projectId={currentPath.replace("/projects/", "")}
          onNavigate={navigate}
        />
      ) : (
        <HomePage onNavigate={navigate} />
      )}
      <RouteTransition transition={routeTransition} />
      <BackToTopButton visible={showBackToTop} />
    </>
  );
}
