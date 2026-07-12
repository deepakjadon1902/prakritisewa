import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Green Earth Mission" },
      { name: "description", content: "How Green Earth Mission collects, uses, and protects your personal information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title={<>Privacy Policy</>} sub="Last updated: May 2026" />
      <section className="py-16">
        <Container size="sm">
          <article className="prose prose-neutral max-w-none space-y-6 text-foreground/85">
            <p>
              This page is maintained by Green Earth Mission to explain how we collect, use,
              and safeguard your personal information when you interact with our website,
              donate, or sign up to volunteer.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Information we collect</h2>
            <p>
              Contact details you voluntarily provide (name, email, phone, city), donation
              records processed by our payment partner, and basic analytics such as pages
              visited and device type — used only to improve the website.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">How we use it</h2>
            <p>
              To respond to your inquiries, invite you to plantation drives near you, issue
              donation receipts, and share occasional updates on our work. We never sell or rent
              your information.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Your rights</h2>
            <p>
              You can request access, correction or deletion of your data at any time by writing
              to <a className="text-[color:var(--forest)] underline" href="mailto:hello@greenearthmission.org">hello@greenearthmission.org</a>.
            </p>
          </article>
        </Container>
      </section>
    </>
  ),
});
