import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Process } from "../components/sections/Process";
import { DonateCta } from "../components/sections/CtaBanners";
import { Container } from "../components/layout/Container";
import relocImg from "../assets/tree-relocation.jpg";

export const Route = createFileRoute("/tree-relocation")({
  head: () => ({
    meta: [
      { title: "Tree Relocation | Saving Mature Trees | Prakriti Sewa" },
      {
        name: "description",
        content:
          "How we safely uproot, transport, and re-plant mature trees threatened by construction — with a 3-year monitoring program.",
      },
      { property: "og:url", content: "/tree-relocation" },
    ],
    links: [{ rel: "canonical", href: "/tree-relocation" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tree Relocation"
        title={<>A 90-year-old tree doesn't have to die because a road came through.</>}
        sub="We've safely relocated 38,000+ mature trees with a survival rate of 84% — one of the highest documented in India."
      />
      <section className="py-16">
        <Container>
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={relocImg}
              alt="Mature tree being carefully uprooted for relocation"
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
