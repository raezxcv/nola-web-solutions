import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROBLEM_SOLUTION, PACKAGE_PATHS } from "../../lib/site-data";
import { Eyebrow, Icon } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-dots-dark opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow dark>Match your challenge</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.04] tracking-tight">
              What's holding your business back?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/55">
              Every common business problem maps to a NOLA package. Find yours.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] md:grid-cols-2">
          {PROBLEM_SOLUTION.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={PACKAGE_PATHS[p.slug]}
                className="group relative flex items-center gap-5 bg-ink p-7 transition-colors duration-300 hover:bg-white/[0.03] sm:p-9"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-cyan">
                  <Icon name={p.icon} className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-white">{p.problem}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/45">
                    <span className="h-px w-5 bg-cyan/40" />
                    {p.package}
                  </div>
                </div>
                <motion.span
                  className="text-white/30 transition-colors group-hover:text-cyan"
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
