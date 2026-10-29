import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/language";
import { APP_ICON_192, SITE_NAME } from "../../constants/site";
import { cn } from "../../lib/utils";
import { Container } from "./Container";
import { TrustIcon } from "../icons/TrustIcon";

const nav = [
  { to: "/mission", key: "nav_mission" },
  { to: "/tree-protection", key: "nav_protection" },
  { to: "/gallery", key: "nav_gallery" },
  { to: "/contact", key: "nav_contact" },
] as const;

export function Header() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const wideLayout = lang === "hi";

  return (
    <header className="site-header-surface sticky top-0 z-50 -mb-16 border-b md:-mb-[4.75rem]">
      <Container
        size="lg"
        className={`grid h-16 max-w-none grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-5 lg:px-6 md:h-[4.75rem] ${wideLayout ? "2xl:grid-cols-[minmax(220px,1fr)_auto_minmax(190px,1fr)]" : "xl:grid-cols-[minmax(220px,1fr)_auto_minmax(190px,1fr)]"}`}
      >
        <Link
          to="/"
          aria-label={`${SITE_NAME} home`}
          className="group col-start-1 flex min-w-0 items-center gap-3 justify-self-start"
        >
          <img
            src={APP_ICON_192}
            alt=""
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-full object-cover shadow-soft ring-1 ring-border transition-transform group-hover:scale-[1.03]"
          />
          <span className="hidden max-w-[225px] text-pretty font-display text-base font-semibold leading-[1.08] tracking-normal text-black md:inline sm:max-w-[255px] sm:text-lg">
            {SITE_NAME}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className={`col-start-2 hidden items-center justify-center gap-1 justify-self-center ${wideLayout ? "2xl:flex" : "xl:flex"}`}
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-black transition-colors hover:bg-secondary hover:text-black 2xl:px-3"
              activeProps={{
                className:
                  "whitespace-nowrap rounded-full bg-secondary px-2.5 py-2 text-sm font-medium text-black shadow-sm 2xl:px-3",
              }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div
          className={`col-start-2 flex items-center justify-end gap-2 justify-self-end ${wideLayout ? "2xl:col-start-3" : "xl:col-start-3"}`}
        >
          <Link
            to="/donate"
            className={`hidden min-h-11 items-center justify-center whitespace-nowrap rounded-full border border-black/15 bg-background/80 px-4 py-2.5 text-sm font-bold text-black shadow-soft transition-colors hover:bg-secondary ${wideLayout ? "2xl:inline-flex" : "xl:inline-flex"}`}
          >
            {t("cta_donate")}
          </Link>
          <Link
            to="/volunteer"
            className="hidden min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full gradient-sun px-5 py-2.5 text-sm font-bold leading-tight text-black shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex xl:px-5"
          >
            <TrustIcon name="community" className="size-4" />
            {t("cta_volunteer")}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid size-11 place-items-center rounded-full border border-black/15 bg-white/85 text-black shadow-soft ${wideLayout ? "2xl:hidden" : "xl:hidden"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-mobile-navigation"
          >
            {open ? <X className="size-5 text-black" /> : <Menu className="size-5 text-black" />}
          </button>
        </div>
      </Container>

      <div
        id="primary-mobile-navigation"
        role="navigation"
        aria-label="Mobile primary"
        className={cn(
          `overflow-x-hidden border-t border-border bg-background/95 backdrop-blur-2xl transition-[max-height] duration-300 ${wideLayout ? "2xl:hidden" : "xl:hidden"}`,
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-y-hidden",
        )}
      >
        <Container className="grid gap-2 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-black hover:bg-secondary"
              activeProps={{
                className: "rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-black",
              }}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-bold text-black"
          >
            {t("cta_donate")}
          </Link>
          <Link
            to="/volunteer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full gradient-sun px-5 py-3 text-sm font-bold text-black shadow-soft"
          >
            <TrustIcon name="community" className="size-4" />
            {t("cta_volunteer")}
          </Link>
        </Container>
      </div>
    </header>
  );
}
