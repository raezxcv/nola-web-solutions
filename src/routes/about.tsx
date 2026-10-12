import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Heart,
  Sparkles,
  Building2,
  Workflow,
  Cpu,
  Bot,
  Search,
  Users,
} from "lucide-react";
import { WHY_NOLA } from "../lib/site-data";
import { PageHero } from "../components/site/page-hero";
import { Eyebrow } from "../components/site/ui";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Workflow,
  Cpu,
  Bot,
  Search,
  Users,
};

const CREDENTIALS = [
  "10+ Years Digital Tech Experience",
  "GoHighLevel & CRM Automation Expert",
  "Custom AI Chatbot Deployment",
  "Dedicated 1-on-1 Client Support",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NOLA Web Solutions — Technology Should Make Business Easier" },
      {
        name: "description",
        content:
          "NOLA Web Solutions is a technology partner helping businesses implement websites, automation, AI, SEO, CRM, and connected digital systems designed around real growth.",
      },
      { property: "og:title", content: "About NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Technology should make business easier. Meet the team behind NOLA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner */}
      <PageHero
        eyebrow="About NOLA"
        title={<>Technology should make business easier.</>}
        subtitle="NOLA Web Solutions is a technology partner that helps businesses implement websites, automation, AI, SEO, CRM, and connected digital systems — all designed around real business growth."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Under Banner: Clean White & Neutral Layout with Home Accent Colors */}
      <div className="bg-white text-slate-900">
        {/* Founder Story Section with Image from Home */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Left Column: Narrative & Credentials */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <Eyebrow>Founder & Lead Architect</Eyebrow>
                  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                    Norwin Lacson
                  </h2>
                  <p className="mt-2 text-base font-semibold text-primary">
                    Founder of NOLA Web Solutions
                  </p>
                </div>

                <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg font-light">
                  <p>
                    NOLA was built on a simple idea: businesses don't need more disconnected tools —
                    they need a connected system. From your website to automation, AI, SEO, and
                    local visibility, NOLA combines the right technology into practical packages
                    designed around business growth, not buzzwords.
                  </p>
                  <p>
                    Norwin Lacson has spent nearly a decade building custom web architecture,
                    GoHighLevel CRM workflows, funnel systems, and AI chatbot solutions for clients
                    generating tens of millions of dollars online.
                  </p>
                </div>

                {/* Credentials list with primary brand accent */}
                <div className="pt-2">
                  <ul className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                    {CREDENTIALS.map((c) => (
                      <li key={c} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-primary" />
                        <span className="text-sm font-semibold text-slate-800">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA with home accent button */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                  >
                    <span>Work with NOLA</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/our-works"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-primary hover:text-primary active:scale-[0.98]"
                  >
                    Explore Our Works
                  </Link>
                </div>
              </div>

              {/* Right Column: Founder Cutout Image from Home */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-cyan/15 blur-2xl opacity-60" />
                  <img
                    src="https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6ac8988acc7a5a2b734e0fb5.png"
                    alt="Norwin Lacson — Founder & Lead Architect of NOLA Web Solutions"
                    className="relative max-h-[580px] w-auto object-contain object-bottom drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles in Clean Neutral Cards */}
        <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Eyebrow>Core Principles</Eyebrow>
              <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                How we think about technology.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "Make technology practical — build systems that help businesses attract customers, save time, and grow.",
                },
                {
                  icon: Eye,
                  title: "Our Approach",
                  text: "Package-first. Sell the outcome, explain the technology behind it. One partner for the whole system.",
                },
                {
                  icon: Heart,
                  title: "Our Promise",
                  text: "Start where you are and grow when you're ready. No business has to implement everything at once.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-xl font-bold text-slate-900">{v.title}</h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-light">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why NOLA 6-Pillar Grid with Home Accents */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <Eyebrow>Why NOLA</Eyebrow>
              <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Built around the way your business actually works.
              </h3>
              <p className="mt-3 text-base text-slate-600 font-light">
                Every component is chosen to solve a real bottleneck in sales, customer intake, or
                communication.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_NOLA.map((w, idx) => {
                const IconComp = ICON_MAP[w.icon] || Sparkles;
                return (
                  <div
                    key={w.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <IconComp className="h-5.5 w-5.5" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                    </div>
                    <h4 className="mt-4 text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {w.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 font-light">
                      {w.blurb}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Conversion Section with Home Accents */}
        <section className="bg-slate-900 py-20 sm:py-24 text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur-md">
              ✦ Let's Connect ✦
            </span>
            <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white">
              Ready to build your digital system?
            </h3>
            <p className="mt-3 max-w-xl mx-auto text-base text-white/70 font-light">
              Tell us about your business goals and where you want to grow. We'll map out the exact
              package and system you need.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-primary bg-primary text-white px-8 py-3.5 text-sm font-bold shadow-md shadow-primary/30 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
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
