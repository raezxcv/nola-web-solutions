import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../site/ui";
import { Reveal, RevealWords } from "../site/reveal";

export function About() {
  return (
    <section className="relative overflow-hidden bg-background py-28 sm:py-36" id="about">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>About NOLA</Eyebrow>
          </div>
        </Reveal>
        <h2 className="mx-auto mt-7 max-w-3xl text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.0] tracking-tight text-foreground">
          <RevealWords text="We build technology" />
          <br />
          <span className="text-gradient-soft">
            <RevealWords text="around the way" delay={0.16} />
          </span>{" "}
          <RevealWords text="business" delay={0.28} />{" "}
          <RevealWords text="actually works." delay={0.36} />
        </h2>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            NOLA Web Solutions is a technology partner that helps businesses implement websites,
            automation, AI, SEO, CRM, and connected digital systems — all designed around real
            business growth.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-1 rounded-2xl border border-border bg-surface px-6 py-5 sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Founder
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">Norwin Lacson</p>
              <p className="text-sm text-muted-foreground">Founder of NOLA Web Solutions</p>
            </div>
            <Link
              to="/about"
              className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary sm:mt-0"
            >
              <span className="relative">
                Learn more
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
