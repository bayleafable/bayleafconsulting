import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

const SITE_URL = "https://bayleafconsulting.lovable.app";
const PAGE_URL = `${SITE_URL}/program-development`;
const TITLE = "Program development for nonprofits | Bayleaf Consulting";
const DESCRIPTION =
  "Program development for nonprofits. We build programs that turn strategic priorities into focused, sustainable operational work, co-designed to meet your mission and community needs.";

export const Route = createFileRoute("/program-development")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Program development for nonprofits"
      heroHeadline="We design programs that bring strategy to life."
      heroSubhead="Programs that hold up in practice, not just on paper."
      intro="We build programs that turn strategic priorities into focused, sustainable operational work. Each program is co-designed to meet your mission and your community's needs. We create programs that hold up in practice, not just on paper."
      belief="We believe the best programs center on the human experience, are resourced sustainably, and are enjoyable to produce and attend."
      steps={[
        {
          title: "Connect with community",
          body: "We'll listen first, so the program reflects real needs, not assumptions.",
        },
        {
          title: "Create with community",
          body: "We'll build the program in partnership, so it holds up in practice.",
        },
        {
          title: "Celebrate with community",
          body: "We'll launch the program and create space to celebrate the shared effort.",
        },
      ]}
      pricingBlurb="We offer program development services for organizations with operating budgets over $1 million. Pricing is based on organizational budget, travel needs, and depth of community engagement required."
      priceLabel="Pricing"
      priceValue="Request a Quote"
      logistics="Program development engagements begin at least 4–6 months prior to the first event and require at least one in-person session with your team."
    />
  ),
});
