"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Começar", href: "/cadastro" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Temporada", href: "/temporada" },
  { label: "Ranking", href: "/ranking" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Mídia", href: "/midia" },
];

const mobileGroups = [
  {
    label: "Principal",
    links: [
      { label: "Começar", href: "/cadastro" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Temporada", href: "/temporada" },
      { label: "Ranking", href: "/ranking" },
      { label: "Entrar", href: "/entrar" },
    ],
  },
  {
    label: "Explorar",
    links: [
      { label: "Atletas", href: "/atletas" },
      { label: "Equipes e Duplas", href: "/equipes-duplas" },
      { label: "Polos e Quadras", href: "/polos-quadras" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Mídia", href: "/midia" },
    ],
  },
  {
    label: "Institucional",
    links: [
      { label: "Metodologia Hunter", href: "/metodologia-hunter" },
      { label: "Blog", href: "/blog" },
      { label: "Regulamento", href: "/regulamento" },
      { label: "Cadastro", href: "/cadastro" },
      { label: "Patrocinadores", href: "/patrocinadores" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-ur-black/95 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Ultimate Rivals — Página inicial">
            {/* Icon only on mobile */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-ur-icon.svg" alt="UR" className="h-9 w-auto sm:hidden" />
            {/* Full wordmark on sm+ */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-ur.svg" alt="Ultimate Rivals" className="hidden sm:block h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-display font-semibold text-sm uppercase tracking-wider text-ur-sand hover:text-ur-white transition-colors duration-200 rounded-sm hover:bg-white/5 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/entrar"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-ur-gold text-ur-gold font-display font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-ur-gold hover:text-ur-black transition-all duration-200 cursor-pointer"
            >
              Entrar
            </Link>
            <Link
              href="/cadastro"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-ur-gold text-ur-black font-display font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-ur-gold-light transition-all duration-200 cursor-pointer"
            >
              Começar
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ur-white hover:text-ur-gold transition-colors duration-200 cursor-pointer"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-ur-black/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-ur-graphite border-l border-white/5 lg:hidden transform transition-transform duration-300 ease-out overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-ur-gold rounded-sm flex items-center justify-center">
              <span className="font-display font-black text-ur-black text-xs">UR</span>
            </div>
            <span className="font-display font-black text-ur-white uppercase tracking-wide text-sm">
              Ultimate Rivals
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 text-ur-sand hover:text-ur-white transition-colors cursor-pointer"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Season badge */}
        <div className="px-5 py-3 border-b border-white/5">
          <span className="chip-gold text-xs">Temporada 1 — Ao Vivo</span>
        </div>

        {/* Nav Groups */}
        <nav className="p-5 space-y-6" aria-label="Navegação mobile">
          {mobileGroups.map((group) => (
            <div key={group.label}>
              <p className="section-label text-[10px] mb-3 opacity-60">{group.label}</p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 font-display font-semibold text-sm uppercase tracking-wide text-ur-sand hover:text-ur-white hover:bg-white/5 rounded-sm transition-all duration-150 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Drawer Footer CTAs */}
        <div className="p-5 border-t border-white/5 space-y-3">
          <Link
            href="/cadastro"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full justify-center text-center"
          >
            Começar pelo UR Play
          </Link>
          <Link
            href="/entrar"
            onClick={() => setMobileOpen(false)}
            className="btn-secondary w-full justify-center text-center"
          >
            Já tenho conta
          </Link>
        </div>
      </div>
    </>
  );
}
