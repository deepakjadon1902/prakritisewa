import { motion } from "motion/react";
import { HandHeart, Recycle, Sprout, Trees, Megaphone } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";

const items = [
  {
    icon: HandHeart,
    title: "Tree Rescue",
    desc: "We respond to reports of endangered trees threatened by construction, disease, or neglect — often within hours.",
  },
  {
    icon: Recycle,
    title: "Tree Relocation",
    desc: "Mature trees are carefully uprooted with intact root balls and given a new home where they can thrive.",
  },
  {
    icon: Sprout,
    title: "Tree Plantation",
    desc: "Native species, chosen for each region, planted with the community and monitored for years, not weeks.",
  },
  {
    icon: Trees,
    title: "Tree Care",
    desc: "Ongoing water, mulch, pruning and health checks. The first three years decide a tree's next century.",
  },
  {
    icon: Megaphone,
    title: "Community Awareness",
    desc: "School programs, city walks, and workshops that reconnect people with the trees in their own neighborhoods.",
  },
];

export function OurWork() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our Work"
          title="Five kinds of care, one shared canopy."
          sub="From emergency rescue to long-term stewardship — this is how we show up for trees, every single day."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[color:var(--leaf)]/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="grid size-12 place-items-center rounded-2xl gradient-forest text-primary-foreground shadow-soft">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
