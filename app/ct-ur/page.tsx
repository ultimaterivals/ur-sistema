import type { Metadata } from "next";
import { PlatformHero } from "@/components/editorial/platform-hero";
import { PageSection } from "@/components/site/page-section";
import {
  BarChart3,
  Brain,
  Camera,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Medal,
  Shield,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { siteImages } from "@/lib/content/site-images";

export const metadata: Metadata = {
  title: "CT UR | Desenvolvimento Técnico, Físico e Mental Ultimate Rivals",
  description:
    "Conheça o CT UR, pilar de desenvolvimento do Ultimate Rivals para treino técnico, preparação física, Mentalidade Hunter, liderança, análise e educação esportiva.",
};

type CTCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const developmentBlocks: CTCard[] = [
  {
    icon: Target,
    title: "Treino técnico",
    description: "Fundamentos, leitura de jogo, tomada de decisão e evolução por modalidade quando houver operação validada.",
  },
  {
    icon: Dumbbell,
    title: "Preparação física",
    description: "Rotina, condicionamento e preparo compatíveis com a fase do atleta e com a estrutura disponível.",
  },
  {
    icon: Brain,
    title: "Mentalidade Hunter",
    description: "Disciplina, presença, responsabilidade, competitividade saudável e busca por excelência sem arrogância.",
  },
  {
    icon: Users,
    title: "Liderança",
    description: "Postura de equipe, comunicação, responsabilidade coletiva e construção de cultura competitiva.",
  },
  {
    icon: BarChart3,
    title: "Análise de desempenho",
    description: "Leitura futura de evolução, presença e pontos de melhoria sem inventar notas, métricas ou rankings reais.",
  },
  {
    icon: HeartPulse,
    title: "Recuperação",
    description: "Cuidado com carga, rotina, prevenção e recuperação dentro dos limites da operação validada.",
  },
  {
    icon: GraduationCap,
    title: "Educação esportiva",
    description: "Conteúdo para desenvolver atleta, pessoa, equipe e comunidade com responsabilidade.",
  },
] as const;

const connections = [
  {
    title: "UR Play",
    description: "Observa atletas e revela pontos de evolução que podem orientar o desenvolvimento.",
    icon: Zap,
  },
  {
    title: "Ranking",
    description: "Ajuda o atleta a entender progresso quando houver critérios e dados validados.",
    icon: BarChart3,
  },
  {
    title: "Equipes",
    description: "Apoia postura, liderança, encaixe e evolução coletiva.",
    icon: Shield,
  },
  {
    title: "Temporada",
    description: "Cria continuidade entre preparação, participação, eventos e novo ciclo.",
    icon: Trophy,
  },
  {
    title: "Mídia",
    description: "Transforma evolução, bastidores e jornada em narrativa oficial.",
    icon: Camera,
  },
  {
    title: "UR Coins",
    description: "Pode reconhecer presença, missões e evolução após validação das regras.",
    icon: Medal,
  },
] as const;


export default function CTURPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <PlatformHero
        actions={[
          { href: "/cadastro#atleta", label: "Quero evoluir no UR" },
          { href: "/atletas", label: "Jornada do atleta", variant: "secondary" },
        ]}
        badges={["treino técnico", "preparação física", "Mentalidade Hunter", "análise", "educação esportiva"]}
        description="CT UR é o pilar de formação do ecossistema: técnica, físico, mentalidade, liderança, análise, recuperação e educação esportiva conectadas à jornada do atleta."
        eyebrow="CT UR • desenvolvimento • Mentalidade Hunter"
        image={siteImages.timeoutTalk}
        imagePosition="center 45%"
        metrics={[
          { label: "Foco", value: "desenvolvimento técnico, físico e mental" },
          { label: "Cultura", value: "Mentalidade Hunter" },
          { label: "Status", value: "agenda oficial após confirmação" },
        ]}
        statusDescription="O CT UR deve apoiar o atleta como competidor e pessoa, sem promessa milagrosa de resultado e sem agenda pública antes da validação operacional."
        statusLabel="desenvolvimento em validação"
        statusTitle="Não é só treino. É formação."
        title="Desenvolvimento real para atletas que querem evoluir."
      />

      <PageSection>
        <SectionHeader
          description="O CT UR organiza desenvolvimento em camadas. Cada frente só entra em operação quando houver agenda, polo, equipe e critérios validados."
          eyebrow="Blocos de desenvolvimento"
          title="Técnica, corpo, mente e cultura competitiva."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {developmentBlocks.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[230px]" key={item.title} premium={index === 2}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="Mentalidade Hunter é cultura de desenvolvimento: presença, disciplina, responsabilidade, respeito e evolução contínua."
          eyebrow="Mentalidade Hunter"
          title="Competitividade sem arrogância. Evolução sem atalho."
        />
        <Card className="grid gap-5 p-5 md:p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]" premium>
          <div>
            <Brain aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,2.85rem)] font-black uppercase leading-[0.98] text-white">
              O padrão de postura do atleta UR.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Disciplina e presença.",
              "Responsabilidade com equipe e comunidade.",
              "Preparo físico, técnico e mental.",
              "Competitividade saudável.",
              "Respeito por rivais, quadras e operação.",
              "Busca por excelência sem promessa de resultado.",
            ].map((item) => (
              <p className="rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold leading-6 text-white/70" key={item}>
                {item}
              </p>
            ))}
          </div>
        </Card>
      </PageSection>

      <PageSection>
        <SectionHeader
          description="O CT não fica separado da temporada. Ele conversa com a jornada competitiva, a mídia, o ranking e as oportunidades futuras."
          eyebrow="Conexões"
          title="Como o CT UR se conecta ao ecossistema."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {connections.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[210px]" key={item.title} premium={index === 0}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>Agenda e polos</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              CT UR entra após validação operacional.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              Agenda, polos, equipe técnica, formatos, critérios e participação serão publicados apenas depois de
              validação oficial. O cadastro registra interesse para triagem.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro#atleta">Registrar interesse</Button>
            <Button href="/ur-play" variant="secondary">
              Começar no UR Play
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}
