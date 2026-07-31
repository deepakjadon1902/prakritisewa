import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { MissionOverview } from "../components/sections/MissionOverview";
import { WhyTrees } from "../components/sections/WhyTrees";
import { Process } from "../components/sections/Process";
import { DonateCta } from "../components/sections/CtaBanners";
import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { SITE_HINDI_NAME, TRUST_PAN } from "../constants/site";

const mission = [
  "To protect nature through tree plantation and conservation.",
  "To nurture and safeguard planted trees.",
  "To encourage public participation in environmental protection.",
  "To spread environmental awareness among citizens, students, and institutions.",
  "To promote a sustainable and green environment in Vrindavan and the Braj region.",
  "To contribute to social welfare through environmental initiatives.",
];

const trustees = [
  "Ganesh Baghel, S/o Shri Shyam Lal - Trustee",
  "Mor Mukut, S/o Shri Uday Ram - Trustee",
  "Rishi Baghel, S/o Shri Shyam Lal - Trustee",
];

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Mission & Legal Information | Vriksh Rakshak Dal Sewa Trust" },
      {
        name: "description",
        content:
          "Learn about the mission, vision, legal status, trustees, and objectives of Vriksh Rakshak Dal Sewa Trust.",
      },
      { property: "og:title", content: "Mission - Vriksh Rakshak Dal Sewa Trust" },
      { property: "og:url", content: "/mission" },
    ],
    links: [{ rel: "canonical", href: "/mission" }],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>To build a greener and healthier India.</>}
        sub="Inspiring every citizen to protect and preserve trees for future generations."
      />
      <MissionOverview />
      <section className="bg-secondary/45 py-20 sm:py-24">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="Vision & Mission"
            title="Protect, nurture, preserve."
            sub="The Trust combines environmental conservation with public participation and social welfare."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <h2 className="font-display text-2xl font-semibold">Vision</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                To build a greener and healthier India by inspiring every citizen to protect and
                preserve trees for future generations.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <h2 className="font-display text-2xl font-semibold">Mission</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {mission.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-px w-6 shrink-0 bg-[color:var(--forest)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <WhyTrees />
      <Process />
      <section className="bg-secondary/45 py-20 sm:py-24">
        <Container>
          <SectionHeader
            align="left"
            eyebrow="Legal Information"
            title="Registered Public Charitable Trust"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <dl className="grid gap-4 text-sm">
                <div>
                  <dt className="font-semibold">Official Legal Name</dt>
                  <dd className="mt-1 text-muted-foreground">VRIKSH RAKSHAK DAL SEWA TRUST</dd>
                </div>
                <div>
                  <dt className="font-semibold">Hindi Name</dt>
                  <dd className="mt-1 text-muted-foreground">{SITE_HINDI_NAME}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Nature of Organization</dt>
                  <dd className="mt-1 text-muted-foreground">Public Charitable Trust</dd>
                </div>
                <div>
                  <dt className="font-semibold">Trust PAN</dt>
                  <dd className="mt-1 text-muted-foreground">{TRUST_PAN}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Registration Number</dt>
                  <dd className="mt-1 text-muted-foreground">
                    No separate Trust Registration Number is mentioned in the Trust Deed.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold">Authorized Trustees</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {trustees.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-2xl font-semibold">Available Documents</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Registered Trust Deed, Trust PAN Card ({TRUST_PAN}), and Authorized Trustee Details.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <DonateCta />
    </>
  );
}
