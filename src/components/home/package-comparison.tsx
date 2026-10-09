import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { COMPARISON_FEATURES } from "../../lib/site-data";
import { Section, Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const COLS = [
  { key: "website", label: "Foundation", sub: "Website" },
  { key: "auto", label: "System", sub: "Website + Automation" },
  { key: "ai", label: "Intelligence", sub: "Website + Automation + AI" },
  { key: "seo", label: "Visibility", sub: "Website + Automation + SEO" },
] as const;

export function PackageComparison() {
  const [active, setActive] = useState<(typeof COLS)[number]["key"]>("ai");

  return (
    <section className="bg-surface py-24 sm:py-32">
      <Section>
        <Reveal>
          <div className="text-center">
            <Eyebrow>Compare</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.06] tracking-tight text-foreground">
              What's inside each package.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              See exactly which capabilities are included at every tier — so you can choose with confidence, not guesswork.
            </p>
          </div>
        </Reveal>

        {/* Desktop: clean matrix */}
        <div className="mt-14 hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* header row */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] border-b border-border bg-surface">
              <div className="px-6 py-5 text-sm font-semibold text-foreground/60">Capability</div>
              {COLS.map((c) => (
                <div key={c.key} className="px-4 py-5 text-center">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    {c.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
                </div>
              ))}
            </div>
            {COMPARISON_FEATURES.map((f, i) => (
              <div
                key={f.label}
                className={`grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] ${i % 2 ? "bg-surface/40" : ""}`}
              >
                <div className="px-6 py-3.5 text-sm font-medium text-foreground/90">{f.label}</div>
                <MatrixCell on={f.website} />
                <MatrixCell on={f.auto} />
                <MatrixCell on={f.ai} />
                <MatrixCell on={f.seo} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: selector → features */}
        <div className="mt-12 lg:hidden">
          <div className="mb-6 grid grid-cols-2 gap-2">
            {COLS.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                  active === c.key ? "border-primary bg-primary/[0.05]" : "border-border bg-card"
                }`}
              >
                <span
                  className={`text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${active === c.key ? "text-primary" : "text-muted-foreground"}`}
                >
                  {c.label}
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-foreground/80">
                  {c.sub}
                </span>
              </button>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.ul
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {COMPARISON_FEATURES.map((f, i) => {
                  const on = f[active];
                  return (
                    <li
                      key={f.label}
                      className={`flex items-center justify-between px-5 py-3.5 ${i % 2 ? "bg-surface/40" : ""}`}
                    >
                      <span className="text-sm font-medium text-foreground/90">{f.label}</span>
                      {on ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Minus className="h-3.5 w-3.5 text-muted-foreground/40" />
                      )}
                    </li>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </section>
  );
}

function MatrixCell({ on }: { on: boolean }) {
  return (
    <div className="flex items-center justify-center px-4 py-3.5">
      {on ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-3.5 w-3.5 text-primary" />
        </span>
      ) : (
        <Minus className="h-3.5 w-3.5 text-muted-foreground/30" />
      )}
    </div>
  );
}
