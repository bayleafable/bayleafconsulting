import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const BOOK_URL = "https://calendly.com/ellie-bayleafstrategies/discovery";

export type ServicePageProps = {
  eyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
  intro: string;
  belief: string;
  steps: { title: string; body: string }[];
  pricingBlurb: string;
  priceLabel: string;
  priceValue: string;
  logistics: string;
};

export function ServicePage(props: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/70">
          {props.eyebrow}
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
          {props.heroHeadline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/90">{props.heroSubhead}</p>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10 inline-block bg-brand-green px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-green/90"
        >
          Book a Call
        </a>
      </section>

      {/* Intro / belief */}
      <section className="bg-brand-sage">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <p className="text-lg leading-relaxed">{props.intro}</p>
            <p className="font-serif text-2xl leading-snug">{props.belief}</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12">
          <h2 className="font-serif text-3xl uppercase tracking-wide md:text-4xl">
            Our Process
          </h2>
          <div className="mt-4 h-px w-full bg-foreground" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {props.steps.map((s, i) => (
            <div key={s.title} className="bg-brand-slate p-8 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Step {i + 1}
              </p>
              <h3 className="mt-3 font-serif text-xl uppercase tracking-wide">
                {s.title}
              </h3>
              <div className="mt-6 h-px w-12 bg-white/70" />
              <p className="mt-6 text-base leading-relaxed text-white/95">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & logistics */}
      <section className="bg-brand-charcoal text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
          <div>
            <h2 className="font-serif text-3xl uppercase tracking-wide md:text-4xl">
              Pricing
            </h2>
            <div className="mt-4 h-px w-full bg-white/40" />
            <p className="mt-8 text-lg leading-relaxed text-white/90">
              {props.pricingBlurb}
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/70">
              {props.priceLabel}
            </p>
            <p className="mt-2 font-serif text-4xl">{props.priceValue}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl uppercase tracking-wide md:text-4xl">
              Engagement
            </h2>
            <div className="mt-4 h-px w-full bg-white/40" />
            <p className="mt-8 text-lg leading-relaxed text-white/90">{props.logistics}</p>
            <p className="mt-8 text-lg leading-relaxed text-white/90">
              We take on a limited number of engagements each quarter to protect the
              quality of every project we run. If you&apos;re ready to start a
              conversation, request an engagement below.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-block bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-brand-charcoal transition-colors hover:bg-white/90"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Need something different */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <h2 className="font-serif text-3xl uppercase tracking-wide md:text-4xl">
          Need Something Different?
        </h2>
        <div className="mt-4 h-px w-full bg-foreground" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed">
          You know your organization&rsquo;s needs better than anyone else. If
          you&rsquo;re looking for something more custom, book a call to discuss your
          needs. Together, we&rsquo;ll co-create a plan that reflects your unique
          situation.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block bg-brand-green px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-green/90"
          >
            Book a Call
          </a>
          <Link
            to="/"
            className="inline-block border border-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
