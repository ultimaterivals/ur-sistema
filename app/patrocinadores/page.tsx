import type { Metadata } from "next";
import { BarChart3, CalendarDays, Camera, MapPin, Radio, ShoppingBag, Target, Users } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import {
  CommercialAssetPanel,
  DataBoard,
  ImageFeaturePanel,
  ProcessTimeline,
} from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Patrocinadores UR | Marcas, Mídia, Ranking e UR Market Ultimate Rivals",
  description:
    "Conheça as oportunidades para patrocinadores no Ultimate Rivals, um ecossistema esportivo com atletas, equipes, eventos, ranking, mídia, UR Market, CT UR e ativações com dados.",
};

const commercialAssets = [
  {
    label: "Mídia",
    title: "Cobertura e bastidores",
    description: "Conteúdo oficial, cortes, histórias e presença em narrativas da temporada.",
    icon: Camera,
  },
  {
    label: "Ranking",
    title: "Visibilidade contínua",
    description: "Associação com evolução, desempenho, presença e reconhecimento público.",
    icon: BarChart3,
  },
  {
    label: "Eventos",
    title: "Experiência local",
    description: "Ativações conectadas a UR Play, torneios, comunidade e quadras parceiras.",
    icon: CalendarDays,
  },
  {
    label: "UR Market",
    title: "Benefício real",
    description: "Produtos, serviços, descontos e experiências após aprovação comercial.",
    icon: ShoppingBag,
  },
] as const;

const brandJourney = [
  {
    label: "Entrada",
    title: "Interesse comercial",
    description: "A marca informa objetivo, público, segmento e intenção de ativação.",
  },
  {
    label: "Diagnóstico",
    title: "Fit com o ecossistema",
    description: "A equipe UR avalia aderência com atletas, quadras, mídia, eventos e comunidade.",
  },
  {
    label: "Proposta",
    title: "Cota sob medida",
    description: "Valores, entregas e contrapartidas reais dependem de proposta e aprovação.",
  },
  {
    label: "Ativação",
    title: "Presença na jornada",
    description: "A marca aparece em experiências, benefícios, mídia e pontos de contato relevantes.",
  },
  {
    label: "Relatório",
    title: "Métricas futuras",
    description: "Dados e relatórios entram após operação validada e critérios comerciais claros.",
  },
] as const;

const metrics = [
  {
    label: "Alcance",
    value: "a estruturar",
    detail: "métricas entram após operação validada e calendário comercial ativo.",
    icon: Radio,
  },
  {
    label: "Ativações",
    value: "por proposta",
    detail: "entregas dependem do objetivo da marca, polo, evento e canal.",
    icon: Target,
  },
  {
    label: "Comunidade",
    value: "relacionamento",
    detail: "marcas podem criar benefícios reais para atletas e público.",
    icon: Users,
  },
  {
    label: "Polos",
    value: "expansão",
    detail: "quadras e eventos criam presença territorial com contexto.",
    icon: MapPin,
  },
] as const;

const deliveryRows = [
  {
    label: "Mídia oficial",
    value: "conteúdo, cortes e bastidores",
  },
  {
    label: "Evento",
    value: "presença em quadra e experiência local",
  },
  {
    label: "Ranking",
    value: "associação com evolução esportiva",
  },
  {
    label: "UR Market",
    value: "benefícios e ativações aprovadas",
  },
] as const;

export default function PatrocinadoresPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#patrocinador", label: "Quero patrocinar" },
          { href: "/midia", label: "Ver mídia UR", variant: "secondary" },
        ]}
        badges={["Mídia própria", "Ranking", "Eventos", "UR Market", "Comunidade"]}
        description="Patrocinar o Ultimate Rivals é entrar em uma jornada esportiva contínua, conectando marca a atletas, equipes, quadras, mídia, ranking, benefícios e comunidade."
        eyebrow="Patrocinadores UR • mídia kit"
        image={siteImages.sponsorActivation}
        imagePosition="center 45%"
        metrics={[
          { label: "Ativo", value: "mídia + ranking" },
          { label: "Canal", value: "UR Market e eventos" },
          { label: "Base", value: "comunidade esportiva" },
        ]}
        statusDescription="Cotas, valores, entregas e métricas reais serão definidos em proposta comercial e aprovação operacional."
        statusLabel="propostas sob validação"
        statusTitle="Marcas entram na jornada, não só no banner."
        title="Patrocínio como plataforma, não espaço de logo."
      />

      <PageSection id="ativos">
        <CommercialAssetPanel
          assets={commercialAssets}
          description="O patrocinador certo participa de pontos reais do ecossistema: mídia, ranking, eventos, quadras, CT UR, UR Market e comunidade competitiva."
          eyebrow="Inventário comercial"
          title="Ativos que conectam marca e jornada esportiva."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="jornada">
        <ProcessTimeline
          description="A relação comercial precisa ser clara desde o início: entender objetivo, validar aderência, criar proposta, ativar e medir."
          eyebrow="Jornada da marca"
          steps={brandJourney}
          title="Do interesse à presença dentro do ecossistema."
        />
      </PageSection>

      <PageSection id="mockup-entrega">
        <ImageFeaturePanel
          description="A entrega comercial deve combinar presença visual, experiência, conteúdo e benefício real. O UR Market é o canal para ativação recorrente, não apenas exposição pontual."
          eyebrow="Mockup de entrega"
          image={siteImages.mediaCoverage}
          imagePosition="center 46%"
          points={[
            {
              title: "Mídia + evento",
              description: "Cobertura, bastidores, cortes e presença em experiências com atletas e comunidade.",
            },
            {
              title: "Benefício + relacionamento",
              description: "Produtos, serviços e experiências podem entrar como benefícios aprovados no UR Market.",
            },
          ]}
          statusLabel="entregas por proposta"
          title="A marca aparece onde a jornada acontece."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="entregas">
        <Card className="overflow-hidden p-0" premium>
          <div className="grid gap-4 border-b border-white/10 p-5 md:p-7 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <Badge>Pacote comercial em formação</Badge>
              <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.8rem)] font-black uppercase leading-[0.9] text-white">
                Entrega comercial com múltiplos pontos de contato.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/68 lg:justify-self-end">
              Esta estrutura prepara o site para propostas comerciais sem inventar cotas, valores, alcance ou contratos reais.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {deliveryRows.map((row) => (
              <div className="border-b border-white/10 p-5 md:border-r xl:last:border-r-0" key={row.label}>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{row.label}</div>
                <div className="mt-4 text-xl font-black uppercase leading-[0.95] text-white">{row.value}</div>
              </div>
            ))}
          </div>
        </Card>
      </PageSection>

      <PageSection id="metricas">
        <DataBoard
          description="Relatórios, dados e métricas serão estruturados com a operação real. A fase atual já organiza os campos comerciais para medir o que for validado."
          eyebrow="Métricas futuras"
          items={metrics}
          title="Dados comerciais sem inflar promessa."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="contexto">
        <ImageFeaturePanel
          actions={[
            { href: "/quadras-parceiras", label: "Quadras parceiras", variant: "secondary" },
            { href: "/eventos", label: "Eventos UR", variant: "ghost" },
          ]}
          description="Quadras, eventos e comunidade criam contexto local para ativação. A marca pode participar da experiência, não apenas decorar a comunicação."
          eyebrow="Eventos, polos e comunidade"
          image={siteImages.communityMoment}
          imagePosition="center 44%"
          points={[
            {
              title: "Contexto real",
              description: "Ativações precisam conversar com atleta, equipe, público e território.",
            },
            {
              title: "Recorrência",
              description: "Temporada, ranking e mídia tornam a relação mais contínua que uma ação isolada.",
            },
          ]}
          reverse
          title="O melhor patrocínio participa do ambiente."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#patrocinador">Quero patrocinar</Button>
            <Button href="/contato" variant="secondary">
              Falar com o UR
            </Button>
          </>
        }
        description="O cadastro comercial inicia a triagem. Valores, cotas, entregas, métricas e ativações reais dependem de proposta e aprovação."
        eyebrow="Interesse comercial"
        items={["mídia", "eventos", "ranking", "UR Market", "comunidade"]}
        statusLabel="valores sob proposta"
        title="Entre na jornada do atleta com critério."
      />
    </main>
  );
}
