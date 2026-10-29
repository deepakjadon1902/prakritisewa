import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { DonateCta } from "../components/sections/CtaBanners";
import { ImpactCounter } from "../components/sections/ImpactCounter";
import { absoluteUrl } from "../constants/site";
import { TrustIcon, type TrustIconName } from "../components/icons/TrustIcon";

const pillars = [
  {
    title: "Safeguarding Saplings",
    desc: "Protection support so newly planted trees can survive beyond the campaign day.",
    icon: "protection",
  },
  {
    title: "Watering & Care",
    desc: "Regular care, maintenance, and monitoring for planted saplings.",
    icon: "planting",
  },
  {
    title: "Community Monitoring",
    desc: "Local volunteers and citizens help watch over green spaces and report needs.",
    icon: "community",
  },
  {
    title: "Public Awareness",
    desc: "Outreach activities that encourage citizens, students, and institutions to protect trees.",
    icon: "awareness",
  },
] satisfies { title: string; desc: string; icon: TrustIconName }[];

const objectives = [
  { label: "Tree plantation and restoration", icon: "planting" },
  { label: "Tree protection and long-term care", icon: "protection" },
  { label: "Environmental and nature conservation", icon: "awareness" },
  { label: "Public awareness and education", icon: "awareness" },
  { label: "Community participation and volunteer programs", icon: "community" },
  { label: "Social welfare and greener public spaces", icon: "community" },
] satisfies { label: string; icon: TrustIconName }[];

export const Route = createFileRoute("/tree-protection")({
  head: () => ({
    meta: [
      { title: "Tree Care & Community Impact | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Tree plantation, sapling care, ongoing protection, community participation, and environmental work by Vriksh Rakshak Dal Sewa Trust in Vrindavan and nearby Braj areas.",
      },
      { property: "og:url", content: absoluteUrl("/tree-protection") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/tree-protection") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tree Care & Impact"
        title={<>Plantation begins the work; lasting care sustains its impact.</>}
        sub="The Trust brings tree planting, ongoing care, community participation, and environmental awareness together across Vrindavan and nearby Braj areas."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Coordinate tree care
          </Link>
          <a
            href="#impact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background"
          >
            Explore ongoing work
          </a>
        </div>
      </PageHero>
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="Tree Care"
            title="Care continues after planting day."
            sub="Healthy trees need consistent attention. The Trust’s work focuses on practical care and local stewardship."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map(({ title, desc, icon }) => (
              <article
                key={title}
                className="surface-card rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <span className="trust-icon-tile mb-4 grid size-12 place-items-center rounded-2xl text-[color:var(--forest)]">
                  <TrustIcon name={icon} className="size-7" />
                </span>
                <h3 className="text-lg font-semibold leading-6">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <ImpactCounter />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="Our Objectives"
            title="Conservation grows through local care."
            sub="The Trust’s objectives connect tree care with public awareness, community participation, and social welfare."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map(({ label, icon }) => (
              <li
                key={label}
                className="surface-card flex min-h-20 items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-semibold leading-6 text-foreground"
              >
                <span className="trust-icon-tile grid size-11 shrink-0 place-items-center rounded-xl text-[color:var(--forest)]">
                  <TrustIcon name={icon} className="size-6" />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <DonateCta />
    </>
  ),
});
