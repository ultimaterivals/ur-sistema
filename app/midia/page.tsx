import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  AthleteArtCard,
  RankingBroadcastPanel,
  SeasonInfoCard,
  SeasonPageHero,
  SeasonSection,
  TeamFormationArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Mídia UR | Portal Esportivo Ultimate Rivals",
  description:
    "Mídia UR e o portal esportivo do Ultimate Rivals para atletas, equipes, ranking, bastidores, transmissões, patrocinadores e narrativa da temporada.",
};

const editorialCards = [
  {
    title: "Atleta em destaque",
    description: "Perfis e histórias valorizam quem entra, evolui e constrói trajetória.",
    icon: "/season-1/badges/badge-destaque-rodada.svg",
  },
  {
    title: "Equipe em alta",
    description: "Escudos, formações e rivalidades ganham contexto público.",
    icon: "/season-1/badges/badge-equipe-registrada.svg",
  },
  {
    title: "Ranking com contexto",
    description: "Tabela vira narrativa quando explica presença, nível, evolução e disputa.",
    icon: "/season-1/symbols/forca-dos-polos-line.svg",
  },
  {
    title: "Bastidores",
    description: "O que acontece fora da bola também constrói comunidade.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
  {
    title: "Cortes da rodada",
    description: "Momentos curtos ajudam o atleta amador a ganhar palco.",
    icon: "/season-1/symbols/ur-sprint-line.svg",
  },
  {
    title: "Transmissões",
    description: "A cobertura evolui conforme calendário, operação e parceiros.",
    icon: "/season-1/symbols/ur-legends-line.svg",
  },
] as const;

const sponsorCards = [
  {
    title: "Mídia oficial",
    description: "Marca aparece dentro de conteúdo conectado à jornada esportiva.",
  },
  {
    title: "Narrativa de marca",
    description: "Patrocinador pode entrar como parte útil da temporada, não como logo solto.",
  },
  {
    title: "Presença em conteúdo",
    description: "Ativações e benefícios entram com disponibilidade, regra e contexto editorial.",
  },
] as const;

export default function MidiaPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#comunidade", label: "Acompanhar Mídia UR" },
          { href: "/patrocinadores", label: "Ver mídia para marcas", variant: "secondary" },
        ]}
        badges={["histórias", "ranking", "bastidores", "transmissões", "patrocinadores"]}
        description="O esporte amador também merece palco. A Mídia UR transforma jogo, ranking, bastidores e evolução em narrativa pública."
        eyebrow="Portal esportivo"
        image={siteImages.mediaCoverage}
        imagePosition="center 45%"
        stats={[
          { label: "produto", value: "mídia" },
          { label: "base", value: "histórias" },
          { label: "ritmo", value: "temporada" },
        ]}
        title="O esporte amador também merece palco."
      />

      <SeasonSection
        description="Os formatos editoriais dão cara de liga para o que acontece na quadra e fora dela."
        eyebrow="Editorias"
        id="editorias"
        title="A rodada vira história."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {editorialCards.map((card) => (
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
        description="Exemplos visuais mostram como atleta, formação e ranking podem aparecer no portal."
        eyebrow="Visual de transmissão"
        id="portal"
        title="Atleta, equipe e ranking no mesmo palco."
        variant="raised"
      >
        <div className="grid gap-5 lg:grid-cols-[0.62fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <AthleteArtCard name="Atleta Destaque" pole="BH" level="N1" points={0} rank={1} />
            <TeamFormationArtCard athleteCount={4} teamName="Formação em Alta" pole="Betim" modality="Quartetos" />
          </div>
          <RankingBroadcastPanel rows={season1.mockRankings} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Patrocinadores entram melhor quando a marca tem contexto, frequência e presença útil dentro da jornada."
        eyebrow="Para marcas"
        id="patrocinadores"
        title="Marca também precisa de narrativa."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {sponsorCards.map((card) => (
            <SeasonInfoCard
              description={card.description}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </SeasonSection>

      <SeasonSection id="cta" title="Acompanhe a temporada como quem acompanha uma liga.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#comunidade">Acompanhar Mídia UR</Button>
          <Button href="/cadastro#patrocinador" variant="secondary">
            Ativar marca
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
