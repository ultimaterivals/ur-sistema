import type { Metadata } from "next";
import { BarChart3, Camera, Flag, MapPin, Medal, Swords, Trophy, Zap } from "lucide-react";
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
import { URBracketPreview } from "@/components/season";
import { season1 } from "@/lib/content/season1";

export const metadata: Metadata = {
  title: "Eventos UR | UR Play, Torneios e Temporada Ultimate Rivals",
  description:
    "Conheça os eventos do Ultimate Rivals, incluindo UR Play, mini torneios, torneios oficiais, Virada de Ranking e experiências conectadas ao ranking, equipes, UR Coins e mídia.",
};

const eventTypes = [
  {
    label: "Entrada",
    title: "UR Play",
    description: "Porta oficial para observação, nivelamento, presença e início de histórico.",
    icon: Zap,
  },
  {
    label: "Recorrência",
    title: "Mini torneio",
    description: "Competição de ciclo para alimentar ranking, mídia e comunidade.",
    icon: Swords,
  },
  {
    label: "Temporada",
    title: "Evento oficial",
    description: "Marco competitivo com regras, cobertura e história pública.",
    icon: Trophy,
  },
  {
    label: "Fechamento",
    title: "Virada de ranking",
    description: "Momento de reconhecer evolução, presença e próximos passos do ciclo.",
    icon: Flag,
  },
] as const;

const seasonLine = [
  {
    label: "Entrada",
    title: "Entrada pelo UR Play",
    description: "Atletas e equipes começam com cadastro, orientação e participação com critério.",
    status: "agenda em organização",
  },
  {
    label: "Ciclo",
    title: "Eventos de ciclo",
    description: "Mini torneios e encontros competitivos mantêm a temporada ativa.",
  },
  {
    label: "Mídia",
    title: "Ranking e mídia",
    description: "Cada participação confirmada pode alimentar classificação, história e histórico.",
  },
  {
    label: "Virada",
    title: "Virada de ranking",
    description: "O ciclo fecha com reconhecimento e preparação da próxima etapa.",
  },
] as const;

const eventData = [
  {
    label: "Ranking",
    value: "histórico",
    detail: "eventos alimentam presença, contexto e classificação com dados confirmados.",
    icon: BarChart3,
  },
  {
    label: "UR Coins",
    value: "valor",
    detail: "recompensas dependem de regras oficiais.",
    icon: Medal,
  },
  {
    label: "Mídia",
    value: "palco",
    detail: "cobertura transforma participação em história pública.",
    icon: Camera,
  },
  {
    label: "Polos",
    value: "território",
    detail: "eventos podem variar por modalidade, nível, categoria e polo.",
    icon: MapPin,
  },
] as const;

export default function EventosPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/temporada", label: "Ver temporada UR" },
          { href: "/cadastro#atleta", label: "Entrar no UR", variant: "secondary" },
        ]}
        badges={["UR Play", "Ciclo trimestral", "Mini torneios", "Virada de Ranking"]}
        description="O UR organiza ciclos trimestrais com UR Play, ranking, equipes, eventos, mídia e oportunidades para que o esporte amador tenha sequência, critério e história."
        eyebrow="Ciclo trimestral"
        image={siteImages.fairPlayLine}
        imagePosition="center 46%"
        metrics={[
          { label: "Entrada", value: "UR Play" },
          { label: "Ciclo", value: "mini torneios e eventos" },
          { label: "Fechamento", value: "virada de ranking" },
        ]}
        statusDescription="UR Play, eventos oficiais, ranking contínuo e virada de ranking criam uma sequência para jogar com constância."
        statusLabel="ciclo trimestral com Virada de Ranking"
        statusTitle="Todo ciclo fecha na Virada de Ranking."
        title="Todo ciclo começa aqui. Todo ciclo fecha na Virada."
      />

      <PageSection id="tipos">
        <CommercialAssetPanel
          assets={eventTypes}
          description="Os formatos abaixo organizam a experiência da temporada: UR Play, eventos oficiais, ranking contínuo e virada de ranking."
          eyebrow="Tipos de evento"
          title="Cada etapa tem função dentro da temporada."
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

      <PageSection className="bg-[#07080c]" id="linha-do-tempo">
        <ProcessTimeline
          description="A temporada registra presença, desempenho e evolução para criar continuidade no esporte amador."
          eyebrow="Linha do tempo"
          steps={seasonLine}
          title="UR Play, eventos oficiais e virada de ranking."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="impacto">
        <DataBoard
          description="O evento tem papel esportivo, midiático, comercial e territorial. Ele alimenta mais que o placar."
          eyebrow="O que o evento alimenta"
          items={eventData}
          title="Ranking, UR Coins, mídia e polos no mesmo ciclo."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/temporada">Ver temporada UR</Button>
            <Button href="/cadastro#equipe" variant="secondary">
              Entrar como equipe
            </Button>
          </>
        }
        description="Registre interesse para receber orientação quando agenda, polo, categoria e participação estiverem confirmados."
        eyebrow="Próximo passo"
        items={["UR Play", "mini torneios", "ranking", "mídia", "polos"]}
        statusLabel="agenda em organização"
        title="Entre na fila certa antes da próxima etapa."
      />
    </main>
  );
}
