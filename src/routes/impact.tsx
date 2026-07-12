import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { ImpactCounter } from "../components/sections/ImpactCounter";
import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { motion } from "motion/react";

const timeline = [
  { year: "2014", title: "The first sapling", desc: "A small group of friends plants 50 saplings in a single Sunday drive in Pune." },
  { year: "2017", title: "First relocation", desc: "We save an 80-year-old peepal from a widening road. It thrives to this day." },
  { year: "2019", title: "10 cities", desc: "Chapters launch across 10 Indian cities. First arborist team hired." },
  { year: "2022", title: "1 million trees planted", desc: "A milestone made possible by 12,000+ volunteers across the country." },
  { year: "2025", title: "146 cities", desc: "Operations in every major Indian metro plus dozens of Tier-2 and Tier-3 cities." },
];

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact | Trees Saved, Planted, Relocated | Green Earth Mission" },
      { name: "description", content: "1.2M+ trees planted, 38K+ relocated, 24K+ volunteers, 146 cities. See the timeline of our impact — and where it's going next." },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Our Impact"
        title={<>Twelve years. Millions of trees. One shared canopy.</>}
        sub="Every number here is a life saved, a shade reclaimed, a neighborhood reconnected with the forest."
      />
      <ImpactCounter />
      <section className="py-24">
        <Container size="sm">
          <SectionHeader eyebrow="Timeline" title="How we got here." />
          <ol className="mt-14 space-y-6">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-[120px_1fr] sm:items-baseline"
              >
                <span className="font-display text-3xl font-semibold text-[color:var(--forest)]">
                  {t.year}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-muted-foreground">{t.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  ),
});
