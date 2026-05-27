import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  RewardArtCard,
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Patrocinadores UR | Marca, Mídia, Eventos e UR Market",
  description:
    "Patrocinadores Ultimate Rivals podem entrar na jornada esportiva com mídia oficial, eventos, UR Market, ativações nos polos, recompensas e conteúdo.",
};

const commercialCards = [
  {
    title: "Mídia oficial",
    description: "Marca integrada a conteúdo, bastidores, histórias e cobertura da temporada.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Eventos",
    description: "Presença em etapas, ações de quadra e experiências com público esportivo.",
    icon: "/season-1/symbols/ur-sprint-line.svg",
  },
  {
    title: "UR Market",
    description: "Produtos e serviços podem entrar como benefícios aprovados para atletas.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
  {
    title: "Ativações nos polos",
    description: "BH, Betim e Contagem criam contexto local para relacionamento.",
    icon: "/season-1/symbols/forca-dos-polos-line.svg",
  },
  {
    title: "Recompensas",
    description: "Benefícios para atletas entram com regra, estoque, critério e disponibilidade.",
    icon: "/season-1/badges/badge-atleta-evolucao.svg",
  },
  {
    title: "Dados e presença",
    description: "Relatórios só devem usar dados confirmados, sem prometer audiência ou ROI sem base.",
    icon: "/season-1/badges/badge-top-ranking.svg",
  },
] as const;

export default function PatrocinadoresPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#patrocinador", label: "Quero patrocinar" },
          { href: "/midia", label: "Ver Mídia UR", variant: "secondary" },
        ]}
        badges={["mídia", "eventos", "UR Market", "polos", "conteúdo", "benefícios"]}
        description="Sua marca entra dentro da jornada esportiva: atleta, ranking, mídia, eventos, polos e benefícios com critério."
        eyebrow="Proposta comercial"
        image={siteImages.sponsorActivation}
        imagePosition="center 45%"
        stats={[
          { label: "ativo", value: "mídia" },
          { label: "presença", value: "eventos" },
          { label: "canal", value: "UR Market" },
        ]}
        title="Sua marca dentro da temporada."
      />

      <SeasonSection
        description="O patrocinador entra melhor quando cria utilidade para atleta, comunidade e operação."
        eyebrow="Ativos comerciais"
        id="ativos"
        title="Marca não é só logo."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {commercialCards.map((card) => (
            <SeasonInfoCard
              description={card.description}
              icon={card.icon}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="Produtos e serviços de patrocinadores podem virar benefícios no UR Market quando aprovados pela UR."
        eyebrow="UR Market"
        id="market"
        title="Benefício bom entra com regra."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <RewardArtCard
            description="Marcas podem oferecer produtos, serviços e experiências conectadas à temporada."
            icon="/season-1/symbols/ur-coins-line.svg"
            title="Produtos e serviços"
          />
          <RewardArtCard
            description="Toda oferta precisa respeitar disponibilidade, regra oficial e comunicação clara."
            icon="/season-1/symbols/ur-play-line.svg"
            title="Benefícios aprovados"
          />
          <RewardArtCard
            description="Conteúdo, eventos e ativações ampliam presença sem prometer métricas não validadas."
            icon="/season-1/symbols/ur-series-line.svg"
            title="Conteúdo e presença"
          />
        </div>
      </SeasonSection>

      <SeasonSection id="cta" title="Ative sua marca com critério e contexto esportivo.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#patrocinador">Quero patrocinar</Button>
          <Button href="/ur-market" variant="secondary">
            Ver UR Market
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
