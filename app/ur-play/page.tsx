import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, ChevronDown, ClipboardList, Lock, MapPin, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { URPlayCard, URPlayStep } from "@/lib/content/ur-play";
import {
  athleteBenefits,
  coinsRewardCards,
  interestFields,
  interestFlow,
  poloCards,
  rankingFlow,
  rankingLevelingCards,
  rewardFlow,
  teamBenefitsFromURPlay,
  upcomingURPlays,
  urPlayAudienceCards,
  urPlayComparisonRows,
  urPlayFaq,
  urPlayHighlights,
  urPlayIntroCards,
  urPlayJourneySteps,
} from "@/lib/content/ur-play";

export const metadata: Metadata = {
  title: "UR Play | Entrada Oficial no Ecossistema Ultimate Rivals",
  description:
    "Conheça o UR Play, a porta de entrada do Ultimate Rivals para atletas que querem entrar no ranking, evoluir por níveis, ganhar visibilidade, acumular UR Coins e disputar oportunidades no ecossistema.",
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

function IconCard({ item, premium = false }: { item: URPlayCard; premium?: boolean }) {
  const Icon = item.icon;

  return (
    <Card className="flex h-full min-h-[196px] flex-col" premium={premium}>
      <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
        <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
      </span>
      <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
    </Card>
  );
}

function JourneyTimeline({ steps }: { steps: readonly URPlayStep[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[21px] top-0 hidden h-full w-px bg-[#ffd84d]/20 md:block lg:left-0 lg:top-[21px] lg:h-px lg:w-full" />
      <div className="grid gap-3 md:gap-4 lg:grid-cols-6">
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

export default function URPlayPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>UR Play • entrada oficial • ranking em formação</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.7rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.4rem,6vw,5rem)] lg:mx-0">
              A porta de entrada do atleta no Ultimate Rivals.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              UR Play organiza a primeira experiência competitiva do atleta: jogar, ser observado, iniciar
              histórico, entrar no radar de ranking e se conectar a equipes, Draft, torneios, CT UR e recompensas.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/cadastro#atleta">
                Registrar interesse
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="#como-funciona" variant="secondary">
                Como funciona
              </Button>
              <Button href="/ranking" variant="ghost">
                Entender ranking
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {urPlayHighlights.map((item) => (
                <span
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3 text-xs font-black uppercase leading-5 tracking-[0.1em] text-[#ffe98b]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <Card className="overflow-hidden p-4 md:p-5" premium>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                  <Shield aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  inscrição será liberada após validação
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
                  Jornada UR Play
                </div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">agenda em formação</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Sem datas, polos confirmados, atletas ou ranking real nesta etapa do MVP.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="o-que-e">
        <SectionHeader
          description="UR Play é a entrada oficial para atletas começarem uma jornada dentro do Ultimate Rivals sem depender de dados inventados, agenda fictícia ou ranking falso."
          eyebrow="O que é"
          title="Mais do que um jogo. É o início de uma trajetória esportiva."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {urPlayIntroCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="para-quem">
        <SectionHeader
          description="Voltada a atletas que querem competir melhor, ganhar visibilidade e encontrar caminhos reais dentro do ecossistema."
          eyebrow="Para quem é"
          title="Atletas individuais, talentos em evolução e jogadores com equipe."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {urPlayAudienceCards.map((item) => (
            <IconCard item={item} key={item.title} />
          ))}
        </div>
      </PageSection>

      <PageSection id="nao-e-rachao">
        <SectionHeader
          description="Diferença central está em dar contexto ao jogo e criar continuidade para a jornada do atleta, sem prometer resultados automáticos."
          eyebrow="Comparativo"
          title="UR Play não é rachão. É entrada oficial com estrutura."
        />
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
          <div className="grid border-b border-white/10 bg-black/35 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b] md:grid-cols-[0.72fr_1fr_1fr]">
            <div className="hidden px-5 py-4 md:block">Critério</div>
            <div className="border-white/10 px-5 py-4 md:border-l">Rachão comum</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">UR Play</div>
          </div>
          {urPlayComparisonRows.map((row) => (
            <div
              className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.72fr_1fr_1fr]"
              key={row.label}
            >
              <div className="bg-white/[0.025] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-white">
                {row.label}
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/62 md:border-l md:border-t-0">
                {row.common}
              </div>
              <div className="border-t border-[#ffd84d]/15 bg-[#ffd84d]/[0.045] px-5 py-4 text-sm font-semibold leading-6 text-white/78 md:border-l md:border-t-0">
                {row.urPlay}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="como-funciona">
        <SectionHeader
          action={
            <Button href="/cadastro#atleta" variant="secondary">
              Registrar interesse
            </Button>
          }
          description="Jornada desenhada para explicar o caminho do atleta antes de qualquer automação, login, pagamento ou ranking real."
          eyebrow="Como funciona"
          title="Da intenção inicial ao radar de oportunidades."
        />
        <JourneyTimeline steps={urPlayJourneySteps} />
      </PageSection>

      <PageSection id="beneficios-atleta">
        <SectionHeader
          description="Participar significa mais do que entrar em quadra: é construir presença, evolução e contexto competitivo."
          eyebrow="Benefícios para o atleta"
          title="Participar para ser visto, medido com critério e evoluir."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {athleteBenefits.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="equipes-draft">
        <SectionHeader
          description="UR Play também prepara a conexão com equipes, Draft, torneios e desenvolvimento, sempre sem simular atletas ou movimentos reais."
          eyebrow="Equipes, Draft e torneios"
          title="O jogo pode virar radar para oportunidades futuras."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {teamBenefitsFromURPlay.map((item) => (
            <IconCard item={item} key={item.title} />
          ))}
        </div>
      </PageSection>

      <PageSection id="ranking-nivelamento">
        <SectionHeader
          action={
            <Button href="/ranking" variant="secondary">
              Ver estrutura do ranking
            </Button>
          }
          description="Nivelamento e ranking são partes centrais da proposta, mas só avançam com critérios, registros e dados reais validados."
          eyebrow="Nivelamento e ranking"
          title="Competir contra perfis próximos e construir posição com validação."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.62fr)] lg:items-stretch">
          <Card className="p-4 md:p-5" premium>
            <div className="grid gap-3 md:grid-cols-4">
              {rankingFlow.map((item, index) => (
                <div className="relative rounded-lg border border-white/10 bg-black/25 p-4" key={item.title}>
                  {index < rankingFlow.length - 1 ? (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-[#ffd84d] md:block"
                    />
                  ) : null}
                  <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-base font-black uppercase leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
          <div className="grid gap-3">
            {rankingLevelingCards.map((item) => (
              <IconCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="ur-coins">
        <SectionHeader
          action={
            <Button href="/ur-market" variant="secondary">
              Conhecer UR Market
            </Button>
          }
          description="UR Coins aparecem como conceito planejado de recompensa. Não há moeda real, saldo, pagamento ou carteira nesta fase."
          eyebrow="UR Coins e recompensas"
          title="Presença e evolução podem virar recompensa no futuro."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-stretch">
          <Card className="flex min-h-[260px] flex-col" premium>
            <span className="rounded-md border border-[#ffd84d]/20 bg-black/30 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              economia em formação
            </span>
            <h3 className="mt-6 text-[clamp(1.85rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
              Do jogo ao benefício, sem moeda real nesta fase.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Este painel mostra a lógica planejada para recompensas, mantendo claro que ainda não existe saldo,
              carteira, pagamento ou integração financeira.
            </p>
          </Card>
          <div className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-4">
              {rewardFlow.map((item, index) => (
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
            <div className="grid gap-3 md:grid-cols-3">
              {coinsRewardCards.map((item) => (
                <IconCard item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection id="polos">
        <SectionHeader
          description="Expansão depende de quadras parceiras, calendário, equipe operacional, regulamento e validação de cada praça."
          eyebrow="Polos em formação"
          title="Participação por polos, com agenda validada antes da inscrição."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {poloCards.map((item) => (
            <IconCard item={item} key={item.title} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="proximos-ur-plays">
        <SectionHeader
          description="Estes cards mostram a estrutura planejada. Nenhum evento, data ou polo real foi confirmado nesta fase."
          eyebrow="Próximos UR Plays"
          title="Agenda pública apenas após validação operacional."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {upcomingURPlays.map((item) => (
            <Card className="flex h-full min-h-[236px] flex-col" premium key={item.title}>
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
                  <CalendarDays aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="max-w-[62%] rounded-md border border-[#ffd84d]/25 px-2 py-1 text-right text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-[#ffe98b]">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-5 text-[clamp(1.65rem,7vw,2rem)] font-black uppercase leading-[0.98] text-white">
                {item.title}
              </h3>
              <div className="mt-auto grid gap-2 pt-5 text-sm text-white/70">
                <span className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 font-bold">
                  {item.modality}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2">
                  <MapPin aria-hidden className="h-4 w-4 text-[#ffd84d]" />
                  {item.location}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection id="interesse">
        <SectionHeader
          description="Este formulário é apenas visual no MVP. Ele demonstra o caminho do atleta sem gravar dados, enviar informações ou integrar backend."
          eyebrow="Interesse do atleta"
          title="Registro de interesse UR Play."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch">
          <Card className="flex min-h-[340px] flex-col" premium>
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Lock aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
            <h3 className="mt-6 text-[clamp(1.9rem,7vw,2.35rem)] font-black uppercase leading-[0.98] text-white">
              Interesse vem antes da inscrição real.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Cadastro público real depende de agenda, regulamento, política de dados e operação ativa.
            </p>
            <div className="mt-6 grid gap-2">
              {interestFlow.map((item, index) => (
                <div
                  className="grid grid-cols-[34px_1fr] items-center gap-3 rounded-md border border-white/10 bg-black/25 px-3 py-3"
                  key={item}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-[#ffd84d] text-xs font-black text-black">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-white/78">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-6 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#ffe98b]">
              sem envio real, sem login, sem pagamento e sem banco de dados nesta fase
            </p>
          </Card>

          <Card className="p-4 md:p-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                <ClipboardList aria-hidden className="h-5 w-5 text-[#ffd84d]" />
              </span>
              <div>
                <h3 className="text-lg font-black uppercase leading-tight text-white">Pré-cadastro visual</h3>
                <p className="mt-1 text-sm text-white/60">campos bloqueados para evitar coleta real de dados</p>
              </div>
            </div>
            <form aria-label="Formulário visual de interesse UR Play" className="grid gap-3">
              {interestFields.map((field) => (
                <label className="grid gap-2" key={field}>
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-[#ffe98b]">{field}</span>
                  <input
                    className="min-h-12 rounded-lg border border-white/10 bg-black/35 px-4 text-sm text-white/70 outline-none placeholder:text-white/35"
                    placeholder="campo visual em formação"
                    readOnly
                    type="text"
                  />
                </label>
              ))}
              <button
                className="mt-2 min-h-12 cursor-not-allowed rounded-lg border border-[#ffd84d]/25 bg-[#ffd84d]/10 px-5 py-3 text-sm font-extrabold uppercase leading-5 tracking-[0.08em] text-[#ffe98b]/75"
                disabled
                type="button"
              >
                inscrição será liberada após validação
              </button>
            </form>
          </Card>
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="faq">
        <SectionHeader
          description="Perguntas rápidas para explicar a etapa atual sem prometer funcionalidades que ainda não existem."
          eyebrow="FAQ UR Play"
          title="O que o atleta precisa saber antes de entrar."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {urPlayFaq.map((item) => (
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
              <Badge>CTA UR Play</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Comece pelo UR Play. Evolua dentro do ecossistema.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                Esta página está pronta para orientar atletas enquanto agenda, polos, ranking, inscrições e operação
                passam por validação.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="/cadastro#atleta">Registrar interesse visual</Button>
              <Button href="/ranking" variant="secondary">
                Entender ranking
              </Button>
              <Button href="/equipes" variant="ghost">
                Ver jornada das equipes
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
