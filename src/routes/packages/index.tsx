import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS } from "../../lib/site-data";
import { PageHero, CTAButtons } from "../../components/site/page-hero";
import { Section } from "../../components/site/ui";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Packages — Choose Your Digital Growth Level | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Four NOLA packages — Website, Website + Automation, Website + Automation + AI, and Website + Automation + SEO. Choose the level of digital growth your business needs.",
      },
      { property: "og:title", content: "NOLA Web Solutions Packages" },
      {
        property: "og:description",
        content:
          "Choose the package that fits your business — from a foundation website to a full AI + SEO growth system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesIndex,
});

function PackagesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title={<>Choose the package that fits your business.</>}
        subtitle="Start with the foundation you need today and add the technology that helps your business grow. Every package builds on the one before it."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      >
        <CTAButtons
          primaryTo="/contact"
          primaryLabel="Book a Free Consultation"
          secondaryTo="/#comparison"
          secondaryLabel="Compare packages"
        />
      </PageHero>

      <Section className="py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.slug}
              className={`card-hover relative flex flex-col rounded-2xl border p-7 ${
                pkg.featured
                  ? "border-primary/40 bg-card shadow-xl shadow-primary/10"
                  : "border-border bg-card shadow-sm hover:shadow-lg"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 right-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                    <Star className="h-3 w-3 fill-current" /> Most Popular
                  </span>
                </div>
              )}
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${pkg.featured ? "text-primary" : "text-muted-foreground"}`}
              >
                {pkg.marketingLabel}
              </span>
              <h2 className="mt-3 text-xl font-bold text-foreground">{pkg.technicalName}</h2>
              <p className="mt-1 text-sm font-medium text-primary">{pkg.promise}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>
              <Link
                to={PACKAGE_PATHS[pkg.slug]}
                className="group mt-6 inline-flex items-center justify-between rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                {pkg.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
