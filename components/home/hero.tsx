import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroProofs, statusItems } from "@/lib/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-11 lg:px-8 lg:py-8 xl:py-10">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(310px,0.88fr)] xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
        <div className="min-w-0 text-center lg:text-left">
          <Badge>TEMPORADA UR • VÔLEI DE PRAIA • RANKING • EQUIPES • RECOMPENSAS</Badge>
          <h1 className="mx-auto mt-3 max-w-[820px] text-balance text-[clamp(2.5rem,10vw,3.75rem)] font-black uppercase leading-[0.93] tracking-normal text-white md:text-[clamp(3rem,6.4vw,4.25rem)] lg:mx-0 lg:text-[clamp(3.3rem,4.25vw,3.9rem)] xl:text-[clamp(3.5rem,4.2vw,4.75rem)]">
            O ecossistema que profissionaliza o esporte amador.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-white/70 md:text-[1.02rem] lg:mx-0">
            Entre no UR Play, dispute ranking, evolua por níveis, ganhe visibilidade, acumule UR Coins e
            participe de uma temporada onde cada jogo conta para sua história.
          </p>
          <p className="mx-auto mt-2.5 max-w-xl text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#ffe98b]/80 md:text-[13px] lg:mx-0">
            Aqui, atleta deixa de ser apenas participante. Vira personagem, concorrente, evolução, mídia e oportunidade.
          </p>
          <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
            <Button href="/ur-play">
              Quero entrar no UR Play
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
            <Button href="/equipes" variant="secondary">
              Cadastrar minha equipe
            </Button>
            <Button href="/patrocinadores" variant="ghost">
              Quero patrocinar o UR
            </Button>
          </div>
          <p className="mt-3 text-sm text-white/50">
            Cadastro aberto para atletas, equipes, patrocinadores e quadras parceiras.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
            {heroProofs.map((proof) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 text-left" key={proof}>
                <div className="text-xs font-black uppercase leading-tight text-white xl:text-sm">{proof}</div>
                <div className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#ffd84d]">
                  em formação
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[390px] xl:max-w-[430px]">
          <div className="rounded-lg border border-[#ffd84d]/25 bg-[#111218] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)] xl:p-4">
            <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,#171923,#06070a_62%,#221b07)] p-3.5 md:p-4">
              <div className="flex items-center justify-between gap-3">
                <Badge>Live season</Badge>
                <span className="rounded-md bg-black/45 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#ffe98b]">
                  UR Play
                </span>
              </div>
              <div className="my-5 grid place-items-center lg:my-4 xl:my-5">
                <Image
                  alt="Emblema Ultimate Rivals"
                  className="h-auto w-36 object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] md:w-40 xl:w-44"
                  height={240}
                  priority
                  src="/images/hero-ur-emblem.png"
                  width={240}
                />
              </div>
              <div className="rounded-lg border border-white/10 bg-black/45 p-3">
                <div className="mb-2 flex items-center gap-2 text-[#ffe98b]">
                  <Flame aria-hidden className="h-4 w-4" />
                  <span className="text-[11px] font-black uppercase tracking-[0.16em]">Atleta em ascensão</span>
                </div>
                <div className="text-2xl font-black uppercase text-white">ranking em formação</div>
                <div className="mt-1.5 text-sm text-white/60">
                  Sem atletas, números ou posições reais nesta etapa.
                </div>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {statusItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="rounded-lg border border-[#ffd84d]/15 bg-[#ffd84d]/10 p-2.5" key={item.label}>
                      <Icon aria-hidden className="h-4 w-4 text-[#ffd84d]" />
                      <div className="mt-1.5 text-[11px] font-black uppercase leading-4 tracking-[0.1em] text-[#ffe98b]">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
