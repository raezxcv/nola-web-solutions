import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Phone, PhoneCall } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";
import { CONTACT_INFO } from "../../lib/site-data";
import { FacebookIcon, WhatsAppIcon } from "./social-links";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column — Statement & Contact Channels */}
          <div className="lg:col-span-5 self-start">
            <Reveal>
              <Eyebrow>Contact Us</Eyebrow>
              <h2 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.0] tracking-tight text-foreground">
                <RevealWords text="Let's build the" />
                <br />
                <RevealWords
                  text="right system for you."
                  delay={0.05}
                  wordClassName="text-gradient-brand"
                />
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Tell us about your business and goals. We'll analyze your current setup and
                recommend the exact tier to accelerate lead capture and growth.
              </p>
            </Reveal>

            {/* Modern Minimalist Monochrome Icons — No Text, No Colors */}
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
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
                  title={`PH Phone: ${CONTACT_INFO.phonePH}`}
                  aria-label="Call Philippines"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                >
                  <Phone className="h-4.5 w-4.5" />
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phoneUKTel}`}
                  title={`UK Phone: ${CONTACT_INFO.phoneUK}`}
                  aria-label="Call United Kingdom"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                >
                  <PhoneCall className="h-4.5 w-4.5" />
                </a>

                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp: +63 917 506 2203"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                </a>

                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook: NOLA Web Solutions"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95"
                >
                  <FacebookIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column — Modern Interactive Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
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
                  <h3 className="mt-6 text-2xl font-extrabold text-slate-900">Message Received!</h3>
                  <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to NOLA Web Solutions. We'll review your details and
                    be in touch shortly to schedule your consultation.
                  </p>
                  <button
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

                  {/* Submit Button matching hero signature */}
                  <button
                    type="submit"
                    className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-900 bg-slate-900 text-white py-3.5 px-6 text-sm font-bold shadow-lg transition-all duration-300 hover:bg-transparent hover:text-slate-900 active:scale-[0.98]"
                  >
                    <span>Send Message & Request Quote</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-900 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                      <Send className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
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
