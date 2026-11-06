import { getLocale, getTranslations } from "next-intl/server";
import { profile } from "../data/profile";
import { Container } from "./Container";
import { CvLink } from "./CvLink";

export async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations("hero");
  const tCommon = await getTranslations("common");

  return (
    <section
      aria-labelledby="hero-title"
      className="py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <p className="text-sm font-medium tracking-wide text-accent sm:text-base">
          {profile.title[locale]}
        </p>

        <h1
          id="hero-title"
          className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          {profile.tagline[locale]}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground"
          >
            {t("viewProjects")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {t("contactMe")}
          </a>
          <CvLink locale={locale} label={tCommon("downloadCv")} />
        </div>
      </Container>
    </section>
  );
}
