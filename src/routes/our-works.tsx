import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ExternalLink,
  X,
  Star,
  LayoutGrid,
  Building2,
  HeartPulse,
  Cpu,
  Palmtree,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT_WORKS, type ClientWork } from "../lib/site-data";
import { PageHero } from "../components/site/page-hero";

const CATEGORIES = [
  "All",
  "Real Estate",
  "Healthcare & Dental",
  "Services & Tech",
  "Hospitality & Leisure",
  "Corporate & Growth",
] as const;

type Category = (typeof CATEGORIES)[number];

const CATEGORY_CONFIG: Record<Category, { label: string; icon: React.ElementType }> = {
  All: { label: "All Works", icon: LayoutGrid },
  "Real Estate": { label: "Real Estate", icon: Building2 },
  "Healthcare & Dental": { label: "Healthcare & Dental", icon: HeartPulse },
  "Services & Tech": { label: "Services & Tech", icon: Cpu },
  "Hospitality & Leisure": { label: "Hospitality & Leisure", icon: Palmtree },
  "Corporate & Growth": { label: "Corporate & Growth", icon: TrendingUp },
};

export const Route = createFileRoute("/our-works")({
  head: () => ({
    meta: [
      { title: "Our Works — All Client Projects & Systems | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Explore all NOLA client websites, automations, CRM systems, and AI platforms across real estate, healthcare, hospitality, home services, and corporate verticals.",
      },
      { property: "og:title", content: "Our Works — All Projects | NOLA Web Solutions" },
      {
        property: "og:description",
        content:
          "Explore 20+ live client websites and connected digital systems built for real businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedWork, setSelectedWork] = useState<ClientWork | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedWork(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredWorks =
    activeCategory === "All"
      ? CLIENT_WORKS
      : CLIENT_WORKS.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Top Banner */}
      <PageHero
        eyebrow="Our Works"
        title={
          <>
            Built for <span className="text-gradient-brand">real businesses.</span>
          </>
        }
        subtitle="From high-converting web portals to automated back-office CRM hubs and AI chatbots. Explore our full portfolio of completed systems across industries."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Works" }]}
      />

      {/* Under Banner: Clean White & Neutral Layout with Modern Editorial Aesthetics */}
      <div className="bg-white text-slate-900">
        {/* Main Section */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Modern Editorial Header with Black-to-White/Gray Gradient Headline */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2
                className="text-[clamp(2.1rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Selected projects, <br className="hidden sm:inline" />
                crafted for{" "}
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  real impact.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal max-w-2xl">
                A curated portfolio of high-performing websites, automated CRM pipelines, and custom
                AI systems built for real businesses.
              </p>
            </div>

            {/* Category Filter Tabs with Neutral Editorial Styling & DM Sans */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 border-b border-slate-200/90 pb-6 sm:pb-8">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? CLIENT_WORKS.length
                    : CLIENT_WORKS.filter((w) => w.category === cat).length;
                const isActive = activeCategory === cat;
                const { label, icon: Icon } = CATEGORY_CONFIG[cat];

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className={`group inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-900"
                        : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 border border-transparent hover:border-slate-300/60"
                    }`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-colors ${
                        isActive ? "text-white" : "text-slate-500 group-hover:text-slate-900"
                      }`}
                    />
                    <span>{label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[0.68rem] font-bold transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white text-slate-700 border border-slate-200/80 shadow-2xs"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 3-Column Grid with Simple, Butter-Smooth Tab Animation */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-10 sm:mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredWorks.map((work) => (
                <article
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] cursor-pointer"
                >
                  {/* Image Container with Protective Vignette & Subtle Bottom White Gradient */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Subtle top shade ensuring badges are always sharp and readable */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 via-black/15 to-transparent" />

                    {/* Smooth bottom gradient — slimmer, still feathers cleanly into card body */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white/95 via-white/60 to-transparent" />

                    {/* Readable High-Contrast Badges with DM Sans & Static Star Icon */}
                    <div className="absolute left-3.5 top-3.5 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-slate-900 shadow-md backdrop-blur-md border border-slate-200/80"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {(() => {
                          const Icon = CATEGORY_CONFIG[work.category as Category]?.icon;
                          return Icon ? <Icon className="h-3 w-3 text-slate-600 shrink-0" /> : null;
                        })()}
                        {work.industry}
                      </span>
                      {work.featured && (
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/90 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md border border-white/20"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <Star className="h-3 w-3 fill-white text-white shrink-0" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Quick Preview Hover Indicator */}
                    <div className="absolute right-3.5 bottom-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg opacity-0 translate-y-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Card Content in Modern Editorial Style */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3
                      className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-slate-700"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {work.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 font-normal line-clamp-2">
                      {work.description}
                    </p>

                    {/* Feature Chips with Neutral Styling and DM Sans */}
                    <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                          className="rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-[0.72rem] font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interactive Lightbox Modal */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-6 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.97, opacity: 0, y: 24 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.97, opacity: 0, y: 24 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white text-slate-900 shadow-2xl"
              >
                {/* Full-bleed image header */}
                <div className="relative overflow-hidden rounded-t-3xl bg-slate-100 h-56 sm:h-72">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="h-full w-full object-cover object-top"
                  />
                  {/* Soft bottom fade into white */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/50 to-transparent" />

                  {/* Floating badges — top-left */}
                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[0.63rem] font-bold uppercase tracking-widest text-slate-700 border border-slate-200/60 shadow-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {(() => {
                        const Icon = CATEGORY_CONFIG[selectedWork.category as Category]?.icon;
                        return Icon ? <Icon className="h-3 w-3 text-slate-600 shrink-0" /> : null;
                      })()}
                      {selectedWork.industry}
                    </span>
                    {selectedWork.featured && (
                      <span
                        className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 backdrop-blur-md px-2.5 py-1 text-[0.63rem] font-bold uppercase tracking-widest text-white border border-white/10 shadow-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <Star className="h-2.5 w-2.5 fill-white text-white shrink-0" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Close — top-right */}
                  <button
                    onClick={() => setSelectedWork(null)}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-slate-200/60 text-slate-500 shadow-sm transition-all hover:bg-white hover:text-slate-900"
                    aria-label="Close modal"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Body */}
                <div className="px-6 sm:px-8 pb-8 pt-6 space-y-5">
                  {/* Title & description */}
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-slate-900"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {selectedWork.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-500">
                      {selectedWork.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100" />

                  {/* Capabilities chips */}
                  <div>
                    <p
                      className="mb-2.5 text-[0.63rem] font-bold uppercase tracking-[0.16em] text-slate-400"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Capabilities
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedWork.tags.map((t) => (
                        <span
                          key={t}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100" />

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-900 bg-slate-900 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-slate-900 active:scale-[0.98]"
                      onClick={() => setSelectedWork(null)}
                    >
                      Request a System Like This
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                    <button
                      onClick={() => setSelectedWork(null)}
                      className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-500 transition-all duration-300 hover:border-slate-300 hover:text-slate-800"
                    >
                      Back to Gallery
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Conversion Section with Proof & Reviews Style Dark Background */}
        <section className="relative overflow-hidden bg-ink py-24 sm:py-32 text-white text-center">
          {/* Background ambient lighting like in Proof & Reviews */}
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Shimmer Badge matching home hero */}
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
              Your business could be <span className="text-gradient-brand">next.</span>
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-base text-white/60 sm:text-lg leading-relaxed">
              Let's build the digital system around your business — web, automation, CRM, and AI
              designed to attract and keep customers.
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
                to="/packages"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
