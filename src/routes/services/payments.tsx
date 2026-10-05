import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/payments")({
  head: () => ({
    meta: [
      { title: "Payments Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Digital payment experiences connected to your website and CRM, where included or offered.",
      },
      { property: "og:title", content: "Payments | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Support digital payment experiences where included or offered.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="payments" />,
});
