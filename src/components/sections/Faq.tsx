import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { faqs } from "../../data/faq";

export function Faq({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-28">
      <Container size="sm">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions people ask us the most."
          sub="Can't find your answer? Write to us — we reply within two working days."
        />
        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <Plus
                    className={`size-5 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
