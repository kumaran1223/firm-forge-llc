import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-prose grid gap-12 lg:grid-cols-3 py-16">
        {/* Brand */}
        <div>
          <div className="mb-6">
            <Logo light />
          </div>
          <p className="text-sm text-white/70 max-w-sm leading-relaxed">
            A boutique New York City law firm providing trusted legal services to startups, small
            businesses and entrepreneurs since 2011.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/ThomasLawFirm/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 grid place-items-center border border-white/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/thomas-law-firm-pllc/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 grid place-items-center border border-white/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-serif text-lg mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/articles", label: "Articles" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Map */}
        <div>
          <h3 className="font-serif text-lg mb-6 text-white">Visit Our Office</h3>
          <div className="aspect-video w-full overflow-hidden border border-white/10 mb-5">
            <iframe
              title="Thomas Law Firm PLLC office location"
              src="https://www.google.com/maps?q=445+Park+Avenue+9th+Floor+New+York+NY+10022&output=embed"
              className="w-full h-full grayscale-[60%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-gold shrink-0" />
              <span>445 Park Avenue, 9th Floor, New York, NY 10022</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" />
              <a href="tel:+12125551234" className="hover:text-gold">(212) 555-1234</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" />
              <a href="mailto:scott@thomaslawfirm.co" className="hover:text-gold">
                scott@thomaslawfirm.co
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Thomas Law Firm PLLC. All rights reserved.</p>
          <p className="italic">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
