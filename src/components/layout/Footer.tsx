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
      <Container className="grid grid-cols-2 gap-x-8 gap-y-7 py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.35fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 font-display text-base font-semibold leading-tight sm:text-lg">
            <img
              src={APP_ICON_192}
              alt=""
              width={44}
              height={44}
              className="size-11 rounded-full object-cover ring-1 ring-white/20"
            />
            <span className="max-w-[18rem]">{SITE_NAME}</span>
          </div>
          <p className="mt-1.5 text-xs text-white/80">{SITE_HINDI_NAME}</p>
          <p className="mt-2.5 max-w-sm text-xs leading-5 text-white/70">{t("footer_tag")}</p>
          <p className="mt-2 flex items-start gap-2 text-xs leading-5 text-white/70">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {TRUST_LOCATION}
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href={FACEBOOK_PROFILE}
              aria-label="Facebook profile"
              className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:size-9"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <FooterCol
          title="Trust"
          links={[
            { to: "/mission", label: "About Us" },
            { to: "/gallery", label: "Gallery" },
            { to: "/stories", label: "Stories" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <FooterCol
          title="Services"
          links={[
            { to: "/tree-plantation", label: "Tree Plantation" },
            { to: "/tree-protection", label: "Tree Care & Impact" },
            { to: "/tree-relocation", label: "Tree Relocation" },
            { to: "/volunteer", label: "Volunteer" },
            { to: "/blogs", label: "Resources" },
            { to: "/donate", label: "Donate" },
          ]}
        />

        <div className="col-span-2 md:col-span-1">
          <h3 className="font-display text-base font-semibold">{t("newsletter_title")}</h3>
          <p className="mt-1.5 text-xs leading-5 text-white/70">{t("newsletter_sub")}</p>
          <a
            href={`mailto:${TRUST_EMAIL}`}
            className="mt-3 inline-flex min-h-11 max-w-full items-center gap-2 rounded-full bg-[color:var(--sun)] px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 sm:text-sm"
          >
            <Mail className="size-4" aria-hidden="true" />
            {TRUST_EMAIL}
          </a>
          <a
            href={`tel:+${TRUST_PHONE_E164}`}
            className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:text-sm"
          >
            <Phone className="size-4" aria-hidden="true" />
            {TRUST_PHONE}
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-2.5 py-3 text-xs text-white/70 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE_NAME}. {t("footer_rights")}
          </p>
          <p className="hidden sm:block">Nature protection is our collective responsibility.</p>
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
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-[13px]">
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
