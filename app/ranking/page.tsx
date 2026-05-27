import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  LegendsArtPanel,
  RankingBroadcastPanel,
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
  TerritoryArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

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
          { href: "/ur-play", label: "Entrar pelo UR Play" },
          { href: "/cadastro#atleta", label: "Cadastrar interesse", variant: "secondary" },
        ]}
        badges={["ranking individual", "formações", "polos", "níveis", "Legends"]}
        description="Mérito vira histórico. Ranking define reputação, classificação, força das equipes e caminho ao UR Legends."
        eyebrow="Central competitiva"
        image={siteImages.attackBlock}
        imagePosition="center 40%"
        stats={[
          { label: "entrada", value: "UR Play" },
          { label: "níveis", value: "N1 / N2 / N3" },
          { label: "disputa", value: "polos" },
        ]}
        title="Mérito vira histórico."
      />

      <SeasonSection
        description="O ranking só publica contexto real após participação confirmada. Até lá, o painel mostra a estrutura editorial da disputa."
        eyebrow="Broadcast competitivo"
        id="broadcast"
        title="Quem está na disputa?"
      >
        <RankingBroadcastPanel rows={season1.mockRankings} />
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
