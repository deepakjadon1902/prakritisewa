import { motion } from "motion/react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";

const steps = [
  { n: "01", title: "Receive Information", desc: "A citizen, builder, or local official reports a tree at risk." },
  { n: "02", title: "Visit Location", desc: "Our arborists visit within 48 hours, assess urgency and site conditions." },
  { n: "03", title: "Inspect Tree", desc: "We check species, age, canopy health, root structure and soil." },
  { n: "04", title: "Safely Relocate", desc: "Root ball preserved, transported and re-planted at a chosen safe site." },
  { n: "05", title: "Care", desc: "Watering, mulching, staking and pruning through the critical first years." },
  { n: "06", title: "Monitoring", desc: "Growth tracked for 3+ years to make sure the tree is truly thriving." },
];

export function Process() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our Process"
          title="Six careful steps — because trees don't get second chances."
          sub="Rescue is only the beginning. Real success is measured years later, in shade and songbirds."
        />
        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="font-display text-5xl font-semibold text-[color:var(--leaf)]/40">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
