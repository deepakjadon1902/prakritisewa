import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/language";
import { Container } from "../layout/Container";
import heroImage from "../../assets/hero-tree.jpg";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="घने पेड़ की छांव में प्रकृति का शांत दृश्य"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      <Container className="relative flex min-h-[86vh] flex-col justify-end py-24 text-white md:min-h-[92vh] md:justify-center md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur"
        >
          <Sparkles className="size-3.5" aria-hidden="true" /> {t("hero_eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t("hero_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-base text-white/85 sm:text-lg md:text-xl"
        >
          {t("hero_sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/donate"
            className="group inline-flex items-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <Heart className="size-4" aria-hidden="true" />
            {t("cta_donate")}
          </Link>
          <Link
            to="/volunteer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            {t("cta_volunteer")}
          </Link>
          <Link
            to="/mission"
            className="group inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:text-white"
          >
            {t("cta_explore")}
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white/85"
        >
          {[
            { n: "1.2M+", l: "लगाए गए पेड़" },
            { n: "38,000", l: "स्थानांतरित पेड़" },
            { n: "24,000+", l: "स्वयंसेवक" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-2xl font-semibold sm:text-3xl">{s.n}</p>
              <p className="text-xs text-white/70 sm:text-sm">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
