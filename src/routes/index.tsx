import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Award, Briefcase, Scale, Shield, Star } from "lucide-react";
import heroConsultation from "@/assets/hero-consultation.jpg";
import heroBooks from "@/assets/hero-books.jpg";
import heroCourthouse from "@/assets/hero-courthouse.jpg";
import heroSkyline from "@/assets/hero-skyline.jpg";
import scottAsset from "@/assets/scott-thomas.webp.asset.json";
import { services, featuredServiceSlugs } from "@/data/services";
import { CTASection } from "@/components/CTASection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thomas Law Firm PLLC | NYC Business & Trademark Attorney" },
      { name: "description", content: "Trusted New York attorney providing trademark, business formation, contract and corporate legal services to startups and entrepreneurs." },
      { property: "og:title", content: "Thomas Law Firm PLLC | NYC Business & Trademark Attorney" },
      { property: "og:description", content: "Boutique NYC law firm serving startups, small businesses and entrepreneurs since 2011." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const slides = [
  { src: heroConsultation, alt: "Attorney consulting with business clients in a Manhattan law office" },
  { src: heroBooks, alt: "Law books and legal documents on an attorney's desk" },
  { src: heroCourthouse, alt: "Classical New York courthouse columns at golden hour" },
  { src: heroSkyline, alt: "Manhattan skyline from a premium law office" },
];

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Formation: Briefcase,
  Trademark: Award,
  Contract: Scale,
  Compliance: Shield,
  Consultation: Briefcase,
};

const reviews = [
  { name: "Maria K.", text: "Scott helped me form my NY PLLC and trademark my brand. Detailed, responsive and a pleasure to work with.", stars: 5 },
  { name: "Daniel R.", text: "Exceptional attention to detail. The flat-fee model made budgeting easy and the work was top-tier.", stars: 5 },
  { name: "Jennifer L.", text: "Highly recommend Thomas Law Firm for any startup. Clear communication and strong legal advice.", stars: 5 },
  { name: "Anthony P.", text: "Scott registered our trademark and reviewed our key contracts. We trust him with all our legal work.", stars: 5 },
  { name: "Priya S.", text: "Best legal experience I've had in NYC. Professional, efficient and incredibly knowledgeable.", stars: 5 },
  { name: "Michael B.", text: "Scott has been our go-to attorney for three years. Always reliable, always excellent.", stars: 5 },
];

function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const featured = featuredServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.src}
              alt={s.alt}
              className="w-full h-full object-cover scale-105"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-navy/40" />

        <div className="relative h-full container-prose flex flex-col justify-center text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-gold font-medium">
              <span className="h-px w-10 bg-gold" />
              Est. 2011 · New York City
            </span>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1]">
              Trusted Legal Solutions <span className="italic text-gold">For Businesses,</span> Entrepreneurs & Startups
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
              Experienced New York attorney providing business law, trademark, corporate and startup
              legal services with the personal attention of a boutique firm.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.22em] uppercase bg-gradient-gold text-gold-foreground hover:shadow-gold transition-all"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.22em] uppercase border border-white/40 text-white hover:bg-white hover:text-navy transition-all"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-[2px] transition-all ${i === active ? "w-12 bg-gold" : "w-6 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 bg-secondary">
        <div className="container-prose">
          <div className="max-w-4xl mx-auto bg-white shadow-elegant border-t-4 border-gold p-10 md:p-16 text-center">
            <SectionEyebrow>A Boutique New York Law Firm</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">
              Welcome to Thomas Law Firm PLLC
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Welcome to Thomas Law Firm PLLC in New York City. We are a boutique law firm that
              provides professional legal services and business filing services to startup companies,
              small businesses and entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow>What We Do</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">Services We Provide</h2>
            <p className="mt-4 text-muted-foreground">
              Flat-fee legal services tailored to startups, small businesses and entrepreneurs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => {
              const Icon = serviceIcons[s.category] ?? Briefcase;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative bg-white border border-border hover:border-gold p-8 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 grid place-items-center bg-navy/5 text-navy group-hover:bg-gradient-navy group-hover:text-white transition-all">
                    <Icon size={22} />
                  </div>
                  <p className="mt-6 text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">
                    {s.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-navy leading-snug">{s.shortTitle}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-navy group-hover:text-gold transition-colors">
                    Know More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 text-xs font-semibold tracking-[0.22em] uppercase bg-navy text-primary-foreground hover:bg-gradient-gold hover:text-gold-foreground transition-all"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-secondary">
        <div className="container-prose grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <SectionEyebrow>Meet Your Attorney</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
              About Scott Thomas
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Scott Thomas, Esq. is a Startup Attorney in New York City. His practice focuses on
                trademark law, small business law and corporate law.
              </p>
              <p>
                Mr. Thomas has worked in private practice for the past 15 years, owning and operating
                Thomas Law Firm PLLC since 2011.
              </p>
              <p>
                He is licensed to practice law by the Appellate Division of the Supreme Court of the
                State of New York and the United States Patent and Trademark Office.
              </p>
              <p>
                Mr. Thomas works directly with each client by phone and email. Phone consultations are
                by appointment. In-person consultations are also available at his office in New York
                City.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 border-y border-border py-6">
              <div>
                <p className="font-serif text-3xl text-navy">15+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-navy">2011</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Firm Founded</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-navy">NY · USPTO</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Admitted</p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.22em] uppercase bg-navy text-primary-foreground hover:bg-gradient-gold hover:text-gold-foreground transition-all"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-gold/40 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gradient-gold -z-20" />
            <img
              src={scottAsset.url}
              alt="Scott Thomas, Esq., founding attorney of Thomas Law Firm PLLC"
              className="w-full h-[600px] object-cover shadow-elegant"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="container-prose text-center mb-12">
          <SectionEyebrow>Client Reviews</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-6 marquee w-max">
            {[...reviews, ...reviews].map((r, i) => (
              <div
                key={i}
                className="w-[360px] shrink-0 bg-secondary border border-border p-8"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-charcoal italic">"{r.text}"</p>
                <p className="mt-6 text-xs uppercase tracking-widest text-navy font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
