import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as SectionHeader } from "./SectionHeader-GH0Rrd3u.mjs";
import { n as FlipWords } from "./CtaBanners-Db2HQpuG.mjs";
import { n as useLanguage } from "./language-DGu6HuW-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImpactCounter-BRdKkUYm.js
var import_jsx_runtime = require_jsx_runtime();
var impactRows = [
	{
		area: "Tree plantation",
		status: "Ongoing",
		detail: "Plantation drives continue across public and community spaces."
	},
	{
		area: "Tree protection",
		status: "Active",
		detail: "Saplings are monitored, watered, and protected after planting."
	},
	{
		area: "Primary region",
		status: "Vrindavan",
		detail: "Work is focused in Mathura, Vrindavan, and nearby Braj areas."
	},
	{
		area: "Public participation",
		status: "Community led",
		detail: "Citizens, students, institutions, and volunteers are encouraged to participate."
	}
];
function ImpactCounter() {
	const { t, lang } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "impact",
		className: "scroll-mt-20 bg-[color:var(--forest)] py-16 text-white sm:py-20 lg:py-24 md:scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				align: "left",
				eyebrow: "Our Impact",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
					words: lang === "hi" ? [
						"हमारा प्रभाव",
						"हमारा कार्य",
						"हमारी पहुंच"
					] : [
						"Our Impact",
						"Our Work",
						"Our Reach"
					],
					className: `font-display font-semibold text-[color:var(--sun)] ${lang === "hi" ? "min-w-[9em]" : "min-w-[10ch]"}`
				}),
				sub: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white/78",
					children: t("counter_sub")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-white/12 border-y border-white/12",
				children: impactRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 py-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.08em] text-white/72",
						children: row.area
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-full text-wrap font-display text-2xl font-semibold leading-tight text-white sm:text-3xl",
							children: row.status
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-6 text-white/72",
							children: row.detail
						})]
					})]
				}, row.area))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 border-l-2 border-[color:var(--sun)] pl-4 text-sm text-white/72",
			children: "Plantation totals are shared when verified records are available."
		})] })
	});
}
//#endregion
export { ImpactCounter as t };
