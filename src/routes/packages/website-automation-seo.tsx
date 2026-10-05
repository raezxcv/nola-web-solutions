import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "../../components/packages/package-detail";

export const Route = createFileRoute("/packages/website-automation-seo")({
  head: () => ({
    meta: [
      { title: "Website + Automation + SEO Package — The Local Growth | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "The Local Growth package: website, automation, plus SEO and Google Business Profile optimization to help your business get found by local customers.",
      },
      { property: "og:title", content: "Website + Automation + SEO Package | NOLA Web Solutions" },
      {
        property: "og:description",
        content:
          "Get found. Get contacted. Get more customers — with SEO and local visibility built in.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PackageDetail slug="website-automation-seo" />,
});
