import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { SITE_NAME, TRUST_EMAIL } from "../constants/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${SITE_NAME}` },
      {
        name: "description",
        content: `How ${SITE_NAME} collects, uses, and protects your personal information.`,
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title={<>Privacy Policy</>} sub="Last updated: July 2026" />
      <section className="py-16">
        <Container size="sm">
          <article className="prose prose-neutral max-w-none space-y-6 text-foreground/85">
            <p>
              This page is maintained by {SITE_NAME} to explain how we collect, use, and safeguard
              personal information when you contact us, sign up to volunteer, or participate in
              campaigns.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Information we collect
            </h2>
            <p>
              Contact details you voluntarily provide, such as name, email, phone, city, volunteer
              preferences, and message details.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">How we use it</h2>
            <p>
              To respond to inquiries, coordinate plantation drives, invite volunteers, and share
              occasional updates about environmental and social welfare activities.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Your rights</h2>
            <p>
              You can request correction or deletion of your information by writing to{" "}
              <a className="text-[color:var(--forest)] underline" href={`mailto:${TRUST_EMAIL}`}>
                {TRUST_EMAIL}
              </a>
              .
            </p>
          </article>
        </Container>
      </section>
    </>
  ),
});
