import { useState, useEffect } from "react";
import { tokens as T } from "./styles/tokens";
import { PROJECTS } from "./data/content";
import { ProgressBar, Reveal, SectionLabel, SectionTitle } from "./components/UI";
import MotifSVG from "./components/MotifSVG";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25 }
    );

    ["hero", "projects", "about", "experience"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProgressBar />
      <Navbar activeSection={activeSection} />
      <Hero />

      {/* Section Projets */}
      <section
        id="projects"
        style={{
          padding: "40px 40px 60px",
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Motifs en fond de section */}
        <MotifSVG
          size={500}
          color={T.accent}
          opacity={0.025}
          outerOpacity={0.4}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel>Portfolio</SectionLabel>
            <SectionTitle>Projets sélectionnés</SectionTitle>
          </div>
        </Reveal>

        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </section>

      <About />
      <Experience />
      <Footer />
    </>
  );
}
