import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { PACKAGES, PACKAGE_PATHS, type PackageSlug } from "../../lib/site-data";
import { PageHero } from "../site/page-hero";

export function PackageDetail({ slug }: { slug: PackageSlug }) {
  const pkg = PACKAGES.find((p) => p.slug === slug)!;
  const others = PACKAGES.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Top Banner */}
      <PageHero
        eyebrow={pkg.marketingLabel}
        title={<>{pkg.headline}</>}
        subtitle={pkg.description}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Packages", to: "/packages" },
          { label: pkg.technicalName },
        ]}
      />

      {/* Under Banner: Clean White & Neutral Layout with Home Accent Colors */}
      <div className="bg-white text-slate-900">
        {/* Package Architectural Specification */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sticky Specification Card */}
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-28 space-y-6">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-7 sm:p-8 shadow-sm space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        Package Specification
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        {pkg.technicalName}
                      </h3>
                      <p className="mt-2 text-sm text-primary font-semibold">"{pkg.promise}"</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
                      <div>
                        <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
                          Best For:
                        </span>
                        <p className="leading-relaxed">{pkg.bestFor}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <Link
                        to="/contact"
                        className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-primary bg-primary text-white px-6 py-3.5 text-sm font-bold shadow-md shadow-primary/25 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                      >
                        Book a Free Consultation
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-600 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Turnkey Implementation
                    </div>
                    No hidden fees or unexpected infrastructure costs. Everything is scoped and
                    tested before handover.
                  </div>
                </div>
              </aside>

              {/* Right Column: Narrative & Inclusions */}
              <main className="lg:col-span-7 space-y-16">
                {/* Everything Included */}
                <section className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      01 // Inclusions
                    </span>
                    <h4 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                      What you get in the system.
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                    {pkg.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm text-slate-800 transition-all hover:border-slate-300 hover:bg-white"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Technology Inside */}
                <section className="space-y-6 border-t border-slate-200 pt-14">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      02 // Components
                    </span>
                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                      Individual technology components.
                    </h4>
                  </div>
                  <div className="space-y-3 pt-2">
                    {pkg.services.map((s) => (
                      <div
                        key={s.name}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                      >
                        <h5 className="text-base font-bold text-slate-900">{s.name}</h5>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-light">
                          {s.blurb}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4 Steps Timeline */}
                <section className="space-y-6 border-t border-slate-200 pt-14">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      03 // Implementation
                    </span>
                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                      Four steps from blueprint to live launch.
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                    {[
                      {
                        step: "01",
                        title: "Discover",
                        text: "We analyze your business, customers, and current lead flow.",
                      },
                      {
                        step: "02",
                        title: "Build",
                        text: "We craft your conversion website and configure core infrastructure.",
                      },
                      {
                        step: "03",
                        title: "Connect",
                        text: "We connect CRM pipelines, automation triggers, and AI chatbots.",
                      },
                      {
                        step: "04",
                        title: "Launch",
                        text: "We test all workflows end-to-end and hand off a turnkey system.",
                      },
                    ].map((s) => (
                      <div
                        key={s.step}
                        className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
                      >
                        <span className="text-xs font-mono text-primary font-bold">
                          STEP {s.step}
                        </span>
                        <h6 className="mt-2 text-lg font-bold text-slate-900">{s.title}</h6>
                        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Compare Other Tiers */}
                <section className="space-y-6 border-t border-slate-200 pt-14">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      04 // Other Packages
                    </span>
                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                      Explore other growth tiers.
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2">
                    {others.map((o) => (
                      <Link
                        key={o.slug}
                        to={PACKAGE_PATHS[o.slug]}
                        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                      >
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                          {o.marketingLabel}
                        </span>
                        <h6 className="mt-2 text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {o.technicalName}
                        </h6>
                        <p className="mt-1.5 text-xs text-slate-500 line-clamp-2">{o.promise}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-800 group-hover:text-primary">
                          View tier <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              </main>
            </div>
          </div>
        </section>

        {/* Bottom Conversion Section */}
        <section className="bg-slate-900 py-20 sm:py-24 text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur-md">
              ✦ Launch With Confidence ✦
            </span>
            <h3 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white">
              Ready to deploy {pkg.marketingLabel}?
            </h3>
            <p className="mt-3 max-w-xl mx-auto text-base text-white/70">
              Book a free consultation and let's configure the exact architecture for your business.
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
                to="/packages"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Back to All Packages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
