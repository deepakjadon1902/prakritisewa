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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Earth Mission | Save Trees, Plant Nature, Protect Life" },
      {
        name: "description",
        content:
          "Join India's citizen-led movement to save trees, relocate mature ones, plant native species, and protect the environment. Donate or volunteer today.",
      },
      { property: "og:title", content: "Green Earth Mission — A movement for Mother Nature" },
      {
        property: "og:description",
        content:
          "Rescue, relocate and plant trees with a citizen-led movement across India. Donate, volunteer, protect the future.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
