import type { Metadata } from "next";
import { BarChart3, Coins, Flag, Radio, RefreshCw, ShieldCheck, Swords, Zap } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  CommercialAssetPanel,
  DataBoard,
  ProcessTimeline,
} from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/content/site-images";
import { URBracketPreview, TerritoryArtCard, LegendsArtPanel } from "@/components/season";
import { season1 } from "@/lib/content/season1";

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
          { href: "/eventos", label: "Ver temporada UR" },
          { href: "/cadastro#atleta", label: "Entrar no UR", variant: "secondary" },
        ]}
        badges={["UR Play", "Ciclo trimestral", "Ranking", "Premiações", "Virada de ranking"]}
        description="Ciclos trimestrais com UR Play, ranking, eventos, premiações e Virada de Ranking. Cada temporada é uma chance de conquistar, evoluir e escrever história."
        eyebrow="Temporada UR"
        image={siteImages.wideServe}
        imagePosition="center 48%"
        metrics={[
          { label: "Início", value: "UR Play" },
          { label: "Meio", value: "ranking e eventos" },
          { label: "Fim", value: "virada e novo ciclo" },
        ]}
        statusDescription="UR Play, eventos oficiais, ranking contínuo e virada de ranking criam uma sequência para jogar com constância."
        statusLabel="calendário em organização"
        statusTitle="Todo atleta tem uma temporada para disputar."
        title="Todo atleta tem uma temporada para disputar."
      />

      <PageSection id="ciclo">
        <ProcessTimeline
          description="O UR organiza ciclos com UR Play, ranking, equipes, eventos, mídia e oportunidades para que o esporte amador tenha sequência, critério e história."
          eyebrow="Ciclo trimestral"
          steps={cycleSteps}
          title="UR Play, ranking contínuo e virada de ranking."
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

      <PageSection className="bg-[#07080c]" id="conexoes">
        <DataBoard
          description="Ranking, equipes, UR Coins, UR Market, mídia e CT UR são peças conectadas ao ciclo. O valor aparece quando a temporada mantém recorrência."
          eyebrow="Relação com o ecossistema"
          items={ecosystemData}
          title="Temporada é o motor que conecta as áreas."
        />
      </PageSection>

      <PageSection id="bracket">
        <URBracketPreview
          stage={season1.mockBracket.stage}
          quarterfinals={[...season1.mockBracket.quarterfinals]}
          semifinals={[...season1.mockBracket.semifinals]}
          final={season1.mockBracket.final}
        />
      </PageSection>

      <PageSection id="territorios">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A437]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>Polos da Temporada 1</p>
          <h2 className="mt-2 text-3xl font-bold uppercase leading-[0.9] text-[#F4F0E6]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Três territórios. Uma disputa.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {season1.poles.map((p) => (
            <TerritoryArtCard key={p.id} pole={p} />
          ))}
        </div>
      </PageSection>

      <PageSection id="legends">
        <LegendsArtPanel />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/eventos">Ver temporada UR</Button>
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
