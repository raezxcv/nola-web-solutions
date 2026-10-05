import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  { k: "01", text: "Start with a strong website." },
  { k: "02", text: "Add automation to streamline your workflow." },
  { k: "03", text: "Add AI when customer conversations grow." },
  { k: "04", text: "Add SEO when you want to increase visibility." },
];

export function UpgradeMessage() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Flexible by design</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
                <RevealWords text="Start where you are." />
                <br />
                <span className="text-gradient-soft">
                  <RevealWords text="Grow when you're ready." delay={0.18} />
                </span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Your business doesn't have to implement everything at once. The packages are
                designed to grow with you — so you never feel locked into the wrong starting point.
              </p>
              <Link
                to="/packages/website"
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                <span className="relative">
                  Start with the foundation
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ol className="relative space-y-3">
              {STEPS.map((s, i) => (
                <motion.li
                  key={s.k}
                  className="group relative flex items-center gap-5 rounded-xl border border-border bg-card px-5 py-4 transition-colors duration-300 hover:border-foreground/20"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                  style={{ marginLeft: `${i * 14}px` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {s.k}
                  </span>
                  <span className="text-sm font-medium text-foreground/85">{s.text}</span>
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
