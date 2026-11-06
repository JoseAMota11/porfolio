import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("a11y");

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
    >
      {t("skipToContent")}
    </a>
  );
}
