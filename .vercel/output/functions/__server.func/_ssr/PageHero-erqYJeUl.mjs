import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-erqYJeUl.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, sub, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-border bg-secondary/45 py-16 sm:py-20 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute -right-40 -top-48 -z-10 size-[34rem] rounded-full bg-[color:var(--leaf)]/10 blur-3xl"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: false,
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .4 },
					className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--forest)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[color:var(--leaf)]" }), eyebrow]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: false,
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl",
					children: title
				}),
				sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: false,
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .1
					},
					className: "mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
					children: sub
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };
