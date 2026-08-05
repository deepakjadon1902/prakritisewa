import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Users } from "lucide-react";
import { Container } from "../layout/Container";
import volunteers from "../../assets/volunteers-planting.jpg";

export function DonateCta() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 rounded-lg bg-[color:var(--forest)] px-8 py-12 text-primary-foreground shadow-lift md:grid-cols-[1fr_auto] md:items-center md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/64">
              Join Our Mission
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Become a volunteer, supporter, donor, or campaign participant.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/80">
              Contribute to tree plantation, tree care, public awareness, and community green
              initiatives.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <Users className="size-4" aria-hidden="true" />
              Become a Volunteer
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <HeartHandshake className="size-4" aria-hidden="true" />
              Support the Trust
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VolunteerCta() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-lg border border-border bg-card shadow-soft lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <img
              src={volunteers}
              alt="Volunteers planting a sapling together"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
              Volunteer
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              One Tree. One Life. One Green Future.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Join plantation drives, tree protection work, awareness programs, and community green
              initiatives in Vrindavan, Mathura, and nearby Braj areas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Join the mission
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
              >
                Contact the Trust
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
