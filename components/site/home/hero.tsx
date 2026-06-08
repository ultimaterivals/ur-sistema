import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/config/home";
import { cta, season, ticker } from "@/lib/config/site";
import { images } from "@/lib/config/images";
import { ranking, poleStandings } from "@/lib/config/ranking";
import { Container } from "../primitives";

function LivePanel() {
  const top3 = ranking.slice(0, 3);
  const leader = poleStandings[0];
  return (
    <aside className="ur-card w-full rounded-3xl p-5 backdrop-blur-xl lg:max-w-sm">
      <div className="flex items-center justify-between">
        <span className="ur-eyebrow text-[11px] text-ur-sand/70">Ranking ao vivo</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ur-live/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ur-live">
          <span className="ur-live-dot size-1.5 rounded-full bg-ur-live" /> Ao vivo
        </span>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {top3.map((a) => (
          <li key={a.position} className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-2.5">
            <span className="ur-display w-6 text-center text-lg text-ur-gold">{a.position}</span>
            <Image src={a.photo} alt={a.name} width={40} height={40} className="size-10 rounded-lg object-cover" />
            <div className="min-w-0 flex-1">
              <p className="ur-condensed truncate text-sm font-semibold text-ur-white">{a.name}</p>
              <p className="text-[11px] text-ur-mute">{a.pole} • {a.level}</p>
            </div>
            <span className="ur-condensed text-sm font-semibold tabular-nums text-ur-sand">{a.points.toLocaleString("pt-BR")}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="rounded-xl border border-ur-line bg-white/[0.02] p-3">
          <p className="text-[10px] uppercase tracking-wide text-ur-mute">Polo líder</p>
          <p className="ur-display mt-1 text-lg text-ur-gold">{leader.pole}</p>
        </div>
        <div className="rounded-xl border border-ur-line bg-white/[0.02] p-3">
          <p className="text-[10px] uppercase tracking-wide text-ur-mute">Próximo evento</p>
          <p className="ur-condensed mt-1 text-sm font-semibold text-ur-white">Etapa Betim</p>
        </div>
      </div>
      <div className="mt-2.5 rounded-xl border border-ur-gold/25 bg-ur-gold/5 p-3">
        <p className="text-[10px] uppercase tracking-wide text-ur-gold/80">Premiação da semana</p>
        <p className="ur-display mt-1 text-xl text-ur-white">Confirmada</p>
      </div>
    </aside>
  );
}

function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="relative border-y border-ur-line bg-ur-black-deep/80 py-3">
      <div className="ur-ticker-track">
        {items.map((t, i) => (
          <span key={i} className="ur-condensed mx-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-ur-sand/70">
            <span className="size-1.5 rounded-full bg-ur-gold" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src={images.heroPrimary} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-ur-black via-ur-black/80 to-ur-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ur-black/90 via-ur-black/40 to-transparent" />
      </div>

      <Container className="flex min-h-[88vh] flex-col justify-end pb-12 pt-28 sm:min-h-[92vh] sm:pb-16 sm:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="ur-rise flex flex-col gap-6">
            <span className="ur-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-ur-gold/30 bg-ur-black/40 px-4 py-2 text-xs text-ur-gold backdrop-blur">
              {season.label} • {season.subtitle}
            </span>
            <h1 className="ur-display text-6xl leading-[0.86] text-ur-white sm:text-7xl lg:text-8xl">
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {i === hero.headline.length - 1 ? <span className="ur-gold-text">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p className="max-w-xl text-base leading-7 text-ur-sand/80 sm:text-lg">{hero.body}</p>

            <ul className="flex flex-wrap gap-2">
              {hero.highlights.map((h) => (
                <li key={h} className="ur-condensed rounded-full border border-ur-line bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide text-ur-sand/75 backdrop-blur">
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href={cta.primary.href}
                className="ur-condensed group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-ur-gold-bright to-ur-gold px-8 py-4 text-base font-semibold uppercase tracking-wide text-ur-black-deep shadow-[0_10px_40px_rgba(224,168,46,0.35)] transition-transform hover:-translate-y-0.5"
              >
                {cta.primary.label}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={cta.secondary.href}
                className="ur-condensed inline-flex items-center justify-center gap-2 rounded-full border border-ur-gold/40 px-8 py-4 text-base font-semibold uppercase tracking-wide text-ur-gold transition-colors hover:bg-ur-gold/10"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </div>

          <div className="ur-rise lg:justify-self-end" style={{ animationDelay: "0.15s" }}>
            <LivePanel />
          </div>
        </div>
      </Container>

      <Ticker />
    </section>
  );
}
