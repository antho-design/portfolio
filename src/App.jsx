import { useState, useEffect } from "react";
import { tokens as T } from "./styles/tokens";
import { UI } from "./data/translations";
import { useBreakpoint } from "./hooks/useBreakpoint";
import { useContent } from "./hooks/useContent";
import { useLanguage } from "./context/LanguageContext";
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
      <Hero />

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
  const { isMobile } = useBreakpoint();
  const { lang } = useLanguage();
  const { projects } = useContent();

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

  const navigate = (path) => {
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
      <BackToTopButton visible={showBackToTop} />
      <Footer onNavigate={navigate} />
    </>
  );
}
