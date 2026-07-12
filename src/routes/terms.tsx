import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Prakriti Sewa" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Prakriti Sewa website, donations, and volunteer participation.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title={<>Terms & Conditions</>} sub="Last updated: May 2026" />
      <section className="py-16">
        <Container size="sm">
          <article className="space-y-6 text-foreground/85">
            <p>
              By using this website you agree to these terms. Prakriti Sewa is a not-for-profit
              citizen movement. Content on this site is provided for information and awareness;
              individual results in the field vary based on site, species, and seasonal conditions.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Donations</h2>
            <p>
              All donations are voluntary and non-refundable except in cases of duplicate
              transactions or clear payment errors. Receipts eligible for 80G tax exemption are
              issued by email.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">Volunteering</h2>
            <p>
              Volunteers participate at their own risk and are expected to follow safety guidance
              shared by chapter leads. Photographs taken during activities may be used for outreach
              unless you request otherwise.
            </p>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Intellectual property
            </h2>
            <p>
              All text, images, and design elements are © Prakriti Sewa unless credited otherwise.
              You are welcome to share for non-commercial purposes with credit.
            </p>
          </article>
        </Container>
      </section>
    </>
  ),
});
