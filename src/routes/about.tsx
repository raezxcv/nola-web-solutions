import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Eye,
  Check,
  ExternalLink,
  Users,
  Briefcase,
  Stethoscope,
  Building,
  Workflow,
  Cpu,
  Bot,
  Search,
  Sparkles,
  Compass,
  Layers,
  GitBranch,
  Quote,
  Clock,
  Gauge,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { ASSETS, WHY_NOLA } from "../lib/site-data";
import { PageHero } from "../components/site/page-hero";
import { ReflectiveCard } from "../components/ui/reflective-card";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2: Building,
  Workflow,
  Cpu,
  Bot,
  Search,
  Users,
  Compass,
  Layers,
  GitBranch,
};

const TARGET_AUDIENCES = [
  {
    num: "01",
    sector: "AGENCY GROWTH",
    icon: Briefcase,
    title: "Agency Owners",
    tagline: "Operations, Client Onboarding & CRM",
    text: "Eliminate manual fulfillment bottlenecks. We engineer custom client onboarding flows, automated reporting pipelines, and white-labeled CRM workspaces that scale smoothly.",
    deliverables: ["Automated Client Onboarding", "Unified Lead Pipelines", "White-Label NOLA CRM"],
    impact: "+45% Fulfillment Efficiency",
  },
  {
    num: "02",
    sector: "CALENDAR AUTOPILOT",
    icon: Users,
    title: "Coaches & Consultants",
    tagline: "High-Ticket Lead Intake & Bookings",
    text: "Convert high-ticket prospects without endless back-and-forth messaging. 24/7 calendar booking sync, multi-step qualification forms, and instant SMS/email reminders.",
    deliverables: ["24/7 Calendar Sync", "Pre-Call Qualification", "Automated SMS Reminders"],
    impact: "Zero Scheduling Friction",
  },
  {
    num: "03",
    sector: "CLINIC & HEALTH",
    icon: Stethoscope,
    title: "Health & Dental Professionals",
    tagline: "Patient Acquisition & Clinic Retention",
    text: "Streamlined patient intake systems, HIPAA-conscious medical pipelines, and automated recall campaigns that drastically decrease no-shows and increase lifetime patient care.",
    deliverables: ["Digital Intake Forms", "Automated No-Show Follow-up", "Specialized Clinic CRM"],
    impact: "98% Appointment Attendance",
  },
  {
    num: "04",
    sector: "LOCAL DOMINANCE",
    icon: Building,
    title: "Local & Service Businesses",
    tagline: "Local Visibility, Speed-to-Lead & Reviews",
    text: "Capture nearby customers at the exact moment they search. Google Business Profile optimization, automated miss-call-text-back, and automated 5-star review collection engines.",
    deliverables: ["Google Profile Tuning", "Instant Auto-Text Response", "5-Star Review Engine"],
    impact: "Top 3 Regional Ranking",
  },
];

const IMPLEMENTATION_PHASES = [
  {
    phase: "01",
    badge: "DISCOVERY & AUDIT",
    timeline: "Days 1 — 3",
    icon: Compass,
    title: "System Audit & Blueprint",
    description:
      "We conduct an in-depth operational analysis of your customer journey, intake bottlenecks, and technology gaps to architect a tailored digital blueprint.",
    highlights: ["Customer Intake Flow Audit", "Pipeline Architecture Map", "Custom Scope Definition"],
  },
  {
    phase: "02",
    badge: "CUSTOM ARCHITECTURE",
    timeline: "Days 4 — 10",
    icon: Layers,
    title: "Conversion Web Engineering",
    description:
      "We craft a bespoke, lightning-fast website designed around your brand identity with clear calls-to-action that guide visitors into qualified inquiries.",
    highlights: ["Custom UX / UI Architecture", "Mobile & Speed Optimization", "Conversion Copy Layout"],
  },
  {
    phase: "03",
    badge: "AUTOMATION & AI",
    timeline: "Days 11 — 16",
    icon: GitBranch,
    title: "CRM & Workflow Integration",
    description:
      "We wire NOLA CRM, automated email/SMS sequences, appointment engines, and optional 24/7 AI qualification chatbots into a unified command center.",
    highlights: ["NOLA CRM Pipeline Wiring", "Multi-Channel Follow-ups", "AI Qualification Chatbot"],
  },
  {
    phase: "04",
    badge: "TURNKEY DEPLOYMENT",
    timeline: "Days 17 — 20",
    icon: ArrowRight,
    title: "Live Testing & Team Handoff",
    description:
      "We stress-test every trigger, form, and pipeline, provide thorough 1-on-1 team training, and launch your turnkey system with continuous clarity.",
    highlights: ["End-to-End Pipeline Stress Test", "1-on-1 Founder Walkthrough", "Complete Handover Documentation"],
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Norwin Lacson & NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Meet Norwin Lacson, Founder of NOLA Web Solutions and creator of NOLA CRM. Explore our mission, vision, and cinematic editorial philosophy.",
      },
      { property: "og:title", content: "About NOLA Web Solutions — Founder, Mission & Vision" },
      {
        property: "og:description",
        content:
          "Transforming businesses through innovation and technology. Websites, automation, and CRM built for non-techy entrepreneurs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div
      className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Editorial Cinematic Page Hero ── */}
      <PageHero
        eyebrow="EDITORIAL FOLIO // ABOUT NOLA"
        title={
          <>
            Technology should make business{" "}
            <span className="text-gradient-brand">easier.</span>
          </>
        }
        subtitle="A digital studio partnering with Agency Owners, Coaches, Health Professionals, and Local Businesses to engineer high-converting websites, smart CRM automation, and turnkey scale."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <div className="bg-white text-slate-900">
        {/* ── Section 1: Founder Narrative & Standalone Portrait ── */}
        <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-slate-100">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.02]" />

          {/* Ambient Lighting Glow */}
          <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[160px]" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-cyan/5 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
              {/* ── Left Column: Editorial Narrative ── */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                {/* Display Title with Mono Gradient */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.04]">
                  Norwin{" "}
                  <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                    Lacson
                  </span>
                </h1>

                {/* Sub-line */}
                <p className="mt-2 text-sm sm:text-base lg:text-lg font-bold text-primary">
                  Founder of NOLA Web Solutions
                </p>

                {/* Fine Editorial Accent Divider */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-primary to-cyan" />
                  <div className="h-[1px] flex-1 bg-slate-200" />
                </div>

                {/* Narrative Body */}
                <div className="mt-6 space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-light">
                  <p>
                    Norwin is passionate about helping small businesses and service professionals
                    thrive through technology. With a background in digital automation, CRM systems,
                    and web design, Norwin has worked with Agency Owners, Coaches, Health
                    Professionals, and local businesses to streamline their operations and attract
                    more clients using smart, scalable systems.
                  </p>
                  <p>
                    Through his platform,{" "}
                    <a
                      href="https://nolacrm.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary underline underline-offset-4 decoration-primary/40 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                    >
                      NOLA CRM
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    , Norwin simplifies marketing and business automation for non-techy
                    entrepreneurs. He understands the real-world challenges of running a business and
                    bridges that with digital strategy that actually works.
                  </p>
                </div>

                {/* Editorial Callout Quote */}
                <div className="relative mt-7 overflow-hidden rounded-2xl border border-primary/20 bg-slate-50/80 p-5 sm:p-6 lg:p-7 shadow-sm">
                  <Quote className="absolute right-4 top-4 h-10 w-10 sm:h-12 sm:w-12 text-primary/10 -z-0" />
                  <div className="relative z-10">
                    <p className="text-sm sm:text-base lg:text-lg font-medium italic text-slate-800 leading-relaxed">
                      "NOLA Web Solutions is built on the belief that great systems don't need to be
                      complicated and that with the right tools and support, any business owner can
                      grow with confidence and clarity."
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                      <span className="h-1 w-6 rounded-full bg-primary" />
                      <span>Norwin Lacson, Founder</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 sm:gap-3 rounded-full border border-primary bg-primary px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-white hover:text-primary active:scale-[0.98]"
                  >
                    <span>Book a Free Consultation</span>
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                  </Link>

                  <Link
                    to="/packages"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-primary hover:text-primary active:scale-[0.98]"
                  >
                    Explore Packages
                  </Link>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  <span>Turnkey Implementation · Real-World Strategy · Direct Support</span>
                </div>
              </motion.div>

              {/* ── Right Column: Centered Reflective Founder ID Card ── */}
              <div className="relative flex items-center justify-center lg:col-span-5">
                {/* Decorative ambient glow */}
                <div className="pointer-events-none absolute -inset-8 rounded-[44px] bg-gradient-to-tr from-blue-500/25 via-sky-400/20 to-primary/20 blur-3xl -z-10" />

                {/* Constrain card so it never exceeds column width on mobile */}
                <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
                  <ReflectiveCard
                    name="Norwin Lacson"
                    role="Founder & CEO"
                    badge="Verified"
                    status="Active"
                    statusColor="#0066FF"
                    idLabel="Studio Credential"
                    idValue="NOLA-2024-NL01"
                    photoSrc="https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6ac8988acc7a5a2b734e0fb5.png"
                    logoSrc={ASSETS.logoNavbar}
                    theme="light"
                    tint="#7cb3fd"
                    metalness={0.92}
                    roughness={0.22}
                    blurStrength={6}
                    shine={1.3}
                    glare={0.65}
                    width="100%"
                    height={520}
                    radius={32}
                    className="shadow-2xl shadow-blue-600/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: 02 // Mission & Vision (DM Sans Typography Manifesto) ── */}
        <section className="relative py-16 sm:py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.03]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />
          <div className="pointer-events-none absolute top-10 right-10 h-96 w-96 rounded-full bg-cyan/15 blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Editorial Header */}
            <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[0.68rem] font-mono uppercase tracking-[0.22em] text-cyan">
                <span>02 // OUR MISSION AND VISION</span>
              </div>

              <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Transforming businesses through{" "}
                <span className="text-gradient-brand">innovation and technology.</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/70 font-light leading-relaxed">
                At NOLA Web Solutions, we believe in transforming businesses through innovation and
                technology. Our commitment to excellence drives us to create solutions that empower
                growth, efficiency, and success.
              </p>
            </div>

            {/* Editorial Manifesto Grid */}
            <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2">
              {/* Card 1: MISSION */}
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-8 lg:p-12 backdrop-blur-xl transition-all duration-300 hover:border-cyan/50 hover:shadow-2xl hover:shadow-cyan/10">
                <div className="h-[2px] w-full absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-400" />

                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-cyan/15 text-cyan">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="font-mono text-[0.6rem] sm:text-xs tracking-widest text-cyan uppercase font-bold">
                    MANIFESTO // 01
                  </span>
                </div>

                <h3 className="mt-6 sm:mt-8 text-xs font-mono font-bold tracking-[0.25em] text-white/50 uppercase">
                  OUR MISSION
                </h3>

                <blockquote className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug tracking-tight">
                  "To empower businesses with innovative digital solutions that enhance efficiency
                  and customer satisfaction."
                </blockquote>

                <p className="mt-4 text-sm sm:text-base text-white/60 font-light leading-relaxed">
                  We eliminate friction by designing cohesive, reliable systems — from modern
                  websites to smart automation workflows — that free entrepreneurs to focus on high-impact
                  work while delighting their customers at every touchpoint.
                </p>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 space-y-2.5 sm:space-y-3">
                  {[
                    "Eliminate manual repetitive follow-up tasks",
                    "Accelerate speed-to-lead and customer intake",
                    "Build predictable, scalable customer journeys",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-medium">
                      <Check className="h-4 w-4 text-cyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: VISION */}
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-8 lg:p-12 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="h-[2px] w-full absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-600" />

                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-primary/20 text-blue-400">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="font-mono text-[0.6rem] sm:text-xs tracking-widest text-blue-400 uppercase font-bold">
                    MANIFESTO // 02
                  </span>
                </div>

                <h3 className="mt-6 sm:mt-8 text-xs font-mono font-bold tracking-[0.25em] text-white/50 uppercase">
                  OUR VISION
                </h3>

                <blockquote className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug tracking-tight">
                  "To be a leading provider of advanced web and CRM technologies that drive business
                  growth worldwide."
                </blockquote>

                <p className="mt-4 text-sm sm:text-base text-white/60 font-light leading-relaxed">
                  We envision a future where entrepreneurs of all backgrounds operate with
                  enterprise-grade digital architecture. Through NOLA Web Solutions and NOLA CRM, we
                  bridge technical complexity into clean, empowering tools.
                </p>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 space-y-2.5 sm:space-y-3">
                  {[
                    "Global reach with localized bespoke dedication",
                    "Democratizing high-level AI and CRM automation",
                    "Empowering non-techy founders with total clarity",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-medium">
                      <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: 03 // SPECIALIZED SECTORS (Cinematic & Modern Studio Showcase) ── */}
        <section className="py-16 sm:py-24 lg:py-32 border-b border-slate-100 bg-gradient-to-b from-white via-slate-50/40 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
                  03 // SPECIALIZED SECTORS
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Engineered for industries where{" "}
                  <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                    conversion matters.
                  </span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-500 font-light leading-relaxed">
                  Every business sector operates under distinct customer dynamics. We tailor our
                  web design, CRM logic, and automation triggers to fit your real-world workflows.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono uppercase text-slate-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>4 CORE PRACTICE AREAS</span>
              </div>
            </div>

            {/* Cinematic Sector Grid */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TARGET_AUDIENCES.map((aud) => {
                const AudIcon = aud.icon;
                return (
                  <div
                    key={aud.title}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Top Accent Gradient on Hover — clipped cleanly by overflow-hidden on rounded-3xl card */}
                    <div className="h-[3px] w-full bg-gradient-to-r from-primary to-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex flex-col justify-between flex-1 p-7 sm:p-8">
                      <div>
                        {/* Top Bar with Icon & Sector Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-sm">
                            <AudIcon className="h-6 w-6" />
                          </div>
                          <span className="font-mono text-xs font-extrabold text-slate-400 group-hover:text-primary transition-colors">
                            {aud.num}
                          </span>
                        </div>

                        <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-primary">
                          {aud.sector}
                        </span>

                        <h3 className="mt-3 text-xl font-bold text-slate-900 tracking-tight">
                          {aud.title}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-slate-500">{aud.tagline}</p>

                        <p className="mt-4 text-xs leading-relaxed text-slate-600 font-light">
                          {aud.text}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                          <p className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                            KEY ARCHITECTURE
                          </p>
                          {aud.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-[0.72rem] font-medium text-slate-700">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Impact Metric & Action */}
                      <div className="mt-8 pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-[0.68rem] text-slate-400 font-mono">{aud.impact}</span>
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-1 text-primary group-hover:translate-x-0.5 transition-transform"
                          >
                            <span>Explore</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 4: 04 // IMPLEMENTATION BLUEPRINT (Cinematic Timeline Beam) ── */}
        <section className="relative py-16 sm:py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.03]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/10 blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan">
                04 // IMPLEMENTATION BLUEPRINT
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                From discovery audit to{" "}
                <span className="text-gradient-brand">live turnkey launch.</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/70 font-light leading-relaxed">
                A disciplined four-phase deployment engineering framework. Every workflow, lead
                pipeline, and pixel is verified and tested prior to handover.
              </p>
            </div>

            {/* Connected Cinematic Phase Cards */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {IMPLEMENTATION_PHASES.map((p, idx) => {
                const PhaseIcon = p.icon;
                return (
                  <div
                    key={p.phase}
                    className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:shadow-2xl hover:shadow-cyan/10"
                  >
                    <div>
                      {/* Top Step Number & Timeline Tag */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-3xl font-black font-mono tracking-tight text-cyan/30 group-hover:text-cyan transition-colors">
                          {p.phase}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.62rem] font-mono text-white/70">
                          <Clock className="h-3 w-3 text-cyan" />
                          {p.timeline}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                          <PhaseIcon className="h-4 w-4" />
                        </span>
                        <span className="text-[0.65rem] font-mono font-bold tracking-widest text-cyan uppercase">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>

                      <p className="mt-3 text-xs leading-relaxed text-white/60 font-light">
                        {p.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                        {p.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs text-white/80">
                            <Check className="h-3.5 w-3.5 text-cyan shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                      <span>PHASE {idx + 1} OF 4</span>
                      <span className="text-cyan font-bold">MILESTONE</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 5: 05 // CORE PHILOSOPHY (High-End Manifesto Gallery) ── */}
        <section className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
                  05 // CORE PHILOSOPHY
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Built around how business{" "}
                  <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                    actually operates.
                  </span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-500 font-light leading-relaxed">
                  We reject bloated agency retainers, disconnected software stacks, and empty
                  buzzwords. These six foundational principles govern every system we construct.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 font-semibold">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>6 PILLARS OF EXCELLENCE</span>
              </div>
            </div>

            {/* 6 Cinematic Modern Manifesto Cards */}
            <div className="grid gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_NOLA.map((w, idx) => {
                const IconComp = ICON_MAP[w.icon] || Sparkles;
                return (
                  <div
                    key={w.title}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Top Accent Line — clipped cleanly by overflow-hidden on rounded-3xl card */}
                    <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 to-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex flex-col justify-between flex-1 p-7 sm:p-8">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-sm">
                            <IconComp className="h-6 w-6" />
                          </div>
                          <span className="font-mono text-xs font-black text-slate-400 group-hover:text-primary transition-colors">
                            // 0{idx + 1}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-primary">
                          {w.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-slate-600 font-light">
                          {w.blurb}
                        </p>
                      </div>

                      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>STANDARD 0{idx + 1}</span>
                        <span className="font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          CERTIFIED
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 6: Dark Editorial "Your Turn" / Let's Connect Banner ── */}
        <section className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32 text-white text-center">
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
                  Let's Connect
                </span>
                <span className="text-white/40 text-sm sm:text-base leading-none" aria-hidden>
                  ✦
                </span>
              </span>
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
              Ready to transform your <span className="text-gradient-brand">business system?</span>
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-base text-white/60 sm:text-lg leading-relaxed font-light">
              Tell us about your business goals and where you want to grow. We'll map out the exact
              package, automation, and CRM tier you need.
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
                Explore All Packages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
