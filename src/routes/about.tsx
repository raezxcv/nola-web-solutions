import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { ASSETS, WHY_NOLA } from "../lib/site-data";
import { PageHero, CTAButtons } from "../components/site/page-hero";
import { Section } from "../components/site/ui";
import { Icon } from "../components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NOLA Web Solutions — Technology Should Make Business Easier" },
      {
        name: "description",
        content:
          "NOLA Web Solutions is a technology partner helping businesses implement websites, automation, AI, SEO, CRM, and connected digital systems designed around real growth.",
      },
      { property: "og:title", content: "About NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Technology should make business easier. Meet the team behind NOLA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NOLA"
        title={<>Technology should make business easier.</>}
        subtitle="NOLA Web Solutions is a technology partner that helps businesses implement websites, automation, AI, SEO, CRM, and connected digital systems — all designed around real business growth."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <Section className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-cyan/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <img
                src={ASSETS.founder}
                alt="Norwin Lacson, Founder of NOLA Web Solutions"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Founder
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground">Norwin Lacson</h2>
            <p className="text-sm text-muted-foreground">Founder of NOLA Web Solutions</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              NOLA was built on a simple idea: businesses don't need more disconnected tools — they
              need a connected system. From your website to automation, AI, SEO, and local
              visibility, NOLA combines the right technology into practical packages designed around
              business growth, not buzzwords.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We don't just build websites. We build the digital system around your business.
            </p>
            <div className="mt-8">
              <CTAButtons
                primaryTo="/contact"
                primaryLabel="Work with NOLA"
                secondaryTo="/packages/website-automation-ai"
                secondaryLabel="View Packages"
              />
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-surface py-16 sm:py-24">
        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our mission",
                text: "Make technology practical — build systems that help businesses attract customers, save time, and grow.",
              },
              {
                icon: Eye,
                title: "Our approach",
                text: "Package-first. Sell the outcome, explain the technology behind it. One partner for the whole system.",
              },
              {
                icon: Heart,
                title: "Our promise",
                text: "Start where you are and grow when you're ready. No business has to implement everything at once.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section className="py-16 sm:py-24">
        <h2 className="text-3xl font-bold text-foreground">Why NOLA?</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_NOLA.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={w.icon} className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.blurb}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Let's build your system
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>
    </>
  );
}
