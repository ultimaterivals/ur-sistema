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

const criteriaRows = [
  {
    criterion: "Participação",
    role: "Registra presença e continuidade",
    status: "após validação",
  },
  {
    criterion: "Nível",
    role: "Ajuda a organizar competição mais justa",
    status: "por contexto",
  },
  {
    criterion: "Resultado",
    role: "Compõe histórico quando houver regra oficial",
    status: "sem números reais agora",
  },
  {
    criterion: "Conduta",
    role: "Protege comunidade, fair play e confiança",
    status: "postura e respeito",
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
        description="O Ranking UR organiza atletas, equipes, níveis, polos, modalidades e engajamento como registro público da temporada, sempre com dados reais confirmados."
        eyebrow="Ranking UR • produto central"
        image={siteImages.attackBlock}
        imagePosition="center 40%"
        metrics={[
          { label: "Origem", value: "UR Play" },
          { label: "Critério", value: "participação confirmada" },
          { label: "Impacto", value: "mídia e oportunidades" },
        ]}
        statusDescription="Sem atletas, números, posições ou pontuação real publicada nesta fase. A estrutura mostra a lógica do produto antes da abertura oficial."
        statusLabel="ranking em formação"
        statusTitle="Ranking é história da temporada."
        title="Não é só tabela. É reputação esportiva."
      />

      <PageSection id="leaderboard">
        <LeaderboardPanel
          description="O top 3 fica preparado para publicação futura, mas sem inventar nomes, pontos ou posições. O ranking começa a ser alimentado pelo UR Play."
          eyebrow="Leaderboard preview"
          image={siteImages.defenseDive}
          rows={leaderboardRows}
          tabs={["Individual", "Equipes", "Engajamento", "Polos", "Níveis"]}
          title="Top 3 em formação."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="fluxo">
        <ProcessTimeline
          description="O ranking precisa explicar de onde vem cada informação. A jornada abaixo resume a lógica antes da publicação de dados reais."
          eyebrow="Fluxo do ranking"
          steps={rankingFlow}
          title="Da participação confirmada à oportunidade."
        />
      </PageSection>

      <PageSection id="tipos">
        <DataBoard
          description="O Ranking UR será dividido por atletas, equipes, níveis, polos, modalidades e engajamento. Isso evita misturar contextos diferentes como se fossem iguais."
          eyebrow="Tipos de ranking"
          items={rankingData}
          title="Classificação com leitura de ecossistema."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="criterios">
        <Card className="overflow-hidden p-0" premium>
          <div className="grid gap-4 border-b border-white/10 p-5 md:p-7 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <Badge>Critérios de pontuação</Badge>
              <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.8rem)] font-black uppercase leading-[0.9] text-white">
                A regra precisa ser clara antes do número.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/68 lg:justify-self-end">
              As pontuações reais serão publicadas com regulamento específico. Nesta etapa, o site apresenta a estrutura de critérios sem simular resultado.
            </p>
          </div>
          <div className="grid border-b border-white/10 bg-[#ffd84d]/10 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b] md:grid-cols-[0.55fr_1fr_0.55fr]">
            <div className="px-5 py-4">Critério</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">Função</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">Status</div>
          </div>
          {criteriaRows.map((row) => (
            <div className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.55fr_1fr_0.55fr]" key={row.criterion}>
              <div className="bg-white/[0.035] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-white">
                {row.criterion}
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/66 md:border-l md:border-t-0">
                {row.role}
              </div>
              <div className="border-t border-[#ffd84d]/15 bg-[#ffd84d]/[0.045] px-5 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#ffe98b] md:border-l md:border-t-0">
                {row.status}
              </div>
            </div>
          ))}
        </Card>
      </PageSection>

      <PageSection id="coins-midia">
        <ImageFeaturePanel
          actions={[
            { href: "/ur-market", label: "Conhecer UR Market", variant: "secondary" },
            { href: "/midia", label: "Ver mídia UR", variant: "ghost" },
          ]}
          description="Ranking não termina na posição. Ele se conecta a UR Coins, recompensas, mídia, Draft, CT UR, premiações e oportunidades comerciais dentro da temporada."
          eyebrow="UR Coins e mídia"
          image={siteImages.mediaCoverage}
          imagePosition="center 45%"
          points={[
            {
              title: "UR Coins",
              description: "Conectam participação, desempenho, engajamento e benefícios quando as regras estiverem claras.",
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
        description="A entrada no ranking começa com participação confirmada. Nenhum nome, número ou posição real será publicado sem critérios claros."
        eyebrow="Entrada no ranking"
        items={["UR Play", "níveis", "equipes", "UR Coins", "mídia"]}
        statusLabel="registro com critério"
        title="O ranking começa antes da tabela: começa na presença."
      />
    </main>
  );
}
