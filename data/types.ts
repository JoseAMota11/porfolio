export type Localized = { en: string; es: string };

export type Experience = {
  id: string;
  company: string;
  role: Localized;
  start: string; // YYYY-MM
  end: string | null; // null = current
  location: string;
  mode: Localized;
  highlights: Localized[];
};

export type Project = {
  id: string;
  name: Localized;
  description: Localized;
  stack: string[];
  websiteUrl: string;
  repoUrl: string;
};

export type SkillGroup = {
  id: string;
  title: Localized;
  items: string[];
};