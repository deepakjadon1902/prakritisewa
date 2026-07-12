import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Prakriti Sewa" },
      {
        name: "description",
        content:
          "Report an endangered tree, ask a question, or partner with us. We reply within two working days.",
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
    setOk(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to hear from you.</>}
        sub="Report a tree, propose a partnership, or just say hi. All messages read by a real human."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <InfoCard icon={Mail} title="Email" value="hello@greenearthmission.org" />
              <InfoCard icon={Phone} title="Phone" value="+91 98765 43210" />
              <InfoCard
                icon={MapPin}
                title="Address"
                value="12 Green Lane, Sector 5, Pune 411001, India"
              />
              <InfoCard icon={Clock} title="Hours" value="Mon–Sat · 9:30 AM – 6:30 PM IST" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <div className="aspect-[16/10] w-full bg-secondary">
                  <iframe
                    title="Prakriti Sewa location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=73.83%2C18.51%2C73.87%2C18.55&layer=mapnik"
                    className="size-full border-0"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-lift sm:p-10">
              {ok ? (
                <div className="py-16 text-center">
                  <CheckCircle2
                    className="mx-auto size-12 text-[color:var(--leaf)]"
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 font-display text-2xl font-semibold">Message received.</h2>
                  <p className="mt-2 text-muted-foreground">We'll get back to you shortly.</p>
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
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
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

function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="grid size-10 place-items-center rounded-xl bg-secondary text-[color:var(--forest)]">
        <Icon className="size-5" aria-hidden={true} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {title}
        </p>
        <p className="mt-0.5 font-medium">{value}</p>
      </div>
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
        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
