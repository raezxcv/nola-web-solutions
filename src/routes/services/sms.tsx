import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/sms")({
  head: () => ({
    meta: [
      { title: "SMS Marketing Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Connect customers through direct and automated SMS messaging, integrated with your CRM and automation.",
      },
      { property: "og:title", content: "SMS Marketing | NOLA Web Solutions" },
      { property: "og:description", content: "Direct and automated messaging where applicable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="sms" />,
});
