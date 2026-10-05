import { motion } from "framer-motion";
import { WHY_NOLA } from "../../lib/site-data";
import { Eyebrow, Icon } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WhyNola() {
  return (
    <section className="bg-background py-24 sm:py-32" id="why">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* left: statement */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Why NOLA</Eyebrow>
              <h2 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.0] tracking-tight text-foreground">
                <RevealWords text="One partner for" />
                <br />
                <span className="text-gradient-soft">
                  <RevealWords text="the whole system." delay={0.18} />
                </span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                Not a stack of disconnected vendors — a single team building the website,
                automation, AI, SEO and CRM around how your business actually works.
              </p>
            </Reveal>
          </div>

          {/* right: reasons as an editorial list, not a card grid */}
          <div className="divide-y divide-border border-y border-border">
            {WHY_NOLA.map((w, i) => (
              <motion.div
                key={w.title}
                className="group flex items-start gap-5 py-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              >
                <span className="text-sm font-bold tabular-nums text-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={w.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
