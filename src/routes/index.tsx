import { createFileRoute, Link } from "@tanstack/react-router";
import heroLadder from "@/assets/hero-ladder.png";
import ellie from "@/assets/ellie.png";
import cic from "@/assets/cic.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const SITE_URL = "https://bayleafconsulting.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bayleaf Consulting — Strategic support for civic and nonprofit leaders" },
      {
        name: "description",
        content:
          "Bayleaf Consulting champions organizations built for change. Strategic planning, program development, and executive coaching for nonprofit, philanthropic, and civic leaders in St. Louis and beyond.",
      },
      { property: "og:title", content: "Bayleaf Consulting" },
      {
        property: "og:description",
        content:
          "Strategic support for civic and nonprofit leaders. Based in St. Louis, Missouri.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Bayleaf Consulting" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bayleaf Consulting" },
      {
        name: "twitter:description",
        content:
          "Strategic support for civic and nonprofit leaders. Based in St. Louis, Missouri.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Bayleaf Consulting",
          alternateName: "Bayleaf Strategies",
          url: SITE_URL,
          email: "hello@bayleafstrategies.com",
          description:
            "Strategic planning, program development, and executive coaching for nonprofit, philanthropic, and civic leaders.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "St. Louis",
            addressRegion: "MO",
            addressCountry: "US",
          },
          areaServed: "Worldwide",
          founder: { "@type": "Person", name: "Ellie Scott", jobTitle: "Founder & Chief Strategist" },
          sameAs: ["https://www.linkedin.com/in/elliescott"],
        }),
      },
    ],
  }),
  component: Home,
});

const BOOK_URL = "https://calendly.com/ellie-bayleafstrategies/discovery";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-foreground">
        {children}
      </h2>
      <div className="mt-4 h-px w-full bg-foreground" />
    </div>
  );
}

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />


      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
        <div className="order-2 md:order-1">
          <img
            src={heroLadder}
            alt="A ladder reaching up the side of a building toward the sky"
            className="w-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-base md:text-lg text-foreground/90">
            Strategic support for civic and nonprofit leaders
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            We champion organizations built for change.
          </h1>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-block bg-brand-green px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-green/90"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <SectionHeading>About Bayleaf</SectionHeading>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Based in St. Louis, Missouri, Bayleaf Consulting serves nonprofit,
              philanthropic, and civic organizations across the Midwest and beyond.
              We are experts in developing organizational vision, translating it
              into program strategy, and supporting leaders through those changes.
            </p>
            <p>
              We believe leaders who do long-lasting work deserve holistic support
              at every step.
            </p>
          </div>
          <div className="space-y-4 text-lg">
            <p>We love projects that get us deep in the community. Sometimes that looks like:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Initiative Design &amp; Implementation</li>
              <li>Coalition &amp; Partnership Development</li>
              <li>Board Facilitation &amp; Development</li>
              <li>Leadership Workshops &amp; Retreats</li>
              <li>Volunteer Coordination &amp; Event Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <SectionHeading>Our Services</SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Strategic Planning",
              body:
                "We help leadership set direction and translate it into a working plan. Every plan is grounded in reality and capacity rather than ambition and scarcity.",
            },
            {
              title: "Program Development",
              body:
                "We build programs that turn strategic priorities into operational work. Each program is designed to meet your mission and community needs.",
            },
            {
              title: "Executive Coaching",
              body:
                "We coach executives through change with direct, ongoing support. Every session is curated to develop individual leadership skills.",
            },
          ].map((s) => (
            <div key={s.title} className="bg-brand-slate p-8 text-white">
              <h3 className="font-serif text-xl uppercase tracking-wide">{s.title}</h3>
              <div className="mt-6 h-px w-12 bg-white/70" />
              <p className="mt-6 text-base leading-relaxed text-white/95">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-brand-sage">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[auto_1fr] md:px-12 md:py-28">
          <img
            src={ellie}
            alt="Ellie Scott, founder and chief strategist"
            className="h-56 w-56 rounded-full object-cover md:h-72 md:w-72"
          />
          <div>
            <h2 className="font-serif text-3xl uppercase tracking-wide md:text-4xl">
              Our Leadership
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/80">
              Ellie Scott, Founder &amp; Chief Strategist
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed">
              Most leadership decisions stall because we believe we don&rsquo;t have
              enough choices. My role is to help unlock those options and create a
              path forward. And I&rsquo;ve always found that when people are given
              enough choices, they usually make good ones.
            </p>
          </div>
        </div>
      </section>

      {/* Work with us */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <SectionHeading>Work With Us</SectionHeading>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed">
              We take on a limited number of engagements each quarter to protect
              the quality of every project we run. If you&apos;re ready to start a
              conversation, request an engagement below.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-10 inline-block bg-brand-green px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-green/90"
            >
              Book a Call
            </a>
          </div>
          <ol className="space-y-8">
            {[
              {
                step: "Step 1: Book a Consultation",
                body:
                  "We'll discuss where you are today, where you'd like to go, and what needs to be true to get you there.",
              },
              {
                step: "Step 2: Define Our Partnership",
                body:
                  "We'll co-design an engagement tailored to your capacity, timeline, and budget.",
              },
              {
                step: "Step 3: Execute and Sustain",
                body:
                  "We'll carry out the work in close partnership, leaving you equipped to keep moving without us in the room.",
              },
            ].map((s) => (
              <li key={s.step}>
                <h3 className="font-serif text-xl uppercase tracking-wide">{s.step}</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/90">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="grid md:grid-cols-2">
        <div className="min-h-[24rem] bg-cover bg-center" style={{ backgroundImage: `url(${cic})` }} aria-label="CIC building in St. Louis" />
        <div className="bg-brand-charcoal px-6 py-16 text-white md:px-16 md:py-24">
          <h2 className="font-serif text-3xl uppercase tracking-wide md:text-4xl">
            Reach Out Today
          </h2>
          <div className="mt-4 h-px w-full bg-white/40" />
          <h3 className="mt-12 font-serif text-xl uppercase tracking-wide">Contact Us</h3>
          <a
            href="mailto:hello@bayleafstrategies.com"
            className="mt-3 inline-block text-lg text-white/95 underline-offset-4 hover:underline"
          >
            hello@bayleafstrategies.com
          </a>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
            We are based at CIC in the heart of St. Louis, Missouri, and are open
            to national, international, and intergalactic engagements.
          </p>
          <a
            href="http://linkedin.com/in/elliescott"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-block bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/20"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-charcoal text-white/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row md:px-12">
          <p>© {new Date().getFullYear()} Bayleaf Consulting LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
