import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS, type PackageSlug } from "../../lib/site-data";
import { Section, Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

type Layer = "automation" | "ai" | "seo";

const LAYERS: { key: Layer; label: string; slug: PackageSlug }[] = [
  { key: "automation", label: "Automation", slug: "website-automation" },
  { key: "ai", label: "AI", slug: "website-automation-ai" },
  { key: "seo", label: "SEO", slug: "website-automation-seo" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function SystemBuilder() {
  const [layers, setLayers] = useState<Record<Layer, boolean>>({
    automation: true,
    ai: true,
    seo: false,
  });

  const toggle = (k: Layer) => setLayers((p) => ({ ...p, [k]: !p[k] }));

  // Resolve matching package
  const slug: PackageSlug = !layers.automation
    ? "website"
    : layers.ai
      ? "website-automation-ai"
      : layers.seo
        ? "website-automation-seo"
        : "website-automation";
  const pkg = PACKAGES.find((p) => p.slug === slug)!;

  return (
    <section className="relative bg-background py-24 sm:py-32" id="builder">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* left: configurator */}
          <div>
            <Reveal>
              <Eyebrow>The NOLA System Builder</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.04] tracking-tight text-foreground">
                Start with a website.
                <br />
                Add what your business needs.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Toggle the layers below and watch the system build itself. Every combination maps to
                a real NOLA package.
              </p>
            </Reveal>

            {/* base */}
            <Reveal delay={0.1}>
              <div className="mt-9 rounded-xl border border-primary/30 bg-primary/[0.04] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Foundation · always included
                    </p>
                    <p className="mt-1 text-base font-bold text-foreground">Website</p>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Reveal>

            {/* toggles */}
            <Reveal delay={0.15}>
              <p className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Add a layer
              </p>
              <div className="mt-3 space-y-2.5">
                {LAYERS.map((l) => {
                  const on = layers[l.key];
                  return (
                    <button
                      key={l.key}
                      onClick={() => toggle(l.key)}
                      className={`group flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                        on
                          ? "border-foreground/20 bg-card"
                          : "border-border bg-card hover:border-foreground/15"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-md border transition-all duration-300 ${
                            on
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-transparent"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span
                          className={`text-sm font-semibold transition-colors ${on ? "text-foreground" : "text-foreground/70"}`}
                        >
                          {l.label}
                        </span>
                      </span>
                      <span
                        className={`relative h-5 w-9 rounded-full transition-colors duration-300 ${
                          on ? "bg-primary" : "bg-border"
                        }`}
                      >
                        <motion.span
                          className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow"
                          animate={{ left: on ? "1.125rem" : "0.125rem" }}
                          transition={{ duration: 0.3, ease: EASE }}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* resolved package */}
            <Reveal delay={0.2}>
              <div className="mt-7 rounded-xl border border-border bg-surface p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Your package
                </p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-foreground">{pkg.marketingLabel}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{pkg.technicalName}</p>
                  </div>
                  <Link
                    to={PACKAGE_PATHS[slug]}
                    className="group inline-flex shrink-0 items-center gap-1.5 rounded-[10px] bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* right: live evolving system visual */}
          <div className="relative">
            <SystemVisual layers={layers} />
          </div>
        </div>
      </Section>
    </section>
  );
}

function SystemVisual({ layers }: { layers: Record<Layer, boolean> }) {
  const on = layers;
  return (
    <div className="sticky top-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-ink p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.05]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-[90px]" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan">
              Live system
            </span>
            <span className="text-[0.7rem] text-white/40">yourbusiness.com</span>
          </div>

          {/* stacked layers */}
          <div className="mt-6 space-y-2.5">
            {/* website — always */}
            <LayerRow index="01" label="Website" active tone="brand" />

            <AnimatePresence>
              {on.automation && (
                <LayerRow
                  key="auto"
                  index="02"
                  label="Automation"
                  active
                  tone="cyan"
                  delay={0.05}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {on.ai && <LayerRow key="ai" index="03" label="AI" active tone="cyan" delay={0.1} />}
            </AnimatePresence>

            <AnimatePresence>
              {on.seo && (
                <LayerRow key="seo" index="04" label="SEO" active tone="cyan" delay={0.15} />
              )}
            </AnimatePresence>
          </div>

          {/* connection flow */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/40">
              Flow
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/70">
              <Chip>Visit</Chip>
              <Arrow />
              <Chip>Lead</Chip>
              {on.automation && (
                <>
                  <Arrow />
                  <Chip>CRM</Chip>
                  <Arrow />
                  <Chip>Follow-up</Chip>
                </>
              )}
              {on.ai && (
                <>
                  <Arrow />
                  <Chip>AI qualify</Chip>
                </>
              )}
              {on.seo && (
                <>
                  <Arrow />
                  <Chip>Search</Chip>
                </>
              )}
              <Arrow />
              <Chip highlight>Customer</Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LayerRow({
  index,
  label,
  tone,
  delay = 0,
}: {
  index: string;
  label: string;
  active: boolean;
  tone: "brand" | "cyan";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0, marginTop: 0 }}
      animate={{ opacity: 1, height: "auto", marginTop: "0.625rem" }}
      exit={{ opacity: 0, height: 0, marginTop: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
      className="overflow-hidden"
    >
      <div
        className={`flex items-center justify-between rounded-lg border px-4 py-3 ${
          tone === "brand" ? "border-primary/40 bg-primary/[0.08]" : "border-cyan/30 bg-cyan/[0.06]"
        }`}
      >
        <span className="flex items-center gap-3">
          <span className={`text-xs font-bold ${tone === "brand" ? "text-primary" : "text-cyan"}`}>
            {index}
          </span>
          <span className="text-sm font-semibold text-white">{label}</span>
        </span>
        <span
          className={`h-2 w-2 rounded-full ${tone === "brand" ? "bg-primary" : "bg-cyan"} shadow-[0_0_8px_currentColor]`}
        />
      </div>
    </motion.div>
  );
}

function Chip({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <span
      className={`rounded-md border px-2.5 py-1 text-[0.7rem] font-semibold ${
        highlight
          ? "border-cyan/40 bg-cyan/15 text-cyan"
          : "border-white/10 bg-white/[0.04] text-white/70"
      }`}
    >
      {children}
    </span>
  );
}

function Arrow() {
  return <span className="text-white/25">→</span>;
}
