import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { SOLUTIONS, ASSETS } from "../lib/site-data";
import { PageHero } from "../components/site/page-hero";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Specialized NOLA Solutions — CRM Infrastructure | NOLA" },
      {
        name: "description",
        content:
          "Specialized NOLA products: NOLA CRM for general businesses, NOLA Realty CRM for real estate, and NOLA HealthPro CRM for healthcare and clinics.",
      },
      { property: "og:title", content: "Specialized NOLA Solutions | Infrastructure" },
      {
        property: "og:description",
        content:
          "NOLA CRM, NOLA Realty CRM, and NOLA HealthPro CRM — specialized infrastructure powering our growth packages.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Top Banner */}
      <PageHero
        eyebrow="Specialized NOLA Solutions"
        title={<>The CRM products powering the system.</>}
        subtitle="These specialized NOLA products are infrastructure — powering your packages behind the scenes, tailored to your industry."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Solutions" }]}
      />

      {/* Under Banner: Clean White & Neutral Layout with Home Accent Colors */}
      <div className="bg-white text-slate-900">
        {/* Main 3-Column Solutions Grid on White */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SOLUTIONS.map((s) => (
                <article
                  key={s.name}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-md">
                          {s.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {s.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-light">
                        {s.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-slate-100">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Explore Platform</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Spotlight on Slate Neutral Background */}
        <section className="bg-slate-50 py-20 sm:py-28 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Unified Ecosystem
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  One unified command center behind your website.
                </h3>
                <div className="space-y-3 pt-2 text-sm text-slate-700 font-light">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Your website captures inbound visitors.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Your CRM pipeline organizes every contact in one inbox.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Instant SMS and email automations follow up in seconds.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span>AI chatbots triage conversations 24 hours a day.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://nolacrm.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary text-white px-7 py-3.5 text-sm font-bold shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                  >
                    Visit nolacrm.io
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
                  <img
                    src={ASSETS.crmLaptop}
                    alt="NOLA CRM Dashboard"
                    className="rounded-2xl w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Conversion Section */}
        <section className="bg-slate-900 py-20 sm:py-24 text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur-md">
              ✦ All-In-One Packages ✦
            </span>
            <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white">
              Packages are the primary offer.
            </h3>
            <p className="mt-3 max-w-xl mx-auto text-base text-white/70">
              These specialized products power the packages behind the scenes. Explore the package
              tailored to your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/packages"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-primary bg-primary text-white px-8 py-3.5 text-sm font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                Explore Packages
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
