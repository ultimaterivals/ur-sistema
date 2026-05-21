import type { Metadata } from "next";
import { CalendarDays, Camera, Handshake, MapPin, Megaphone, Store, Users } from "lucide-react";
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
  title: "Quadras Parceiras UR | Polos, Eventos e Comunidade Ultimate Rivals",
  description:
    "Veja como quadras podem se tornar polos do Ultimate Rivals, recebendo eventos, comunidade, mídia, patrocinadores, calendário recorrente e oportunidades futuras.",
};

const poleBenefits = [
  {
    label: "Fluxo",
    value: "atletas",
    detail: "polo bem posicionado pode receber recorrência de atletas e equipes.",
    icon: Users,
  },
  {
    label: "Agenda",
    value: "ciclo",
    detail: "eventos e UR Play criam calendário, não ações soltas.",
    icon: CalendarDays,
  },
  {
    label: "Mídia",
    value: "local",
    detail: "quadra vira cenário de histórias, bastidores e comunidade.",
    icon: Camera,
  },
  {
    label: "Negócios",
    value: "ativação",
    detail: "patrocinadores podem se conectar ao polo com contexto real.",
    icon: Handshake,
  },
] as const;

const activationFlow = [
  {
    label: "Interesse",
    title: "Registrar interesse",
    description: "A quadra informa estrutura, localização, modalidades e disponibilidade.",
  },
  {
    label: "Estrutura",
    title: "Confirmar estrutura",
    description: "A equipe UR avalia condições de agenda, público, segurança e calendário.",
  },
  {
    label: "Polo",
    title: "Planejar polo",
    description: "UR Play, eventos, mídia e patrocinadores entram conforme capacidade local.",
  },
  {
    label: "Recorrência",
    title: "Ativar recorrência",
    description: "O objetivo é criar agenda contínua e comunidade competitiva no território.",
  },
] as const;

const poleAssets = [
  {
    label: "Agenda",
    title: "UR Play local",
    description: "Entrada oficial de atletas com orientação, presença e observação.",
    icon: MapPin,
  },
  {
    label: "Calendário",
    title: "Eventos recorrentes",
    description: "Mini torneios e etapas podem movimentar a quadra ao longo do ciclo.",
    icon: CalendarDays,
  },
  {
    label: "Mídia",
    title: "Cenário de conteúdo",
    description: "Fotos, bastidores e histórias fortalecem o polo e a comunidade local.",
    icon: Megaphone,
  },
  {
    label: "Comercial",
    title: "Ativações no polo",
    description: "Marcas podem aparecer em experiências reais após aprovação comercial.",
    icon: Store,
  },
] as const;

export default function QuadrasParceirasPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#quadra", label: "Ser quadra parceira" },
          { href: "/eventos", label: "Ver eventos", variant: "secondary" },
        ]}
        badges={["Polos", "UR Play", "Eventos", "Mídia local", "Patrocinadores"]}
        description="Quadras parceiras podem virar polos esportivos e comerciais do Ultimate Rivals, conectando atletas, agenda recorrente, mídia, comunidade e marcas."
        eyebrow="Quadras parceiras • polos UR"
        image={siteImages.wideServe}
        imagePosition="center 47%"
        metrics={[
          { label: "Base", value: "estrutura e localização" },
          { label: "Agenda", value: "ciclo e recorrência" },
          { label: "Valor", value: "mídia e patrocinadores" },
        ]}
        statusDescription="Polo, agenda e parceria dependem de análise da equipe UR."
        statusLabel="polo em análise"
        statusTitle="Sua quadra pode virar um polo do ecossistema."
        title="A quadra não recebe só evento. Ela pode receber recorrência."
      />

      <PageSection id="polo">
        <ImageFeaturePanel
          actions={[
            { href: "/cadastro#quadra", label: "Cadastrar quadra" },
            { href: "/patrocinadores", label: "Ver ativações", variant: "secondary" },
          ]}
          description="Um polo UR precisa unir estrutura, comunidade, disponibilidade e compromisso com a agenda. A quadra vira base de calendário, não só local de aluguel."
          eyebrow="Polo operacional"
          image={siteImages.fairPlayLine}
          imagePosition="center 48%"
          points={[
            {
              title: "Estrutura adequada",
              description: "Quadra, iluminação, convivência, segurança e agenda precisam ser avaliados.",
            },
            {
              title: "Calendário recorrente",
              description: "O objetivo é abrir ciclos com UR Play, eventos e comunidade local.",
            },
          ]}
          title="Polo bom cria rotina esportiva."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="beneficios">
        <DataBoard
          description="A quadra parceira ganha mais valor quando entra no ciclo do ecossistema: atletas, agenda, mídia, patrocinadores e comunidade."
          eyebrow="Benefícios para a quadra"
          items={poleBenefits}
          title="O polo concentra esporte e oportunidade local."
        />
      </PageSection>

      <PageSection id="ativacao">
        <ProcessTimeline
          description="A ativação da quadra precisa ser segura, clara e gradual. Primeiro vem o interesse, depois a validação, então o planejamento do polo."
          eyebrow="Fluxo de ativação"
          steps={activationFlow}
          title="Da quadra interessada ao polo ativo."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ativos">
        <CommercialAssetPanel
          assets={poleAssets}
          description="A quadra vira ponto de encontro entre esporte, mídia, comunidade e negócio. Cada ativo depende de estrutura e validação local."
          eyebrow="Ativos do polo"
          title="O que uma quadra pode receber dentro do UR."
        />
      </PageSection>

      <PageSection id="comunidade">
        <ImageFeaturePanel
          description="A força de um polo está na comunidade que volta, acompanha, joga, torce e cria pertencimento. Mídia local e patrocinadores entram melhor quando existe rotina."
          eyebrow="Comunidade local"
          image={siteImages.communityMoment}
          imagePosition="center 44%"
          points={[
            {
              title: "Mídia do território",
              description: "Fotos, bastidores e histórias dão visibilidade para a quadra e para os atletas.",
            },
            {
              title: "Patrocinadores com contexto",
              description: "A marca participa de uma experiência viva, não de um espaço isolado.",
            },
          ]}
          reverse
          title="Quadra forte vira ponto de encontro."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro#quadra">Ser quadra parceira</Button>
            <Button href="/contato" variant="secondary">
              Falar com o UR
            </Button>
          </>
        }
        description="O cadastro da quadra coloca o espaço no radar do UR. Polo oficial, agenda, eventos, mídia e ativações dependem de critérios claros."
        eyebrow="Próximo passo"
        items={["estrutura", "agenda", "comunidade", "mídia", "patrocinadores"]}
        statusLabel="parceria com critério"
        title="Transforme sua quadra em base de temporada."
      />
    </main>
  );
}
