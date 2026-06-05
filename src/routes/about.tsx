import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, Scale, ArrowRight } from "lucide-react";
import scottAsset from "@/assets/scott-thomas.webp.asset.json";
import heroBooks from "@/assets/hero-books.jpg";
import { CTASection } from "@/components/CTASection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Scott Thomas, Esq. | Thomas Law Firm PLLC" },
      { name: "description", content: "Scott Thomas, Esq. is a New York City startup attorney with 15+ years of experience in trademark, small business and corporate law." },
      { property: "og:title", content: "About Scott Thomas, Esq. | Thomas Law Firm PLLC" },
      { property: "og:description", content: "15+ years of legal experience serving NYC startups and small businesses." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const qualifications = [
  { icon: Scale, label: "Admitted to Practice", value: "Appellate Division of the New York Supreme Court" },
  { icon: Award, label: "Admitted to Practice", value: "United States Patent and Trademark Office" },
  { icon: Scale, label: "Notary Public", value: "New York County, New York" },
];

const education = [
  { school: "University of Missouri School of Law", degree: "JD — Juris Doctor" },
  { school: "Webster University School of Business & Technology", degree: "MBA" },
  { school: "University of Missouri Trulaske College of Business", degree: "BSBA" },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden bg-navy">
        <img
          src={heroBooks}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        <div className="relative container-prose h-full flex items-end pb-20 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-xs tracking-[0.32em] uppercase text-gold">About</span>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-tight">
              Scott Thomas, <span className="italic text-gold">Esq.</span>
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              A Startup Attorney in New York City focused on trademark law, small business law and
              corporate law.
            </p>
          </div>
        </div>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="py-24">
        <div className="container-prose grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/40 -z-10" />
            <img
              src={scottAsset.url}
              alt="Scott Thomas, Esq."
              className="w-full h-[560px] object-cover shadow-elegant"
              loading="lazy"
            />
          </div>

          <div>
            <SectionEyebrow>Biography</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">15 Years of Trusted Counsel</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Scott Thomas, Esq. is a Startup Attorney in New York City. His practice focuses on
                trademark law, small business law and corporate law.
              </p>
              <p>
                Mr. Thomas has worked in private practice for the past 15 years owning and operating
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
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="py-24 bg-secondary">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow>Credentials</SectionEyebrow>
            <h2 className="font-serif text-4xl text-navy">Professional Qualifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {qualifications.map((q, i) => (
              <div key={i} className="bg-white border-t-2 border-gold p-8 shadow-card text-center">
                <div className="w-12 h-12 mx-auto grid place-items-center bg-navy text-white">
                  <q.icon size={20} />
                </div>
                <p className="mt-5 text-xs tracking-[0.24em] uppercase text-gold font-semibold">
                  {q.label}
                </p>
                <p className="mt-2 font-serif text-lg text-navy leading-snug">{q.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="py-24">
        <div className="container-prose max-w-4xl">
          <div className="text-center mb-14">
            <SectionEyebrow>Education</SectionEyebrow>
            <h2 className="font-serif text-4xl text-navy">Academic Background</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-gold/30 space-y-10">
            {education.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 bg-gradient-gold rounded-full ring-4 ring-background" />
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-gold mt-1" size={20} />
                  <div>
                    <p className="text-xs tracking-[0.22em] uppercase text-gold font-semibold">{e.degree}</p>
                    <h3 className="mt-1 font-serif text-2xl text-navy">{e.school}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 text-xs font-semibold tracking-[0.22em] uppercase bg-navy text-primary-foreground hover:bg-gradient-gold hover:text-gold-foreground transition-all"
            >
              Contact Scott <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
