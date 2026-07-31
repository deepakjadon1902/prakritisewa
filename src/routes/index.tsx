import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Hero } from "../components/sections/Hero";
import { SITE_DESCRIPTION, SITE_TITLE, absoluteUrl } from "../constants/site";

const MissionOverview = lazy(() =>
  import("../components/sections/MissionOverview").then((module) => ({
    default: module.MissionOverview,
  })),
);
const ImpactCounter = lazy(() =>
  import("../components/sections/ImpactCounter").then((module) => ({
    default: module.ImpactCounter,
  })),
);
const OurWork = lazy(() =>
  import("../components/sections/OurWork").then((module) => ({ default: module.OurWork })),
);
const WhyTrees = lazy(() =>
  import("../components/sections/WhyTrees").then((module) => ({ default: module.WhyTrees })),
);
const Process = lazy(() =>
  import("../components/sections/Process").then((module) => ({ default: module.Process })),
);
const GalleryPreview = lazy(() =>
  import("../components/sections/GalleryPreview").then((module) => ({
    default: module.GalleryPreview,
  })),
);
const Testimonials = lazy(() =>
  import("../components/sections/Testimonials").then((module) => ({
    default: module.Testimonials,
  })),
);
const DonateCta = lazy(() =>
  import("../components/sections/CtaBanners").then((module) => ({ default: module.DonateCta })),
);
const VolunteerCta = lazy(() =>
  import("../components/sections/CtaBanners").then((module) => ({ default: module.VolunteerCta })),
);
const BlogPreview = lazy(() =>
  import("../components/sections/BlogPreview").then((module) => ({ default: module.BlogPreview })),
);
const Faq = lazy(() =>
  import("../components/sections/Faq").then((module) => ({ default: module.Faq })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-24" aria-hidden="true" />}>
        <MissionOverview />
        <ImpactCounter />
        <OurWork />
        <WhyTrees />
        <Process />
        <GalleryPreview />
        <Testimonials />
        <DonateCta />
        <VolunteerCta />
        <BlogPreview />
        <Faq limit={5} />
      </Suspense>
    </>
  );
}
