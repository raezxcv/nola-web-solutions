import { motion } from "framer-motion";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const LEVELS = [
  { level: "01", title: "Foundation", sub: "Website", statement: "Start with a website." },
  {
    level: "02",
    title: "Automation",
    sub: "Website + Automation",
    statement: "Then make it work harder.",
  },
  { level: "03A", title: "AI", sub: "Website + Automation + AI", statement: "Add intelligence." },
  { level: "03B", title: "SEO", sub: "Website + Automation + SEO", statement: "Or get found." },
];

export function BuildYourSystem() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <Eyebrow dark>Build your system</Eyebrow>
          </Reveal>
          <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.04] tracking-tight">
            <RevealWords text="Start with the foundation." />
            <br />
            <RevealWords text="Add what your business needs." delay={0.05} wordClassName="text-gradient-brand" />
          </h2>
        </div>

        {/* growth ladder — staggered, ascending */}
        <div className="mx-auto mt-16 max-w-3xl space-y-3">
          {LEVELS.map((l, i) => (
            <motion.div
              key={l.level}
              className="group relative flex items-center gap-6 rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 transition-colors duration-300 hover:border-cyan/30 hover:bg-white/[0.04] sm:px-8"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              style={{
                marginLeft: `${i * 18}px`,
                marginRight: `${(LEVELS.length - 1 - i) * 18}px`,
              }}
            >
              <span className="text-xs font-bold tracking-widest text-white/35">{l.level}</span>
              <div className="hidden h-px w-8 bg-white/15 sm:block" />
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{l.title}</h3>
                  <p className="mt-0.5 text-sm text-white/45">{l.sub}</p>
                </div>
                <p className="mt-2 text-sm font-medium italic text-cyan/80 sm:mt-0">
                  {l.statement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-white/40">
            One system that grows with you — choose the complexity appropriate for your stage, and
            grow into more when you're ready.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
