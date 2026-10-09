import { Reveal, RevealWords } from "../site/reveal";

/**
 * A typography-only dark chapter used as a dramatic transition between
 * visual sections. No illustrations, no cards — just oversized type.
 */
export function TypeStatement({
  lines,
  accentLast = false,
  sub,
}: {
  lines: string[];
  accentLast?: boolean;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-[clamp(2.2rem,7vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight">
          {lines.map((line, i) => {
            const isLast = i === lines.length - 1;
            const accent = accentLast && isLast;
            return (
              <span key={i} className="block">
                <RevealWords
                  text={line}
                  delay={0.1 + i * 0.12}
                  wordClassName={accent ? "text-gradient-brand" : ""}
                />
              </span>
            );
          })}
        </h2>
        {sub && (
          <Reveal delay={lines.length * 0.05 + 0.1}>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/45">{sub}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
