import type { Metadata } from "next";
import { BadgePercent, Dumbbell, Gift, Handshake, ShoppingBag, Sparkles, Trophy, Users } from "lucide-react";
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
  title: "UR Market | Recompensas, UR Coins e Benefícios Ultimate Rivals",
  description:
    "Conheça o UR Market, a vitrine de recompensas do Ultimate Rivals onde UR Coins, desempenho, ranking, patrocinadores e benefícios se conectam ao ecossistema esportivo.",
};

const coinItems = [
  {
    label: "Produtos e experiências",
    value: "benefícios",
    detail: "benefícios podem incluir produtos, serviços, experiências e ações com parceiros.",
    icon: Users,
  },
  {
    label: "Atletas e equipes",
    value: "participação",
    detail: "atletas e equipes podem acumular e usar moedas conforme as regras da temporada.",
    icon: Trophy,
  },
  {
    label: "Parceiros integrados",
    value: "benefício real",
    detail: "marcas podem entrar oferecendo benefícios reais para a comunidade UR.",
    icon: Sparkles,
  },
  {
    label: "Resgate com aprovação",
    value: "critério",
    detail: "todo benefício precisa respeitar critérios, disponibilidade e equilíbrio do sistema.",
    icon: ShoppingBag,
  },
] as const;

const rewardAssets = [
  {
    label: "Produtos",
    title: "Itens esportivos",
    description: "Vitrine preparada para produtos aprovados, sem preços ou marcas inventadas.",
    icon: Gift,
  },
  {
    label: "Serviços",
    title: "Apoio ao atleta",
    description: "Benefícios de parceiros podem incluir serviços úteis à jornada esportiva.",
    icon: BadgePercent,
  },
  {
    label: "Experiências",
    title: "CT UR e eventos",
    description: "Acesso, vivências e experiências entram conforme agenda confirmada.",
    icon: Dumbbell,
  },
  {
    label: "Ativações",
    title: "Patrocinadores",
    description: "Marcas podem oferecer benefícios reais para atletas e comunidade.",
    icon: Handshake,
  },
] as const;

const redemptionFlow = [
  {
    label: "Contexto",
    title: "Ganhar contexto",
    description: "Participação, ranking, presença e engajamento criam base para UR Coins.",
  },
  {
    label: "Vitrine",
    title: "Acessar vitrine",
    description: "Benefícios aprovados aparecem em categorias claras e sem promessa inflada.",
  },
  {
    label: "Resgate",
    title: "Solicitar resgate",
    description: "Valores em UR Coins serão definidos oficialmente antes de qualquer resgate real.",
  },
  {
    label: "Confirmação",
    title: "Confirmar resgate",
    description: "A equipe UR confirma disponibilidade, regra, parceiro e próximo passo.",
  },
] as const;

export default function URMarketPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "#coins", label: "Conhecer o UR Market" },
          { href: "/patrocinadores", label: "Ativar marca", variant: "secondary" },
        ]}
        badges={["UR Coins", "Benefícios", "Patrocinadores", "Recompensas", "Recorrência"]}
        description="UR Coins são pontos internos do Ultimate Rivals. Elas conectam presença, desempenho e participação a benefícios, experiências e oportunidades aprovadas pela UR."
        eyebrow="UR Coins e benefícios"
        image={siteImages.mediaCoverage}
        imagePosition="center 45%"
        metrics={[
          { label: "Pontos", value: "UR Coins" },
          { label: "Base", value: "ranking e participação" },
          { label: "Saída", value: "benefícios aprovados" },
        ]}
        statusDescription="As UR Coins não são dinheiro. São pontos internos de reconhecimento e acesso a benefícios aprovados pela UR."
        statusLabel="benefícios aprovados pela UR"
        statusTitle="Não é prêmio fácil. É reconhecimento com regra."
        title="Benefícios com critério. Evolução com valor."
      />

      <PageSection id="coins">
        <DataBoard
          description="As UR Coins ajudam a transformar participação em valor dentro do ecossistema. O uso depende de critérios, disponibilidade e aprovação da UR."
          eyebrow="Painel de UR Coins"
          items={coinItems}
          title="Não é prêmio fácil. É reconhecimento com regra."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="vitrine">
        <ImageFeaturePanel
          actions={[
            { href: "/ranking", label: "Ver ranking", variant: "secondary" },
            { href: "/cadastro#patrocinador", label: "Oferecer benefício", variant: "ghost" },
          ]}
          description="A vitrine nasce para mostrar benefícios com critério, sem prometer produtos, marcas, preços ou experiências antes da aprovação da UR."
          eyebrow="Vitrine de benefícios UR"
          image={siteImages.teamEmbrace}
          imagePosition="center 46%"
          points={[
            {
              title: "Produtos entram com critério",
              description: "A experiência precisa proteger atletas, marcas e comunidade antes de abrir resgate real.",
            },
            {
              title: "Valores em UR Coins serão oficiais",
              description: "Nenhuma precificação fictícia será exibida no site público.",
            },
          ]}
          title="Vitrine de benefícios UR."
        />
      </PageSection>

      <PageSection id="categorias">
        <CommercialAssetPanel
          assets={rewardAssets}
          description="As categorias preparam produtos, serviços, experiências e ativações comerciais, sempre com benefícios reais aprovados pela UR."
          eyebrow="Categorias de recompensa"
          title="Recompensas com critério."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="resgate">
        <ProcessTimeline
          description="Primeiro vem presença, desempenho e participação. Depois, benefícios aprovados conforme regra, disponibilidade e equilíbrio do sistema."
          eyebrow="Resgate com aprovação"
          steps={redemptionFlow}
          title="Como valor pode virar benefício."
        />
      </PageSection>

      <PageSection id="patrocinadores">
        <ImageFeaturePanel
          description="Patrocinadores podem entrar no Market oferecendo benefícios reais para atletas, equipes e comunidade. Isso fortalece retenção, engajamento e recorrência sem depender de exposição vazia."
          eyebrow="Patrocinadores no Market"
          image={siteImages.sponsorActivation}
          imagePosition="center 44%"
          points={[
            {
              title: "Benefício real",
              description: "Produtos, serviços, descontos ou experiências precisam ser úteis para a comunidade.",
            },
            {
              title: "Relacionamento contínuo",
              description: "A marca participa da jornada esportiva antes, durante e depois da temporada.",
            },
          ]}
          reverse
          statusLabel="patrocinadores após aprovação"
          title="Marcas podem gerar valor além do banner."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#atleta">Entrar como atleta</Button>
            <Button href="/cadastro#patrocinador" variant="secondary">
              Quero oferecer benefício
            </Button>
          </>
        }
        description="UR Coins conectam presença, desempenho e participação a benefícios, experiências e oportunidades aprovadas pela UR."
        eyebrow="Próximo passo"
        items={["UR Coins", "ranking", "benefícios", "patrocinadores", "comunidade"]}
        statusLabel="benefícios aprovados pela UR"
        title="Conhecer o UR Market."
      />
    </main>
  );
}
