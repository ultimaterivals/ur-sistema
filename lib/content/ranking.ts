import {
  Activity,
  Award,
  BarChart3,
  CalendarDays,
  Camera,
  CheckCircle2,
  Coins,
  Crown,
  Eye,
  Flame,
  Gauge,
  Handshake,
  Layers3,
  MapPin,
  Medal,
  Radio,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type RankingCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type RankingStep = {
  step: string;
  title: string;
  description: string;
};

export const rankingHeroBadges = [
  "ranking em formação",
  "temporada em formação",
  "dados reais entram após validação",
  "sem atletas, números ou posições reais nesta etapa",
] as const;

export const rankingNarrativeCards: RankingCard[] = [
  {
    icon: BarChart3,
    title: "Classificação com contexto",
    description:
      "Ranking UR organiza desempenho, presença, evolução e engajamento dentro da temporada.",
  },
  {
    icon: Eye,
    title: "Visibilidade pública",
    description:
      "A leitura pública ajuda atletas, equipes, mídia e patrocinadores a acompanharem a jornada.",
  },
  {
    icon: CalendarDays,
    title: "Memória de temporada",
    description:
      "Cada ciclo deve criar histórico, rivalidades, progressão e oportunidades futuras.",
  },
];

export const entrySteps: RankingStep[] = [
  {
    step: "01",
    title: "UR Play",
    description: "A entrada competitiva começa no UR Play, com participação real e contexto de modalidade.",
  },
  {
    step: "02",
    title: "Observação",
    description: "Presença, desempenho, postura e evolução entram no radar de validação.",
  },
  {
    step: "03",
    title: "Critérios",
    description: "Dados só avançam quando regras, registros e operação estiverem oficialmente validados.",
  },
  {
    step: "04",
    title: "Ranking",
    description: "Classificação pública aparece apenas com dados reais, sem atletas ou posições inventadas.",
  },
];

export const rankingTypes: RankingCard[] = [
  {
    icon: Target,
    title: "Atletas",
    description: "Ranking individual por desempenho, presença e evolução validada.",
  },
  {
    icon: Shield,
    title: "Equipes",
    description: "Ranking coletivo para times, identidade competitiva e temporada.",
  },
  {
    icon: Layers3,
    title: "Níveis",
    description: "Divisão por faixas para tornar a competição mais justa e comparável.",
  },
  {
    icon: MapPin,
    title: "Polos",
    description: "Leitura por praças e quadras parceiras quando houver operação validada.",
  },
  {
    icon: Trophy,
    title: "Modalidades",
    description: "Classificação por esporte e formato quando a agenda real estiver ativa.",
  },
  {
    icon: Sparkles,
    title: "Engajamento",
    description: "Registro planejado para presença, comunidade, missões e participação no ecossistema.",
  },
];

export const levelLanes = [
  {
    label: "Entrada",
    status: "nível em validação",
    description: "Primeiras participações ajudam a entender contexto e ponto de partida.",
  },
  {
    label: "Evolução",
    status: "critérios em formação",
    description: "Progressão acompanha presença, consistência e desenvolvimento técnico.",
  },
  {
    label: "Competitivo",
    status: "ranking em formação",
    description: "Atletas mais próximos disputam faixas mais coerentes entre si.",
  },
  {
    label: "Destaque",
    status: "dados após validação",
    description: "Destaques aparecem somente quando houver base real e critérios oficiais.",
  },
] as const;

export const scoringCriteria: RankingCard[] = [
  {
    icon: CheckCircle2,
    title: "Presença validada",
    description: "Participação real em jogos, eventos e etapas oficiais do ecossistema.",
  },
  {
    icon: Activity,
    title: "Desempenho esportivo",
    description: "Critérios competitivos serão definidos antes de qualquer pontuação pública.",
  },
  {
    icon: Gauge,
    title: "Evolução por nível",
    description: "Mudança de nível precisa considerar contexto, consistência e validação.",
  },
  {
    icon: Flame,
    title: "Engajamento",
    description: "Presença em missões, comunidade e ações oficiais pode compor a leitura futura.",
  },
  {
    icon: Medal,
    title: "Conquistas",
    description: "Torneios, desafios e destaques podem gerar reconhecimento quando forem oficiais.",
  },
  {
    icon: Shield,
    title: "Regulamento",
    description: "Todo dado público depende de critérios, aceite de termos e revisão operacional.",
  },
];

export const individualRankingCards: RankingCard[] = [
  {
    icon: Crown,
    title: "Reputação individual",
    description: "Histórico público ajuda o atleta a ser visto pela temporada, mídia e equipes.",
  },
  {
    icon: Award,
    title: "Oportunidades",
    description: "Ranking pode influenciar Draft, CT UR, torneios, premiações e destaques.",
  },
  {
    icon: Radio,
    title: "Narrativa",
    description: "Atletas deixam de ser presença isolada e passam a compor uma história acompanhável.",
  },
];

export const teamRankingCards: RankingCard[] = [
  {
    icon: Users,
    title: "Força coletiva",
    description: "Equipes ganham leitura própria de presença, evolução, elenco e rivalidade.",
  },
  {
    icon: Handshake,
    title: "Valor comercial",
    description: "Ranking de equipes ajuda marcas a entenderem contexto, consistência e visibilidade.",
  },
  {
    icon: Trophy,
    title: "Repasses e premiações",
    description: "Repasses só podem ser considerados com temporada real, ranking validado e regras claras.",
  },
];

export const engagementRankingCards: RankingCard[] = [
  {
    icon: Sparkles,
    title: "Missões",
    description: "Missões futuras podem reconhecer ações oficiais sem substituir desempenho esportivo.",
  },
  {
    icon: Camera,
    title: "Mídia",
    description: "Participação em conteúdo, bastidores e comunidade pode ampliar visibilidade.",
  },
  {
    icon: Coins,
    title: "UR Coins",
    description: "Engajamento validado pode se conectar a UR Coins e recompensas em etapas futuras.",
  },
];

export const coinRewardFlow = [
  "ranking validado",
  "presença e evolução",
  "UR Coins em formação",
  "benefícios futuros",
] as const;

export const mediaImpactCards: RankingCard[] = [
  {
    icon: Camera,
    title: "Destaques da semana",
    description: "Recortes e histórias aparecem apenas quando houver jogos, atletas e registros reais.",
  },
  {
    icon: Radio,
    title: "Narrativas oficiais",
    description: "Ranking ajuda a organizar rivalidades, viradas, evolução e momentos da temporada.",
  },
  {
    icon: Eye,
    title: "Vitrine pública",
    description: "Mídia, equipes e marcas passam a acompanhar atletas com contexto e continuidade.",
  },
];

export const rankingPreviewRows = [
  {
    label: "Ranking individual",
    value: "ranking em formação",
    note: "sem atletas, números ou posições reais nesta etapa",
  },
  {
    label: "Ranking de equipes",
    value: "temporada em formação",
    note: "dados reais entram após validação",
  },
  {
    label: "Ranking por níveis",
    value: "critérios em formação",
    note: "competição justa depende de validação oficial",
  },
  {
    label: "Engajamento",
    value: "dados em validação",
    note: "sem pontuação pública nesta fase",
  },
] as const;

export const rankingFaq = [
  {
    question: "Ranking UR já tem atletas reais?",
    answer:
      "Ainda não. A página apresenta a estrutura pública, mas usa ranking em formação e sem atletas, números ou posições reais nesta etapa.",
  },
  {
    question: "Ranking começa pelo UR Play?",
    answer:
      "Sim. UR Play é a porta de entrada planejada para gerar participação, observação, nivelamento e histórico validado.",
  },
  {
    question: "Ranking será dividido por níveis?",
    answer:
      "Sim. Diferentes níveis ajudam atletas a competirem com perfis próximos, desde que critérios oficiais estejam validados.",
  },
  {
    question: "Ranking gera UR Coins automaticamente?",
    answer:
      "Não nesta etapa. UR Coins aparecem como conceito planejado e dependem de regras futuras, validação e operação ativa.",
  },
  {
    question: "Ranking influencia equipes e Draft?",
    answer:
      "Pode influenciar. A proposta conecta ranking a equipes, Draft, torneios, CT UR, mídia, premiações e oportunidades futuras.",
  },
  {
    question: "Por que os dados ainda não aparecem?",
    answer:
      "Dados reais entram após validação oficial para evitar atletas, pontuações, posições, polos ou eventos inventados.",
  },
] as const;

export const opportunityTags = [
  "Draft em formação",
  "CT UR em formação",
  "premiações com critérios oficiais",
  "repasses após validação",
  "mídia oficial",
  "oportunidades para equipes",
] as const;
