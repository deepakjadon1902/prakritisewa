import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  city: z.string().trim().min(2).max(80),
  occupation: z.string().trim().max(80).optional().or(z.literal("")),
  availability: z.string().min(1, "Pick your availability"),
  experience: z.string().max(500).optional().or(z.literal("")),
  why: z.string().trim().min(10, "Tell us a little more").max(500),
});

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Become a Volunteer | Prakriti Sewa" },
      {
        name: "description",
        content:
          "Join a chapter near you. Plantation drives, awareness walks, tree audits, weekend caretaking — pick what fits your life.",
      },
      { property: "og:url", content: "/volunteer" },
    ],
    links: [{ rel: "canonical", href: "/volunteer" }],
  }),
  component: VolunteerPage,
});

function VolunteerPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title={<>Give one Sunday. Change a neighborhood.</>}
        sub="We'll train you, feed you, and thank you. No experience needed — just willingness and comfortable shoes."
      />
      <section className="py-16 sm:py-24">
        <Container size="sm">
          {submitted ? (
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
              <CheckCircle2
                className="mx-auto size-12 text-[color:var(--leaf)]"
                aria-hidden="true"
              />
              <h2 className="mt-4 font-display text-2xl font-semibold">Welcome to the movement.</h2>
              <p className="mt-2 text-muted-foreground">
                Your local chapter lead will reach out within 2 working days. Meanwhile, follow us
                on social for the next drive near you.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex rounded-full border border-border px-4 py-2 text-sm font-semibold"
              >
                Register another
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" error={errors.name} required />
                <Field label="Email" name="email" type="email" error={errors.email} required />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} required />
                <Field label="City" name="city" error={errors.city} required />
                <Field label="Occupation" name="occupation" error={errors.occupation} />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold" htmlFor="availability">
                    Availability <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="weekends">Weekends</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="anytime">Anytime</option>
                    <option value="events">Only large events</option>
                  </select>
                  {errors.availability && (
                    <p className="mt-1 text-xs text-destructive">{errors.availability}</p>
                  )}
                </div>
              </div>
              <Field
                label="Prior experience (optional)"
                name="experience"
                as="textarea"
                error={errors.experience}
              />
              <Field
                label="Why do you want to join?"
                name="why"
                as="textarea"
                error={errors.why}
                required
              />
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Submit application
              </button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  as?: "textarea";
}) {
  const cls =
    "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40";
  return (
    <div className={as === "textarea" ? "sm:col-span-2 mt-5" : ""}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} rows={4} maxLength={500} className={cls} />
      ) : (
        <input id={name} name={name} type={type} maxLength={255} className={cls} />
      )}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
