import { Link } from "@tanstack/react-router";
import { Mail, Facebook, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../../context/language";
import {
  APP_ICON_192,
  FACEBOOK_PROFILE,
  SITE_HINDI_NAME,
  SITE_NAME,
  TRUST_EMAIL,
  TRUST_LOCATION,
  TRUST_PHONE,
  TRUST_PHONE_E164,
} from "../../constants/site";
import { Container } from "./Container";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[color:var(--forest)] text-primary-foreground">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <img
              src={APP_ICON_192}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full object-cover ring-1 ring-white/20"
            />
            <span>{SITE_NAME}</span>
          </div>
          <p className="mt-2 text-sm text-white/80">{SITE_HINDI_NAME}</p>
          <p className="mt-4 max-w-sm text-sm text-white/70">{t("footer_tag")}</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {TRUST_LOCATION}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={FACEBOOK_PROFILE}
              aria-label="Facebook profile"
              className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <FooterCol
          title="Trust"
          links={[
            { to: "/mission", label: "About Us" },
            { to: "/impact", label: "Our Impact" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <FooterCol
          title="Services"
          links={[
            { to: "/tree-plantation", label: "Tree Plantation" },
            { to: "/tree-protection", label: "Tree Protection" },
            { to: "/volunteer", label: "Volunteer" },
            { to: "/blogs", label: "Resources" },
          ]}
        />

        <div>
          <h3 className="font-display text-lg font-semibold">{t("newsletter_title")}</h3>
          <p className="mt-2 text-sm text-white/70">{t("newsletter_sub")}</p>
          <a
            href={`mailto:${TRUST_EMAIL}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--sun)] px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-4" aria-hidden="true" />
            {TRUST_EMAIL}
          </a>
          <a
            href={`tel:+${TRUST_PHONE_E164}`}
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            {TRUST_PHONE}
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {SITE_NAME}. {t("footer_rights")}
          </p>
          <p>"Nature protection is our collective responsibility."</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link to="/faq" className="hover:text-white">
              FAQs
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-white/70 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
