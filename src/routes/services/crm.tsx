import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/crm")({
  head: () => ({
    meta: [
      { title: "CRM Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "The NOLA CRM centralizes customer information and manages leads and interactions — the infrastructure behind every package.",
      },
      { property: "og:title", content: "CRM | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Centralize customer information and manage leads and interactions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="crm" />,
});
