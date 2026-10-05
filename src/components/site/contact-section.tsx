import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const INTERESTS = [
  "Website",
  "Website + Automation",
  "Website + Automation + AI",
  "Website + Automation + SEO",
  "Not sure yet",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    interest: "",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <section className="relative bg-surface py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* left: statement */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.0] tracking-tight text-foreground">
                <RevealWords text="Let's build the" />
                <br />
                <span className="text-gradient-soft">
                  <RevealWords text="right system for you." delay={0.18} />
                </span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                Tell us about your business and what you're interested in. We'll help you choose the
                right starting point.
              </p>
            </Reveal>
          </div>

          {/* right: form */}
          <Reveal delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="rounded-2xl border border-border bg-card p-10 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Thanks — we'll be in touch.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your message is on its way to the NOLA team. We'll reach out shortly to schedule
                  your free consultation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      business: "",
                      interest: "",
                      message: "",
                    });
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-[10px] border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
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
                className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Phone" required>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                      placeholder="(504) 000-0000"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                      placeholder="you@business.com"
                    />
                  </Field>
                  <Field label="Business">
                    <input
                      value={form.business}
                      onChange={(e) => update("business", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                      placeholder="Business name"
                    />
                  </Field>
                </div>
                <div className="mt-4">
                  <Field label="What are you interested in?">
                    <select
                      value={form.interest}
                      onChange={(e) => update("interest", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                      <option value="">Select a package…</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="mt-4">
                  <Field label="Message">
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
                      placeholder="Tell us about your goals…"
                    />
                  </Field>
                </div>
                <button
                  type="submit"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </form>
            )}
          </Reveal>
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
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
