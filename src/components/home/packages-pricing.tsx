import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const PACKAGE_PRICES: Record<string, { price: string; period?: string; popular?: boolean }> = {
  website: { price: "$2,497", period: "one-time build" },
  "website-automation": { price: "$3,997", period: "one-time + setup" },
  "website-automation-ai": { price: "$5,997", period: "complete system", popular: true },
  "website-automation-seo": { price: "$4,997", period: "growth package" },
};

export function PackagesPricing() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32" id="pricing">
      {/* ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow dark>Packages & Pricing</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white">
              Choose your digital growth tier.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
              From a professional website to a fully automated AI &amp; SEO system — pick the stage that fits your business today.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg, idx) => {
            const pricing = PACKAGE_PRICES[pkg.slug] || { price: "Custom", period: "contact us" };
            const isFeatured = pkg.featured || pricing.popular;

            return (
              <motion.div
                key={pkg.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl border p-7 backdrop-blur-xl transition-all duration-300 ${
                  isFeatured
                    ? "border-cyan/40 bg-white/[0.06] shadow-[0_0_40px_rgba(18,200,234,0.12)] ring-1 ring-cyan/30"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-700/80 via-primary/80 to-cyan/80 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5" />
                    Popular
                  </div>
                )}

                <div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-cyan">
                    {pkg.marketingLabel}
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                    {pkg.technicalName}
                  </h3>
                  <p className="mt-2 text-xs text-white/55 leading-relaxed">
                    {pkg.promise}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="flex items-baseline gap-1">
                      {/* DM Sans price display */}
                      <span
                        className="text-4xl font-extrabold tracking-tight text-white"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {pricing.price}
                      </span>
                    </div>
                    <span className="text-xs text-white/45 font-medium">
                      {pricing.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-xs text-white/80">
                    {pkg.includes.slice(0, 6).map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-cyan mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  {/* Gradient Blue Action Button */}
                  <Link
                    to={PACKAGE_PATHS[pkg.slug]}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-white text-ink hover:bg-slate-100 py-3 px-4 text-xs font-bold shadow-md transition-all duration-300 active:scale-[0.98]"
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
