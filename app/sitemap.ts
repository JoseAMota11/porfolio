import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: new URL("/en", siteUrl).toString(),
    es: new URL("/es", siteUrl).toString(),
    "x-default": new URL("/en", siteUrl).toString(),
  };

  return routing.locales.map((locale) => ({
    url: new URL(`/${locale}`, siteUrl).toString(),
    alternates: { languages },
  }));
}
