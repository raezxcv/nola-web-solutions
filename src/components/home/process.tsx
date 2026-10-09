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

        {/* Horizontal timeline with left-to-right animated progress line */}
        <div className="relative mt-20">
          {/* Background track line */}
          <div className="absolute left-0 top-7 hidden h-1 w-full rounded-full bg-slate-200 lg:block" />

          {/* Animated gradient progress line running left-to-right */}
          <motion.div
            className="absolute left-0 top-7 hidden h-1 rounded-full bg-gradient-to-r from-blue-600 via-primary to-cyan shadow-[0_0_16px_rgba(18,200,234,0.6)] lg:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.8, ease: EASE }}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PROCESS_STEPS.map((s, i) => {
              const delayTime = 0.2 + i * 0.35;
              return (
                <motion.div
                  key={s.step}
                  className="relative"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.15 }}
                >
                  {/* Icon Checkpoint Node with Popout & Shine effect when line hits */}
                  <motion.div
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md"
                    initial={{ scale: 0.85, boxShadow: "0 0 0px rgba(18,200,234,0)" }}
                    whileInView={{
                      scale: [0.85, 1.2, 1],
                      borderColor: ["rgba(226,232,240,1)", "rgba(18,200,234,1)", "rgba(18,200,234,0.5)"],
                      boxShadow: [
                        "0 0 0px rgba(18,200,234,0)",
                        "0 0 30px rgba(18,200,234,0.8)",
                        "0 4px 12px rgba(18,200,234,0.25)",
                      ],
                    }}
                    viewport={{ once: true, margin: "-8%" }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                      delay: delayTime,
                    }}
                  >
                    <Icon name={s.icon} className="h-6 w-6 text-blue-600" />
                  </motion.div>

                  <div className="mt-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
                      {s.step}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
