import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";

const stories = [
  {
    title: "मोलाई वन: रेत पर उगा एक जीवन-घर",
    location: "माजुली, असम",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Forest%20Man%20of%20India%20Jadav%20Payeng.jpg",
    body: "जादव पायेंग ने दशकों तक ब्रह्मपुत्र के रेतीले टापू पर पौधे लगाए और उनकी देखभाल की। आज यह प्रयास मोलाई वन के रूप में जैव-विविधता, धैर्य और व्यक्तिगत जिम्मेदारी का प्रतीक है।",
    source: { label: "Wikipedia: Jadav Payeng", url: "https://en.wikipedia.org/wiki/Jadav_Payeng" },
  },
  {
    title: "पिपलांत्री: बेटी के जन्म पर 111 पेड़",
    location: "राजसमंद, राजस्थान",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    body: "इस गांव ने बेटी के जन्म को पेड़ों के उत्सव से जोड़ा। 111 पेड़ लगाने की परंपरा ने हरियाली, जल और सामाजिक सम्मान को एक साथ आगे बढ़ाया।",
    source: { label: "Wikipedia: Piplantri", url: "https://en.wikipedia.org/wiki/Piplantri" },
  },
  {
    title: "चामी मुर्मू: महिलाओं के हाथों से उगी हरियाली",
    location: "झारखंड",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    body: "चामी मुर्मू की कहानी बताती है कि जब महिलाएं और स्थानीय समुदाय पेड़ों की रक्षा को अपना काम मान लेते हैं, तो पौधे संख्या नहीं रहते; वे सामाजिक शक्ति बन जाते हैं।",
    source: { label: "Wikipedia: Chami Murmu", url: "https://en.wikipedia.org/wiki/Chami_Murmu" },
  },
  {
    title: "पुणे की ट्री मैपिंग: हर पेड़ का रिकॉर्ड",
    location: "पुणे, महाराष्ट्र",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    body: "नागरिक समूह पेड़ों को जियो-टैग कर रहे हैं ताकि प्रजाति, सेहत, पानी और देखभाल की जिम्मेदारी दर्ज हो सके। यह शहरों के लिए नागरिक विज्ञान की मजबूत दिशा है।",
    source: {
      label: "Times of India: Pune tree geotagging",
      url: "https://timesofindia.indiatimes.com/city/pune/citizens-take-geotagging-of-punes-green-cover-into-their-own-hands/articleshow/122800619.cms",
    },
  },
];

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "सच्ची प्रेरक कहानियां | Prakriti Sewa" },
      {
        name: "description",
        content:
          "भारत की वास्तविक हरित कहानियां पढ़ें: मोलाई वन, पिपलांत्री, चामी मुर्मू और नागरिक ट्री मैपिंग से प्रेरणा लें।",
      },
      { property: "og:url", content: absoluteUrl("/stories") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/stories") }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="कहानियां"
        title={<>सच्चे लोग। सच्चे पेड़। सच्ची उम्मीद।</>}
        sub="इन कहानियों को सार्वजनिक स्रोतों से समझकर, संक्षेपित करके और स्रोत-लिंक के साथ प्रस्तुत किया गया है।"
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-16">
            {stories.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="overflow-hidden rounded-[2rem] shadow-lift">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="aspect-[4/3] size-full object-cover"
                  />
                </figure>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
                    {s.location}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">{s.body}</p>
                  <a
                    href={s.source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-accent"
                  >
                    स्रोत देखें
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  ),
});
