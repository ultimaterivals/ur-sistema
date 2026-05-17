import {
  Award,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Coins,
  Crown,
  Gauge,
  Medal,
  RefreshCw,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SeasonCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SeasonStage = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
  bullets: readonly string[];
};

export const seasonHeroBadges = [
  "temporada em formação",
  "calendário em formação",
  "agenda será liberada após validação",
  "eventos entram após confirmação oficial",
  "ranking em formação",
] as const;

export const seasonComparisonRows = [
  {
    label: "Continuidade",
    isolated: "Evento isolado começa, termina e perde memória competitiva.",
    season: "Temporada cria ciclo, ranking, histórico, mídia e novos objetivos.",
  },
  {
    label: "Entrada",
    isolated: "Participação depende de inscrição avulsa e contexto limitado.",
    season: "Ciclo começa pelo UR Play, com observação, nivelamento e caminho de evolução.",
  },
  {
    label: "Resultado",
    isolated: "Premiação acontece sem alimentar uma jornada mais ampla.",
    season: "Desempenho pode impactar ranking, equipes, UR Coins, repasses e oportunidades.",
  },
] as const;

export const cycleCards: SeasonCard[] = [
  {
    icon: CalendarDays,
    title: "Ciclo trimestral",
    description: "Três meses criam tempo suficiente para entrada, disputa, evolução e virada de ranking.",
  },
  {
    icon: RefreshCw,
    title: "Novo começo",
    description: "Ao final do ciclo, a temporada vira, os objetivos renovam e novos atletas podem entrar.",
  },
  {
    icon: BarChart3,
    title: "Ranking ativo",
    description: "Ranking acompanha presença, desempenho e evolução enquanto houver dados reais validados.",
  },
  {
    icon: Trophy,
    title: "Eventos conectados",
    description: "Mini torneios, torneios oficiais e eventos especiais entram após confirmação oficial.",
  },
];

export const seasonStages: SeasonStage[] = [
  {
    step: "01",
    eyebrow: "Etapa 1",
    title: "UR Play",
    description:
      "A temporada começa pelo UR Play, a porta oficial para atletas entrarem no ecossistema com observação e contexto competitivo.",
    status: "agenda será liberada após validação",
    icon: Zap,
    bullets: [
      "entrada oficial dos atletas",
      "polo em validação",
      "modalidade e formato em formação",
      "sem inscrição real nesta fase",
    ],
  },
  {
    step: "02",
    eyebrow: "Etapa 2",
    title: "Nivelamento",
    description:
      "Nivelamento organiza atletas e equipes por faixas mais coerentes, reduzindo disputas fora de contexto.",
    status: "critérios em formação",
    icon: Gauge,
    bullets: [
      "níveis ajudam a equilibrar competição",
      "observação depende de dados reais",
      "critérios entram após validação",
      "sem notas ou pontuação inventada",
    ],
  },
  {
    step: "03",
    eyebrow: "Etapa 3",
    title: "Ranking ativo",
    description:
      "Ranking acompanha o ciclo e transforma participação em histórico público quando houver dados validados.",
    status: "ranking em formação",
    icon: BarChart3,
    bullets: [
      "ranking individual e coletivo",
      "níveis, polos e modalidades",
      "desempenho e presença validados",
      "sem posições reais nesta etapa",
    ],
  },
  {
    step: "04",
    eyebrow: "Etapa 4",
    title: "Mini torneios",
    description:
      "Mini torneios podem manter a temporada viva entre entradas, nivelamentos e torneios oficiais.",
    status: "eventos entram após confirmação oficial",
    icon: Medal,
    bullets: [
      "podem variar por nível",
      "podem variar por modalidade",
      "podem variar por categoria",
      "datas reais só após confirmação",
    ],
  },
  {
    step: "05",
    eyebrow: "Etapa 5",
    title: "Torneios oficiais",
    description:
      "Torneios oficiais concentram disputa, mídia, ranking, premiações e narrativa competitiva do ciclo.",
    status: "calendário em formação",
    icon: Trophy,
    bullets: [
      "agenda depende de validação",
      "polo e categoria em formação",
      "sem eventos reais inventados",
      "regulamento precisa ser confirmado",
    ],
  },
  {
    step: "06",
    eyebrow: "Etapa 6",
    title: "Virada de Ranking",
    description:
      "Com o fim do trimestre, o ranking vira: ciclo fecha, histórico é consolidado e novos objetivos começam.",
    status: "temporada em formação",
    icon: Crown,
    bullets: [
      "fecha o ciclo trimestral",
      "organiza destaques do período",
      "prepara novo ciclo",
      "sem posições reais nesta etapa",
    ],
  },
  {
    step: "07",
    eyebrow: "Etapa 7",
    title: "Repasses, premiações e novo ciclo",
    description:
      "Repasses, premiações e recompensas dependem de regras oficiais, parceiros, ranking validado e operação ativa.",
    status: "recompensas após validação",
    icon: Award,
    bullets: [
      "premiações dependem de critérios",
      "repasses dependem do ciclo oficial",
      "UR Coins em formação",
      "novo ciclo renova oportunidades",
    ],
  },
];

export const calendarPreviewRows = [
  {
    label: "UR Play",
    status: "agenda será liberada após validação",
    note: "sem data, polo ou inscrição real nesta fase",
  },
  {
    label: "Mini torneios",
    status: "eventos entram após confirmação oficial",
    note: "podem variar por modalidade, nível, categoria e polo",
  },
  {
    label: "Torneios oficiais",
    status: "calendário em formação",
    note: "nenhum evento real foi confirmado nesta etapa",
  },
  {
    label: "Virada de Ranking",
    status: "temporada em formação",
    note: "ranking vira apenas com ciclo e dados validados",
  },
] as const;

export const ecosystemCards: SeasonCard[] = [
  {
    icon: BarChart3,
    title: "Ranking",
    description: "A temporada alimenta ranking individual, coletivo, por nível, polo e modalidade.",
  },
  {
    icon: Shield,
    title: "Equipes",
    description: "Equipes usam o ciclo para construir elenco, rivalidade, histórico e ranking coletivo.",
  },
  {
    icon: Coins,
    title: "UR Coins",
    description: "UR Coins podem reconhecer presença, conquistas e engajamento quando houver validação.",
  },
  {
    icon: Sparkles,
    title: "UR Market",
    description: "Benefícios e recompensas futuras podem se conectar ao Market e a parceiros oficiais.",
  },
];

export const seasonFaq = [
  {
    question: "Temporada UR já tem calendário real?",
    answer:
      "Ainda não. A página usa calendário em formação e agenda será liberada após validação para evitar datas, polos ou eventos inventados.",
  },
  {
    question: "Por que o ciclo é trimestral?",
    answer:
      "O trimestre cria tempo para entrada pelo UR Play, nivelamento, ranking, eventos, recompensas e virada de ciclo sem virar uma disputa solta.",
  },
  {
    question: "A temporada começa pelo UR Play?",
    answer:
      "Sim. UR Play é a porta de entrada planejada para observação, nivelamento e início da jornada dentro do ciclo.",
  },
  {
    question: "Ranking vira no fim do trimestre?",
    answer:
      "Sim, essa é a proposta. A Virada de Ranking fecha o ciclo e prepara uma nova temporada, sempre com dados reais após validação.",
  },
  {
    question: "Eventos podem variar?",
    answer:
      "Sim. Eventos podem variar por modalidade, nível, categoria e polo, mas só entram após confirmação oficial.",
  },
  {
    question: "Repasses e premiações já existem?",
    answer:
      "Não nesta etapa. Repasses e premiações dependem da validação oficial do ciclo, critérios, parceiros e operação ativa.",
  },
] as const;

export const seasonStatusCards: SeasonCard[] = [
  {
    icon: CheckCircle2,
    title: "Validação oficial",
    description: "Datas reais entram apenas após confirmação de operação, regulamento, polo e equipe responsável.",
  },
  {
    icon: Users,
    title: "Comunidade ativa",
    description: "Ciclos mantêm atletas, equipes, quadras e marcas conectados durante o ano.",
  },
  {
    icon: Target,
    title: "Objetivos claros",
    description: "Cada trimestre cria metas, ranking, eventos, recompensas e novo ponto de partida.",
  },
] as const;
