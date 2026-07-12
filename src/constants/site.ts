export const SITE_URL =
  (import.meta.env.VITE_BASE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://prakritisewa.org";

export const SITE_NAME = "Prakriti Sewa";
export const SITE_TITLE = "प्रकृति सेवा | पेड़ों की रक्षा हेतु निःस्वार्थ सेवा";
export const SITE_DESCRIPTION =
  "प्रकृति सेवा पेड़ों को बचाने, असुरक्षित पेड़ों को पुनर्स्थापित करने, देशी पौधे लगाने और समाज को प्रकृति रक्षा से जोड़ने का निःस्वार्थ अभियान है।";

export const defaultOgImage = `${SITE_URL}/og-prakriti-sewa.svg`;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
