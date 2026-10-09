import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS } from "../../lib/site-data";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

// dark = true means dark bg (ink) section
// 01 Foundation=light, 02 System=dark, 03 Intelligence=light, 04 Visibility=dark
const STAGES = [
  {
    num: "01",
    stage: "Foundation",
    slug: "website" as const,
    flip: false,
    dark: false,
    badgeText: "ONE CLEAN INTERFACE",
  },
  {
    num: "02",
    stage: "System",
    slug: "website-automation" as const,
    flip: true,
    dark: true,
    badgeText: "AUTOMATED SYSTEM",
  },
  {
    num: "03",
    stage: "Intelligence",
    slug: "website-automation-ai" as const,
    flip: false,
    dark: false,
    badgeText: "AI CHATBOT ENGINE",
  },
  {
    num: "04",
    stage: "Visibility",
    slug: "website-automation-seo" as const,
    flip: true,
    dark: true,
    badgeText: "LOCAL VISIBILITY",
  },
];

export function PackageChapters() {
  return (
    <section className="bg-background">
      {STAGES.map((s) => {
        const pkg = PACKAGES.find((p) => p.slug === s.slug)!;
        return (
          <Chapter
            key={s.slug}
            num={s.num}
            stage={s.stage}
            pkg={pkg}
            flip={s.flip}
            dark={s.dark}
            badgeText={s.badgeText}
          />
        );
      })}
    </section>
  );
}

function MacWindowChrome({
  dark,
  children,
}: {
  dark: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-2xl ${
        dark
          ? "border-white/10 bg-slate-900"
          : "border-slate-200/80 bg-slate-50 shadow-slate-200/60"
      }`}
    >
      {/* Mac window title bar */}
      <div
        className={`flex items-center gap-1.5 px-4 py-3 border-b ${
          dark ? "bg-slate-800/80 border-white/[0.06]" : "bg-white border-slate-100"
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div
          className={`ml-4 flex-1 h-5 rounded-md flex items-center justify-center text-[0.6rem] font-medium ${
            dark ? "bg-slate-700/60 text-white/30" : "bg-slate-100 text-slate-400"
          }`}
        >
          yourbusiness.com
        </div>
      </div>
      {/* Content */}
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}

/** 01 Foundation — Website mockup: header nav + hero text + CTA */
function FoundationMockup() {
  return (
    <div className="space-y-3">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="h-3 w-16 rounded-full bg-blue-600/30" />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-2 w-10 rounded-full bg-slate-200" />
          ))}
          <div className="h-5 w-16 rounded-full bg-gradient-to-r from-blue-500/60 to-cyan-400/60" />
        </div>
      </div>
      {/* Hero */}
      <div className="mt-4 rounded-xl bg-slate-100 p-5 space-y-3">
        <div className="h-4 w-3/5 rounded-full bg-slate-300" />
        <div className="h-3 w-4/5 rounded-full bg-slate-200" />
        <div className="h-3 w-2/3 rounded-full bg-slate-200" />
        <div className="mt-3 flex gap-2">
          <div className="h-8 w-24 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm" />
          <div className="h-8 w-20 rounded-lg border border-slate-300 bg-white" />
        </div>
      </div>
      {/* Service Cards */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border border-slate-200 bg-white p-3 space-y-1.5">
            <div className="h-5 w-5 rounded-md bg-blue-100" />
            <div className="h-2 w-full rounded-full bg-slate-200" />
            <div className="h-2 w-3/4 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** 02 System — CRM pipeline + automation flow */
function SystemMockup() {
  return (
    <div className="space-y-3">
      {/* CRM header */}
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded-full bg-cyan/30" />
        <span className="rounded-full bg-cyan/20 px-2.5 py-0.5 text-[0.6rem] font-bold text-cyan">
          NOLA CRM
        </span>
      </div>
      {/* Pipeline kanban */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        {["New", "In Progress", "Booked"].map((col, ci) => (
          <div key={col} className="space-y-1.5">
            <div className="text-[0.55rem] font-bold text-white/40 uppercase">{col}</div>
            {[1, 2].map((i) => (
              <div
                key={i}
                className={`rounded-lg border p-2 space-y-1 ${
                  ci === 0 && i === 1
                    ? "border-cyan/40 bg-cyan/[0.08]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-1.5 w-10 rounded-full bg-white/20" />
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Automation trigger bar */}
      <div className="mt-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 flex items-center gap-2">
        <div className="h-5 w-5 rounded-md bg-cyan/20 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-cyan" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
        </div>
        <span className="text-[0.55rem] font-bold text-cyan">ACTIVE</span>
      </div>
    </div>
  );
}

/** 03 Intelligence — AI Chat window */
function IntelligenceMockup() {
  return (
    <div className="space-y-3">
      {/* Chat header */}
      <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400">
          <div className="h-3 w-3 rounded-sm bg-white/80" />
        </div>
        <div className="flex-1">
          <div className="h-2 w-20 rounded-full bg-slate-300" />
          <div className="h-1.5 w-14 rounded-full bg-slate-200 mt-0.5" />
        </div>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400">
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
      {/* Chat messages */}
      <div className="space-y-2">
        <div className="flex justify-end">
          <div className="max-w-[72%] rounded-2xl rounded-br-sm bg-blue-500/20 px-3 py-2 text-[0.6rem] text-slate-700 leading-tight">
            Do you have appointments this week?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[78%] rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-3 py-2 text-[0.6rem] text-slate-600 leading-tight shadow-sm">
            Yes! Tuesday 2pm or Thursday 10am work. Is this a new consultation?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[65%] rounded-2xl rounded-br-sm bg-blue-500/20 px-3 py-2 text-[0.6rem] text-slate-700 leading-tight">
            Tuesday works ✓
          </div>
        </div>
      </div>
      {/* Lead qualified bar */}
      <div className="flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        <span className="text-[0.6rem] font-bold text-blue-600">Lead Qualified · Routing to team…</span>
      </div>
    </div>
  );
}

/** 04 Visibility — Google Business + SEO ranking panel */
function VisibilityMockup() {
  return (
    <div className="space-y-3">
      {/* Google search bar */}
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2">
        <div className="h-3 w-3 rounded-full border border-cyan/40" />
        <div className="h-2 w-40 rounded-full bg-white/20" />
      </div>
      {/* Map pack result */}
      <div className="rounded-xl border border-cyan/20 bg-cyan/[0.05] p-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-cyan/20 flex items-center justify-center">
            <div className="h-3 w-3 rounded-sm bg-cyan/60" />
          </div>
          <div className="flex-1">
            <div className="h-2 w-28 rounded-full bg-white/30" />
            <div className="h-1.5 w-20 rounded-full bg-white/15 mt-0.5" />
          </div>
          <div className="text-[0.6rem] font-bold text-cyan">#1</div>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-2.5 w-2.5 rounded-sm bg-amber-400/80" />
          ))}
          <span className="text-[0.55rem] text-amber-400 font-bold ml-1">5.0</span>
        </div>
      </div>
      {/* SEO metrics row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Ranking", val: "↑ 12" },
          { label: "Views", val: "4.2k" },
          { label: "Calls", val: "+38%" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-center">
            <div className="text-[0.7rem] font-bold text-cyan">{m.val}</div>
            <div className="text-[0.55rem] text-white/40 mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Chapter({
  num,
  stage,
  pkg,
  flip,
  dark,
  badgeText,
}: {
  num: string;
  stage: string;
  pkg: (typeof PACKAGES)[number];
  flip: boolean;
  dark: boolean;
  badgeText: string;
}) {
  const mockupMap: Record<string, React.ReactNode> = {
    website: <FoundationMockup />,
    "website-automation": <SystemMockup />,
    "website-automation-ai": <IntelligenceMockup />,
    "website-automation-seo": <VisibilityMockup />,
  };

  return (
    <div
      className={`relative overflow-hidden py-16 sm:py-24 ${
        dark ? "bg-ink text-white" : "bg-background text-foreground"
      }`}
    >
      {dark && <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />}
      {/* ambient glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] ${
          dark ? "bg-primary/10" : "bg-primary/6"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span
                  className={`text-5xl font-extrabold tracking-tight ${
                    dark ? "text-white/20" : "text-foreground/12"
                  }`}
                >
                  {num}
                </span>
                <span
                  className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
                    dark ? "text-cyan" : "text-primary"
                  }`}
                >
                  {stage}
                </span>
              </div>
            </Reveal>

            <h3 className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
              <RevealWords text={pkg.headline} delay={0.05} />
            </h3>

            <Reveal delay={0.1}>
              <p
                className={`mt-5 max-w-md text-base leading-relaxed ${
                  dark ? "text-white/55" : "text-muted-foreground"
                }`}
              >
                {pkg.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-2">
                {pkg.technicalName.split("+").map((part) => (
                  <span
                    key={part}
                    className={`rounded-full border px-3.5 py-1 text-xs font-semibold ${
                      dark
                        ? "border-white/10 bg-white/[0.04] text-white/70"
                        : "border-slate-200 bg-slate-100 text-slate-700"
                    }`}
                  >
                    {part.trim()}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {pkg.includes.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        dark ? "text-cyan" : "text-blue-600"
                      }`}
                    />
                    <span className={dark ? "text-white/80" : "text-slate-700"}>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <Link
                to={PACKAGE_PATHS[pkg.slug]}
                className={`group mt-9 inline-flex items-center gap-2 rounded-full ${
                  dark ? "bg-white text-ink hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-black"
                } px-6 py-3.5 text-sm font-bold shadow-md transition-all duration-300 active:scale-[0.98]`}
              >
                {pkg.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          {/* Mockup window — Mac chrome style, content-relevant */}
          <Reveal delay={0.1}>
            <div className="relative">
              {/* Outer container card */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.75, ease: EASE }}
                className={`relative overflow-hidden rounded-3xl p-5 sm:p-7 shadow-2xl border ${
                  dark
                    ? "bg-slate-900/80 border-white/10 backdrop-blur-md"
                    : "bg-slate-50/90 border-slate-200/80 backdrop-blur-md"
                }`}
              >
                {/* Badge header row */}
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${dark ? "bg-cyan" : "bg-blue-600"}`}
                  />
                  <span
                    className={`text-[0.65rem] font-bold uppercase tracking-widest ${
                      dark ? "text-white/40" : "text-slate-500"
                    }`}
                  >
                    {badgeText}
                  </span>
                </div>

                {/* Mac-style browser window */}
                <MacWindowChrome dark={dark}>
                  {mockupMap[pkg.slug]}
                </MacWindowChrome>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
