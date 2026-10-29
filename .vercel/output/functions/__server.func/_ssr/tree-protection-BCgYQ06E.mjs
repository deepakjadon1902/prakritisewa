import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SectionHeader } from "./SectionHeader-GH0Rrd3u.mjs";
import { t as TrustIcon } from "./TrustIcon-BpnJqwt_.mjs";
import { t as DonateCta } from "./CtaBanners-Db2HQpuG.mjs";
import { t as ImpactCounter } from "./ImpactCounter-BRdKkUYm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tree-protection-BCgYQ06E.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		title: "Safeguarding Saplings",
		desc: "Protection support so newly planted trees can survive beyond the campaign day.",
		icon: "protection"
	},
	{
		title: "Watering & Care",
		desc: "Regular care, maintenance, and monitoring for planted saplings.",
		icon: "planting"
	},
	{
		title: "Community Monitoring",
		desc: "Local volunteers and citizens help watch over green spaces and report needs.",
		icon: "community"
	},
	{
		title: "Public Awareness",
		desc: "Outreach activities that encourage citizens, students, and institutions to protect trees.",
		icon: "awareness"
	}
];
var objectives = [
	{
		label: "Tree plantation and restoration",
		icon: "planting"
	},
	{
		label: "Tree protection and long-term care",
		icon: "protection"
	},
	{
		label: "Environmental and nature conservation",
		icon: "awareness"
	},
	{
		label: "Public awareness and education",
		icon: "awareness"
	},
	{
		label: "Community participation and volunteer programs",
		icon: "community"
	},
	{
		label: "Social welfare and greener public spaces",
		icon: "community"
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Tree Care & Impact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Plantation begins the work; lasting care sustains its impact." }),
		sub: "The Trust brings tree planting, ongoing care, community participation, and environmental awareness together across Vrindavan and nearby Braj areas.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground",
				children: "Coordinate tree care"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#impact",
				className: "inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background",
				children: "Explore ongoing work"
			})]
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			align: "left",
			eyebrow: "Tree Care",
			title: "Care continues after planting day.",
			sub: "Healthy trees need consistent attention. The Trust’s work focuses on practical care and local stewardship."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-4 sm:grid-cols-2",
			children: pillars.map(({ title, desc, icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "surface-card rounded-xl border border-border bg-card p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "trust-icon-tile mb-4 grid size-12 place-items-center rounded-2xl text-[color:var(--forest)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
							name: icon,
							className: "size-7"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold leading-6",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-7 text-muted-foreground",
						children: desc
					})
				]
			}, title))
		})] })
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactCounter, {}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			align: "left",
			eyebrow: "Our Objectives",
			title: "Conservation grows through local care.",
			sub: "The Trust’s objectives connect tree care with public awareness, community participation, and social welfare."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: objectives.map(({ label, icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "surface-card flex min-h-20 items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-semibold leading-6 text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "trust-icon-tile grid size-11 shrink-0 place-items-center rounded-xl text-[color:var(--forest)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
						name: icon,
						className: "size-6"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
			}, label))
		})] })
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateCta, {})
] });
//#endregion
export { SplitComponent as component };
