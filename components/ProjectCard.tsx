import { getLocale, getTranslations } from "next-intl/server";
import type { Project } from "../data/types";
import { ExternalLink } from "./ExternalLink";

export async function ProjectCard({ project }: { project: Project }) {
  const [locale, t] = await Promise.all([
    getLocale(),
    getTranslations("projects"),
  ]);

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      <h3 className="text-xl font-semibold">{project.name[locale] || "TODO: project name"}</h3>
      <p className="mt-4 leading-relaxed text-muted">
        {project.description[locale] || "TODO: project description"}
      </p>
      <div className="mt-6">
        <p className="text-sm font-semibold">{t("stackLabel")}</p>
        {project.stack.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2" aria-label={t("stackLabel")}>
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-border px-3 py-1 text-sm">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3">TODO: project stack</p>
        )}
      </div>
      <div className="mt-auto flex flex-wrap gap-5 pt-6 text-sm">
        {project.websiteUrl && (
          <ExternalLink href={project.websiteUrl}>{t("viewDemo")}</ExternalLink>
        )}
        {project.repoUrl && (
          <ExternalLink href={project.repoUrl}>{t("viewRepo")}</ExternalLink>
        )}
      </div>
    </article>
  );
}
