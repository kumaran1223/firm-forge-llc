import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { articles } from "@/data/articles";
import { CTASection } from "@/components/CTASection";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Legal Articles & Insights | Thomas Law Firm PLLC" },
      { name: "description", content: "Articles and insights on NY business formation, trademark law, contracts and compliance from Thomas Law Firm PLLC." },
      { property: "og:title", content: "Legal Articles & Insights | Thomas Law Firm PLLC" },
      { property: "og:description", content: "Insights on business law, trademarks and NYC entity formation." },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((a) => a.category)))],
    []
  );

  const filtered = articles.filter((a) => {
    const matchesCat = category === "All" || a.category === category;
    const q = query.toLowerCase();
    const matchesQ = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });

  return (
    <>
      <section className="bg-navy text-white py-24 md:py-32">
        <div className="container-prose text-center">
          <span className="text-xs tracking-[0.32em] uppercase text-gold">Insights</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Articles & <span className="italic text-gold">Insights</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Practical guidance on business formation, trademark protection and contract law for
            startups and small businesses.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container-prose">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-border focus:border-gold outline-none text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition-all ${
                    category === c ? "bg-navy text-white" : "bg-white text-charcoal hover:bg-navy hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No articles match your search.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((a, i) => (
                <Link
                  key={a.slug}
                  to="/articles/$slug"
                  params={{ slug: a.slug }}
                  className="group block bg-white border border-border hover:border-gold transition-all hover:shadow-elegant hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-navy relative">
                    <div className="absolute inset-0 bg-gradient-navy opacity-90" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="font-serif italic text-5xl text-gold/40">
                        {a.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-gold font-semibold">
                      <span>{a.category}</span>
                      <span className="text-border">·</span>
                      <span className="text-muted-foreground">{a.readingTime}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl text-navy leading-snug group-hover:text-gold transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {a.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-navy group-hover:text-gold transition-colors">
                      Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
