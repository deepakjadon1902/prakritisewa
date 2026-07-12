import aerial from "../assets/forest-aerial.jpg";
import volunteers from "../assets/volunteers-planting.jpg";
import reloc from "../assets/tree-relocation.jpg";
import sapling from "../assets/sapling-hands.jpg";
import hero from "../assets/hero-tree.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  author: string;
  image: string;
}

export const posts: BlogPost[] = [
  {
    slug: "urban-forests-are-not-a-luxury",
    title: "Urban forests are not a luxury — they're a lifeline",
    excerpt:
      "Why every Indian city needs a tree budget the way it needs a water budget, and how five metros are quietly leading the way.",
    category: "Policy",
    readingTime: "6 min read",
    date: "May 12, 2026",
    author: "Kavita Rao",
    image: aerial,
  },
  {
    slug: "how-we-relocated-90-year-old-peepal",
    title: "How we relocated a 90-year-old peepal — and it survived",
    excerpt:
      "A step-by-step field diary of a delicate rescue, from midnight prep to the first monsoon after transplant.",
    category: "Field Notes",
    readingTime: "8 min read",
    date: "April 28, 2026",
    author: "Rahul Verma",
    image: reloc,
  },
  {
    slug: "children-and-trees",
    title: "The generation that will grow up with the trees we plant today",
    excerpt:
      "Notes from three years of school programs — and what children are teaching their parents about the climate.",
    category: "Community",
    readingTime: "4 min read",
    date: "April 10, 2026",
    author: "Ananya Mehta",
    image: sapling,
  },
  {
    slug: "native-species-first",
    title: "Native species first: a simple rule that changes everything",
    excerpt:
      "Why the same neem or gulmohar you grew up with beats any imported ornamental — for wildlife, water, and shade.",
    category: "Science",
    readingTime: "5 min read",
    date: "March 22, 2026",
    author: "Dr. S. Iyer",
    image: hero,
  },
  {
    slug: "weekend-volunteering-guide",
    title: "A weekend volunteer's honest guide to starting",
    excerpt:
      "What to expect on your first plantation drive — from tools and terrain to the friendships you'll build.",
    category: "Volunteering",
    readingTime: "3 min read",
    date: "March 05, 2026",
    author: "Sneha K.",
    image: volunteers,
  },
];
