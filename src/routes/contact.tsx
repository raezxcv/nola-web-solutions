import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, PhoneCall, CheckCircle2, Clock } from "lucide-react";
import { CONTACT_INFO } from "../lib/site-data";
import { PageHero } from "../components/site/page-hero";
import { FacebookIcon, WhatsAppIcon } from "../components/site/social-links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NOLA Web Solutions — Studio Intake & Consultation" },
      {
        name: "description",
        content:
          "Schedule a consultation or send an inquiry to NOLA Web Solutions. Direct lines in PH and UK, fast response times under 12 hours.",
      },
      { property: "og:title", content: "Contact NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Let's engineer the right digital system for you. Book a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    tier: "Website + Automation + AI",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Top Banner */}
      <PageHero
        eyebrow="Studio Intake"
        title={<>Let's build the right system for you.</>}
        subtitle="Tell us about your business and goals. We'll analyze your current setup and recommend the exact tier to accelerate lead capture and growth."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      {/* Under Banner: Clean White & Neutral Layout with Home Accent Colors */}
      <div className="bg-white text-slate-900">
        {/* Split Layout: Coordinates & Intake Form */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Direct Coordinates */}
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-28 space-y-6">
                  {/* Coordinates Card */}
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-7 sm:p-8 shadow-sm space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        Direct Coordinates
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">Reach Out Directly</h3>
                      <p className="mt-1.5 text-xs text-slate-600">
                        Speak directly with solutions architects in the Philippines or United
                        Kingdom.
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-200 text-xs">
                      <div>
                        <span className="text-slate-400 uppercase tracking-wider block mb-1">
                          Email
                        </span>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase tracking-wider block mb-1">
                          Philippines Line
                        </span>
                        <a
                          href={`tel:${CONTACT_INFO.phonePHTel}`}
                          className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
                        >
                          {CONTACT_INFO.phonePH}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase tracking-wider block mb-1">
                          United Kingdom Line
                        </span>
                        <a
                          href={`tel:${CONTACT_INFO.phoneUKTel}`}
                          className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
                        >
                          {CONTACT_INFO.phoneUK}
                        </a>
                      </div>
                    </div>

                    {/* Minimalist Icon Action Buttons */}
                    <div className="pt-4 border-t border-slate-200">
                      <span className="text-[0.7rem] uppercase tracking-wider text-slate-400 block mb-3">
                        Instant Channels
                      </span>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          title="Email"
                          aria-label="Email"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                        <a
                          href={`tel:${CONTACT_INFO.phonePHTel}`}
                          title="Call PH"
                          aria-label="Call Philippines"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                        <a
                          href={`tel:${CONTACT_INFO.phoneUKTel}`}
                          title="Call UK"
                          aria-label="Call UK"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
                        >
                          <PhoneCall className="h-4 w-4" />
                        </a>
                        <a
                          href={CONTACT_INFO.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          title="WhatsApp"
                          aria-label="WhatsApp"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                        </a>
                        <a
                          href={CONTACT_INFO.facebook}
                          target="_blank"
                          rel="noreferrer"
                          title="Facebook"
                          aria-label="Facebook"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
                        >
                          <FacebookIcon className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Response Commitment Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2 shadow-sm text-xs">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold">
                      <Clock className="h-4 w-4 text-primary" />
                      Response Guarantee
                    </div>
                    <p className="text-slate-600 leading-relaxed font-light">
                      Every inquiry receives an architect review within 12 business hours. No spam,
                      no aggressive sales reps.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Right Column: Clean White Intake Form */}
              <main className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
                      <p className="max-w-md mx-auto text-sm text-slate-600 leading-relaxed font-light">
                        Thank you for reaching out to NOLA Web Solutions. A solutions architect will
                        review your project requirements and be in touch within 12 hours.
                      </p>
                      <div className="pt-6">
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setForm({
                              name: "",
                              phone: "",
                              email: "",
                              business: "",
                              tier: "Website + Automation + AI",
                              message: "",
                            });
                          }}
                          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-2.5 text-xs font-semibold text-slate-700 hover:border-primary hover:text-primary transition-colors"
                        >
                          Submit another inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-6"
                    >
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                          Project Blueprint Form
                        </span>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                          Tell us about your project.
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-2">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                            Your Name *
                          </label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="e.g. Alex Morgan"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                            Work Email *
                          </label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="alex@company.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                            Business Name / Website
                          </label>
                          <input
                            type="text"
                            value={form.business}
                            onChange={(e) => update("business", e.target.value)}
                            placeholder="Company Inc."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                          System Package Interest
                        </label>
                        <select
                          value={form.tier}
                          onChange={(e) => update("tier", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="Website">01 // Website (The Foundation)</option>
                          <option value="Website + Automation">
                            02 // Website + Automation (The Growth Starter)
                          </option>
                          <option value="Website + Automation + AI">
                            03 // Website + Automation + AI (The Smart Growth - Most Popular)
                          </option>
                          <option value="Website + Automation + SEO">
                            04 // Website + Automation + SEO (Complete Visibility)
                          </option>
                          <option value="Not Sure / Custom System">
                            05 // Not Sure — Recommend a Fit
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                          How can we help? (Project Goals & Scope)
                        </label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="Tell us what you're looking to build, replace, or automate..."
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-primary bg-primary text-white px-8 py-4 text-sm font-bold shadow-lg shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
                        >
                          Send Inquiry & Request Blueprint
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                      </div>

                      <p className="text-center text-[0.7rem] text-slate-400">
                        🔒 Your data is private. We strictly use your info to respond to this
                        consultation inquiry.
                      </p>
                    </form>
                  )}
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
