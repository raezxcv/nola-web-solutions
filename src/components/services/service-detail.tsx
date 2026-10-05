import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Layers } from "lucide-react";
import { SERVICES, PACKAGES, PACKAGE_PATHS } from "../../lib/site-data";
import { Section } from "../site/ui";
import { PageHero, CTAButtons } from "../site/page-hero";

export interface ServiceContent {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  overview: string;
  capabilities: string[];
  packages: string[]; // package slugs that include this service
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "web-design": {
    slug: "web-design",
    name: "Website Design",
    icon: "Monitor",
    tagline: "A modern website designed around your brand and business goals.",
    overview:
      "Your website is the foundation of every NOLA package. We design modern, responsive, conversion-focused sites built around your brand, your customers, and what you actually want them to do next.",
    capabilities: [
      "Custom website design around your brand",
      "Responsive layouts for every device",
      "Conversion-focused page structure",
      "Contact and lead forms",
      "Business information setup",
      "Analytics and tracking setup",
    ],
    packages: ["website", "website-automation", "website-automation-ai", "website-automation-seo"],
  },
  automation: {
    slug: "automation",
    name: "Automation",
    icon: "Workflow",
    tagline: "Connect forms, CRM, follow-ups, bookings, notifications, and other workflows.",
    overview:
      "Automation turns your website into a working system. We connect lead capture, CRM, follow-ups, bookings, and notifications so nothing falls through the cracks and your team spends time on the work that matters.",
    capabilities: [
      "Lead capture automation",
      "CRM integration",
      "Automated follow-ups",
      "Forms and workflows",
      "Appointment and booking automation",
      "Lead notifications",
      "SMS / email automation where applicable",
    ],
    packages: ["website-automation", "website-automation-ai", "website-automation-seo"],
  },
  ai: {
    slug: "ai",
    name: "AI Chatbot",
    icon: "Bot",
    tagline: "Use AI to help answer questions, qualify leads, and support customer communication.",
    overview:
      "AI helps handle customer conversations around the clock. From answering common questions to qualifying leads and routing conversations to your team, AI is applied where it actually helps your business — not just for show.",
    capabilities: [
      "AI chatbot on your website",
      "AI lead qualification",
      "Automated customer responses",
      "FAQ / knowledge base",
      "AI conversation routing",
      "Lead handoff to your team",
      "Customer support automation",
    ],
    packages: ["website-automation-ai"],
  },
  seo: {
    slug: "seo",
    name: "SEO",
    icon: "Search",
    tagline: "Improve website structure, content, visibility, and search performance.",
    overview:
      "SEO helps the customers already looking for you find you. We improve your website structure, content, and search performance — and optimize your local presence so you show up where it matters.",
    capabilities: [
      "SEO strategy",
      "On-page SEO",
      "Website optimization",
      "Keyword optimization",
      "Technical SEO improvements",
      "Local SEO",
      "Search visibility improvements",
    ],
    packages: ["website-automation-seo"],
  },
  "google-business-profile": {
    slug: "google-business-profile",
    name: "Google Business Profile",
    icon: "MapPin",
    tagline:
      "Optimize the business profile and local presence to help customers discover the business.",
    overview:
      "Your Google Business Profile is part of your local-growth system — not a standalone task. We optimize and manage it as part of the SEO package so customers searching locally discover and contact your business.",
    capabilities: [
      "Google Business Profile optimization",
      "Google Business Profile management where applicable",
      "Local business optimization",
      "Local search visibility",
    ],
    packages: ["website-automation-seo"],
  },
  crm: {
    slug: "crm",
    name: "CRM",
    icon: "UsersRound",
    tagline: "Centralize customer information and manage leads and interactions.",
    overview:
      "The NOLA CRM is the infrastructure that powers every package. It centralizes customer information, manages leads and interactions, and connects to your automation, AI, and website so everything works as one system.",
    capabilities: [
      "Centralized contact management",
      "Lead pipeline and tracking",
      "Interaction history",
      "Integration with automation and AI",
      "Connected to your website forms",
    ],
    packages: ["website-automation", "website-automation-ai", "website-automation-seo"],
  },
  sms: {
    slug: "sms",
    name: "SMS Marketing",
    icon: "MessageSquareText",
    tagline: "Connect customers through direct and automated messaging where applicable.",
    overview:
      "SMS keeps you in your customers' pockets. We connect direct and automated messaging into your workflows so follow-ups, reminders, and promotions reach customers where they actually read them.",
    capabilities: [
      "Automated SMS follow-ups",
      "Appointment reminders",
      "Promotional messaging where applicable",
      "Integrated with your CRM and automation",
    ],
    packages: ["website-automation", "website-automation-ai", "website-automation-seo"],
  },
  payments: {
    slug: "payments",
    name: "Payments",
    icon: "CreditCard",
    tagline: "Support digital payment experiences where included or offered.",
    overview:
      "Digital payments close the loop. Where included or offered, we support digital payment experiences connected to your website and CRM so customers can pay without friction.",
    capabilities: [
      "Digital payment experiences where offered",
      "Connected to your website",
      "Integrated with your CRM",
    ],
    packages: ["website-automation", "website-automation-ai", "website-automation-seo"],
  },
};

export function ServiceDetail({ slug }: { slug: string }) {
  const content = SERVICE_CONTENT[slug];
  if (!content) return null;

  const includedPackages = PACKAGES.filter((p) => content.packages.includes(p.slug));

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={content.name}
        subtitle={content.tagline}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services/web-design" },
          { label: content.name },
        ]}
      >
        <CTAButtons
          primaryTo="/contact"
          primaryLabel="Book a Free Consultation"
          secondaryTo="/packages/website-automation-ai"
          secondaryLabel="See it in a package"
        />
      </PageHero>

      <Section className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Layers className="h-3.5 w-3.5" /> Overview
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">What this service does.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {content.overview}
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Capabilities</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {content.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-bold text-foreground">Included in these packages</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                This service is a component of the following NOLA packages.
              </p>
              <div className="mt-4 space-y-3">
                {includedPackages.map((p) => (
                  <Link
                    key={p.slug}
                    to={PACKAGE_PATHS[p.slug]}
                    className="group flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {p.marketingLabel}
                      </span>
                      <p className="text-sm font-bold text-foreground">{p.technicalName}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
        <Section className="relative text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">See how this fits your system.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Services are ingredients. Packages are products. Explore the package that includes{" "}
            {content.name}.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons primaryTo="/packages/website-automation-ai" primaryLabel="View Packages" />
          </div>
        </Section>
      </section>
    </>
  );
}

export function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>What's inside our packages.</>}
        subtitle="These are the individual capabilities that make each NOLA package work. They're components of the NOLA ecosystem — not a menu to pick from."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <Section className="py-16 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const content = SERVICE_CONTENT[s.slug];
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {/* reuse icon via dynamic import not needed; use lucide directly */}
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {content?.tagline ?? s.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}

import * as Icons from "lucide-react";
function ServiceIcon({ name }: { name: string }) {
  const Cmp =
    (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ??
    Icons.Box;
  return <Cmp className="h-6 w-6" />;
}
