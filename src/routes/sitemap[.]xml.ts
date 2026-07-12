import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "../constants/site";
import { posts } from "../data/blog";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", lastmod: "2026-07-12", changefreq: "weekly", priority: "1.0" },
          { path: "/mission", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.9" },
          {
            path: "/tree-protection",
            lastmod: "2026-07-12",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/tree-relocation",
            lastmod: "2026-07-12",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/tree-plantation",
            lastmod: "2026-07-12",
            changefreq: "monthly",
            priority: "0.8",
          },
          { path: "/impact", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.8" },
          { path: "/gallery", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.7" },
          { path: "/stories", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.8" },
          { path: "/volunteer", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.9" },
          { path: "/donate", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.9" },
          { path: "/blogs", lastmod: "2026-07-12", changefreq: "weekly", priority: "0.8" },
          ...posts.map((post) => ({
            path: `/blogs/${post.slug}`,
            lastmod: "2026-07-12",
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          { path: "/faq", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", lastmod: "2026-07-12", changefreq: "yearly", priority: "0.6" },
          { path: "/privacy", lastmod: "2026-07-12", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", lastmod: "2026-07-12", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries.map((e) =>
          [
            "  <url>",
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            "  </url>",
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
