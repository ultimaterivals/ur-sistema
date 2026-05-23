import type { Metadata } from "next";
import { BarChart3, Radio, ShieldCheck, Target } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  DataBoard,
  ImageFeaturePanel,
  LeaderboardPanel,
  ProcessTimeline,
} from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Ranking UR | Ranking de Atletas, Equipes e Temporada Ultimate Rivals",
  description:
    "Conheça o Ranking UR, o sistema público de classificação do Ultimate Rivals que organiza atletas, equipes, níveis, desempenho, UR Coins, recompensas e oportunidades dentro da temporada.",
};

const leaderboardRows = [
  {
    position: "01",
    title: "top 1 em formação",
    status: "sem atleta real publicado",
    meta: "posição abre apenas com dados reais e participação confirmada.",
  },
  {
    position: "02",
    title: "top 2 em formação",
    status: "temporada em organização",
    meta: "sem números, pontos ou nomes reais nesta etapa.",
  },
  {
    position: "03",
    title: "top 3 em formação",
    status: "ranking em formação",
    meta: "ranking será alimentado pelo UR Play e eventos oficiais.",
  },
] as const;

const rankingFlow = [
  {
    label: "Entrada",
    title: "UR Play",
    description: "A primeira base vem da participação observada e confirmada.",
  },
  {
    label: "Leitura",
    title: "Critérios",
    description: "Presença, evolução, nível, conduta e participação formam contexto.",
  },
  {
    label: "Organização",
    title: "Níveis",
    description: "A competição fica mais justa quando atletas e equipes são comparados por contexto.",
  },
  {
    label: "Publicação",
    title: "Ranking",
    description: "Seu nome aparece quando houver participação confirmada e critérios claros.",
  },
  {
    label: "Valor",
    title: "Oportunidades",
    description: "Mídia, Draft, CT UR, recompensas e repasses dependem de regras claras no ciclo.",
  },
] as const;

const rankingData = [
  {
    label: "Atletas",
    value: "individual",
    detail: "histórico, presença e evolução por nível e modalidade.",
    icon: Target,
  },
  {
    label: "Equipes",
    value: "coletivo",
    detail: "identidade, elenco, resultados e presença na temporada.",
    icon: ShieldCheck,
  },
  {
    label: "Engajamento",
    value: "comunidade",
    detail: "participação, mídia, presença e relação com o ecossistema.",
    icon: Radio,
  },
  {
    label: "Polos",
    value: "território",
    detail: "ranking pode variar por modalidade, categoria, nível e polo.",
    icon: BarChart3,
  },
] as const;

const comparisonCards = [
  {
    title: "Participação solta",
    text: "Você joga, termina a partida e quase nada fica registrado.",
  },
  {
    title: "Dentro do UR",
    text: "Sua presença, desempenho e evolução passam a fazer parte da sua história esportiva.",
  },
] as const;

export default function RankingPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/ur-play", label: "Entrar pelo UR Play" },
          { href: "/cadastro#atleta", label: "Cadastrar interesse", variant: "secondary" },
        ]}
        badges={["Atletas", "Equipes", "Níveis", "UR Coins", "Mídia"]}
        description="O ranking UR organiza participação, postura, desempenho e evolução para que o atleta e a equipe tenham uma trajetória acompanhada dentro da temporada."
        eyebrow="Ranking UR"
        image={siteImages.attackBlock}
        imagePosition="center 40%"
        metrics={[
          { label: "Origem", value: "UR Play" },
          { label: "Critério", value: "participação confirmada" },
          { label: "Impacto", value: "mídia e oportunidades" },
        ]}
        statusDescription="Sua presença vira histórico. Seu desempenho ganha contexto. Sua evolução passa a ser acompanhada."
        statusLabel="ranking em formação"
        statusTitle="Ranking não é promessa. É registro."
        title="Sua presença vira histórico. Seu desempenho vira posição."
      />

      <PageSection id="leaderboard">
        <LeaderboardPanel
          description="O objetivo é dar clareza para quem participa: quem joga, comparece, evolui e se compromete começa a aparecer dentro do sistema."
          eyebrow="Ranking em destaque"
          image={siteImages.defenseDive}
          rows={leaderboardRows}
          tabs={["Individual", "Equipes", "Engajamento", "Polos", "Níveis"]}
          title="Ranking não é promessa. É registro."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="fluxo">
        <ProcessTimeline
          description="O ranking começa a ser alimentado pelo UR Play e cresce com presença, postura, desempenho e evolução."
          eyebrow="Como o atleta entra"
          steps={rankingFlow}
          title="Da presença ao histórico público."
        />
      </PageSection>

      <PageSection id="tipos">
        <DataBoard
          description="O Ranking UR será dividido por atletas, equipes, níveis, polos, modalidades e engajamento para permitir competição mais justa."
          eyebrow="Tipos de ranking"
          items={rankingData}
          title="Ranking por atletas, equipes e níveis."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="criterios">
        <Card className="overflow-hidden p-0" premium>
          <div className="grid gap-4 border-b border-white/10 p-5 md:p-7 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <Badge>Comparação</Badge>
              <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.8rem)] font-black uppercase leading-[0.9] text-white">
                O jogo precisa deixar registro.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/68 lg:justify-self-end">
              O ranking organiza participação, desempenho e evolução sem transformar a experiência em tabela fria.
            </p>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-2 md:p-7">
          {comparisonCards.map((card, index) => (
            <div
              className={index === 1 ? "rounded-lg border border-[#ffd84d]/24 bg-[#ffd84d]/10 p-5" : "rounded-lg border border-white/10 bg-black/28 p-5"}
              key={card.title}
            >
              <h3 className="text-2xl font-black uppercase leading-none text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/68">{card.text}</p>
            </div>
          ))}
          </div>
        </Card>
      </PageSection>

      <PageSection id="coins-midia">
        <ImageFeaturePanel
          actions={[
            { href: "/ur-market", label: "Conhecer UR Market", variant: "secondary" },
            { href: "/midia", label: "Ver mídia UR", variant: "ghost" },
          ]}
          description="Ranking não termina na posição. Ele se conecta a UR Coins, recompensas, mídia, CT UR, premiações e oportunidades dentro da temporada."
          eyebrow="UR Coins e mídia"
          image={siteImages.mediaCoverage}
          imagePosition="center 45%"
          points={[
            {
              title: "UR Coins",
              description: "Pontuação e participação podem abrir acesso a benefícios aprovados pela UR.",
            },
            {
              title: "Mídia própria",
              description: "Transforma ranking em história, destaque, rivalidade e memória esportiva do ecossistema.",
            },
          ]}
          title="Posição só importa quando vira contexto."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/ur-play">Começar pelo UR Play</Button>
            <Button href="/cadastro#atleta" variant="secondary">
              Cadastrar interesse
            </Button>
          </>
        }
        description="A entrada no ranking começa pelo UR Play. Seu nome aparece conforme presença, desempenho, postura e evolução."
        eyebrow="Entrada no ranking"
        items={["UR Play", "níveis", "equipes", "UR Coins", "mídia"]}
        statusLabel="registro com critério"
        title="Entrar no ranking pelo UR Play."
      />
    </main>
  );
}
