import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as FlipWords } from "./CtaBanners-Db2HQpuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MissionOverview-XBIKG6Zi.js
var import_jsx_runtime = require_jsx_runtime();
var forest_aerial_default = "/assets/forest-aerial-B2AI7Xij.jpg";
var legalDetails = [
	"Registered Trust Deed",
	"Public Charitable Trust",
	"Trust PAN Available",
	"Environmental & Social Welfare Organization"
];
function MissionOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 sm:py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[color:var(--leaf)]" }), "About Us"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
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
					className: "text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl",
					children: [
						"A Vrindavan-based public charitable trust for",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-gradient-forest",
							children: [
								"tree",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
									words: [
										"protection",
										"conservation",
										"care"
									],
									className: "min-w-[12ch] font-semibold text-[color:var(--forest)]"
								}),
								" ",
								"and green action"
							]
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg text-muted-foreground",
					children: "Vriksh Rakshak Dal Sewa Trust is committed to environmental conservation, tree plantation, tree protection, and social welfare activities. The Trust works primarily in Vrindavan, Mathura, and surrounding Braj regions with the vision of creating a greener, healthier, and environmentally responsible society."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg text-muted-foreground",
					children: "Our mission is not only to plant trees but also to protect, nurture, and preserve them for future generations through public awareness and community participation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/mission",
						className: "inline-flex items-center gap-1.5 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: ["Read Mission", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent",
						children: "Contact the Trust"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: false,
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .7 },
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg shadow-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: forest_aerial_default,
						alt: "Green forest canopy representing environmental conservation",
						width: 1600,
						height: 900,
						loading: "lazy",
						decoding: "async",
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 left-0 w-full max-w-[310px] rounded-lg bg-card p-5 shadow-lift ring-1 ring-border sm:-left-6 sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold text-[color:var(--forest)]",
						children: "Legal Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground",
						children: legalDetails.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 shrink-0 bg-[color:var(--forest)]" }), detail]
						}, detail))
					})]
				})]
			})]
		}) })
	});
}
//#endregion
export { MissionOverview as t };
