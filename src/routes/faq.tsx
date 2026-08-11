import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Faq } from "../components/sections/Faq";
import { SITE_NAME, absoluteUrl } from "../constants/site";
import { faqs } from "../data/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQs | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Answers to common questions about Vriksh Rakshak Dal Sewa Trust, volunteering, legal documents, and tree protection work.",
      },
      { property: "og:url", content: absoluteUrl("/faq") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/faq") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="FAQs"
        title={<>Common questions, clear answers.</>}
        sub="For anything else, contact the Trust directly."
      />
      <Faq />
    </>
  ),
});
