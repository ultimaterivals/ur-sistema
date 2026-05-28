import type { Metadata } from "next";
import { BarChart3, Brain, Camera, Dumbbell, ShieldCheck, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SeasonBenefitGrid,
  SeasonInfoCard,
  SeasonJourney,
  SeasonPageHero,
  SeasonSection,
} from "@/components/season";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "CT UR | Desenvolvimento Técnico, Físico e Mental Ultimate Rivals",
  description:
    "Conheça o CT UR, pilar de desenvolvimento do Ultimate Rivals para evolução técnica, física, mental, liderança, análise de desempenho e formação esportiva.",
};

const formationPillars = [
  {
    label: "Técnico",
    title: "Fundamento e jogo",
    description: "Treino orientado por necessidade real, nível, modalidade e evolução.",
    icon: Target,
  },
  {
    label: "Físico",
    title: "Preparação",
    description: "Base corporal para competir melhor, reduzir risco e sustentar recorrência.",
    icon: Dumbbell,
  },
  {
    label: "Mental",
    title: "Mentalidade Hunter",
    description: "Disciplina, presença, responsabilidade e busca por excelência sem arrogância.",
    icon: Brain,
  },
  {
    label: "Humano",
    title: "Liderança e postura",
    description: "Conduta, respeito, equipe e comunidade fazem parte do desenvolvimento.",
    icon: ShieldCheck,
  },
] as const;

const evolutionFlow = [
  {
    label: "observação",
    title: "Ser observado",
    description: "UR Play e ranking ajudam a entender contexto, presença e ponto de partida.",
  },
  {
    label: "foco",
    title: "Definir foco",
    description: "Treino técnico, físico, mental ou liderança entram conforme necessidade.",
  },
  {
    label: "treino",
    title: "Treinar com critério",
    description: "A evolução precisa ser segura e conectada à jornada esportiva.",
  },
  {
    label: "temporada",
    title: "Voltar para a temporada",
    description: "O atleta retorna para competir, gerar histórico e testar evolução real.",
  },
] as const;

const connectionData = [
  {
    label: "UR Play",
    title: "Observação",
    description: "Porta de entrada para entender contexto e ponto de partida.",
    icon: Target,
  },
  {
    label: "Ranking",
    title: "Evolução",
    description: "Histórico público ajuda a visualizar progresso confirmado.",
    icon: BarChart3,
  },
  {
    label: "Equipes",
    title: "Liderança",
    description: "Capitão, elenco e conduta também fazem parte do desenvolvimento.",
    icon: Users,
  },
  {
    label: "Mídia",
    title: "Reputação",
    description: "Evolução pode virar história pública com critério.",
    icon: Camera,
  },
] as const;

export default function CTURPage() {
  return (
    <main className="bg-[#0A0A0B] text-[#F4F0E6]">
      <SeasonPageHero
        actions={[
          { href: "#pilares", label: "Conhecer metodologia" },
          { href: "/ur-play", label: "Entrar pelo UR Play", variant: "secondary" },
        ]}
        badges={["técnico", "físico", "mental", "liderança", "análise"]}
        description="O CT UR conecta desenvolvimento técnico, físico, mental e comportamental para atletas que querem evoluir com mais clareza."
        eyebrow="CT UR - desenvolvimento"
        image={siteImages.timeoutTalk}
        imagePosition="center 42%"
        stats={[
          { label: "base", value: "observação" },
          { label: "trabalho", value: "treino" },
          { label: "retorno", value: "temporada" },
        ]}
        title="Treino para evoluir com direção."
      />

      <SeasonSection
        description="Treinar não é apenas repetir movimentos. É entender onde você está, corrigir pontos, melhorar postura e construir evolução real."
        eyebrow="Pilares de formação"
        id="pilares"
        title="Técnico, físico, mental e humano no mesmo sistema."
      >
        <SeasonBenefitGrid columns={4} items={formationPillars} />
      </SeasonSection>

      <SeasonSection
        description="O desenvolvimento começa com observação, vira foco de treino e retorna para a temporada como teste real de evolução."
        eyebrow="Jornada de evolução"
        id="jornada"
        title="Evoluir precisa voltar para a quadra."
        variant="raised"
      >
        <SeasonJourney steps={evolutionFlow} />
      </SeasonSection>

      <SeasonSection
        description="Mentalidade Hunter é padrão de postura: disciplina, presença, responsabilidade, evolução contínua, competitividade saudável, respeito e preparo."
        eyebrow="Mentalidade Hunter"
        id="mentalidade"
        title="Postura também é performance."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <SeasonInfoCard
            description="Não é método milagroso. É compromisso com comportamento, rotina e evolução."
            title="Cultura, não promessa"
          />
          <SeasonInfoCard
            description="Competir forte, respeitar o ambiente e assumir responsabilidade pelo próprio caminho."
            title="Excelência sem arrogância"
          />
        </div>
      </SeasonSection>

      <SeasonSection
        description="O CT UR não fica separado do site: ele se conecta com UR Play, ranking, equipes, mídia e temporada para sustentar evolução real."
        eyebrow="Conexão com o ecossistema"
        id="conexoes"
        title="Desenvolvimento precisa aparecer na jornada."
        variant="raised"
      >
        <SeasonBenefitGrid columns={4} items={connectionData} />
      </SeasonSection>

      <SeasonSection
        description="Agenda, polos e turmas entram conforme calendário confirmado. O CT UR não promete resultado automático."
        eyebrow="Próximo passo"
        id="cta"
        title="Evolução começa com direção e presença."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#pilares">Conhecer metodologia</Button>
          <Button href="/ur-play" variant="secondary">
            Começar pelo UR Play
          </Button>
        </div>
      </SeasonSection>
    </main>
  );
}
