import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";

const stories = [
  {
    title: "Molai Forest: one person's long commitment",
    location: "Majuli, Assam",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Forest%20Man%20of%20India%20Jadav%20Payeng.jpg",
    body: "Jadav Payeng's decades-long work on a river island shows how consistent care can turn degraded land into a living forest and inspire citizen responsibility.",
    source: { label: "Wikipedia: Jadav Payeng", url: "https://en.wikipedia.org/wiki/Jadav_Payeng" },
  },
  {
    title: "Piplantri: trees for every daughter",
    location: "Rajsamand, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    body: "The village tradition of planting trees for every girl child connects environmental care with community celebration and social dignity.",
    source: { label: "Wikipedia: Piplantri", url: "https://en.wikipedia.org/wiki/Piplantri" },
  },
  {
    title: "Chami Murmu: green leadership through communities",
    location: "Jharkhand",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    body: "Chami Murmu's work highlights how women and local communities can make tree protection a lasting social force.",
    source: { label: "Wikipedia: Chami Murmu", url: "https://en.wikipedia.org/wiki/Chami_Murmu" },
  },
  {
    title: "Citizen tree mapping: records that protect",
    location: "Pune, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    body: "Citizen groups that document and geotag trees show how public records can support conservation, monitoring, and local accountability.",
    source: {
      label: "Times of India: Pune tree geotagging",
      url: "https://timesofindia.indiatimes.com/city/pune/citizens-take-geotagging-of-punes-green-cover-into-their-own-hands/articleshow/122800619.cms",
    },
  },
];

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Green Stories | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Source-linked green stories from India that inspire tree plantation, protection, and community participation.",
      },
      { property: "og:url", content: absoluteUrl("/stories") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/stories") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Stories"
        title={<>Real people. Real trees. Real hope.</>}
        sub="Source-linked stories that show what patient environmental action can make possible."
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
                className={`grid gap-8 md:grid-cols-2 md:items-center ${
                  i % 2 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-lg shadow-lift">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="aspect-[4/3] size-full object-cover"
                  />
                </figure>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
                    {s.location}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">{s.body}</p>
                  <a
                    href={s.source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-accent"
                  >
                    View source
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
