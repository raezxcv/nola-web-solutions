import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO } from "../lib/site-data";
import { PageHero, CTAButtons } from "../components/site/page-hero";
import { Section } from "../components/site/ui";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Built for Real Businesses | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "A selection of NOLA projects across industries — each one a complete digital system, not just a website.",
      },
      { property: "og:title", content: "Our Work | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Built for real businesses — websites, automation, CRM, and AI in action.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={<>Built for real businesses.</>}
        subtitle="A selection of projects across industries — each one a complete digital system, not just a website."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Work" }]}
      >
        <CTAButtons
          primaryTo="/contact"
          primaryLabel="Start your project"
          secondaryTo="/packages/website-automation-ai"
          secondaryLabel="View Packages"
        />
      </PageHero>

      <Section className="py-16 sm:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {PORTFOLIO.map((p) => (
            <article
              key={p.industry}
              className="card-hover group overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <img
                  src={p.image}
                  alt={p.industry}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {p.industry}
                </span>
                <h2 className="mt-2 text-xl font-bold text-foreground">{p.description}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.components.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
        <Section className="relative text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Your business could be next.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Let's build the digital system around your business.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Section>
      </section>
    </>
  );
}
