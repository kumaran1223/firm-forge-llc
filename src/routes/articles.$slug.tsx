import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { articles } from "@/data/articles";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return {};
    return {
      meta: [
        { title: `${a.title} | Thomas Law Firm PLLC` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/articles/${a.slug}` },
      ],
      links: [{ rel: "canonical", href: `/articles/${a.slug}` }],
    };
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  return (
    <>
      <article className="bg-secondary py-20">
        <div className="container-prose max-w-3xl">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Articles
          </Link>
          <span className="text-xs tracking-[0.32em] uppercase text-gold font-semibold">{article.category}</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl text-navy leading-tight">{article.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>By Scott Thomas, Esq.</span>
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readingTime}</span>
          </div>
        </div>
      </article>

      <section className="py-16">
        <div className="container-prose max-w-3xl">
          <div className="aspect-[16/8] bg-gradient-navy mb-12 relative overflow-hidden">
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-serif italic text-8xl text-gold/30">{article.category.charAt(0)}</span>
            </div>
          </div>
          <div className="prose-content space-y-6 text-charcoal leading-[1.85] text-lg">
            {article.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2">
              <Share2 size={14} /> Share this article
            </p>
            <Link to="/contact" className="text-xs uppercase tracking-[0.22em] text-gold hover:text-navy">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
