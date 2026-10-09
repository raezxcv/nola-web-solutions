import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Bot, Workflow, Search } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

// Particle background dots for orbiting solar system
const PARTICLES = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  x: Math.sin(i * 1.2) * 220 + 300,
  y: Math.cos(i * 1.2) * 140 + 230,
  size: (i % 3) + 2,
  duration: 3 + (i % 4),
  delay: (i % 5) * 0.4,
}));

export function NolaCrm() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-36" id="crm">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <Eyebrow dark>Powering the system</Eyebrow>
          </Reveal>
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.0] tracking-tight">
            <RevealWords text="Everything flows into" />
            <br />
            <RevealWords text="one place." delay={0.05} wordClassName="text-gradient-brand" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/55">
              The NOLA CRM is the central hub that connects your website, automation, AI, and SEO into one
              organized system behind your business.
            </p>
          </Reveal>
        </div>

        {/* Solar System Orbit Hub (matching image_03.png) */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-16 max-w-4xl flex items-center justify-center min-h-[500px]">
            {/* SVG Connecting Dashed Orbit Lines & Inward Arrows */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 700 500"
              fill="none"
            >
              {/* Outer Orbit Ellipse */}
              <ellipse
                cx="350"
                cy="250"
                rx="280"
                ry="180"
                stroke="rgba(18, 200, 234, 0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Inner Accent Ring */}
              <ellipse
                cx="350"
                cy="250"
                rx="160"
                ry="105"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />

              {/* 4 Diagonal Connector Lines with Arrowheads pointing onto the central logo circle */}
              {/* Top-Left (Website) → Center */}
              <line
                x1="180"
                y1="140"
                x2="285"
                y2="208"
                stroke="rgba(18, 200, 234, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon points="285,208 274,202 278,214" fill="rgba(18, 200, 234, 0.9)" />

              {/* Top-Right (AI Chatbot) → Center */}
              <line
                x1="520"
                y1="140"
                x2="415"
                y2="208"
                stroke="rgba(18, 200, 234, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon points="415,208 422,214 426,202" fill="rgba(18, 200, 234, 0.9)" />

              {/* Bottom-Left (Local SEO) → Center */}
              <line
                x1="180"
                y1="360"
                x2="285"
                y2="292"
                stroke="rgba(18, 200, 234, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon points="285,292 278,286 274,298" fill="rgba(18, 200, 234, 0.9)" />

              {/* Bottom-Right (Automation) → Center */}
              <line
                x1="520"
                y1="360"
                x2="415"
                y2="292"
                stroke="rgba(18, 200, 234, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon points="415,292 426,298 422,286" fill="rgba(18, 200, 234, 0.9)" />
            </svg>

            {/* Small Ambient Particle Dots */}
            {PARTICLES.map((p) => (
              <motion.div
                key={p.id}
                style={{
                  position: "absolute",
                  left: `${(p.x / 600) * 100}%`,
                  top: `${(p.y / 460) * 100}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                className="rounded-full bg-cyan/60"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.9, 0.3],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Bigger Central NOLA CRM Logo Emblem (matching image_03.png) */}
            <div className="relative z-10 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-tr from-primary/30 via-cyan/25 to-transparent p-1 shadow-[0_0_80px_rgba(18,200,234,0.35)] backdrop-blur-md">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/95 p-6 border border-cyan/50">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f618e8cafd9f473bfd9d97.png"
                  alt="NOLA CRM Central Emblem"
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_16px_rgba(18,200,234,0.6)]"
                />
              </div>
            </div>

            {/* Orbiting Floating Cards matching image_03.png */}
            {/* Top-Left: Website */}
            <OrbitCard
              label="Website"
              note="lead capture"
              Icon={Monitor}
              className="absolute top-6 left-2 sm:top-10 sm:left-10"
              floatY={[-6, 6, -6]}
              delay={0}
            />

            {/* Top-Right: AI Chatbot */}
            <OrbitCard
              label="AI Chatbot"
              note="24/7 qualification"
              Icon={Bot}
              className="absolute top-6 right-2 sm:top-10 sm:right-10"
              floatY={[6, -6, 6]}
              delay={0.1}
            />

            {/* Bottom-Left: Local SEO */}
            <OrbitCard
              label="Local SEO"
              note="search visibility"
              Icon={Search}
              className="absolute bottom-6 left-2 sm:bottom-10 sm:left-10"
              floatY={[6, -6, 6]}
              delay={0.2}
            />

            {/* Bottom-Right: Automation */}
            <OrbitCard
              label="Automation"
              note="instant workflows"
              Icon={Workflow}
              className="absolute bottom-6 right-2 sm:bottom-10 sm:right-10"
              floatY={[-6, 6, -6]}
              delay={0.3}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/solutions"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink hover:bg-slate-100 px-6 py-3 text-sm font-bold shadow-md transition-all duration-300 active:scale-[0.98]"
            >
              Explore NOLA CRM
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://nolacrm.io/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <span className="relative">
                Visit nolacrm.io
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OrbitCard({
  label,
  note,
  Icon,
  className = "",
  floatY = [-5, 5, -5],
  delay = 0,
}: {
  label: string;
  note: string;
  Icon: React.ElementType;
  className?: string;
  floatY?: number[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      animate={{ y: floatY }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 0.6, ease: EASE },
        scale: { duration: 0.6, ease: EASE },
      }}
      className={`group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-3.5 sm:px-5 sm:py-3.5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:bg-white/[0.1] ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/20 text-cyan transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-white">{label}</h4>
        <p className="text-[0.65rem] text-white/55">{note}</p>
      </div>
    </motion.div>
  );
}
