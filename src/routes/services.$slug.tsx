import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { services, type Service } from "@/data/services";
import { CTASection } from "@/components/CTASection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} | Thomas Law Firm PLLC` },
        { name: "description", content: s.summary },
        { property: "og:title", content: `${s.title} | Thomas Law Firm PLLC` },
        { property: "og:description", content: s.summary },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };

  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="container-prose">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <span className="text-xs tracking-[0.32em] uppercase text-gold">{service.category}</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            {service.title}
          </h1>
          {service.price && (
            <div className="mt-8 inline-block border border-gold px-6 py-3">
              <p className="text-xs tracking-[0.22em] uppercase text-gold">Pricing</p>
              <p className="font-serif text-2xl text-white mt-1">{service.price}</p>
            </div>
          )}
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20">
        <div className="container-prose grid lg:grid-cols-[1.6fr,1fr] gap-14">
          <div>
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="font-serif text-3xl text-navy">About This Service</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {service.process && (
              <div className="mt-14">
                <h3 className="font-serif text-2xl text-navy mb-6">Our Process</h3>
                <ol className="space-y-5">
                  {service.process.map((p, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="shrink-0 w-10 h-10 grid place-items-center bg-gradient-navy text-white font-serif">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-navy">{p.step}</p>
                        <p className="text-sm text-muted-foreground mt-1">{p.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {service.faqs && (
              <div className="mt-14">
                <h3 className="font-serif text-2xl text-navy mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {service.faqs.map((f, i) => (
                    <details key={i} className="group border border-border p-6 open:border-gold transition-colors">
                      <summary className="cursor-pointer font-semibold text-navy list-none flex items-center justify-between">
                        <span>{f.q}</span>
                        <span className="text-gold transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                      </summary>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            {service.includes && (
              <div className="bg-secondary border-t-4 border-gold p-8">
                <p className="text-xs tracking-[0.22em] uppercase text-gold font-semibold">
                  What's Included
                </p>
                <ul className="mt-5 space-y-3">
                  {service.includes.map((it, i) => (
                    <li key={i} className="flex gap-3 text-sm text-charcoal">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 bg-navy text-white p-8">
              <p className="text-xs tracking-[0.22em] uppercase text-gold font-semibold">
                Ready to start?
              </p>
              <h4 className="mt-3 font-serif text-2xl">Schedule a free intro call</h4>
              <p className="mt-3 text-sm text-white/70">
                Short introductory phone calls are free. We respond same day during business hours.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-3 px-6 py-3 text-xs font-semibold tracking-[0.22em] uppercase bg-gradient-gold text-gold-foreground hover:shadow-gold transition-all"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
