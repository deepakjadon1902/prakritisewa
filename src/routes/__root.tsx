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
import { LanguageProvider } from "../context/language";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-[8rem] leading-none text-gradient-forest">404</p>
        <h1 className="mt-2 font-display text-2xl font-semibold">This trail ends here.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has been moved or never existed. Head back to the forest.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold"
          >
            Contact us
          </Link>
        </div>
      </div>
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
        <h1 className="font-display text-2xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Green Earth Mission",
  url: "/",
  logo: "/favicon.ico",
  description:
    "A citizen-led movement to rescue endangered trees, relocate mature ones, plant native species, and rebuild the canopy of Indian cities.",
  sameAs: [
    "https://instagram.com/",
    "https://facebook.com/",
    "https://twitter.com/",
    "https://youtube.com/",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "प्रकृति सेवा | पेड़ों की रक्षा हेतु निःस्वार्थ सेवा" },
      {
        name: "description",
        content:
          "प्रकृति सेवा असुरक्षित और अस्वस्थ स्थानों से पेड़-पौधों को बचाकर सुरक्षित स्थानों पर पुनर्स्थापित करता है — बिना किसी स्वार्थ के, केवल प्रकृति की सेवा के भाव से",
      },
      { name: "author", content: "Green Earth Mission" },
      { name: "theme-color", content: "#2e5e3a" },
      { property: "og:site_name", content: "Green Earth Mission" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@greenearth" },
      { property: "og:title", content: "प्रकृति सेवा | पेड़ों की रक्षा हेतु निःस्वार्थ सेवा" },
      { name: "twitter:title", content: "प्रकृति सेवा | पेड़ों की रक्षा हेतु निःस्वार्थ सेवा" },
      { property: "og:description", content: "प्रकृति सेवा असुरक्षित और अस्वस्थ स्थानों से पेड़-पौधों को बचाकर सुरक्षित स्थानों पर पुनर्स्थापित करता है — बिना किसी स्वार्थ के, केवल प्रकृति की सेवा के भाव से" },
      { name: "twitter:description", content: "प्रकृति सेवा असुरक्षित और अस्वस्थ स्थानों से पेड़-पौधों को बचाकर सुरक्षित स्थानों पर पुनर्स्थापित करता है — बिना किसी स्वार्थ के, केवल प्रकृति की सेवा के भाव से" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a1ff1923-0265-4844-9cd7-fb32ea72d75f/id-preview-178f5b59--44b1db3f-9949-470d-af09-7d70431bdd31.lovable.app-1783840324378.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a1ff1923-0265-4844-9cd7-fb32ea72d75f/id-preview-178f5b59--44b1db3f-9949-470d-af09-7d70431bdd31.lovable.app-1783840324378.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
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
      <LanguageProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[color:var(--forest)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
