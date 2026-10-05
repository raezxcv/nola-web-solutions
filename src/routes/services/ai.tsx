import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/ai")({
  head: () => ({
    meta: [
      { title: "AI Chatbot Service | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "AI chatbot, lead qualification, and automated customer responses — AI applied where it actually helps your business.",
      },
      { property: "og:title", content: "AI Chatbot | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "Use AI to answer questions, qualify leads, and support customer communication.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServiceDetail slug="ai" />,
});
