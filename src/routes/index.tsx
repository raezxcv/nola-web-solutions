import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "../components/home/hero";
import { IntroReset } from "../components/home/intro-reset";
import { ScrollStory } from "../components/home/scroll-story";
import { SystemBuilder } from "../components/home/system-builder";
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
import { PackageRecommender } from "../components/home/package-recommender";
import { FinalCta } from "../components/home/final-cta";
import { ContactSection } from "../components/site/contact-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOLA Web Solutions — Build the Digital System Behind Your Business" },
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
});

function Index() {
  return (
    <>
      {/* Chapter 1 — dark immersive hero */}
      <Hero />
      {/* Chapter 2 — bright editorial reset */}
      <IntroReset />
      {/* Chapter 3 — dark interactive scroll-story */}
      <ScrollStory />
      {/* Chapter 4 — bright interactive system builder */}
      <SystemBuilder />
      {/* Comparison */}
      <PackageComparison />
      {/* Problem → package mapping (dark) */}
      <ProblemSolution />
      {/* Signature growth ladder (dark) */}
      <BuildYourSystem />
      {/* Typographic transition (dark) */}
      <TypeStatement lines={["More tools isn't the answer.", "The right system is."]} accentLast />
      {/* Full-screen package chapters (mixed light/dark) */}
      <PackageChapters />
      {/* Typographic transition (dark) */}
      <TypeStatement lines={["Build once.", "Automate what repeats."]} accentLast />
      {/* Capability rail (light) */}
      <WhatsInside />
      {/* CRM infrastructure (dark) */}
      <NolaCrm />
      {/* Why NOLA (light, editorial list) */}
      <WhyNola />
      {/* Process (light) */}
      <Process />
      {/* Portfolio (light, editorial) */}
      <Portfolio />
      {/* Testimonials (dark, editorial) */}
      <Testimonials />
      {/* About (light, magazine) */}
      <About />
      {/* Upgrade / scalability (light) */}
      <UpgradeMessage />
      {/* Package recommender (light) */}
      <PackageRecommender />
      {/* Final CTA (dark, full-viewport) */}
      <FinalCta />
      {/* Contact (light) */}
      <ContactSection />
    </>
  );
}
