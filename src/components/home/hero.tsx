import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords } from "../site/reveal";
import GradientWaves from "../site/gradient-waves";
import FlexCarousel from "../site/flex-carousel";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ink text-white pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Optimized GradientWaves background — smooth detail, low raymarch steps for maximum FPS */}
      <div className="pointer-events-none absolute inset-0">
        <GradientWaves
          horizonColor="#07111F"
          waveColor="#1254D4"
          crestColor="#12C8EA"
          speed={0.25}
          amplitude={2.0}
          waveScale={0.58}
          waveRatio={0.88}
          swell={24}
          turbulence={14}
          tilt={1.02}
          zoom={1.0}
          height={4.2}
          fogDepth={24}
          detail="medium"
          brightness={1.05}
          opacity={0.65}
          mouseInteraction={true}
          parallaxStrength={0.3}
          grain={false}
        />
      </div>

      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />

      {/* Hero text + CTA */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          {/* Eyebrow — shimmer badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="mb-8 inline-flex"
          >
            <span
              className="inline-flex items-center gap-3 rounded-full px-5 py-2 text-sm font-medium backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(18,200,234,0.08) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 0 24px rgba(18,200,234,0.08) inset",
              }}
            >
              <span className="text-white/40 text-base leading-none" aria-hidden>
                ✦
              </span>
              <span
                className="text-white/65 tracking-widest uppercase text-xs font-semibold"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "0.2em" }}
              >
                NOLA WEB SOLUTIONS
              </span>
              <span className="text-white/40 text-base leading-none" aria-hidden>
                ✦
              </span>
            </span>
          </motion.div>

          {/* Headline — DM Sans display */}
          <h1 className="text-[clamp(3.2rem,7.5vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.02em]">
            <span className="block">
              <RevealWords text="Attract customers." />
            </span>
            <span className="block">
              <RevealWords text="Automate" delay={0.16} />{" "}
              <RevealWords text="the rest." delay={0.26} wordClassName="text-gradient-brand" />
            </span>
          </h1>

          {/* Subheadline — Key Capabilities List */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.42 }}
            className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base sm:text-lg md:text-xl font-semibold tracking-wide text-white/75"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span>Websites</span>
            <span className="text-xs" aria-hidden>
              •
            </span>
            <span>CRM</span>
            <span className="text-xs" aria-hidden>
              •
            </span>
            <span>Automation</span>
            <span className="text-xs" aria-hidden>
              •
            </span>
            <span>AI</span>
            <span className="text-xs" aria-hidden>
              •
            </span>
            <span>SEO</span>
          </motion.h2>

          {/* Body Paragraph — subtle, secondary copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/45 font-normal"
          >
            We connect your web presence with intelligent AI assistants, CRM workflows, and
            automated lead capture — built to turn visitors into clients around the clock.
          </motion.p>

          {/* Single User-Friendly Capsule CTA (White bg -> Outline on hover) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="mt-10 flex items-center justify-center"
          >
            <Link
              to="/packages/website-automation-ai"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-7 py-3 text-sm font-bold text-ink shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-cyan/20"
            >
              Explore Packages
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

{
  /* Dedicated Section for FlexCarousel — 0 top/bottom padding, matching bg-background color of IntroReset section */
}
export function HeroCarouselSection() {
  return (
    <section className="relative w-full bg-background text-foreground py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative w-full py-0"
        style={{ height: "500px" }}
      >
        <FlexCarousel
          preset="ribbon"
          intro="rise"
          cardHeight={0.58}
          gap={16}
          radius={16}
          squeeze={0.16}
          focusOnClick={false}
          captureWheel={false}
          followCursor={false}
          draggable={false}
          speed={45}
          captions={false}
          autoplay
        />
      </motion.div>
    </section>
  );
}
