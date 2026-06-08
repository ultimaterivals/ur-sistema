"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav, site, cta } from "@/lib/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ur-line bg-ur-black/85 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-ur-black/70 to-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Ultimate Rivals — início">
          <Image src={site.logo} alt="" width={36} height={36} className="size-9 object-contain" priority />
          <span className="ur-display text-lg leading-none tracking-wide text-ur-white">
            Ultimate<span className="text-ur-gold"> Rivals</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="ur-condensed text-[15px] font-medium uppercase tracking-wide text-ur-sand/75 transition-colors hover:text-ur-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={cta.primary.href}
            className="ur-condensed hidden rounded-full bg-gradient-to-b from-ur-gold-bright to-ur-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-ur-black-deep transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {cta.primary.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-ur-line text-ur-white lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top border-b border-ur-line bg-ur-black/97 backdrop-blur-xl transition-all duration-300 lg:hidden sm:top-[72px]",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Navegação mobile">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="ur-condensed border-b border-ur-line/60 py-3 text-lg uppercase tracking-wide text-ur-sand/85 hover:text-ur-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={cta.primary.href}
            onClick={() => setOpen(false)}
            className="ur-condensed mt-4 inline-flex justify-center rounded-full bg-gradient-to-b from-ur-gold-bright to-ur-gold px-5 py-3.5 text-base font-semibold uppercase tracking-wide text-ur-black-deep"
          >
            {cta.primary.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
