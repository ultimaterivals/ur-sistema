import type { Metadata } from "next";
import { BarChart3, Coins, Flag, Radio, RefreshCw, ShieldCheck, Swords, Zap } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  CommercialAssetPanel,
  DataBoard,
  ImageFeaturePanel,
  ProcessTimeline,
} from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Temporada UR | Ciclo Trimestral, Ranking e Eventos Ultimate Rivals",
  description:
    "Entenda como funciona a Temporada UR, o ciclo trimestral do Ultimate Rivals com UR Play, nivelamento, ranking, eventos, recompensas, repasses e Virada de Ranking.",
};

const cycleSteps = [
  {
    label: "UR Play",
    title: "UR Play",
    description: "Entrada oficial para atletas e leitura inicial de presença, nível e contexto.",
  },
  {
    label: "Nível",
    title: "Nivelamento",
    description: "Organização por modalidade, categoria, nível e polo quando o calendário for confirmado.",
  },
  {
    label: "Ranking",
    title: "Ranking ativo",
    description: "Dados públicos entram com critérios e participação oficial.",
  },
  {
    label: "Torneios",
    title: "Mini torneios",
    description: "Recorrência competitiva para alimentar temporada, mídia e comunidade.",
  },
  {
    label: "Oficiais",
    title: "Eventos oficiais",
    description: "Marcos competitivos com regras, cobertura, ranking e experiência.",
  },
  {
    label: "Virada",
    title: "Virada de ranking",
    description: "Fechamento de ciclo, reconhecimento e preparação da próxima temporada.",
  },
] as const;

const seasonAssets = [
  {
    label: "Entrada",
    title: "UR Play",
    description: "Ponto de partida da temporada para atletas, equipes e observação.",
    icon: Zap,
  },
  {
    label: "Disputa",
    title: "Mini torneios",
    description: "Eventos recorrentes mantêm o ciclo ativo e alimentam história.",
    icon: Swords,
  },
  {
    label: "Fechamento",
    title: "Virada de ranking",
    description: "Momento de atualizar contexto, reconhecer evolução e reiniciar ciclo.",
    icon: Flag,
  },
  {
    label: "Recomeço",
    title: "Novo trimestre",
    description: "A temporada se renova com histórico, aprendizado e próximos objetivos.",
    icon: RefreshCw,
  },
] as const;

const ecosystemData = [
  {
    label: "Ranking",
    value: "ativo",
    detail: "classificação vira memória esportiva ao longo do ciclo.",
    icon: BarChart3,
  },
  {
    label: "Equipes",
    value: "coletivo",
    detail: "elencos e capitães constroem identidade competitiva.",
    icon: ShieldCheck,
  },
  {
    label: "UR Coins",
    value: "valor",
    detail: "benefícios e recompensas dependem de regras oficiais.",
    icon: Coins,
  },
  {
    label: "Mídia",
    value: "memória",
    detail: "cobertura transforma temporada em história pública.",
    icon: Radio,
  },
] as const;

export default function TemporadaPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#atleta", label: "Entrar na temporada" },
          { href: "/eventos", label: "Ver eventos", variant: "secondary" },
        ]}
        badges={["UR Play", "Nivelamento", "Ranking", "Eventos", "Virada de ranking"]}
        description="A Temporada UR organiza o esporte amador como ciclo contínuo: entrada, nivelamento, ranking, eventos, mídia, recompensas e recomeço."
        eyebrow="Temporada UR • ciclo estruturado"
        image={siteImages.wideServe}
        imagePosition="center 48%"
        metrics={[
          { label: "Início", value: "UR Play" },
          { label: "Meio", value: "ranking e eventos" },
          { label: "Fim", value: "virada e novo ciclo" },
        ]}
        statusDescription="Calendário, repasses, premiações e eventos reais entram apenas após confirmação oficial do ciclo."
        statusLabel="calendário em organização"
        statusTitle="A temporada mantém o esporte vivo."
        title="Um ciclo contínuo para competir, evoluir e recomeçar."
      />

      <PageSection id="ciclo">
        <ProcessTimeline
          description="A temporada trimestral cria recorrência: começa pelo UR Play, organiza nível e ranking, passa por eventos e fecha com Virada de Ranking."
          eyebrow="Ciclo trimestral"
          steps={cycleSteps}
          title="A temporada tem começo, ritmo e virada."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="calendario">
        <CommercialAssetPanel
          assets={seasonAssets}
          description="O calendário visual mostra tipos de etapa sem inventar datas, horários, polos, valores ou eventos confirmados."
          eyebrow="Calendário visual"
          title="Cada etapa tem função no ciclo."
        />
      </PageSection>

      <PageSection id="evento">
        <ImageFeaturePanel
          actions={[
            { href: "/ur-play", label: "Conhecer UR Play", variant: "secondary" },
            { href: "/ranking", label: "Ver ranking", variant: "ghost" },
          ]}
          description="A temporada não depende de um único momento. Ela combina jogo, presença, ranking, mídia e comunidade para manter a jornada esportiva em movimento."
          eyebrow="Ritmo de temporada"
          image={siteImages.fairPlayLine}
          imagePosition="center 46%"
          points={[
            {
              title: "Eventos variáveis",
              description: "Etapas podem variar por modalidade, nível, categoria e polo.",
            },
            {
              title: "Virada de ranking",
              description: "O fim do trimestre atualiza contexto e prepara novo ciclo.",
            },
          ]}
          title="O ciclo dá continuidade ao que a quadra começa."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="conexoes">
        <DataBoard
          description="Ranking, equipes, UR Coins, UR Market, mídia e CT UR são peças conectadas ao ciclo. O valor aparece quando a temporada mantém recorrência."
          eyebrow="Relação com o ecossistema"
          items={ecosystemData}
          title="Temporada é o motor que conecta as áreas."
        />
      </PageSection>

      <PageSection id="recompensas">
        <ImageFeaturePanel
          description="Repasses, premiações e recompensas dependem de regras claras do ciclo. A comunicação pública precisa ser direta: primeiro regra, depois reconhecimento."
          eyebrow="Premiações e novo ciclo"
          image={siteImages.mediaCoverage}
          imagePosition="center 45%"
          points={[
            {
              title: "Reconhecimento com regra",
              description: "Premiações só fazem sentido quando critérios e regras estão definidos.",
            },
            {
              title: "Novo trimestre",
              description: "O ciclo reinicia com histórico, aprendizados e novos objetivos.",
            },
          ]}
          reverse
          statusLabel="recompensas com regra clara"
          title="Reconhecer evolução exige critério."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#atleta">Entrar na temporada</Button>
            <Button href="/eventos" variant="secondary">
              Ver calendário UR
            </Button>
          </>
        }
        description="Registre interesse para receber orientação quando agenda, modalidade, nível, polo e próximos eventos forem confirmados."
        eyebrow="Próximo passo"
        items={["UR Play", "ranking", "eventos", "virada", "novo ciclo"]}
        statusLabel="agenda oficial após confirmação"
        title="A temporada começa com presença confirmada."
      />
    </main>
  );
}
