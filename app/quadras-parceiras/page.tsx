import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
  TerritoryArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Quadras Parceiras UR | Polos Oficiais Ultimate Rivals",
  description:
    "Quadras parceiras podem virar polos UR com calendário, eventos, mídia, comunidade, patrocinadores e ocupação organizada dentro da temporada.",
};

const poleCards = [
  {
    title: "Polo oficial",
    description: "A quadra ganha função dentro da temporada e da disputa territorial.",
    icon: "/season-1/badges/badge-polo-ativo.svg",
  },
  {
    title: "Ocupação",
    description: "UR Play e eventos ajudam a criar rotina com critérios e agenda confirmada.",
    icon: "/season-1/symbols/ur-play-line.svg",
  },
  {
    title: "Eventos",
    description: "A quadra pode receber etapas conforme operação, estrutura e calendário.",
    icon: "/season-1/symbols/ur-sprint-line.svg",
  },
  {
    title: "Mídia",
    description: "O polo aparece quando existe movimento real, história e comunidade.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Comunidade",
    description: "Atletas, equipes e público criam pertencimento quando a rotina volta.",
    icon: "/season-1/badges/badge-equipe-registrada.svg",
  },
  {
    title: "Patrocinadores",
    description: "Marcas locais entram melhor quando a quadra tem calendário e narrativa.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
] as const;

export default function QuadrasParceirasPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#quadra", label: "Cadastrar minha quadra" },
          { href: "/eventos", label: "Ver eventos", variant: "secondary" },
        ]}
        badges={["polo oficial", "ocupação", "eventos", "mídia", "comunidade", "patrocinadores"]}
        description="Sua quadra pode virar um território vivo da temporada, com calendário, atletas, mídia e relação com marcas locais."
        eyebrow="Polos oficiais"
        image={siteImages.wideServe}
        imagePosition="center 47%"
        stats={[
          { label: "polo", value: "quadra" },
          { label: "força", value: "comunidade" },
          { label: "ritmo", value: "calendário" },
        ]}
        title="Sua quadra pode virar um polo UR."
      />

      <SeasonSection
        description="BH, Betim e Contagem são a base visual inicial da Temporada 1."
        eyebrow="Territórios iniciais"
        id="polos"
        title="Três polos. Uma disputa."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {season1.poles.map((pole, index) => (
            <TerritoryArtCard key={pole.id} pole={pole} rank={index + 1} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="A quadra parceira precisa entregar experiência, operação e presença recorrente."
        eyebrow="O que um polo ativa"
        id="ativacoes"
        title="Calendário, mídia e comunidade."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {poleCards.map((card) => (
            <SeasonInfoCard
              description={card.description}
              icon={card.icon}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection id="cta" title="Transforme sua quadra em ponto de temporada.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#quadra">Cadastrar minha quadra</Button>
          <Button href="/patrocinadores" variant="secondary">
            Ver parcerias
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
