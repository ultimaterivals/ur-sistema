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
    label: "Participação",
    value: "presença",
    detail: "UR Coins podem reconhecer recorrência, compromisso e participação validada.",
    icon: Users,
  },
  {
    label: "Desempenho",
    value: "critério",
    detail: "ranking e temporada ajudam a conectar mérito esportivo a benefícios.",
    icon: Trophy,
  },
  {
    label: "Engajamento",
    value: "comunidade",
    detail: "ações e mídia podem ampliar valor quando a operação estiver madura.",
    icon: Sparkles,
  },
  {
    label: "Resgate",
    value: "validação",
    detail: "benefícios reais entram após aprovação operacional e comercial.",
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
    description: "Acesso, vivências e experiências entram conforme agenda e validação.",
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
    label: "Validação",
    title: "Validar operação",
    description: "A equipe UR confirma disponibilidade, regra, parceiro e próximo passo.",
  },
] as const;

export default function URMarketPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#atleta", label: "Entrar no ecossistema" },
          { href: "/patrocinadores", label: "Ativar marca", variant: "secondary" },
        ]}
        badges={["UR Coins", "Benefícios", "Patrocinadores", "Recompensas", "Recorrência"]}
        description="O UR Market é a vitrine de valor do ecossistema: conecta participação, desempenho, ranking, patrocinadores, benefícios e experiências aprovadas."
        eyebrow="UR Market • vitrine de valor"
        image={siteImages.mediaCoverage}
        imagePosition="center 45%"
        metrics={[
          { label: "Moeda", value: "UR Coins" },
          { label: "Base", value: "ranking e participação" },
          { label: "Saída", value: "benefícios aprovados" },
        ]}
        statusDescription="Produtos, valores e benefícios reais entram apenas após validação oficial e aprovação comercial."
        statusLabel="market em preparação"
        statusTitle="Desempenho precisa virar benefício com critério."
        title="UR Coins conectam jornada esportiva e recompensa."
      />

      <PageSection id="coins">
        <DataBoard
          description="UR Coins não são promessa de ganho. São uma camada planejada para reconhecer presença, desempenho e engajamento quando a operação estiver validada."
          eyebrow="Painel de UR Coins"
          items={coinItems}
          title="Moeda interna para organizar valor, não inflar expectativa."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="vitrine">
        <ImageFeaturePanel
          actions={[
            { href: "/ranking", label: "Ver ranking", variant: "secondary" },
            { href: "/cadastro#patrocinador", label: "Oferecer benefício", variant: "ghost" },
          ]}
          description="A vitrine nasce para mostrar benefícios futuros de forma premium, sem publicar marcas, preços, produtos ou experiências não confirmadas."
          eyebrow="Vitrine futura"
          image={siteImages.teamEmbrace}
          imagePosition="center 46%"
          points={[
            {
              title: "Produtos entram após validação",
              description: "A experiência precisa proteger atletas, marcas e operação antes de abrir resgate real.",
            },
            {
              title: "Valores em UR Coins serão oficiais",
              description: "Nenhuma precificação fictícia será exibida no MVP público.",
            },
          ]}
          title="Recompensa boa parece oportunidade, não vitrine vazia."
        />
      </PageSection>

      <PageSection id="categorias">
        <CommercialAssetPanel
          assets={rewardAssets}
          description="As categorias preparam o Market para produtos, serviços, experiências e ativações comerciais, mantendo clareza de que tudo depende de aprovação operacional."
          eyebrow="Categorias de recompensa"
          title="Benefícios que fazem sentido para a jornada."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="resgate">
        <ProcessTimeline
          description="O fluxo de resgate precisa ser simples, auditável e honesto: primeiro vem a participação validada, depois a vitrine, depois a aprovação."
          eyebrow="Fluxo de resgate"
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
        description="O Market entra como camada de valor do ecossistema. Itens, valores e resgates reais dependem de validação oficial."
        eyebrow="Próximo passo"
        items={["UR Coins", "ranking", "benefícios", "patrocinadores", "comunidade"]}
        statusLabel="vitrine inicial em preparação"
        title="O valor do jogo precisa voltar para a comunidade."
      />
    </main>
  );
}
