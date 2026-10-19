import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Send,
  Mail,
  Phone,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { CONTACT_INFO } from "../lib/site-data";
import { PageHero } from "../components/site/page-hero";
import { FacebookIcon, WhatsAppIcon } from "../components/site/social-links";

const EASE = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  {
    num: "01",
    q: "How fast can we launch our system?",
    a: "Standard website builds typically launch within 10–14 business days. Comprehensive packages with automated CRM pipelines and AI chatbots are typically finalized and thoroughly tested within 2–3 weeks.",
  },
  {
    num: "02",
    q: "Which package is best if I'm not sure?",
    a: "No worries! Simply share your goals in the project notes. During our discovery consultation, Norwin and our lead team will audit your current lead flow, operations, and bottlenecks to recommend the exact tier you need.",
  },
  {
    num: "03",
    q: "Do I need technical skills to run NOLA CRM?",
    a: "None at all. NOLA CRM was built specifically for non-techy entrepreneurs. We provide comprehensive 1-on-1 walkthroughs and training so you and your team can manage leads and appointments with complete confidence.",
  },
  {
    num: "04",
    q: "Can you connect with our existing tools or domain?",
    a: "Yes. We seamlessly connect with your existing domain, payment processors (Stripe/PayPal), customer email lists, and CRM pipelines with zero downtime for your live operations.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NOLA Web Solutions — Get In Touch" },
      {
        name: "description",
        content:
          "Schedule a consultation or request a custom quote from NOLA Web Solutions. Direct lines in PH and UK, fast 12-hour response guarantee.",
      },
      { property: "og:title", content: "Contact NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Let's build the right digital system for you. Get in touch with our team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* ── Page Hero ── */}
      <PageHero
        eyebrow="CONTACT US"
        title={
          <>
            Let's build the right system for{" "}
            <span className="text-gradient-brand">your business.</span>
          </>
        }
        subtitle="Have a question or ready to get started? Reach out to our team directly or send us a quick note below."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <div className="bg-white text-slate-900">
        {/* ── Main Contact Section ── */}
        <section className="relative py-20 sm:py-28 overflow-hidden border-b border-slate-100">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.02]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
              {/* ── Left Column: Direct Channels & Information ── */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2
                    className="text-[clamp(2.1rem,4.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-slate-900"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Connect with us, <br className="hidden sm:inline" />
                    crafted for{" "}
                    <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                      real impact.
                    </span>
                  </h2>

                  <p className="mt-4 text-base text-slate-600 leading-relaxed font-light">
                    Tell us about your business and goals. We'll analyze your current setup and
                    recommend the exact tier to accelerate lead capture and growth.
                  </p>
                </div>

                {/* Direct Contact Channels Card */}
                <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg">
                  <div className="space-y-5 text-xs">
                    <div>
                      <span className="text-slate-400 font-mono uppercase tracking-widest block mb-1 text-[0.65rem] font-semibold">
                        Executive Inquiries
                      </span>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-base font-bold text-slate-900 hover:text-primary transition-colors flex items-center gap-2.5"
                      >
                        <Mail className="h-4 w-4 text-primary shrink-0" />
                        {CONTACT_INFO.email}
                      </a>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-slate-400 font-mono uppercase tracking-widest block mb-1 text-[0.65rem] font-semibold">
                        Philippines Direct Line
                      </span>
                      <a
                        href={`tel:${CONTACT_INFO.phonePHTel}`}
                        className="text-base font-bold text-slate-900 hover:text-primary transition-colors flex items-center gap-2.5"
                      >
                        <Phone className="h-4 w-4 text-primary shrink-0" />
                        {CONTACT_INFO.phonePH}
                      </a>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-slate-400 font-mono uppercase tracking-widest block mb-1 text-[0.65rem] font-semibold">
                        United Kingdom Direct Line
                      </span>
                      <a
                        href={`tel:${CONTACT_INFO.phoneUKTel}`}
                        className="text-base font-bold text-slate-900 hover:text-primary transition-colors flex items-center gap-2.5"
                      >
                        <PhoneCall className="h-4 w-4 text-primary shrink-0" />
                        {CONTACT_INFO.phoneUK}
                      </a>
                    </div>
                  </div>

                  {/* Instant Social Channels */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <span className="text-[0.65rem] font-mono uppercase tracking-widest text-slate-400 block mb-3 font-semibold">
                      Instant Communication Lines
                    </span>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        title={`Email: ${CONTACT_INFO.email}`}
                        aria-label="Email"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                      >
                        <Mail className="h-4.5 w-4.5" />
                      </a>
                      <a
                        href={`tel:${CONTACT_INFO.phonePHTel}`}
                        title={`Call Philippines: ${CONTACT_INFO.phonePH}`}
                        aria-label="Call Philippines"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                      >
                        <Phone className="h-4.5 w-4.5" />
                      </a>
                      <a
                        href={`tel:${CONTACT_INFO.phoneUKTel}`}
                        title={`Call United Kingdom: ${CONTACT_INFO.phoneUK}`}
                        aria-label="Call United Kingdom"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                      >
                        <PhoneCall className="h-4.5 w-4.5" />
                      </a>
                      <a
                        href={CONTACT_INFO.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        title="Message on WhatsApp"
                        aria-label="WhatsApp"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                      >
                        <WhatsAppIcon className="h-4.5 w-4.5" />
                      </a>
                      <a
                        href={CONTACT_INFO.facebook}
                        target="_blank"
                        rel="noreferrer"
                        title="Connect on Facebook"
                        aria-label="Facebook"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                      >
                        <FacebookIcon className="h-4.5 w-4.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  100% Confidential · Direct Technical Review · No Spam
                </div>
              </div>

              {/* ── Right Column: Clean Interactive Form (matching Home Contact Us) ── */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="rounded-3xl border border-slate-200 bg-white p-10 sm:p-14 text-center shadow-2xl"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-md">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                      Message Received!
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to NOLA Web Solutions. We'll review your details
                      and be in touch shortly to schedule your consultation.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          phone: "",
                          email: "",
                          business: "",
                          message: "",
                        });
                      }}
                      className="mt-8 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="rounded-3xl border border-white/80 bg-white/75 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-saturate-150"
                  >
                    <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl tracking-tight">
                      Get In Touch With NOLA
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                      Fill out the fields below to request your package breakdown and consultation.
                    </p>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" required>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className="w-full rounded-xl border border-slate-200/80 bg-white/60 backdrop-blur-md px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
                          placeholder="John Doe"
                        />
                      </Field>

                      <Field label="Phone Number" required>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className="w-full rounded-xl border border-slate-200/80 bg-white/60 backdrop-blur-md px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
                          placeholder="(504) 000-0000"
                        />
                      </Field>

                      <Field label="Email Address" required>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="w-full rounded-xl border border-slate-200/80 bg-white/60 backdrop-blur-md px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
                          placeholder="you@company.com"
                        />
                      </Field>

                      <Field label="Company / Business Name">
                        <input
                          value={form.business}
                          onChange={(e) => update("business", e.target.value)}
                          className="w-full rounded-xl border border-slate-200/80 bg-white/60 backdrop-blur-md px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
                          placeholder="Acme Business Inc."
                        />
                      </Field>
                    </div>

                    <div className="mt-5">
                      <Field label="Project Notes / Questions">
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className="w-full rounded-xl border border-slate-200/80 bg-white/60 backdrop-blur-md px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
                          placeholder="Tell us about your goals, current website, or automation needs..."
                        />
                      </Field>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-900 bg-slate-900 text-white py-3.5 px-6 text-sm font-bold shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-white hover:text-slate-900 active:scale-[0.98]"
                    >
                      <span>Send Message & Request Quote</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-900 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                        <Send className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Pre-Consultation FAQ Accordion ── */}
        <section className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.22em] text-primary">
                PRE-CONSULTATION INQUIRIES
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Frequently asked{" "}
                <span className="bg-gradient-to-b from-slate-950 via-slate-600 to-slate-400 bg-clip-text text-transparent">
                  questions.
                </span>
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed font-light">
                Clear answers before your consultation. Click any question to reveal details.
              </p>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-primary/40 shadow-md ring-1 ring-primary/20"
                        : "border-slate-200/90 shadow-sm hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        <span
                          className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl text-xs font-mono font-bold transition-colors ${
                            isOpen ? "bg-primary text-white" : "bg-primary/8 text-primary"
                          }`}
                        >
                          {faq.num}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.q}</h3>
                      </div>
                      <span
                        className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-primary bg-primary text-white"
                            : "border-slate-200 bg-slate-50 text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-light border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 3: Dark Instant Connect Banner ── */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28 text-white text-center">
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
                  Instant Support
                </span>
                <span className="text-white/40 text-sm sm:text-base leading-none" aria-hidden>
                  ✦
                </span>
              </span>
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
              Need immediate answers?{" "}
              <span className="text-gradient-brand">Message on WhatsApp.</span>
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-base text-white/60 sm:text-lg leading-relaxed font-light">
              If you have urgent questions or want a quick chat before submitting the inquiry,
              connect directly with our regional lines.
            </p>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-8 py-3.5 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chat via WhatsApp</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phonePHTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us Direct</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
        {label} {required && <span className="text-blue-600">*</span>}
      </span>
      {children}
    </label>
  );
}
