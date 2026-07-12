import { motion } from "motion/react";
import { type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]"
        >
          <span className="size-1.5 rounded-full bg-[color:var(--leaf)]" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg"
        >
          {sub}
        </motion.p>
      )}
      {children}
    </div>
  );
}
