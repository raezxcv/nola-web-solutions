import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../lib/site-data";
import { Eyebrow, Icon } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WhatsInside() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active] ?? SERVICES[0];

  if (!svc) return null;

  return (
    <section className="bg-surface py-24 sm:py-32" id="capabilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>What powers the experience</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
              What's inside our packages?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              These are the individual capabilities that make each NOLA package work — ingredients,
              not a menu to pick from.
            </p>
          </div>
        </Reveal>

        {/* horizontal capability rail */}
        <Reveal delay={0.1}>
          <div className="mt-12 -mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2 sm:flex-wrap sm:justify-start">
              {SERVICES.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.slug}
                    onClick={() => setActive(i)}
                    className={`group flex items-center gap-2.5 rounded-xl border px-4 py-3 transition-all duration-300 ${
                      on
                        ? "border-primary bg-card"
                        : "border-border bg-card/60 hover:border-foreground/20"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                        on ? "bg-primary/10 text-primary" : "bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                    <span
                      className={`text-sm font-semibold transition-colors ${on ? "text-foreground" : "text-foreground/70"}`}
                    >
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* detail panel */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:items-center"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={svc.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {svc.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{svc.blurb}</p>
                <Link
                  to={`/services/${svc.slug}`}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  <span className="relative">
                    Explore {svc.name}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <CapabilityPreview slug={svc.slug} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/** A small abstract UI preview per capability — keeps it visual without cards. */
function CapabilityPreview({ slug }: { slug: string }) {
  const box = "rounded-lg border border-border bg-surface";
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-tr from-primary/10 to-cyan/5 blur-2xl" />
      <div className="relative rounded-xl border border-border bg-card p-5">
        {slug === "web-design" && (
          <div className="space-y-2.5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-surface-2" />
              <span className="h-2 w-2 rounded-full bg-surface-2" />
              <span className="h-2 w-2 rounded-full bg-surface-2" />
            </div>
            <div className="h-3 w-2/3 rounded bg-surface-2" />
            <div className="grid grid-cols-3 gap-2">
              <div className={`h-12 ${box}`} />
              <div className={`h-12 ${box}`} />
              <div className={`h-12 ${box}`} />
            </div>
            <div className="h-8 rounded bg-primary/80" />
          </div>
        )}
        {slug === "automation" && (
          <div className="flex items-center justify-between gap-1 text-xs text-muted-foreground">
            {["Form", "Lead", "CRM", "Notify"].map((n, i) => (
              <div key={n} className="flex flex-1 items-center gap-1">
                <span
                  className={`rounded-md border border-border bg-surface px-2 py-1 text-[0.65rem] font-semibold`}
                >
                  {n}
                </span>
                {i < 3 && <span>→</span>}
              </div>
            ))}
          </div>
        )}
        {slug === "ai" && (
          <div className="space-y-2">
            <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-primary/85 px-3 py-1.5 text-xs text-white">
              Do you have appointments this week?
            </div>
            <div className="w-fit max-w-[82%] rounded-2xl rounded-bl-sm border border-border bg-surface px-3 py-1.5 text-xs text-foreground/85">
              Yes — Tuesday 2pm or Thursday 10am.
            </div>
            <span className="inline-block rounded-full bg-cyan/15 px-2.5 py-1 text-[0.65rem] font-semibold text-cyan">
              Qualified lead
            </span>
          </div>
        )}
        {slug === "seo" && (
          <div className="space-y-2">
            {[
              { t: "Your Business", g: true },
              { t: "Competitor A", g: false },
              { t: "Competitor B", g: false },
            ].map((r) => (
              <div
                key={r.t}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${
                  r.g
                    ? "border-primary/40 bg-primary/[0.06] text-foreground"
                    : "border-border bg-surface text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${r.g ? "bg-cyan" : "bg-muted-foreground/40"}`}
                  />
                  {r.t}
                </span>
                {r.g && <span className="text-[0.6rem] font-semibold text-cyan">Top result</span>}
              </div>
            ))}
          </div>
        )}
        {slug === "google-business-profile" && (
          <div className="space-y-2">
            <div className={`flex items-center gap-3 p-3 ${box}`}>
              <div className="h-9 w-9 rounded-full bg-primary/20" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2.5 w-1/2 rounded bg-surface-2" />
                <div className="h-2 w-1/3 rounded bg-surface-2" />
              </div>
              <span className="rounded-full bg-cyan/15 px-2 py-0.5 text-[0.6rem] font-semibold text-cyan">
                ★ 4.9
              </span>
            </div>
            <div className={`h-8 ${box}`} />
          </div>
        )}
        {slug === "crm" && (
          <div className="space-y-2">
            {["Angela R. · New", "Marcus T. · Booked", "Priya S. · Follow-up"].map((t) => (
              <div key={t} className={`flex items-center gap-2 px-3 py-2 text-xs ${box}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </div>
            ))}
          </div>
        )}
        {slug === "sms" && (
          <div className="space-y-2">
            <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-primary/85 px-3 py-1.5 text-xs text-white">
              Appointment reminder: Tuesday 2pm
            </div>
            <div className="w-fit max-w-[82%] rounded-2xl rounded-bl-sm border border-border bg-surface px-3 py-1.5 text-xs text-foreground/85">
              Confirmed — see you then!
            </div>
          </div>
        )}
        {slug === "payments" && (
          <div className="space-y-3">
            <div className={`flex items-center justify-between p-3 ${box}`}>
              <span className="text-xs font-semibold text-foreground/80">Invoice #1042</span>
              <span className="text-xs font-bold text-foreground">$1,200.00</span>
            </div>
            <div className="h-9 rounded bg-primary/80" />
          </div>
        )}
      </div>
    </div>
  );
}
