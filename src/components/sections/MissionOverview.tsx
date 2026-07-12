import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "../layout/Container";
import forestImg from "../../assets/forest-aerial.jpg";

export function MissionOverview() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
              <span className="size-1.5 rounded-full bg-[color:var(--leaf)]" />
              हम कौन हैं
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl"
            >
              हम लोगों और उनके प्रिय पेड़ों के बीच{" "}
              <span className="text-gradient-forest">सेवा का पुल</span> बनाते हैं।
            </motion.h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              प्रकृति सेवा एक निःस्वार्थ सामाजिक पहल है। हम संकट में आए पेड़ों की सूचना लेते हैं,
              स्थान देखते हैं, वैज्ञानिक तरीके से निरीक्षण करते हैं, संभव हो तो पेड़ को वहीं बचाते
              हैं और जरूरत पड़ने पर सुरक्षित पुनर्स्थापन में मदद करते हैं।
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              हमारा उद्देश्य केवल पौधे लगाना नहीं है। हमारा उद्देश्य पेड़ को जीवित रखना, समाज को
              जिम्मेदार बनाना और हर बच्चे को ऐसी धरती देना है जहां छांव, पक्षी और स्वच्छ हवा सामान्य
              बात हों।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/mission"
                className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                मिशन पढ़ें
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/impact"
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent"
              >
                प्रभाव देखें
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={forestImg}
                alt="घने भारतीय जंगल का हवाई दृश्य"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-[260px] rounded-2xl bg-card p-5 shadow-lift ring-1 ring-border sm:-left-6">
              <p className="font-display text-2xl font-semibold text-[color:var(--forest)]">
                सेवा, स्वार्थ नहीं
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                स्वयंसेवक-चालित, विज्ञान-समर्थित, समुदाय-केंद्रित।
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
