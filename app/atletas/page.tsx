import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown, ClipboardCheck, Flame } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { AthletePreviewCard } from "@/components/site/athlete-preview-card";
import { IconCard } from "@/components/site/icon-card";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
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
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Atletas UR | Jornada, Ranking e Mentalidade Hunter Ultimate Rivals",
  description:
    "Conheça a jornada dos atletas no Ultimate Rivals, com UR Play, ranking, níveis, equipes, UR Coins, mídia, CT UR e Mentalidade Hunter para evolução dentro do ecossistema.",
};

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
        {hunterPrinciples.map((item: AthleteCard, index: number) => (
          <IconCard item={item} key={item.title} premium={index === 0} />
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
          Cadastro de interesse aberto.
        </h3>
        <p className="mt-4 text-sm leading-6 text-white/72">
          O atleta registra interesse pela central oficial. A equipe UR valida perfil, agenda, polo e próximos passos
          antes de liberar participação, ranking público ou oportunidades.
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
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">triagem operacional</span>
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
          value="Cadastro enviado para triagem operacional. Participação, perfil público, ranking e oportunidades dependem de validação oficial."
        />
        <Button className="mt-4 w-full" href="/cadastro#atleta">
          Abrir cadastro de atleta
        </Button>
      </Card>
    </div>
  );
}

export default function AtletasPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#atleta", label: "Registrar interesse" },
          { href: "/cadastro#atleta", label: "Começar pelo UR Play", variant: "secondary" },
          { href: "#mentalidade-hunter", label: "Mentalidade Hunter", variant: "ghost" },
        ]}
        badges={athleteHeroBadges}
        description="A jornada do atleta começa pelo UR Play e pode evoluir para ranking, níveis, equipes, Draft, eventos, UR Coins, mídia, CT UR e reputação dentro da comunidade."
        eyebrow="Atletas UR • Mentalidade Hunter"
        image={siteImages.athletePortrait}
        imagePosition="center 28%"
        metrics={[
          { label: "Entrada", value: "UR Play e triagem operacional" },
          { label: "Evolução", value: "nível, presença e reputação" },
          { label: "Visão", value: "perfil público após validação" },
        ]}
        statusDescription="Perfil público, histórico, conquistas e ranking ficam disponíveis após validação oficial."
        statusLabel="jornada do atleta"
        statusTitle="Ranking após validação."
        title="O atleta é protagonista do ecossistema."
      />

      <PageSection id="protagonista">
        <SectionHeader
          description="No UR, o atleta é lido por jornada: presença, postura, evolução, desempenho validado, ranking, equipe, mídia e comunidade."
          eyebrow="Protagonista do ecossistema"
          title="Não é só participar. É construir trajetória."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {protagonistCards.map((item: AthleteCard, index: number) => (
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
          {levelRankingCards.map((item: AthleteCard, index: number) => (
            <IconCard item={item} key={item.title} premium={index === 1} />
          ))}
        </div>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          No UR, cada jogo registrado é um passo na construção da sua reputação esportiva.
        </p>
      </PageSection>

      <PageSection id="visibilidade">
        <SectionHeader
          description="A visibilidade não deve ser fabricada. Ela nasce de participação oficial, consistência, postura, narrativa e operação de mídia."
          eyebrow="Visibilidade e reputação"
          title="O atleta vira história quando sustenta a jornada."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {visibilityCards.map((item: AthleteCard, index: number) => (
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
          {opportunityCards.map((item: AthleteCard, index: number) => (
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
          {rewardsCards.map((item: AthleteCard, index: number) => (
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
          {ctDevelopmentCards.map((item: AthleteCard, index: number) => (
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
        <AthletePreviewCard
          eyebrow="Perfis de atleta"
          rows={athleteProfilePlaceholders}
          sideCards={athleteHeroBadges.slice(0, 4).map((title) => ({ title }))}
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="interesse">
        <SectionHeader
          description="Cadastro de interesse aberto para triagem operacional. Não há login, pagamento, Supabase, ranking real ou aprovação automática nesta etapa."
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

      <SegmentCtaPanel
        description="A jornada do atleta está pronta como estrutura pública enquanto perfis, ranking, histórico, equipes, oportunidades e recompensas passam por validação oficial."
        eyebrow="CTA Atletas UR"
        items={["UR Play", "ranking após validação", "Mentalidade Hunter"]}
        statusLabel="cadastro de interesse aberto"
        title="Comece pelo UR Play. Construa reputação quando os dados forem oficiais."
        actions={
          <>
            <Button href="/cadastro#atleta">Começar pelo UR Play</Button>
            <Button href="/cadastro#atleta" variant="secondary">
              Registrar interesse
            </Button>
            <Button href="/ranking" variant="ghost">
              Entender ranking
            </Button>
          </>
        }
      />
    </main>
  );
}
