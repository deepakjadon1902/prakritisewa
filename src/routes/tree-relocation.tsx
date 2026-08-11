import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Process } from "../components/sections/Process";
import { DonateCta } from "../components/sections/CtaBanners";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";
import relocImg from "../assets/tree-relocation.jpg";

export const Route = createFileRoute("/tree-relocation")({
  head: () => ({
    meta: [
      { title: "Tree Protection & Care | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Tree care, monitoring, watering, protection, and maintenance of planted saplings by Vriksh Rakshak Dal Sewa Trust.",
      },
      { property: "og:url", content: absoluteUrl("/tree-relocation") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/tree-relocation") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tree Care"
        title={<>Nurture and safeguard planted trees.</>}
        sub="The Trust focuses on survival and protection of planted trees rather than plantation numbers alone."
      />
      <section className="py-16">
        <Container>
          <div className="overflow-hidden rounded-lg shadow-lift">
            <img
              src={relocImg}
              alt="Tree care and protection work"
              width={1400}
              height={1000}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </div>
        </Container>
      </section>
      <Process />
      <DonateCta />
    </>
  ),
});
