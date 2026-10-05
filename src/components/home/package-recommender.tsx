import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS, type PackageSlug } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const OPTIONS: { label: string; sub: string; slug: PackageSlug }[] = [
  { label: "A professional website", sub: "Build my foundation", slug: "website" },
  { label: "Better lead follow-up", sub: "Automate my business", slug: "website-automation" },
  { label: "AI customer support", sub: "Add intelligence", slug: "website-automation-ai" },
  { label: "More online visibility", sub: "Get found", slug: "website-automation-seo" },
];

export function PackageRecommender() {
  const [selected, setSelected] = useState<PackageSlug | null>(null);
  const recPkg = selected ? PACKAGES.find((p) => p.slug === selected)! : null;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Find your fit</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
              Not sure which package is right for you?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              What do you need most? Pick the option that fits — we'll show you the package.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {OPTIONS.map((opt) => {
              const isActive = selected === opt.slug;
              return (
                <button
                  key={opt.slug}
                  onClick={() => setSelected(opt.slug)}
                  className={`group relative flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary/[0.05]"
                      : "border-border bg-card hover:border-foreground/20"
                  }`}
                >
                  <div>
                    <p
                      className={`text-sm font-semibold ${isActive ? "text-foreground" : "text-foreground/80"}`}
                    >
                      {opt.label}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{opt.sub}</p>
                  </div>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence>
          {recPkg && (
            <motion.div
              key={recPkg.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Your recommended package
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold text-foreground">
                    {recPkg.marketingLabel}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                    {recPkg.technicalName}
                  </p>
                </div>
                <Link
                  to={PACKAGE_PATHS[recPkg.slug]}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  See my package
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
