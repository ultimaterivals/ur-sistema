import type { Metadata } from "next";
import { BarChart3, CheckCircle2, Eye, Radio } from "lucide-react";
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
    title: "Interesse registrado",
    description: "Seu cadastro coloca você no radar do UR com disponibilidade, modalidade e autorização de contato.",
    status: "cadastro aberto",
  },
  {
    label: "Caminho",
    title: "Próximo passo claro",
    description: "A equipe UR orienta agenda, polo, disponibilidade e próximos passos.",
  },
  {
    label: "Presença",
    title: "Chegada e conduta",
    description: "Presença, postura, compromisso e autorização de contato fazem parte do processo.",
  },
  {
    label: "Jogo",
    title: "Participação observada",
    description: "O UR Play observa nível, evolução, contexto técnico e conexão com a comunidade.",
  },
  {
    label: "Registro",
    title: "Histórico criado",
    description: "Seu histórico começa com presença, postura e participação confirmadas.",
  },
  {
    label: "Ranking",
    title: "Próximo passo",
    description: "O ranking, mídia, equipes e oportunidades dependem da temporada estruturada.",
  },
] as const;

const registeredItems = [
  {
    label: "Presença",
    value: "comparecimento",
    detail: "base para histórico, compromisso e continuidade dentro do ecossistema.",
    icon: CheckCircle2,
  },
  {
    label: "Nível",
    value: "observação",
    detail: "leitura inicial para organização mais justa por contexto esportivo.",
    icon: Eye,
  },
  {
    label: "Ranking",
    value: "em formação",
    detail: "classificação pública só abre com dados reais confirmados.",
    icon: BarChart3,
  },
  {
    label: "Mídia",
    value: "potencial",
    detail: "bastidores e destaques podem virar história da temporada.",
    icon: Radio,
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
          { href: "/ranking", label: "Ver conexão com ranking", variant: "secondary" },
        ]}
        badges={["Entrada oficial", "Observação", "Nivelamento", "Histórico"]}
        description="O UR Play é a porta de entrada para atletas serem vistos, avaliados, organizados por nível e conectados ao ranking, equipes, mídia, temporada e oportunidades do Ultimate Rivals."
        eyebrow="UR Play • entrada do ecossistema"
        image={siteImages.urPlayAction}
        imagePosition="center 42%"
        metrics={[
          { label: "Antes", value: "cadastro e orientação" },
          { label: "Durante", value: "presença, jogo e observação" },
          { label: "Depois", value: "registro e próximos passos" },
        ]}
        statusDescription="A agenda oficial será publicada após confirmação de polo e calendário. A entrada tem critério para manter equilíbrio, respeito e organização."
        statusLabel="agenda em organização"
        statusTitle="UR Play não é rachão. É entrada oficial."
        title="O primeiro jogo precisa abrir caminho."
      />

      <PageSection id="nao-e-rachao">
        <ImageFeaturePanel
          actions={[
            { href: "/cadastro#atleta", label: "Registrar interesse" },
            { href: "/regulamento", label: "Ver regulamento", variant: "secondary" },
          ]}
          description="Um jogo solto termina no apito final. O UR Play existe para gerar contexto: quem participou, como se comportou, qual nível apresentou e qual próximo passo faz sentido."
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
          title="Não é jogo avulso. É começo de histórico."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="fluxo-do-dia">
        <ProcessTimeline
          description="O atleta entende o dia em poucos passos: cadastra, recebe orientação, joga, é observado e sai com um próximo caminho."
          eyebrow="Caminho do dia"
          steps={dayFlow}
          title="Do cadastro ao registro esportivo."
        />
      </PageSection>

      <PageSection id="registro">
        <DataBoard
          description="A força do UR Play está no que ele gera depois do jogo: histórico, leitura de nível, base de ranking, mídia e conexão com equipes."
          eyebrow="O que é registrado"
          items={registeredItems}
          title="O valor está no rastro que fica."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ranking-nivelamento">
        <LeaderboardPanel
          description="O preview prepara o ranking como produto central, mas nenhuma posição real é publicada sem presença, desempenho e critérios claros."
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
        items={["cadastro", "orientação", "jogo", "registro", "ranking"]}
        statusLabel="entrada com critério"
        title="A jornada começa no UR Play, mas não termina no primeiro jogo."
      />
    </main>
  );
}
