import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";

const items = [
  {
    title: "Tree Plantation Campaigns",
    desc: "Plantation drives in public places, schools, temples, ashrams, and community areas.",
  },
  {
    title: "Tree Protection & Care",
    desc: "Regular monitoring, watering, protection, and maintenance of planted saplings.",
  },
  {
    title: "Environmental Awareness Programs",
    desc: "Awareness rallies, seminars, educational campaigns, and public outreach activities.",
  },
  {
    title: "Community Green Initiatives",
    desc: "Collaborative plantation and conservation programs with local communities and volunteers.",
  },
  {
    title: "School & Youth Participation",
    desc: "Encouraging students and youth to participate in environmental activities.",
  },
  {
    title: "Institutional & Religious Collaborations",
    desc: "Developing green campuses and environmentally responsible community spaces.",
  },
];

export function OurWork() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Our Services"
            title="Practical environmental work rooted in the community."
            sub="The Trust brings citizens, institutions, students, and volunteers together for tree plantation, protection, and public awareness."
          />

          <div className="divide-y divide-border border-y border-border">
            {items.map((item) => (
              <article key={item.title} className="grid gap-2 py-5 sm:grid-cols-[240px_1fr]">
                <h3 className="text-base font-semibold leading-6 text-foreground">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
