import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { SeasonCard, SeasonStage } from "@/lib/content/temporada";
import {
  calendarPreviewRows,
  cycleCards,
  ecosystemCards,
  seasonComparisonRows,
  seasonFaq,
  seasonHeroBadges,
  seasonStages,
  seasonStatusCards,
} from "@/lib/content/temporada";

export const metadata: Metadata = {
  title: "Temporada UR | Ciclo Trimestral, Ranking e Eventos Ultimate Rivals",
  description:
    "Entenda como funciona a Temporada UR, o ciclo trimestral do Ultimate Rivals com UR Play, nivelamento, ranking, eventos, recompensas, repasses e Virada de Ranking.",
};

function PageSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-10 md:scroll-mt-28 md:py-14 lg:px-8 lg:py-16 ${className}`}
      id={id}
    >
      <div className="mx-auto max-w-7xl min-w-0">{children}</div>
    </section>
  );
}

function IconCard({ item, premium = false }: { item: SeasonCard; premium?: boolean }) {
  const Icon = item.icon;

  return (
    <Card className="flex h-full min-h-[194px] flex-col" premium={premium}>
      <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
        <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
      </span>
      <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
    </Card>
  );
}

function CycleTimeline() {
  return (
    <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
      {seasonStages.map((stage) => (
        <li
          className="min-h-[156px] rounded-lg border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-4 transition duration-200 hover:border-[#ffd84d]/25"
          key={stage.step}
        >
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#ffd84d]">{stage.step}</span>
          <h3 className="mt-3 text-base font-black uppercase leading-tight text-white">{stage.title}</h3>
          <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-white/55">
            {stage.status}
          </p>
        </li>
      ))}
    </ol>
  );
}

function StageBlock({ stage, index }: { stage: SeasonStage; index: number }) {
  const Icon = stage.icon;
  const premium = index === 0 || index === 5;

  return (
    <PageSection
      className={index % 2 === 0 ? "bg-[#07080c]" : "bg-[linear-gradient(180deg,#030405,#08090d)]"}
      id={`etapa-${stage.step}`}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
        <Card className="flex min-h-[290px] flex-col" premium={premium}>
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              {stage.eyebrow}
            </span>
          </div>
          <h2 className="mt-6 text-[clamp(2rem,8vw,3.05rem)] font-black uppercase leading-[0.98] text-white">
            {stage.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/72">{stage.description}</p>
          <p className="mt-auto pt-6 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#ffe98b]">
            {stage.status}
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {stage.bullets.map((bullet, bulletIndex) => (
            <Card className="flex min-h-[118px] flex-col p-4 md:p-5" key={bullet}>
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                {bulletIndex + 1}
              </span>
              <p className="mt-4 text-sm font-black uppercase leading-5 tracking-[0.08em] text-white">{bullet}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

function CalendarPreview() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Calendário visual</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
            sem datas reais nesta etapa
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {calendarPreviewRows.map((row, index) => (
            <div
              className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-black/30 p-4"
              key={row.label}
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-black uppercase leading-tight text-white">{row.label}</h3>
                <p className="mt-1 text-sm font-bold text-[#ffe98b]">{row.status}</p>
                <p className="mt-2 text-sm leading-6 text-white/62">{row.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {seasonStatusCards.map((item) => (
          <IconCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default function TemporadaPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Temporada UR • ciclo trimestral</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              Um ciclo contínuo para manter o esporte vivo.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Temporada UR organiza o trimestre com entrada pelo UR Play, nivelamento, ranking ativo, eventos,
              recompensas, repasses e Virada de Ranking antes do novo ciclo.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/ur-play">
                Começar pelo UR Play
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/ranking" variant="secondary">
                Entender ranking
              </Button>
              <Button href="/eventos" variant="ghost">
                Ver eventos
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {seasonHeroBadges.map((item) => (
                <span
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3 text-xs font-black uppercase leading-5 tracking-[0.1em] text-[#ffe98b]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <Card className="overflow-hidden p-4 md:p-5" premium>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                  <CalendarDays aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  calendário em formação
                </span>
              </div>
              <div className="my-6 grid place-items-center">
                <Image
                  alt="Emblema Ultimate Rivals"
                  className="h-auto w-36 object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] md:w-44"
                  height={240}
                  priority
                  src="/images/hero-ur-emblem.png"
                  width={240}
                />
              </div>
              <div className="rounded-lg border border-white/10 bg-black/45 p-4">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">Ciclo oficial</div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">
                  temporada em formação
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Sem datas, eventos, polos, valores, atletas, equipes ou ranking real nesta etapa.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="nao-evento">
        <SectionHeader
          description="Ultimate Rivals não depende de um torneio solto. A temporada cria continuidade, objetivos e memória competitiva."
          eyebrow="Não é evento isolado"
          title="O ciclo importa tanto quanto o jogo."
        />
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
          <div className="grid border-b border-white/10 bg-black/35 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b] md:grid-cols-[0.72fr_1fr_1fr]">
            <div className="hidden px-5 py-4 md:block">Critério</div>
            <div className="border-white/10 px-5 py-4 md:border-l">Evento isolado</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">Temporada UR</div>
          </div>
          {seasonComparisonRows.map((row) => (
            <div
              className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.72fr_1fr_1fr]"
              key={row.label}
            >
              <div className="bg-white/[0.025] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-white">
                {row.label}
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/62 md:border-l md:border-t-0">
                {row.isolated}
              </div>
              <div className="border-t border-[#ffd84d]/15 bg-[#ffd84d]/[0.045] px-5 py-4 text-sm font-semibold leading-6 text-white/78 md:border-l md:border-t-0">
                {row.season}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ciclo-trimestral">
        <SectionHeader
          description="O trimestre dá ritmo: entrada, leitura de nível, ranking, eventos, recompensas, virada e novo ciclo."
          eyebrow="Ciclo trimestral UR"
          title="Três meses para competir, evoluir e recomeçar melhor."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cycleCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
        <div className="mt-5">
          <CycleTimeline />
        </div>
      </PageSection>

      {seasonStages.map((stage, index) => (
        <StageBlock index={index} key={stage.step} stage={stage} />
      ))}

      <PageSection id="calendario">
        <SectionHeader
          description="Calendário real só entra após confirmação. Até lá, a página mostra estrutura, não datas inventadas."
          eyebrow="Calendário visual"
          title="Agenda pública apenas quando houver validação oficial."
        />
        <CalendarPreview />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ecossistema">
        <SectionHeader
          description="A temporada conecta ranking, equipes, UR Coins, UR Market, eventos e mídia em uma jornada contínua."
          eyebrow="Conexões do ciclo"
          title="Cada etapa alimenta outras partes do ecossistema."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ecosystemCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para explicar o ciclo sem prometer agenda, ranking ou premiação real antes da validação."
          eyebrow="FAQ Temporada UR"
          title="Antes da agenda, entenda a lógica do ciclo."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {seasonFaq.map((item) => (
            <details
              className="group rounded-lg border border-white/10 bg-white/[0.04] transition duration-200 open:border-[#ffd84d]/25 open:bg-white/[0.055]"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-base font-black uppercase leading-tight text-white">
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd84d] transition duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-6 text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </PageSection>

      <section className="overflow-hidden border-t border-[#ffd84d]/15 bg-[linear-gradient(135deg,#090a0f,#030405)] px-5 py-12 md:py-16 lg:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-7xl">
          <Card className="grid gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.52fr)] lg:items-center" premium>
            <div>
              <Badge>CTA Temporada UR</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Entre no ciclo pelo UR Play. A temporada organiza o resto.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                Estrutura pública pronta para orientar atletas, equipes e parceiros enquanto calendário, ranking,
                eventos, repasses e premiações passam por validação oficial.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="/ur-play">Começar pelo UR Play</Button>
              <Button href="/ranking" variant="secondary">
                Ver Ranking UR
              </Button>
              <Button href="/eventos" variant="ghost">
                Acompanhar eventos
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
