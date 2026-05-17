import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, ChevronDown, ClipboardCheck, Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { EventCard, EventFocus } from "@/lib/content/eventos";
import {
  agendaPreviewRows,
  agendaStatusCards,
  ecosystemFeedFlow,
  eventConnectionCards,
  eventFaq,
  eventFocusBlocks,
  eventHeroBadges,
  eventNarrativeCards,
  eventTypes,
  interestFields,
  interestFlow,
  segmentationCards,
} from "@/lib/content/eventos";

export const metadata: Metadata = {
  title: "Eventos UR | UR Play, Torneios e Temporada Ultimate Rivals",
  description:
    "Conheça os eventos do Ultimate Rivals, incluindo UR Play, mini torneios, torneios oficiais, Virada de Ranking e experiências conectadas ao ranking, equipes, UR Coins e mídia.",
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

function IconCard({ item, premium = false }: { item: EventCard; premium?: boolean }) {
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

function EventFocusBlock({ event, index }: { event: EventFocus; index: number }) {
  const Icon = event.icon;
  const premium = index === 0 || index === 3;

  return (
    <PageSection
      className={index % 2 === 0 ? "bg-[#07080c]" : "bg-[linear-gradient(180deg,#030405,#08090d)]"}
      id={event.id}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch">
        <Card className="flex min-h-[290px] flex-col" premium={premium}>
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              {event.eyebrow}
            </span>
          </div>
          <h2 className="mt-6 text-[clamp(2rem,8vw,3.05rem)] font-black uppercase leading-[0.98] text-white">
            {event.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/72">{event.description}</p>
          <p className="mt-auto pt-6 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#ffe98b]">
            {event.status}
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {event.bullets.map((bullet, bulletIndex) => (
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

function EcosystemFeedPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-stretch">
      <Card className="flex min-h-[268px] flex-col" premium>
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
          <Coins aria-hidden className="h-6 w-6 text-[#ffd84d]" />
        </span>
        <h3 className="mt-6 text-[clamp(1.85rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
          Evento vira histórico quando existe dado validado.
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/72">
          Ranking, UR Coins e mídia dependem de critérios oficiais, presença confirmada e operação real. Nada aqui
          cria pontuação, saldo ou destaque automático.
        </p>
      </Card>
      <div className="grid gap-3 sm:grid-cols-4">
        {ecosystemFeedFlow.map((item, index) => (
          <div
            className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/70"
            key={item.label}
          >
            <span className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
              {index + 1}
            </span>
            <h3 className="text-sm font-black uppercase leading-5 tracking-[0.08em] text-white">{item.label}</h3>
            <p className="mt-3 text-sm leading-6 text-white/68">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgendaPreviewPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Preview de agenda</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
            sem datas reais nesta etapa
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {agendaPreviewRows.map((row, index) => (
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
        {agendaStatusCards.map((item) => (
          <IconCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

function InterestPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
      <Card className="flex min-h-[300px] flex-col" premium>
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
          <ClipboardCheck aria-hidden className="h-6 w-6 text-[#ffd84d]" />
        </span>
        <h3 className="mt-6 text-[clamp(1.85rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
          Interesse sem inscrição funcional.
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/72">
          Este painel mostra o fluxo planejado. Não há backend, login, pagamento, Supabase, calendário real ou
          inscrição funcional nesta fase.
        </p>
        <div className="mt-5 grid gap-2">
          {interestFlow.map((item, index) => (
            <div
              className="grid grid-cols-[36px_1fr] items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3"
              key={item}
            >
              <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                {index + 1}
              </span>
              <span className="text-xs font-black uppercase leading-5 tracking-[0.1em] text-white/78">{item}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Demonstração visual</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">sem envio real</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {interestFields.map((field) => (
            <label className="block" key={field.label}>
              <span className="text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">{field.label}</span>
              <input
                className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-sm font-bold text-white/74 outline-none"
                readOnly
                value={field.value}
              />
            </label>
          ))}
        </div>
        <textarea
          className="mt-4 min-h-28 w-full resize-none rounded-lg border border-white/10 bg-black/35 p-4 text-sm font-bold leading-6 text-white/74 outline-none"
          readOnly
          value="Interesse será tratado por canal oficial depois da validação de agenda, polo, modalidade e operação."
        />
        <button
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-[#ffd84d]/25 bg-[#ffd84d]/10 px-5 py-3 text-center text-sm font-extrabold uppercase leading-5 tracking-[0.08em] text-[#ffe98b]"
          disabled
          type="button"
        >
          Inscrição será liberada após validação
        </button>
      </Card>
    </div>
  );
}

export default function EventosPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Eventos UR • agenda em formação</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              Cada evento tem uma função na temporada.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Eventos UR conectam entrada, competição, ranking, equipes, UR Coins, CT UR, mídia, patrocinadores,
              quadras parceiras e comunidade. Não é uma agenda solta.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="#interesse">
                Demonstrar interesse
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/ur-play" variant="secondary">
                Começar pelo UR Play
              </Button>
              <Button href="/temporada" variant="ghost">
                Entender temporada
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {eventHeroBadges.map((item) => (
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
                  eventos entram após confirmação oficial
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
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">
                  Agenda pública
                </div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">agenda em formação</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Sem datas, horários, locais, polos confirmados, valores, vagas, atletas ou equipes reais nesta etapa.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="nao-isolado">
        <SectionHeader
          description="No Ultimate Rivals, evento bom tem papel claro: abrir entrada, gerar leitura, criar mídia, alimentar ranking ou fortalecer comunidade."
          eyebrow="Não é ação isolada"
          title="Evento é ponto de passagem dentro da jornada."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {eventNarrativeCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="tipos">
        <SectionHeader
          description="A estrutura permite eventos com funções diferentes: entrada, disputa, desenvolvimento, fechamento de ciclo, comunidade e mídia."
          eyebrow="Tipos de eventos"
          title="Formatos diferentes para momentos diferentes da temporada."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      {eventFocusBlocks.map((event, index) => (
        <EventFocusBlock event={event} index={index} key={event.id} />
      ))}

      <PageSection id="segmentacao">
        <SectionHeader
          description="Eventos podem variar por nível, modalidade, categoria e polo. Essa segmentação ajuda a manter competição justa e operação responsável."
          eyebrow="Nível, modalidade, categoria e polo"
          title="Cada evento precisa respeitar o contexto competitivo."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {segmentationCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 3} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="ranking-coins-midia">
        <SectionHeader
          description="Mini torneios e torneios oficiais podem alimentar ranking, UR Coins e mídia quando houver critérios, presença e operação validados."
          eyebrow="Ranking, UR Coins e mídia"
          title="Evento com dado validado gera narrativa e valor."
        />
        <EcosystemFeedPanel />
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {eventConnectionCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="agenda">
        <SectionHeader
          description="Preview visual da agenda sem datas reais. A página mostra o tipo de informação que será publicada quando houver confirmação oficial."
          eyebrow="Preview visual"
          title="Agenda pública só depois de validação."
        />
        <AgendaPreviewPanel />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="interesse">
        <SectionHeader
          description="Atletas demonstram interesse primeiro. Depois a equipe UR valida agenda, polo, nível, modalidade e libera orientação oficial de inscrição."
          eyebrow="Interesse sem backend"
          title="Participação real depende de validação oficial."
        />
        <InterestPanel />
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para explicar os eventos sem prometer calendário, inscrição, vaga, local ou ranking real."
          eyebrow="FAQ Eventos UR"
          title="Antes da agenda, entenda a função de cada evento."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {eventFaq.map((item) => (
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
              <Badge>CTA Eventos UR</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Entre pelo UR Play. A agenda real vem depois da validação.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                A estrutura de eventos está pronta para organizar entrada, ranking, equipes, mídia, UR Coins,
                patrocinadores e quadras sem inventar datas, vagas ou locais reais.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="#interesse">Demonstrar interesse</Button>
              <Button href="/ur-play" variant="secondary">
                Conhecer UR Play
              </Button>
              <Button href="/temporada" variant="ghost">
                Ver temporada
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
