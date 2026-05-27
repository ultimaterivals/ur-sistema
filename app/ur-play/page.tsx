import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  ProductArtCard,
  RankingBroadcastPanel,
  RewardArtCard,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "UR Play | Motor da Temporada Ultimate Rivals",
  description:
    "UR Play e a porta de entrada do Ultimate Rivals para presença, nivelamento, ranking, UR Coins, midia, evolução e progressão dentro da temporada.",
};

const journeySteps = [
  {
    label: "entrada",
    title: "Entrar",
    description: "Cadastro e orientação colocam o atleta no radar da temporada.",
  },
  {
    label: "presença",
    title: "Jogar",
    description: "Cada participação confirma presença, postura e contexto.",
  },
  {
    label: "leitura",
    title: "Ser observado",
    description: "Nivelamento e comportamento ajudam a definir o próximo passo.",
  },
  {
    label: "ranking",
    title: "Pontuar",
    description: "Desempenho e constância alimentam histórico competitivo.",
  },
  {
    label: "progresso",
    title: "Evoluir",
    description: "O atleta ganha clareza sobre nível, função e oportunidade.",
  },
  {
    label: "palco",
    title: "Aparecer",
    description: "Mídia, ranking e eventos transformam presença em trajetória.",
  },
] as const;

const motorCards = [
  {
    title: "Pontos",
    description: "Participação confirmada, desempenho e postura começam a formar base pública.",
    icon: "/season-1/symbols/ur-play-line.svg",
  },
  {
    title: "UR Coins",
    description: "Moedas internas conectam presença e mérito a benefícios aprovados.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
  {
    title: "Ranking",
    description: "O ranking nasce do jogo real e evolui com critérios oficiais.",
    icon: "/season-1/symbols/forca-dos-polos-line.svg",
  },
  {
    title: "Nivelamento",
    description: "N1, N2 e N3 ajudam a equilibrar disputa e leitura esportiva.",
    icon: "/season-1/badges/badge-n1.svg",
  },
  {
    title: "Mídia",
    description: "Histórias, bastidores e destaques ganham palco quando existe recorrência.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Caminho ao Legends",
    description: "Quem constrói temporada pode buscar classificação para os níveis acima.",
    icon: "/season-1/symbols/ur-legends-line.svg",
  },
] as const;

export default function URPlayPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#atleta", label: "Entrar no UR Play" },
          { href: "/ranking", label: "Ver ranking", variant: "secondary" },
        ]}
        badges={["presença", "pontuação", "UR Coins", "nivelamento", "mídia", "Legends"]}
        description="A principal porta de entrada da temporada. Você joga, é observado, pontua, evolui e começa a construir histórico dentro do ecossistema."
        eyebrow="Motor da temporada"
        image={siteImages.urPlayAction}
        imagePosition="center 42%"
        stats={[
          { label: "origem", value: "UR Play" },
          { label: "impacto", value: "ranking" },
          { label: "progressão", value: "Legends" },
        ]}
        title="O jogo começa no UR Play."
      />

      <SeasonSection
        description="Presença vira histórico. Desempenho vira posição. Evolução vira oportunidade."
        eyebrow="Jornada visual"
        id="jornada"
        title="Da entrada ao palco."
      >
        <SeasonJourney steps={journeySteps} />
      </SeasonSection>

      <SeasonSection
        description="O UR Play não é uma partida solta. Ele alimenta ranking, UR Coins, mídia, eventos, equipes e progressão."
        eyebrow="O que o UR Play alimenta"
        id="motor"
        title="Tudo começa no jogo real."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {motorCards.map((card) => (
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
        description="O ranking só ganha peso quando nasce de presença confirmada. A leitura inicial do UR Play prepara a disputa por nível."
        eyebrow="Ranking em formação"
        id="ranking"
        title="Seu jogo começa a contar."
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.55fr)]">
          <RankingBroadcastPanel rows={season1.mockRankings} />
          <div className="grid gap-4">
            <RewardArtCard
              description="O atleta entra, joga, cria presença e começa a disputar posição."
              icon="/season-1/symbols/ur-play-line.svg"
              title="Porta de entrada"
            />
            <RewardArtCard
              description="A temporada aponta o caminho para Sprint, Series e Legends."
              icon="/season-1/symbols/ur-legends-line.svg"
              title="Progressão"
              note="Classificação depende de regra oficial e participação confirmada."
            />
          </div>
        </div>
      </SeasonSection>

      <SeasonSection
        description="A escada oficial mostra por que o UR Play importa: ele é o primeiro degrau da temporada."
        eyebrow="Escada oficial"
        id="escada"
        title="Play, Sprint, Series, Legends."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {season1.ladder.map((product) => (
            <ProductArtCard key={product.id} product={product} />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection id="cta" title="Todo atleta tem uma temporada para disputar.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#atleta">Entrar no UR Play</Button>
          <Button href="/temporada" variant="secondary">
            Ver temporada
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
