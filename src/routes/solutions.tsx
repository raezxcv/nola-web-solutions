import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SOLUTIONS, ASSETS } from "../lib/site-data";
import { PageHero, CTAButtons } from "../components/site/page-hero";
import { Section } from "../components/site/ui";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Specialized NOLA Solutions — CRM, Realty, HealthPro" },
      {
        name: "description",
        content:
          "Specialized NOLA products: NOLA CRM for general businesses, NOLA Realty CRM for real estate, and NOLA HealthPro CRM for healthcare and weight-loss businesses.",
      },
      { property: "og:title", content: "Specialized NOLA Solutions" },
      {
        property: "og:description",
        content:
          "NOLA CRM, NOLA Realty CRM, and NOLA HealthPro CRM — specialized products powering the NOLA system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialized NOLA Solutions"
        title={<>The CRM products powering the system.</>}
        subtitle="These specialized NOLA products are infrastructure — not the primary package offer. They power the packages behind the scenes, tailored to your industry."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Solutions" }]}
      >
        <CTAButtons
          primaryTo="/contact"
          primaryLabel="Book a Free Consultation"
          secondaryTo="/packages/website-automation-ai"
          secondaryLabel="View Packages"
        />
      </PageHero>

      <Section className="py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <div
              key={s.name}
              className="card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-2">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {s.tag}
                </span>
                <h2 className="mt-2 text-xl font-bold text-foreground">{s.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.blurb}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Explore {s.name}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CRM infrastructure section */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <Section className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
                Powering the system
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Powering the system behind your business.
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                <li>Your website brings people in.</li>
                <li>Your CRM keeps everything organized.</li>
                <li>Automation keeps things moving.</li>
                <li>AI helps handle conversations.</li>
                <li>SEO helps people discover you.</li>
              </ul>
              <a
                href="https://nolacrm.io/"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110"
              >
                Explore NOLA CRM
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-cyan/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">
                <img
                  src={ASSETS.crmLaptop}
                  alt="NOLA CRM dashboard"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Section>
      </section>

      <Section className="py-16 sm:py-20">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-cyan/5 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Packages are the primary offer.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            These specialized products power the packages — explore the package that fits your
            business.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/packages/website-automation-ai"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110"
            >
              View Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
