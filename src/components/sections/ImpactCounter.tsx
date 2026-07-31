import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { useLanguage } from "../../context/language";

const impactRows = [
  {
    area: "Tree plantation",
    status: "Ongoing",
    detail: "Plantation drives continue across public and community spaces.",
  },
  {
    area: "Tree protection",
    status: "Active",
    detail: "Saplings are monitored, watered, and protected after planting.",
  },
  {
    area: "Primary region",
    status: "Vrindavan",
    detail: "Work is focused in Mathura, Vrindavan, and nearby Braj areas.",
  },
  {
    area: "Public participation",
    status: "Community led",
    detail: "Citizens, students, institutions, and volunteers are encouraged to participate.",
  },
];

export function ImpactCounter() {
  const { t } = useLanguage();

  return (
    <section className="bg-[color:var(--forest)] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Our Impact"
            title={<span className="text-white">{t("counter_title")}</span>}
            sub={<span className="text-white/78">{t("counter_sub")}</span>}
          />

          <div className="divide-y divide-white/12 border-y border-white/12">
            {impactRows.map((row) => (
              <div
                key={row.area}
                className="grid gap-3 py-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/58">
                  {row.area}
                </p>
                <div className="min-w-0">
                  <p className="max-w-full text-wrap font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {row.status}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/72">{row.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 border-l-2 border-[color:var(--sun)] pl-4 text-sm text-white/72">
          Verified plantation statistics can be added when official records are available.
        </p>
      </Container>
    </section>
  );
}
