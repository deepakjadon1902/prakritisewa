import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Heart, Leaf, Sprout, Truck } from "lucide-react";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";

type DonationSearch = {
  amount?: number;
};

export const Route = createFileRoute("/donation-confirmation")({
  validateSearch: (search: Record<string, unknown>): DonationSearch => ({
    amount: Number(search.amount) || 500,
  }),
  head: () => ({
    meta: [
      { title: "Donation Impact Summary | Prakriti Sewa" },
      {
        name: "description",
        content:
          "Review the estimated impact of your Prakriti Sewa donation for tree rescue, plantation, relocation, and care.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: absoluteUrl("/donation-confirmation") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/donation-confirmation") }],
  }),
  component: DonationConfirmationPage,
});

function getImpact(amount: number) {
  return {
    visits: Math.max(1, Math.floor(amount / 500)),
    saplings: Math.max(1, Math.floor(amount / 250)),
    careMonths: Math.max(1, Math.floor(amount / 300)),
    relocationSupport: amount >= 5000 ? Math.floor(amount / 5000) : 0,
  };
}

function DonationConfirmationPage() {
  const { amount = 500 } = Route.useSearch();
  const safeAmount = Math.max(100, Math.round(amount));
  const impact = getImpact(safeAmount);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 shadow-lift sm:p-12">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-8 text-[color:var(--forest)]" aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--forest)]">
              Donation summary
            </p>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Your ₹{safeAmount.toLocaleString("en-IN")} can protect living roots.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            This is an estimated impact summary before payment confirmation. Final field allocation
            depends on the most urgent rescue, relocation, plantation, or aftercare need.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ImpactCard icon={Truck} label="Rapid response visits" value={impact.visits} />
            <ImpactCard icon={Sprout} label="Native saplings supported" value={impact.saplings} />
            <ImpactCard icon={Leaf} label="Aftercare months funded" value={impact.careMonths} />
            <ImpactCard
              icon={Heart}
              label="Relocation support units"
              value={impact.relocationSupport}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
            >
              Change amount
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Confirm with our team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ImpactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Leaf;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-3xl border border-border bg-background p-5">
      <Icon className="size-5 text-[color:var(--forest)]" aria-hidden="true" />
      <p className="mt-4 font-display text-3xl font-semibold">{value.toLocaleString("en-IN")}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
