import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const total = TESTIMONIALS.length;

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow dark>Proof</Eyebrow>
          </div>
        </Reveal>

        <div className="relative mt-12 min-h-[16rem] text-center">
          {/* oversized quotation mark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none text-[8rem] font-bold leading-none text-white/[0.06] sm:text-[10rem]"
          >
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative mx-auto max-w-3xl text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium leading-[1.25] tracking-tight text-white/90"
            >
              {t.quote}
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`meta-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-8"
            >
              <p className="text-base font-bold text-white">{t.client}</p>
              <p className="mt-0.5 text-sm text-white/45">{t.company}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-5">
          <button
            onClick={() => setIdx((i) => (i - 1 + total) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold tabular-nums text-white/50">
            {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => setIdx((i) => (i + 1) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
