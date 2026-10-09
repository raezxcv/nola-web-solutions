import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREDENTIALS = [
  "10+ Years Digital Tech Experience",
  "GoHighLevel & CRM Automation Expert",
  "Custom AI Chatbot Deployment",
  "Dedicated 1-on-1 Client Support",
];

export function About() {
  return (
    <section
      className="relative overflow-hidden bg-background pt-20 sm:pt-28"
      id="about"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-end">
          {/* Left — Text block */}
          <div className="flex flex-col justify-center lg:col-span-7 pb-12 sm:pb-20">
            <Reveal>
              <Eyebrow>About NOLA</Eyebrow>
            </Reveal>

            <div className="mt-6">
              <h2 className="text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold leading-[1.02] tracking-tight text-foreground">
                <RevealWords text="We build technology" />
                <br />
                <RevealWords text="around the way" delay={0.06} wordClassName="text-gradient-soft" />{" "}
                <RevealWords text="business" delay={0.12} />{" "}
                <RevealWords text="actually works." delay={0.18} />
              </h2>
            </div>

            <Reveal delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Founded by <strong className="font-semibold text-foreground">Norwin Lacson</strong>, NOLA Web Solutions is a technology partner helping businesses implement websites,
                automation, AI, SEO, CRM, and connected digital systems — all designed around real
                business growth.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Norwin Lacson has spent nearly a decade building custom web architecture, GoHighLevel CRM
                workflows, funnel systems, and AI chatbot solutions for clients generating tens of
                millions of dollars online.
              </p>
            </Reveal>

            {/* Credentials */}
            <Reveal delay={0.4}>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    <span className="text-sm font-medium text-foreground/80">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Neutral Dark Action Button */}
            <Reveal delay={0.5}>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-black active:scale-[0.98]"
                >
                  <span>Learn More About NOLA</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — Founder image */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              src="https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6ac8988acc7a5a2b734e0fb5.png"
              alt="Norwin Lacson — Founder & Lead Architect of NOLA Web Solutions"
              className="max-h-[640px] sm:max-h-[720px] w-auto object-contain object-bottom scale-105 sm:scale-110 origin-bottom drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
