import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { MissionOverview } from "../components/sections/MissionOverview";
import { ImpactCounter } from "../components/sections/ImpactCounter";
import { OurWork } from "../components/sections/OurWork";
import { WhyTrees } from "../components/sections/WhyTrees";
import { Process } from "../components/sections/Process";
import { GalleryPreview } from "../components/sections/GalleryPreview";
import { Testimonials } from "../components/sections/Testimonials";
import { DonateCta, VolunteerCta } from "../components/sections/CtaBanners";
import { BlogPreview } from "../components/sections/BlogPreview";
import { Faq } from "../components/sections/Faq";
import { SITE_DESCRIPTION, SITE_TITLE, absoluteUrl } from "../constants/site";

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
    </>
  );
}
