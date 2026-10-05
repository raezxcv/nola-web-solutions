import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, Users, Target, Wrench, PackageCheck, Sparkles } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS, type PackageSlug } from "../../lib/site-data";
import { Section } from "../site/ui";
import { PageHero, CTAButtons } from "../site/page-hero";

export function PackageDetail({ slug }: { slug: PackageSlug }) {
  const pkg = PACKAGES.find((p) => p.slug === slug)!;
  const others = PACKAGES.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={pkg.marketingLabel}
        title={<>{pkg.headline}</>}
        subtitle={pkg.description}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Packages", to: "/packages/website" },
          { label: pkg.technicalName },
        ]}
      >
        <CTAButtons
          primaryLabel="Book a Free Consultation"
          secondaryTo="/packages/website-automation-ai"
          secondaryLabel="Compare all packages"
        />
      </PageHero>

      {/* Who it's for / problem it solves */}
      <Section className="py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-5.5 w-5.5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-foreground">Who it's for</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.bestFor}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-5.5 w-5.5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-foreground">What problem it solves</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {pkg.promise}. {pkg.description}
            </p>
          </div>
        </div>
      </Section>

      {/* Everything included */}
      <section className="bg-surface py-16 sm:py-20">
        <Section>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <PackageCheck className="h-3.5 w-3.5" /> Everything included
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">What you get.</h2>
              <ul className="mt-6 space-y-3">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Wrench className="h-3.5 w-3.5" /> Individual components
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">The technology inside.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                These are the individual services that make this package work.
              </p>
              <div className="mt-6 space-y-3">
                {pkg.services.map((s) => (
                  <div key={s.name} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-base font-bold text-foreground">{s.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* How implementation works */}
      <Section className="py-16 sm:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" /> How it works
        </span>
        <h2 className="mt-4 text-3xl font-bold text-foreground">How implementation works.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discover",
              text: "We learn your business, goals, and current setup.",
            },
            {
              step: "02",
              title: "Build",
              text: "We design and implement your website and included systems.",
            },
            {
              step: "03",
              title: "Connect",
              text: "We wire up automation, AI, or SEO as included in your package.",
            },
            {
              step: "04",
              title: "Launch",
              text: "We test, deploy, and hand off a working system.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-2xl border border-border bg-card p-6">
              <span className="text-2xl font-extrabold text-primary/20">{s.step}</span>
              <h3 className="mt-2 text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What you receive */}
      <section className="bg-surface py-16 sm:py-20">
        <Section>
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-cyan/5 p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground">What the customer receives.</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  A complete, launched digital system — not a stack of disconnected tools. Optional
                  add-ons are available as your business grows.
                </p>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <ul className="space-y-3">
                {[
                  "A live, responsive website",
                  "Connected automation workflows",
                  "Lead capture and follow-up",
                  "Ongoing launch support",
                ].map((r) => (
                  <li
                    key={r}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground/90"
                  >
                    <Check className="h-5 w-5 text-primary" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </section>

      {/* Other packages */}
      <Section className="py-16 sm:py-20">
        <h2 className="text-2xl font-bold text-foreground">Explore other packages</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to={PACKAGE_PATHS[o.slug]}
              className="card-hover group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {o.marketingLabel}
              </span>
              <h3 className="mt-2 text-base font-bold text-foreground">{o.technicalName}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.promise}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View package{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
        <Section className="relative text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to build your system?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Book a free consultation and we'll help you confirm {pkg.marketingLabel} is the right
            fit.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons primaryLabel="Book a Free Consultation" />
          </div>
        </Section>
      </section>
    </>
  );
}
