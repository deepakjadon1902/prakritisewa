import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as SectionHeader } from "./SectionHeader-GH0Rrd3u.mjs";
import { n as FlipWords } from "./CtaBanners-Db2HQpuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Process-BMAxTips.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		n: "01",
		title: "Identify Need",
		desc: "Select public places, schools, temples, ashrams, and community areas that need trees."
	},
	{
		n: "02",
		title: "Plan Campaign",
		desc: "Coordinate with local citizens, volunteers, and institutions for permissions and support."
	},
	{
		n: "03",
		title: "Plant Responsibly",
		desc: "Choose suitable saplings and plant them with proper spacing, soil preparation, and care."
	},
	{
		n: "04",
		title: "Protect Saplings",
		desc: "Arrange watering, guards, monitoring, and maintenance so planted trees can survive."
	},
	{
		n: "05",
		title: "Build Awareness",
		desc: "Conduct rallies, seminars, school programs, and outreach to involve more citizens."
	},
	{
		n: "06",
		title: "Continue Care",
		desc: "Focus on survival and long-term protection, not plantation numbers alone."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				align: "left",
				eyebrow: "Our Approach",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Planting is the beginning.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
						words: [
							"Protection",
							"Tree Care",
							"Nurture"
						],
						className: "min-w-[10ch] font-semibold text-[color:var(--forest)]"
					}),
					" ",
					"is the mission."
				] }),
				sub: "The Trust works through careful local planning, public participation, and ongoing care after every campaign."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "border-y border-border",
				children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-4 border-b border-border py-5 last:border-b-0 sm:grid-cols-[76px_190px_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-semibold text-[color:var(--forest)]",
							children: step.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold leading-6",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-6 text-muted-foreground",
							children: step.desc
						})
					]
				}, step.n))
			})]
		}) })
	});
}
//#endregion
export { Process as t };
