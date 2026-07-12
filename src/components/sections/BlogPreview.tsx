import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { posts } from "../../data/blog";

export function BlogPreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="स्रोत सहित ब्लॉग"
            title="सच्ची कहानियां, साफ स्रोत।"
            sub="भारत के पेड़-प्रेमियों, गांवों और नागरिक प्रयासों से प्रेरित हिंदी लेख।"
          />
          <Link
            to="/blogs"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft"
          >
            सभी लेख
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
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
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-[color:var(--forest)]">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" aria-hidden="true" />
                    {p.readingTime}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link
                  to="/blogs/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex text-sm font-semibold text-[color:var(--forest)]"
                >
                  पूरा पढ़ें →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
