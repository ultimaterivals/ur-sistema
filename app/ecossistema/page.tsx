import type { Metadata } from "next";
import { PlatformHero } from "@/components/editorial/platform-hero";
import { EcosystemFlowPanel } from "@/components/site/ecosystem-flow-panel";
import { PageSection } from "@/components/site/page-section";
import {
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Camera,
  Coins,
  Dumbbell,
  Handshake,
  MapPin,
  Shield,
  ShoppingBag,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Ecossistema UR | Plataforma Esportiva Ultimate Rivals",
  description:
    "Entenda o Ultimate Rivals como ecossistema esportivo contínuo com UR Play, ranking, temporada, equipes, CT UR, mídia, UR Market, patrocinadores e quadras.",
};

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

const comparisonRows = [
  {
    label: "Finalidade",
    common: "Ação isolada começa, acaba e deixa pouca continuidade.",
    ur: "Cada entrada alimenta jornada, ranking, mídia, temporada e novas oportunidades.",
  },
  {
    label: "Atleta",
    common: "Participa, joga e volta para o anonimato.",
    ur: "Constrói presença, histórico, reputação, nível, equipe e visibilidade.",
  },
  {
    label: "Dados",
    common: "Resultado fica solto, sem leitura pública consistente.",
    ur: "Dados públicos entram apenas após validação oficial e critérios claros.",
  },
  {
    label: "Comunidade",
    common: "Público acompanha um momento isolado.",
    ur: "Comunidade acompanha ciclo, ranking, histórias, rivalidades e evolução.",
  },
] as const;

const pillars: Pillar[] = [
  {
    icon: Zap,
    title: "UR Play",
    description: "Porta de entrada para atletas serem observados, participarem e iniciarem histórico validado.",
    href: "/ur-play",
  },
  {
    icon: BadgeCheck,
    title: "Nivelamento",
    description: "Leitura de nível para organizar competição mais justa por contexto, modalidade e evolução.",
  },
  {
    icon: BarChart3,
    title: "Ranking",
    description: "Narrativa pública da temporada, sempre com dados reais apenas após validação oficial.",
    href: "/ranking",
  },
  {
    icon: CalendarDays,
    title: "Temporada",
    description: "Ciclo contínuo com entrada, eventos, virada de ranking, recompensas e novo ciclo.",
    href: "/temporada",
  },
  {
    icon: Shield,
    title: "Equipes",
    description: "Times deixam de ser grupos soltos e viram ativos competitivos, midiáticos e comerciais.",
    href: "/equipes",
  },
  {
    icon: Dumbbell,
    title: "CT UR",
    description: "Base de desenvolvimento técnico, físico, mental e humano dentro do ecossistema.",
    href: "/ct-ur",
  },
  {
    icon: Coins,
    title: "UR Coins",
    description: "Economia interna planejada para reconhecer presença, evolução e engajamento validados.",
  },
  {
    icon: ShoppingBag,
    title: "UR Market",
    description: "Vitrine de recompensas, benefícios, produtos, experiências e ativações aprovadas.",
    href: "/ur-market",
  },
  {
    icon: Camera,
    title: "Mídia",
    description: "Palco para histórias, bastidores, rankings narrativos, cortes e conteúdo oficial.",
    href: "/midia",
  },
  {
    icon: Handshake,
    title: "Patrocinadores",
    description: "Marcas entram na jornada do atleta, não apenas em espaços de exposição.",
    href: "/patrocinadores",
  },
  {
    icon: MapPin,
    title: "Quadras",
    description: "Bases operacionais e comerciais para polos, eventos, comunidade e recorrência.",
    href: "/quadras-parceiras",
  },
] as const;

const journeyFlow = [
  {
    label: "Entrar",
    description: "O primeiro passo acontece pela central de cadastro e triagem operacional.",
  },
  {
    label: "Ser avaliado",
    description: "Participação, postura e contexto esportivo passam por validação da equipe UR.",
  },
  {
    label: "Competir",
    description: "UR Play, eventos e torneios alimentam a jornada quando a agenda estiver confirmada.",
  },
  {
    label: "Evoluir",
    description: "Níveis, feedback e CT UR organizam progresso sem promessa de resultado automático.",
  },
  {
    label: "Ganhar visibilidade",
    description: "Ranking, mídia e comunidade transformam participação validada em narrativa pública.",
  },
  {
    label: "Receber recompensas",
    description: "UR Coins, benefícios e ativações entram após aprovação operacional.",
  },
  {
    label: "Virar referência",
    description: "Histórico, presença e conduta constroem reputação dentro do ecossistema.",
  },
] as const;

const audiencePaths = [
  {
    title: "Atleta",
    description: "Começa pelo UR Play, constrói presença, ranking e oportunidades.",
    href: "/cadastro#atleta",
  },
  {
    title: "Equipe",
    description: "Registra interesse para identidade, elenco, capitão e ranking coletivo.",
    href: "/cadastro#equipe",
  },
  {
    title: "Patrocinador",
    description: "Ativa marca em mídia, ranking, eventos, UR Market e comunidade.",
    href: "/cadastro#patrocinador",
  },
  {
    title: "Quadra",
    description: "Entra como base de polo, calendário, eventos e recorrência local.",
    href: "/cadastro#quadra",
  },
  {
    title: "Comunidade",
    description: "Acompanha avisos, mídia, ranking, bastidores e próximos passos.",
    href: "/cadastro#comunidade",
  },
] as const;


export default function EcossistemaPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro", label: "Entrar no ecossistema" },
          { href: "/ur-play", label: "Começar pelo UR Play", variant: "secondary" },
        ]}
        badges={["UR Play", "Ranking contínuo", "Mídia própria", "UR Market", "Quadras parceiras"]}
        description="UR conecta atletas, equipes, quadras, patrocinadores, mídia, ranking, recompensas e comunidade em uma jornada contínua para profissionalizar o esporte amador."
        eyebrow="Ecossistema UR • temporada • ranking • mídia"
        image={siteImages.teamEmbrace}
        imagePosition="center 45%"
        metrics={[
          { label: "Entrada", value: "UR Play e cadastro de interesse" },
          { label: "Base", value: "dados públicos após validação oficial" },
          { label: "Saída", value: "histórico, visibilidade e oportunidade" },
        ]}
        statusDescription="O objetivo é transformar participação em histórico, histórico em narrativa, narrativa em oportunidade e oportunidade em valor para a comunidade."
        statusLabel="sistema contínuo"
        statusTitle="Cada participação precisa deixar rastro."
        title="O Ultimate Rivals é um ecossistema esportivo contínuo."
      />

      <PageSection>
        <SectionHeader
          description="A diferença central está na continuidade. O UR organiza o que normalmente se perde depois de um jogo."
          eyebrow="Comparativo"
          title="Formato isolado vs Ultimate Rivals."
        />
        <Card className="overflow-hidden p-0" premium>
          <div className="grid border-b border-white/10 bg-[#ffd84d]/10 text-xs font-black uppercase tracking-[0.12em] text-[#ffe98b] md:grid-cols-[0.6fr_1fr_1fr]">
            <div className="px-5 py-4">Critério</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">Formato isolado</div>
            <div className="border-t border-[#ffd84d]/15 px-5 py-4 md:border-l md:border-t-0">Ultimate Rivals</div>
          </div>
          {comparisonRows.map((row) => (
            <div className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.6fr_1fr_1fr]" key={row.label}>
              <div className="bg-white/[0.035] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-white">
                {row.label}
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/62 md:border-l md:border-t-0">
                {row.common}
              </div>
              <div className="border-t border-[#ffd84d]/15 bg-[#ffd84d]/[0.045] px-5 py-4 text-sm font-semibold leading-6 text-white/78 md:border-l md:border-t-0">
                {row.ur}
              </div>
            </div>
          ))}
        </Card>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="Os pilares não funcionam isolados. Cada um reforça o outro para criar temporada, narrativa, valor comercial e evolução."
          eyebrow="Pilares"
          title="As peças do ecossistema público UR."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="flex min-h-[232px] flex-col" key={item.title} premium={index === 0 || index === 2}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
                {item.href ? (
                  <Button className="mt-auto w-full" href={item.href} variant="secondary">
                    Conhecer
                  </Button>
                ) : null}
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          description="A jornada é planejada para que atleta e comunidade vejam evolução com continuidade, mesmo na fase de pré-lançamento operacional."
          eyebrow="Fluxo da jornada"
          title="Do primeiro interesse à referência dentro do ecossistema."
        />
        <EcosystemFlowPanel items={journeyFlow} cols={7} />
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="A central de cadastro organiza o primeiro passo de cada público sem prometer aprovação automática."
          eyebrow="Como entrar"
          title="Cada público tem uma porta de entrada."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {audiencePaths.map((item, index) => (
            <Card className="flex min-h-[230px] flex-col" key={item.title} premium={index === 0}>
              <h2 className="text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              <Button className="mt-auto w-full" href={item.href} variant={index === 0 ? "primary" : "secondary"}>
                Entrar
              </Button>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>CTA Ecossistema</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              Escolha seu caminho e entre na base UR.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              O cadastro registra interesse para triagem operacional. Participação, ranking, equipe, patrocínio, quadra
              parceira e comunidade seguem sujeitos à validação oficial.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro">Ir para cadastro</Button>
            <Button href="/regulamento" variant="secondary">
              Ver regulamento
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}
