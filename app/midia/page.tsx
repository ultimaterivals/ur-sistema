import type { Metadata } from "next";
import { BarChart3, Camera, Clapperboard, Megaphone, Mic, Play, Radio, Users } from "lucide-react";
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

const mediaAssets = [
  {
    label: "Bastidores",
    title: "Bastidores",
    description: "Treinos, preparação, ambiente, torcida e momentos que constroem memória de temporada.",
    icon: Camera,
  },
  {
    label: "Atletas",
    title: "Atletas em destaque",
    description: "Quem joga, evolui e se compromete pode ganhar espaço editorial com contexto.",
    icon: BarChart3,
  },
  {
    label: "Equipes",
    title: "Equipes e rivalidades",
    description: "Escudos e confrontos ficam mais fortes quando existe história por trás.",
    icon: Mic,
  },
  {
    label: "Conteúdo oficial",
    title: "Conteúdo oficial",
    description: "Fotos, vídeos, cortes, chamadas, entrevistas e cobertura da temporada.",
    icon: Users,
  },
] as const;

const productionFlow = [
  {
    label: "registro",
    title: "Registrar momento",
    description: "Jogo, bastidor, comemoração, torcida e contexto entram como matéria-prima.",
  },
  {
    label: "história",
    title: "Dar contexto",
    description: "A mídia organiza o que aconteceu em destaque, matéria e memória pública.",
  },
  {
    label: "ranking",
    title: "Conectar ranking",
    description: "Participação e evolução ganham leitura com dados públicos confirmados.",
  },
  {
    label: "oportunidade",
    title: "Abrir oportunidade",
    description: "Atletas, equipes, patrocinadores e comunidade se beneficiam do palco.",
  },
] as const;

const mediaProducts = [
  {
    label: "Transmissões",
    title: "Transmissões",
    description: "Grade oficial entra com calendário, operação e parceiros confirmados.",
    icon: Radio,
  },
  {
    label: "Cortes",
    title: "Cortes da rodada",
    description: "Conteúdo curto ajuda a ampliar presença, bastidores e comunidade.",
    icon: Clapperboard,
  },
  {
    label: "Programa",
    title: "Rivais em Jogo",
    description: "Formato editorial para comentar ranking, atletas, equipes e histórias da temporada.",
    icon: Play,
  },
  {
    label: "Série",
    title: "Documentários",
    description: "Histórias longas podem acompanhar evolução, polos, rivalidades e bastidores com profundidade.",
    icon: Camera,
  },
  {
    label: "Marca",
    title: "Mídia patrocinada",
    description: "Marcas entram em pautas e ativações com aprovação comercial e contexto útil.",
    icon: Megaphone,
  },
] as const;

const mediaFaq = [
  {
    question: "A Mídia UR já publica dados reais de ranking?",
    answer: "Dados reais entram apenas após participação confirmada, critérios oficiais e validação pública.",
  },
  {
    question: "O atleta precisa ser profissional para aparecer?",
    answer: "Não. A proposta é dar palco ao esporte amador com seriedade, contexto e história real.",
  },
  {
    question: "Marcas podem participar do conteúdo?",
    answer: "Podem, desde que a entrega tenha aprovação comercial, utilidade para a comunidade e regra clara.",
  },
] as const;

export default function MidiaPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "#editorias", label: "Conhecer mídia UR" },
          { href: "/temporada", label: "Ver temporada", variant: "secondary" },
        ]}
        badges={["histórias", "ranking", "bastidores", "transmissões", "patrocinadores"]}
        description="A mídia oficial transforma jogos, rankings, histórias, bastidores e evolução em conteúdo para valorizar atletas, equipes, polos e parceiros."
        eyebrow="Mídia UR"
        image={siteImages.mediaCoverage}
        imagePosition="center 45%"
        stats={[
          { label: "produto", value: "mídia" },
          { label: "base", value: "histórias" },
          { label: "ritmo", value: "temporada" },
        ]}
        title="A jornada do atleta também precisa ser contada."
      />

      <SeasonSection
        description="Cada atleta pode virar personagem. Cada equipe pode criar narrativa. Cada etapa pode gerar história."
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
        description="A página antiga reforçava que a mídia nasce de bastidores, atletas, rivalidades e conteúdo oficial. Essa camada volta para dar peso de portal esportivo."
        eyebrow="Matéria-prima"
        id="materia-prima"
        title="O que acontece ao redor também vira valor."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={mediaAssets} />
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
            <TeamFormationArtCard athleteCount={4} teamName="Formação em Alta" pole="Betim" modality="Quarteto" />
          </div>
          <RankingBroadcastPanel rows={season1.mockRankings} />
        </div>
      </SeasonSection>

      <SeasonSection
        description="A mídia própria registra o momento, dá contexto, conecta ranking e abre oportunidade para atletas, equipes, marcas e comunidade."
        eyebrow="Caminho editorial"
        id="caminho-editorial"
        title="Como uma jogada vira história UR."
      >
        <SeasonJourney steps={productionFlow} />
      </SeasonSection>

      <SeasonSection
        description="Transmissões, cortes, Rivais em Jogo, documentários e mídia patrocinada entram conforme calendário, pauta, operação e parceiros."
        eyebrow="Produtos de mídia"
        id="formatos"
        title="Portal preparado para conteúdo recorrente."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={mediaProducts} />
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

      <SeasonSection
        description="Dúvidas preservadas para manter o tom forte sem prometer audiência, dados ou exposição sem base real."
        eyebrow="Dúvidas rápidas"
        id="faq"
        title="Palco sim. Número inventado, não."
      >
        <SeasonAccordion items={mediaFaq} />
      </SeasonSection>

      <SeasonSection id="cta" title="Acompanhe a temporada como história em construção.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#editorias">Conhecer mídia UR</Button>
          <Button href="/cadastro#patrocinador" variant="secondary">
            Ver oportunidades
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
