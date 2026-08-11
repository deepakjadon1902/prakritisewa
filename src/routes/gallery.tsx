import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
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
      <section className="py-16 sm:py-24">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {sourcedImages.map((img, i) => (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
                className="mb-4 overflow-hidden rounded-lg border border-border bg-card shadow-soft break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  width={img.width}
                  height={img.height}
                  className="h-auto w-full bg-muted object-contain"
                />
                <figcaption className="px-4 py-3 text-xs font-medium text-muted-foreground">
                  <span>{img.credit}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
