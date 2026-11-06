import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    title: { en: "Frontend", es: "Frontend" },
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS", "Zustand", "Bootstrap", "Ant Design", "JSF & PrimeFaces", "Angular"],
  },
  {
    id: "backend",
    title: { en: "Backend & Databases", es: "Backend y Bases de Datos" },
    items: ["Node.js", "Express.js", "PHP", "Java", "C# & .NET", "Python", "SQL", "Oracle APEX"],
  },
  {
    id: "tools",
    title: { en: "Tools", es: "Herramientas" },
    items: ["Git", "GitHub", "GitLab", "Figma"],
  },
  {
    id: "ai",
    title: { en: "AI Coding Tools", es: "Herramientas de IA para desarrollo" },
    items: ["Cursor", "Claude Code", "GitHub Copilot", "OpenCode", "Codex"],
  },
];
