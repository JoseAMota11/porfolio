import { getLocale, getTranslations } from "next-intl/server";
import { profile } from "../data/profile";
import { CvLink } from "./CvLink";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

export async function Contact() {
  const [locale, t, common] = await Promise.all([
    getLocale(),
    getTranslations("contact"),
    getTranslations("common"),
  ]);
  const links = [
    { label: t("email"), value: profile.email, email: true },
    { label: t("linkedin"), value: profile.linkedin, email: false },
    { label: t("github"), value: profile.github, email: false },
  ];

  return (
    <Section id="contact" title={t("title")}>
      <p className="text-muted">{t("intro")}</p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
        {links.map(({ label, value, email }) => (
          <li key={label}>
            {!value || value.includes("TODO:") ? (
              <span>{label}: {value || "TODO:"}</span>
            ) : email ? (
              <a href={`mailto:${value}`} className="font-medium text-accent underline underline-offset-4 hover:no-underline">
                {label}
              </a>
            ) : (
              <ExternalLink href={value}>{label}</ExternalLink>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <CvLink locale={locale} label={common("downloadCv")} />
      </div>
    </Section>
  );
}
