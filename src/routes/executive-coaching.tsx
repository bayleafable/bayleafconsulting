import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

const SITE_URL = "https://bayleafconsulting.lovable.app";
const PAGE_URL = `${SITE_URL}/executive-coaching`;
const TITLE = "Executive coaching for nonprofit leaders | Bayleaf Consulting";
const DESCRIPTION =
  "Executive coaching for nonprofit leaders. We coach executives as they grow into bigger roles and harder decisions, building judgment for the decisions ahead.";

export const Route = createFileRoute("/executive-coaching")({
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
      eyebrow="Executive coaching for nonprofit leaders"
      heroHeadline="We support leaders through change and growth."
      heroSubhead="Building judgment for the decisions ahead, not just confidence for the ones behind them."
      intro="We coach executives as they grow into bigger roles and harder decisions. Every engagement is curated to the unique moment and the individual leader. We build judgment for the decisions ahead, not just confidence for the ones behind them."
      belief="We believe coaching relationships are not a luxury, but a requirement for sound, sane, safe leadership."
      steps={[
        {
          title: "Examine the moment",
          body: "We'll examine the pressures and decisions shaping the current reality.",
        },
        {
          title: "Examine the leader",
          body: "We'll get honest about strengths, blind spots, and patterns.",
        },
        {
          title: "Examine the future",
          body: "We'll define what good judgment looks like for what's ahead.",
        },
      ]}
      pricingBlurb="We offer individual coaching to leaders at organizations of all sizes. Payment frequency can be adjusted with no reward or penalty for differing budget cycles."
      priceLabel="12 sessions"
      priceValue="$1,250/mo"
      logistics="Executive coaching engagements are hosted virtually over a six-month period, with an option for in-person sessions in St. Louis only."
    />
  ),
});
