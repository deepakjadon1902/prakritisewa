import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/language";
import { SITE_HINDI_NAME } from "../../constants/site";
import { Container } from "../layout/Container";
import { FlipWords } from "../ui/flip-words";
import { TrustIcon } from "../icons/TrustIcon";
import heroImage from "../../assets/hero-tree-optimized.jpg";

export function Hero() {
  const { t, lang } = useLanguage();
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroWords =
    lang === "hi" ? ["प्रकृति", "भविष्य", "हरियाली"] : ["Trees", "Nature", "the Future"];
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const reloadVideo = () => {
      const video = heroVideoRef.current;
      if (!video) return;

      video.load();
      void video.play().catch(() => {});
    };

    navigator.serviceWorker.addEventListener("controllerchange", reloadVideo);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", reloadVideo);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="A healthy tree canopy representing environmental protection"
        width={1440}
        height={960}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <video
        ref={heroVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroImage}
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 -z-10 size-full object-cover brightness-[1.32]"
      >
        <source src="/hero-reel.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex min-h-[76svh] flex-col justify-center py-20 text-white sm:min-h-[82svh] sm:py-24 md:min-h-[min(850px,88svh)] md:py-28">
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur"
        >
          <TrustIcon name="planting" className="size-4" /> {t("hero_eyebrow")}
        </motion.p>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          aria-label={
            lang === "hi"
              ? "पेड़ों की रक्षा करें, प्रकृति, भविष्य और हरियाली के लिए।"
              : "Protect trees, nature, and tomorrow."
          }
          className="max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.07] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span aria-hidden="true">{lang === "hi" ? "पेड़ों की रक्षा करें, " : "Protect "}</span>
          <FlipWords
            words={heroWords}
            duration={3000}
            className={`font-display font-semibold ${lang === "hi" ? "min-w-[5em] text-[color:var(--sun)]" : "min-w-[10ch] text-[color:var(--sun)]"}`}
          />
          {lang === "hi" && <span aria-hidden="true"> के लिए</span>}
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 text-lg font-medium text-white/90"
        >
          {SITE_HINDI_NAME}
        </motion.p>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/88 sm:text-lg sm:leading-8 md:text-xl"
        >
          {t("hero_sub")}
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/volunteer"
            className="group inline-flex items-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <TrustIcon name="community" className="size-4" />
            {t("cta_volunteer")}
          </Link>
          <Link
            to="/mission"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Join Our Mission
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact Us
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/15 pt-6 text-white/85 sm:grid-cols-3"
        >
          {[
            { n: "Registered", l: "Public Charitable Trust" },
            { n: "PAN", l: "AAETV7094D" },
            { n: "Vrindavan", l: "Mathura, Uttar Pradesh" },
          ].map((s) => (
            <div key={s.l} className="last:col-span-2 sm:last:col-span-1">
              <p className="font-display text-2xl font-semibold sm:text-3xl">{s.n}</p>
              <p className="text-xs text-white/70 sm:text-sm">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
