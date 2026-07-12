import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { TreeDeciduous, Sprout, Users, MapPin, Recycle, CalendarDays } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "../../context/language";

const stats = [
  { icon: TreeDeciduous, value: 1_248_000, suffix: "+", label: "Trees Planted" },
  { icon: Recycle, value: 38_420, suffix: "+", label: "Trees Relocated" },
  { icon: Sprout, value: 92_540, suffix: "+", label: "Trees Saved" },
  { icon: Users, value: 24_180, suffix: "+", label: "Volunteers" },
  { icon: MapPin, value: 146, suffix: "", label: "Cities Covered" },
  { icon: CalendarDays, value: 12, suffix: "", label: "Years of Service" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.8, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, mv, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function ImpactCounter() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-[color:var(--forest)] py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-[color:var(--leaf)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-96 rounded-full bg-[color:var(--sun)]/15 blur-3xl" />
      <Container>
        <SectionHeader
          eyebrow="Our Impact"
          title={<span className="text-white">{t("counter_title")}</span>}
          sub={<span className="text-white/80">{t("counter_sub")}</span>}
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform hover:-translate-y-1 hover:bg-white/10"
            >
              <Icon className="size-6 text-[color:var(--sun)]" aria-hidden="true" />
              <p className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                <Counter value={value} />
                {suffix}
              </p>
              <p className="mt-1 text-sm text-white/70">{label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
