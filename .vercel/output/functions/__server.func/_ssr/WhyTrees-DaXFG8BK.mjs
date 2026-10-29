import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as SectionHeader } from "./SectionHeader-GH0Rrd3u.mjs";
import { n as FlipWords } from "./CtaBanners-Db2HQpuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhyTrees-DaXFG8BK.js
var import_jsx_runtime = require_jsx_runtime();
var sapling_hands_default = "/assets/sapling-hands-y1PjQJPS.jpg";
var benefits = [
	"Cleaner air and healthier public spaces.",
	"Better soil stability, groundwater support, and shade.",
	"Protection for native biodiversity and local ecosystems.",
	"Long-term sapling survival through care after plantation.",
	"Greener schools, temples, ashrams, and community places.",
	"A healthier environment for future generations."
];
function WhyTrees() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/45 py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg shadow-lift",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sapling_hands_default,
					alt: "Hands holding a young sapling in fresh soil",
					width: 1200,
					height: 1200,
					loading: "lazy",
					decoding: "async",
					className: "aspect-[4/3] size-full object-cover lg:aspect-square"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "left",
					eyebrow: "Why Trees Matter",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Nature protection is our",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
							words: [
								"responsibility",
								"stewardship",
								"commitment"
							],
							className: "min-w-[14ch] font-semibold text-[color:var(--forest)]"
						}),
						"."
					] }),
					sub: "Every tree supports public health, local climate, community life, and the future of the Braj region."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-border border-y border-border",
					children: benefits.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 py-4 text-base leading-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-3 h-px w-8 shrink-0 bg-[color:var(--forest)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: benefit })]
					}, benefit))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-display text-2xl font-semibold text-[color:var(--forest)]",
					children: "One Tree. One Life. One Green Future."
				})
			] })]
		}) })
	});
}
//#endregion
export { WhyTrees as t };
