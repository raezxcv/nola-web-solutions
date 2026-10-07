import { TRUST_METRICS } from "../../lib/site-data";
import { Counter } from "../site/counter";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-border">
        {TRUST_METRICS.map((m) => (
          <div
            key={m.label}
            className="flex flex-col items-center justify-center px-4 py-7 text-center"
          >
            <Counter
              value={m.value}
              className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            />
            <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
