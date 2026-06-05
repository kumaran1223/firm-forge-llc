import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Check } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Thomas Law Firm PLLC" },
      { name: "description", content: "Contact Thomas Law Firm PLLC to schedule a free phone consultation. We respond same day during business hours." },
      { property: "og:title", content: "Contact | Thomas Law Firm PLLC" },
      { property: "og:description", content: "Schedule a free consultation with a NYC business attorney." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [human, setHuman] = useState<"yes" | "no" | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (human !== "yes") return;
    setSent(true);
  };

  return (
    <>
      <section className="bg-navy text-white py-24 md:py-32 text-center">
        <div className="container-prose">
          <span className="text-xs tracking-[0.32em] uppercase text-gold">Get In Touch</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Contact <span className="italic text-gold">Us</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Contact us to schedule a free phone consultation. We respond quickly during normal
            business hours and typically schedule calls for the same day or next day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-prose grid lg:grid-cols-[1.4fr,1fr] gap-12">
          <div className="bg-white shadow-elegant p-10 md:p-12 border-t-4 border-gold">
            <SectionEyebrow>Send a Message</SectionEyebrow>
            <h2 className="font-serif text-3xl text-navy">Request a Consultation</h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Please submit the contact form to schedule a free phone consultation.
            </p>

            {sent ? (
              <div className="mt-8 border-2 border-gold p-8 text-center">
                <div className="w-14 h-14 mx-auto bg-gradient-gold grid place-items-center">
                  <Check className="text-white" size={24} />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-navy">Thank you</h3>
                <p className="mt-2 text-muted-foreground">
                  Your message has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First Name" name="firstName" required />
                  <Field label="Last Name" name="lastName" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] text-charcoal font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full px-4 py-3 bg-secondary border border-border focus:border-gold outline-none text-sm transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-charcoal font-semibold mb-3">
                    Are You Human?
                  </p>
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => setHuman(v)}
                        className={`px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase border transition-all ${
                          human === v
                            ? "bg-navy text-white border-navy"
                            : "border-border text-charcoal hover:border-navy"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={human !== "yes"}
                  className="w-full sm:w-auto px-10 py-4 text-xs font-semibold tracking-[0.22em] uppercase bg-gradient-gold text-gold-foreground hover:shadow-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </form>
            )}

            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground text-center border-t border-border pt-6">
              Please submit the contact form to schedule a free phone consultation.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="bg-navy text-white p-8">
              <SectionEyebrowLight>Office</SectionEyebrowLight>
              <ul className="mt-6 space-y-5">
                <InfoRow icon={MapPin} label="Address" value="445 Park Avenue, 9th Floor, New York, NY 10022" />
                <InfoRow icon={Phone} label="Phone" value="(212) 555-1234" href="tel:+12125551234" />
                <InfoRow icon={Mail} label="Email" value="scott@thomaslawfirm.co" href="mailto:scott@thomaslawfirm.co" />
                <InfoRow icon={Clock} label="Hours" value="Mon – Fri · 9:00 AM – 6:00 PM" />
              </ul>
            </div>

            <div className="aspect-square w-full overflow-hidden border border-border">
              <iframe
                title="Office map"
                src="https://www.google.com/maps?q=445+Park+Avenue+9th+Floor+New+York+NY+10022&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.22em] text-charcoal font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full px-4 py-3 bg-secondary border border-border focus:border-gold outline-none text-sm transition-colors"
      />
    </div>
  );
}

function SectionEyebrowLight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="text-xs tracking-[0.32em] uppercase text-gold font-medium">{children}</span>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-4">
      <div className="w-10 h-10 grid place-items-center border border-gold/40 text-gold shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-gold">{label}</p>
        <p className="mt-1 text-sm text-white">{value}</p>
      </div>
    </div>
  );
  return href ? <li><a href={href} className="hover:opacity-80 transition-opacity">{inner}</a></li> : <li>{inner}</li>;
}
