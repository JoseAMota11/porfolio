import { getTranslations } from "next-intl/server";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export async function Projects() {
  const t = await getTranslations("projects");

  return (
    <Section id="projects" title={t("title")}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
