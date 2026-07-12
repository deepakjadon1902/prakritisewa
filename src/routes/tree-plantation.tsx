import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { WhyTrees } from "../components/sections/WhyTrees";
import { VolunteerCta } from "../components/sections/CtaBanners";

export const Route = createFileRoute("/tree-plantation")({
  head: () => ({
    meta: [
      { title: "Tree Plantation Drives | Prakriti Sewa" },
      {
        name: "description",
        content:
          "Native species, chosen for each region, planted with the community and monitored for years. Join a plantation drive near you.",
      },
      { property: "og:url", content: "/tree-plantation" },
    ],
    links: [{ rel: "canonical", href: "/tree-plantation" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tree Plantation"
        title={<>Native trees. Local hands. Long memories.</>}
        sub="We plant what belongs — peepal, neem, mahua, gulmohar, jamun — and we stay to make sure they live."
      />
      <WhyTrees />
      <VolunteerCta />
    </>
  ),
});
