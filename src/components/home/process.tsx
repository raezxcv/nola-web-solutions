import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../../lib/site-data";
import { Eyebrow, Icon } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Process() {
  return (
    <section className="bg-surface py-24 sm:py-32" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
              <RevealWords text="From package to launch." />
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              A clear, five-step path from first conversation to ongoing growth.
            </p>
          </div>
        </Reveal>

        {/* horizontal timeline with progress line */}
        <div className="relative mt-16">
          <div className="absolute left-0 top-7 hidden h-px w-full bg-border lg:block" />
          <motion.div
            className="absolute left-0 top-7 hidden h-px bg-primary lg:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PROCESS_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                className="relative"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface">
                  <Icon name={s.icon} className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-5">
                  <span className="text-xs font-bold tracking-widest text-primary">{s.step}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
