import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

const SITE_URL = "https://bayleafconsulting.lovable.app";
const PAGE_URL = `${SITE_URL}/strategic-planning`;
const TITLE = "Strategic planning for nonprofits and coalitions | Bayleaf Consulting";
const DESCRIPTION =
  "Strategic planning for nonprofits and coalitions. We help leadership set direction and translate it into a clear, working plan grounded in reality and capacity.";

export const Route = createFileRoute("/strategic-planning")({
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
      eyebrow="Strategic planning for nonprofits and coalitions"
      heroHeadline="We build strategies that hold up under pressure."
      heroSubhead="Plans grounded firmly in reality and current capacity rather than ambition and scarcity."
      intro="We help leadership set direction and translate it into a clear, working plan. Every plan is grounded firmly in reality and current capacity rather than ambition and scarcity. We use methodologies like Theory of Change to produce plans that are actionable, accessible, and exciting to share."
      belief="We believe strategic plans should be created with joy, rooted in justice, and guided by love for our communities."
      steps={[
        {
          title: "Name what's important",
          body: "We'll surface the priorities, define the values, and identify the goals that drive this work forward.",
        },
        {
          title: "Name what's true",
          body: "We'll get honest about the resources, gaps, and conditions you're working with today.",
        },
        {
          title: "Name what's next",
          body: "We'll co-create a path forward, decide how to make good decisions, and define success for your mission.",
        },
      ]}
      pricingBlurb="We offer strategic planning services for organizations with operating budgets over $1 million. Pricing is based on organizational budget, travel needs, and depth of community engagement required."
      priceLabel="Pricing starts at"
      priceValue="$12,500"
      logistics="Strategic planning engagements typically last 3–6 months and require at least one in-person session with your leadership team."
    />
  ),
});
