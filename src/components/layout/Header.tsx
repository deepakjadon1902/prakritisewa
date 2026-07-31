import { Link } from "@tanstack/react-router";
import { Menu, X, Users } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/language";
import { APP_ICON_192, SITE_NAME } from "../../constants/site";
import { cn } from "../../lib/utils";
import { Container } from "./Container";

const nav = [
  { to: "/mission", key: "nav_mission" },
  { to: "/tree-protection", key: "nav_protection" },
  { to: "/tree-plantation", key: "nav_plantation" },
  { to: "/impact", key: "nav_impact" },
  { to: "/gallery", key: "nav_gallery" },
  { to: "/blogs", key: "nav_blog" },
  { to: "/contact", key: "nav_contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/92 shadow-[0_1px_0_rgba(24,50,37,0.04)] backdrop-blur-xl">
      <div className="grid h-16 w-full grid-cols-[1fr_auto] items-center gap-4 px-0 md:h-[4.75rem] xl:grid-cols-[minmax(260px,1fr)_auto_minmax(190px,1fr)]">
        <Link
          to="/"
          aria-label={`${SITE_NAME} home`}
          className="group col-start-1 flex min-w-0 items-center gap-3 justify-self-start"
        >
          <img
            src={APP_ICON_192}
            alt=""
            width={44}
            height={44}
            className="size-10 shrink-0 rounded-full object-cover shadow-soft ring-1 ring-border transition-transform group-hover:scale-[1.03] md:size-11"
          />
          <span className="max-w-[225px] text-pretty font-display text-base font-semibold leading-[1.08] tracking-normal text-foreground sm:max-w-[255px] sm:text-lg">
            {SITE_NAME}
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="col-start-2 hidden items-center justify-center gap-2 justify-self-center xl:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/68 transition-colors hover:bg-secondary hover:text-foreground 2xl:px-3.5"
              activeProps={{
                className: "bg-secondary text-[color:var(--forest)] shadow-sm",
              }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="col-start-2 flex items-center justify-end gap-3 justify-self-end xl:col-start-3">
          <Link
            to="/volunteer"
            className="hidden min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full gradient-sun px-5 py-2.5 text-sm font-bold leading-tight text-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex xl:px-5"
          >
            <Users className="size-4" aria-hidden="true" />
            Become a Volunteer
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-border bg-card shadow-soft xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/96 backdrop-blur-xl transition-[max-height] duration-300 xl:hidden",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <Container className="grid gap-2 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground/78 hover:bg-secondary"
              activeProps={{ className: "bg-secondary text-[color:var(--forest)]" }}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            to="/volunteer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full gradient-sun px-5 py-3 text-sm font-bold text-foreground shadow-soft"
          >
            <Users className="size-4" aria-hidden="true" />
            Become a Volunteer
          </Link>
        </Container>
      </div>
    </header>
  );
}
