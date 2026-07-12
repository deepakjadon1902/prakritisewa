import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, ExternalLink, Share2 } from "lucide-react";
import { Container } from "../components/layout/Container";
import { absoluteUrl } from "../constants/site";
import { getPostBySlug, getRelatedPosts } from "../data/blog";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedPosts(post) };
  },
  head: ({ loaderData }) => {
    const { post } = loaderData;
    const url = absoluteUrl(`/blogs/${post.slug}`);
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
      publisher: { "@type": "Organization", name: "Prakriti Sewa", url: absoluteUrl("/") },
      mainEntityOfPage: url,
      citation: post.sources.map((source) => source.url),
    };

    return {
      meta: [
        { title: `${post.title} | Prakriti Sewa Blog` },
        { name: "description", content: post.excerpt.slice(0, 158) },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: url },
        { property: "og:image", content: post.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(articleJsonLd) }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, related } = Route.useLoaderData();

  return (
    <>
      <article>
        <section className="py-12 sm:py-20">
          <Container>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              ब्लॉग पर वापस जाएं
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--forest)]">
                  {post.category}
                </p>
                <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight sm:text-6xl">
                  {post.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>लेख: {post.author}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-4" aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-[color:var(--forest)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <figure>
            <img
              src={post.image}
              alt={post.title}
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              className="max-h-[560px] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              चित्र स्रोत:{" "}
              <a href={post.imageCredit.url} target="_blank" rel="noreferrer" className="underline">
                {post.imageCredit.label}
              </a>
            </figcaption>
          </figure>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-foreground/85">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-semibold">स्रोत और संदर्भ</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-accent"
                  >
                    {source.label}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Share2 className="size-5 text-[color:var(--forest)]" aria-hidden="true" />
                <p className="font-semibold">यह लेख साझा करें</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                अपने परिवार, स्कूल, कार्यालय या मोहल्ले को प्रकृति सेवा के साथ पेड़ बचाने के लिए
                प्रेरित करें।
              </p>
            </div>
          </div>
        </Container>
      </article>

      <section className="py-20">
        <Container>
          <h2 className="font-display text-3xl font-semibold">संबंधित लेख</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/blogs/$slug"
                params={{ slug: item.slug }}
                className="rounded-3xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]">
                  {item.category}
                </p>
                <h3 className="mt-3 font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
