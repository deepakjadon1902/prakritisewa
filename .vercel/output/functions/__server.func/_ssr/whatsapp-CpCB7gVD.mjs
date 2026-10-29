import { p as TRUST_PHONE_E164 } from "./site-B7hwvLmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-CpCB7gVD.js
function openTrustWhatsApp(lines) {
	const message = lines.filter(Boolean).join("\n");
	const url = `https://wa.me/${TRUST_PHONE_E164}?text=${encodeURIComponent(message)}`;
	window.open(url, "_blank", "noopener,noreferrer");
}
//#endregion
export { openTrustWhatsApp as t };
