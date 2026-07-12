import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { MissionOverview } from "../components/sections/MissionOverview";
import { WhyTrees } from "../components/sections/WhyTrees";
import { Process } from "../components/sections/Process";
import { DonateCta } from "../components/sections/CtaBanners";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission | Prakriti Sewa" },
      {
        name: "description",
        content:
          "We rescue endangered trees, relocate mature ones, plant native species with communities, and rebuild the canopy of Indian cities.",
      },
      { property: "og:title", content: "Our Mission — Prakriti Sewa" },
      { property: "og:url", content: "/mission" },
    ],
    links: [{ rel: "canonical", href: "/mission" }],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission"
        title={<>Trees give us breath. We give them a chance.</>}
        sub="A movement rooted in science, kept alive by citizens, working in 146 Indian cities and growing every month."
      />
      <MissionOverview />
      <WhyTrees />
      <Process />
      <DonateCta />
    </>
  );
}
