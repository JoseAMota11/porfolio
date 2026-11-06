import { getFormatter, getLocale, getTranslations } from "next-intl/server";
import type { Experience } from "../data/types";

export async function ExperienceItem({ experience }: { experience: Experience }) {
  const [locale, format, t] = await Promise.all([
    getLocale(),
    getFormatter(),
    getTranslations("experience"),
  ]);
  const formatDate = (value: string) => {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(value)) return "TODO: experience date";

    return format.dateTime(new Date(`${value}-01T00:00:00Z`), {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  };
  return (
    <li className="rounded-lg border border-border bg-surface p-6">
      <article>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">{experience.role?.[locale] || "TODO: experience role"}</h3>
            <p className="mt-1">{experience.company || "TODO: experience company"}</p>
          </div>
          {experience.end === null && (
            <span className="rounded-full border border-border px-3 py-1 text-sm text-accent">{t("current")}</span>
          )}
        </div>
        <p className="mt-4 text-sm text-muted">
          <time dateTime={experience.start}>{formatDate(experience.start || "")}</time>
          {" – "}
          {experience.end === null ? t("present") : (
            <time dateTime={experience.end}>{formatDate(experience.end || "")}</time>
          )}
          {" · "}{experience.location || "TODO: experience location"}
          {" · "}{experience.mode?.[locale] || "TODO: experience mode"}
        </p>
        {experience.highlights.length > 0 ? (
          <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-muted">
            {experience.highlights.map((highlight, index) => (
              <li key={index}>{highlight?.[locale] || "TODO: experience highlight"}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-5">TODO: experience highlights</p>
        )}
        {experience.note && (
          <p className="mt-2 text-sm text-muted">
            {experience.note[locale] || "TODO: experience note"}
          </p>
        )}
      </article>
    </li>
  );
}
