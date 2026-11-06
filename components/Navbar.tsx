import { getTranslations } from "next-intl/server";
import { profile } from "../data/profile";
import { Container } from "./Container";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav, type NavItem } from "./MobileNav";

export async function Navbar() {
  const t = await getTranslations("nav");
  const tA11y = await getTranslations("a11y");

  const items: NavItem[] = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#main"
          className="rounded-md text-lg font-semibold tracking-tight"
        >
          {profile.name}
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label={tA11y("mainNavigation")} className="hidden md:block">
            <ul className="flex items-center gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LocaleSwitcher label={tA11y("switchLanguage")} />

          <MobileNav
            items={items}
            label={tA11y("mainNavigation")}
            openLabel={tA11y("openMenu")}
            closeLabel={tA11y("closeMenu")}
          />
        </div>
      </Container>
    </header>
  );
}
