import { Link, createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { TRUST_EMAIL } from "../constants/site";

const supportWays = [
  {
    title: "Volunteer",
    desc: "Join plantation campaigns, awareness programs, and sapling care activities.",
  },
  {
    title: "Campaign Support",
    desc: "Support tree plantation, watering, protection, and maintenance efforts.",
  },
  {
    title: "Institutional Collaboration",
    desc: "Partner for school, temple, ashram, campus, or community green initiatives.",
  },
];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Support the Mission | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Support Vriksh Rakshak Dal Sewa Trust as a volunteer, donor, supporter, or campaign participant.",
      },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Mission"
        title={<>Become a volunteer, supporter, donor, or campaign participant.</>}
        sub="Contribute to tree plantation, tree protection, environmental awareness, and a greener Braj region."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="divide-y divide-border border-y border-border">
            {supportWays.map((item) => (
              <article key={item.title} className="grid gap-3 py-6 md:grid-cols-[260px_1fr]">
                <h2 className="font-display text-2xl font-semibold">{item.title}</h2>
                <p className="leading-7 text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-[color:var(--forest)] p-8 text-primary-foreground shadow-lift sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  One Tree. One Life. One Green Future.
                </h2>
                <p className="mt-3 max-w-2xl text-white/82">
                  For donor and campaign support details, please contact the Trust directly.
                </p>
              </div>
              <a
                href={`mailto:${TRUST_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" aria-hidden="true" />
                {TRUST_EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-accent"
            >
              Register as a volunteer
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
