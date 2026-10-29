import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Mail } from "../_libs/lucide-react.mjs";
import { l as TRUST_EMAIL } from "./site-B7hwvLmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donation-confirmation-BF81-dS6.js
var import_jsx_runtime = require_jsx_runtime();
var summary = [
	"Tree Plantation",
	"Tree Protection & Care",
	"Public Participation"
];
function DonationConfirmationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card mx-auto max-w-4xl rounded-lg border border-border bg-card p-8 shadow-lift sm:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
					children: "Support summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl",
					children: "Thank you for supporting tree protection."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl leading-7 text-muted-foreground",
					children: "Please confirm campaign, donor, or volunteer participation details directly with the Trust before making any transfer or field commitment."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 divide-y divide-border border-y border-border",
					children: summary.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 py-4 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-3 h-px w-8 shrink-0 bg-[color:var(--forest)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/donate",
						className: "inline-flex items-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent",
						children: "Support options"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${TRUST_EMAIL}`,
						className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Email the Trust"]
					})]
				})
			]
		}) })
	});
}
//#endregion
export { DonationConfirmationPage as component };
