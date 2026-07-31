import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Mail, Sparkles, Users } from "lucide-react";
import { useLanguage } from "../../context/language";
import { SITE_HINDI_NAME } from "../../constants/site";
import { Container } from "../layout/Container";
import heroImage from "../../assets/hero-tree-optimized.jpg";

export function Hero() {
  const { t } = useLanguage();
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
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 -z-10 bg-black/35" />

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
          className="max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t("hero_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 text-lg font-medium text-white/90"
        >
          {SITE_HINDI_NAME}
        </motion.p>

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
            to="/volunteer"
            className="group inline-flex items-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <Users className="size-4" aria-hidden="true" />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/15 pt-6 text-white/85 sm:grid-cols-3"
        >
          {[
            { n: "Registered", l: "Public Charitable Trust" },
            { n: "PAN", l: "AAETV7094D" },
            { n: "Vrindavan", l: "Mathura, Uttar Pradesh" },
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
