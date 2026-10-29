import { n as getRelatedPosts, t as getPostBySlug } from "./blog-Cf3as-ct.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as absoluteUrl, o as SITE_NAME } from "./site-B7hwvLmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs._slug-C0MIXydF.js
var $$splitComponentImporter = () => import("./blogs._slug-3_XGYaqk.mjs");
var Route = createFileRoute("/blogs/$slug")({
	loader: ({ params }) => {
		const post = getPostBySlug(params.slug);
		if (!post) throw notFound();
		return {
			post,
			related: getRelatedPosts(post)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: `Resource Not Found | ${SITE_NAME}` }, {
			name: "robots",
			content: "noindex, follow"
		}] };
		const { post } = loaderData;
		const url = absoluteUrl(`/blogs/${post.slug}`);
		const articleJsonLd = {
			"@context": "https://schema.org",
			"@type": "Article",
			headline: post.title,
			description: post.excerpt,
			image: post.image,
			datePublished: post.date,
			author: {
				"@type": "Organization",
				name: post.author
			},
			publisher: {
				"@type": "Organization",
				name: SITE_NAME,
				url: absoluteUrl("/")
			},
			mainEntityOfPage: url,
			citation: post.sources.map((source) => source.url)
		};
		return {
			meta: [
				{ title: `${post.title} | ${SITE_NAME} Resources` },
				{
					name: "description",
					content: post.excerpt.slice(0, 158)
				},
				{
					name: "robots",
					content: "index, follow"
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:title",
					content: post.title
				},
				{
					property: "og:description",
					content: post.excerpt
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:image",
					content: post.image
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: post.title
				},
				{
					name: "twitter:description",
					content: post.excerpt
				},
				{
					name: "twitter:image",
					content: post.image
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(articleJsonLd)
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
