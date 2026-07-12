import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Landmark, Smartphone, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";

const amounts = [500, 1500, 5000, 15000];

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to Save Trees | Green Earth Mission" },
      { name: "description", content: "Fund tree rescues, relocations, native saplings, and long-term care. 80G tax-exempt. 100% transparent. Every rupee reaches the field." },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [amount, setAmount] = useState<number>(1500);

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Every rupee becomes a root.</>}
        sub="₹500 saves an endangered tree. ₹5,000 plants a hundred saplings. 100% transparent. 80G tax-exempt."
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
                <b>Your ₹{amount.toLocaleString("en-IN")}</b> can{" "}
                {amount >= 5000 ? "plant a mini-forest" : amount >= 1500 ? "care for a rescued tree for a year" : "fund one rapid-response visit"}.
              </p>

              <button
                type="button"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-sun px-6 py-3 text-base font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Heart className="size-5" aria-hidden="true" />
                Donate ₹{amount.toLocaleString("en-IN")}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Secure payments processed by our partner gateway. Receipt within minutes.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Smartphone className="size-5 text-[color:var(--forest)]" aria-hidden="true" />
                  <h3 className="font-semibold">UPI</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <b>greenearth@upi</b>
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
                  <dt className="text-muted-foreground">Account</dt><dd>Green Earth Mission</dd>
                  <dt className="text-muted-foreground">A/c No.</dt><dd>1234 5678 9012 3456</dd>
                  <dt className="text-muted-foreground">IFSC</dt><dd>HDFC0001234</dd>
                  <dt className="text-muted-foreground">Type</dt><dd>Savings</dd>
                </dl>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-[color:var(--forest)]" aria-hidden="true" />
                  <h3 className="font-semibold">Transparent, always</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  78% field ops · 15% monitoring · 7% administration. Audited annual reports
                  published every June.
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
                  You aren't buying a service — you're keeping something alive. We will send you
                  photos and updates from the field for every ₹5,000 donated.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
