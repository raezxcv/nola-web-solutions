import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS, type PackageSlug } from "../../lib/site-data";
import { Section, Eyebrow } from "../site/ui";

const TABS: { slug: PackageSlug; num: string; kicker: string }[] = [
  { slug: "website", num: "01", kicker: "Build my foundation" },
  { slug: "website-automation", num: "02", kicker: "Automate my business" },
  { slug: "website-automation-ai", num: "03", kicker: "Add intelligence" },
  { slug: "website-automation-seo", num: "04", kicker: "Get found" },
];

export function PackageOverview() {
  const [active, setActive] = useState<PackageSlug>("website-automation-ai");
  const pkg = PACKAGES.find((p) => p.slug === active)!;
  const activeIdx = TABS.findIndex((t) => t.slug === active);

  return (
    <Section className="py-20 sm:py-28" id="packages">
      <div className="text-center">
        <Eyebrow>Packages</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
          What does your business need?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Start with the foundation you need today and add the technology that helps your business
          grow. Choose a level to see what's inside.
        </p>
      </div>

      {/* selector tabs */}
      <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {TABS.map((t) => {
          const tp = PACKAGES.find((p) => p.slug === t.slug)!;
          const isActive = active === t.slug;
          return (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={`group relative flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-primary bg-primary/[0.04]"
                  : "border-border bg-card hover:border-foreground/20"
              }`}
            >
              <span
                className={`text-xs font-bold tracking-widest ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t.num}
              </span>
              <span
                className={`mt-2 text-sm font-bold leading-tight ${
                  isActive ? "text-foreground" : "text-foreground/80"
                }`}
              >
                {tp.shortName}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">{t.kicker}</span>
              {isActive && (
                <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>

      {/* evolving system visual + details */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* left: evolving visual */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-ink p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.05]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-[100px]" />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              {pkg.marketingLabel}
            </span>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {pkg.headline}
            </h3>

            {/* stacked system layers */}
            <div className="mt-8 space-y-2.5">
              {TABS.slice(0, activeIdx + 1).map((t, i) => {
                const tp = PACKAGES.find((p) => p.slug === t.slug)!;
                const isTop = i === activeIdx;
                return (
                  <div
                    key={t.slug}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-500 ${
                      isTop ? "border-cyan/40 bg-cyan/[0.08]" : "border-white/10 bg-white/[0.03]"
                    }`}
                    style={{ marginLeft: `${i * 12}px` }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold ${isTop ? "text-cyan" : "text-white/40"}`}
                      >
                        {t.num}
                      </span>
                      <span
                        className={`text-sm font-semibold ${isTop ? "text-white" : "text-white/70"}`}
                      >
                        {tp.shortName}
                      </span>
                    </span>
                    {isTop && <Check className="h-4 w-4 text-cyan" />}
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/45">
              {activeIdx === 0
                ? "A single clean digital window."
                : activeIdx === 1
                  ? "Website + Lead + CRM + Automation working together."
                  : activeIdx === 2
                    ? "Website + Automation + AI handling conversations."
                    : "Website + SEO + Google + Local visibility."}
            </p>
          </div>
        </div>

        {/* right: details */}
        <div className="flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10">
          <p className="text-sm font-semibold text-primary">{pkg.promise}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>

          <div className="mt-6 rounded-xl border border-border bg-surface px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Best for
            </p>
            <p className="mt-1 text-sm text-foreground/85">{pkg.bestFor}</p>
          </div>

          <div className="mt-6 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What's included
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {pkg.includes.slice(0, 8).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to={PACKAGE_PATHS[pkg.slug]}
            className="group mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            {pkg.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
