import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Users, ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import volunteers from "../../assets/volunteers-planting.jpg";

export function DonateCta() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] gradient-forest px-8 py-16 text-primary-foreground shadow-lift md:px-16 md:py-20"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[color:var(--sun)]/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 size-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
              <Heart className="size-3.5" aria-hidden="true" /> Donate
            </p>
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl">
              ₹500 can save a tree. ₹5,000 can plant a hundred.
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Every rupee goes into rescue equipment, saplings, watering trucks, and paying local
              caretakers. 100% transparent, receipts within minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Heart className="size-4" aria-hidden="true" />
                Donate now
              </Link>
              <Link
                to="/impact"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20"
              >
                See the impact
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export function VolunteerCta() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <img
              src={volunteers}
              alt="Volunteers kneeling around a sapling they just planted"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="p-8 md:p-14">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--forest)]">
              <Users className="size-3.5" aria-hidden="true" /> Volunteer
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Give one Sunday. Change a neighborhood.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join a chapter near you. Plantation drives, awareness walks, tree audits, weekend
              caretaking — pick what fits your life. We'll train you, feed you, and thank you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Join the mission
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/stories"
                className="inline-flex items-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
              >
                Read volunteer stories
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
