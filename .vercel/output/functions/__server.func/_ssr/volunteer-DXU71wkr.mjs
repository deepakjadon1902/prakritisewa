import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { y as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as openTrustWhatsApp } from "./whatsapp-CpCB7gVD.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/volunteer-DXU71wkr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(80),
	email: stringType().trim().email("Enter a valid email").max(255),
	phone: stringType().trim().min(7, "Enter a valid phone").max(20),
	city: stringType().trim().min(2).max(80),
	occupation: stringType().trim().max(80).optional().or(literalType("")),
	availability: stringType().min(1, "Pick your availability"),
	interest: stringType().min(1, "Pick an area of interest"),
	why: stringType().trim().min(10, "Tell us a little more").max(500)
});
function VolunteerPage() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse(Object.fromEntries(fd));
		if (!parsed.success) {
			const errs = {};
			for (const issue of parsed.error.issues) errs[issue.path[0]] = issue.message;
			setErrors(errs);
			return;
		}
		setErrors({});
		const data = parsed.data;
		openTrustWhatsApp([
			"Volunteer Application - Vriksh Rakshak Dal Sewa Trust",
			"",
			`Name: ${data.name}`,
			`Email: ${data.email}`,
			`Phone: ${data.phone}`,
			`City: ${data.city}`,
			`Occupation: ${data.occupation || "Not provided"}`,
			`Availability: ${data.availability}`,
			`Area of interest: ${data.interest}`,
			"",
			`Why I want to join: ${data.why}`
		]);
		setSubmitted(true);
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Volunteer",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Become part of the green mission." }),
		sub: "Join tree plantation, tree protection, awareness programs, youth participation, and community green initiatives."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			size: "sm",
			children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-lg border border-border bg-card p-6 text-center shadow-soft sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "mx-auto size-12 text-[color:var(--leaf)]",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl font-semibold",
						children: "Thank you for joining."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "WhatsApp has opened with your application details. Please send the message there to complete your volunteer request."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSubmitted(false),
						className: "mt-6 inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-sm font-semibold",
						children: "Register another"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "surface-card rounded-lg border border-border bg-card p-5 shadow-soft sm:p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								name: "name",
								error: errors.name,
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								error: errors.email,
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel",
								error: errors.phone,
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								name: "city",
								error: errors.city,
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Occupation",
								name: "occupation",
								error: errors.occupation
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Availability",
								name: "availability",
								error: errors.availability,
								options: [
									"Weekends",
									"Weekdays",
									"Campaign days",
									"Flexible"
								],
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Area of interest",
								name: "interest",
								error: errors.interest,
								options: [
									"Tree plantation",
									"Tree protection and care",
									"Awareness programs",
									"School and youth activities",
									"Community outreach"
								],
								required: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Why do you want to join?",
						name: "why",
						as: "textarea",
						error: errors.why,
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--forest)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: "Submit application"
					})
				]
			})
		})
	})] });
}
function Field({ label, name, type = "text", error, required, as }) {
	const cls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: as === "textarea" ? "sm:col-span-2 mt-5" : "",
		children: [
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
			as === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: name,
				name,
				rows: 4,
				maxLength: 500,
				className: cls
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: name,
				name,
				type,
				maxLength: 255,
				className: cls
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-destructive",
				children: error
			})
		]
	});
}
function SelectField({ label, name, options, error, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mb-1.5 block text-sm font-semibold",
			htmlFor: name,
			children: [
				label,
				" ",
				required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					children: "*"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			id: name,
			name,
			required,
			defaultValue: "",
			className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				disabled: true,
				children: "Select an option"
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option,
				children: option
			}, option))]
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
//#endregion
export { VolunteerPage as component };
