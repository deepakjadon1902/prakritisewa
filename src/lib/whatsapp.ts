import { TRUST_PHONE_E164 } from "../constants/site";

export function openTrustWhatsApp(lines: string[]) {
  const message = lines.filter(Boolean).join("\n");
  const url = `https://wa.me/${TRUST_PHONE_E164}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
