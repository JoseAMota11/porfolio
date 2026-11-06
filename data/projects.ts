import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "personal-library",
    name: { en: "Personal Library Management System", es: "Sistema de Gestión de Biblioteca Personal" },
    description: {
      en: "Full-stack app to manage a personal book library: books, reviews and ratings, search and filters, favorites, and CSV export. REST API with JWT authentication.",
      es: "Aplicación full-stack para gestionar una biblioteca personal: libros, reseñas y valoraciones, búsqueda y filtros, favoritos y exportación a CSV. API REST con autenticación JWT.",
    },
    stack: ["Next.js", "TypeScript", "Ant Design", "Tailwind CSS", "React Hook Form", "Zod", "Express", "SQLite", "JWT"],
    websiteUrl: "https://read-group-challenge.vercel.app",
    repoUrl: "https://github.com/JoseAMota11/read-group-challenge",
  },
  {
    id: "voter-eligibility",
    name: { en: "Voter Eligibility Verification System", es: "Sistema de Verificación de Elegibilidad para Votar" },
    description: {
      en: "Full-stack CRUD app that registers people and checks whether each one can vote, based on Dominican nationality and legal age. Includes filters by field.",
      es: "Aplicación CRUD full-stack que registra personas y determina si cada una puede votar, según la nacionalidad dominicana y la mayoría de edad. Incluye filtros por campo.",
    },
    stack: ["React", "TypeScript", "Vite", "Ant Design", "Tailwind CSS", "Express", "SQLite", "Zod"],
    websiteUrl: "https://goetrack-project.vercel.app",
    repoUrl: "https://github.com/JoseAMota11/goetrack-project",
  },
  {
    id: "agency-landing",
    name: { en: "Agency Landing Page", es: "Landing Page de Agencia" },
    description: {
      en: "Landing page for EpixeLab, a fictional startup, with animations built with Motion.",
      es: "Landing page de EpixeLab, una startup ficticia, con animaciones hechas con Motion.",
    },
    stack: ["React", "TypeScript", "Vite", "Motion"],
    websiteUrl: "https://agency-landing-page-sable-ten.vercel.app",
    repoUrl: "https://github.com/JoseAMota11/agency-landing-page",
  },
];
