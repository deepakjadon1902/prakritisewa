import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Container-DV8ir_WD.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Container({ children, className, size = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full px-4 sm:px-6 lg:px-8", size === "sm" ? "max-w-3xl" : size === "lg" ? "max-w-7xl" : "max-w-6xl", className),
		children
	});
}
//#endregion
export { cn as n, Container as t };
