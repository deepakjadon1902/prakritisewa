import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { FlipWords } from "../ui/flip-words";
import { TrustIcon, type TrustIconName } from "../icons/TrustIcon";

const items: { title: string; desc: string; icon: TrustIconName }[] = [
  {
    title: "Tree Plantation Campaigns",
    desc: "Plantation drives in public places, schools, temples, ashrams, and community areas.",
    icon: "planting",
  },
  {
    title: "Tree Protection & Care",
    desc: "Regular monitoring, watering, protection, and maintenance of planted saplings.",
    icon: "protection",
  },
  {
    title: "Environmental Awareness Programs",
    desc: "Awareness rallies, seminars, educational campaigns, and public outreach activities.",
    icon: "awareness",
  },
  {
    title: "Community Green Initiatives",
    desc: "Collaborative plantation and conservation programs with local communities and volunteers.",
    icon: "community",
  },
  {
    title: "School & Youth Participation",
    desc: "Encouraging students and youth to participate in environmental activities.",
    icon: "youth",
  },
  {
    title: "Institutional & Religious Collaborations",
    desc: "Developing green campuses and environmentally responsible community spaces.",
    icon: "campus",
  },
];

export function OurWork() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
          <SectionHeader
            align="left"
            eyebrow="Our Services"
            title={
              <>
                Practical environmental work rooted in the{" "}
                <FlipWords
                  words={["community", "volunteers", "local people"]}
                  className="min-w-[12ch] font-semibold text-[color:var(--forest)]"
                />
                .
              </>
            }
            sub="The Trust brings citizens, institutions, students, and volunteers together for tree plantation, protection, and public awareness."
          />

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="surface-card group rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <span className="trust-icon-tile mb-4 grid size-12 place-items-center rounded-2xl text-[color:var(--forest)]">
                  <TrustIcon name={item.icon} className="size-7" />
                </span>
                <h3 className="text-base font-semibold leading-6 text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
