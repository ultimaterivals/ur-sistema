import {
  BadgeCheck,
  BarChart3,
  Camera,
  CheckCircle2,
  Coins,
  Crown,
  Dumbbell,
  Eye,
  Flame,
  Gauge,
  HeartHandshake,
  Medal,
  Radio,
  RefreshCw,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AthleteCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type AthleteJourneyStep = {
  step: string;
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
};

export const athleteHeroBadges = [
  "perfil liberado após validação",
  "ranking em formação",
  "histórico entra após participação oficial",
  "oportunidades entram após validação",
  "cadastro será liberado após validação",
] as const;

export const protagonistCards: AthleteCard[] = [
  {
    icon: Crown,
    title: "Protagonista da jornada",
    description:
      "O atleta não entra apenas para participar. Ele constrói presença, histórico, reputação e caminho dentro do ecossistema.",
  },
  {
    icon: BarChart3,
    title: "Histórico validado",
    description:
      "Participação oficial pode alimentar ranking, níveis, evolução, mídia e oportunidades quando houver dados validados.",
  },
  {
    icon: Users,
    title: "Conexão com equipe",
    description:
      "Atletas podem se conectar a equipes, Draft, eventos, CT UR e comunidade conforme validação e necessidade do ciclo.",
  },
];

export const athleteJourneySteps: AthleteJourneyStep[] = [
  {
    step: "01",
    title: "UR Play",
    description: "Entrada planejada para o atleta ser observado, participar da jornada e iniciar histórico oficial.",
    status: "cadastro será liberado após validação",
    icon: Zap,
  },
  {
    step: "02",
    title: "Nivelamento",
    description: "Leitura de nível ajuda a organizar competição justa e evolução sem comparação fora de contexto.",
    status: "critérios entram após validação",
    icon: Gauge,
  },
  {
    step: "03",
    title: "Ranking",
    description: "Presença, postura e desempenho podem construir reputação pública quando houver dados reais.",
    status: "ranking em formação",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Oportunidades",
    description: "Equipes, Draft, eventos, CT UR, mídia e recompensas entram conforme validação oficial.",
    status: "oportunidades entram após validação",
    icon: Trophy,
  },
];

export const hunterPrinciples: AthleteCard[] = [
  {
    icon: Shield,
    title: "Disciplina e presença",
    description: "Comparecer, cumprir acordos e manter rotina contam para a cultura competitiva do atleta UR.",
  },
  {
    icon: HeartHandshake,
    title: "Responsabilidade e respeito",
    description: "Competir com intensidade sem perder postura, respeito por equipe, rivais, quadras e comunidade.",
  },
  {
    icon: RefreshCw,
    title: "Evolução contínua",
    description: "Buscar melhora física, técnica e mental sem vender milagre, atalho ou promessa de resultado.",
  },
  {
    icon: Flame,
    title: "Competitividade saudável",
    description: "Querer vencer com preparo, compromisso e excelência sem arrogância ou comportamento destrutivo.",
  },
];

export const levelRankingCards: AthleteCard[] = [
  {
    icon: Gauge,
    title: "Níveis mais justos",
    description: "Nivelamento ajuda o atleta a competir em contexto mais equilibrado dentro da temporada.",
  },
  {
    icon: BarChart3,
    title: "Ranking em formação",
    description: "Ranking só recebe dados reais após cadastro, participação oficial e validação de critérios.",
  },
  {
    icon: CheckCircle2,
    title: "Presença validada",
    description: "Histórico entra após participação oficial, sem números, posições ou resultados inventados.",
  },
];

export const visibilityCards: AthleteCard[] = [
  {
    icon: Camera,
    title: "Mídia e destaque",
    description: "Conteúdo, bastidores, highlights e narrativas podem ampliar visibilidade quando houver operação.",
  },
  {
    icon: Eye,
    title: "Reputação pública",
    description: "Ranking, postura, evolução e presença ajudam a formar leitura de valor dentro do ecossistema.",
  },
  {
    icon: Radio,
    title: "Histórias da temporada",
    description: "O atleta pode virar personagem da temporada por consistência, evolução, equipe e comunidade.",
  },
];

export const opportunityCards: AthleteCard[] = [
  {
    icon: Shield,
    title: "Equipes oficiais",
    description: "Atletas podem se conectar a equipes conforme elenco, nível, postura, posição e validação.",
  },
  {
    icon: Medal,
    title: "Draft e eventos",
    description: "Draft e eventos dependem de critérios oficiais, calendário validado e necessidade da temporada.",
  },
  {
    icon: Dumbbell,
    title: "CT UR",
    description: "Desenvolvimento, avaliação e preparação podem entrar na jornada sem prometer resultado automático.",
  },
];

export const rewardsCards: AthleteCard[] = [
  {
    icon: Coins,
    title: "UR Coins",
    description: "UR Coins podem reconhecer participação, presença, conquistas e engajamento após regras oficiais.",
  },
  {
    icon: Sparkles,
    title: "Benefícios futuros",
    description: "UR Market pode conectar recompensas, produtos, serviços, experiências e patrocinadores aprovados.",
  },
  {
    icon: Trophy,
    title: "Premiações por ciclo",
    description: "Recompensas e premiações dependem de temporada, ranking, parceiros e validação oficial.",
  },
];

export const ctDevelopmentCards: AthleteCard[] = [
  {
    icon: Dumbbell,
    title: "Preparo físico",
    description: "CT UR pode apoiar condicionamento e rotina quando houver operação e agenda validada.",
  },
  {
    icon: Target,
    title: "Técnica e leitura",
    description: "Avaliações futuras podem ajudar o atleta a entender pontos de evolução sem nota inventada.",
  },
  {
    icon: BadgeCheck,
    title: "Mentalidade competitiva",
    description: "Postura, compromisso e evolução sustentam o atleta dentro de equipe, ranking e comunidade.",
  },
];

export const athleteProfilePlaceholders = [
  {
    label: "Perfil público",
    status: "perfil liberado após validação",
    note: "sem nome, foto, número, posição ou conquista real nesta etapa",
  },
  {
    label: "Histórico",
    status: "histórico entra após participação oficial",
    note: "participações reais dependem de cadastro, presença e validação",
  },
  {
    label: "Ranking",
    status: "ranking em formação",
    note: "sem pontos, nível, posição ou resultado real nesta fase",
  },
  {
    label: "Oportunidades",
    status: "oportunidades entram após validação",
    note: "equipes, Draft, mídia e CT UR dependem de critérios oficiais",
  },
] as const;

export const interestFlow = [
  "Atleta demonstra interesse",
  "Equipe UR valida cadastro, agenda e polo",
  "Participação oficial orienta histórico e ranking",
  "Perfil e oportunidades são liberados após validação",
] as const;

export const interestFields = [
  {
    label: "Nome do atleta",
    value: "perfil liberado após validação",
  },
  {
    label: "Entrada desejada",
    value: "UR Play",
  },
  {
    label: "Status do ranking",
    value: "ranking em formação",
  },
  {
    label: "Status do cadastro",
    value: "cadastro será liberado após validação",
  },
] as const;

export const athleteFaq = [
  {
    question: "Como o atleta começa no Ultimate Rivals?",
    answer:
      "A entrada planejada começa pelo UR Play, com interesse, validação de cadastro, agenda, polo e participação oficial.",
  },
  {
    question: "O ranking já mostra atletas reais?",
    answer:
      "Não. Ranking em formação significa que não há atletas, números, posições ou resultados reais nesta etapa.",
  },
  {
    question: "O que constrói reputação no UR?",
    answer:
      "Presença, postura, disciplina, evolução, desempenho validado, participação oficial, equipe e relação com a comunidade.",
  },
  {
    question: "Mentalidade Hunter é promessa de resultado?",
    answer:
      "Não. É uma cultura de desenvolvimento, compromisso, respeito e competitividade saudável, sem método milagroso.",
  },
  {
    question: "O atleta pode entrar em equipe ou Draft?",
    answer:
      "Pode se conectar a equipes, Draft, eventos e CT UR quando houver validação oficial, critérios e oportunidade real.",
  },
  {
    question: "Quando dados reais do atleta entram?",
    answer:
      "Apenas após cadastro, validação, participação oficial e critérios operacionais aprovados pelo ecossistema.",
  },
] as const;
