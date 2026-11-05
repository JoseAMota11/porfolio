import type { Localized } from "./types";

export const profile = {
  name: "José Mota",
  title: {
    en: "Software Developer",
    es: "Desarrollador de Software",
  } satisfies Localized,
  summary: {
    en: "Software developer with 3 years of experience building modern, fast, and efficient web interfaces. Proficient in React.js, Next.js, TypeScript, and Tailwind CSS. Strong background in routing, authentication, accessibility, testing, and clean architecture principles such as SOLID and design patterns. Focused on user experience and high-performance architectures.",
    es: "Desarrollador de software con 3 años de experiencia creando interfaces web modernas, rápidas y eficientes. Dominio de React.js, Next.js, TypeScript y Tailwind CSS. Sólida base en enrutamiento, autenticación, accesibilidad, pruebas y principios de arquitectura limpia como SOLID y patrones de diseño. Enfocado en la experiencia de usuario y en arquitecturas de alto rendimiento.",
  } satisfies Localized,
  email: "jose.a.mota11@gmail.com",
  github: "TODO: GitHub URL",
  linkedin: "TODO: LinkedIn URL",
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
