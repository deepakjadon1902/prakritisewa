import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { useLanguage } from "../../context/language";
import { Container } from "./Container";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--forest)] text-primary-foreground">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="grid size-9 place-items-center rounded-full bg-white/10">
              <Leaf className="size-5" aria-hidden="true" />
            </span>
            Green Earth Mission
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">{t("footer_tag")}</p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Mission"
          links={[
            { to: "/mission", label: "About Mission" },
            { to: "/tree-protection", label: "Tree Protection" },
            { to: "/tree-relocation", label: "Tree Relocation" },
            { to: "/tree-plantation", label: "Tree Plantation" },
          ]}
        />
        <FooterCol
          title="Get Involved"
          links={[
            { to: "/volunteer", label: "Volunteer" },
            { to: "/donate", label: "Donate" },
            { to: "/stories", label: "Success Stories" },
            { to: "/contact", label: "Contact" },
          ]}
        />

        <div>
          <h3 className="font-display text-lg font-semibold">{t("newsletter_title")}</h3>
          <p className="mt-2 text-sm text-white/70">{t("newsletter_sub")}</p>
          <form
            className="mt-5 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              // Wire up when backend is enabled.
            }}
          >
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/60" aria-hidden="true" />
              <input
                id="footer-email"
                type="email"
                required
                maxLength={255}
                placeholder={t("email_placeholder")}
                className="w-full rounded-full border border-white/20 bg-white/10 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[color:var(--sun)] px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {year} Green Earth Mission. {t("footer_rights")}</p>
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

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
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
