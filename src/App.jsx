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
    padding: "8px 16px",
    borderRadius: 999,
    background: "#F1EFEB",
    border: `1px solid ${T.border}`,
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: T.textMuted,
    transition: "all .25s ease",
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
                        background: isActive ? T.accent : pillStyle.background,
                        border: `1px solid ${isActive ? T.accent : T.border}`,
                        color: isActive ? "#fff" : T.textMuted,
                        cursor: "pointer",
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

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [currentPath, setCurrentPath] = useState(window.location.pathname || "/");
  const { lang } = useLanguage();
  const { projects } = useContent();

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
      window.scrollTo({ top: 0, behavior: "auto" });
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
    if (currentPath === "/about") {
      document.title = lang === "en" ? "About | Anthonin Sautet" : "À propos | Anthonin Sautet";
    } else if (currentPath.startsWith("/projects/")) {
      const id = currentPath.replace("/projects/", "");
      const project = projects.find((item) => item.id === id);
      document.title = project ? `${project.title} | Anthonin Sautet` : "Anthonin Sautet";
    } else {
      document.title = "Anthonin Sautet";
    }
  }, [currentPath, lang, projects]);

  const navigate = (path) => {
    if (path === currentPath) return;
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "auto" });
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
      ) : currentPath.startsWith("/projects/") ? (
        <ProjectPage
          projectId={currentPath.replace("/projects/", "")}
          onNavigate={navigate}
        />
      ) : (
        <HomePage onNavigate={navigate} />
      )}
      <Footer />
    </>
  );
}
