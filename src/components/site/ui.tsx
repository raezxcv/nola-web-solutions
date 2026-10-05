import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

/** Full-bleed section (no max-width / padding) for corner-to-corner chapters. */
export function Bleed({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-cyan" : "text-primary"
      }`}
    >
      <span className={`h-px w-5 ${dark ? "bg-cyan/50" : "bg-primary/50"}`} aria-hidden />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 text-3xl font-bold leading-[1.06] tracking-tight sm:text-4xl lg:text-[2.9rem] ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/55" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
    name
  ];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}

export function PrimaryCTA({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-2 rounded-[10px] bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SecondaryCTA({
  to,
  children,
  dark = false,
  className = "",
}: {
  to: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
        dark
          ? "border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]"
          : "border-border bg-background text-foreground hover:bg-accent"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

/** Quiet text link with animated underline + arrow. */
export function TextLink({
  to,
  children,
  dark = false,
  className = "",
}: {
  to: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
        dark ? "text-white hover:text-cyan" : "text-primary hover:text-primary/80"
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
