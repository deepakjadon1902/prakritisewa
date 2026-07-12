import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import forestImg from "../../assets/forest-aerial.jpg";

export function MissionOverview() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
              <span className="size-1.5 rounded-full bg-[color:var(--leaf)]" />
              Who we are
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl"
            >
              We're the quiet infrastructure between{" "}
              <span className="text-gradient-forest">people and the trees</span> they love.
            </motion.h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Green Earth Mission is a citizen-led movement that rescues endangered trees,
              relocates mature ones, plants native species with communities, and rebuilds the
              relationship between cities and their canopy.
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              We are not a company. We are volunteers, arborists, students, doctors, teachers,
              engineers — anyone who has ever stood under a tree and felt lucky.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/mission"
                className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Read our mission
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/impact"
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent"
              >
                See the numbers
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={forestImg}
                alt="Aerial view of a dense Indian forest with a winding river"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-[240px] rounded-2xl bg-card p-5 shadow-lift ring-1 ring-border sm:-left-6">
              <p className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Since 2014
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Volunteer-run, science-guided, community-owned.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
