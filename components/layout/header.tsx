"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mainNavigation, mobileNavigation } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ffd84d]/15 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
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

        <nav className="hidden min-w-0 items-center justify-center gap-4 text-[11px] font-extrabold uppercase tracking-[0.1em] text-white/65 xl:flex xl:gap-5 xl:text-xs">
          {mainNavigation.map((item) => (
            <Link className="whitespace-nowrap transition hover:text-[#ffe98b]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button className="min-h-10 px-4 py-2 text-xs" href="/ur-play">
            Entrar no UR
          </Button>
          <Button className="min-h-10 px-3 py-2 text-xs" href="/patrocinadores" variant="secondary">
            Patrocinar
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.045] text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      <div className="border-t border-white/10 px-5 pb-3 pt-3 lg:hidden">
        <Button className="w-full" href="/ur-play">
          Quero entrar no UR Play
        </Button>
        {open ? (
          <nav className="mt-3 grid gap-2 rounded-lg border border-white/10 bg-[#111218] p-2">
            {mobileNavigation.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white/70 transition hover:bg-white/[0.06] hover:text-[#ffe98b]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>

      {open ? (
        <div className="hidden border-t border-white/10 px-8 pb-3 pt-3 lg:block xl:hidden">
          <nav className="grid grid-cols-4 gap-2 rounded-lg border border-white/10 bg-[#111218] p-2">
            {mobileNavigation.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-white/70 transition hover:bg-white/[0.06] hover:text-[#ffe98b]"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
