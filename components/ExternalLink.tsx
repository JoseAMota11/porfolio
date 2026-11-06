import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export async function ExternalLink({ href, children }: ExternalLinkProps) {
  const t = await getTranslations("a11y");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-accent underline underline-offset-4 hover:no-underline"
    >
      {children}
      <span className="sr-only"> ({t("externalLink")})</span>
    </a>
  );
}
