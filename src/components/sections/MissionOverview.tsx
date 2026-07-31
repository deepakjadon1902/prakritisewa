import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import forestImg from "../../assets/forest-aerial.jpg";

const legalDetails = [
  "Registered Trust Deed",
  "Public Charitable Trust",
  "Trust PAN Available",
  "Environmental & Social Welfare Organization",
];

export function MissionOverview() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
              <span className="size-1.5 rounded-full bg-[color:var(--leaf)]" />
              About Us
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl"
            >
              A Vrindavan-based public charitable trust for{" "}
              <span className="text-gradient-forest">tree protection and green action</span>.
            </motion.h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Vriksh Rakshak Dal Sewa Trust is committed to environmental conservation, tree
              plantation, tree protection, and social welfare activities. The Trust works primarily
              in Vrindavan, Mathura, and surrounding Braj regions with the vision of creating a
              greener, healthier, and environmentally responsible society.
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Our mission is not only to plant trees but also to protect, nurture, and preserve them
              for future generations through public awareness and community participation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/mission"
                className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Read Mission
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent"
              >
                Contact the Trust
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
            <div className="overflow-hidden rounded-lg shadow-lift">
              <img
                src={forestImg}
                alt="Green forest canopy representing environmental conservation"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-[310px] rounded-lg bg-card p-5 shadow-lift ring-1 ring-border sm:-left-6">
              <p className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                Legal Status
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {legalDetails.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="h-px w-5 shrink-0 bg-[color:var(--forest)]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
