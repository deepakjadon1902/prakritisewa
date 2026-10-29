import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { c as Phone, d as MapPin, f as Mail, h as Facebook, n as UserRound, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as SITE_HINDI_NAME, f as TRUST_PHONE, l as TRUST_EMAIL, n as FACEBOOK_PROFILE, o as SITE_NAME, p as TRUST_PHONE_E164, u as TRUST_LOCATION } from "./site-B7hwvLmA.mjs";
import { t as openTrustWhatsApp } from "./whatsapp-CpCB7gVD.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BjZjqKYF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2).max(80),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().min(7).max(20),
	subject: stringType().trim().min(3).max(120),
	message: stringType().trim().min(10).max(1e3)
});
function ContactPage() {
	const [ok, setOk] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const onSubmit = (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
		if (!parsed.success) {
			const errs = {};
			for (const i of parsed.error.issues) errs[i.path[0]] = i.message;
			setErrors(errs);
			return;
		}
		setErrors({});
		const data = parsed.data;
		openTrustWhatsApp([
			"Contact Request - Vriksh Rakshak Dal Sewa Trust",
			"",
			`Name: ${data.name}`,
			`Email: ${data.email}`,
			`Phone: ${data.phone}`,
			`Subject: ${data.subject}`,
			"",
			`Message: ${data.message}`
		]);
		setOk(true);
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Connect with ",
			SITE_NAME,
			"."
		] }),
		sub: "For volunteering, partnerships, tree plantation campaigns, awareness programs, and community green initiatives."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "divide-y divide-border border-y border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
						icon: UserRound,
						title: "Contact Person",
						value: "Ganesh Baghel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
						icon: Mail,
						title: "Email",
						value: TRUST_EMAIL,
						href: `mailto:${TRUST_EMAIL}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
						icon: Phone,
						title: "Help Number",
						value: TRUST_PHONE,
						href: `tel:+${TRUST_PHONE_E164}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
						icon: Phone,
						title: "WhatsApp",
						value: TRUST_PHONE,
						href: `https://wa.me/${TRUST_PHONE_E164}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
						icon: MapPin,
						title: "Location",
						value: TRUST_LOCATION
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
						icon: Facebook,
						title: "Facebook Profile",
						value: FACEBOOK_PROFILE,
						href: FACEBOOK_PROFILE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
						icon: Facebook,
						title: "Facebook Page",
						value: `${SITE_HINDI_NAME} | Page ID: 802366332949560`
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-card mt-8 overflow-hidden rounded-lg border border-border bg-card shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[16/10] w-full bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Vriksh Rakshak Dal Sewa Trust location",
						src: "https://www.openstreetmap.org/export/embed.html?bbox=77.64%2C27.54%2C77.78%2C27.62&layer=mapnik",
						className: "size-full border-0",
						loading: "lazy"
					})
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-card rounded-lg border border-border bg-card p-6 shadow-lift sm:p-10",
				children: ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "mx-auto size-12 text-[color:var(--leaf)]",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl font-semibold",
							children: "Message received."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "WhatsApp has opened with your message details. Please send the message there to complete your request."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOk(false),
							className: "mt-6 inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-sm font-semibold",
							children: "Send another"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							name: "name",
							label: "Name",
							error: errors.name,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							name: "email",
							type: "email",
							label: "Email",
							error: errors.email,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							name: "phone",
							type: "tel",
							label: "Phone",
							error: errors.phone,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							name: "subject",
							label: "Subject",
							error: errors.subject,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "message",
								className: "mb-1.5 block text-sm font-semibold",
								children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 6,
								maxLength: 1e3,
								className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex items-center justify-center rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: "Send message"
						})
					]
				})
			})]
		}) })
	})] });
}
function InfoRow({ icon: Icon, title, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 py-5 sm:grid-cols-[44px_150px_1fr] sm:items-start",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid size-10 place-items-center rounded-md bg-secondary text-[color:var(--forest)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
				children: title
			}),
			href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				className: "break-words font-medium hover:underline",
				children: value
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "break-words font-medium",
				children: value
			})
		]
	});
}
function TextField({ name, label, type = "text", error, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: name,
			className: "mb-1.5 block text-sm font-semibold",
			children: [
				label,
				" ",
				required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					children: "*"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			maxLength: 255,
			className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
//#endregion
export { ContactPage as component };
