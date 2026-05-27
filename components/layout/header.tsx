"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { PointerEvent } from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { mainNavigation, mobileNavigationGroups } from "@/lib/navigation";

const MOBILE_MENU_ID = "site-mobile-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const pointerToggleHandled = useRef(false);

  const toggleMenu = () => {
    setOpen((value) => !value);
  };

  const handlePointerToggle = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    pointerToggleHandled.current = true;
    toggleMenu();

    window.setTimeout(() => {
      pointerToggleHandled.current = false;
    }, 0);
  };

  const handleClickToggle = () => {
    if (pointerToggleHandled.current) {
      pointerToggleHandled.current = false;
      return;
    }

    toggleMenu();
  };

  return (
    <header
      className="sticky top-0 z-[100] border-b border-[#ffd84d]/15 bg-black/85 backdrop-blur-xl"
      onClickCapture={(event) => {
        if ((event.target as Element).closest("a")) {
          setOpen(false);
        }
      }}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link className="flex min-w-0 shrink-0 items-center gap-3" href="/" onClick={() => setOpen(false)}>
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

        <nav className="hidden min-w-0 items-center justify-center gap-5 text-xs font-extrabold uppercase tracking-[0.1em] text-white/65 2xl:flex">
          {mainNavigation.map((item) => (
            <Link className="whitespace-nowrap transition hover:text-[#ffe98b]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button className="min-h-10 px-4 py-2 text-xs" href="/cadastro">
            Entrar no UR
          </Button>
          <Button className="min-h-10 px-3 py-2 text-xs" href="/cadastro#patrocinador" variant="secondary">
            Patrocinar
          </Button>
        </div>

        <button
          aria-controls={MOBILE_MENU_ID}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative z-[120] grid h-12 w-12 touch-manipulation select-none place-items-center rounded-lg border border-white/10 bg-white/[0.045] text-white pointer-events-auto 2xl:hidden"
          data-mobile-menu-trigger
          onClick={handleClickToggle}
          onPointerUp={handlePointerToggle}
          type="button"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          className="relative z-[110] max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-black/95 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)] pointer-events-auto lg:px-8 2xl:hidden"
          id={MOBILE_MENU_ID}
        >
          <Button className="w-full" href="/cadastro#atleta">
            Entrar no UR
          </Button>
          <nav className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {mobileNavigationGroups.map((group) => (
              <div className="rounded-lg border border-white/10 bg-[#111218] p-2" key={group.label}>
                <div className="px-2 pb-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">
                  {group.label}
                </div>
                <div className="grid gap-1">
                  {group.items.map((item) => (
                    <Link
                      className="rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-white/70 transition hover:bg-white/[0.06] hover:text-[#ffe98b]"
                      href={item.href}
                      key={item.href}
                      onClick={() => setOpen(false)}
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
