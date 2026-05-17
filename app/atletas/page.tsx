import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ChevronDown, ClipboardCheck, Flame, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import type { AthleteCard, AthleteJourneyStep } from "@/lib/content/atletas";
import {
  athleteFaq,
  athleteHeroBadges,
  athleteJourneySteps,
  athleteProfilePlaceholders,
  ctDevelopmentCards,
  hunterPrinciples,
  interestFields,
  interestFlow,
  levelRankingCards,
  opportunityCards,
  protagonistCards,
  rewardsCards,
  visibilityCards,
} from "@/lib/content/atletas";

export const metadata: Metadata = {
  title: "Atletas UR | Jornada, Ranking e Mentalidade Hunter Ultimate Rivals",
  description:
    "Conheça a jornada dos atletas no Ultimate Rivals, com UR Play, ranking, níveis, equipes, UR Coins, mídia, CT UR e Mentalidade Hunter para evolução dentro do ecossistema.",
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

function IconCard({ item, premium = false }: { item: AthleteCard; premium?: boolean }) {
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

function AthleteJourney({ steps }: { steps: readonly AthleteJourneyStep[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[21px] top-0 hidden h-full w-px bg-[#ffd84d]/20 md:block lg:left-0 lg:top-[21px] lg:h-px lg:w-full" />
      <div className="grid gap-3 md:gap-4 lg:grid-cols-4">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div className="relative grid grid-cols-[44px_1fr] gap-4 lg:block" key={item.step}>
              <span className="relative z-10 grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/35 bg-[#111218] text-sm font-black text-[#ffe98b] shadow-[0_0_0_6px_rgba(3,4,5,1)]">
                {item.step}
              </span>
              <Card className="min-h-[210px] p-4 md:p-5 lg:mt-5" premium={item.step === "01"}>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
                  <Icon aria-hidden className="h-5 w-5 text-[#ffd84d]" />
                </span>
                <h3 className="mt-4 text-base font-black uppercase leading-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
                <p className="mt-4 text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#ffe98b]">
                  {item.status}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HunterPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch">
      <Card className="flex min-h-[330px] flex-col" premium>
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
            <Flame aria-hidden className="h-6 w-6 text-[#ffd84d]" />
          </span>
          <Image
            alt="Hunter"
            className="h-12 w-12 object-contain opacity-90"
            height={48}
            src="/brand/logo-hunter.png"
            width={48}
          />
        </div>
        <h2 className="mt-6 text-[clamp(2rem,8vw,3.05rem)] font-black uppercase leading-[0.98] text-white">
          Mentalidade Hunter é postura, não promessa.
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/72">
          É a cultura de desenvolvimento do atleta UR: disciplina, presença, responsabilidade, evolução contínua,
          competitividade saudável, respeito e busca por excelência sem arrogância.
        </p>
        <p className="mt-auto pt-6 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#ffe98b]">
          preparo físico, técnico e mental • compromisso com equipe, ranking e comunidade
        </p>
      </Card>
      <div className="grid gap-3 sm:grid-cols-2">
        {hunterPrinciples.map((item, index) => (
          <IconCard item={item} key={item.title} premium={index === 0} />
        ))}
      </div>
    </div>
  );
}

function AthleteProfilesPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Perfis de atleta</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
            sem perfil real nesta etapa
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {athleteProfilePlaceholders.map((row, index) => (
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
        {athleteHeroBadges.slice(0, 4).map((item) => (
          <Card className="min-h-[132px] p-4 md:p-5" key={item}>
            <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
              <UserRound aria-hidden className="h-5 w-5 text-[#ffd84d]" />
            </span>
            <h3 className="mt-3 text-sm font-black uppercase leading-tight tracking-[0.08em] text-white">{item}</h3>
            <p className="mt-2 text-sm text-white/65">sem dados reais de atleta nesta etapa</p>
          </Card>
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
          Registro visual, sem cadastro real.
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/72">
          O fluxo abaixo demonstra como o atleta deve entrar no ecossistema. Não há backend, login, pagamento,
          Supabase, ranking real ou envio de formulário nesta fase.
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
          <Badge>Interesse do atleta</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">sem backend real</span>
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
          value="Cadastro real será liberado após validação oficial de operação, agenda, polo e critérios."
        />
        <button
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-[#ffd84d]/25 bg-[#ffd84d]/10 px-5 py-3 text-center text-sm font-extrabold uppercase leading-5 tracking-[0.08em] text-[#ffe98b]"
          disabled
          type="button"
        >
          Cadastro será liberado após validação
        </button>
      </Card>
    </div>
  );
}

export default function AtletasPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-10 md:py-12 lg:px-8 lg:py-14">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Atletas UR • Mentalidade Hunter</Badge>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.75rem,10vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white md:text-[clamp(3.45rem,6vw,5rem)] lg:mx-0">
              O atleta é protagonista do ecossistema.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              A jornada do atleta começa pelo UR Play e pode evoluir para ranking, níveis, equipes, Draft, eventos,
              UR Coins, mídia, CT UR e reputação dentro da comunidade.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="#interesse">
                Registrar interesse
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/ur-play" variant="secondary">
                Começar pelo UR Play
              </Button>
              <Button href="#mentalidade-hunter" variant="ghost">
                Mentalidade Hunter
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {athleteHeroBadges.map((item) => (
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
                  <UserRound aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                </span>
                <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  perfil liberado após validação
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
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">Perfil do atleta</div>
                <div className="mt-2 text-2xl font-black uppercase leading-none text-white">ranking em formação</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Sem perfil real, nome, foto, número, posição, resultado, conquista ou histórico nesta etapa.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <PageSection id="protagonista">
        <SectionHeader
          description="No UR, o atleta é lido por jornada: presença, postura, evolução, desempenho validado, ranking, equipe, mídia e comunidade."
          eyebrow="Protagonista do ecossistema"
          title="Não é só participar. É construir trajetória."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {protagonistCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="jornada">
        <SectionHeader
          action={
            <Button href="/ur-play" variant="secondary">
              Ver UR Play
            </Button>
          }
          description="O atleta começa pelo UR Play e só ganha histórico público quando cadastro, participação e dados forem validados oficialmente."
          eyebrow="Jornada do atleta"
          title="Entrada, leitura, reputação e oportunidade."
        />
        <AthleteJourney steps={athleteJourneySteps} />
      </PageSection>

      <PageSection id="mentalidade-hunter">
        <SectionHeader
          description="Mentalidade Hunter é a cultura de desenvolvimento do atleta UR: compromisso com equipe, ranking, comunidade e evolução constante."
          eyebrow="Mentalidade Hunter"
          title="Competir com fome, preparo e respeito."
        />
        <HunterPanel />
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="niveis-ranking">
        <SectionHeader
          description="Níveis, ranking e participação ajudam a organizar atletas por contexto, evitando leitura injusta e dados sem validação."
          eyebrow="Níveis, ranking e participação"
          title="Reputação nasce de presença, postura e evolução."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {levelRankingCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
      </PageSection>

      <PageSection id="visibilidade">
        <SectionHeader
          description="A visibilidade não deve ser fabricada. Ela nasce de participação oficial, consistência, postura, narrativa e operação de mídia."
          eyebrow="Visibilidade e reputação"
          title="O atleta vira história quando sustenta a jornada."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {visibilityCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="oportunidades">
        <SectionHeader
          description="Equipes, Draft, eventos e CT UR aparecem como portas possíveis, sempre depois de critérios oficiais e validação operacional."
          eyebrow="Equipes, Draft e oportunidades"
          title="Oportunidade no UR precisa de contexto e critério."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {opportunityCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection id="ur-coins">
        <SectionHeader
          action={
            <Button href="/ur-market" variant="secondary">
              Ver UR Market
            </Button>
          }
          description="UR Coins e recompensas entram na jornada como conceito de reconhecimento, não como saldo, pagamento ou promessa real nesta fase."
          eyebrow="UR Coins e recompensas"
          title="Participação validada pode virar benefício futuro."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {rewardsCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 0} />
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="ct-ur">
        <SectionHeader
          description="CT UR pode apoiar desenvolvimento físico, técnico e mental quando houver estrutura validada, sem método milagroso ou promessa de resultado."
          eyebrow="CT UR e desenvolvimento"
          title="Evoluir exige preparo, leitura e continuidade."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {ctDevelopmentCards.map((item, index) => (
            <IconCard item={item} key={item.title} premium={index === 2} />
          ))}
        </div>
      </PageSection>

      <PageSection id="perfis">
        <SectionHeader
          description="Perfis reais de atletas só entram após cadastro, validação e participação oficial. A interface mostra estrutura, não dados inventados."
          eyebrow="Perfis de atleta"
          title="Pronto para histórico real, quando ele existir."
        />
        <AthleteProfilesPanel />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="interesse">
        <SectionHeader
          description="Registro visual para mostrar o caminho do atleta. Não há cadastro funcional, backend, login, pagamento ou integração nesta etapa."
          eyebrow="Registro de interesse"
          title="Primeiro interesse. Depois validação oficial."
        />
        <InterestPanel />
      </PageSection>

      <PageSection id="faq">
        <SectionHeader
          description="Perguntas rápidas para explicar a jornada sem prometer perfil, ranking, equipe, Draft ou recompensa real."
          eyebrow="FAQ Atletas UR"
          title="Antes do ranking, entenda a jornada."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {athleteFaq.map((item) => (
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
              <Badge>CTA Atletas UR</Badge>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
                Comece pelo UR Play. Construa reputação quando os dados forem oficiais.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                A jornada do atleta está pronta como estrutura pública enquanto perfis, ranking, histórico, equipes,
                oportunidades e recompensas passam por validação oficial.
              </p>
            </div>
            <div className="grid gap-3">
              <Button href="/ur-play">Começar pelo UR Play</Button>
              <Button href="#interesse" variant="secondary">
                Registrar interesse
              </Button>
              <Button href="/ranking" variant="ghost">
                Entender ranking
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
