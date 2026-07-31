import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { ImpactCounter } from "../components/sections/ImpactCounter";
import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/ui/SectionHeader";

const objectives = [
  "Tree Plantation",
  "Tree Protection",
  "Environmental Conservation",
  "Nature Conservation",
  "Public Awareness",
  "Social Welfare Activities",
  "Promotion of Green Environment",
];

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Vriksh Rakshak Dal Sewa Trust conducts ongoing tree plantation and conservation activities across Vrindavan and nearby areas.",
      },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title={<>Focused on survival, not numbers alone.</>}
        sub="The Trust continuously conducts tree plantation and conservation activities across Vrindavan and nearby Braj areas."
      />
      <ImpactCounter />
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="Main Objectives"
            title="Green expansion through public participation."
            sub="Verified plantation statistics can be added when official records are available."
          />
          <ul className="mt-10 grid gap-x-10 gap-y-4 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-foreground">
                <span className="mt-3 h-px w-6 shrink-0 bg-[color:var(--forest)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
