import { type ReactNode } from "react";
import { motion } from "motion/react";
import { Container } from "../layout/Container";

export function PageHero({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/50 pt-16 pb-20 sm:pt-24 sm:pb-24">
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[color:var(--leaf)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-[color:var(--sun)]/20 blur-3xl" />
      <Container className="relative">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--forest)]"
          >
            <span className="size-1.5 rounded-full bg-[color:var(--leaf)]" />
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            {sub}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
