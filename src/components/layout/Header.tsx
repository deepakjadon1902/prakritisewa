import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X, Globe, Heart } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/language";
import { Container } from "./Container";
import { cn } from "../../lib/utils";

const nav = [
  { to: "/", key: "nav_home" },
  { to: "/mission", key: "nav_mission" },
  { to: "/impact", key: "nav_impact" },
  { to: "/stories", key: "nav_stories" },
  { to: "/gallery", key: "nav_gallery" },
  { to: "/blogs", key: "nav_blog" },
  { to: "/contact", key: "nav_contact" },
] as const;

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 glass">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-full gradient-forest text-primary-foreground shadow-soft">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span>Prakriti Sewa</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-accent text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="hidden items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:bg-accent md:inline-flex"
            aria-label="Switch language"
          >
            <Globe className="size-3.5" aria-hidden="true" />
            {lang === "en" ? "हिन्दी" : "English"}
          </button>

          <Link
            to="/donate"
            className="hidden items-center gap-1.5 rounded-full gradient-sun px-4 py-2 text-sm font-semibold text-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Heart className="size-4" aria-hidden="true" />
            {t("cta_donate")}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent"
              activeProps={{ className: "bg-accent text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold"
            >
              <Globe className="size-3.5" aria-hidden="true" />
              {lang === "en" ? "हिन्दी" : "English"}
            </button>
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full gradient-sun px-4 py-2 text-sm font-semibold text-foreground shadow-soft"
            >
              <Heart className="size-4" aria-hidden="true" />
              {t("cta_donate")}
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
