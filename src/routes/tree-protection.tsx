import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { DonateCta } from "../components/sections/CtaBanners";
import { absoluteUrl } from "../constants/site";

const pillars = [
  {
    title: "Safeguarding Saplings",
    desc: "Protection support so newly planted trees can survive beyond the campaign day.",
  },
  {
    title: "Watering & Care",
    desc: "Regular care, maintenance, and monitoring for planted saplings.",
  },
  {
    title: "Community Monitoring",
    desc: "Local volunteers and citizens help watch over green spaces and report needs.",
  },
  {
    title: "Public Awareness",
    desc: "Outreach activities that encourage citizens, students, and institutions to protect trees.",
  },
];

export const Route = createFileRoute("/tree-protection")({
  head: () => ({
    meta: [
      { title: "Tree Protection & Care | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Tree protection, sapling care, watering, monitoring, and public awareness by Vriksh Rakshak Dal Sewa Trust.",
      },
      { property: "og:url", content: absoluteUrl("/tree-protection") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/tree-protection") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tree Protection"
        title={<>Plantation succeeds when trees are protected.</>}
        sub="The Trust focuses on monitoring, watering, protection, and maintenance of planted saplings."
      />
      <section className="py-24">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="How we protect"
            title="Long-term care after plantation."
          />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {pillars.map(({ title, desc }) => (
              <article key={title} className="grid gap-2 py-6 md:grid-cols-[260px_1fr]">
                <h3 className="text-lg font-semibold leading-6">{title}</h3>
                <p className="leading-7 text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Contact for tree protection work
            </Link>
          </div>
        </Container>
      </section>
      <DonateCta />
    </>
  ),
});
