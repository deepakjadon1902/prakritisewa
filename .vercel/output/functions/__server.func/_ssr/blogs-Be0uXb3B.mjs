import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { r as posts } from "./blog-Cf3as-ct.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ExternalLink, v as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs-Be0uXb3B.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Resources",
	title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Stories that inspire green action." }),
	sub: "Source-linked reading on tree plantation, environmental conservation, and community participation."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "py-16 sm:py-24",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: posts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			initial: false,
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-60px"
			},
			transition: {
				duration: .5,
				delay: i * .05
			},
			className: "surface-card group overflow-hidden rounded-lg border border-border bg-card shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[16/10] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.title,
					loading: "lazy",
					decoding: "async",
					referrerPolicy: "no-referrer",
					className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-2.5 py-1 font-medium text-[color:var(--forest)]",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "size-3",
									"aria-hidden": "true"
								}), p.readingTime]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-lg font-semibold leading-snug",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: ["Author: ", p.author]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blogs/$slug",
							params: { slug: p.slug },
							className: "inline-flex text-sm font-semibold text-[color:var(--forest)]",
							children: "Read more"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.sources[0]?.url,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground",
							children: ["Source", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "size-3",
								"aria-hidden": "true"
							})]
						})]
					})
				]
			})]
		}, p.slug))
	}) })
})] });
//#endregion
export { SplitComponent as component };
