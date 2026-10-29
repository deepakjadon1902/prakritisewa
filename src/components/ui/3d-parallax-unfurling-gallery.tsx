import { useMemo, useRef, useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { GalleryImage } from "../../data/media";

function subscribeToViewport(callback: () => void) {
  window.addEventListener("resize", callback, { passive: true });
  return () => window.removeEventListener("resize", callback);
}

function getColumnCount() {
  return window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 4;
}

function getServerColumnCount() {
  return 4;
}

function ImageCard({ image, repeated }: { image: GalleryImage; repeated: boolean }) {
  return (
    <motion.figure
      aria-hidden={repeated}
      className="group relative h-52 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-forest/90 shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-[1.02] sm:h-64 md:h-[22rem] lg:h-[26rem]"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="size-full object-contain p-1 transition-opacity duration-300 group-hover:opacity-100"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 pb-3 pt-10 text-[11px] font-medium leading-4 text-white sm:text-xs">
        {image.credit}
      </figcaption>
    </motion.figure>
  );
}

export function ParallaxUnfurlingGallery({ images }: { images: GalleryImage[] }) {
  const containerRef = useRef<HTMLSectionElement>(null);
  const columnCount = useSyncExternalStore(
    subscribeToViewport,
    getColumnCount,
    getServerColumnCount,
  );
  const reducedMotion = useReducedMotion();

  const columnImages = useMemo(
    () =>
      Array.from({ length: columnCount }, (_, columnIndex) => {
        const items = images.filter((_, imageIndex) => imageIndex % columnCount === columnIndex);
        return [...items, ...items];
      }),
    [columnCount, images],
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const bannerWidth = useTransform(
    smoothProgress,
    [0, 0.15],
    reducedMotion ? ["100%", "100%"] : ["90%", "100%"],
  );
  const bannerHeight = useTransform(
    smoothProgress,
    [0, 0.15],
    reducedMotion ? ["100%", "100%"] : ["80%", "100%"],
  );
  const bannerRadius = useTransform(
    smoothProgress,
    [0, 0.15],
    reducedMotion ? ["0px", "0px"] : ["32px", "0px"],
  );
  const bannerBorderWidth = useTransform(smoothProgress, [0, 0.15], ["1px", "0px"]);

  const rotateY = useTransform(smoothProgress, [0.15, 1], reducedMotion ? [0, 0] : [-38, -6]);
  const rotateX = useTransform(smoothProgress, [0.15, 1], reducedMotion ? [0, 0] : [20, 3]);
  const rotateZ = useTransform(smoothProgress, [0.15, 1], reducedMotion ? [0, 0] : [10, 1]);
  const translateZ = useTransform(smoothProgress, [0.15, 1], reducedMotion ? [0, 0] : [-500, 0]);

  const columnOffsets = [
    useTransform(smoothProgress, [0.15, 1], reducedMotion ? ["0%", "0%"] : ["0%", "-40%"]),
    useTransform(smoothProgress, [0.15, 1], reducedMotion ? ["0%", "0%"] : ["-35%", "8%"]),
    useTransform(smoothProgress, [0.15, 1], reducedMotion ? ["0%", "0%"] : ["0%", "-38%"]),
    useTransform(smoothProgress, [0.15, 1], reducedMotion ? ["0%", "0%"] : ["-28%", "18%"]),
  ];

  return (
    <section
      ref={containerRef}
      aria-label="Vriksh Rakshak Dal campaign gallery"
      className="relative h-[400svh] min-h-[2400px] bg-forest text-white"
      style={{ contentVisibility: "visible" }}
    >
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] w-full items-center justify-center overflow-hidden md:top-[4.75rem] md:h-[calc(100svh-4.75rem)]">
        <motion.div
          style={{
            width: bannerWidth,
            height: bannerHeight,
            borderRadius: bannerRadius,
            borderWidth: bannerBorderWidth,
            borderColor: "rgba(202, 220, 198, 0.32)",
          }}
          className="relative mx-auto flex max-w-[1920px] items-center justify-center overflow-hidden border bg-forest shadow-[0_32px_100px_rgba(0,0,0,0.5)] [transform-style:preserve-3d]"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden [perspective:1000px]">
            <div className="absolute inset-0 z-20 shadow-[inset_0_100px_150px_-60px_rgba(0,0,0,0.88),inset_0_-100px_150px_-60px_rgba(0,0,0,0.88)]" />
            <div className="absolute inset-0 z-20 shadow-[inset_100px_0_130px_-60px_rgba(0,0,0,0.8),inset_-100px_0_130px_-60px_rgba(0,0,0,0.8)]" />

            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                z: translateZ,
                transformStyle: "preserve-3d",
              }}
              className="flex h-[150%] w-[120%] origin-center items-center justify-center gap-3 opacity-100 will-change-transform sm:gap-4 lg:gap-6"
            >
              {columnImages.map((column, columnIndex) => (
                <motion.div
                  key={`gallery-column-${columnIndex}`}
                  style={{ y: columnOffsets[columnIndex] }}
                  className="flex w-[42vw] min-w-0 shrink-0 flex-col gap-3 sm:w-[29vw] sm:gap-4 lg:w-[22vw] lg:min-w-[200px] lg:gap-6"
                >
                  {column.map((image, imageIndex) => (
                    <ImageCard
                      key={`${columnIndex}-${image.src}-${imageIndex}`}
                      image={image}
                      repeated={imageIndex >= column.length / 2}
                    />
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
