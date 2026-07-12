import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";
import { sourcedImages } from "../data/media";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "गैलरी | स्रोत सहित प्रकृति और वृक्षारोपण तस्वीरें | Prakriti Sewa" },
      {
        name: "description",
        content:
          "प्रकृति सेवा की स्रोत-सहित गैलरी में पेड़, वन, पौधे, वृक्षारोपण और प्रेरक पर्यावरण छवियां देखें।",
      },
      { property: "og:url", content: absoluteUrl("/gallery") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/gallery") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="गैलरी"
        title={<>हर तस्वीर एक जिम्मेदारी की याद है।</>}
        sub="यह गैलरी इंटरनेट स्रोतों और खुले मीडिया से प्रेरित है; प्रत्येक छवि का स्रोत साथ दिया गया है।"
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {sourcedImages.concat(sourcedImages.slice(0, 2)).map((img, i) => (
              <motion.figure
                key={`${img.src}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
                className="mb-4 overflow-hidden rounded-2xl bg-card shadow-soft break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-xs text-muted-foreground">
                  <span>{img.credit}</span>
                  <a
                    href={img.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[color:var(--forest)]"
                  >
                    स्रोत
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
