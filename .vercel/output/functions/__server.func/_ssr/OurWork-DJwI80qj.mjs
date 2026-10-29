import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as SectionHeader } from "./SectionHeader-GH0Rrd3u.mjs";
import { t as TrustIcon } from "./TrustIcon-BpnJqwt_.mjs";
import { n as FlipWords } from "./CtaBanners-Db2HQpuG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/OurWork-DJwI80qj.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		title: "Tree Plantation Campaigns",
		desc: "Plantation drives in public places, schools, temples, ashrams, and community areas.",
		icon: "planting"
	},
	{
		title: "Tree Protection & Care",
		desc: "Regular monitoring, watering, protection, and maintenance of planted saplings.",
		icon: "protection"
	},
	{
		title: "Environmental Awareness Programs",
		desc: "Awareness rallies, seminars, educational campaigns, and public outreach activities.",
		icon: "awareness"
	},
	{
		title: "Community Green Initiatives",
		desc: "Collaborative plantation and conservation programs with local communities and volunteers.",
		icon: "community"
	},
	{
		title: "School & Youth Participation",
		desc: "Encouraging students and youth to participate in environmental activities.",
		icon: "youth"
	},
	{
		title: "Institutional & Religious Collaborations",
		desc: "Developing green campuses and environmentally responsible community spaces.",
		icon: "campus"
	}
];
function OurWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				align: "left",
				eyebrow: "Our Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Practical environmental work rooted in the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
						words: [
							"community",
							"volunteers",
							"local people"
						],
						className: "min-w-[12ch] font-semibold text-[color:var(--forest)]"
					}),
					"."
				] }),
				sub: "The Trust brings citizens, institutions, students, and volunteers together for tree plantation, protection, and public awareness."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid auto-rows-fr gap-4 sm:grid-cols-2",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card group rounded-xl border border-border bg-card p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "trust-icon-tile mb-4 grid size-12 place-items-center rounded-2xl text-[color:var(--forest)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
								name: item.icon,
								className: "size-7"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold leading-6 text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: item.desc
						})
					]
				}, item.title))
			})]
		}) })
	});
}
//#endregion
export { OurWork as t };
