import { getLocale, getTranslations } from "next-intl/server";
import { profile } from "../data/profile";
import { Section } from "./Section";

export async function About() {
  const locale = await getLocale();
  const t = await getTranslations("about");
  const { education } = profile;

  return (
    <Section id="about" title={t("title")}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {profile.summary[locale]}
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3
              id="about-languages-title"
              className="text-sm font-semibold uppercase tracking-widest text-accent"
            >
              {t("languagesTitle")}
            </h3>
            <ul
              aria-labelledby="about-languages-title"
              className="mt-4 space-y-2"
            >
              {profile.languages.map((language) => (
                <li
                  key={language.name.en}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-2 text-sm last:border-0 last:pb-0"
                >
                  <span>{language.name[locale]}</span>
                  <span className="text-muted">{language.level[locale]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              id="about-education-title"
              className="text-sm font-semibold uppercase tracking-widest text-accent"
            >
              {t("educationTitle")}
            </h3>
            <ul
              aria-labelledby="about-education-title"
              className="mt-4 space-y-2"
            >
              <li className="border-b border-border pb-2 text-sm last:border-0 last:pb-0">
                <p>{education.degree[locale]}</p>
                <p className="mt-1 text-muted">{education.institution}</p>
                <p className="mt-1 text-xs text-muted">
                  {education.start} – {education.end}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
