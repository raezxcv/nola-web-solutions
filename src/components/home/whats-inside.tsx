import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Workflow,
  Bot,
  Search,
  MapPin,
  UsersRound,
  MessageSquareText,
  CreditCard,
} from "lucide-react";
import { SERVICES } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

// Icons mapping
const SERVICE_ICONS: Record<string, React.ElementType> = {
  "web-design": Monitor,
  automation: Workflow,
  ai: Bot,
  seo: Search,
  "google-business-profile": MapPin,
  crm: UsersRound,
  sms: MessageSquareText,
  payments: CreditCard,
};

/** Mac-style window chrome (light) */
function MacWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-3 h-4 flex-1 rounded-md bg-slate-100 text-center text-[0.58rem] text-slate-400 leading-4">
          yourbusiness.com
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/** Per-service wireframe mockup content */
function ServiceMockup({ slug }: { slug: string }) {
  if (slug === "web-design") {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded-full bg-blue-200" />
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => <div key={i} className="h-2 w-10 rounded-full bg-slate-200" />)}
            <div className="h-5 w-16 rounded-full bg-gradient-to-r from-blue-400/60 to-cyan-300/60" />
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 space-y-2">
          <div className="h-4 w-3/5 rounded-full bg-slate-300" />
          <div className="h-3 w-4/5 rounded-full bg-slate-200" />
          <div className="mt-3 flex gap-2">
            <div className="h-8 w-24 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400" />
            <div className="h-8 w-16 rounded-lg border border-slate-200" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-slate-100 p-3 space-y-1.5">
              <div className="h-5 w-5 rounded-md bg-blue-100" />
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="h-2 w-3/4 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "automation") {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-20 rounded-full bg-slate-200" />
          <span className="rounded-full bg-blue-50 border border-blue-100 px-2 py-0.5 text-[0.6rem] font-bold text-blue-600">WORKFLOW</span>
        </div>
        <div className="flex items-center justify-between gap-2 mt-2">
          {["Form", "CRM", "SMS", "Book"].map((n, i) => (
            <div key={n} className="flex flex-1 items-center gap-1">
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-[0.55rem] font-bold text-blue-600">{i + 1}</div>
                <span className="text-[0.55rem] text-slate-400">{n}</span>
              </div>
              {i < 3 && <div className="flex-1 h-px bg-slate-200 relative"><div className="absolute top-0 left-0 h-full w-1/2 bg-blue-400/40 rounded-full" /></div>}
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-[0.6rem] text-slate-500">
          <span className="font-semibold text-slate-700">SMS sent:</span> "Hi! Thanks for reaching out — here's your booking link."
        </div>
      </div>
    );
  }

  if (slug === "ai") {
    return (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
          <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center"><div className="h-2 w-2 rounded-sm bg-white/80" /></div>
          <div className="h-2 w-16 rounded-full bg-slate-300" />
          <div className="ml-auto h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-br-sm bg-blue-100 px-3 py-2 text-[0.6rem] text-slate-700">Any appointments this week?</div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[78%] rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-3 py-2 text-[0.6rem] text-slate-600 shadow-sm">Yes! Tuesday 2pm works. New consultation?</div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[55%] rounded-2xl rounded-br-sm bg-blue-100 px-3 py-2 text-[0.6rem] text-slate-700">Tuesday ✓</div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-100 px-2.5 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span className="text-[0.58rem] font-bold text-blue-600">Lead qualified · routing to team</span>
        </div>
      </div>
    );
  }

  if (slug === "seo") {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
          <Search className="h-3 w-3 text-slate-400" />
          <div className="h-2 w-36 rounded-full bg-slate-200" />
        </div>
        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-3 space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-blue-100 border border-blue-200" />
            <div className="flex-1"><div className="h-2 w-24 rounded-full bg-blue-300" /><div className="h-1.5 w-16 rounded-full bg-blue-200 mt-0.5" /></div>
            <span className="text-[0.6rem] font-extrabold text-blue-600">#1</span>
          </div>
          <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <div key={i} className="h-2.5 w-2.5 rounded-sm bg-amber-400" />)}</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[{ l: "Rank", v: "↑ 12" }, { l: "Views", v: "4.2k" }, { l: "Calls", v: "+38%" }].map(m => (
            <div key={m.l} className="rounded-lg border border-slate-100 bg-white p-2 text-center shadow-sm">
              <div className="text-[0.7rem] font-bold text-blue-600">{m.v}</div>
              <div className="text-[0.55rem] text-slate-400">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "google-business-profile") {
    return (
      <div className="space-y-3">
        <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center"><MapPin className="h-4 w-4 text-blue-600" /></div>
            <div><div className="h-2.5 w-24 rounded-full bg-slate-300" /><div className="h-2 w-16 rounded-full bg-slate-200 mt-0.5" /></div>
          </div>
          <div className="h-16 rounded-lg bg-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1">{[1,2,3,4,5,6].map(i => <div key={i} className="rounded bg-slate-200/60" />)}</div>
          </div>
          <div className="flex gap-0.5 items-center">{[1,2,3,4,5].map(i => <div key={i} className="h-3 w-3 rounded-sm bg-amber-400" />)}<span className="ml-1 text-[0.6rem] font-bold text-amber-600">5.0 (124 reviews)</span></div>
        </div>
      </div>
    );
  }

  if (slug === "crm") {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between"><div className="h-2.5 w-16 rounded-full bg-slate-200" /><span className="text-[0.6rem] font-bold text-blue-600">Pipeline</span></div>
        <div className="grid grid-cols-3 gap-1.5">
          {["New", "Working", "Won"].map((col, ci) => (
            <div key={col} className="space-y-1.5">
              <div className="text-[0.55rem] font-bold text-slate-400 uppercase">{col}</div>
              {[1, 2].map(i => (
                <div key={i} className={`rounded-lg border p-2 space-y-1 ${ci === 0 && i === 1 ? "border-blue-200 bg-blue-50" : "border-slate-100 bg-slate-50"}`}>
                  <div className="flex items-center gap-1"><div className="h-3 w-3 rounded-full bg-slate-200" /><div className="h-1.5 w-10 rounded-full bg-slate-200" /></div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "sms") {
    return (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2"><MessageSquareText className="h-3.5 w-3.5 text-blue-500" /><div className="h-2 w-20 rounded-full bg-slate-200" /></div>
        {["Hi! Your appointment is confirmed for Tuesday 2pm.", "Reply STOP to opt out."].map((msg, i) => (
          <div key={i} className={`rounded-2xl px-3 py-2 text-[0.6rem] ${i === 0 ? "bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-100 text-slate-700" : "bg-slate-50 border border-slate-100 text-slate-500"}`}>{msg}</div>
        ))}
        <div className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /><span className="text-[0.6rem] font-bold text-blue-600">Delivered · Open rate 98%</span></div>
      </div>
    );
  }

  if (slug === "payments") {
    return (
      <div className="space-y-3">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 space-y-3">
          <div className="h-3 w-24 rounded-full bg-slate-300" />
          <div className="h-10 rounded-lg border-2 border-blue-200 bg-white px-3 flex items-center"><div className="h-2 w-32 rounded-full bg-slate-200" /></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-9 rounded-lg border border-slate-200 bg-white" />
            <div className="h-9 rounded-lg border border-slate-200 bg-white" />
          </div>
          <div className="h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm flex items-center justify-center"><div className="h-2.5 w-16 rounded-full bg-white/60" /></div>
        </div>
      </div>
    );
  }

  // fallback
  return (
    <div className="space-y-3">
      <div className="h-3 w-1/2 rounded-full bg-slate-200" />
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => <div key={i} className="h-20 rounded-xl bg-slate-100" />)}
      </div>
      <div className="h-8 w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>
  );
}

export function WhatsInside() {
  const [active, setActive] = useState(0);
  const svc = SERVICES[active] ?? SERVICES[0];

  if (!svc) return null;

  const IconComp = SERVICE_ICONS[svc.slug] || Monitor;

  return (
    <section className="bg-surface py-24 sm:py-32" id="capabilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>What powers the experience</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
              Every tool, working together.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              These are the individual capabilities inside each NOLA package — ingredients that work
              as one connected system.
            </p>
          </div>
        </Reveal>

        {/* Tab rail with icons */}
        <Reveal delay={0.1}>
          <div className="mt-10 -mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2 sm:flex-wrap sm:justify-start">
              {SERVICES.map((s, i) => {
                const on = i === active;
                const Icon = SERVICE_ICONS[s.slug] || Monitor;
                return (
                  <button
                    key={s.slug}
                    id={`capability-tab-${s.slug}`}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      on
                        ? "border-slate-900 bg-slate-900 text-white shadow-md"
                        : "border-slate-200/90 bg-white/80 text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{s.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Detail panel — Mac-style window with content-relevant mockup */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid gap-8 items-center lg:grid-cols-12"
            >
              {/* left side — description */}
              <div className="flex flex-col justify-center lg:col-span-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  <IconComp className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {svc.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{svc.blurb}</p>

                <Link
                  to={`/services/${svc.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span className="relative">
                    Explore {svc.name}
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* right side — Mac-style window with relevant service mockup */}
              <div className="lg:col-span-7">
                <MacWindow>
                  <ServiceMockup slug={svc.slug} />
                </MacWindow>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
