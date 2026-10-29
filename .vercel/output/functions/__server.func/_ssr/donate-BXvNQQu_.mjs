import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Container } from "./Container-DV8ir_WD.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight, c as Phone, f as Mail, i as ShieldCheck, l as MessageCircle, m as HeartHandshake, o as QrCode, p as IndianRupee, r as Sprout } from "../_libs/lucide-react.mjs";
import { f as TRUST_PHONE, l as TRUST_EMAIL, o as SITE_NAME, p as TRUST_PHONE_E164 } from "./site-B7hwvLmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-BXvNQQu_.js
var import_jsx_runtime = require_jsx_runtime();
var supportWays = [
	{
		title: "Tree plantation",
		desc: "Help arrange saplings, soil preparation, transport, and community plantation drives."
	},
	{
		title: "Tree protection",
		desc: "Support guards, watering, mulching, rescue, relocation, and long-term tree care."
	},
	{
		title: "Awareness campaigns",
		desc: "Enable school, temple, ashram, campus, and community green initiatives."
	}
];
var donationAmounts = [
	{
		amount: "501",
		label: "Sapling care",
		desc: "Support watering and early-stage maintenance."
	},
	{
		amount: "1,100",
		label: "Plantation drive",
		desc: "Contribute toward saplings and campaign logistics."
	},
	{
		amount: "5,100",
		label: "Tree protection",
		desc: "Help protect and monitor existing trees."
	}
];
var upiId = "vrikshrakshakdal@ibl";
var upiName = "Vriksh Rakshak Dal Sewa Trust";
var upiPayUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(upiName)}&cu=INR`;
var donationMessage = [
	`Donation Confirmation - ${SITE_NAME}`,
	"",
	`I donated to UPI ID: ${upiId}`,
	"Please confirm my donation for the Trust's tree plantation and protection work."
].join("\n");
var donationChatUrl = `https://wa.me/${TRUST_PHONE_E164}?text=${encodeURIComponent(donationMessage)}`;
var donationQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=360x360&margin=18&data=${encodeURIComponent(upiPayUrl)}`;
function DonatePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Donate & Support",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Support tree plantation, protection, and a greener Braj region." }),
		sub: "Your contribution helps the Trust plant, protect, water, and care for trees while building public participation for nature."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-full bg-secondary text-[color:var(--forest)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, {
									className: "size-6",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
								children: "Donation desk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: "Give directly to the Trust."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-7 text-muted-foreground",
							children: "Scan the QR code or pay directly to the official UPI ID below. After payment, share the transaction screenshot with the Trust team for confirmation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-lg border border-[color:var(--forest)]/25 bg-secondary p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
									children: "Official UPI ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 break-all font-display text-2xl font-semibold text-foreground",
									children: upiId
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: upiName
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: upiPayUrl,
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Pay with UPI"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: donationChatUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Send confirmation"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 rounded-lg bg-secondary p-4 text-sm sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+${TRUST_PHONE_E164}`,
								className: "flex items-center gap-2 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4 text-[color:var(--forest)]",
									"aria-hidden": "true"
								}), TRUST_PHONE]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${TRUST_EMAIL}`,
								className: "flex items-center gap-2 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4 text-[color:var(--forest)]",
									"aria-hidden": "true"
								}), TRUST_EMAIL]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-3",
					children: donationAmounts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "surface-card rounded-lg border border-border bg-card p-5 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[color:var(--forest)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, {
									className: "size-4",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-semibold",
									children: item.amount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-semibold",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: item.desc
							})
						]
					}, item.amount))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "surface-card rounded-2xl border border-border bg-card p-6 text-center shadow-lift sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid size-14 place-items-center rounded-full bg-secondary text-[color:var(--forest)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {
								className: "size-7",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl font-semibold",
							children: "Scan QR to donate by UPI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: [
								"Opens UPI payment to ",
								upiId,
								". Enter any amount you wish to contribute."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-6 max-w-[280px] rounded-xl border border-border bg-white p-4 shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: donationQrUrl,
								alt: `UPI QR code for ${upiId}`,
								width: 280,
								height: 280,
								loading: "lazy",
								className: "aspect-square w-full rounded-lg"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 break-all rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-[color:var(--forest)]",
							children: upiId
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
						children: "Where support goes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-semibold",
						children: "Every contribution has field value."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-7 text-muted-foreground",
						children: "Donations support practical work: planting trees, protecting existing trees, and mobilising citizens for environmental conservation."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border border-y border-border",
					children: supportWays.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-3 py-6 md:grid-cols-[230px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-7 text-muted-foreground",
							children: item.desc
						})]
					}, item.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 rounded-lg bg-[color:var(--forest)] p-8 text-primary-foreground shadow-lift sm:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-[1fr_auto] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-white/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "size-5",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: "Safe donation process"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl font-semibold",
							children: "Donate by UPI, then share confirmation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-white/82",
							children: "After donation, send the transaction screenshot/details to the Trust so the team can acknowledge your support and share campaign updates."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/donation-confirmation",
						className: "inline-flex items-center justify-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5",
						children: ["Donation confirmation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/volunteer",
					className: "inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, {
						className: "mr-2 size-4",
						"aria-hidden": "true"
					}), "Register as a volunteer"]
				})
			})
		] })
	})] });
}
//#endregion
export { DonatePage as component };
