import type { Metadata } from "next";
import { BarChart3, Camera, Handshake, MapPin, ShieldCheck, Users, Zap } from "lucide-react";
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
  title: "Ecossistema UR | Plataforma Esportiva Ultimate Rivals",
  description:
    "Entenda o Ultimate Rivals como ecossistema esportivo contínuo com UR Play, ranking, temporada, equipes, CT UR, mídia, UR Market, patrocinadores e quadras.",
};

const systemAssets = [
  {
    label: "Jogar",
    title: "Jogar",
    description: "UR Play, eventos e calendário.",
    icon: Zap,
  },
  {
    label: "Evoluir",
    title: "Evoluir",
    description: "Treinos, postura, mentalidade e desenvolvimento.",
    icon: BarChart3,
  },
  {
    label: "Aparecer",
    title: "Aparecer",
    description: "Mídia UR, destaques, histórias e comunidade.",
    icon: Users,
  },
  {
    label: "Construir valor",
    title: "Construir valor",
    description: "Ranking, UR Coins, equipes, parceiros e oportunidades.",
    icon: Camera,
  },
] as const;

const ecosystemFlow = [
  {
    label: "Entrada",
    title: "Entrar pelo UR Play",
    description: "A jornada começa com cadastro, orientação e participação com critério.",
  },
  {
    label: "Histórico",
    title: "Gerar histórico",
    description: "Presença, nível, conduta e participação criam rastro esportivo confirmado.",
  },
  {
    label: "Ranking",
    title: "Organizar ranking",
    description: "Dados públicos entram por critérios oficiais, sem inventar posição ou número.",
  },
  {
    label: "Mídia",
    title: "Virar história",
    description: "Mídia própria transforma participação em bastidor, destaque e memória.",
  },
  {
    label: "Valor",
    title: "Conectar valor",
    description: "UR Coins, Market, CT UR e patrocinadores ampliam oportunidades com critério.",
  },
  {
    label: "Polos",
    title: "Expandir polos",
    description: "Quadras e comunidade sustentam recorrência territorial e crescimento local.",
  },
] as const;

const impactItems = [
  {
    label: "Atleta",
    value: "trajetória",
    detail: "deixa de ser presença solta e passa a construir histórico público.",
    icon: ShieldCheck,
  },
  {
    label: "Equipe",
    value: "identidade",
    detail: "vira ativo competitivo, midiático e comercial dentro da temporada.",
    icon: Users,
  },
  {
    label: "Quadra",
    value: "polo",
    detail: "recebe recorrência, comunidade, agenda e possibilidade de ativação local.",
    icon: MapPin,
  },
  {
    label: "Marca",
    value: "jornada",
    detail: "participa da experiência esportiva, não apenas de um espaço de exposição.",
    icon: Handshake,
  },
] as const;

const comparisonRows = [
  {
    label: "Continuidade",
    isolated: "Ação começa, acaba e deixa pouco histórico.",
    ecosystem: "Cada entrada alimenta temporada, ranking, mídia e próximos passos.",
  },
  {
    label: "Atleta",
    isolated: "Participa e volta para o anonimato.",
    ecosystem: "Constrói presença, reputação, nível e oportunidade com critério.",
  },
  {
    label: "Valor",
    isolated: "Patrocínio e público aparecem apenas no momento.",
    ecosystem: "Marcas, quadras e comunidade participam de uma jornada recorrente.",
  },
] as const;

export default function EcossistemaPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro", label: "Entrar no ecossistema" },
          { href: "/ur-play", label: "Começar pelo UR Play", variant: "secondary" },
        ]}
        badges={["UR Play", "Ranking contínuo", "Equipes", "Mídia própria", "UR Market"]}
        description="O Ultimate Rivals conecta jogo, ranking, equipes, quadras, mídia, benefícios e parceiros em uma estrutura criada para organizar, valorizar e desenvolver o esporte amador."
        eyebrow="Ecossistema UR"
        image={siteImages.teamEmbrace}
        imagePosition="center 45%"
        metrics={[
          { label: "Entrada", value: "UR Play" },
          { label: "Organização", value: "ranking e temporada" },
          { label: "Valor", value: "mídia, market e polos" },
        ]}
        statusDescription="O atleta entra, joga, é observado, cria histórico, aparece, evolui e pode acessar novas oportunidades dentro do UR."
        statusLabel="sistema contínuo"
        statusTitle="Tudo começa no jogo, mas não termina nele."
        title="Um caminho completo para o esporte amador."
      />

      <PageSection id="mapa">
        <CommercialAssetPanel
          assets={systemAssets}
          description="Tudo começa no jogo, mas não termina nele. O atleta entra, joga, é observado, cria histórico, aparece, evolui e pode acessar novas oportunidades dentro do UR."
          eyebrow="Tudo conectado"
          title="Tudo começa no jogo, mas não termina nele."
        />
      </PageSection>

      <PageSection className="bg-[#07080c]" id="caminho">
        <ProcessTimeline
          description="O caminho conecta entrada, histórico, ranking, mídia, benefícios, equipes, quadras e parceiros."
          eyebrow="Caminho do ecossistema"
          steps={ecosystemFlow}
          title="Do primeiro jogo à oportunidade."
        />
      </PageSection>

      <PageSection id="comparativo">
        <Card className="overflow-hidden p-0" premium>
          <div className="grid gap-4 border-b border-white/10 p-5 md:p-7 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <Badge>Comparativo visual</Badge>
              <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.8rem)] font-black uppercase leading-[0.9] text-white">
                Formato isolado vs ecossistema contínuo.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/68 lg:justify-self-end">
              A diferença está no que acontece depois da participação: o UR organiza o que normalmente se perde.
            </p>
          </div>
          <div className="grid border-b border-white/10 bg-[#ffd84d]/10 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b] md:grid-cols-[0.5fr_1fr_1fr]">
            <div className="px-5 py-4">Critério</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">Formato isolado</div>
            <div className="border-t border-white/10 px-5 py-4 md:border-l md:border-t-0">Ultimate Rivals</div>
          </div>
          {comparisonRows.map((row) => (
            <div className="grid border-b border-white/10 last:border-b-0 md:grid-cols-[0.5fr_1fr_1fr]" key={row.label}>
              <div className="bg-white/[0.035] px-5 py-4 text-sm font-black uppercase tracking-[0.1em] text-white">
                {row.label}
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-white/62 md:border-l md:border-t-0">
                {row.isolated}
              </div>
              <div className="border-t border-[#ffd84d]/15 bg-[#ffd84d]/[0.045] px-5 py-4 text-sm font-semibold leading-6 text-white/78 md:border-l md:border-t-0">
                {row.ecosystem}
              </div>
            </div>
          ))}
        </Card>
      </PageSection>

      <PageSection className="bg-[#07080c]" id="ambiente">
        <ImageFeaturePanel
          actions={[
            { href: "/atletas", label: "Ver atletas", variant: "secondary" },
            { href: "/patrocinadores", label: "Ver patrocinadores", variant: "ghost" },
          ]}
          description="O ecossistema só faz sentido quando junta esporte real, comunidade, organização e oportunidade comercial. A foto mostra o ambiente que sustenta a plataforma."
          eyebrow="Esporte, comunidade e organização"
          image={siteImages.communityMoment}
          imagePosition="center 44%"
          points={[
            {
              title: "Base real",
              description: "Atletas, público, quadra e bastidor são a matéria-prima do ecossistema.",
            },
            {
              title: "Crescimento com critério",
              description: "Dados públicos, agenda e benefícios entram com critérios claros.",
            },
          ]}
          title="O sistema nasce da quadra, não de uma planilha vazia."
        />
      </PageSection>

      <PageSection id="impacto">
        <DataBoard
          description="Cada público entra por uma porta diferente, mas todos se conectam ao mesmo ciclo: participação, histórico, mídia, oportunidade e recorrência."
          eyebrow="Impacto por público"
          items={impactItems}
          title="O ecossistema cria valor para mais de um lado."
        />
      </PageSection>

      <SegmentCtaPanel
        actions={
          <>
            <Button href="/cadastro">Escolher meu caminho</Button>
            <Button href="/regulamento" variant="secondary">
              Ver regulamento
            </Button>
          </>
        }
        description="O cadastro coloca você no radar do UR. Participação, ranking, equipe, patrocínio, quadra parceira e comunidade seguem critérios para manter equilíbrio e respeito."
        eyebrow="Próximo passo"
        items={["atleta", "equipe", "patrocinador", "quadra", "comunidade"]}
        statusLabel="cadastro aberto"
        title="Entre pela porta certa do ecossistema."
      />
    </main>
  );
}
