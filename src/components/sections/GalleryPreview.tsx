import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { sourcedImages } from "../../data/media";

export function GalleryPreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="स्रोत सहित गैलरी"
            title="प्रकृति की तस्वीरें, स्रोत के साथ।"
            sub="हर छवि का स्रोत दिखाया गया है ताकि प्रेरणा भरोसे के साथ आगे बढ़े।"
          />
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            गैलरी देखें
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {sourcedImages.slice(0, 5).map((t, i) => (
            <motion.figure
              key={t.src}
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
                referrerPolicy="no-referrer"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-xl bg-black/55 px-3 py-2 text-xs text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {t.credit}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
