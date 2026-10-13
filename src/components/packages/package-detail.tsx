import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Globe,
  Zap,
  Bot,
  Search,
  Monitor,
  PenTool,
  Smartphone,
  Target,
  Workflow,
  UsersRound,
  Send,
  CalendarClock,
  Filter,
  MessagesSquare,
  ArrowRightLeft,
  FileText,
  Package2,
  Layers,
  GitBranch,
  Compass,
} from "lucide-react";
import { PACKAGES, PACKAGE_PATHS, type PackageSlug } from "../../lib/site-data";
import { PageHero } from "../site/page-hero";

/* ─── Banner gradient titles ─────────────────────────────────────────────── */
const GRADIENT_TITLES: Record<PackageSlug, React.ReactNode> = {
  website: (
    <>
      A professional website built to <span className="text-gradient-brand">convert.</span>
    </>
  ),
  "website-automation": (
    <>
      Turn your website into a <span className="text-gradient-brand">working system.</span>
    </>
  ),
  "website-automation-ai": (
    <>
      Add <span className="text-gradient-brand">AI</span> to your digital business.
    </>
  ),
  "website-automation-seo": (
    <>
      Get found. Get contacted. <span className="text-gradient-brand">Get more customers.</span>
    </>
  ),
};

const NAME_HEADLINES: Record<PackageSlug, React.ReactNode> = {
  website: (
    <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
      Website
    </span>
  ),
  "website-automation": (
    <>
      Website +{" "}
      <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
        Automation
      </span>
    </>
  ),
  "website-automation-ai": (
    <>
      Website + Automation +{" "}
      <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
        AI
      </span>
    </>
  ),
  "website-automation-seo": (
    <>
      Website + Automation +{" "}
      <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
        SEO
      </span>
    </>
  ),
};

/* ─── Section-1 subtext ──────────────────────────────────────────────────── */
const SUBTEXTS: Record<PackageSlug, string> = {
  website:
    "A conversion-first website crafted around your brand — not a template. Built to make every visitor count.",
  "website-automation":
    "Website + Automation gives you a CRM pipeline, automated follow-ups, and booking workflows — so no lead falls through the cracks.",
  "website-automation-ai":
    "An AI layer that qualifies leads, answers questions, and routes conversations to your team — even when you're off the clock.",
  "website-automation-seo":
    "Local SEO and Google Business Profile optimization that puts your name at the top when your customers are searching.",
};

/* ─── Tier design config ─────────────────────────────────────────────────── */
const TIER_CFG: Record<
  PackageSlug,
  {
    icon: React.ElementType;
    stripeBg: string;
    checkBg: string;
    badgeLabel: string;
  }
> = {
  website: {
    icon: Globe,
    stripeBg: "from-blue-400 via-blue-500 to-blue-400/60",
    checkBg: "bg-primary/10",
    badgeLabel: "ONE CLEAN INTERFACE",
  },
  "website-automation": {
    icon: Zap,
    stripeBg: "from-blue-500 via-blue-600 to-blue-400/60",
    checkBg: "bg-primary/10",
    badgeLabel: "AUTOMATED SYSTEM",
  },
  "website-automation-ai": {
    icon: Bot,
    stripeBg: "from-primary via-cyan-400 to-blue-500/80",
    checkBg: "bg-primary/10",
    badgeLabel: "AI CHATBOT ENGINE",
  },
  "website-automation-seo": {
    icon: Search,
    stripeBg: "from-blue-400 via-blue-300 to-blue-500/60",
    checkBg: "bg-primary/10",
    badgeLabel: "LOCAL VISIBILITY",
  },
};

/* ─── Icon map for services ──────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  PenTool,
  Smartphone,
  Target,
  Workflow,
  UsersRound,
  Send,
  CalendarClock,
  Bot,
  Filter,
  MessagesSquare,
  ArrowRightLeft,
  Search,
  FileText,
  Globe,
  Zap,
  Package2,
};

/* ─── Mac browser chrome ─────────────────────────────────────────────────── */
function MacWindowChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-slate-800/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-4 flex-1 h-5 rounded-md flex items-center justify-center text-[0.6rem] font-medium bg-slate-700/60 text-white/30">
          yourbusiness.com
        </div>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}

/* ─── Mockup contents (all dark) ─────────────────────────────────────────── */
function FoundationMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-16 rounded-full bg-blue-500/30" />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-2 w-10 rounded-full bg-white/10" />
          ))}
          <div className="h-5 w-16 rounded-full bg-gradient-to-r from-blue-500/60 to-cyan-400/60" />
        </div>
      </div>
      <div className="mt-4 rounded-xl bg-white/[0.04] border border-white/[0.06] p-5 space-y-3">
        <div className="h-4 w-3/5 rounded-full bg-white/20" />
        <div className="h-3 w-4/5 rounded-full bg-white/10" />
        <div className="h-3 w-2/3 rounded-full bg-white/10" />
        <div className="mt-3 flex gap-2">
          <div className="h-8 w-24 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm" />
          <div className="h-8 w-20 rounded-lg border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-3 space-y-1.5"
          >
            <div className="h-5 w-5 rounded-md bg-blue-500/20" />
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-3/4 rounded-full bg-white/[0.06]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded-full bg-cyan/30" />
        <span className="rounded-full bg-cyan/20 px-2.5 py-0.5 text-[0.6rem] font-bold text-cyan">
          NOLA CRM
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {["New", "In Progress", "Booked"].map((col, ci) => (
          <div key={col} className="space-y-1.5">
            <div className="text-[0.55rem] font-bold text-white/40 uppercase">{col}</div>
            {[1, 2].map((i) => (
              <div
                key={i}
                className={`rounded-lg border p-2 space-y-1 ${ci === 0 && i === 1 ? "border-cyan/40 bg-cyan/[0.08]" : "border-white/10 bg-white/[0.04]"}`}
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

function IntelligenceMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-xl bg-white/[0.05] border border-white/[0.08] px-3 py-2.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400">
          <div className="h-3 w-3 rounded-sm bg-white/80" />
        </div>
        <div className="flex-1">
          <div className="h-2 w-20 rounded-full bg-white/20" />
          <div className="h-1.5 w-14 rounded-full bg-white/10 mt-0.5" />
        </div>
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400">
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-end">
          <div className="max-w-[72%] rounded-2xl rounded-br-sm bg-blue-500/25 border border-blue-500/20 px-3 py-2 text-[0.6rem] text-white/70 leading-tight">
            Do you have appointments this week?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[78%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.6rem] text-white/60 leading-tight">
            Yes! Tuesday 2pm or Thursday 10am work.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[65%] rounded-2xl rounded-br-sm bg-blue-500/25 border border-blue-500/20 px-3 py-2 text-[0.6rem] text-white/70 leading-tight">
            Tuesday works ✓
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/[0.08] px-3 py-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan" />
        <span className="text-[0.6rem] font-bold text-cyan">Lead Qualified · Routing to team…</span>
      </div>
    </div>
  );
}

function VisibilityMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2">
        <div className="h-3 w-3 rounded-full border border-cyan/40" />
        <div className="h-2 w-40 rounded-full bg-white/20" />
      </div>
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
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Ranking", val: "↑ 12" },
          { label: "Views", val: "4.2k" },
          { label: "Calls", val: "+38%" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-center"
          >
            <div className="text-[0.7rem] font-bold text-cyan">{m.val}</div>
            <div className="text-[0.55rem] text-white/40 mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCKUP_MAP: Record<PackageSlug, React.ReactNode> = {
  website: <FoundationMockup />,
  "website-automation": <SystemMockup />,
  "website-automation-ai": <IntelligenceMockup />,
  "website-automation-seo": <VisibilityMockup />,
};

/* ─── Mini mockup for Other Packages cards ───────────────────────────────── */
function MiniMockup({ slug }: { slug: PackageSlug }) {
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-xl border border-white/[0.08] bg-slate-900">
      {/* Tiny title bar */}
      <div className="flex items-center gap-1 border-b border-white/[0.06] bg-slate-800/80 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        <div className="ml-2 flex-1 h-3 rounded-sm bg-slate-700/60 flex items-center justify-center">
          <span className="text-[0.45rem] text-white/20">yourbusiness.com</span>
        </div>
      </div>
      {/* Scaled content */}
      <div className="absolute top-7 left-0 right-0 bottom-0 overflow-hidden px-1.5 py-1">
        <div
          className="pointer-events-none origin-top-left"
          style={{ transform: "scale(0.5)", width: "200%" }}
        >
          {MOCKUP_MAP[slug]}
        </div>
      </div>
    </div>
  );
}

/* ─── Implementation steps ───────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Discover",
    text: "We analyze your business, customers, and current lead flow to tailor the system.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Build",
    text: "We craft your website and configure all core infrastructure end to end.",
  },
  {
    step: "03",
    icon: GitBranch,
    title: "Connect",
    text: "We wire CRM pipelines, automation triggers, and AI where applicable.",
  },
  {
    step: "04",
    icon: ArrowRight,
    title: "Launch",
    text: "We test every workflow and hand off a fully live, turnkey system.",
  },
];

/* ─── Main component ─────────────────────────────────────────────────────── */
export function PackageDetail({ slug }: { slug: PackageSlug }) {
  const pkg = PACKAGES.find((p) => p.slug === slug)!;
  const others = PACKAGES.filter((p) => p.slug !== slug);
  const tier = TIER_CFG[slug];
  const TierIcon = tier.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Banner ── */}
      <PageHero
        eyebrow={pkg.marketingLabel}
        title={GRADIENT_TITLES[slug]}
        subtitle={pkg.description}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Packages", to: "/packages" },
          { label: pkg.technicalName },
        ]}
      />

      <div className="bg-white text-slate-900">
        {/* ── Section 1: 2-col — left: capsule + name headline + subtext + spec | right: mockup ── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.022]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              {/* ── Left column ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Capsule pill — top of column */}
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-primary"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <TierIcon className="h-3.5 w-3.5" />
                  {pkg.marketingLabel}
                </span>

                {/* Package name headline */}
                <h2
                  className="mt-4 text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.04] tracking-tight"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {NAME_HEADLINES[slug]}
                </h2>

                {/* Subtext */}
                <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  {SUBTEXTS[slug]}
                </p>

                {/* Divider */}
                <div
                  className={`mt-8 h-[2px] w-16 rounded-full bg-gradient-to-r ${tier.stripeBg}`}
                />

                {/* Price block */}
                <div className="mt-7 flex items-end gap-3">
                  <span
                    className="text-5xl font-black tracking-tight text-primary"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {pkg.price}
                  </span>
                  <div className="mb-1.5">
                    <div className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-400">
                      Complete
                    </div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-400">
                      System
                    </div>
                  </div>
                </div>

                {/* Promise */}
                <p className="mt-2 text-sm font-bold italic text-primary/70">"{pkg.promise}"</p>

                {/* Best for */}
                <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm text-slate-600">
                  <span className="shrink-0 font-bold text-slate-800 uppercase tracking-wider text-xs">
                    Best for:
                  </span>
                  <span className="leading-relaxed">{pkg.bestFor}</span>
                </div>

                {/* Top 6 includes */}
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {pkg.includes.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tier.checkBg}`}
                      >
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-white hover:text-primary active:scale-[0.98]"
                  >
                    <span>Book a Free Consultation</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                  <Link
                    to="/packages"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-slate-400 hover:text-slate-900"
                  >
                    See All Packages
                  </Link>
                </div>

                {/* Trust */}
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Turnkey implementation · No hidden fees · Fully tested before handover
                </div>
              </motion.div>

              {/* ── Right column: dark mockup ── */}
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/8 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl p-5 sm:p-7 shadow-2xl border bg-slate-900/90 border-white/10">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40">
                      {tier.badgeLabel}
                    </span>
                  </div>
                  <MacWindowChrome>{MOCKUP_MAP[slug]}</MacWindowChrome>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 01 Inclusions ── */}
        <section className="border-t border-slate-100 bg-slate-50/60 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span
                className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                01 // Inclusions
              </span>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Everything in this{" "}
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  {pkg.marketingLabel}.
                </span>
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                One complete system, fully configured and delivered — not a template, not a
                shortcut.
              </p>
            </div>
            <div className={`h-[3px] w-20 rounded-full bg-gradient-to-r ${tier.stripeBg} mb-8`} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pkg.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-sm shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${tier.checkBg}`}
                  >
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="font-medium leading-snug text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 Components ── */}
        <section className="border-t border-slate-100 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span
                className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                02 // Components
              </span>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Individual technology{" "}
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  components.
                </span>
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Each part of your system is purpose-built and battle-tested before it ever touches
                your business.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pkg.services.map((s) => {
                const SvcIcon = ICON_MAP[s.icon] ?? Package2;
                return (
                  <div
                    key={s.name}
                    className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <SvcIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold text-slate-900"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">{s.blurb}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 03 Implementation ── */}
        <section className="border-t border-slate-100 bg-slate-50/60 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span
                className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                03 // Implementation
              </span>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                From blueprint to{" "}
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  live launch.
                </span>
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                A clear, four-step process that keeps you informed at every stage.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const StepIcon = s.icon;
                return (
                  <div
                    key={s.step}
                    className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    {i < 3 && (
                      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-full bg-slate-200 lg:block" />
                    )}
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className="text-[0.6rem] font-black text-primary/25 tabular-nums"
                        style={{ fontFamily: "monospace" }}
                      >
                        {s.step}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary">
                        <StepIcon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-slate-900"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 04 Other Packages — mini mockup at top, pill CTA ── */}
        <section className="border-t border-slate-100 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span
                className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                04 // Other Packages
              </span>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore other{" "}
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  growth tiers.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {others.map((o) => {
                const OtherIcon = TIER_CFG[o.slug].icon;
                return (
                  <div
                    key={o.slug}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-lg"
                  >
                    {/* Top stripe */}
                    <div
                      className={`h-[3px] w-full shrink-0 bg-gradient-to-r ${TIER_CFG[o.slug].stripeBg}`}
                    />

                    {/* Mini mockup — top of card */}
                    <div className="px-5 pt-5">
                      <MiniMockup slug={o.slug} />
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col flex-1 px-5 pt-5 pb-6">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/8 text-primary mb-3">
                        <OtherIcon className="h-4 w-4" />
                      </span>
                      <span
                        className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-primary"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {o.marketingLabel}
                      </span>
                      <h3
                        className="mt-1.5 text-base font-bold text-slate-900"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {o.technicalName}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-primary">{o.price}</p>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {o.promise}
                      </p>

                      {/* Pill CTA button */}
                      <Link
                        to={PACKAGE_PATHS[o.slug]}
                        className="group/btn mt-5 inline-flex w-full items-center justify-between rounded-full border border-primary bg-transparent px-5 py-2.5 text-xs font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white active:scale-[0.98]"
                      >
                        <span>View {o.marketingLabel}</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 group-hover/btn:bg-white group-hover/btn:text-primary">
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
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
            <h2
              className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Ready to deploy <span className="text-gradient-brand">{pkg.marketingLabel}?</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-white/60 sm:text-lg leading-relaxed">
              Book a free consultation and let's configure the exact architecture for your business.
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
                Back to All Packages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
