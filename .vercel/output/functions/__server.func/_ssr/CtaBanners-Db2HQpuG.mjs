import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn, t as Container } from "./Container-DV8ir_WD.mjs";
import { s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowRight, m as HeartHandshake } from "../_libs/lucide-react.mjs";
import { t as TrustIcon } from "./TrustIcon-BpnJqwt_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaBanners-Db2HQpuG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FlipWords = ({ words, duration = 3e3, className }) => {
	const [currentWord, setCurrentWord] = (0, import_react.useState)(words[0]);
	const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	const [hasMounted, setHasMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setHasMounted(true);
	}, []);
	const startAnimation = (0, import_react.useCallback)(() => {
		const word = words[words.indexOf(currentWord) + 1] || words[0];
		setCurrentWord(word);
		setIsAnimating(true);
	}, [currentWord, words]);
	(0, import_react.useEffect)(() => {
		if (isAnimating) return;
		const timeout = setTimeout(startAnimation, duration);
		return () => clearTimeout(timeout);
	}, [
		isAnimating,
		duration,
		startAnimation
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		initial: false,
		onExitComplete: () => {
			setIsAnimating(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: hasMounted ? {
				opacity: 0,
				y: 10
			} : false,
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10
			},
			exit: {
				opacity: 0,
				y: -40,
				x: 40,
				filter: "blur(8px)",
				scale: 2,
				position: "absolute"
			},
			className: cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className),
			children: currentWord.split(" ").map((word, wordIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				initial: hasMounted ? {
					opacity: 0,
					y: 10,
					filter: "blur(8px)"
				} : false,
				animate: {
					opacity: 1,
					y: 0,
					filter: "blur(0px)"
				},
				transition: {
					delay: wordIndex * .3,
					duration: .3
				},
				className: "inline-block whitespace-nowrap",
				children: [word.split("").map((letter, letterIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: hasMounted ? {
						opacity: 0,
						y: 10,
						filter: "blur(8px)"
					} : false,
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						delay: wordIndex * .3 + letterIndex * .05,
						duration: .2
					},
					className: "inline-block",
					children: letter
				}, word + letterIndex)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block",
					children: "\xA0"
				})]
			}, word + wordIndex))
		}, currentWord)
	});
};
var volunteers_planting_default = "/assets/volunteers-planting-CEdznnSr.jpg";
function DonateCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 rounded-lg bg-[color:var(--forest)] px-5 py-8 text-primary-foreground shadow-lift sm:gap-8 sm:px-8 sm:py-10 md:grid-cols-[1fr_auto] md:items-center md:px-12 md:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.14em] text-white/76",
						children: "Join Our Mission"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl",
						children: [
							"Join as a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
								words: [
									"volunteer",
									"supporter",
									"local partner"
								],
								className: "min-w-[13ch] font-semibold text-[color:var(--sun)]"
							}),
							" ",
							"and help build a greener future."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-7 text-white/80",
						children: "Contribute to tree plantation, tree care, public awareness, and community green initiatives."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3 md:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/volunteer",
					className: "inline-flex items-center gap-2 rounded-full gradient-sun px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustIcon, {
						name: "community",
						className: "size-4"
					}), "Become a Volunteer"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/donate",
					className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Support the Trust"]
				})]
			})]
		}) })
	});
}
function VolunteerCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card grid overflow-hidden rounded-lg border border-border bg-card shadow-soft lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-[280px] lg:min-h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: volunteers_planting_default,
					alt: "Volunteers planting a sapling together",
					loading: "lazy",
					decoding: "async",
					className: "absolute inset-0 size-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 sm:p-8 md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--forest)]",
						children: "Volunteer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl",
						children: [
							"One Tree. One Life. One",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipWords, {
								words: [
									"Green Future",
									"Living Earth",
									"Lasting Change"
								],
								className: "min-w-[14ch] font-semibold text-[color:var(--forest)]"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-7 text-muted-foreground",
						children: "Join plantation drives, tree protection work, awareness programs, and community green initiatives in Vrindavan, Mathura, and nearby Braj areas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/volunteer",
							className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: ["Join the mission", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-accent",
							children: "Contact the Trust"
						})]
					})
				]
			})]
		}) })
	});
}
//#endregion
export { FlipWords as n, VolunteerCta as r, DonateCta as t };
