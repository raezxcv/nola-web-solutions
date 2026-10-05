import { motion } from "framer-motion";
import { PORTFOLIO } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Portfolio() {
  return (
    <section className="bg-background py-24 sm:py-32" id="work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Our work</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
                Built for real businesses.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              A selection of projects across industries — each one a complete digital system, not
              just a website.
            </p>
          </div>
        </Reveal>

        {/* editorial alternating layout */}
        <div className="mt-16 space-y-16 sm:space-y-24">
          {PORTFOLIO.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={p.industry}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/10 to-cyan/5 blur-2xl" />
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-surface-2">
                    <img
                      src={p.image}
                      alt={p.industry}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={flip ? "lg:order-1" : ""}>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    {p.industry}
                  </span>
                  <h3 className="mt-4 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                    {p.description}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.components.map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground"
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
