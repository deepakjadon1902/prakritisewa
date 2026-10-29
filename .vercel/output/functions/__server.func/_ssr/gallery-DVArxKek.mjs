import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useScroll, n as useSpring, r as useTransform, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHero } from "./PageHero-erqYJeUl.mjs";
import { t as sourcedImages } from "./media-BTbmDvpt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DVArxKek.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function subscribeToViewport(callback) {
	window.addEventListener("resize", callback, { passive: true });
	return () => window.removeEventListener("resize", callback);
}
function getColumnCount() {
	return window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 4;
}
function getServerColumnCount() {
	return 4;
}
function ImageCard({ image, repeated }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
		"aria-hidden": repeated,
		className: "group relative h-52 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-forest/90 shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-[1.02] sm:h-64 md:h-[22rem] lg:h-[26rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image.src,
			alt: image.alt,
			width: image.width,
			height: image.height,
			loading: "lazy",
			decoding: "async",
			className: "size-full object-contain p-1 transition-opacity duration-300 group-hover:opacity-100"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-3 pb-3 pt-10 text-[11px] font-medium leading-4 text-white sm:text-xs",
			children: image.credit
		})]
	});
}
function ParallaxUnfurlingGallery({ images }) {
	const containerRef = (0, import_react.useRef)(null);
	const columnCount = (0, import_react.useSyncExternalStore)(subscribeToViewport, getColumnCount, getServerColumnCount);
	const reducedMotion = useReducedMotion();
	const columnImages = (0, import_react.useMemo)(() => Array.from({ length: columnCount }, (_, columnIndex) => {
		const items = images.filter((_, imageIndex) => imageIndex % columnCount === columnIndex);
		return [...items, ...items];
	}), [columnCount, images]);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20,
		mass: .5
	});
	const bannerWidth = useTransform(smoothProgress, [0, .15], reducedMotion ? ["100%", "100%"] : ["90%", "100%"]);
	const bannerHeight = useTransform(smoothProgress, [0, .15], reducedMotion ? ["100%", "100%"] : ["80%", "100%"]);
	const bannerRadius = useTransform(smoothProgress, [0, .15], reducedMotion ? ["0px", "0px"] : ["32px", "0px"]);
	const bannerBorderWidth = useTransform(smoothProgress, [0, .15], ["1px", "0px"]);
	const rotateY = useTransform(smoothProgress, [.15, 1], reducedMotion ? [0, 0] : [-38, -6]);
	const rotateX = useTransform(smoothProgress, [.15, 1], reducedMotion ? [0, 0] : [20, 3]);
	const rotateZ = useTransform(smoothProgress, [.15, 1], reducedMotion ? [0, 0] : [10, 1]);
	const translateZ = useTransform(smoothProgress, [.15, 1], reducedMotion ? [0, 0] : [-500, 0]);
	const columnOffsets = [
		useTransform(smoothProgress, [.15, 1], reducedMotion ? ["0%", "0%"] : ["0%", "-40%"]),
		useTransform(smoothProgress, [.15, 1], reducedMotion ? ["0%", "0%"] : ["-35%", "8%"]),
		useTransform(smoothProgress, [.15, 1], reducedMotion ? ["0%", "0%"] : ["0%", "-38%"]),
		useTransform(smoothProgress, [.15, 1], reducedMotion ? ["0%", "0%"] : ["-28%", "18%"])
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: containerRef,
		"aria-label": "Vriksh Rakshak Dal campaign gallery",
		className: "relative h-[400svh] min-h-[2400px] bg-forest text-white",
		style: { contentVisibility: "visible" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-16 flex h-[calc(100svh-4rem)] w-full items-center justify-center overflow-hidden md:top-[4.75rem] md:h-[calc(100svh-4.75rem)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					width: bannerWidth,
					height: bannerHeight,
					borderRadius: bannerRadius,
					borderWidth: bannerBorderWidth,
					borderColor: "rgba(202, 220, 198, 0.32)"
				},
				className: "relative mx-auto flex max-w-[1920px] items-center justify-center overflow-hidden border bg-forest shadow-[0_32px_100px_rgba(0,0,0,0.5)] [transform-style:preserve-3d]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden [perspective:1000px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-20 shadow-[inset_0_100px_150px_-60px_rgba(0,0,0,0.88),inset_0_-100px_150px_-60px_rgba(0,0,0,0.88)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-20 shadow-[inset_100px_0_130px_-60px_rgba(0,0,0,0.8),inset_-100px_0_130px_-60px_rgba(0,0,0,0.8)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: {
								rotateX,
								rotateY,
								rotateZ,
								z: translateZ,
								transformStyle: "preserve-3d"
							},
							className: "flex h-[150%] w-[120%] origin-center items-center justify-center gap-3 opacity-100 will-change-transform sm:gap-4 lg:gap-6",
							children: columnImages.map((column, columnIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								style: { y: columnOffsets[columnIndex] },
								className: "flex w-[42vw] min-w-0 shrink-0 flex-col gap-3 sm:w-[29vw] sm:gap-4 lg:w-[22vw] lg:min-w-[200px] lg:gap-6",
								children: column.map((image, imageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCard, {
									image,
									repeated: imageIndex >= column.length / 2
								}, `${columnIndex}-${image.src}-${imageIndex}`))
							}, `gallery-column-${columnIndex}`))
						})
					]
				})
			})
		})
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Gallery",
	title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tree rescue work from wall, roadside, and waste spaces." }),
	sub: "Real campaign visuals from Vriksh Rakshak Dal field work, arranged in the same order as the supplied photos."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxUnfurlingGallery, { images: sourcedImages })] });
//#endregion
export { SplitComponent as component };
