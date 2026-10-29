import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { SITE_NAME, absoluteUrl } from "../constants/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions | ${SITE_NAME}` },
      {
        name: "description",
        content: `Terms governing use of the ${SITE_NAME} website and volunteer participation.`,
      },
      { property: "og:url", content: absoluteUrl("/terms") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title={<>Terms & Conditions</>} sub="Last updated: October 2026" />
      <section className="py-16">
        <Container size="sm">
          <article className="space-y-6 text-foreground/85">
            <p>
              By accessing or using this website, you agree to these terms. {SITE_NAME} is a Public
              Charitable Trust. Website content is provided for general information and public
              awareness and may be updated.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Participation</h2>
            <p>
              Volunteers and campaign participants must follow applicable safety guidance, obtain
              any required local permissions, and follow instructions shared by authorized Trust
              representatives.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Support</h2>
            <p>
              Donations and other support are voluntary. Please confirm current payment details
              directly with the Trust before making a transfer. Activity-specific requirements may
              apply to participation.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Intellectual property
            </h2>
            <p>
              Content may be protected by copyright or other rights. Follow any source credit or
              licence shown with the material. If no licence is stated, request permission from the
              relevant rights holder before reproducing it, especially for commercial use.
            </p>
          </article>
        </Container>
      </section>
    </>
  ),
});
