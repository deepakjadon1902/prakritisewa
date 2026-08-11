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
      <PageHero eyebrow="Legal" title={<>Terms & Conditions</>} sub="Last updated: July 2026" />
      <section className="py-16">
        <Container size="sm">
          <article className="space-y-6 text-foreground/85">
            <p>
              By using this website you agree to these terms. {SITE_NAME} is a Public Charitable
              Trust. Content on this site is provided for information and public awareness.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Participation</h2>
            <p>
              Volunteers and campaign participants are expected to follow safety guidance, local
              permissions, and instructions shared by authorized Trust representatives.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Support</h2>
            <p>
              Support for the Trust is voluntary. Donor or campaign-specific details should be
              confirmed directly with the Trust before transfer or participation.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Intellectual property
            </h2>
            <p>
              Text, images, and design elements are © {SITE_NAME} unless credited otherwise. You may
              share content for non-commercial awareness with credit.
            </p>
          </article>
        </Container>
      </section>
    </>
  ),
});
