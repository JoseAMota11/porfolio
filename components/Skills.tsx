import { getLocale, getTranslations } from "next-intl/server";
import { skills } from "../data/skills";
import { Section } from "./Section";

export async function Skills() {
  const locale = await getLocale();
  const t = await getTranslations("skills");

  return (
    <Section id="skills" title={t("title")}>
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12">
        {skills.map((group) => {
          const headingId = `skills-${group.id}-title`;

          return (
            <div key={group.id}>
              <h3
                id={headingId}
                className="text-sm font-semibold uppercase tracking-widest text-accent"
              >
                {group.title[locale]}
              </h3>
              <ul
                aria-labelledby={headingId}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
