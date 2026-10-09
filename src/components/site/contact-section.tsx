import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column — Statement & Trust Highlights */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Contact Us</Eyebrow>
              <h2 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.0] tracking-tight text-foreground">
                <RevealWords text="Let's build the" />
                <br />
                <RevealWords text="right system for you." delay={0.05} wordClassName="text-gradient-brand" />
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Tell us about your business and goals. We'll analyze your current setup and recommend the exact tier to accelerate lead capture and growth.
              </p>
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
                  <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                    Message Received!
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to NOLA Web Solutions. We'll review your details and be in touch shortly to schedule your consultation.
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

                  {/* Dark Submit Button */}
                  <button
                    type="submit"
                    className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-900 text-white hover:bg-black py-4 px-6 text-sm font-bold shadow-lg transition-all duration-300 active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message & Request Quote</span>
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
