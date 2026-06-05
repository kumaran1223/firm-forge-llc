import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Briefcase, Award, Scale, Shield } from "lucide-react";
import { services } from "@/data/services";
import { CTASection } from "@/components/CTASection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Legal Services | Thomas Law Firm PLLC" },
      { name: "description", content: "Flat-fee legal services for startups, small businesses and entrepreneurs: business formation, trademark registration, contracts, and compliance." },
      { property: "og:title", content: "Legal Services | Thomas Law Firm PLLC" },
      { property: "og:description", content: "Flat-fee NYC legal services including LLC and corporation formation, trademark registration, contract drafting and registered agent." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const categories = ["All", "Formation", "Trademark", "Contract", "Compliance", "Consultation"] as const;

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Formation: Briefcase,
  Trademark: Award,
  Contract: Scale,
  Compliance: Shield,
  Consultation: Briefcase,
};

function ServicesPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? services : services.filter((s) => s.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
        <div className="container-prose relative text-center">
          <span className="text-xs tracking-[0.32em] uppercase text-gold">Our Practice</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Legal <span className="italic text-gold">Services</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Flat-fee professional legal services and business filings for startups, small businesses
            and entrepreneurs across New York, New Jersey and Delaware.
          </p>
        </div>
      </section>

      {/* INTRO CARD */}
      <section className="py-20 bg-secondary">
        <div className="container-prose max-w-4xl">
          <div className="bg-white border-l-4 border-gold p-10 md:p-14 shadow-elegant space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Thomas Law Firm PLLC performs most work on a flat fee basis and the flat fees for most of
              our services can be viewed at the links below.
            </p>
            <p>
              Payment can be made with credit card, debit card or ACH transfer and an itemized invoice
              is sent to each client before work begins on their project.
            </p>
            <p>
              Prospective clients can receive a quote by email or by phone. Short introductory phone
              calls are free and our business hours are Monday – Friday 9:00 AM to 6:00 PM. Phone
              calls are by appointment only.
            </p>
            <p>
              Although we generally perform most work on a flat fee basis, hourly engagements are
              available for document review projects, custom contract drafting projects and projects
              involving in-person or phone consultation.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-24">
        <div className="container-prose">
          <div className="text-center mb-12">
            <SectionEyebrow>All Services</SectionEyebrow>
            <h2 className="font-serif text-4xl text-navy">Browse Our Full Catalog</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all ${
                  filter === c
                    ? "bg-navy text-white"
                    : "bg-secondary text-charcoal hover:bg-navy hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => {
              const Icon = icons[s.category] ?? Briefcase;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative bg-white border border-border hover:border-gold p-8 transition-all hover:shadow-elegant hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${(i % 6) * 60}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 grid place-items-center bg-navy/5 text-navy group-hover:bg-gradient-navy group-hover:text-white transition-all">
                      <Icon size={20} />
                    </div>
                    {s.price && (
                      <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-gold">
                        {s.price}
                      </span>
                    )}
                  </div>
                  <p className="mt-6 text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">
                    {s.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg text-navy leading-snug">{s.shortTitle}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-navy group-hover:text-gold transition-colors">
                    Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
