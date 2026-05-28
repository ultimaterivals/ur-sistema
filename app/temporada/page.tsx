import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  LegendsArtPanel,
  ProductArtCard,
  SeasonAccordion,
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
  TerritoryArtCard,
  URBracketPreview,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";
import { cycleCards, seasonFaq, seasonStatusCards } from "@/lib/content/temporada";

export const metadata: Metadata = {
  title: "Temporada UR | Territórios em Disputa Ultimate Rivals",
  description:
    "Temporada UR conecta UR Play, Sprint, Series, Legends, ranking, UR Coins, polos, bracket, mídia e Virada de Ranking.",
};

const cycleSteps = [
  {
    label: "entrada",
    title: "UR Play",
    description: "O atleta entra, joga e começa a construir presença.",
  },
  {
    label: "leitura",
    title: "Nivelamento",
    description: "Nível, modalidade e contexto ajudam a equilibrar a disputa.",
  },
  {
    label: "mérito",
    title: "Ranking",
    description: "Participação confirmada vira histórico competitivo.",
  },
  {
    label: "disputa",
    title: "Sprint",
    description: "Eventos mais intensos classificam e movimentam a temporada.",
  },
  {
    label: "liga",
    title: "Series",
    description: "A competição ganha estrutura, narrativa e sequência.",
  },
  {
    label: "ápice",
    title: "Legends",
    description: "Atletas classificados representam nome, escudo e território.",
  },
] as const;

const systemCards = [
  {
    title: "Ranking",
    description: "Classificação por nível, presença e desempenho com critério público.",
    icon: "/season-1/symbols/forca-dos-polos-line.svg",
  },
  {
    title: "UR Coins",
    description: "Moedas internas conectadas a benefícios aprovados e regras oficiais.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
  {
    title: "Mídia",
    description: "A temporada vira história por meio de ranking, bastidores e destaques.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Polos",
    description: "BH, Betim e Contagem disputam força territorial ao longo do ciclo.",
    icon: "/season-1/symbols/forca-dos-polos-line.svg",
  },
] as const;

export default function TemporadaPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#atleta", label: "Entrar na temporada" },
          { href: "/eventos", label: "Ver eventos", variant: "secondary" },
        ]}
        badges={["UR Play", "Sprint", "Series", "Legends", "polos", "Virada de Ranking"]}
        description="A Temporada 1 organiza entrada, UR Play, ranking, equipes, polos, mídia e recompensas para que atletas de diferentes níveis saibam como começar e evoluir."
        eyebrow="Temporada 1 - Territórios em Disputa"
        image={siteImages.wideServe}
        imagePosition="center 48%"
        stats={[
          { label: "polos", value: String(season1.poles.length) },
          { label: "produtos", value: String(season1.ladder.length) },
          { label: "modalidades", value: String(season1.modalities.length) },
        ]}
        title="Entre na temporada. Evolua no seu ritmo."
      />

      <SeasonSection
        description="A temporada não é torneio isolado. Ela tem entrada, leitura de nível, disputa, ranking, mídia e fechamento de ciclo."
        eyebrow="Ciclo competitivo"
        id="ciclo"
        title="Da presença ao histórico."
      >
        <SeasonJourney steps={cycleSteps} />
      </SeasonSection>

      <SeasonSection
        description="A explicação histórica sobre ciclo trimestral, novo começo, ranking ativo e eventos conectados volta para reforçar a sensação de liga contínua."
        eyebrow="Temporada contínua"
        id="continuidade"
        title="A disputa tem começo, virada e novo ciclo."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={cycleCards} />
      </SeasonSection>

      <SeasonSection
        description="Cada produto tem função dentro da progressão do atleta, do primeiro jogo às etapas maiores."
        eyebrow="Escada oficial"
        id="escada"
        title="Um caminho progressivo para jogar e evoluir."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {season1.ladder.map((product) => (
            <ProductArtCard key={product.id} product={product} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="A camada competitiva conecta ranking individual, força de polos, UR Coins e mídia oficial."
        eyebrow="Sistema da temporada"
        id="sistema"
        title="Tudo conversa com o jogo."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {systemCards.map((card) => (
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
        description="A chave mostra a camada de disputa da temporada. Confrontos reais entram apenas após confirmação."
        eyebrow="Bracket"
        id="bracket"
        title="O caminho também precisa ser visual."
        variant="raised"
      >
        <URBracketPreview
          final={season1.mockBracket.final}
          quarterfinals={[...season1.mockBracket.quarterfinals]}
          semifinals={[...season1.mockBracket.semifinals]}
          stage={season1.mockBracket.stage}
        />
      </SeasonSection>

      <SeasonSection
        description="Cada polo soma presença, escudos, atletas e histórias."
        eyebrow="Polos"
        id="territorios"
        title="Três territórios. Uma disputa."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {season1.poles.map((pole, index) => (
            <TerritoryArtCard key={pole.id} pole={pole} rank={index + 1} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection id="legends" variant="raised">
        <LegendsArtPanel />
      </SeasonSection>

      <SeasonSection
        description="Datas, agenda, ranking e recompensas dependem de validação. O objetivo é manter a temporada clara sem inventar calendário ou premiação."
        eyebrow="Status oficial"
        id="status"
        title="O que precisa estar confirmado."
      >
        <SeasonBenefitGrid items={seasonStatusCards} />
      </SeasonSection>

      <SeasonSection
        description="Dúvidas preservadas para explicar calendário, ciclo, UR Play, Virada de Ranking, eventos e premiações com linguagem segura."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="Como a temporada funciona sem prometer o que ainda depende de regra."
        variant="raised"
      >
        <SeasonAccordion items={seasonFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="A temporada começa com o primeiro passo.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#atleta">Entrar na temporada</Button>
          <Button href="/ranking" variant="secondary">
            Ver ranking
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
