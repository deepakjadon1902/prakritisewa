import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import hero from "../../assets/hero-tree.jpg";
import volunteers from "../../assets/volunteers-planting.jpg";
import reloc from "../../assets/tree-relocation.jpg";
import sapling from "../../assets/sapling-hands.jpg";
import aerial from "../../assets/forest-aerial.jpg";

const tiles = [
  { src: aerial, alt: "Aerial view of an Indian forest canopy", span: "md:col-span-2 md:row-span-2" },
  { src: volunteers, alt: "Volunteers planting a sapling together", span: "" },
  { src: sapling, alt: "Child holding a young sapling", span: "" },
  { src: reloc, alt: "Mature tree being carefully relocated", span: "md:col-span-2" },
  { src: hero, alt: "Ancient banyan tree in misty light", span: "" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Gallery"
            title="Moments from the field."
            sub="Every photograph is a tree that stood up again — thanks to someone who cared."
          />
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            View gallery
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
