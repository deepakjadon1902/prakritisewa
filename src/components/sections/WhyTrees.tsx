import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import saplingImg from "../../assets/sapling-hands.jpg";

const benefits = [
  "Cleaner air and healthier public spaces.",
  "Better soil stability, groundwater support, and shade.",
  "Protection for native biodiversity and local ecosystems.",
  "Long-term sapling survival through care after plantation.",
  "Greener schools, temples, ashrams, and community places.",
  "A healthier environment for future generations.",
];

export function WhyTrees() {
  return (
    <section className="bg-secondary/45 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-lg shadow-lift">
            <img
              src={saplingImg}
              alt="Hands holding a young sapling in fresh soil"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] size-full object-cover lg:aspect-square"
            />
          </div>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Trees Matter"
              title="Nature protection is our collective responsibility."
              sub="Every tree supports public health, local climate, community life, and the future of the Braj region."
            />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4 py-4 text-base leading-7">
                  <span className="mt-3 h-px w-8 shrink-0 bg-[color:var(--forest)]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-2xl font-semibold text-[color:var(--forest)]">
              One Tree. One Life. One Green Future.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
