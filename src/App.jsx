import { useState, useEffect, useRef } from "react";
import { tokens as T } from "./styles/tokens";
import { UI } from "./data/translations";
import { useBreakpoint } from "./hooks/useBreakpoint";
import { useContent } from "./hooks/useContent";
import { useLanguage } from "./context/LanguageContext";
import { BLUEPRINT_AURA_BG, BLUEPRINT_GRID_BG, PROJECT_COLORS } from "./data/constants";
import {
  ProgressBar,
  Reveal,
  SectionLabel,
  SectionTitle,
} from "./components/UI";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
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

function HomePage({ onNavigate }) {
  const { isMobile } = useBreakpoint();
  const { projects, skills } = useContent();
  const { lang } = useLanguage();
  const t = UI[lang].projects;
  const [selectedFilter, setSelectedFilter] = useState(t.all);

  // Reset filter when language changes
  useEffect(() => {
    setSelectedFilter(UI[lang].projects.all);
  }, [lang]);

  const availableFilters = skills.filter((skill) =>
    projects.some((project) => projectMatchesFilter(project, skill, t.all))
  );
  const visibleProjects = isMobile
    ? projects
    : projects.filter((project) => projectMatchesFilter(project, selectedFilter, t.all));

  const pillStyle = {
    padding: "9px 16px",
    borderRadius: 999,
    background: `
      linear-gradient(${T.surface}, ${T.surface}) padding-box,
      linear-gradient(to right, transparent, rgba(51,51,51,0.16) 14%, rgba(51,51,51,0.16) 86%, transparent) border-box
    `,
    border: "1px solid transparent",
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.05em",
    color: T.textMuted,
    transition: "all .25s ease",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    backdropFilter: "blur(8px) saturate(115%)",
    WebkitBackdropFilter: "blur(8px) saturate(115%)",
  };

  return (
    <>
      <Hero onNavigate={onNavigate} />

      <section
        id="projects"
        style={{
          padding: isMobile ? "40px 20px 60px" : "40px 40px 60px",
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Reveal>
          <div style={{ marginBottom: 36 }}>
            <SectionLabel>{t.label}</SectionLabel>
            <SectionTitle>{t.title}</SectionTitle>
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 28,
                }}
              >
                {[t.all, ...availableFilters].map((filter) => {
                  const isActive = selectedFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setSelectedFilter(filter)}
                      style={{
                        ...pillStyle,
                        background: isActive
                          ? `
                              linear-gradient(180deg, rgba(26,75,92,0.9) 0%, rgba(26,75,92,0.8) 100%) padding-box,
                              linear-gradient(to right, transparent, rgba(255,255,255,0.16) 14%, rgba(255,255,255,0.16) 86%, transparent) border-box
                            `
                          : pillStyle.background,
                        border: "1px solid transparent",
                        color: isActive ? "#fff" : T.textMuted,
                        cursor: "pointer",
                        boxShadow: isActive
                          ? "0 4px 12px rgba(26,75,92,0.12), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06)"
                          : pillStyle.boxShadow,
                        backdropFilter: isActive
                          ? "blur(10px) saturate(128%)"
                          : pillStyle.backdropFilter,
                        WebkitBackdropFilter: isActive
                          ? "blur(10px) saturate(128%)"
                          : pillStyle.WebkitBackdropFilter,
                      }}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? 16 : 20,
          }}
        >
          {visibleProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      <Experience />
    </>
  );
}

function RouteTransition({ transition }) {
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
          background:
            "linear-gradient(180deg, rgba(250,250,248,0.96) 0%, rgba(245,243,239,0.98) 100%)",
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
          backgroundImage: BLUEPRINT_GRID_BG,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0",
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
  const { isMobile } = useBreakpoint();
  const { lang } = useLanguage();
  const { projects } = useContent();
  const transitionTimers = useRef([]);

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

    if (!shouldAnimateProjectRoute && !shouldAnimateAboutRoute) {
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

    const colors = PROJECT_COLORS[transition.projectId] || { from: T.accent, to: T.accentMid };

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

  return (
    <>
      <ProgressBar />
      <Navbar
        activeSection={activeSection}
        currentPath={currentPath}
        onNavigate={navigate}
      />
      {currentPath === "/about" ? (
        <About />
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
      <Footer onNavigate={navigate} />
    </>
  );
}
