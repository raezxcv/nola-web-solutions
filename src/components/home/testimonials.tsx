import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../lib/site-data";
import { Eyebrow } from "../site/ui";
import { Reveal } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx] ?? TESTIMONIALS[0];
  const total = TESTIMONIALS.length;

  if (!t) return null;

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-36" id="reviews">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow dark>Proof & Reviews</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Trusted By Entrepreneurs & Agency Founders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
              Read verified feedback from business leaders, digital entrepreneurs, and clients who rely on Norwin and NOLA Web Solutions.
            </p>
          </div>
        </Reveal>

        {/* Testimonials Carousel Container */}
        <div className="relative mt-16 mx-auto max-w-4xl">
          <div className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-14 backdrop-blur-xl min-h-[440px]">
            <div>
              <div className="flex items-center justify-between gap-4">
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                    5.0 Verified Review
                  </span>
                </div>

                <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-white/60">
                  {idx + 1} of {total}
                </span>
              </div>

              {/* Quote icon with generous top/bottom margin */}
              <div className="mt-8 mb-6">
                <Quote aria-hidden className="h-12 w-12 text-cyan/40" />
              </div>

              {/* Testimonial Headline + Body Quote with increased vertical spacing */}
              <div className="relative min-h-[14rem] pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="space-y-4"
                  >
                    {t.headline && (
                      <h3 className="text-xl font-bold tracking-tight text-cyan sm:text-2xl">
                        {t.headline}
                      </h3>
                    )}
                    <blockquote className="text-base font-normal leading-relaxed text-white/90 sm:text-lg sm:leading-relaxed">
                      {t.quote}
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Author info + Carousel Controls */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`meta-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-primary to-cyan font-bold text-white text-lg shadow-lg">
                    {t.client.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{t.client}</h4>
                    <p className="text-xs text-white/60">{t.company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIdx((i) => (i - 1 + total) % total)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1.5 px-2">
                  {TESTIMONIALS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setIdx(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIdx === idx ? "w-6 bg-cyan" : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIdx((i) => (i + 1) % total)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
                  aria-label="Next review"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
