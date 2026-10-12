import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS } from "../../lib/site-data";
import { PageHero } from "../../components/site/page-hero";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Packages — Choose Your Digital Growth Tier | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Four NOLA growth packages — Website, Website + Automation, Website + Automation + AI, and Website + Automation + SEO. Choose the level of digital growth your business needs.",
      },
      { property: "og:title", content: "NOLA Growth Packages | Modern Systems" },
      {
        property: "og:description",
        content:
          "A complete digital system bundled into clear tiers. Websites, automation, AI, and CRM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesIndex,
});

function PackagesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Top Banner */}
      <PageHero
        eyebrow="System Packages"
        title={<>The complete system, bundled into clear tiers.</>}
        subtitle="Start with the foundation you need today and scale into automation, AI, and search visibility when you're ready. Every tier builds seamlessly on the one before it."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      />

      {/* Under Banner: Clean White & Neutral Layout with Home Accent Colors */}
      <div className="bg-white text-slate-900">
        {/* 4 Architectural Packages on Clean White */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {PACKAGES.map((pkg, idx) => (
                <article
                  key={pkg.slug}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all duration-300 ${
                    pkg.featured
                      ? "border-primary/50 bg-gradient-to-b from-primary/[0.04] to-white shadow-xl ring-1 ring-primary/25"
                      : "border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Chapter Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            Chapter 0{idx + 1}
                          </span>
                          {pkg.featured && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
                              <Star className="h-3 w-3 fill-current" /> Most Popular
                            </span>
                          )}
                        </div>
                        <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {pkg.technicalName}
                        </h3>
                        <div className="mt-1 text-sm font-semibold text-primary">
                          "{pkg.promise}"
                        </div>
                      </div>
                      <span className="text-3xl font-mono text-slate-300">0{idx + 1}</span>
                    </div>

                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
                      {pkg.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
                        Best For:
                      </span>
                      {pkg.bestFor}
                    </div>

                    {/* Included Checklist */}
                    <div className="mt-8 space-y-2.5 pt-6 border-t border-slate-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Included In This Tier:
                      </div>
                      {pkg.includes.slice(0, 6).map((inc) => (
                        <div
                          key={inc}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{inc}</span>
                        </div>
                      ))}
                      {pkg.includes.length > 6 && (
                        <div className="text-xs text-primary font-semibold pt-1">
                          + {pkg.includes.length - 6} more capabilities
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="mt-10 pt-6 border-t border-slate-200">
                    <Link
                      to={PACKAGE_PATHS[pkg.slug]}
                      className={`group/btn inline-flex w-full items-center justify-between rounded-full border px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                        pkg.featured
                          ? "border-primary bg-primary text-white shadow-md shadow-primary/20 hover:brightness-110 active:scale-[0.98]"
                          : "border-slate-300 bg-white text-slate-800 hover:border-primary hover:text-primary active:scale-[0.98]"
                      }`}
                    >
                      <span>{pkg.cta}</span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover/btn:translate-x-1 ${
                          pkg.featured ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table on Neutral Background */}
        <section className="bg-slate-50 py-20 sm:py-28 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Architecture Matrix
              </span>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                Compare package tiers side by side.
              </h3>
              <p className="mt-2 text-base text-slate-600">
                Every package is additive. As your business operations mature, your system expands
                without starting from scratch.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/75 text-xs uppercase tracking-wider text-slate-500">
                    <th className="p-5 sm:p-6 font-bold">Capability</th>
                    <th className="p-5 sm:p-6 font-bold">Website</th>
                    <th className="p-5 sm:p-6 font-bold">Website + Automation</th>
                    <th className="p-5 sm:p-6 font-bold text-primary">Website + Automation + AI</th>
                    <th className="p-5 sm:p-6 font-bold">Website + Auto + SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-5 sm:p-6 font-semibold text-slate-900">
                      Custom Responsive Website
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 sm:p-6 font-semibold text-slate-900">
                      Mobile Conversion UX
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 sm:p-6 font-semibold text-slate-900">
                      Automated Lead Capture & Forms
                    </td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 sm:p-6 font-semibold text-slate-900">
                      Connected NOLA Business CRM
                    </td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 sm:p-6 font-semibold text-slate-900">
                      Instant SMS / Email Follow-ups
                    </td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 sm:p-6 font-semibold text-slate-900">
                      AI Chatbot & 24/7 Qualification
                    </td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                  </tr>
                  <tr>
                    <td className="p-5 sm:p-6 font-semibold text-slate-900">
                      Local Search & Google Business SEO
                    </td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-slate-300">—</td>
                    <td className="p-5 sm:p-6 text-primary">
                      <Check className="h-4 w-4" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bottom Conversion Section */}
        <section className="bg-slate-900 py-20 sm:py-24 text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur-md">
              ✦ Decision Support ✦
            </span>
            <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white">
              Not sure which package fits?
            </h3>
            <p className="mt-3 max-w-xl mx-auto text-base text-white/70">
              Book a free 20-minute consultation. We'll assess your current operations and recommend
              the exact starting tier.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-primary bg-primary text-white px-8 py-3.5 text-sm font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/our-works"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                See Real Client Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
