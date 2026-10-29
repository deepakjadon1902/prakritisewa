import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { l as TRUST_EMAIL, o as SITE_NAME } from "./site-B7hwvLmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-nnK3ryXu.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Legal",
	title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Privacy Policy" }),
	sub: "Last updated: October 2026"
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "py-16",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		size: "sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "prose prose-neutral max-w-none space-y-6 text-foreground/85",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"This notice explains how ",
					SITE_NAME,
					" handles information you choose to enter in the website contact and volunteer forms."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground",
					children: "Form details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Depending on your request, a form may ask for your name, email address, phone number, city, availability, area of interest, and message. Provide only the details needed to contact you." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground",
					children: "How form messages are sent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Submitting a form opens WhatsApp with a message prepared from the details you entered. This website does not send that message automatically; the details are shared with the Trust only if you choose to send it in WhatsApp. WhatsApp handles information under its own privacy practices." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground",
					children: "Contact the Trust"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"To ask about a message you sent, or request correction or removal of details the Trust received, write to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-[color:var(--forest)] underline",
						href: `mailto:${TRUST_EMAIL}`,
						children: TRUST_EMAIL
					}),
					"."
				] })
			]
		})
	})
})] });
//#endregion
export { SplitComponent as component };
