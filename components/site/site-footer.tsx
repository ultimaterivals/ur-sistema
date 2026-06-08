import Link from "next/link";
import Image from "next/image";
import { footerNav, site, season } from "@/lib/config/site";
import { Container } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-ur-line bg-ur-black-deep">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src={site.logo} alt="" width={40} height={40} className="size-10 object-contain" />
              <span className="ur-display text-xl tracking-wide text-ur-white">
                Ultimate<span className="text-ur-gold"> Rivals</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-ur-sand/55">
              Infraestrutura esportiva que conecta atletas, polos, quadras, equipes, parceiros, mídia e oportunidades.
            </p>
            <p className="ur-eyebrow text-[11px] text-ur-gold/80">
              {season.label} • {season.subtitle}
            </p>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <h3 className="ur-condensed text-sm font-semibold uppercase tracking-[0.2em] text-ur-white">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ur-sand/55 transition-colors hover:text-ur-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ur-line pt-8 sm:flex-row">
          <p className="ur-display text-lg tracking-wide text-ur-gold">{site.tagline}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ur-mute">
            <Link href="/termos" className="hover:text-ur-sand">Termos</Link>
            <Link href="/privacidade" className="hover:text-ur-sand">Privacidade</Link>
            <Link href="/regulamento" className="hover:text-ur-sand">Regulamento</Link>
            <span>© {new Date().getFullYear()} Ultimate Rivals</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
