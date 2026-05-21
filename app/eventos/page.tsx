import type { Metadata } from "next";
import { BarChart3, Camera, Flag, MapPin, Medal, Swords, Trophy, Zap } from "lucide-react";
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
    description: "Marco competitivo com regras, validação, cobertura e narrativa pública.",
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
    description: "Atletas e equipes começam com cadastro, triagem e participação orientada.",
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
    description: "Cada participação validada pode alimentar classificação, narrativa e histórico.",
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
    detail: "eventos alimentam presença, contexto e classificação com dados validados.",
    icon: BarChart3,
  },
  {
    label: "UR Coins",
    value: "valor",
    detail: "recompensas dependem de regras oficiais e aprovação operacional.",
    icon: Medal,
  },
  {
    label: "Mídia",
    value: "palco",
    detail: "cobertura transforma participação em narrativa pública.",
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
          { href: "/cadastro#atleta", label: "Demonstrar interesse" },
          { href: "/temporada", label: "Entender temporada", variant: "secondary" },
        ]}
        badges={["UR Play", "Mini torneios", "Eventos oficiais", "Virada de ranking"]}
        description="Eventos no UR são pontos de entrada, competição, ranking, mídia e experiência dentro da temporada estruturada."
        eyebrow="Eventos UR • calendário esportivo"
        image={siteImages.fairPlayLine}
        imagePosition="center 46%"
        metrics={[
          { label: "Entrada", value: "UR Play" },
          { label: "Ciclo", value: "mini torneios e eventos" },
          { label: "Fechamento", value: "virada de ranking" },
        ]}
        statusDescription="Datas, horários, locais, vagas e polos oficiais entram apenas após confirmação operacional."
        statusLabel="agenda em organização"
        statusTitle="Cada evento tem função dentro da jornada."
        title="Calendário esportivo com propósito, não agenda solta."
      />

      <PageSection id="tipos">
        <CommercialAssetPanel
          assets={eventTypes}
          description="Os formatos abaixo organizam a experiência da temporada sem inventar datas, vagas, locais ou eventos confirmados."
          eyebrow="Tipos de evento"
          title="Cada formato resolve uma etapa do ecossistema."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="linha-do-tempo">
        <ProcessTimeline
          description="A agenda pública deve mostrar a função de cada etapa: entrada, recorrência, ranking, mídia e fechamento de ciclo."
          eyebrow="Linha do tempo"
          steps={seasonLine}
          title="Do primeiro jogo à virada de ranking."
        />
      </PageSection>

      <PageSection id="jogo-real">
        <ImageFeaturePanel
          actions={[
            { href: "/ur-play", label: "Conhecer UR Play", variant: "secondary" },
            { href: "/ranking", label: "Ver ranking", variant: "ghost" },
          ]}
          description="O evento precisa gerar rastro: quem participou, como competiu, que história nasceu, qual ranking foi alimentado e qual próximo passo faz sentido."
          eyebrow="Evento como produto esportivo"
          image={siteImages.attackBlock}
          imagePosition="center 42%"
          points={[
            {
              title: "Competição com contexto",
              description: "UR Play, mini torneios e eventos oficiais conectam presença, nível e ranking.",
            },
            {
              title: "Mídia como memória",
              description: "Fotos, bastidores e cobertura transformam o evento em narrativa do ecossistema.",
            },
          ]}
          title="O jogo termina, mas o histórico continua."
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

      <PageSection id="agenda">
        <ImageFeaturePanel
          description="A agenda oficial será publicada por modalidade, nível, categoria e polo quando houver confirmação. Até lá, o cadastro de interesse organiza demanda sem criar promessa."
          eyebrow="Agenda futura"
          image={siteImages.wideServe}
          imagePosition="center 48%"
          points={[
            {
              title: "Eventos entram após confirmação",
              description: "Nada de datas, horários, valores ou vagas reais sem validação oficial.",
            },
            {
              title: "Polo em formação",
              description: "Quadras parceiras e calendário local serão ativados conforme operação.",
            },
          ]}
          reverse
          statusLabel="inscrição sujeita à validação"
          title="O calendário cresce por ciclo, não por improviso."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#atleta">Demonstrar interesse</Button>
            <Button href="/cadastro#equipe" variant="secondary">
              Entrar como equipe
            </Button>
          </>
        }
        description="Registre interesse para receber orientação quando agenda, polo, categoria e participação estiverem validados pela operação UR."
        eyebrow="Próximo passo"
        items={["UR Play", "mini torneios", "ranking", "mídia", "polos"]}
        statusLabel="agenda em organização"
        title="Entre na fila certa antes da próxima etapa."
      />
    </main>
  );
}
