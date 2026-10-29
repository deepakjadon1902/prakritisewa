import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeader-GH0Rrd3u.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeader({ eyebrow, title, sub, align = "center", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-3xl ${align === "center" ? "text-center mx-auto" : "text-left"}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				initial: false,
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[color:var(--leaf)]" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: false,
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .5 },
				className: "text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.75rem]",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: false,
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .5,
					delay: .08
				},
				className: "mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
				children: sub
			}),
			children
		]
	});
}
//#endregion
export { SectionHeader as t };
