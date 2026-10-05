import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "SEO strategy, on-page SEO, technical improvements, and local SEO to help customers find your business.",
      },
      { property: "og:title", content: "SEO | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Improve website structure, content, visibility, and search performance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="seo" />,
});
