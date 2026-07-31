import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";

const steps = [
  {
    n: "01",
    title: "Identify Need",
    desc: "Select public places, schools, temples, ashrams, and community areas that need trees.",
  },
  {
    n: "02",
    title: "Plan Campaign",
    desc: "Coordinate with local citizens, volunteers, and institutions for permissions and support.",
  },
  {
    n: "03",
    title: "Plant Responsibly",
    desc: "Choose suitable saplings and plant them with proper spacing, soil preparation, and care.",
  },
  {
    n: "04",
    title: "Protect Saplings",
    desc: "Arrange watering, guards, monitoring, and maintenance so planted trees can survive.",
  },
  {
    n: "05",
    title: "Build Awareness",
    desc: "Conduct rallies, seminars, school programs, and outreach to involve more citizens.",
  },
  {
    n: "06",
    title: "Continue Care",
    desc: "Focus on survival and long-term protection, not plantation numbers alone.",
  },
];

export function Process() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Our Approach"
            title="Planting is the beginning. Protection is the mission."
            sub="The Trust works through careful local planning, public participation, and ongoing care after every campaign."
          />

          <ol className="border-y border-border">
            {steps.map((step) => (
              <li
                key={step.n}
                className="grid gap-4 border-b border-border py-5 last:border-b-0 sm:grid-cols-[76px_190px_1fr]"
              >
                <span className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                  {step.n}
                </span>
                <h3 className="font-semibold leading-6">{step.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
