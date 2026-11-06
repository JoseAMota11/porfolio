import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { SkipLink } from "../../components/SkipLink";
import { profile } from "../../data/profile";
import { routing } from "../../i18n/routing";
import { siteUrl } from "../../lib/site";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("defaultTitle", { name: profile.name, role: profile.title[locale] });
  const description = profile.summary[locale].length > 160
    ? profile.tagline[locale]
    : profile.summary[locale];

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      locale,
      url: `/${locale}`,
      title,
      description,
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <SkipLink />
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
