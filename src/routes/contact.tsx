import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/page-hero";
import { ContactSection } from "../components/site/contact-section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NOLA Web Solutions — Let's Build the Right System" },
      {
        name: "description",
        content:
          "Tell us about your business and what you're interested in. We'll help you choose the right NOLA package and starting point.",
      },
      { property: "og:title", content: "Contact NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Let's build the right system for you. Book a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build the right system for you.</>}
        subtitle="Tell us about your business and what you're interested in. We'll help you choose the right starting point."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}
