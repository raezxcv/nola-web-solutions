import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Check, Star, Minus, X, Zap, Bot, Search, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PACKAGES,
  PACKAGE_PATHS,
  COMPARISON_FEATURES,
  type PackageSlug,
} from "../../lib/site-data";
import { PageHero } from "../../components/site/page-hero";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Packages — Choose Your Digital Growth Tier | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Four NOLA growth packages — Website, Website + Automation, Website + Automation + AI, and Website + Automation + SEO. Choose the level of digital growth your business needs.",
      },
      { property: "og:title", content: "NOLA Growth Packages | Modern Systems" },
      {
        property: "og:description",
        content:
          "A complete digital system bundled into clear tiers. Websites, automation, AI, and CRM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesIndex,
});

/* ─── Per-tier config ─────────────────────────────────────────────────────── */
type TierCfg = {
  label: string;
  icon: React.ElementType;
  eyebrowClass: string;
  accentBg: string;
  accentBorder: string;
  accentRing: string;
  stripeBg: string;
  checkBg: string;
  checkIcon: string;
  badgeBg: string;
  numColor: string;
};

const TIER_CONFIG: Record<PackageSlug, TierCfg> = {
  website: {
    label: "The Foundation",
    icon: Globe,
    eyebrowClass: "text-blue-600",
    accentBg: "bg-white",
    accentBorder: "border-slate-200 hover:border-blue-200 hover:shadow-blue-50",
    accentRing: "",
    stripeBg: "from-blue-400 via-blue-500 to-blue-400/60",
    checkBg: "bg-blue-50",
    checkIcon: "text-blue-600",
    badgeBg: "bg-blue-50 border-blue-200",
    numColor: "text-slate-100",
  },
  "website-automation": {
    label: "The Growth Starter",
    icon: Zap,
    eyebrowClass: "text-blue-600",
    accentBg: "bg-white",
    accentBorder: "border-slate-200 hover:border-blue-200 hover:shadow-blue-50",
    accentRing: "",
    stripeBg: "from-blue-500 via-blue-600 to-blue-400/60",
    checkBg: "bg-blue-50",
    checkIcon: "text-blue-600",
    badgeBg: "bg-blue-50 border-blue-200",
    numColor: "text-slate-100",
  },
  "website-automation-ai": {
    label: "The Smart Growth",
    icon: Bot,
    eyebrowClass: "text-primary",
    accentBg: "bg-gradient-to-br from-primary/[0.06] via-white to-white",
    accentBorder: "border-primary/35 shadow-xl shadow-primary/8",
    accentRing: "ring-1 ring-primary/25",
    stripeBg: "from-primary via-cyan-400 to-blue-500/80",
    checkBg: "bg-primary/12",
    checkIcon: "text-primary",
    badgeBg: "bg-primary/10 border-primary/25",
    numColor: "bg-gradient-to-b from-primary/35 to-primary/10 bg-clip-text text-transparent",
  },
  "website-automation-seo": {
    label: "The Local Growth",
    icon: Search,
    eyebrowClass: "text-blue-600",
    accentBg: "bg-white",
    accentBorder: "border-slate-200 hover:border-blue-200 hover:shadow-blue-50",
    accentRing: "",
    stripeBg: "from-blue-400 via-blue-300 to-blue-500/60",
    checkBg: "bg-blue-50",
    checkIcon: "text-blue-600",
    badgeBg: "bg-blue-50 border-blue-200",
    numColor: "text-slate-100",
  },
};

/* ─── Matrix config ───────────────────────────────────────────────────────── */
const COLS = [
  { key: "website", label: "Foundation", sub: "Website" },
  { key: "auto", label: "System", sub: "Website + Automation" },
  { key: "ai", label: "Intelligence", sub: "Website + Automation + AI" },
  { key: "seo", label: "Visibility", sub: "Website + Automation + SEO" },
] as const;

function MatrixCell({ on }: { on: boolean }) {
  return (
    <div className="flex items-center justify-center px-4 py-4">
      {on ? (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-3.5 w-3.5 text-primary" />
        </span>
      ) : (
        <Minus className="h-3.5 w-3.5 text-slate-300" />
      )}
    </div>
  );
}

/* ─── Capabilities popup modal ────────────────────────────────────────────── */
function CapabilitiesModal({ pkg, onClose }: { pkg: (typeof PACKAGES)[0]; onClose: () => void }) {
  const cfg = TIER_CONFIG[pkg.slug];

  // Position-fixed scroll lock — most reliable cross-browser approach
  useEffect(() => {
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflowY = "scroll"; // keep scrollbar width so layout doesn't shift

    // Prevent wheel + touch scroll on the backdrop via native listeners (passive: false)
    const preventScroll = (e: Event) => e.preventDefault();
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflowY = "";
      window.scrollTo(0, scrollY);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/55 p-0 sm:p-6 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 24 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-white text-slate-900 shadow-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: "90vh" }}
      >
        {/* Top stripe — pinned, no border-radius since panel itself is rounded */}
        <div className={`h-[3px] w-full shrink-0 bg-gradient-to-r ${cfg.stripeBg}`} />

        {/* Header — pinned */}
        <div className="shrink-0 px-6 sm:px-8 pt-6 pb-4">
          <div className="flex items-start justify-between">
            <div>
              <span
                className={`text-[0.65rem] font-extrabold uppercase tracking-[0.2em] ${cfg.eyebrowClass}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {cfg.label}
              </span>
              <h3
                className="mt-1.5 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {pkg.technicalName}
              </h3>
              <p className="mt-0.5 text-xs font-semibold italic text-slate-500">"{pkg.promise}"</p>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable capabilities list — grows and scrolls, overscroll contained */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 sm:px-8">
          <div className="border-t border-slate-100 pt-4 pb-4">
            <p
              className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-400 mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              All capabilities in this tier
            </p>
            <div className="grid gap-2">
              {pkg.includes.map((inc) => (
                <div
                  key={inc}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm text-slate-700"
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${cfg.checkBg}`}
                  >
                    <Check className={`h-3 w-3 ${cfg.checkIcon}`} />
                  </span>
                  <span className="font-medium leading-snug">{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA — pinned at bottom */}
        <div className="shrink-0 px-6 sm:px-8 pb-7 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <Link
            to={PACKAGE_PATHS[pkg.slug as PackageSlug]}
            onClick={onClose}
            className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-[0.98]"
          >
            <span>{pkg.cta}</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-900 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-500 hover:text-slate-800 hover:border-slate-400 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main page ───────────────────────────────────────────────────────────── */
function PackagesIndex() {
  const [activeCol, setActiveCol] = useState<(typeof COLS)[number]["key"]>("ai");
  const [popupPkg, setPopupPkg] = useState<(typeof PACKAGES)[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Top Banner */}
      <PageHero
        eyebrow="System Packages"
        title={
          <>
            The complete system,{" "}
            <span className="text-gradient-brand">bundled into clear tiers.</span>
          </>
        }
        subtitle="Start with the foundation you need today and scale into automation, AI, and search visibility when you're ready. Every tier builds seamlessly on the one before it."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      />

      {/* Under Banner */}
      <div className="bg-white text-slate-900">
        {/* ── Cards section ── */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Editorial header — tight gap, no mb between eyebrow and h2 */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2
                className="text-[clamp(2.1rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Four tiers, built for <br className="hidden sm:inline" />
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  real businesses.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal max-w-2xl">
                Each package is a complete, additive system — from a high-converting website to full
                automation, AI, and local SEO. Choose the tier that fits your business today and
                scale up when you're ready.
              </p>
            </div>

            {/* Package Cards grid — gap-7 row gap (28px) is enough for the badge to float into */}
            <div className="grid gap-7 lg:grid-cols-2">
              {PACKAGES.map((pkg, idx) => {
                const cfg = TIER_CONFIG[pkg.slug];
                const TierIcon = cfg.icon;
                const hiddenCount = pkg.includes.length - 6;

                return (
                  <div key={pkg.slug} className="relative">
                    {/* "Most Popular" badge — gradient badge, centered on the top edge */}
                    {pkg.featured && (
                      <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-gradient-to-r from-blue-600 via-primary to-cyan-400 px-4 py-1.5 text-[0.63rem] font-extrabold uppercase tracking-widest text-white shadow-lg shadow-primary/25"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <Star className="h-2.5 w-2.5 fill-current" /> Most Popular
                        </span>
                      </div>
                    )}

                    <article
                      className={`group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 ${cfg.accentBg} ${cfg.accentBorder} ${cfg.accentRing} shadow-sm`}
                    >
                      {/* Colored top stripe — clipped cleanly by overflow-hidden on article */}
                      <div className={`h-[3px] w-full bg-gradient-to-r ${cfg.stripeBg}`} />

                      <div className="flex flex-col flex-1 p-7 sm:p-9">
                        {/* Eyebrow row — no Most Popular badge here anymore */}
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            {/* Colored icon pill */}
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.63rem] font-extrabold uppercase tracking-[0.18em] ${cfg.badgeBg} ${cfg.eyebrowClass}`}
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              <TierIcon className="h-3 w-3" />
                              {cfg.label}
                            </span>
                          </div>
                          {/* Decorative number */}
                          <span
                            className={`text-5xl font-black leading-none tabular-nums select-none ${cfg.numColor}`}
                            style={{ fontFamily: "monospace" }}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {pkg.technicalName}
                        </h3>

                        {/* Promise */}
                        <p className="mt-1.5 text-xs font-bold italic text-primary/70">
                          "{pkg.promise}"
                        </p>

                        {/* Price */}
                        <div className="mt-5 mb-1">
                          <span
                            className="inline-block text-4xl font-black tracking-tight text-gradient-brand"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {pkg.price}
                          </span>
                          <span className="ml-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            complete system
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                          {pkg.description}
                        </p>

                        {/* Best For */}
                        <div className="mt-4 flex items-start gap-2 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-xs text-slate-600 backdrop-blur-sm">
                          <span className="shrink-0 font-bold text-slate-800 uppercase tracking-wider">
                            Best for:
                          </span>
                          <span className="leading-relaxed">{pkg.bestFor}</span>
                        </div>

                        {/* Included checklist */}
                        <div className="mt-6 pt-5 border-t border-slate-100/80 flex-1">
                          <div
                            className={`text-[0.63rem] font-bold uppercase tracking-[0.18em] mb-3 ${cfg.eyebrowClass}`}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Included in this tier
                          </div>
                          <div className="grid gap-2">
                            {pkg.includes.slice(0, 6).map((inc) => (
                              <div
                                key={inc}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700"
                              >
                                <span
                                  className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${cfg.checkBg}`}
                                >
                                  <Check className={`h-2.5 w-2.5 ${cfg.checkIcon}`} />
                                </span>
                                <span>{inc}</span>
                              </div>
                            ))}
                          </div>

                          {/* Clickable "more capabilities" */}
                          {hiddenCount > 0 && (
                            <button
                              onClick={() => setPopupPkg(pkg)}
                              className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 hover:gap-2.5 ${cfg.eyebrowClass} hover:opacity-80`}
                            >
                              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[0.6rem] font-black">
                                +
                              </span>
                              {hiddenCount} more capabilities — view all
                            </button>
                          )}
                        </div>
                      </div>

                      {/* CTA button — dark navy pill, inverts on hover */}
                      <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-0">
                        <Link
                          to={PACKAGE_PATHS[pkg.slug as PackageSlug]}
                          className="group/btn inline-flex w-full items-center justify-between rounded-full border border-slate-900 bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-[0.98]"
                        >
                          <span>{pkg.cta}</span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-900 transition-colors duration-300 group-hover/btn:bg-slate-900 group-hover/btn:text-white">
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                          </span>
                        </Link>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Architecture Matrix ── */}
        <section className="bg-slate-50 py-20 sm:py-28 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-5 bg-primary/50" aria-hidden />
                Architecture Matrix
              </span>
              <h2
                className="mt-3 text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-[1.08] tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Compare package tiers{" "}
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  side by side.
                </span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Every package is additive. As your business matures, your system expands without
                starting from scratch.
              </p>
            </div>

            {/* Desktop matrix */}
            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] border-b border-slate-200 bg-slate-50/60">
                  <div className="px-6 py-5 text-sm font-semibold text-slate-500">Capability</div>
                  {COLS.map((c) => (
                    <div key={c.key} className="px-4 py-5 text-center">
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary">
                        {c.label}
                      </p>
                      <p className="mt-1 text-xs text-slate-400 font-medium">{c.sub}</p>
                    </div>
                  ))}
                </div>
                {COMPARISON_FEATURES.map((f, i) => (
                  <div
                    key={f.label}
                    className={`grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] border-b border-slate-100 last:border-0 ${i % 2 === 1 ? "bg-slate-50/40" : ""}`}
                  >
                    <div className="px-6 py-4 text-sm font-medium text-slate-800">{f.label}</div>
                    <MatrixCell on={f.website} />
                    <MatrixCell on={f.auto} />
                    <MatrixCell on={f.ai} />
                    <MatrixCell on={f.seo} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              <div className="mb-5 grid grid-cols-2 gap-2">
                {COLS.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setActiveCol(c.key)}
                    className={`rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                      activeCol === c.key
                        ? "border-primary bg-primary/[0.05]"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <span
                      className={`text-[0.65rem] font-bold uppercase tracking-[0.14em] ${activeCol === c.key ? "text-primary" : "text-slate-400"}`}
                    >
                      {c.label}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold text-slate-700">
                      {c.sub}
                    </span>
                  </button>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeCol}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {COMPARISON_FEATURES.map((f, i) => {
                      const on = f[activeCol as keyof typeof f] as boolean;
                      return (
                        <li
                          key={f.label}
                          className={`flex items-center justify-between px-5 py-3.5 border-b border-slate-100 last:border-0 ${i % 2 === 1 ? "bg-slate-50/40" : ""}`}
                        >
                          <span className="text-sm font-medium text-slate-800">{f.label}</span>
                          {on ? (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                              <Check className="h-3 w-3 text-primary" />
                            </span>
                          ) : (
                            <Minus className="h-3.5 w-3.5 text-slate-300" />
                          )}
                        </li>
                      );
                    })}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ── Your Turn CTA ── */}
        <section className="relative overflow-hidden bg-ink py-24 sm:py-32 text-white text-center">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 inline-flex">
              <span
                className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(18,200,234,0.08) 100%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 0 24px rgba(18,200,234,0.08) inset",
                }}
              >
                <span className="text-white/40 text-sm sm:text-base leading-none" aria-hidden>
                  ✦
                </span>
                <span className="text-white/65 tracking-widest uppercase text-[0.68rem] sm:text-xs font-semibold">
                  Your Turn
                </span>
                <span className="text-white/40 text-sm sm:text-base leading-none" aria-hidden>
                  ✦
                </span>
              </span>
            </div>
            <h3
              className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Not sure which package fits?{" "}
              <span className="text-gradient-brand">Let's find out.</span>
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-base text-white/60 sm:text-lg leading-relaxed">
              Book a free 20-minute consultation. We'll assess your current operations and recommend
              the exact starting tier for your business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-8 py-3.5 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                <span>Book a Free Consultation</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
              <Link
                to="/our-works"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                See Real Client Work
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── Capabilities popup ── */}
      <AnimatePresence>
        {popupPkg && <CapabilitiesModal pkg={popupPkg} onClose={() => setPopupPkg(null)} />}
      </AnimatePresence>
    </div>
  );
}
