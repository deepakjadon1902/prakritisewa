import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { WhyTrees } from "../components/sections/WhyTrees";
import { VolunteerCta } from "../components/sections/CtaBanners";
import { OurWork } from "../components/sections/OurWork";
import { absoluteUrl } from "../constants/site";

export const Route = createFileRoute("/tree-plantation")({
  head: () => ({
    meta: [
      { title: "Tree Plantation Campaigns | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Tree plantation campaigns in public places, schools, temples, ashrams, and community areas across Vrindavan and the Braj region.",
      },
      { property: "og:url", content: absoluteUrl("/tree-plantation") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/tree-plantation") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tree Plantation"
        title={<>Plant trees where communities can protect them.</>}
        sub="Plantation drives in public places, schools, temples, ashrams, and community areas with local participation."
      />
      <OurWork />
      <WhyTrees />
      <VolunteerCta />
    </>
  ),
});
