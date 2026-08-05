import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  HeartHandshake,
  IndianRupee,
  Mail,
  MessageCircle,
  Phone,
  QrCode,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import {
  SITE_NAME,
  TRUST_EMAIL,
  TRUST_PHONE,
  TRUST_PHONE_E164,
  absoluteUrl,
} from "../constants/site";

const supportWays = [
  {
    title: "Tree plantation",
    desc: "Help arrange saplings, soil preparation, transport, and community plantation drives.",
  },
  {
    title: "Tree protection",
    desc: "Support guards, watering, mulching, rescue, relocation, and long-term tree care.",
  },
  {
    title: "Awareness campaigns",
    desc: "Enable school, temple, ashram, campus, and community green initiatives.",
  },
];

const donationAmounts = [
  { amount: "₹501", label: "Sapling care", desc: "Support watering and early-stage maintenance." },
  {
    amount: "₹1,100",
    label: "Plantation drive",
    desc: "Contribute toward saplings and campaign logistics.",
  },
  { amount: "₹5,100", label: "Tree protection", desc: "Help protect and monitor existing trees." },
];

const donationMessage = [
  `Donation Support - ${SITE_NAME}`,
  "",
  "I want to support the Trust's tree plantation and protection work.",
  "Please share official donation/payment details.",
].join("\n");

const donationChatUrl = `https://wa.me/${TRUST_PHONE_E164}?text=${encodeURIComponent(
  donationMessage,
)}`;
const donationQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=18&data=${encodeURIComponent(
  donationChatUrl,
)}`;

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: `Donate & Support | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Donate, volunteer, or support Vriksh Rakshak Dal Sewa Trust's tree plantation, tree protection, and environmental awareness campaigns.",
      },
      { property: "og:url", content: absoluteUrl("/donate") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/donate") }],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate & Support"
        title={<>Support tree plantation, protection, and a greener Braj region.</>}
        sub="Your contribution helps the Trust plant, protect, water, and care for trees while building public participation for nature."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-secondary text-[color:var(--forest)]">
                    <HeartHandshake className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
                      Donation desk
                    </p>
                    <h2 className="font-display text-2xl font-semibold">
                      Give directly to the Trust.
                    </h2>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Scan the QR code or use the buttons below to request verified donation details
                  from {SITE_NAME}. Please confirm official payment details before transferring any
                  amount.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <a
                    href={donationChatUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Ask on WhatsApp
                  </a>
                  <a
                    href={`mailto:${TRUST_EMAIL}?subject=${encodeURIComponent(
                      `Donation support for ${SITE_NAME}`,
                    )}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Email donation desk
                  </a>
                </div>

                <div className="mt-6 grid gap-3 rounded-lg bg-secondary p-4 text-sm sm:grid-cols-2">
                  <a
                    href={`tel:+${TRUST_PHONE_E164}`}
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Phone className="size-4 text-[color:var(--forest)]" aria-hidden="true" />
                    {TRUST_PHONE}
                  </a>
                  <a
                    href={`mailto:${TRUST_EMAIL}`}
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Mail className="size-4 text-[color:var(--forest)]" aria-hidden="true" />
                    {TRUST_EMAIL}
                  </a>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {donationAmounts.map((item) => (
                  <article
                    key={item.amount}
                    className="rounded-lg border border-border bg-card p-5 shadow-soft"
                  >
                    <div className="flex items-center gap-2 text-[color:var(--forest)]">
                      <IndianRupee className="size-4" aria-hidden="true" />
                      <p className="font-display text-2xl font-semibold">
                        {item.amount.replace("₹", "")}
                      </p>
                    </div>
                    <h3 className="mt-3 font-semibold">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 text-center shadow-lift sm:p-8">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-secondary text-[color:var(--forest)]">
                <QrCode className="size-7" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold">
                Scan QR for donation support
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Opens a pre-filled WhatsApp message to request official payment details.
              </p>
              <div className="mx-auto mt-6 max-w-[280px] rounded-xl border border-border bg-white p-4 shadow-soft">
                <img
                  src={donationQrUrl}
                  alt="QR code to contact Vriksh Rakshak Dal Sewa Trust for donation support"
                  width={280}
                  height={280}
                  loading="lazy"
                  className="aspect-square w-full rounded-lg"
                />
              </div>
              <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
                Official UPI or bank QR can be added here once the Trust shares verified payment
                details.
              </p>
            </aside>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
                Where support goes
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Every contribution has field value.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Donations support practical work: planting trees, protecting existing trees, and
                mobilising citizens for environmental conservation.
              </p>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {supportWays.map((item) => (
                <article key={item.title} className="grid gap-3 py-6 md:grid-cols-[230px_1fr]">
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="leading-7 text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-[color:var(--forest)] p-8 text-primary-foreground shadow-lift sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-white/80">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                  <span className="text-sm font-semibold">Safe donation process</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold">
                  Confirm details, donate, then share confirmation.
                </h2>
                <p className="mt-3 max-w-2xl text-white/82">
                  After donation, send the transaction screenshot/details to the Trust so the team
                  can acknowledge your support and share campaign updates.
                </p>
              </div>
              <Link
                to="/donation-confirmation"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Donation confirmation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-accent"
            >
              <Sprout className="mr-2 size-4" aria-hidden="true" />
              Register as a volunteer
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
