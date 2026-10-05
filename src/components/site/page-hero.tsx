import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow } from "../site/ui";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  dark = true,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
  breadcrumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative overflow-hidden ${dark ? "bg-ink text-white" : "bg-surface text-foreground"}`}
    >
      {dark && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
          <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        {breadcrumbs && (
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-white/50">
            {breadcrumbs.map((b, i) => (
              <span key={b.label} className="flex items-center gap-1.5">
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className={dark ? "text-white/80" : "text-foreground"}>{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
              </span>
            ))}
          </nav>
        )}
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <h1
          className={`mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl ${dark ? "text-white" : "text-foreground"}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function CTAButtons({
  primaryTo = "/contact",
  primaryLabel = "Book a Free Consultation",
  secondaryTo,
  secondaryLabel,
}: {
  primaryTo?: string;
  primaryLabel?: string;
  secondaryTo?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        to={primaryTo}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110"
      >
        {primaryLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
      {secondaryTo && secondaryLabel && (
        <Link
          to={secondaryTo}
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
}
