import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { g as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stories-Djf6SJ5z.js
var import_jsx_runtime = require_jsx_runtime();
var stories = [
	{
		title: "Molai Forest: one person's long commitment",
		location: "Majuli, Assam",
		image: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Forest%20Man%20of%20India%20Jadav%20Payeng.jpg",
		body: "Jadav Payeng's decades-long work on a river island shows how consistent care can turn degraded land into a living forest and inspire citizen responsibility.",
		source: {
			label: "Wikipedia: Jadav Payeng",
			url: "https://en.wikipedia.org/wiki/Jadav_Payeng"
		}
	},
	{
		title: "Piplantri: trees for every daughter",
		location: "Rajsamand, Rajasthan",
		image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
		body: "The village tradition of planting trees for every girl child connects environmental care with community celebration and social dignity.",
		source: {
			label: "Wikipedia: Piplantri",
			url: "https://en.wikipedia.org/wiki/Piplantri"
		}
	},
	{
		title: "Chami Murmu: green leadership through communities",
		location: "Jharkhand",
		image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
		body: "Chami Murmu's work highlights how women and local communities can make tree protection a lasting social force.",
		source: {
			label: "Wikipedia: Chami Murmu",
			url: "https://en.wikipedia.org/wiki/Chami_Murmu"
		}
	},
	{
		title: "Citizen tree mapping: records that protect",
		location: "Pune, Maharashtra",
		image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
		body: "Citizen groups that document and geotag trees show how public records can support conservation, monitoring, and local accountability.",
		source: {
			label: "Times of India: Pune tree geotagging",
			url: "https://timesofindia.indiatimes.com/city/pune/citizens-take-geotagging-of-punes-green-cover-into-their-own-hands/articleshow/122800619.cms"
		}
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Stories",
	title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Real people. Real trees. Real hope." }),
	sub: "Source-linked stories that show what patient environmental action can make possible."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "py-16 sm:py-24",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-16",
		children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			initial: false,
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: { duration: .6 },
			className: `grid gap-6 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>figure]:order-2" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "surface-card overflow-hidden rounded-xl border border-border bg-card shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: s.title,
					loading: "lazy",
					decoding: "async",
					referrerPolicy: "no-referrer",
					className: "aspect-[4/3] size-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-xl border border-border bg-card p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
						children: s.location
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold sm:text-4xl",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: s.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: s.source.url,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-5 inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-accent",
						children: ["View source", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					})
				]
			})]
		}, s.title))
	}) })
})] });
//#endregion
export { SplitComponent as component };
