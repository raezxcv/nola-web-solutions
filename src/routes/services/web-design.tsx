import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/web-design")({
  head: () => ({
    meta: [
      { title: "Website Design Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Modern, responsive, conversion-focused website design — the foundation of every NOLA digital growth package.",
      },
      { property: "og:title", content: "Website Design | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "A modern website designed around your brand and business goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="web-design" />,
});
