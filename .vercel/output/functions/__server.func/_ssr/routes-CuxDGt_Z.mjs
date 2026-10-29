import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn, t as Container } from "./Container-DV8ir_WD.mjs";
import { r as posts } from "./blog-Cf3as-ct.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight, f as Mail, v as Clock } from "../_libs/lucide-react.mjs";
import { a as SITE_HINDI_NAME } from "./site-B7hwvLmA.mjs";
import { t as SectionHeader } from "./SectionHeader-GH0Rrd3u.mjs";
import { t as Faq } from "./Faq-qLZuqVSl.mjs";
import { t as sourcedImages } from "./media-BTbmDvpt.mjs";
import { t as TrustIcon } from "./TrustIcon-BpnJqwt_.mjs";
import { n as FlipWords, r as VolunteerCta, t as DonateCta } from "./CtaBanners-Db2HQpuG.mjs";
import { t as MissionOverview } from "./MissionOverview-XBIKG6Zi.mjs";
import { t as WhyTrees } from "./WhyTrees-DaXFG8BK.mjs";
import { t as Process } from "./Process-BMAxTips.mjs";
import { n as useLanguage } from "./language-DGu6HuW-.mjs";
import { t as hero_tree_optimized_default } from "./hero-tree-optimized-Bg2mM-BG.mjs";
import { t as ImpactCounter } from "./ImpactCounter-BRdKkUYm.mjs";
import { t as OurWork } from "./OurWork-DJwI80qj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CuxDGt_Z.js
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const { t, lang } = useLanguage();
	const heroWords = lang === "hi" ? [
		"प्रकृति",
		"भविष्य",
		"हरियाली"
	] : [
		"Trees",
		"Nature",
		"the Future"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_tree_optimized_default,
				alt: "A healthy tree canopy representing environmental protection",
				width: 1440,
				height: 960,
				fetchPriority: "high",
				decoding: "async",
				className: "absolute inset-0 -z-10 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				poster: hero_tree_optimized_default,
				"aria-hidden": "true",
				tabIndex: -1,
				className: "absolute inset-0 -z-10 size-full object-cover brightness-[1.32] motion-reduce:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/hero-reel.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "relative flex min-h-[76svh] flex-col justify-center py-20 text-white sm:min-h-[82svh] sm:py-24 md:min-h-[min(850px,88svh)] md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: false,
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
								name: "planting",
								className: "size-4"
							}),
							" ",
							t("hero_eyebrow")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: false,
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .05
						},
						"aria-label": lang === "hi" ? "पेड़ों की रक्षा करें, प्रकृति, भविष्य और हरियाली के लिए।" : "Protect trees, nature, and tomorrow.",
						className: "max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.07] tracking-tight sm:text-6xl md:text-7xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: lang === "hi" ? "पेड़ों की रक्षा करें, " : "Protect "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
								words: heroWords,
								duration: 3e3,
								className: `font-display font-semibold ${lang === "hi" ? "min-w-[5em] text-[color:var(--sun)]" : "min-w-[10ch] text-[color:var(--sun)]"}`
							}),
							lang === "hi" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: " के लिए"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: false,
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .12
						},
						className: "mt-4 text-lg font-medium text-white/90",
						children: SITE_HINDI_NAME
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: false,
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "mt-6 max-w-2xl text-pretty text-base leading-7 text-white/88 sm:text-lg sm:leading-8 md:text-xl",
						children: t("hero_sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: false,
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .25
						},
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/volunteer",
								className: "group inline-flex items-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
									name: "community",
									className: "size-4"
								}), t("cta_volunteer")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mission",
								className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20",
								children: "Join Our Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "group inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "size-4",
										"aria-hidden": "true"
									}),
									"Contact Us",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4 transition-transform group-hover:translate-x-0.5",
										"aria-hidden": "true"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: false,
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .6
						},
						className: "mt-12 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/15 pt-6 text-white/85 sm:grid-cols-3",
						children: [
							{
								n: "Registered",
								l: "Public Charitable Trust"
							},
							{
								n: "PAN",
								l: "AAETV7094D"
							},
							{
								n: "Vrindavan",
								l: "Mathura, Uttar Pradesh"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "last:col-span-2 sm:last:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold sm:text-3xl",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/70 sm:text-sm",
								children: s.l
							})]
						}, s.l))
					})
				]
			})
		]
	});
}
function ImageGallery({ images, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:h-[23rem] lg:max-w-6xl lg:gap-3", className),
		children: images.slice(0, 5).map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
			initial: false,
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-40px"
			},
			transition: {
				duration: .45,
				delay: index * .05
			},
			className: "gallery-expanding-panel group relative aspect-[9/14] min-w-0 overflow-hidden rounded-lg border border-border bg-muted shadow-soft transition-[flex-grow,box-shadow,border-color] duration-500 ease-out hover:shadow-lift lg:aspect-auto lg:h-full lg:flex-1 lg:hover:flex-[3]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "absolute inset-0 scale-110 bg-cover bg-center opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60",
					style: { backgroundImage: `url("${image.src}")` }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image.src,
					alt: image.alt,
					width: image.width,
					height: image.height,
					loading: "lazy",
					decoding: "async",
					className: "relative size-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-3 pt-10 text-[11px] font-medium leading-4 text-white opacity-100 transition-opacity duration-300 sm:text-xs lg:opacity-0 lg:group-hover:opacity-100",
					children: image.credit
				})
			]
		}, image.src))
	});
}
function GalleryPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				align: "left",
				eyebrow: "Gallery",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
						words: [
							"Tree rescue",
							"Sapling care",
							"Field work"
						],
						className: "min-w-[12ch] font-semibold text-[color:var(--forest)]"
					}),
					" ",
					"work, shown clearly."
				] }),
				sub: "Field photos from wall rescue, roadside rescue, and replanting campaigns."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/gallery",
				className: "group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5",
				children: ["View gallery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-4 transition-transform group-hover:translate-x-0.5",
					"aria-hidden": "true"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageGallery, {
			images: sourcedImages,
			className: "mt-10"
		})] })
	});
}
var points = [
	"Dedicated environmental organization",
	"Local community-based work",
	"Focus on long-term tree survival",
	"Transparent charitable activities",
	"Volunteer-driven green initiatives",
	"Legally established Public Charitable Trust"
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/45 py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				align: "left",
				eyebrow: "Why Choose Us",
				title: "A legally established trust with a practical green mission.",
				sub: "The work is local, transparent, and focused on protecting trees after plantation."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border border-y border-border",
				children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 py-5 text-base font-semibold leading-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-3 h-px w-8 shrink-0 bg-[color:var(--forest)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
				}, point))
			})]
		}) })
	});
}
function BlogPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				align: "left",
				eyebrow: "Resources",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Source-linked stories for",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
						words: [
							"green action",
							"tree care",
							"community care"
						],
						className: "min-w-[14ch] font-semibold text-[color:var(--forest)]"
					})
				] }),
				sub: "Environmental reading that supports public awareness, tree protection, and community participation."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blogs",
				className: "group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft",
				children: ["All resources", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-4 transition-transform group-hover:translate-x-0.5",
					"aria-hidden": "true"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 md:grid-cols-3",
			children: posts.slice(0, 3).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: false,
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .5,
					delay: i * .06
				},
				className: "surface-card group overflow-hidden rounded-lg border border-border bg-card shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[16/10] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.title,
						loading: "lazy",
						decoding: "async",
						referrerPolicy: "no-referrer",
						className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-2.5 py-1 font-medium text-[color:var(--forest)]",
								children: p.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "size-3",
									"aria-hidden": "true"
								}), p.readingTime]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold leading-snug",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: p.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blogs/$slug",
							params: { slug: p.slug },
							className: "mt-4 inline-flex text-sm font-semibold text-[color:var(--forest)]",
							children: "Read more"
						})
					]
				})]
			}, p.slug))
		})] })
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionOverview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactCounter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurWork, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyTrees, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateCta, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerCta, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, { limit: 5 })
	] });
}
//#endregion
export { HomePage as component };
