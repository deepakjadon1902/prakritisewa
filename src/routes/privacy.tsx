import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { SITE_NAME, TRUST_EMAIL, absoluteUrl } from "../constants/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${SITE_NAME}` },
      {
        name: "description",
        content: `How ${SITE_NAME} collects, uses, and protects your personal information.`,
      },
      { property: "og:url", content: absoluteUrl("/privacy") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title={<>Privacy Policy</>} sub="Last updated: October 2026" />
      <section className="py-16">
        <Container size="sm">
          <article className="prose prose-neutral max-w-none space-y-6 text-foreground/85">
            <p>
              This notice explains how {SITE_NAME} handles information you choose to enter in the
              website contact and volunteer forms.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Form details</h2>
            <p>
              Depending on your request, a form may ask for your name, email address, phone number,
              city, availability, area of interest, and message. Provide only the details needed to
              contact you.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              How form messages are sent
            </h2>
            <p>
              Submitting a form opens WhatsApp with a message prepared from the details you entered.
              This website does not send that message automatically; the details are shared with the
              Trust only if you choose to send it in WhatsApp. WhatsApp handles information under
              its own privacy practices.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Contact the Trust
            </h2>
            <p>
              To ask about a message you sent, or request correction or removal of details the Trust
              received, write to{" "}
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
