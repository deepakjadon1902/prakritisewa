import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { posts } from "../data/blog";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blog | Green Earth Mission" },
      { name: "description", content: "Field notes, science, and stories on tree conservation, urban forestry, and environmental awareness in India." },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Field notes from the canopy.</>}
        sub="Science, storytelling, and honest reflections from twelve years of protecting trees."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-[color:var(--forest)]">
                      {p.category}
                    </span>
                    <span>{p.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" aria-hidden="true" />
                      {p.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">By {p.author}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
