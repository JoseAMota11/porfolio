import { getTranslations } from "next-intl/server";
import { profile } from "../data/profile";
import { Container } from "./Container";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const [t, year] = await Promise.all([getTranslations("footer"), getYear()]);

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <p>{t("rights", { year, name: profile.name || "TODO:" })}</p>
          <a href="#top" className="underline underline-offset-4 hover:text-accent">
            {t("backToTop")}
          </a>
        </div>
      </Container>
    </footer>
  );
}
