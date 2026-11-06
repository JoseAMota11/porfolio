import { routing } from "../i18n/routing";

type Locale = (typeof routing.locales)[number];

type CvLinkProps = {
  locale: Locale;
  label: string;
};

const cvFiles: Record<Locale, string> = {
  en: "/CV_JoseMota_Developer.pdf",
  es: "/CV_JoseMota_Desarrollador.pdf",
};

export function CvLink({ locale, label }: CvLinkProps) {
  return (
    <a
      href={cvFiles[locale]}
      download
      className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {label}
    </a>
  );
}
