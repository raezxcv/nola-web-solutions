import { motion } from "framer-motion";
import { Reveal, RevealWords } from "../site/reveal";
import { Counter } from "../site/counter";

const STATS = [
  { value: "120+", label: "Projects Completed" },
  { value: "90+", label: "Businesses Served" },
  { value: "5★", label: "Client Testimonials" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Editorial breathing moment after the hero. Light, centered, lots of
 * whitespace with prominent animated credibility numbers.
 */
export function IntroReset() {
  return (
    <section className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.04] tracking-tight text-foreground">
            <RevealWords text="Your website is only" />
            <br />
            <RevealWords text="the beginning." delay={0.2} wordClassName="text-gradient-soft" />
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            NOLA connects the website, automation, AI, SEO and systems behind your business into one
            digital experience — so the work you can't see keeps the business you can see moving.
          </p>
        </Reveal>

        {/* Big Entrance-Animated Credibility Numbers with line dividers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0 sm:divide-x sm:divide-border/60"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 + i * 0.15 }}
              className="flex flex-col items-center px-8 sm:px-12 md:px-16 text-center"
            >
              <Counter
                value={stat.value}
                duration={2.2}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gradient-brand"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
              <span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
