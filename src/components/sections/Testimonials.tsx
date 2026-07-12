import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";

const quotes = [
  {
    quote:
      "They saved a 90-year-old peepal tree that had watched my grandmother grow up. Watching it come back to life was the most emotional day of my year.",
    name: "Ananya Mehta",
    role: "Resident, Pune",
  },
  {
    quote:
      "I joined as a weekend volunteer. Six months in, I know the name of every species on my street. This movement changes how you see your city.",
    name: "Rahul Verma",
    role: "Volunteer, Delhi",
  },
  {
    quote:
      "Their process is scientific and their heart is enormous. Rare combination. I recommend every corporate to fund even one relocation.",
    name: "Dr. Kavita Rao",
    role: "Environmentalist",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Voices"
          title="What our community says."
          sub="Citizens, volunteers, and environmentalists — all rooting for the same thing."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="size-6 text-[color:var(--leaf)]" aria-hidden="true" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/85">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{q.name}</p>
                <p className="text-sm text-muted-foreground">{q.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
