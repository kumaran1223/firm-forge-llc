import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/articles", label: "Articles" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-prose flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm font-medium tracking-wide uppercase text-charcoal hover:text-navy transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-navy after:w-full" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy text-primary-foreground hover:bg-gradient-gold hover:text-gold-foreground transition-all duration-300 shadow-card"
          >
            Contact Us
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-navy"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <nav className="container-prose flex flex-col py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-wide text-charcoal hover:text-navy"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy text-primary-foreground"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
