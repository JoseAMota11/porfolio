import type { Metadata } from "next";
import Link from "next/link";
import messages from "../messages/en.json";
import "./globals.css";

// TODO: localize once the 404 page can resolve a locale.
const t = messages.notFound;

export const metadata: Metadata = {
  title: `${t.code} — ${t.title}`,
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <main className="flex flex-1 flex-col items-start justify-center gap-4 px-6 py-24">
          <p className="text-sm font-medium">{t.code}</p>
          <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
          <p>{t.description}</p>
          <Link className="font-medium underline" href="/en">
            {t.backHome}
          </Link>
        </main>
      </body>
    </html>
  );
}
