import type { Metadata } from "next";
import { BarChart3, CheckCircle2, Eye } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  DataBoard,
  ImageFeaturePanel,
  LeaderboardPanel,
  ProcessTimeline,
} from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "UR Play | Entrada Oficial no Ecossistema Ultimate Rivals",
  description:
    "Conheça o UR Play, a porta de entrada do Ultimate Rivals para atletas que querem entrar no ranking, evoluir por níveis, ganhar visibilidade, acumular UR Coins e disputar oportunidades no ecossistema.",
};

const dayFlow = [
  {
    label: "Cadastro",
    title: "Você se cadastra",
    description: "Escolhe seu perfil e entra no radar da equipe UR.",
    status: "cadastro aberto",
  },
  {
    label: "Orientação",
    title: "A equipe orienta o próximo passo",
    description: "A entrada acontece com critério para manter nível, respeito e equilíbrio.",
  },
  {
    label: "UR Play",
    title: "Você participa do UR Play",
    description: "Joga com organização, presença registrada e acompanhamento.",
  },
  {
    label: "Histórico",
    title: "Seu desempenho começa a contar",
    description: "Presença, postura e evolução ajudam a construir histórico.",
  },
] as const;

const registeredItems = [
  {
    label: "Para quem quer jogar mais",
    value: "estrutura",
    detail: "um caminho para atletas que querem sair do improviso e entrar em uma estrutura.",
    icon: CheckCircle2,
  },
  {
    label: "Para quem quer ser visto",
    value: "radar UR",
    detail: "o UR Play aproxima o atleta do ranking, das equipes e da mídia UR.",
    icon: Eye,
  },
  {
    label: "Para quem quer evoluir",
    value: "contexto",
    detail: "cada participação ajuda a entender nível, postura e momento esportivo.",
    icon: BarChart3,
  },
] as const;

const rankingRows = [
  {
    position: "01",
    title: "atleta observado",
    status: "sem posição real nesta etapa",
    meta: "participação confirmada será a base para histórico público futuro.",
  },
  {
    position: "02",
    title: "nível em leitura",
    status: "critérios esportivos",
    meta: "nivelamento ajuda a tornar a competição mais justa.",
  },
  {
    position: "03",
    title: "próxima oportunidade",
    status: "temporada estruturada",
    meta: "equipes, eventos e mídia dependem da agenda oficial.",
  },
] as const;

export default function URPlayPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#atleta", label: "Começar no UR Play" },
          { href: "/ranking", label: "Ver ranking", variant: "secondary" },
        ]}
        badges={["Entrada oficial", "Observação", "Nivelamento", "Histórico"]}
        description="Você joga, é observado, cria presença e entra no radar do ecossistema. Não é só uma partida: é o primeiro passo para ranking, equipes, mídia e oportunidades dentro do UR."
        eyebrow="Porta de entrada"
        image={siteImages.urPlayAction}
        imagePosition="center 42%"
        metrics={[
          { label: "Antes", value: "cadastro e orientação" },
          { label: "Durante", value: "presença, jogo e observação" },
          { label: "Depois", value: "registro e próximos passos" },
        ]}
        statusDescription="Você joga, é visto, recebe contexto e começa a construir sua trajetória."
        statusLabel="agenda em organização"
        statusTitle="O UR Play é onde seu jogo começa a ser observado."
        title="UR Play é onde sua trajetória começa."
      />

      <PageSection id="nao-e-rachao">
        <ImageFeaturePanel
          actions={[
            { href: "/cadastro#atleta", label: "Registrar interesse" },
            { href: "/regulamento", label: "Ver regulamento", variant: "secondary" },
          ]}
          description="O UR Play é a porta de entrada para ser visto, avaliado e conectado ao ecossistema. Cada participação pode virar ponto, história, mídia e oportunidade."
          eyebrow="Posicionamento"
          image={siteImages.fairPlayLine}
          imagePosition="center 48%"
          points={[
            {
              title: "Observação com critério",
              description: "Sua presença, postura e nível ajudam a definir o caminho.",
            },
            {
              title: "Conexão com temporada",
              description: "O UR Play alimenta ranking, equipes, eventos, mídia e oportunidades futuras.",
            },
          ]}
          statusLabel="registro com critério"
          title="Não é só uma partida. É começo de histórico."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="fluxo-do-dia">
        <ProcessTimeline
          description="Você entende o dia em poucos passos: cadastro, orientação, participação e histórico."
          eyebrow="Como funciona"
          steps={dayFlow}
          title="Do cadastro ao registro esportivo."
        />
      </PageSection>

      <PageSection id="registro">
        <DataBoard
          description="O UR Play aproxima o atleta do ranking, das equipes e da mídia UR. Cada participação ajuda a entender nível, postura e momento esportivo."
          eyebrow="O que é registrado"
          items={registeredItems}
          title="Para quem quer jogar mais, ser visto e evoluir."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ranking-nivelamento">
        <LeaderboardPanel
          description="Seu nome começa a aparecer conforme sua presença e desempenho. O ranking só ganha dados reais com participação confirmada."
          eyebrow="Nivelamento e ranking"
          image={siteImages.attackBlock}
          rows={rankingRows}
          tabs={["UR Play", "Nível", "Presença", "Ranking"]}
          title="A entrada vira leitura de temporada."
        />
      </PageSection>

      <PageSection id="agenda">
        <ImageFeaturePanel
          description="Polos, horários, categorias e modalidades entram conforme calendário confirmado. O objetivo é abrir uma agenda recorrente sem publicar datas não confirmadas."
          eyebrow="Agenda e polos"
          image={siteImages.wideServe}
          imagePosition="center 45%"
          points={[
            {
              title: "Polo em formação",
              description: "Quadras parceiras e agenda local serão confirmadas antes da divulgação pública.",
            },
            {
              title: "Participação orientada",
              description: "O cadastro inicia a orientação; a entrada depende de equilíbrio de nível, agenda e organização.",
            },
          ]}
          reverse
          statusLabel="agenda será publicada após confirmação"
          title="O UR Play cresce por polos, não por improviso."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#atleta">Começar no UR Play</Button>
            <Button href="/eventos" variant="secondary">
              Ver eventos UR
            </Button>
          </>
        }
        description="Registre interesse para receber orientação quando agenda, polo e participação estiverem confirmados."
        eyebrow="Entrada oficial"
        items={["cadastro", "orientação", "jogo", "histórico", "ranking"]}
        statusLabel="entrada com critério"
        title="A jornada começa no UR Play, mas não termina no primeiro jogo."
      />
    </main>
  );
}
