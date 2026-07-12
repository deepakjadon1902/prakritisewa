import { motion } from "motion/react";
import { Wind, CloudRain, Bird, Leaf, Thermometer, Baby } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import saplingImg from "../../assets/sapling-hands.jpg";

const benefits = [
  {
    icon: Wind,
    title: "Oxygen for life",
    desc: "One mature tree produces enough oxygen for two people every single day.",
  },
  {
    icon: Thermometer,
    title: "Cooler cities",
    desc: "A tree-lined street can be 4–8°C cooler than one lined with concrete.",
  },
  {
    icon: CloudRain,
    title: "More rain, less flood",
    desc: "Forests draw moisture inland and slow storm runoff in cities.",
  },
  {
    icon: Bird,
    title: "Wildlife homes",
    desc: "A single old tree can shelter hundreds of species — most of them invisible to us.",
  },
  {
    icon: Leaf,
    title: "Cleaner air",
    desc: "Leaves capture PM2.5 and toxins that would otherwise reach our lungs.",
  },
  {
    icon: Baby,
    title: "For our children",
    desc: "The trees we plant today will outlive us — and comfort a generation we'll never meet.",
  },
];

export function WhyTrees() {
  return (
    <section className="bg-secondary/50 py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] shadow-lift"
          >
            <img
              src={saplingImg}
              alt="A child's hands holding a young sapling in fresh soil"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-square size-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass p-4 text-sm shadow-soft">
              <p className="font-semibold text-foreground">A single sapling</p>
              <p className="text-muted-foreground">
                absorbs <b>21 kg of CO₂</b> a year once mature.
              </p>
            </div>
          </motion.div>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Trees Matter"
              title="Trees aren't decoration. They're infrastructure for life."
              sub="Every reason to protect them is also a reason to plant more."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="grid size-9 place-items-center rounded-xl bg-secondary text-[color:var(--forest)]">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
