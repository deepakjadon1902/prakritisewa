import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { ParallaxUnfurlingGallery } from "../components/ui/3d-parallax-unfurling-gallery";
import { absoluteUrl } from "../constants/site";
import { sourcedImages } from "../data/media";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "A source-linked gallery of trees, forests, saplings, plantation work, and environmental conservation imagery.",
      },
      { property: "og:url", content: absoluteUrl("/gallery") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gallery") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Tree rescue work from wall, roadside, and waste spaces.</>}
        sub="Real campaign visuals from Vriksh Rakshak Dal field work, arranged in the same order as the supplied photos."
      />
      <ParallaxUnfurlingGallery images={sourcedImages} />
    </>
  ),
});
