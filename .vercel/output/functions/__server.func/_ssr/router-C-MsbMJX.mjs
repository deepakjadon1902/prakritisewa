import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn, t as Container } from "./Container-DV8ir_WD.mjs";
import { r as posts } from "./blog-Cf3as-ct.mjs";
import { o as MotionConfig } from "../_libs/framer-motion.mjs";
import { O as redirect, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Download, c as Phone, d as MapPin, f as Mail, h as Facebook, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { a as SITE_HINDI_NAME, c as SITE_URL, f as TRUST_PHONE, h as defaultOgImage, i as SITE_DESCRIPTION, l as TRUST_EMAIL, m as absoluteUrl, n as FACEBOOK_PROFILE, o as SITE_NAME, p as TRUST_PHONE_E164, r as LOGO_IMAGE, s as SITE_TITLE, t as APP_ICON_192, u as TRUST_LOCATION } from "./site-B7hwvLmA.mjs";
import { t as Route$18 } from "./blogs._slug-C0MIXydF.mjs";
import { t as faqs } from "./faq-CUpCKrc0.mjs";
import { t as TrustIcon } from "./TrustIcon-BpnJqwt_.mjs";
import { n as useLanguage, t as LanguageProvider } from "./language-DGu6HuW-.mjs";
import { t as hero_tree_optimized_default } from "./hero-tree-optimized-Bg2mM-BG.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C-MsbMJX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-IWmdZNrQ.css";
var nav = [
	{
		to: "/mission",
		key: "nav_mission"
	},
	{
		to: "/tree-protection",
		key: "nav_protection"
	},
	{
		to: "/gallery",
		key: "nav_gallery"
	},
	{
		to: "/contact",
		key: "nav_contact"
	}
];
function Header() {
	const { t, lang } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	const wideLayout = lang === "hi";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header-surface sticky top-0 z-50 -mb-16 border-b md:-mb-[4.75rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			size: "lg",
			className: `grid h-16 max-w-none grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-5 lg:px-6 md:h-[4.75rem] ${wideLayout ? "2xl:grid-cols-[minmax(220px,1fr)_auto_minmax(190px,1fr)]" : "xl:grid-cols-[minmax(220px,1fr)_auto_minmax(190px,1fr)]"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					"aria-label": `${SITE_NAME} home`,
					className: "group col-start-1 flex min-w-0 items-center gap-3 justify-self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: APP_ICON_192,
						alt: "",
						width: 48,
						height: 48,
						className: "size-12 shrink-0 rounded-full object-cover shadow-soft ring-1 ring-border transition-transform group-hover:scale-[1.03]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden max-w-[225px] text-pretty font-display text-base font-semibold leading-[1.08] tracking-normal text-black md:inline sm:max-w-[255px] sm:text-lg",
						children: SITE_NAME
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: `col-start-2 hidden items-center justify-center gap-1 justify-self-center ${wideLayout ? "2xl:flex" : "xl:flex"}`,
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-black transition-colors hover:bg-secondary hover:text-black 2xl:px-3",
						activeProps: { className: "whitespace-nowrap rounded-full bg-secondary px-2.5 py-2 text-sm font-medium text-black shadow-sm 2xl:px-3" },
						children: t(item.key)
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `col-start-2 flex items-center justify-end gap-2 justify-self-end ${wideLayout ? "2xl:col-start-3" : "xl:col-start-3"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/donate",
							className: `hidden min-h-11 items-center justify-center whitespace-nowrap rounded-full border border-black/15 bg-background/80 px-4 py-2.5 text-sm font-bold text-black shadow-soft transition-colors hover:bg-secondary ${wideLayout ? "2xl:inline-flex" : "xl:inline-flex"}`,
							children: t("cta_donate")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/volunteer",
							className: "hidden min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full gradient-sun px-5 py-2.5 text-sm font-bold leading-tight text-black shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex xl:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
								name: "community",
								className: "size-4"
							}), t("cta_volunteer")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							className: `grid size-11 place-items-center rounded-full border border-black/15 bg-white/85 text-black shadow-soft ${wideLayout ? "2xl:hidden" : "xl:hidden"}`,
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							"aria-controls": "primary-mobile-navigation",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5 text-black" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5 text-black" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "primary-mobile-navigation",
			role: "navigation",
			"aria-label": "Mobile primary",
			className: cn(`overflow-x-hidden border-t border-border bg-background/95 backdrop-blur-2xl transition-[max-height] duration-300 ${wideLayout ? "2xl:hidden" : "xl:hidden"}`, open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-y-hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-2 py-4",
				children: [
					nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-xl px-4 py-3 text-sm font-semibold text-black hover:bg-secondary",
						activeProps: { className: "rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-black" },
						children: t(item.key)
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/donate",
						onClick: () => setOpen(false),
						className: "rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-bold text-black",
						children: t("cta_donate")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/volunteer",
						onClick: () => setOpen(false),
						className: "mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full gradient-sun px-5 py-3 text-sm font-bold text-black shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
							name: "community",
							className: "size-4"
						}), t("cta_volunteer")]
					})
				]
			})
		})]
	});
}
function Footer() {
	const { t } = useLanguage();
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-[color:var(--forest)] text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid grid-cols-2 gap-x-8 gap-y-7 py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.35fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 font-display text-base font-semibold leading-tight sm:text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: APP_ICON_192,
								alt: "",
								width: 44,
								height: 44,
								className: "size-11 rounded-full object-cover ring-1 ring-white/20"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "max-w-[18rem]",
								children: SITE_NAME
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-white/80",
							children: SITE_HINDI_NAME
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 max-w-sm text-xs leading-5 text-white/70",
							children: t("footer_tag")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex items-start gap-2 text-xs leading-5 text-white/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "mt-0.5 size-4 shrink-0",
								"aria-hidden": "true"
							}), TRUST_LOCATION]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: FACEBOOK_PROFILE,
								"aria-label": "Facebook profile",
								className: "grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:size-9",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
									className: "size-4",
									"aria-hidden": "true"
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Trust",
					links: [
						{
							to: "/mission",
							label: "About Us"
						},
						{
							to: "/gallery",
							label: "Gallery"
						},
						{
							to: "/stories",
							label: "Stories"
						},
						{
							to: "/contact",
							label: "Contact"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Services",
					links: [
						{
							to: "/tree-plantation",
							label: "Tree Plantation"
						},
						{
							to: "/tree-protection",
							label: "Tree Care & Impact"
						},
						{
							to: "/tree-relocation",
							label: "Tree Relocation"
						},
						{
							to: "/volunteer",
							label: "Volunteer"
						},
						{
							to: "/blogs",
							label: "Resources"
						},
						{
							to: "/donate",
							label: "Donate"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: t("newsletter_title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs leading-5 text-white/70",
							children: t("newsletter_sub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${TRUST_EMAIL}`,
							className: "mt-3 inline-flex min-h-11 max-w-full items-center gap-2 rounded-full bg-[color:var(--sun)] px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 sm:text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-4",
								"aria-hidden": "true"
							}), TRUST_EMAIL]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+${TRUST_PHONE_E164}`,
							className: "mt-2 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), TRUST_PHONE]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col items-start justify-between gap-2.5 py-3 text-xs text-white/70 sm:flex-row sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						year,
						" ",
						SITE_NAME,
						". ",
						t("footer_rights")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden sm:block",
						children: "Nature protection is our collective responsibility."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-white",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "hover:text-white",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "hover:text-white",
								children: "FAQs"
							})
						]
					})
				]
			})
		})]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display text-base font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 space-y-1.5 text-[13px]",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			className: "text-white/70 transition-colors hover:text-white",
			children: l.label
		}) }, l.to))
	})] });
}
function InstallPrompt() {
	const [installEvent, setInstallEvent] = (0, import_react.useState)(null);
	const [dismissed, setDismissed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onBeforeInstallPrompt = (event) => {
			event.preventDefault();
			setInstallEvent(event);
		};
		window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
		return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
	}, []);
	if (!installEvent || dismissed) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-md rounded-lg border border-border bg-card p-4 shadow-lift sm:left-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: APP_ICON_192,
					alt: "",
					width: 44,
					height: 44,
					className: "size-11 shrink-0 rounded-full object-cover ring-1 ring-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: ["Install ", SITE_NAME]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Add the app for faster access and offline reading."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "mt-3 inline-flex min-h-11 items-center rounded-full bg-[color:var(--forest)] px-4 py-2 text-sm font-semibold text-primary-foreground",
							onClick: async () => {
								await installEvent.prompt();
								await installEvent.userChoice;
								setDismissed(true);
								setInstallEvent(null);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "mr-2 size-4",
								"aria-hidden": "true"
							}), "Install"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Dismiss install prompt",
					className: "grid size-11 shrink-0 place-items-center rounded-full hover:bg-accent",
					onClick: () => setDismissed(true),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						"aria-hidden": "true"
					})
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[clamp(5rem,24vw,8rem)] leading-none text-gradient-forest",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-2xl font-semibold",
					children: "This trail ends here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you are looking for has been moved or never existed. Head back to the mission."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-primary-foreground",
						children: "Go home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex min-h-11 items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold",
						children: "Contact us"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold",
					children: "This page did not load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-semibold text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var ORG_JSONLD = {
	"@context": "https://schema.org",
	"@type": "NGO",
	name: SITE_NAME,
	alternateName: SITE_HINDI_NAME,
	url: absoluteUrl("/"),
	logo: absoluteUrl(LOGO_IMAGE),
	image: defaultOgImage,
	description: SITE_DESCRIPTION,
	email: TRUST_EMAIL,
	telephone: TRUST_PHONE,
	address: {
		"@type": "PostalAddress",
		addressLocality: "Vrindavan",
		addressRegion: "Uttar Pradesh",
		addressCountry: "IN"
	},
	sameAs: ["https://www.facebook.com/ganesh.baghel.583"]
};
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SITE_TITLE },
			{
				name: "description",
				content: SITE_DESCRIPTION
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "author",
				content: SITE_NAME
			},
			{
				name: "theme-color",
				content: "#143d2d"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: SITE_TITLE
			},
			{
				property: "og:description",
				content: SITE_DESCRIPTION
			},
			{
				property: "og:url",
				content: absoluteUrl("/")
			},
			{
				property: "og:image",
				content: defaultOgImage
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SITE_TITLE
			},
			{
				name: "twitter:description",
				content: SITE_DESCRIPTION
			},
			{
				name: "twitter:image",
				content: defaultOgImage
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "canonical",
				href: absoluteUrl("/")
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			},
			{
				rel: "preload",
				as: "image",
				href: hero_tree_optimized_default,
				fetchPriority: "high"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "48x48",
				href: "/favicon-48.png"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(ORG_JSONLD)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-IN",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-[color:var(--forest)]",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	(0, import_react.useEffect)(() => {
		if (!("serviceWorker" in navigator)) return;
		const registerServiceWorker = () => {
			navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((registration) => {
				registration.waiting?.postMessage({ type: "SKIP_WAITING" });
			}).catch((error) => {
				console.error("Service worker registration failed", error);
			});
		};
		if (document.readyState === "complete") {
			registerServiceWorker();
			return;
		}
		window.addEventListener("load", registerServiceWorker, { once: true });
		return () => window.removeEventListener("load", registerServiceWorker);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionConfig, {
		reducedMotion: "user",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
			client: queryClient,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-dvh flex-col bg-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#main",
						className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[color:var(--forest)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
						children: "Skip to content"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "main",
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallPrompt, {})
				]
			}) })
		})
	});
}
var $$splitComponentImporter$14 = () => import("./volunteer-DXU71wkr.mjs");
var Route$16 = createFileRoute("/volunteer")({
	head: () => ({
		meta: [
			{ title: "Become a Volunteer | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Become a volunteer for tree plantation, tree protection, environmental awareness, and green initiatives in Vrindavan and Braj region."
			},
			{
				property: "og:url",
				content: absoluteUrl("/volunteer")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/volunteer")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./tree-relocation-Cpjnd8Ci.mjs");
var Route$15 = createFileRoute("/tree-relocation")({
	head: () => ({
		meta: [
			{ title: "Tree Protection & Care | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Tree care, monitoring, watering, protection, and maintenance of planted saplings by Vriksh Rakshak Dal Sewa Trust."
			},
			{
				property: "og:url",
				content: absoluteUrl("/tree-relocation")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/tree-relocation")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./tree-protection-BCgYQ06E.mjs");
var Route$14 = createFileRoute("/tree-protection")({
	head: () => ({
		meta: [
			{ title: "Tree Care & Community Impact | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Tree plantation, sapling care, ongoing protection, community participation, and environmental work by Vriksh Rakshak Dal Sewa Trust in Vrindavan and nearby Braj areas."
			},
			{
				property: "og:url",
				content: absoluteUrl("/tree-protection")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/tree-protection")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./tree-plantation-CJQ_2d-6.mjs");
var Route$13 = createFileRoute("/tree-plantation")({
	head: () => ({
		meta: [
			{ title: "Tree Plantation Campaigns | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Tree plantation campaigns in public places, schools, temples, ashrams, and community areas across Vrindavan and the Braj region."
			},
			{
				property: "og:url",
				content: absoluteUrl("/tree-plantation")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/tree-plantation")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./terms-BDeUeM6J.mjs");
var Route$12 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: `Terms & Conditions | ${SITE_NAME}` },
			{
				name: "description",
				content: `Terms governing use of the ${SITE_NAME} website and volunteer participation.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/terms")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/terms")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./stories-Djf6SJ5z.mjs");
var Route$11 = createFileRoute("/stories")({
	head: () => ({
		meta: [
			{ title: "Green Stories | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Source-linked green stories from India that inspire tree plantation, protection, and community participation."
			},
			{
				property: "og:url",
				content: absoluteUrl("/stories")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/stories")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var Route$10 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		"<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
		"<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
		...[
			{
				path: "/",
				lastmod: "2026-07-12",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/mission",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/tree-protection",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/tree-relocation",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/tree-plantation",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/gallery",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/stories",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/volunteer",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/donate",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/blogs",
				lastmod: "2026-07-12",
				changefreq: "weekly",
				priority: "0.8"
			},
			...posts.map((post) => ({
				path: `/blogs/${post.slug}`,
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.7"
			})),
			{
				path: "/faq",
				lastmod: "2026-07-12",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				lastmod: "2026-07-12",
				changefreq: "yearly",
				priority: "0.6"
			},
			{
				path: "/privacy",
				lastmod: "2026-07-12",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/terms",
				lastmod: "2026-07-12",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			"  <url>",
			`    <loc>${SITE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			"  </url>"
		].filter(Boolean).join("\n")),
		"</urlset>"
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$8 = () => import("./privacy-nnK3ryXu.mjs");
var Route$9 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: `Privacy Policy | ${SITE_NAME}` },
			{
				name: "description",
				content: `How ${SITE_NAME} collects, uses, and protects your personal information.`
			},
			{
				property: "og:url",
				content: absoluteUrl("/privacy")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/privacy")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./mission-E_8jjCIO.mjs");
var Route$8 = createFileRoute("/mission")({
	head: () => ({
		meta: [
			{ title: "Mission & Legal Information | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Learn about the mission, vision, legal status, trustees, and objectives of Vriksh Rakshak Dal Sewa Trust."
			},
			{
				property: "og:title",
				content: "Mission - Vriksh Rakshak Dal Sewa Trust"
			},
			{
				property: "og:url",
				content: absoluteUrl("/mission")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/mission")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var Route$7 = createFileRoute("/impact")({ beforeLoad: () => {
	throw redirect({
		to: "/tree-protection",
		statusCode: 301,
		replace: true
	});
} });
var $$splitComponentImporter$6 = () => import("./gallery-DVArxKek.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "A source-linked gallery of trees, forests, saplings, plantation work, and environmental conservation imagery."
			},
			{
				property: "og:url",
				content: absoluteUrl("/gallery")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/gallery")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./faq-DJ7UBuq1.mjs");
var Route$5 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: `FAQs | ${SITE_NAME}` },
			{
				name: "description",
				content: "Answers to common questions about Vriksh Rakshak Dal Sewa Trust, volunteering, legal documents, and tree protection work."
			},
			{
				property: "og:url",
				content: absoluteUrl("/faq")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/faq")
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((faq) => ({
					"@type": "Question",
					name: faq.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: faq.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./donation-confirmation-BF81-dS6.mjs");
var Route$4 = createFileRoute("/donation-confirmation")({
	head: () => ({
		meta: [
			{ title: `Support Confirmation | ${SITE_NAME}` },
			{
				name: "description",
				content: `Contact ${SITE_NAME} to confirm donor, supporter, and campaign participation details.`
			},
			{
				name: "robots",
				content: "noindex, follow"
			},
			{
				property: "og:url",
				content: absoluteUrl("/donation-confirmation")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/donation-confirmation")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./donate-BXvNQQu_.mjs");
var Route$3 = createFileRoute("/donate")({
	head: () => ({
		meta: [
			{ title: `Donate & Support | ${SITE_NAME}` },
			{
				name: "description",
				content: "Donate, volunteer, or support Vriksh Rakshak Dal Sewa Trust's tree plantation, tree protection, and environmental awareness campaigns."
			},
			{
				property: "og:url",
				content: absoluteUrl("/donate")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/donate")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BjZjqKYF.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Contact Vriksh Rakshak Dal Sewa Trust in Vrindavan, Mathura for tree plantation, volunteering, public awareness, and green collaborations."
			},
			{
				property: "og:url",
				content: absoluteUrl("/contact")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/contact")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blogs-Be0uXb3B.mjs");
var Route$1 = createFileRoute("/blogs")({
	head: () => ({
		meta: [
			{ title: "Environmental Resources | Vriksh Rakshak Dal Sewa Trust" },
			{
				name: "description",
				content: "Read source-linked environmental stories and resources about tree plantation, conservation, and community green action in India."
			},
			{
				property: "og:url",
				content: absoluteUrl("/blogs")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/blogs")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-CuxDGt_Z.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: SITE_TITLE },
			{
				name: "description",
				content: SITE_DESCRIPTION
			},
			{
				property: "og:title",
				content: SITE_TITLE
			},
			{
				property: "og:description",
				content: SITE_DESCRIPTION
			},
			{
				property: "og:url",
				content: absoluteUrl("/")
			}
		],
		links: [{
			rel: "canonical",
			href: absoluteUrl("/")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var VolunteerRoute = Route$16.update({
	id: "/volunteer",
	path: "/volunteer",
	getParentRoute: () => Route$17
});
var TreeRelocationRoute = Route$15.update({
	id: "/tree-relocation",
	path: "/tree-relocation",
	getParentRoute: () => Route$17
});
var TreeProtectionRoute = Route$14.update({
	id: "/tree-protection",
	path: "/tree-protection",
	getParentRoute: () => Route$17
});
var TreePlantationRoute = Route$13.update({
	id: "/tree-plantation",
	path: "/tree-plantation",
	getParentRoute: () => Route$17
});
var TermsRoute = Route$12.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$17
});
var StoriesRoute = Route$11.update({
	id: "/stories",
	path: "/stories",
	getParentRoute: () => Route$17
});
var SitemapDotxmlRoute = Route$10.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$17
});
var PrivacyRoute = Route$9.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$17
});
var MissionRoute = Route$8.update({
	id: "/mission",
	path: "/mission",
	getParentRoute: () => Route$17
});
var ImpactRoute = Route$7.update({
	id: "/impact",
	path: "/impact",
	getParentRoute: () => Route$17
});
var GalleryRoute = Route$6.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$17
});
var FaqRoute = Route$5.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$17
});
var DonationConfirmationRoute = Route$4.update({
	id: "/donation-confirmation",
	path: "/donation-confirmation",
	getParentRoute: () => Route$17
});
var DonateRoute = Route$3.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$17
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$17
});
var BlogsRoute = Route$1.update({
	id: "/blogs",
	path: "/blogs",
	getParentRoute: () => Route$17
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var BlogsRouteChildren = { BlogsSlugRoute: Route$18.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	BlogsRoute: BlogsRoute._addFileChildren(BlogsRouteChildren),
	ContactRoute,
	DonateRoute,
	DonationConfirmationRoute,
	FaqRoute,
	GalleryRoute,
	ImpactRoute,
	MissionRoute,
	PrivacyRoute,
	SitemapDotxmlRoute,
	StoriesRoute,
	TermsRoute,
	TreePlantationRoute,
	TreeProtectionRoute,
	TreeRelocationRoute,
	VolunteerRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
