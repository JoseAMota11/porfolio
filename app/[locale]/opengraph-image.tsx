import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { profile } from "../../data/profile";
import { routing } from "../../i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ locale: string }> };

export async function generateImageMetadata({ params }: Props) {
  const { locale } = await params;
  // Next.js also enumerates image IDs before parent route params are available.
  if (!locale) return [{ id: "og", size, contentType }];
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "metadata" });
  return [{
    id: "og",
    alt: t("openGraphAlt", { name: profile.name, role: profile.title[locale] }),
    size,
    contentType,
  }];
}

export default async function Image({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: "80px", background: "#0a0a0a", color: "#f2f2f2" }}>
      <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
        {profile.name}<span style={{ color: "#c9f24d" }}>.</span>
      </div>
      <div style={{ color: "#c9f24d", fontSize: 38, marginTop: 20 }}>
        {profile.title[locale]}
      </div>
      <div style={{ color: "#f2f2f2", fontSize: 36, lineHeight: 1.4, marginTop: 36, maxWidth: 950 }}>
        {profile.tagline[locale]}
      </div>
    </div>,
    size,
  );
}
