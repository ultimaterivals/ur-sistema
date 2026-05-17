import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, BarChart3, ChevronDown, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { RankingCard, RankingStep } from "@/lib/content/ranking";
import {
  coinRewardFlow,
  engagementRankingCards,
  entrySteps,
  individualRankingCards,
  levelLanes,
  mediaImpactCards,
  opportunityTags,
  rankingFaq,
  rankingHeroBadges,
  rankingNarrativeCards,
  rankingPreviewRows,
  rankingTypes,
  scoringCriteria,
  teamRankingCards,
} from "@/lib/content/ranking";

export const metadata: Metadata = {
  title: "Ranking UR | Ranking de Atletas, Equipes e Temporada Ultimate Rivals",
  description:
    "Conheça o Ranking UR, o sistema público de classificação do Ultimate Rivals que organiza atletas, equipes, níveis, desempenho, UR Coins, recompensas e oportunidades dentro da temporada.",
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

function IconCard({ item, premium = false }: { item: RankingCard; premium?: boolean }) {
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

function EntryTimeline({ steps }: { steps: readonly RankingStep[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[21px] top-0 hidden h-full w-px bg-[#ffd84d]/20 md:block lg:left-0 lg:top-[21px] lg:h-px lg:w-full" />
      <div className="grid gap-3 md:gap-4 lg:grid-cols-4">
        {steps.map((item) => (
          <div className="relative grid grid-cols-[44px_1fr] gap-4 lg:block" key={item.step}>
            <span className="relative z-10 grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/35 bg-[#111218] text-sm font-black text-[#ffe98b] shadow-[0_0_0_6px_rgba(3,4,5,1)]">
              {item.step}
            </span>
            <Card className="min-h-[168px] p-4 md:p-5 lg:mt-5">
              <h3 className="text-base font-black uppercase leading-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function RankingPreviewPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Preview visual</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
            dados reais entram após validação
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {rankingPreviewRows.map((row, index) => (
            <div
              className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-black/30 p-4"
              key={row.label}
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-black uppercase leading-tight text-white">{row.label}</h3>
                <p className="mt-1 text-sm font-bold text-[#ffe98b]">{row.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/62">{row.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {rankingTypes.map((item) => {
          const Icon = item.icon;
          return (
            <Card className="min-h-[132px] p-4 md:p-5" key={item.title}>
              <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                <Icon aria-hidden className="h-5 w-5 text-[#ffd84d]" />
              </span>
              <h3 className="mt-3 text-sm font-black uppercase leading-tight tracking-[0.08em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/65">ranking em formação</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default function RankingPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Ranking UR • temporada em formação</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              Ranking como narrativa da temporada.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Ranking UR organiza atletas, equipes, níveis, polos, modalidades e engajamento para transformar
              desempenho em histórico, visibilidade, oportunidades, UR Coins, mídia e recompensas.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/ur-play">
                Começar pelo UR Play
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="#preview" variant="secondary">
                Ver preview
              </Button>
              <Button href="/equipes" variant="ghost">
                Ranking de equipes
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {rankingHeroBadges.map((item) => (
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
                  <BarChart3 aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  ranking em formação
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
                  Ranking preview
                </div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">
                  sem atletas, números ou posições reais nesta etapa
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Dados reais entram após validação oficial de critérios, agenda, temporada e operação.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="narrativa">
        <SectionHeader
          description="Ranking público não é vitrine vazia. Ele cria leitura compartilhada da temporada para atletas, equipes, mídia, patrocinadores e comunidade."
          eyebrow="Não é só tabela"
          title="Classificação, memória e história competitiva no mesmo lugar."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {rankingNarrativeCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="entrada">
        <SectionHeader
          action={
            <Button href="/ur-play" variant="secondary">
              Conhecer UR Play
            </Button>
          }
          description="Ranking começa a ser alimentado pelo UR Play, mas só publica dados quando houver validação oficial."
          eyebrow="Entrada no ranking"
          title="Do UR Play ao histórico público, sem dados inventados."
        />
        <EntryTimeline steps={entrySteps} />
      </PageSection>

      <PageSection id="tipos">
        <SectionHeader
          description="Estrutura planejada para organizar atletas, equipes, níveis, polos, modalidades e engajamento dentro do ecossistema."
          eyebrow="Tipos de ranking"
          title="Várias leituras da temporada, cada uma com função própria."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rankingTypes.map((item) => (
            <IconCard item={item} key={item.title} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="niveis">
        <SectionHeader
          description="Diferentes níveis permitem uma competição mais justa. Atletas não precisam ser comparados fora de contexto."
          eyebrow="Ranking por níveis"
          title="Comparar melhor para competir melhor."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {levelLanes.map((lane, index) => (
            <Card className="min-h-[202px] p-4 md:p-5" premium={index === 2} key={lane.label}>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">
                faixa {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-black uppercase leading-tight text-white">{lane.label}</h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-[#ffe98b]">{lane.status}</p>
              <p className="mt-4 text-sm leading-6 text-white/70">{lane.description}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection id="criterios">
        <SectionHeader
          description="Critérios de pontuação ainda estão em validação. A página mostra frentes possíveis sem atribuir pesos, números ou regras finais."
          eyebrow="Critérios de pontuação"
          title="Pontuar exige regra clara, dado real e validação oficial."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scoringCriteria.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 5} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="individual">
        <SectionHeader
          description="Ranking individual organiza a jornada do atleta: presença, desempenho, evolução, histórico e visibilidade pública."
          eyebrow="Ranking individual"
          title="Atleta deixa de ser presença solta e ganha trajetória."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
          <Card className="flex min-h-[258px] flex-col" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Trophy aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-6 text-[clamp(1.9rem,7vw,2.45rem)] font-black uppercase leading-[0.98] text-white">
              Histórico individual em formação.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Nenhum atleta, número, colocação ou pontuação real será exibido antes de validação oficial.
            </p>
          </Card>
          <div className="grid gap-3 md:grid-cols-3">
            {individualRankingCards.map((item) => (
              <IconCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection id="equipes">
        <SectionHeader
          action={
            <Button href="/equipes" variant="secondary">
              Ver equipes
            </Button>
          }
          description="Ranking de equipes conecta elenco, presença, identidade, rivalidade, repasses e narrativa coletiva."
          eyebrow="Ranking de equipes"
          title="Times também constroem posição, história e valor."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {teamRankingCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="engajamento">
        <SectionHeader
          description="Engajamento não substitui desempenho esportivo. Ele amplia a leitura do ecossistema quando houver missões, comunidade e mídia validadas."
          eyebrow="Ranking de engajamento"
          title="Participar da comunidade também pode gerar leitura de valor."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {engagementRankingCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 2} />
          ))}
        </div>
      </PageSection>

      <PageSection id="coins-recompensas">
        <SectionHeader
          action={
            <Button href="/ur-market" variant="secondary">
              Conhecer UR Market
            </Button>
          }
          description="Ranking pode se conectar a UR Coins, premiações, benefícios, repasses e recompensas quando a operação estiver ativa."
          eyebrow="UR Coins e recompensas"
          title="Desempenho validado pode virar reconhecimento."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-stretch">
          <Card className="flex min-h-[260px] flex-col" premium>
            <span className="rounded-md border border-[#ffd84d]/20 bg-black/30 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              economia em formação
            </span>
            <h3 className="mt-6 text-[clamp(1.85rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
              Sem saldo, carteira ou valor real nesta fase.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              UR Coins e recompensas dependem de critérios oficiais, regras futuras, parceiros e operação validada.
            </p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-4">
            {coinRewardFlow.map((item, index) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-black uppercase leading-5 tracking-[0.1em] text-white"
                key={item}
              >
                <span className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-[#ffd84d] text-xs text-black">
                  {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="midia">
        <SectionHeader
          description="Ranking ajuda a mídia a contar histórias: evolução, viradas, rivalidades, destaques e oportunidades."
          eyebrow="Mídia e destaques"
          title="Classificação pública também é palco narrativo."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {mediaImpactCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {opportunityTags.map((item) => (
            <span
              className="rounded-lg border border-[#ffd84d]/20 bg-[#ffd84d]/10 px-4 py-3 text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#ffe98b]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection id="preview">
        <SectionHeader
          description="Preview visual para mostrar a estrutura. Não há atletas, números, posições, pontuação ou eventos reais nesta etapa."
          eyebrow="Preview do ranking"
          title="Interface pronta para dados reais, quando eles existirem."
        />
        <RankingPreviewPanel />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="faq">
        <SectionHeader
          description="Perguntas rápidas para explicar o ranking sem prometer funcionalidades que ainda não existem."
          eyebrow="FAQ Ranking UR"
          title="Antes de olhar posição, entenda a fase atual."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {rankingFaq.map((item) => (
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
              <Badge>CTA Ranking UR</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Entre pelo UR Play. Construa ranking quando a temporada validar dados.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                A estrutura pública está pronta para organizar atletas, equipes, níveis, mídia e oportunidades sem
                inventar pontuação, posição ou resultado real.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="/ur-play">Começar pelo UR Play</Button>
              <Button href="/equipes" variant="secondary">
                Ver equipes
              </Button>
              <Button href="/temporada" variant="ghost">
                Entender temporada
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
