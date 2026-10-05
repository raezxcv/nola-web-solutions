import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const NODES = [
  { label: "Website", x: 14, y: 34, delay: 1.1 },
  { label: "Automation", x: 80, y: 20, delay: 1.35 },
  { label: "AI", x: 86, y: 68, delay: 1.6 },
  { label: "SEO", x: 22, y: 76, delay: 1.85 },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      {/* layered background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.18] mix-blend-soft-light" />
      <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-primary/18 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-6%] h-[30rem] w-[30rem] rounded-full bg-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/55 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            NOLA Web Solutions
          </motion.div>

          <h1 className="mt-8 text-[clamp(2.6rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
            <RevealWords text="Build what your" />
            <br />
            <RevealWords text="business" delay={0.18} />
            <br />
            <RevealWords text="needs" delay={0.34} />{" "}
            <span className="text-gradient-brand">
              <RevealWords text="next." delay={0.42} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Websites, automation, AI and SEO — designed to work together as one system that helps
            your business attract customers, save time, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/packages/website-automation-ai"
              className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Explore Packages
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/packages"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <span className="relative">
                See how it works
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* abstract forming network */}
        <div className="relative mx-auto mt-14 h-[240px] w-full max-w-3xl sm:mt-20 sm:h-[300px]">
          <NetworkVisual />
        </div>
      </div>
    </section>
  );
}

function NetworkVisual() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1769FF" stopOpacity="0.7" />
            <stop offset="1" stopColor="#12C8EA" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="heroGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#1769FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#1769FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* center glow */}
        <motion.circle
          cx="50"
          cy="50"
          r="22"
          fill="url(#heroGlow)"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* spokes from center to nodes */}
        {NODES.map((n, i) => (
          <motion.line
            key={`spoke-${i}`}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="url(#heroLine)"
            strokeWidth="0.25"
            strokeDasharray="60"
            initial={{ strokeDashoffset: 60, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 0.55 }}
            transition={{ duration: 0.9, ease: EASE, delay: n.delay - 0.15 }}
          />
        ))}

        {/* perimeter ring connecting nodes */}
        <motion.path
          d="M14,34 L80,20 L86,68 L22,76 Z"
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="0.2"
          strokeDasharray="200"
          initial={{ strokeDashoffset: 200, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.3 }}
          transition={{ duration: 1.6, ease: EASE, delay: 2 }}
        />
      </svg>

      {/* center NOLA node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm sm:h-20 sm:w-20">
          <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
          <span className="relative text-base font-extrabold tracking-tight text-white sm:text-lg">
            NOLA
          </span>
        </div>
      </motion.div>

      {/* surrounding nodes */}
      {NODES.map((n) => (
        <motion.div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: n.delay }}
        >
          <div className="group flex items-center gap-2 rounded-xl border border-white/10 bg-ink-2/80 px-3 py-2 backdrop-blur-sm transition-colors duration-300 hover:border-cyan/40">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
            <span className="text-xs font-semibold text-white/85">{n.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
