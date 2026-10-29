import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "../../data/media";

export default function ImageGallery({
  images,
  className,
}: {
  images: GalleryImage[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:h-[23rem] lg:max-w-6xl lg:gap-3",
        className,
      )}
    >
      {images.slice(0, 5).map((image, index) => (
        <motion.figure
          key={image.src}
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="gallery-expanding-panel group relative aspect-[9/14] min-w-0 overflow-hidden rounded-lg border border-border bg-muted shadow-soft transition-[flex-grow,box-shadow,border-color] duration-500 ease-out hover:shadow-lift lg:aspect-auto lg:h-full lg:flex-1 lg:hover:flex-[3]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
            style={{ backgroundImage: `url("${image.src}")` }}
          />
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="relative size-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-3 pt-10 text-[11px] font-medium leading-4 text-white opacity-100 transition-opacity duration-300 sm:text-xs lg:opacity-0 lg:group-hover:opacity-100">
            {image.credit}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
