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
            eyebrow="Gallery"
            title="Tree rescue work, shown clearly."
            sub="Field photos from wall rescue, roadside rescue, and replanting campaigns."
          />
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            View gallery
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {sourcedImages.slice(0, 5).map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-soft"
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                decoding="async"
                width={t.width}
                height={t.height}
                className="aspect-[9/16] w-full bg-muted object-contain"
              />
              <figcaption className="absolute inset-x-2 bottom-2 rounded-md bg-black/65 px-2.5 py-2 text-[11px] font-medium leading-4 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {t.credit}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
