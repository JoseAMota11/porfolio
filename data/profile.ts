import type { Localized } from "./types";

export const profile = {
  name: "José Mota",
  title: {
    en: "Software Developer",
    es: "Desarrollador de Software",
  } satisfies Localized,
  tagline: {
    en: "I build fast, accessible web interfaces with React and Next.js.",
    es: "Construyo interfaces web rápidas y accesibles con React y Next.js.",
  } satisfies Localized,
  summary: {
    en: "Frontend developer building web interfaces with React, Next.js, TypeScript, and Tailwind CSS. Focused on accessibility, performance, and clean, maintainable code.",
    es: "Desarrollador frontend que crea interfaces web con React, Next.js, TypeScript y Tailwind CSS. Enfocado en accesibilidad, rendimiento y código limpio y mantenible.",
  } satisfies Localized,
  email: "jose.a.mota11@gmail.com",
  github: "https://github.com/JoseAMota11",
  linkedin: "https://www.linkedin.com/in/josemota11/",
  languages: [
    { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
    { name: { en: "English", es: "Inglés" }, level: { en: "C1", es: "C1" } },
  ],
  education: {
    degree: {
      en: "Software Development Technologist",
      es: "Tecnólogo en Desarrollo de Software",
    } satisfies Localized,
    institution: "Instituto Tecnológico de las Américas (ITLA)",
    start: "2019",
    end: "2023",
  },
};
