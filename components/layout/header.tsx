"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mainNavigation, mobileNavigationGroups } from "@/lib/navigation";

const MOBILE_MENU_ID = "mobile-menu-panel";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] border-b border-[#ffd84d]/15 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-3 px-5 py-3 lg:px-8">
        <Link
          className="flex min-w-0 shrink-0 items-center gap-3"
          href="/"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            alt="Ultimate Rivals"
            className="h-11 w-11 object-contain"
            height={44}
            priority
            src="/brand/logo-ur.png"
            width={44}
          />
          <span className="min-w-0">
            <span className="block text-sm font-black uppercase tracking-[0.12em] text-[#ffe98b] sm:text-base">
              Ultimate Rivals
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
              Eleve o jogo
            </span>
          </span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white/65 lg:flex xl:gap-3 xl:text-[11px] 2xl:gap-5 2xl:text-xs"
          data-testid="desktop-nav"
        >
          {mainNavigation.map((item) => (
            <Link className="whitespace-nowrap transition hover:text-[#ffe98b]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex" data-testid="desktop-ctas">
          <Button className="min-h-10 px-4 py-2 text-xs" href="/cadastro">
            Entrar no UR
          </Button>
          <Button className="min-h-10 px-3 py-2 text-xs" href="/cadastro#patrocinador" variant="secondary">
            Patrocinar
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="relative z-[10000] grid h-12 min-h-[48px] w-12 min-w-[48px] touch-manipulation select-none place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] pointer-events-auto [&_svg]:pointer-events-none"
            data-testid="mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            {mobileMenuOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-x-0 top-[72px] z-[9990] max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-black/95 px-5 pb-[120px] pt-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)] pointer-events-auto lg:hidden"
          data-testid="mobile-menu-panel"
          id={MOBILE_MENU_ID}
          role="menu"
        >
          <nav className="grid gap-2 md:grid-cols-2">
            {mobileNavigationGroups.map((group) => (
              <div className="rounded-lg border border-white/10 bg-[#111218] p-2" key={group.label}>
                <div className="px-2 pb-0.5 text-[9px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">
                  {group.label}
                </div>
                <div className="grid gap-1">
                  {group.items.map((item) => (
                    <Link
                      className="rounded-md px-3 py-2 text-xs font-bold uppercase leading-4 tracking-[0.08em] text-white/70 transition hover:bg-white/[0.06] hover:text-[#ffe98b]"
                      href={item.href}
                      key={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
