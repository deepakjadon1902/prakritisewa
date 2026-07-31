export interface SourceLink {
  label: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: string;
  date: string;
  author: string;
  image: string;
  imageCredit: SourceLink;
  sources: SourceLink[];
  content: string[];
}

const unsplash = "https://unsplash.com";

export const posts: BlogPost[] = [
  {
    slug: "jadav-payeng-molai-forest",
    title: "Molai Forest: what steady care can grow",
    excerpt:
      "Jadav Payeng's long commitment in Assam shows how one person's daily effort can help restore land into a living forest.",
    category: "Inspiration",
    tags: ["Jadav Payeng", "Forest Conservation", "Biodiversity"],
    readingTime: "5 min",
    date: "12 July 2026",
    author: "Vriksh Rakshak Dal Sewa Trust",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jadav%20Payeng%20Forest%20Man%20Of%20India.jpg",
    imageCredit: {
      label: "Wikimedia Commons: Jadav Payeng Forest Man Of India.jpg",
      url: "https://commons.wikimedia.org/wiki/File:Jadav_Payeng_Forest_Man_Of_India.jpg",
    },
    sources: [
      { label: "Wikipedia: Jadav Payeng", url: "https://en.wikipedia.org/wiki/Jadav_Payeng" },
      {
        label: "Wikimedia Commons: Jadav Payeng media",
        url: "https://commons.wikimedia.org/wiki/Category:Jadav_Payeng",
      },
    ],
    content: [
      "Molai Forest is a reminder that environmental restoration can begin with one person returning to the same place again and again with patience, seeds, and care.",
      "The lesson for community plantation work is simple: planting is only the first moment. Survival depends on protection, water, monitoring, and ownership from local people.",
      "For Vriksh Rakshak Dal Sewa Trust, stories like this support the belief that public participation can turn small green acts into long-term environmental change.",
    ],
  },
  {
    slug: "piplantri-111-trees-for-every-daughter",
    title: "Piplantri: linking trees with community celebration",
    excerpt:
      "The village of Piplantri is known for connecting the birth of daughters with tree planting and long-term community care.",
    category: "Community",
    tags: ["Piplantri", "Community Plantation", "Rajasthan"],
    readingTime: "4 min",
    date: "10 July 2026",
    author: "Vriksh Rakshak Dal Sewa Trust",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash forest image", url: unsplash },
    sources: [
      { label: "Wikipedia: Piplantri", url: "https://en.wikipedia.org/wiki/Piplantri" },
      {
        label: "Times of India: Piplantri story",
        url: "https://timesofindia.indiatimes.com/life-style/travel/destinations/the-story-of-the-village-where-every-girls-birth-is-celebrated-by-planting-111-trees-for-this-heartwarming-reason/articleshow/130348838.cms",
      },
    ],
    content: [
      "Piplantri's example matters because it connects trees with emotion, identity, and shared responsibility. When a plant is linked to a family event or community memory, people are more likely to protect it.",
      "Tree plantation programs become stronger when they are not treated as one-day events. They become stronger when residents know which tree belongs to which place and who will care for it.",
      "This is why the Trust encourages schools, temples, ashrams, and community groups to take active ownership of green spaces after plantation.",
    ],
  },
  {
    slug: "chami-murmu-jharkhand-green-leadership",
    title: "Chami Murmu: leadership through local participation",
    excerpt:
      "Chami Murmu's work highlights the power of women, local groups, and community participation in tree plantation and protection.",
    category: "Leadership",
    tags: ["Chami Murmu", "Women Leadership", "Jharkhand"],
    readingTime: "4 min",
    date: "8 July 2026",
    author: "Vriksh Rakshak Dal Sewa Trust",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash sapling image", url: unsplash },
    sources: [
      { label: "Wikipedia: Chami Murmu", url: "https://en.wikipedia.org/wiki/Chami_Murmu" },
    ],
    content: [
      "Chami Murmu's journey shows that green work becomes durable when local communities take responsibility together. Environmental action is not only technical work; it is also social organization.",
      "When women, students, families, and institutions participate, plantation drives gain continuity. Saplings are seen, watered, protected, and remembered.",
      "The Trust follows the same community-first principle in Vrindavan, Mathura, and nearby Braj areas.",
    ],
  },
  {
    slug: "daripalli-ramaiah-seeds-in-pocket",
    title: "Daripalli Ramaiah: the discipline of planting",
    excerpt:
      "Daripalli Ramaiah's life reminds us that personal discipline and daily habits can support large environmental change.",
    category: "Inspiration",
    tags: ["Daripalli Ramaiah", "Seeds", "Telangana"],
    readingTime: "4 min",
    date: "5 July 2026",
    author: "Vriksh Rakshak Dal Sewa Trust",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash plantation image", url: unsplash },
    sources: [
      {
        label: "Wikipedia: Daripalli Ramaiah",
        url: "https://en.wikipedia.org/wiki/Daripalli_Ramaiah",
      },
      {
        label: "Economic Times: Tree Man of Telangana",
        url: "https://m.economictimes.com/news/new-updates/with-just-a-bicycle-and-seeds-in-his-pocket-he-planted-1-crore-trees-telanganas-tree-man-proved-how-one-person-can-change-india/articleshow/130301334.cms",
      },
    ],
    content: [
      "Daripalli Ramaiah's example shows that environmental care can become a daily habit. A seed, a sapling, a tool, and a commitment can matter when repeated over years.",
      "This kind of discipline is useful for every volunteer. Tree care is not only about enthusiasm on the campaign day; it is about returning, checking, watering, and protecting.",
      "Small actions become meaningful when they are repeated with responsibility.",
    ],
  },
  {
    slug: "van-mahotsav-tree-festival-india",
    title: "Van Mahotsav: when plantation becomes responsibility",
    excerpt:
      "Van Mahotsav reminds India to plant trees, but the real test begins after the sapling is in the ground.",
    category: "Awareness",
    tags: ["Van Mahotsav", "Tree Plantation", "Monsoon"],
    readingTime: "4 min",
    date: "1 July 2026",
    author: "Vriksh Rakshak Dal Sewa Trust",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash tree canopy image", url: unsplash },
    sources: [
      { label: "Wikipedia: Van Mahotsav", url: "https://en.wikipedia.org/wiki/Van_Mahotsav" },
    ],
    content: [
      "Van Mahotsav is an important national reminder, especially during the monsoon season when saplings have a better chance of survival.",
      "But a good plantation campaign should not end with photos or numbers. It should include species selection, water planning, protection, and follow-up care.",
      "That approach matches the Trust's focus on survival and protection rather than plantation numbers alone.",
    ],
  },
  {
    slug: "pune-tree-mapping-citizen-science",
    title: "Citizen tree mapping: records that protect trees",
    excerpt:
      "Tree mapping and geotagging can help cities understand what they have, what is at risk, and where care is needed.",
    category: "Civic Action",
    tags: ["Tree Mapping", "Citizen Science", "Urban Trees"],
    readingTime: "5 min",
    date: "28 June 2026",
    author: "Vriksh Rakshak Dal Sewa Trust",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    imageCredit: { label: "Unsplash landscape image", url: unsplash },
    sources: [
      {
        label: "Times of India: Pune citizens geotag green cover",
        url: "https://timesofindia.indiatimes.com/city/pune/citizens-take-geotagging-of-punes-green-cover-into-their-own-hands/articleshow/122800619.cms",
      },
      {
        label: "arXiv: Plantation site recommendation research",
        url: "https://arxiv.org/abs/2009.08002",
      },
    ],
    content: [
      "A community can protect trees better when it knows where they are, what condition they are in, and who is responsible for care.",
      "Citizen mapping supports better planning, stronger public records, and timely action when trees are neglected or threatened.",
      "For local green initiatives, simple documentation can become a powerful tool for accountability.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return posts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, limit);
}
