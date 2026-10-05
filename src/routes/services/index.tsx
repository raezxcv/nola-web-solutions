import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndex } from "../../components/services/service-detail";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — What's Inside Our Packages | NOLA Web Solutions" },
      {
        name: "description",
        content:
          "Website design, automation, AI, SEO, Google Business Profile, CRM, SMS, and payments — the components inside NOLA's digital growth packages.",
      },
      { property: "og:title", content: "Services | NOLA Web Solutions" },
      {
        property: "og:description",
        content: "The individual capabilities that make each NOLA package work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});
