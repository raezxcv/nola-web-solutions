import { motion } from "framer-motion";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function BirRegistration() {
  return (
    <section
      className="relative overflow-hidden bg-background py-28 sm:py-40 border-t border-border"
      id="bir-registration"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Large headline */}
        <div className="text-center">
          <Reveal>
            <Eyebrow>BIR Registration</Eyebrow>
          </Reveal>
          <h2 className="mx-auto mt-7 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-tight text-foreground">
            <RevealWords text="Transparency, accountability," />
            <br />
            <RevealWords text="and trust in every" delay={0.06} wordClassName="text-gradient-soft" />{" "}
            <RevealWords text="business relationship." delay={0.12} />
          </h2>

          <Reveal delay={0.35}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              NOLA Web Solutions believes in building lasting business relationships through
              transparency, integrity, and accountability. Our official registration information
              is available to clients and partners.
            </p>
          </Reveal>
        </div>

        {/* BIR Seal — enlarged significantly */}
        <Reveal delay={0.5}>
          <div className="mt-16 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6ac888f5bbad531ac849aa13.png"
              alt="BIR Registration Seal"
              className="w-full max-w-xl sm:max-w-3xl lg:max-w-4xl object-contain hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
