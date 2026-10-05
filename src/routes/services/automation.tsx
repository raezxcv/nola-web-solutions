import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/automation")({
  head: () => ({
    meta: [
      { title: "Automation Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Connect forms, CRM, follow-ups, bookings, and notifications into automated workflows that turn your website into a working system.",
      },
      { property: "og:title", content: "Automation | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Connect forms, CRM, follow-ups, bookings, and notifications into workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="automation" />,
});
