import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Landmark, Smartphone, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";

const amounts = [500, 1500, 5000, 15000];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to Save Trees | Prakriti Sewa" },
      {
        name: "description",
        content:
          "Support Prakriti Sewa tree rescue, relocation, plantation, and transparent long-term tree care work across India.",
      },
      { property: "og:url", content: absoluteUrl("/donate") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/donate") }],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [amount, setAmount] = useState<number>(1500);
  const safeAmount = Math.max(100, Math.round(amount || 100));

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Every rupee becomes a root.</>}
        sub="₹500 supports a rapid response visit. ₹5,000 can plant and protect a native sapling cluster. 100% transparent field-first giving."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-border bg-card p-8 shadow-lift sm:p-10"
            >
              <h2 className="font-display text-2xl font-semibold">Choose an amount</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {amounts.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAmount(a)}
                    className={`rounded-2xl border px-4 py-4 text-lg font-semibold transition ${
                      amount === a
                        ? "border-[color:var(--forest)] bg-[color:var(--forest)] text-primary-foreground shadow-soft"
                        : "border-border bg-background hover:bg-accent"
                    }`}
                  >
                    ₹{a.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
              <label className="mt-6 block text-sm font-semibold" htmlFor="amt">
                Or enter a custom amount
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-input bg-background px-4 py-2.5">
                <span className="text-muted-foreground">₹</span>
                <input
                  id="amt"
                  type="number"
                  min={100}
                  max={10000000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full bg-transparent text-sm focus:outline-none"
                />
              </div>
              <p className="mt-6 rounded-2xl bg-secondary p-4 text-sm text-[color:var(--forest)]">
                <b>Your ₹{safeAmount.toLocaleString("en-IN")}</b> can{" "}
                {safeAmount >= 5000
                  ? "plant and protect a native sapling cluster"
                  : safeAmount >= 1500
                    ? "care for a rescued tree for a season"
                    : "fund one rapid-response field visit"}
                .
              </p>

              <Link
                to="/donation-confirmation"
                search={{ amount: safeAmount }}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-sun px-6 py-3 text-base font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Heart className="size-5" aria-hidden="true" />
                Continue with ₹{safeAmount.toLocaleString("en-IN")}
              </Link>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Online payment gateway placeholder. UPI and bank details are available for direct
                support.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Smartphone className="size-5 text-[color:var(--forest)]" aria-hidden="true" />
                  <h3 className="font-semibold">UPI</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <b>prakritisewa@upi</b>
                </p>
                <div className="mt-4 grid size-40 place-items-center rounded-2xl bg-secondary text-xs text-muted-foreground">
                  QR code placeholder
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Landmark className="size-5 text-[color:var(--forest)]" aria-hidden="true" />
                  <h3 className="font-semibold">Bank Transfer</h3>
                </div>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  <dt className="text-muted-foreground">Account</dt>
                  <dd>Prakriti Sewa</dd>
                  <dt className="text-muted-foreground">A/c No.</dt>
                  <dd>1234 5678 9012 3456</dd>
                  <dt className="text-muted-foreground">IFSC</dt>
                  <dd>HDFC0001234</dd>
                  <dt className="text-muted-foreground">Type</dt>
                  <dd>Savings</dd>
                </dl>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-[color:var(--forest)]" aria-hidden="true" />
                  <h3 className="font-semibold">Transparent, always</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  78% field work · 15% monitoring · 7% administration. Impact reports are prepared
                  for donors and volunteers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] gradient-forest p-10 text-primary-foreground shadow-lift">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 size-6 text-[color:var(--sun)]" aria-hidden="true" />
              <div>
                <h3 className="font-display text-2xl font-semibold">Thank you.</h3>
                <p className="mt-2 max-w-2xl text-white/85">
                  You are not buying a service. You are keeping something alive for children, birds,
                  soil, water, and the future.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
