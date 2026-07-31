import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";

const points = [
  "Dedicated environmental organization",
  "Local community-based work",
  "Focus on long-term tree survival",
  "Transparent charitable activities",
  "Volunteer-driven green initiatives",
  "Legally established Public Charitable Trust",
];

export function Testimonials() {
  return (
    <section className="bg-secondary/45 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Why Choose Us"
            title="A legally established trust with a practical green mission."
            sub="The work is local, transparent, and focused on protecting trees after plantation."
          />
          <ul className="divide-y divide-border border-y border-border">
            {points.map((point) => (
              <li key={point} className="flex gap-4 py-5 text-base font-semibold leading-7">
                <span className="mt-3 h-px w-8 shrink-0 bg-[color:var(--forest)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
