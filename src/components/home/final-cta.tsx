import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS, type PackageSlug } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const OPTIONS: { label: string; slug: PackageSlug }[] = [
  { label: "Website", slug: "website" },
  { label: "Automation", slug: "website-automation" },
  { label: "AI", slug: "website-automation-ai" },
  { label: "SEO", slug: "website-automation-seo" },
];

export function FinalCta() {
  const [selected, setSelected] = useState<PackageSlug | null>("website-automation-ai");
  const recPkg = selected ? PACKAGES.find((p) => p.slug === selected)! : null;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink py-28 text-white sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/18 blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto flex min-h-[60svh] max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow dark>Get started</Eyebrow>
        </Reveal>
        <h2 className="mt-6 text-[clamp(2.4rem,7vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight">
          <RevealWords text="What does your" />
          <br />
          <RevealWords text="business" delay={0.16} />{" "}
          <span className="text-gradient-brand">
            <RevealWords text="need next?" delay={0.28} />
          </span>
        </h2>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {OPTIONS.map((opt) => {
              const isActive = selected === opt.slug;
              return (
                <button
                  key={opt.slug}
                  onClick={() => setSelected(opt.slug)}
                  className={`rounded-[10px] border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-cyan/50 bg-cyan/10 text-white"
                      : "border-white/15 bg-white/[0.03] text-white/60 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
            <button
              onClick={() => setSelected(null)}
              className={`rounded-[10px] border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selected === null
                  ? "border-cyan/50 bg-cyan/10 text-white"
                  : "border-white/15 bg-white/[0.03] text-white/60 hover:text-white"
              }`}
            >
              I'm not sure
            </button>
          </div>
        </Reveal>

        <div className="mt-8 h-16">
          <AnimatePresence mode="wait">
            {recPkg ? (
              <motion.div
                key={recPkg.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="text-sm"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cyan">
                  Recommended — {recPkg.marketingLabel}
                </p>
                <p className="mt-1 text-white/70">{recPkg.technicalName}</p>
              </motion.div>
            ) : (
              <motion.p
                key="unsure"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-white/50"
              >
                No problem — book a free consultation and we'll figure it out together.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <Reveal delay={0.5}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={recPkg ? PACKAGE_PATHS[recPkg.slug] : "/packages"}
              className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Let's build it
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <span className="relative">
                Book a free consultation
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
