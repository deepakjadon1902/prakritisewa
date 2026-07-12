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
      { title: "प्रकृति सेवा | पेड़ों की रक्षा हेतु निःस्वार्थ सेवा" },
      {
        name: "description",
        content:
          "प्रकृति सेवा असुरक्षित और अस्वस्थ स्थानों से पेड़-पौधों को बचाकर सुरक्षित स्थानों पर पुनर्स्थापित करता है — बिना किसी स्वार्थ के, केवल प्रकृति की सेवा के भाव से",
      },
      { property: "og:title", content: "प्रकृति सेवा | पेड़ों की रक्षा हेतु निःस्वार्थ सेवा" },
      {
        property: "og:description",
        content:
          "प्रकृति सेवा असुरक्षित और अस्वस्थ स्थानों से पेड़-पौधों को बचाकर सुरक्षित स्थानों पर पुनर्स्थापित करता है — बिना किसी स्वार्थ के, केवल प्रकृति की सेवा के भाव से",
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
