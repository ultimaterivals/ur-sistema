import type { Metadata } from "next";
import { BarChart3, Brain, Camera, Dumbbell, ShieldCheck, Target, Users } from "lucide-react";
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
  title: "CT UR | Desenvolvimento Técnico, Físico e Mental Ultimate Rivals",
  description:
    "Conheça o CT UR, pilar de desenvolvimento do Ultimate Rivals para evolução técnica, física, mental, liderança, análise de desempenho e formação esportiva.",
};

const formationPillars = [
  {
    label: "Técnico",
    title: "Fundamento e jogo",
    description: "Treino orientado por necessidade real, nível, modalidade e evolução.",
    icon: Target,
  },
  {
    label: "Físico",
    title: "Preparação",
    description: "Base corporal para competir melhor, reduzir risco e sustentar recorrência.",
    icon: Dumbbell,
  },
  {
    label: "Mental",
    title: "Mentalidade Hunter",
    description: "Disciplina, presença, responsabilidade e busca por excelência sem arrogância.",
    icon: Brain,
  },
  {
    label: "Humano",
    title: "Liderança e postura",
    description: "Conduta, respeito, equipe e comunidade fazem parte do desenvolvimento.",
    icon: ShieldCheck,
  },
] as const;

const evolutionFlow = [
  {
    label: "Observação",
    title: "Ser observado",
    description: "UR Play e ranking ajudam a entender contexto, presença e ponto de partida.",
  },
  {
    label: "Foco",
    title: "Definir foco",
    description: "Treino técnico, físico, mental ou liderança entram conforme necessidade.",
  },
  {
    label: "Treino",
    title: "Treinar com critério",
    description: "A evolução precisa ser mensurável, segura e conectada à jornada esportiva.",
  },
  {
    label: "Temporada",
    title: "Voltar para a temporada",
    description: "O atleta retorna para competir, gerar histórico e testar evolução real.",
  },
] as const;

const connectionData = [
  {
    label: "UR Play",
    value: "observação",
    detail: "porta de entrada para entender contexto e ponto de partida.",
    icon: Target,
  },
  {
    label: "Ranking",
    value: "evolução",
    detail: "histórico público ajuda a visualizar progresso validado.",
    icon: BarChart3,
  },
  {
    label: "Equipes",
    value: "liderança",
    detail: "capitão, elenco e conduta também são parte do desenvolvimento.",
    icon: Users,
  },
  {
    label: "Mídia",
    value: "reputação",
    detail: "evolução pode virar narrativa pública com critério.",
    icon: Camera,
  },
] as const;

export default function CTURPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#atleta", label: "Entrar como atleta" },
          { href: "/atletas", label: "Ver jornada do atleta", variant: "secondary" },
        ]}
        badges={["Técnico", "Físico", "Mental", "Liderança", "Análise"]}
        description="O CT UR é a camada de desenvolvimento do ecossistema: formação técnica, física, mental e humana conectada a UR Play, ranking, equipes, mídia e temporada."
        eyebrow="CT UR • desenvolvimento"
        image={siteImages.timeoutTalk}
        imagePosition="center 42%"
        metrics={[
          { label: "Base", value: "observação" },
          { label: "Trabalho", value: "treino e postura" },
          { label: "Retorno", value: "temporada e ranking" },
        ]}
        statusDescription="Agenda, polos e turmas entram após validação operacional. O CT UR não promete resultado automático."
        statusLabel="agenda em organização"
        statusTitle="Desenvolvimento real para atletas que querem evoluir."
        title="Treino é parte da jornada, não promessa milagrosa."
      />

      <PageSection id="pilares">
        <CommercialAssetPanel
          assets={formationPillars}
          description="O CT UR trabalha desenvolvimento como cultura esportiva: fundamento, preparo, mentalidade, liderança e responsabilidade com equipe e comunidade."
          eyebrow="Pilares de formação"
          title="Técnico, físico, mental e humano no mesmo sistema."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="jornada">
        <ProcessTimeline
          description="O desenvolvimento começa com observação, vira foco de treino e retorna para a temporada como teste real de evolução."
          eyebrow="Jornada de evolução"
          steps={evolutionFlow}
          title="Evoluir precisa voltar para a quadra."
        />
      </PageSection>

      <PageSection id="mentalidade">
        <ImageFeaturePanel
          actions={[
            { href: "/atletas", label: "Ver atletas", variant: "secondary" },
            { href: "/ranking", label: "Ver ranking", variant: "ghost" },
          ]}
          description="Mentalidade Hunter é padrão de postura: disciplina, presença, responsabilidade, evolução contínua, competitividade saudável, respeito e preparo físico, técnico e mental."
          eyebrow="Mentalidade Hunter"
          image={siteImages.athleteFocus}
          imagePosition="center 38%"
          points={[
            {
              title: "Cultura, não promessa",
              description: "Não é método milagroso. É compromisso com comportamento e evolução.",
            },
            {
              title: "Excelência sem arrogância",
              description: "Competir forte, respeitar o ambiente e assumir responsabilidade.",
            },
          ]}
          title="Postura também é performance."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="conexoes">
        <DataBoard
          description="O CT UR não fica separado do site: ele se conecta com UR Play, ranking, equipes, mídia e temporada para sustentar evolução real."
          eyebrow="Conexão com o ecossistema"
          items={connectionData}
          title="Desenvolvimento precisa aparecer na jornada."
        />
      </PageSection>

      <PageSection id="recuperacao-educacao">
        <ImageFeaturePanel
          description="Preparação, recuperação e educação esportiva ajudam o atleta a competir com mais consciência. A base é evoluir com segurança, não acelerar promessa."
          eyebrow="Preparação e recuperação"
          image={siteImages.defenseDive}
          imagePosition="center 42%"
          points={[
            {
              title: "Preparo físico e prevenção",
              description: "Corpo preparado sustenta calendário, treino e participação recorrente.",
            },
            {
              title: "Análise de desempenho",
              description: "Evolução precisa de leitura, feedback e conexão com contexto competitivo.",
            },
          ]}
          reverse
          statusLabel="polos após validação"
          title="Evolução também é saber sustentar a temporada."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#atleta">Entrar na jornada</Button>
            <Button href="/ur-play" variant="secondary">
              Começar pelo UR Play
            </Button>
          </>
        }
        description="O cadastro registra interesse. Agenda, polos, treinos e participação no CT UR dependem de validação operacional."
        eyebrow="Próximo passo"
        items={["técnico", "físico", "mental", "liderança", "ranking"]}
        statusLabel="participação sujeita à validação"
        title="O desenvolvimento começa com presença."
      />
    </main>
  );
}
