import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  AthleteArtCard,
  RankingBroadcastPanel,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "Atletas UR | Jornada, Ranking e Temporada Ultimate Rivals",
  description:
    "Jornada do atleta no Ultimate Rivals: entrar pelo UR Play, ser observado, pontuar, evoluir, ganhar UR Coins, entrar no ranking, aparecer na mídia e buscar classificação.",
};

const athleteJourney = [
  {
    label: "entrada",
    title: "Entrar",
    description: "O cadastro abre a conversa e coloca o atleta no radar da temporada.",
  },
  {
    label: "UR Play",
    title: "Jogar",
    description: "A presença confirmada inicia a leitura esportiva.",
  },
  {
    label: "observação",
    title: "Ser visto",
    description: "Nível, postura e contexto ajudam a orientar o próximo passo.",
  },
  {
    label: "mérito",
    title: "Pontuar",
    description: "Desempenho e constância começam a virar histórico.",
  },
  {
    label: "evolução",
    title: "Evoluir",
    description: "A temporada mostra onde melhorar e como avançar.",
  },
  {
    label: "valor",
    title: "UR Coins",
    description: "Participação pode se conectar a benefícios aprovados.",
  },
  {
    label: "reputação",
    title: "Ranking",
    description: "Seu nome entra quando houver participação e critério.",
  },
  {
    label: "palco",
    title: "Aparecer",
    description: "Mídia, eventos e Legends ampliam a trajetória.",
  },
] as const;

const levelCards = [
  {
    title: "N1",
    description: "Atletas de elite disputam protagonismo, ranking, convocações e alto rendimento.",
    icon: "/season-1/badges/badge-n1.svg",
  },
  {
    title: "N2",
    description: "Atletas avançados disputam consistência, evolução e oportunidades maiores.",
    icon: "/season-1/badges/badge-n2.svg",
  },
  {
    title: "N3",
    description: "Atletas em desenvolvimento disputam progresso, frequência e primeiras conquistas.",
    icon: "/season-1/badges/badge-n3.svg",
  },
] as const;

export default function AtletasPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "/cadastro#atleta", label: "Cadastrar como atleta" },
          { href: "/ur-play", label: "Conhecer UR Play", variant: "secondary" },
        ]}
        badges={["UR Play", "N1 a N3", "ranking", "UR Coins", "mídia", "Legends"]}
        description="Todo atleta tem espaço para entrar, evoluir, pontuar, aparecer e construir trajetória. Do iniciante ao elite, cada um disputa a própria temporada."
        eyebrow="Jornada do atleta"
        image={siteImages.athletePortrait}
        imagePosition="center 18%"
        stats={[
          { label: "entrada", value: "UR Play" },
          { label: "níveis", value: "N1 / N2 / N3" },
          { label: "trajetória", value: "ranking" },
        ]}
        title="Seu jogo precisa contar."
      />

      <SeasonSection
        description="A jornada individual fica clara quando cada passo tem função dentro da temporada."
        eyebrow="Para todos os níveis"
        id="jornada"
        title="Entrar, evoluir, pontuar e aparecer."
      >
        <SeasonJourney steps={athleteJourney} />
      </SeasonSection>

      <SeasonSection
        description="A divisão por nível reduz comparação injusta e melhora a experiência competitiva."
        eyebrow="Níveis"
        id="niveis"
        title="Cada atleta disputa no seu contexto."
        variant="raised"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {levelCards.map((card) => (
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
        description="Exemplos editoriais demonstram como perfil e ranking podem aparecer sem publicar atleta real antes de validação."
        eyebrow="Perfil esportivo"
        id="perfil"
        title="O atleta ganha identidade pública."
      >
        <div className="grid gap-5 lg:grid-cols-[0.7fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <AthleteArtCard name="Atleta Destaque" pole="BH" level="N1" points={0} rank={1} />
            <AthleteArtCard name="Atleta Evolução" pole="Contagem" level="N3" points={0} />
          </div>
          <RankingBroadcastPanel rows={season1.mockRankings} />
        </div>
      </SeasonSection>

      <SeasonSection id="cta" title="Entre pelo UR Play e comece sua temporada.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/cadastro#atleta">Cadastrar como atleta</Button>
          <Button href="/ranking" variant="secondary">
            Ver ranking
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
