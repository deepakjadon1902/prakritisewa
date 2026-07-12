import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import reloc from "../assets/tree-relocation.jpg";
import volunteers from "../assets/volunteers-planting.jpg";
import sapling from "../assets/sapling-hands.jpg";

const stories = [
  {
    title: "The peepal on Baner Road",
    location: "Pune • 2023",
    image: reloc,
    body: "A 90-year-old peepal in the path of a metro line. We relocated it 400 meters, and one monsoon later, it burst back into leaf.",
  },
  {
    title: "1,000 trees on one Sunday",
    location: "Bengaluru • 2024",
    image: volunteers,
    body: "Eight hundred volunteers, ninety species, one lakebed reborn. Every sapling has a QR code — you can adopt one from home.",
  },
  {
    title: "A school that grew a forest",
    location: "Kochi • 2022",
    image: sapling,
    body: "Grade 5 students planted native saplings around their playground. Three years later, their school records the coolest summers in the district.",
  },
];

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories | Green Earth Mission" },
      { name: "description", content: "Real stories of trees saved, forests reborn, and communities transformed by ordinary citizens." },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Stories"
        title={<>Real trees. Real neighborhoods. Real hope.</>}
        sub="Behind every statistic is a specific tree, a specific street, and specific people who made it happen."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-16">
            {stories.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="overflow-hidden rounded-[2rem] shadow-lift">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </figure>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
                    {s.location}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{s.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
