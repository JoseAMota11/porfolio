import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    title: { en: "Frontend", es: "Frontend" },
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS", "Bootstrap", "Ant Design", "JSF & PrimeFaces", "Angular"],
  },
  {
    id: "backend",
    title: { en: "Backend & Databases", es: "Backend y Bases de Datos" },
    items: ["Node.js", "Express.js", "PHP", "Java", "C# & .NET", "Python", "SQL", "Oracle APEX"],
  },
  {
    id: "tools",
    title: { en: "Tools & Methodologies", es: "Herramientas y Metodologías" },
    items: ["Git", "GitHub", "GitLab", "Figma", "Zustand"],
  },
  {
    id: "ai",
    title: { en: "AI & Productivity Tools", es: "Herramientas de IA y Productividad" },
    items: ["Cursor", "Claude Code", "GitHub Copilot", "OpenCode", "Codex", "ChatGPT", "Perplexity", "Gemini"],
  },
];
