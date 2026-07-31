import { Link, createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Container } from "../components/layout/Container";
import { SITE_NAME, TRUST_EMAIL, absoluteUrl } from "../constants/site";

const summary = ["Tree Plantation", "Tree Protection & Care", "Public Participation"];

export const Route = createFileRoute("/donation-confirmation")({
  head: () => ({
    meta: [
      { title: `Support Confirmation | ${SITE_NAME}` },
      {
        name: "description",
        content: `Contact ${SITE_NAME} to confirm donor, supporter, and campaign participation details.`,
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: absoluteUrl("/donation-confirmation") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/donation-confirmation") }],
  }),
  component: DonationConfirmationPage,
});

function DonationConfirmationPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-8 shadow-lift sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
            Support summary
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Thank you for supporting tree protection.
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Please confirm campaign, donor, or volunteer participation details directly with the
            Trust before making any transfer or field commitment.
          </p>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {summary.map((label) => (
              <li key={label} className="flex gap-4 py-4 font-semibold">
                <span className="mt-3 h-px w-8 shrink-0 bg-[color:var(--forest)]" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
            >
              Support options
            </Link>
            <a
              href={`mailto:${TRUST_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email the Trust
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
