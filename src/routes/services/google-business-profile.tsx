import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/google-business-profile")({
  head: () => ({
    meta: [
      { title: "Google Business Profile Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Google Business Profile optimization and management — part of NOLA's local-growth SEO package.",
      },
      { property: "og:title", content: "Google Business Profile | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Optimize your business profile and local presence to get discovered.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="google-business-profile" />,
});
