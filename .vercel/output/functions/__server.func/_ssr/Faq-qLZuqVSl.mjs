import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { s as Plus } from "../_libs/lucide-react.mjs";
import { t as faqs } from "./faq-CUpCKrc0.mjs";
import { t as SectionHeader } from "./SectionHeader-GH0Rrd3u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Faq-qLZuqVSl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Faq({ limit }) {
	const list = limit ? faqs.slice(0, limit) : faqs;
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "FAQs",
				title: "Clear answers to common questions.",
				sub: "Have another question? Contact the Trust through our contact page."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-card mt-10 divide-y divide-border rounded-lg border border-border bg-card shadow-soft",
				children: list.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(isOpen ? null : i),
						"aria-expanded": isOpen,
						className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: `size-5 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`,
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: false,
						animate: {
							height: isOpen ? "auto" : 0,
							opacity: isOpen ? 1 : 0
						},
						transition: { duration: .3 },
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-6 pb-6 text-muted-foreground",
							children: f.a
						})
					})] }, f.q);
				})
			})]
		})
	});
}
//#endregion
export { Faq as t };
