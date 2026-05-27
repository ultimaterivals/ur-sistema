import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  AthleteArtCard,
  RankingBroadcastPanel,
  SeasonAccordion,
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";
import { siteImages } from "@/lib/content/site-images";
import {
  athleteFaq,
  ctDevelopmentCards,
  hunterPrinciples,
  levelRankingCards,
  opportunityCards,
  protagonistCards,
  rewardsCards,
  visibilityCards,
} from "@/lib/content/atletas";

export const metadata: Metadata = {
  title: "Atletas UR | Jornada, Ranking e Temporada Ultimate Rivals",
  description:
    "Jornada do atleta no Ultimate Rivals: entrar pelo UR Play, ser observado, pontuar, evoluir, acumular UR Coins conforme critérios, entrar no ranking, aparecer na mídia e buscar classificação.",
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
        description="A versão anterior deixava claro que o atleta é protagonista da própria trajetória: presença, histórico, equipe e oportunidade precisam aparecer."
        eyebrow="Protagonismo"
        id="protagonismo"
        title="Não precisa ser profissional para ser tratado com seriedade."
        variant="raised"
      >
        <SeasonBenefitGrid items={protagonistCards} />
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
        <div className="mt-5">
          <SeasonBenefitGrid items={levelRankingCards} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Mentalidade Hunter volta como cultura de postura: disciplina, respeito, evolução e competitividade saudável, sem promessa milagrosa."
        eyebrow="Mentalidade"
        id="mentalidade"
        title="Postura também constrói reputação."
      >
        <SeasonBenefitGrid columns={4} items={hunterPrinciples} />
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

      <SeasonSection
        description="Mídia, ranking, equipes, Draft, CT UR e recompensas entram como possibilidades conectadas a presença, regra e validação oficial."
        eyebrow="Oportunidades"
        id="oportunidades"
        title="Sua trajetória pode abrir novos caminhos."
        variant="raised"
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <SeasonBenefitGrid columns={2} items={visibilityCards} />
          <SeasonBenefitGrid columns={2} items={opportunityCards} />
        </div>
        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <SeasonBenefitGrid columns={2} items={rewardsCards} />
          <SeasonBenefitGrid columns={2} items={ctDevelopmentCards} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="Dúvidas preservadas para reforçar cadastro, ranking em formação, reputação, mentalidade, equipes e publicação de dados."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="Como entrar sem perder contexto."
      >
        <SeasonAccordion items={athleteFaq} />
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
