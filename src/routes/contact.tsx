import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2, Facebook, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import {
  FACEBOOK_PROFILE,
  SITE_HINDI_NAME,
  SITE_NAME,
  TRUST_EMAIL,
  TRUST_LOCATION,
  TRUST_PHONE,
  TRUST_PHONE_E164,
} from "../constants/site";
import { openTrustWhatsApp } from "../lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Contact Vriksh Rakshak Dal Sewa Trust in Vrindavan, Mathura for tree plantation, volunteering, public awareness, and green collaborations.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [ok, setOk] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const data = parsed.data;
    openTrustWhatsApp([
      "Contact Request - Vriksh Rakshak Dal Sewa Trust",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Subject: ${data.subject}`,
      "",
      `Message: ${data.message}`,
    ]);
    setOk(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Connect with {SITE_NAME}.</>}
        sub="For volunteering, partnerships, tree plantation campaigns, awareness programs, and community green initiatives."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="divide-y divide-border border-y border-border">
                <InfoRow icon={UserRound} title="Contact Person" value="Ganesh Baghel" />
                <InfoRow
                  icon={Mail}
                  title="Email"
                  value={TRUST_EMAIL}
                  href={`mailto:${TRUST_EMAIL}`}
                />
                <InfoRow
                  icon={Phone}
                  title="Help Number"
                  value={TRUST_PHONE}
                  href={`tel:+${TRUST_PHONE_E164}`}
                />
                <InfoRow
                  icon={Phone}
                  title="WhatsApp"
                  value={TRUST_PHONE}
                  href={`https://wa.me/${TRUST_PHONE_E164}`}
                />
                <InfoRow icon={MapPin} title="Location" value={TRUST_LOCATION} />
                <InfoRow
                  icon={Facebook}
                  title="Facebook Profile"
                  value={FACEBOOK_PROFILE}
                  href={FACEBOOK_PROFILE}
                />
                <InfoRow
                  icon={Facebook}
                  title="Facebook Page"
                  value={`${SITE_HINDI_NAME} | Page ID: 802366332949560`}
                />
              </div>

              <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card shadow-soft">
                <div className="aspect-[16/10] w-full bg-secondary">
                  <iframe
                    title="Vriksh Rakshak Dal Sewa Trust location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.64%2C27.54%2C77.78%2C27.62&layer=mapnik"
                    className="size-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-lift sm:p-10">
              {ok ? (
                <div className="py-16 text-center">
                  <CheckCircle2
                    className="mx-auto size-12 text-[color:var(--leaf)]"
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 font-display text-2xl font-semibold">Message received.</h2>
                  <p className="mt-2 text-muted-foreground">
                    WhatsApp has opened with your message details. Please send the message there to
                    complete your request.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOk(false)}
                    className="mt-6 inline-flex rounded-full border border-border px-4 py-2 text-sm font-semibold"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <TextField name="name" label="Name" error={errors.name} required />
                  <TextField
                    name="email"
                    type="email"
                    label="Email"
                    error={errors.email}
                    required
                  />
                  <TextField name="phone" type="tel" label="Phone" error={errors.phone} required />
                  <TextField name="subject" label="Subject" error={errors.subject} required />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      maxLength={1000}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="grid gap-3 py-5 sm:grid-cols-[44px_150px_1fr] sm:items-start">
      <div className="grid size-10 place-items-center rounded-md bg-secondary text-[color:var(--forest)]">
        <Icon className="size-5" aria-hidden={true} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      {href ? (
        <a href={href} className="break-words font-medium hover:underline">
          {value}
        </a>
      ) : (
        <p className="break-words font-medium">{value}</p>
      )}
    </div>
  );
}

function TextField({
  name,
  label,
  type = "text",
  error,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
