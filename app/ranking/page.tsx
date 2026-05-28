import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  LegendsArtPanel,
  RankingBroadcastPanel,
  SeasonAccordion,
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
  TerritoryArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";
import {
  engagementRankingCards,
  individualRankingCards,
  mediaImpactCards,
  rankingFaq,
  rankingNarrativeCards,
  rankingTypes,
  scoringCriteria,
  teamRankingCards,
} from "@/lib/content/ranking";

export const metadata: Metadata = {
  title: "Ranking UR | Mérito, Níveis, Equipes e Polos Ultimate Rivals",
  description:
    "Ranking UR transforma mérito em histórico, organiza atletas por nível, formações, força dos polos e caminho ao UR Legends.",
};

const rankingCards = [
  {
    title: "Individual por nível",
    description: "Cada atleta disputa dentro do próprio contexto. N1, N2 e N3 não misturam leitura competitiva.",
    icon: "/season-1/badges/badge-n1.svg",
  },
  {
    title: "Equipes e formações",
    description: "Escudos, formações registradas e elencos ganham critérios próprios de evolução.",
    icon: "/season-1/badges/badge-equipe-registrada.svg",
  },
  {
    title: "Força dos Polos",
    description: "BH, Betim e Contagem disputam território com pontuação coletiva.",
    icon: "/season-1/symbols/forca-dos-polos-line.svg",
  },
  {
    title: "Caminho ao Legends",
    description: "O topo da temporada convoca atletas qualificados para representar nome, escudo e polo.",
    icon: "/season-1/symbols/ur-legends-line.svg",
  },
] as const;

export default function RankingPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "#broadcast", label: "Ver ranking" },
          { href: "#criterios", label: "Entender pontuação", variant: "secondary" },
        ]}
        badges={["ranking individual", "formações", "polos", "níveis", "Legends"]}
        description="O ranking do Ultimate Rivals organiza atletas, equipes e polos com base em participação, desempenho e critérios oficiais."
        eyebrow="Central de evolução"
        image={siteImages.attackBlock}
        imagePosition="center 40%"
        stats={[
          { label: "entrada", value: "UR Play" },
          { label: "níveis", value: "N1 / N2 / N3" },
          { label: "disputa", value: "polos" },
        ]}
        title="Ranking para dar clareza à evolução."
      />

      <SeasonSection
        description="Ele não existe para afastar iniciantes. Existe para criar disputas mais justas, acompanhar evolução e valorizar quem participa da temporada."
        eyebrow="Broadcast competitivo"
        id="broadcast"
        title="Organização, nível e histórico."
      >
        <RankingBroadcastPanel rows={season1.mockRankings} />
      </SeasonSection>

      <SeasonSection
        description="A versão histórica explicava que ranking não é só lista. Ele precisa dar contexto, visibilidade e memória de temporada sem inventar posição pública."
        eyebrow="Ranking com contexto"
        id="contexto"
        title="Classificação precisa virar reputação."
        variant="raised"
      >
        <SeasonBenefitGrid items={rankingNarrativeCards} />
      </SeasonSection>

      <SeasonSection
        description="Ranking não é só tabela. Ele conecta atleta, equipe, formação, polo e progressão."
        eyebrow="Sistemas de ranking"
        id="sistemas"
        title="Quatro disputas conectadas."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {rankingCards.map((card) => (
            <SeasonInfoCard
              description={card.description}
              icon={card.icon}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
        <div className="mt-5">
          <SeasonBenefitGrid columns={3} items={rankingTypes} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Pontuação só vira histórico quando passa por presença real, desempenho, evolução por nível, conquistas e regulamento publicado."
        eyebrow="Critérios"
        id="criterios"
        title="O que pode alimentar o ranking."
      >
        <SeasonBenefitGrid items={scoringCriteria} />
      </SeasonSection>

      <SeasonSection
        description="O ranking organiza reputação individual, força coletiva, engajamento validado e mídia da temporada."
        eyebrow="Impacto"
        id="impacto"
        title="Quando o mérito aparece, o ecossistema se move."
        variant="raised"
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <SeasonBenefitGrid columns={2} items={individualRankingCards} />
          <SeasonBenefitGrid columns={2} items={teamRankingCards} />
        </div>
        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <SeasonBenefitGrid columns={2} items={engagementRankingCards} />
          <SeasonBenefitGrid columns={2} items={mediaImpactCards} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="A força dos polos transforma participação local em rivalidade territorial."
        eyebrow="Territórios"
        id="polos"
        title="Cada ponto fortalece um polo."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {season1.poles.map((pole, index) => (
            <TerritoryArtCard key={pole.id} pole={pole} rank={index + 1} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection
        description="No Legends, a pontuação individual e a pontuação das equipes seguem a tabela oficial normal. Apenas o Ranking de Força dos Polos recebe multiplicador especial."
        eyebrow="Regra Legends"
        id="legends"
        title="O atleta joga pelo nome. O polo leva o resultado."
        variant="raised"
      >
        <LegendsArtPanel />
      </SeasonSection>

      <SeasonSection
        description="Regras preservadas para deixar claro o que já é estrutura e o que depende de dados reais validados."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="Ranking em formação, com critério público."
      >
        <SeasonAccordion items={rankingFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="Entre pelo UR Play e comece a construir histórico.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/ur-play">Começar pelo UR Play</Button>
          <Button href="/cadastro#atleta" variant="secondary">
            Cadastrar interesse
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
