import { getTranslations } from "next-intl/server";
import { experience } from "../data/experience";
import { ExperienceItem } from "./ExperienceItem";
import { Section } from "./Section";

export async function Experience() {
  const t = await getTranslations("experience");

  return (
    <Section id="experience" title={t("title")}>
      {experience.length > 0 ? (
        <ul className="grid gap-6">
          {experience.map((item) => (
            <ExperienceItem key={item.id} experience={item} />
          ))}
        </ul>
      ) : (
        <p>TODO: experience</p>
      )}
    </Section>
  );
}
