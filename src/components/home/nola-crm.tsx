import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const FLOW = [
  { label: "Website", note: "brings people in" },
  { label: "CRM", note: "keeps everything organized" },
  { label: "Automation", note: "keeps things moving" },
  { label: "AI", note: "handles conversations" },
  { label: "SEO", note: "helps people discover you" },
];

export function NolaCrm() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-36" id="crm">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <Eyebrow dark>Powering the system</Eyebrow>
          </Reveal>
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.0] tracking-tight">
            <RevealWords text="Everything ends up" />
            <br />
            <span className="text-gradient-brand">
              <RevealWords text="somewhere." delay={0.2} />
            </span>
          </h2>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/55">
              The NOLA CRM is the infrastructure that connects every package — website, automation,
              AI, and SEO — into one organized system behind your business.
            </p>
          </Reveal>
        </div>

        {/* central flow diagram */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center">
              {FLOW.map((f, i) => (
                <div key={f.label} className="flex items-center gap-3 sm:flex-col sm:gap-3">
                  <motion.div
                    className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-center sm:w-36"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
                  >
                    <span
                      className={`text-base font-bold ${f.label === "CRM" ? "text-cyan" : "text-white"}`}
                    >
                      {f.label}
                    </span>
                    <span className="mt-1 text-xs text-white/45">{f.note}</span>
                  </motion.div>
                  {i < FLOW.length - 1 && <span className="text-white/25 sm:rotate-90">→</span>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/solutions"
              className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Explore NOLA CRM
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://nolacrm.io/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <span className="relative">
                Visit nolacrm.io
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
