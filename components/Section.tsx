import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={[
        "border-t border-border py-20 sm:py-24",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container>
        <h2
          id={headingId}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
