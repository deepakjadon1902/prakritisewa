import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Clock, ExternalLink } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";
import { posts } from "../data/blog";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Environmental Resources | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Read source-linked environmental stories and resources about tree plantation, conservation, and community green action in India.",
      },
      { property: "og:url", content: absoluteUrl("/blogs") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/blogs") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Stories that inspire green action.</>}
        sub="Source-linked reading on tree plantation, environmental conservation, and community participation."
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
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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
                  <p className="mt-4 text-xs text-muted-foreground">Author: {p.author}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to="/blogs/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex text-sm font-semibold text-[color:var(--forest)]"
                    >
                      Read more
                    </Link>
                    <a
                      href={p.sources[0]?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
                    >
                      Source
                      <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
