import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "../../components/packages/package-detail";

export const Route = createFileRoute("/packages/website")({
  head: () => ({
    meta: [
      { title: "Website Package — The Foundation | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "The Foundation package: a modern, responsive, conversion-focused website designed around your brand, customers, and business goals.",
      },
      { property: "og:title", content: "Website Package — The Foundation | NOLA Web Solutions" },
      {
        property: "og:description",
        content:
          "A professional website built to convert. The foundation of every NOLA digital growth system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PackageDetail slug="website" />,
});
