import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS } from "../../lib/site-data";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const STAGES = [
  { num: "01", stage: "Foundation", slug: "website" as const, flip: false },
  { num: "02", stage: "System", slug: "website-automation" as const, flip: true },
  { num: "03", stage: "Intelligence", slug: "website-automation-ai" as const, flip: false },
  { num: "04", stage: "Visibility", slug: "website-automation-seo" as const, flip: true },
];

export function PackageChapters() {
  return (
    <section className="bg-background">
      {STAGES.map((s, i) => {
        const pkg = PACKAGES.find((p) => p.slug === s.slug)!;
        return (
          <Chapter
            key={s.slug}
            num={s.num}
            stage={s.stage}
            pkg={pkg}
            flip={s.flip}
            dark={i === 2}
          />
        );
      })}
    </section>
  );
}

function Chapter({
  num,
  stage,
  pkg,
  flip,
  dark,
}: {
  num: string;
  stage: string;
  pkg: (typeof PACKAGES)[number];
  flip: boolean;
  dark: boolean;
}) {
  const isAi = pkg.slug === "website-automation-ai";
  return (
    <div
      className={`relative overflow-hidden py-24 sm:py-32 ${
        dark ? "bg-ink text-white" : "bg-background text-foreground"
      }`}
    >
      {dark && <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />}
      {isAi && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[140px]" />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          {/* text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span
                  className={`text-5xl font-extrabold tracking-tight ${dark ? "text-white/15" : "text-foreground/15"}`}
                >
                  {num}
                </span>
                <span
                  className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${dark ? "text-cyan" : "text-primary"}`}
                >
                  {stage}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h3 className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
                {pkg.headline}
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className={`mt-5 max-w-md text-base leading-relaxed ${dark ? "text-white/55" : "text-muted-foreground"}`}
              >
                {pkg.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-2">
                {pkg.technicalName.split("+").map((part) => (
                  <span
                    key={part}
                    className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${
                      dark
                        ? "border-white/10 bg-white/[0.04] text-white/70"
                        : "border-border bg-surface text-foreground/70"
                    }`}
                  >
                    {part.trim()}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {pkg.includes.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-cyan" : "text-primary"}`}
                    />
                    <span className={dark ? "text-white/75" : "text-foreground/80"}>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <Link
                to={PACKAGE_PATHS[pkg.slug]}
                className={`group mt-9 inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  dark
                    ? "bg-white text-ink hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:brightness-110"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          {/* visual */}
          <Reveal delay={0.1}>
            <PackageVisual slug={pkg.slug} dark={dark} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function PackageVisual({ slug, dark }: { slug: string; dark: boolean }) {
  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute -inset-4 rounded-3xl blur-2xl ${
          dark
            ? "bg-gradient-to-tr from-primary/15 to-cyan/10"
            : "bg-gradient-to-tr from-primary/10 to-cyan/5"
        }`}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${
          dark ? "border-white/10 bg-ink-2" : "border-border bg-card"
        }`}
      >
        {slug === "website" && <FoundationVisual dark={dark} />}
        {slug === "website-automation" && <SystemVisual dark={dark} />}
        {slug === "website-automation-ai" && <IntelligenceVisual dark={dark} />}
        {slug === "website-automation-seo" && <VisibilityVisual dark={dark} />}
      </motion.div>
    </div>
  );
}

/* ---------- distinct per-package abstract visuals ---------- */

function Frame({
  dark,
  children,
  label,
}: {
  dark: boolean;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div>
      <div
        className={`flex items-center gap-2 ${dark ? "text-white/40" : "text-muted-foreground"}`}
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">{label}</span>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function FoundationVisual({ dark }: { dark: boolean }) {
  const bar = dark ? "bg-white/10" : "bg-surface-2";
  const line = dark ? "bg-white/10" : "bg-border";
  return (
    <Frame dark={dark} label="One clean interface">
      <div className={`rounded-xl border ${dark ? "border-white/10" : "border-border"} p-4`}>
        <div className="flex gap-1.5">
          <span className={`h-2 w-2 rounded-full ${bar}`} />
          <span className={`h-2 w-2 rounded-full ${bar}`} />
          <span className={`h-2 w-2 rounded-full ${bar}`} />
        </div>
        <div className="mt-4 space-y-2.5">
          <div className={`h-3 w-2/3 rounded ${bar}`} />
          <div className={`h-2.5 w-full rounded ${bar}`} />
          <div className={`h-2.5 w-5/6 rounded ${bar}`} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className={`h-20 rounded-lg border ${line}`} />
          <div className={`h-20 rounded-lg border ${line}`} />
        </div>
        <div className="mt-4 h-9 rounded-lg bg-primary/80" />
      </div>
    </Frame>
  );
}

function SystemVisual({ dark }: { dark: boolean }) {
  const chip = dark
    ? "border-white/10 bg-white/[0.04] text-white/75"
    : "border-border bg-surface text-foreground/75";
  return (
    <Frame dark={dark} label="Interface + workflow">
      <div className={`rounded-xl border ${dark ? "border-white/10" : "border-border"} p-4`}>
        <div className="flex items-center justify-between gap-1 text-xs">
          {["Form", "Lead", "CRM", "Follow-up"].map((n, i) => (
            <div key={n} className="flex flex-1 items-center gap-1">
              <span className={`rounded-md border px-2 py-1 text-[0.65rem] font-semibold ${chip}`}>
                {n}
              </span>
              {i < 3 && (
                <span className={dark ? "text-white/25" : "text-muted-foreground/40"}>→</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {["New lead · Angela R.", "SMS follow-up sent", "Appointment booked"].map((t, i) => (
            <motion.div
              key={t}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs ${chip}`}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: EASE }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function IntelligenceVisual({ dark }: { dark: boolean }) {
  const me = "bg-primary/85 text-white";
  const them = dark
    ? "border-white/10 bg-white/[0.04] text-white/85"
    : "border-border bg-surface text-foreground/85";
  return (
    <Frame dark={dark} label="Interface + workflow + conversation">
      <div className={`rounded-xl border ${dark ? "border-white/10" : "border-border"} p-4`}>
        <div className="space-y-2.5">
          <div className="flex justify-end">
            <div className={`max-w-[80%] rounded-2xl rounded-br-sm px-3.5 py-2 text-xs ${me}`}>
              Do you have appointments this week?
            </div>
          </div>
          <div className="flex justify-start">
            <div className={`max-w-[82%] rounded-2xl rounded-bl-sm px-3.5 py-2 text-xs ${them}`}>
              Yes — Tuesday 2pm or Thursday 10am. New consultation?
            </div>
          </div>
          <div className="flex justify-end">
            <div className={`max-w-[80%] rounded-2xl rounded-br-sm px-3.5 py-2 text-xs ${me}`}>
              Tuesday works.
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-cyan/15 px-2.5 py-1 text-[0.65rem] font-semibold text-cyan">
            Qualified
          </span>
          <span className={`text-[0.65rem] ${dark ? "text-white/40" : "text-muted-foreground"}`}>
            Routed to team → CRM
          </span>
        </div>
      </div>
    </Frame>
  );
}

function VisibilityVisual({ dark }: { dark: boolean }) {
  const chip = dark
    ? "border-white/10 bg-white/[0.04] text-white/75"
    : "border-border bg-surface text-foreground/75";
  const line = dark ? "bg-white/10" : "bg-border";
  return (
    <Frame dark={dark} label="Interface + search + local presence">
      <div className={`rounded-xl border ${dark ? "border-white/10" : "border-border"} p-4`}>
        {/* search bar */}
        <div
          className={`flex items-center gap-2 rounded-lg border ${dark ? "border-white/10" : "border-border"} px-3 py-2`}
        >
          <span
            className={`h-3 w-3 rounded-full border-2 ${dark ? "border-cyan" : "border-primary"}`}
          />
          <div className={`h-2.5 flex-1 rounded ${line}`} />
        </div>
        {/* result rows */}
        <div className="mt-3 space-y-2">
          {[
            { t: "Your Business", g: true },
            { t: "Competitor A", g: false },
            { t: "Competitor B", g: false },
          ].map((r, i) => (
            <motion.div
              key={r.t}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${r.g ? (dark ? "border-cyan/40 bg-cyan/[0.08] text-white" : "border-primary/40 bg-primary/[0.06] text-foreground") : chip}`}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: EASE }}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${r.g ? "bg-cyan" : "bg-muted-foreground/40"}`}
                />
                {r.t}
              </span>
              {r.g && <span className="text-[0.6rem] font-semibold text-cyan">Top result</span>}
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-[0.65rem]">
          <span className={`rounded-md border px-2 py-1 ${chip}`}>Google Business Profile</span>
          <span className={dark ? "text-white/25" : "text-muted-foreground/40"}>→</span>
          <span className={`rounded-md border px-2 py-1 ${chip}`}>Website</span>
        </div>
      </div>
    </Frame>
  );
}
