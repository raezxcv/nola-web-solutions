import { motion } from "framer-motion";
import { PORTFOLIO } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Portfolio() {
  return (
    <section className="bg-ink py-24 sm:py-32 text-white relative overflow-hidden" id="work">
      {/* subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <Eyebrow dark>Our work</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-white">
                Built for real businesses.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-white/60">
              A selection of projects across industries — each one a complete digital system, not
              just a website.
            </p>
          </div>
        </Reveal>

        {/* 2-column cards with directional gradient shadow, no inner img container, smaller images */}
        <div className="mt-16 space-y-12 sm:space-y-16">
          {PORTFOLIO.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={p.industry}
                className={`relative grid items-center gap-8 rounded-3xl border border-white/10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 overflow-hidden backdrop-blur-xl ${
                  flip
                    ? "bg-gradient-to-l from-white/[0.05] via-white/[0.02] to-transparent"
                    : "bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent"
                }`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {/* Directional subtle side shadow overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 ${
                    flip
                      ? "bg-gradient-to-l from-cyan-500/[0.08] via-transparent to-primary/[0.04]"
                      : "bg-gradient-to-r from-primary/[0.08] via-transparent to-cyan-500/[0.04]"
                  }`}
                />

                {/* Image directly inside column — smaller, centered cleanly */}
                <div
                  className={`relative flex items-center justify-center lg:col-span-6 ${
                    flip ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.industry}
                    className="max-h-[200px] sm:max-h-[260px] w-auto max-w-[82%] rounded-xl object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className={`relative z-10 lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-cyan">
                    {p.industry}
                  </span>
                  <h3 className="mt-3 text-[clamp(1.4rem,2.5vw,2rem)] font-bold leading-[1.15] tracking-tight text-white">
                    {p.description}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.components.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/20 bg-transparent px-3 py-1 text-xs font-semibold text-white/80"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
