import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="container-prose relative py-20 lg:py-28 text-center">
        <span className="inline-block gold-divider mb-6" />
        <h2 className="font-serif text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
          Ready To Discuss Your Legal Needs?
        </h2>
        <p className="mt-5 text-white/70 max-w-xl mx-auto">
          Schedule a complimentary introductory phone consultation. We respond same day during
          business hours.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-xs font-semibold tracking-[0.22em] uppercase bg-gradient-gold text-gold-foreground hover:shadow-gold transition-all duration-300 group"
        >
          Contact Us
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
