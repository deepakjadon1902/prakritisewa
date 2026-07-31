export const SITE_URL =
  (import.meta.env.VITE_BASE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://prakritisewa.vercel.app";

export const SITE_NAME = "Vriksh Rakshak Dal Sewa Trust";
export const SITE_HINDI_NAME = "वृक्ष रक्षक दल सेवा ट्रस्ट";
export const SITE_TITLE =
  "Vriksh Rakshak Dal Sewa Trust | Tree Plantation & Protection in Vrindavan";
export const SITE_DESCRIPTION =
  "Vriksh Rakshak Dal Sewa Trust is a registered Public Charitable Trust dedicated to tree plantation, tree protection, environmental conservation, and social welfare activities in Vrindavan, Mathura, and the Braj region.";
export const TRUST_PAN = "AAETV7094D";
export const TRUST_EMAIL = "vrikshrakshakdal@gmail.com";
export const TRUST_PHONE = "+91 84306 04625";
export const TRUST_PHONE_E164 = "918430604625";
export const TRUST_LOCATION = "Vrindavan, Mathura, Uttar Pradesh, India";
export const FACEBOOK_PROFILE = "https://www.facebook.com/ganesh.baghel.583";
export const LOGO_IMAGE = "/vriksh-rakshak-logo.jpeg";
export const APP_ICON_192 = "/icon-192.jpg";
export const APP_ICON_512 = "/icon-512.jpg";

export const defaultOgImage = `${SITE_URL}/og-vriksh-rakshak.jpg`;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
