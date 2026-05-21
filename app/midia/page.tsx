import type { Metadata } from "next";
import { BarChart3, Camera, Clapperboard, Megaphone, Mic, Play, Radio, Users } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  CommercialAssetPanel,
  DataBoard,
  ImageFeaturePanel,
  ProcessTimeline,
} from "@/components/editorial/sports-platform-modules";
import { AdSlotHorizontal } from "@/components/editorial/ad-slot-horizontal";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Mídia UR | Histórias, Bastidores e Palco Ultimate Rivals",
  description:
    "Conheça a mídia oficial do Ultimate Rivals, com histórias de atletas, bastidores, ranking com contexto, comunidade, patrocinadores e cobertura do ecossistema esportivo.",
};

const editorialAssets = [
  {
    label: "Bastidores",
    title: "O que acontece fora da bola",
    description: "Pausas, preparação, conversas e ambiente ajudam a construir história real.",
    icon: Camera,
  },
  {
    label: "Ranking",
    title: "Classificação com história",
    description: "O ranking vira pauta quando explica evolução, presença e rivalidade com contexto.",
    icon: BarChart3,
  },
  {
    label: "Atletas",
    title: "Protagonistas do ecossistema",
    description: "Perfis, cortes e histórias mostram trajetória sem prometer resultado.",
    icon: Mic,
  },
  {
    label: "Comunidade",
    title: "Público como parte do palco",
    description: "Torcida, quadras e polos ajudam a transformar jogo em cultura local.",
    icon: Users,
  },
] as const;

const productionFlow = [
  {
    label: "Captação",
    title: "Captar momento",
    description: "Jogo, bastidor, comemoração, torcida e contexto entram como matéria-prima.",
  },
  {
    label: "História",
    title: "Dar contexto",
    description: "A mídia organiza o que aconteceu em história, destaque e memória pública.",
  },
  {
    label: "Ranking",
    title: "Conectar ranking",
    description: "Participação e evolução ganham leitura com dados públicos confirmados.",
  },
  {
    label: "Oportunidade",
    title: "Abrir oportunidade",
    description: "Atletas, equipes, patrocinadores e comunidade se beneficiam do palco.",
  },
] as const;

const mediaData = [
  {
    label: "Transmissões",
    value: "futuro",
    detail: "grade oficial entra com calendário confirmado.",
    icon: Radio,
  },
  {
    label: "Cortes",
    value: "bastidor",
    detail: "conteúdo curto ajuda a ampliar presença e comunidade.",
    icon: Clapperboard,
  },
  {
    label: "Programas",
    value: "editorial",
    detail: "formatos recorrentes podem nascer com ranking, atletas e equipes.",
    icon: Play,
  },
  {
    label: "Patrocínio",
    value: "nativo",
    detail: "marcas entram em pautas e ativações com aprovação comercial.",
    icon: Megaphone,
  },
] as const;

export default function MidiaPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#comunidade", label: "Acompanhar comunidade" },
          { href: "/cadastro#patrocinador", label: "Patrocinar mídia", variant: "secondary" },
        ]}
        badges={["Bastidores", "Ranking com contexto", "Atletas", "Comunidade", "Patrocinadores"]}
        description="A mídia UR transforma participação confirmada em história, palco, memória e ativo comercial para atletas, equipes, marcas e comunidade."
        eyebrow="Mídia UR • portal editorial"
        image={siteImages.communityMoment}
        imagePosition="center 42%"
        metrics={[
          { label: "Pauta", value: "atletas e equipes" },
          { label: "Formato", value: "bastidor, corte e história" },
          { label: "Valor", value: "palco e patrocínio" },
        ]}
        statusDescription="Grade de mídia, transmissões e programas oficiais entram com calendário confirmado."
        statusLabel="grade em preparação"
        statusTitle="O esporte amador também merece palco."
        title="Mídia própria para contar a jornada do ecossistema."
      />

      <PageSection id="materia-principal">
        <ImageFeaturePanel
          actions={[
            { href: "/cadastro#comunidade", label: "Acompanhar histórias", variant: "secondary" },
            { href: "/ranking", label: "Ver ranking", variant: "ghost" },
          ]}
          description="A matéria principal da mídia UR deve nascer de momentos reais: comemoração, rivalidade, evolução, bastidor, comunidade e contexto da temporada."
          eyebrow="Matéria principal"
          image={siteImages.mediaCoverage}
          imagePosition="center 45%"
          points={[
            {
              title: "Histórias de atletas",
              description: "Perfis e trajetórias ajudam a valorizar quem constrói presença no ecossistema.",
            },
            {
              title: "Ranking com contexto",
              description: "A classificação ganha sentido quando vira história, não só lista.",
            },
          ]}
          title="Da quadra para a memória pública."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="formatos">
        <CommercialAssetPanel
          assets={editorialAssets}
          description="A mídia UR precisa variar formato e ritmo: bastidor, ranking, atleta, equipe, comunidade, conteúdo comercial e cobertura de temporada."
          eyebrow="Formatos editoriais"
          title="Conteúdo recorrente para sustentar o ecossistema."
        />
      </PageSection>

      <PageSection id="bastidores">
        <ImageFeaturePanel
          description="A força da mídia está nos detalhes: pausa, conversa, preparação, reação do público e ambiente de quadra. Isso faz o esporte amador parecer vivo e acompanhado."
          eyebrow="Bastidores e comunidade"
          image={siteImages.timeoutTalk}
          imagePosition="center 42%"
          points={[
            {
              title: "Bastidor com função",
              description: "Mostra preparo, liderança, pressão, disciplina e mentalidade competitiva.",
            },
            {
              title: "Comunidade como palco",
              description: "Público, quadra e polos ajudam a construir pertencimento e recorrência.",
            },
          ]}
          reverse
          title="O que acontece ao redor também constrói valor."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="video-ads">
        <DataBoard
          description="A estrutura editorial prepara vídeo, blog, mídia patrocinada e programas futuros sem ativar scripts de ads nesta etapa."
          eyebrow="Vídeo, blog e mídia patrocinada"
          footer={<AdSlotHorizontal label="Espaço futuro para mídia patrocinada ou parceiro editorial" />}
          items={mediaData}
          title="Portal preparado para conteúdo e monetização futura."
        />
      </PageSection>

      <PageSection id="fluxo-editorial">
        <ProcessTimeline
          description="A mídia própria precisa funcionar como sistema: captar o que acontece, organizar histórias, conectar ranking e abrir oportunidade."
          eyebrow="Fluxo editorial"
          steps={productionFlow}
          title="Como um momento vira história UR."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#comunidade">Acompanhar comunidade</Button>
            <Button href="/cadastro#patrocinador" variant="secondary">
              Patrocinar mídia UR
            </Button>
          </>
        }
        description="Conteúdos oficiais entram conforme calendário e curadoria editorial. A comunidade já pode registrar interesse para acompanhar os próximos passos."
        eyebrow="Próximo passo"
        items={["bastidores", "ranking", "atletas", "blog", "patrocinadores"]}
        statusLabel="mídia própria em evolução"
        title="A próxima história começa na quadra."
      />
    </main>
  );
}
