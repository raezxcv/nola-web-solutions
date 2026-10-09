import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Hero, HeroCarouselSection } from "../components/home/hero";
import { IntroReset } from "../components/home/intro-reset";
import { PackagesPricing } from "../components/home/packages-pricing";
import { PackageComparison } from "../components/home/package-comparison";
import { ProblemSolution } from "../components/home/problem-solution";
import { BuildYourSystem } from "../components/home/build-your-system";
import { TypeStatement } from "../components/home/type-statement";
import { PackageChapters } from "../components/home/package-chapters";
import { WhatsInside } from "../components/home/whats-inside";
import { NolaCrm } from "../components/home/nola-crm";
import { WhyNola } from "../components/home/why-nola";
import { Process } from "../components/home/process";
import { Portfolio } from "../components/home/portfolio";
import { Testimonials } from "../components/home/testimonials";
import { About } from "../components/home/about";
import { UpgradeMessage } from "../components/home/upgrade-message";
import { FinalCta } from "../components/home/final-cta";
import { BirRegistration } from "../components/home/bir-registration";
import { ContactSection } from "../components/site/contact-section";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "NOLA Web Solutions" },
      {
        name: "description",
        content:
          "NOLA Web Solutions builds complete digital growth systems — website, automation, AI, SEO, and CRM bundled into practical packages designed around your business.",
      },
      { property: "og:title", content: "NOLA Web Solutions" },
      {
        property: "og:description",
        content:
          "We don't just build websites. We build the digital system around your business — website, automation, AI, SEO, and CRM in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
}));

/** Subtle hairline divider — light bg between two light sections */
function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "bg-ink py-4" : "bg-background py-4"}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className={`h-px w-full bg-gradient-to-r from-transparent ${
            dark ? "via-white/10" : "via-foreground/8"
          } to-transparent`}
        />
      </div>
    </div>
  );
}

function Index() {
  // Always point to top part of page on refresh / mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      {/* Chapter 1 — dark immersive hero */}
      <Hero />
      {/* Seamless full-width 3D carousel section below hero */}
      <HeroCarouselSection />
      {/* Chapter 2 onwards — deferred rendering for better above-fold perf */}
      <div className="cv-auto" style={{ containIntrinsicSize: "auto 12000px" }}>
        {/* Chapter 2 — bright editorial reset */}
        <IntroReset />
        {/* Packages & Pricing Section (dark theme) */}
        <PackagesPricing />
        {/* Comparison */}
        <PackageComparison />
        {/* Problem → package mapping (dark) */}
        <ProblemSolution />
        {/* Divider between Match your challenge and Build your system (both dark) */}
        <Divider dark />
        {/* Signature growth ladder (dark) */}
        <BuildYourSystem />
        {/* Divider between Build your system and More tools (both dark) */}
        <Divider dark />
        {/* Typographic transition (dark) */}
        <TypeStatement lines={["More tools isn't the answer.", "The right system is."]} accentLast />
        {/* Full-screen package chapters (mixed light/dark with wireframe mockup screens) */}
        <PackageChapters />

        {/* Subtle glowing divider line above 'Build once. Automate what repeats.' */}
        <div className="bg-ink py-6">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
          </div>
        </div>

        {/* Typographic transition (dark) */}
        <TypeStatement lines={["Build once.", "Automate what repeats."]} accentLast />
        {/* Capability rail with wireframe mockup screens & service icons */}
        <WhatsInside />
        {/* CRM infrastructure — solar system orbit diagram with inward arrows & icons */}
        <NolaCrm />
        {/* Why NOLA (light, editorial list) */}
        <WhyNola />
        {/* Divider between Why NOLA and How it works */}
        <Divider />
        {/* Process (light with animated progress line & glowing popout checkpoint icons) */}
        <Process />
        {/* Portfolio (dark mode, padded fitted cards, transparent chips) */}
        <Portfolio />
        {/* Divider between Our work and Proof & Reviews (both dark) */}
        <Divider dark />
        {/* Testimonials (dark, 9-item review carousel with vertical breathing room) */}
        <Testimonials />
        {/* About (light, editorial magazine two-column) */}
        <About />
        {/* Divider between About NOLA and Flexible by design */}
        <Divider />
        {/* Upgrade / scalability (light) */}
        <UpgradeMessage />
        {/* Final CTA (dark, full-viewport) */}
        <FinalCta />
        {/* BIR Registration */}
        <BirRegistration />
        {/* Divider between BIR Registration and Contact Us */}
        <Divider />
        {/* Contact (ultra-modern sleek form) */}
        <ContactSection />
      </div>
    </>
  );
}
