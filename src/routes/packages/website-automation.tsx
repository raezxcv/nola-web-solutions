import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "../../components/packages/package-detail";

export const Route = createFileRoute("/packages/website-automation")({
  head: () => ({
    meta: [
      { title: "Website + Automation Package — The Growth Starter | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "The Growth Starter package: a professional website plus automation that captures, organizes, and follows up with leads automatically.",
      },
      { property: "og:title", content: "Website + Automation Package | NOLA Web Solutions" },
      {
        property: "og:description",
        content:
          "Turn your website into a working system with lead capture, CRM, and automated follow-ups.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PackageDetail slug="website-automation" />,
});
