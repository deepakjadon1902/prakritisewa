import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Share2, g as ExternalLink, v as Clock, x as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Route } from "./blogs._slug-C0MIXydF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blogs._slug-3_XGYaqk.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { post, related } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blogs",
			className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
				className: "size-4",
				"aria-hidden": "true"
			}), "Back to resources"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--forest)]",
					children: post.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight sm:text-6xl",
					children: post.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted-foreground",
					children: post.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.date }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Author: ", post.author] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "size-4",
								"aria-hidden": "true"
							}), post.readingTime]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 lg:justify-end",
				children: post.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-[color:var(--forest)]",
					children: tag
				}, tag))
			})]
		})] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: post.image,
		alt: post.title,
		loading: "eager",
		decoding: "async",
		referrerPolicy: "no-referrer",
		className: "max-h-[560px] w-full rounded-lg object-cover shadow-lift"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
		className: "mt-3 text-xs text-muted-foreground",
		children: [
			"Image source:",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: post.imageCredit.url,
				target: "_blank",
				rel: "noreferrer",
				className: "underline",
				children: post.imageCredit.label
			})
		]
	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-foreground/85",
		children: [
			post.content.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-lg border border-border bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Sources and references"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: post.sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: source.url,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-accent",
						children: [source.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							className: "size-3",
							"aria-hidden": "true"
						})]
					}, source.url))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-lg border border-border bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
						className: "size-5 text-[color:var(--forest)]",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: "Share this article"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Share these stories with family, schools, institutions, and communities to inspire tree protection and public participation."
				})]
			})
		]
	})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold",
			children: "Related articles"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-3",
			children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blogs/$slug",
				params: { slug: item.slug },
				className: "surface-card rounded-lg border border-border bg-card p-5 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
						children: item.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-semibold leading-snug",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: item.excerpt
					})
				]
			}, item.slug))
		})] })
	})] });
}
//#endregion
export { BlogPostPage as component };
