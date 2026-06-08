import type { Metadata } from "next";
import Image from "next/image";
import { Crown, Star } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section, UrButton } from "@/components/site/primitives";
import { ranking } from "@/lib/config/ranking";
import { cta } from "@/lib/config/site";

export const metadata: Metadata = { title: "UR Legends" };

export default function LegendsPage() {
  const legends = ranking.slice(0, 6);
  return (
    <>
      <PageHero
        eyebrow="UR Legends"
        title="O topo da temporada"
        lead="Reconhecimento, destaque, história e legado. UR Legends é o grupo dos atletas que marcaram a temporada — o destino máximo da jornada."
      />

      <Section tone="deep">
        <Container className="flex flex-col gap-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {legends.map((a, i) => (
              <article
                key={a.position}
                className="group relative overflow-hidden rounded-3xl border border-ur-gold/25 bg-gradient-to-b from-ur-gold/[0.07] to-ur-graphite shadow-[0_0_50px_rgba(212,164,55,0.12)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={a.photo} alt={a.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ur-black-deep via-ur-black-deep/30 to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ur-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ur-black-deep">
                    <Crown className="size-3.5" /> Legend
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-6">
                  <span className="ur-eyebrow text-[10px] text-ur-gold">{a.pole} • {a.level}</span>
                  <h2 className="ur-display text-2xl text-ur-white">{a.name}</h2>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="ur-display text-2xl ur-gold-text">{a.points.toLocaleString("pt-BR")}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-ur-gold-bright"><Star className="size-3.5" />{a.coins} coins</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="ur-card relative overflow-hidden rounded-[2rem] p-10 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(212,164,55,0.16),transparent)]" />
            <div className="relative flex flex-col items-center gap-5">
              <span className="ur-eyebrow text-xs text-ur-gold">Cheguei ao topo</span>
              <h2 className="ur-display max-w-2xl text-4xl text-ur-white sm:text-5xl">
                Construa seu caminho até o <span className="ur-gold-text">UR Legends</span>
              </h2>
              <p className="max-w-xl text-base leading-7 text-ur-sand/75">
                Os melhores atletas da temporada entram para a história. Sua trajetória começa na próxima partida.
              </p>
              <UrButton href={cta.primary.href} size="lg">{cta.primary.label}</UrButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
