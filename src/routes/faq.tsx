import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Faq } from "../components/sections/Faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Green Earth Mission" },
      { name: "description", content: "Answers to the most common questions about our tree rescues, relocations, donations, and volunteer program." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How can I report a tree that's in danger?", acceptedAnswer: { "@type": "Answer", text: "Use the Contact page or WhatsApp us with the location and a photo. We visit within 48 hours." } },
            { "@type": "Question", name: "Is my donation tax-deductible?", acceptedAnswer: { "@type": "Answer", text: "Yes. All donations are eligible for 80G tax exemption under Indian tax law." } },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="FAQs" title={<>Everything you'd like to ask.</>} sub="If we've missed something, drop us a line — we reply within two working days." />
      <Faq />
    </>
  ),
});
