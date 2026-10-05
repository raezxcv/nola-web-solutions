import { Reveal, RevealWords } from "../site/reveal";

/**
 * Editorial breathing moment after the hero. Light, centered, lots of
 * whitespace. Replaces the old trust-bar counter strip.
 */
export function IntroReset() {
  return (
    <section className="relative bg-background py-32 sm:py-44">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.04] tracking-tight text-foreground">
            <RevealWords text="Your website is only" />
            <br />
            <span className="text-gradient-soft">
              <RevealWords text="the beginning." delay={0.2} />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            NOLA connects the website, automation, AI, SEO and systems behind your business into one
            digital experience — so the work you can't see keeps the business you can see moving.
          </p>
        </Reveal>

        {/* quiet credibility line */}
        <Reveal delay={0.45}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              120+ projects completed
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              90+ businesses served
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              5★ client testimonials
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
