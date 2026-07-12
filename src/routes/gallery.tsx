import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import hero from "../assets/hero-tree.jpg";
import volunteers from "../assets/volunteers-planting.jpg";
import reloc from "../assets/tree-relocation.jpg";
import sapling from "../assets/sapling-hands.jpg";
import aerial from "../assets/forest-aerial.jpg";

const images = [
  { src: aerial, alt: "Aerial view of a lush Indian forest" },
  { src: volunteers, alt: "Volunteers planting a sapling" },
  { src: hero, alt: "Ancient banyan tree in golden light" },
  { src: sapling, alt: "Child holding a sapling in cupped hands" },
  { src: reloc, alt: "Mature tree being relocated" },
  { src: aerial, alt: "Forest canopy from above" },
  { src: volunteers, alt: "Community plantation drive" },
  { src: hero, alt: "Old-growth tree at sunrise" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Photos from the Field | Green Earth Mission" },
      { name: "description", content: "A visual diary of tree rescues, plantation drives, volunteer moments, and forests reclaimed across India." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Twelve years, one canopy — in pictures.</>}
        sub="Every frame is someone who cared enough to show up, and a tree that stood up again."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map((img, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
                className="mb-4 overflow-hidden rounded-2xl shadow-soft break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
