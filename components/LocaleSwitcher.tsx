"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../i18n/navigation";
import { routing } from "../i18n/routing";

type LocaleSwitcherProps = {
  label: string;
};

export function LocaleSwitcher({ label }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // `usePathname` drops the query and hash, so keep them manually.
  // Without `scroll: false` the hash would jump the page back to the section.
  function switchTo(nextLocale: (typeof routing.locales)[number]) {
    const { search, hash } = window.location;
    router.replace(`${pathname}${search}${hash}`, {
      locale: nextLocale,
      scroll: false,
    });
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5"
    >
      {routing.locales.map((nextLocale) => {
        const isActive = nextLocale === locale;

        return (
          <button
            key={nextLocale}
            type="button"
            lang={nextLocale}
            aria-pressed={isActive}
            onClick={() => switchTo(nextLocale)}
            className={[
              "rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
              isActive
                ? "bg-accent text-background"
                : "text-muted hover:text-foreground",
            ].join(" ")}
          >
            {nextLocale}
          </button>
        );
      })}
    </div>
  );
}
