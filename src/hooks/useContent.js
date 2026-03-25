import { useLanguage } from "../context/LanguageContext";
import {
  PROJECTS,
  PROJECTS_EN,
  EXPERIENCES,
  EXPERIENCES_EN,
  PROJECT_DETAILS,
  PROJECT_DETAILS_EN,
  SKILLS,
  SKILLS_EN,
} from "../data/content";

export function useContent() {
  const { lang } = useLanguage();
  return {
    projects: lang === "en" ? PROJECTS_EN : PROJECTS,
    experiences: lang === "en" ? EXPERIENCES_EN : EXPERIENCES,
    projectDetails: lang === "en" ? PROJECT_DETAILS_EN : PROJECT_DETAILS,
    skills: lang === "en" ? SKILLS_EN : SKILLS,
  };
}
