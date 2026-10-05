import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "../../components/packages/package-detail";

export const Route = createFileRoute("/packages/website-automation-ai")({
  head: () => ({
    meta: [
      { title: "Website + Automation + AI Package — The Smart Growth | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "The Smart Growth package: website, automation, and AI to handle customer conversations, qualify leads, and support your team around the clock.",
      },
      { property: "og:title", content: "Website + Automation + AI Package | NOLA Web Solutions" },
      {
        property: "og:description",
        content:
          "Add AI to your digital business — chatbot, lead qualification, and automated customer responses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PackageDetail slug="website-automation-ai" />,
});
