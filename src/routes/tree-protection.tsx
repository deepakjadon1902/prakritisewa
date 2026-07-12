import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, TriangleAlert, PhoneCall, ClipboardCheck } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { DonateCta } from "../components/sections/CtaBanners";

const pillars = [
  {
    icon: TriangleAlert,
    title: "Rapid Response",
    desc: "48-hour visits to any tree flagged as at-risk in our operating cities.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Advocacy",
    desc: "We help citizens challenge illegal felling and stop-work notices where needed.",
  },
  {
    icon: ClipboardCheck,
    title: "Health Audits",
    desc: "Free arborist audits for schools, campuses, and residential communities.",
  },
  {
    icon: PhoneCall,
    title: "24×7 Helpline",
    desc: "A citizen hotline that anyone can call to report an endangered tree.",
  },
];

export const Route = createFileRoute("/tree-protection")({
  head: () => ({
    meta: [
      { title: "Tree Protection & Rescue | Prakriti Sewa" },
      {
        name: "description",
        content:
          "How we protect India's endangered trees — rapid response, legal advocacy, health audits, and a citizen helpline.",
      },
      { property: "og:url", content: "/tree-protection" },
    ],
    links: [{ rel: "canonical", href: "/tree-protection" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Tree Protection"
        title={<>Standing between chainsaws and centuries of shade.</>}
        sub="Every year thousands of healthy trees are lost to construction, disease, and neglect. This is how we push back."
      />
      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="How we protect" title="Four pillars of protection." />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="grid size-12 place-items-center rounded-2xl gradient-forest text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Report a tree in danger
            </Link>
          </div>
        </Container>
      </section>
      <DonateCta />
    </>
  ),
});
