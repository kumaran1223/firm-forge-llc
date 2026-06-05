import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1 grid place-items-center px-4 pt-32 pb-24">
        <div className="max-w-md text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Page Not Found</p>
          <h1 className="font-serif text-6xl text-navy">404</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy text-primary-foreground hover:bg-gradient-gold hover:text-gold-foreground transition-all"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Please try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase bg-navy text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase border border-navy text-navy">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Thomas Law Firm PLLC | NYC Business & Trademark Attorney" },
      {
        name: "description",
        content:
          "Boutique New York City law firm serving startups, small businesses and entrepreneurs. Trademark, business formation, contract and corporate law since 2011.",
      },
      { property: "og:title", content: "Thomas Law Firm PLLC | NYC Business & Trademark Attorney" },
      {
        property: "og:description",
        content:
          "Trusted New York attorney providing business law, trademark, corporate and startup legal services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Thomas Law Firm PLLC" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Thomas Law Firm PLLC",
          description:
            "Boutique New York City law firm providing trademark, business formation, contract and corporate legal services to startups and small businesses since 2011.",
          areaServed: "New York City",
          address: {
            "@type": "PostalAddress",
            streetAddress: "445 Park Avenue, 9th Floor",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10022",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <Navbar />
        <main className="flex-1 pt-[88px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
