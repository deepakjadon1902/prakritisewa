import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { sourcedImages } from "../../data/media";
import { FlipWords } from "../ui/flip-words";
import ImageGallery from "../ui/image-gallery";

export function GalleryPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Gallery"
            title={
              <>
                <FlipWords
                  words={["Tree rescue", "Sapling care", "Field work"]}
                  className="min-w-[12ch] font-semibold text-[color:var(--forest)]"
                />{" "}
                work, shown clearly.
              </>
            }
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

        <ImageGallery images={sourcedImages} className="mt-10" />
      </Container>
    </section>
  );
}
