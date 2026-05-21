import type { Metadata } from "next";
import { Handshake, MapPin, Megaphone, ShieldCheck, Users, Zap } from "lucide-react";
import { PlatformHero } from "@/components/editorial/platform-hero";
import { CommercialAssetPanel, ImageFeaturePanel, ProcessTimeline } from "@/components/editorial/sports-platform-modules";
import { PageSection } from "@/components/site/page-section";
import { SegmentCtaPanel } from "@/components/site/segment-cta-panel";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Contato UR | Ultimate Rivals",
  description:
    "Entre em contato com o Ultimate Rivals para cadastro de atleta, equipe, patrocinador, quadra parceira, comunidade, imprensa e parcerias.",
};

const contactPaths = [
  {
    label: "Atleta",
    title: "Entrar no UR Play",
    description: "Registro de interesse para triagem, orientação e próximos passos como atleta.",
    icon: Zap,
  },
  {
    label: "Equipe",
    title: "Cadastrar equipe",
    description: "Caminho para identidade, capitão, elenco e ranking coletivo.",
    icon: ShieldCheck,
  },
  {
    label: "Comercial",
    title: "Patrocinar o UR",
    description: "Contato para marcas, mídia, ativações, UR Market e propostas comerciais.",
    icon: Handshake,
  },
  {
    label: "Quadra",
    title: "Virar polo parceiro",
    description: "Triagem para estrutura, agenda recorrente, eventos e comunidade local.",
    icon: MapPin,
  },
  {
    label: "Comunidade",
    title: "Acompanhar novidades",
    description: "Receber avisos sobre mídia, eventos, ranking e próximos passos.",
    icon: Users,
  },
  {
    label: "Imprensa",
    title: "Parcerias e mídia",
    description: "Caminho institucional para imprensa, conteúdo e relacionamento.",
    icon: Megaphone,
  },
] as const;

const contactFlow = [
  {
    label: "Caminho",
    title: "Escolher caminho",
    description: "Atleta, equipe, patrocinador, quadra, comunidade ou parceria.",
  },
  {
    label: "Cadastro",
    title: "Registrar interesse",
    description: "A central de cadastro organiza a entrada sem criar promessa automática.",
  },
  {
    label: "Triagem",
    title: "Passar por triagem",
    description: "A equipe UR valida contexto, prioridade e próximo passo.",
  },
  {
    label: "Retorno",
    title: "Receber orientação",
    description: "Participação, parceria ou contato comercial seguem conforme validação.",
  },
] as const;

export default function ContatoPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro", label: "Ir para cadastro" },
          { href: "/cadastro#patrocinador", label: "Contato comercial", variant: "secondary" },
        ]}
        badges={["Atletas", "Equipes", "Patrocinadores", "Quadras", "Comunidade"]}
        description="A forma mais rápida de falar com o Ultimate Rivals é escolher o caminho correto na central de cadastro. Assim a equipe UR consegue triar melhor cada interesse."
        eyebrow="Contato UR • canais oficiais"
        image={siteImages.communityMoment}
        imagePosition="center 44%"
        metrics={[
          { label: "Principal", value: "central de cadastro" },
          { label: "Comercial", value: "patrocinadores e quadras" },
          { label: "Operação", value: "triagem UR" },
        ]}
        statusDescription="O cadastro não garante vaga, parceria, patrocínio ou participação imediata. Tudo passa por validação operacional."
        statusLabel="triagem operacional"
        statusTitle="Contato bom começa pelo caminho certo."
        title="Fale com o UR sem perder o contexto."
      />

      <PageSection id="caminhos">
        <CommercialAssetPanel
          assets={contactPaths}
          description="Cada perfil tem uma entrada própria para evitar ruído e acelerar a triagem da operação UR."
          eyebrow="Caminhos de contato"
          title="Escolha o canal certo para o seu objetivo."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="fluxo">
        <ProcessTimeline
          description="A operação de contato precisa ser simples: escolher caminho, registrar interesse, passar por triagem e receber orientação."
          eyebrow="Como funciona"
          steps={contactFlow}
          title="Da mensagem ao próximo passo."
        />
      </PageSection>

      <PageSection id="orientacao">
        <ImageFeaturePanel
          actions={[
            { href: "/cadastro#quadra", label: "Tenho uma quadra", variant: "secondary" },
            { href: "/cadastro#comunidade", label: "Acompanhar comunidade", variant: "ghost" },
          ]}
          description="Se você ainda não sabe qual caminho escolher, comece pela central de cadastro. A triagem direciona o interesse para operação, comercial, comunidade ou parcerias."
          eyebrow="Orientação rápida"
          image={siteImages.timeoutTalk}
          imagePosition="center 42%"
          points={[
            {
              title: "Captação centralizada",
              description: "A página de contato apenas orienta. A entrada oficial continua na central de cadastro.",
            },
            {
              title: "Contato com contexto",
              description: "Dados básicos ajudam a equipe UR entender prioridade e próximo passo.",
            },
          ]}
          title="Menos ruído, mais clareza para responder."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro">Abrir central de cadastro</Button>
            <Button href="/cadastro#patrocinador" variant="secondary">
              Quero falar de parceria
            </Button>
          </>
        }
        description="Atletas, equipes, patrocinadores, quadras e comunidade entram pela mesma central, cada um com seu caminho de triagem."
        eyebrow="Central oficial"
        items={["cadastro", "triagem", "orientação", "próximo passo"]}
        statusLabel="cadastro de interesse aberto"
        title="Escolha seu caminho e deixe a operação organizar o retorno."
      />
    </main>
  );
}
