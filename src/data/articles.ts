export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "ny-llc-vs-corporation",
    title: "NY LLC vs. Corporation: Choosing the Right Entity",
    excerpt: "A practical comparison of the LLC and corporation for New York entrepreneurs — tax treatment, governance, equity and investor readiness.",
    category: "Business Formation",
    date: "2025-09-12",
    readingTime: "6 min",
    content: [
      "Choosing the right business entity is one of the first and most important legal decisions for any New York entrepreneur. The two most common choices are the limited liability company (LLC) and the business corporation.",
      "An LLC offers maximum flexibility in governance and pass-through taxation by default. A corporation is the preferred vehicle for businesses planning to raise venture capital or issue stock options.",
      "This article walks through the practical implications of each choice for typical New York startups and small businesses, including the often-overlooked NY publication requirement that applies to LLCs.",
    ],
  },
  {
    slug: "trademark-registration-guide",
    title: "A Founder's Guide to U.S. Trademark Registration",
    excerpt: "What every founder should know before filing a trademark application — clearance searches, classes, specimens and common pitfalls.",
    category: "Trademark Law",
    date: "2025-08-20",
    readingTime: "8 min",
    content: [
      "A federal trademark registration is one of the strongest brand-protection assets your business can own. But the USPTO process is unforgiving of small mistakes that can delay or doom an application.",
      "Before filing, a clearance search is essential to identify conflicting prior marks. Skipping this step is the single most common reason applications fail.",
      "This guide covers the full lifecycle of a trademark application from search through registration and maintenance.",
    ],
  },
  {
    slug: "ny-llc-publication-explained",
    title: "The New York LLC Publication Requirement, Explained",
    excerpt: "Why New York requires LLCs to publish notice — and how to satisfy the requirement efficiently without overpaying.",
    category: "Compliance",
    date: "2025-07-05",
    readingTime: "5 min",
    content: [
      "New York is one of only a handful of states that requires newly-formed LLCs to publish notice of their formation in two newspapers for six consecutive weeks.",
      "The cost varies dramatically by county. Strategic newspaper selection can save thousands of dollars without sacrificing compliance.",
    ],
  },
  {
    slug: "contract-essentials-startups",
    title: "Contract Essentials for Early-Stage Startups",
    excerpt: "The five contracts every startup should have in place before raising capital or hiring its first employee.",
    category: "Contracts",
    date: "2025-06-15",
    readingTime: "7 min",
    content: [
      "Sound contracts are the foundation of a defensible business. For early-stage startups, five agreements deserve immediate attention: the founders' agreement, IP assignment, NDA, independent contractor agreement, and customer terms of service.",
    ],
  },
  {
    slug: "registered-agent-explained",
    title: "What Does a Registered Agent Actually Do?",
    excerpt: "A clear explanation of the registered agent role, why every entity needs one, and what to look for in a provider.",
    category: "Compliance",
    date: "2025-05-08",
    readingTime: "4 min",
    content: [
      "Every LLC and corporation must designate a registered agent — a person or company authorized to receive legal process and official state correspondence on the entity's behalf.",
    ],
  },
  {
    slug: "foreign-qualification-ny-nj",
    title: "Foreign Qualification in New York and New Jersey",
    excerpt: "When out-of-state companies must register in NY or NJ — and what happens if they don't.",
    category: "Compliance",
    date: "2025-04-02",
    readingTime: "6 min",
    content: [
      "Doing business across state lines without proper authority exposes a company to fines, loss of court access, and personal liability for principals.",
    ],
  },
];
