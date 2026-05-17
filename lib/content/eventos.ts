import {
  BadgeCheck,
  BarChart3,
  Camera,
  CheckCircle2,
  Crown,
  Dumbbell,
  Flag,
  Gauge,
  Handshake,
  MapPin,
  Radio,
  RefreshCw,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type EventCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type EventFocus = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
  bullets: readonly string[];
};

export const eventHeroBadges = [
  "agenda em formação",
  "eventos entram após confirmação oficial",
  "polo em formação",
  "inscrição será liberada após validação",
  "temporada em formação",
] as const;

export const eventNarrativeCards: EventCard[] = [
  {
    icon: RefreshCw,
    title: "Função no ciclo",
    description:
      "Cada evento deve alimentar uma etapa da temporada: entrada, nivelamento, ranking, mídia, equipe ou recompensa.",
  },
  {
    icon: BarChart3,
    title: "Memória competitiva",
    description:
      "Participação validada pode virar histórico, leitura de nível, ranking em formação e narrativa pública.",
  },
  {
    icon: Camera,
    title: "Experiência e mídia",
    description:
      "Eventos criam palco para conteúdo, bastidores, destaques, comunidade, patrocinadores e quadras parceiras.",
  },
];

export const eventTypes: EventCard[] = [
  {
    icon: Zap,
    title: "UR Play",
    description: "Porta de entrada para atletas demonstrarem interesse, serem observados e entrarem no ecossistema.",
  },
  {
    icon: Trophy,
    title: "Mini torneios",
    description: "Disputas menores podem manter ritmo competitivo entre UR Play, ranking e torneios oficiais.",
  },
  {
    icon: Crown,
    title: "Torneios oficiais",
    description: "Eventos de maior peso podem conectar equipes, ranking, mídia, premiações e temporada.",
  },
  {
    icon: RefreshCw,
    title: "Virada de Ranking",
    description: "Momento planejado para fechar o ciclo, consolidar histórico e preparar a próxima temporada.",
  },
  {
    icon: Dumbbell,
    title: "CT UR",
    description: "Experiências de desenvolvimento podem entrar após validação de agenda, operação e critérios.",
  },
  {
    icon: Sparkles,
    title: "Eventos especiais",
    description: "Ativações de comunidade, mídia, patrocinadores e quadras podem existir após confirmação oficial.",
  },
];

export const eventFocusBlocks: EventFocus[] = [
  {
    id: "ur-play",
    eyebrow: "Entrada oficial",
    title: "UR Play como porta de entrada",
    description:
      "UR Play é o primeiro ponto de contato para o atleta entrar na jornada com observação, contexto competitivo e caminho para ranking.",
    status: "agenda em formação",
    icon: Zap,
    bullets: [
      "atleta demonstra interesse",
      "equipe UR valida agenda e polo",
      "inscrição será liberada após validação",
      "ranking em formação começa com dados oficiais",
    ],
  },
  {
    id: "mini-torneios",
    eyebrow: "Ritmo competitivo",
    title: "Mini torneios mantêm a temporada ativa",
    description:
      "Mini torneios podem criar disputa recorrente por nível, categoria, modalidade e polo, sem substituir o ciclo oficial.",
    status: "eventos entram após confirmação oficial",
    icon: Trophy,
    bullets: [
      "podem variar por nível",
      "podem variar por modalidade",
      "podem variar por categoria",
      "sem datas ou vagas inventadas",
    ],
  },
  {
    id: "torneios-oficiais",
    eyebrow: "Competição oficial",
    title: "Torneios oficiais conectam equipes, mídia e ranking",
    description:
      "Eventos oficiais podem concentrar equipes, narrativa de temporada, ranking coletivo, mídia e oportunidades comerciais.",
    status: "temporada em formação",
    icon: Crown,
    bullets: [
      "equipes entram após validação",
      "regulamento precisa ser confirmado",
      "mídia e destaques dependem da operação",
      "premiações entram apenas após aprovação",
    ],
  },
  {
    id: "virada-ranking",
    eyebrow: "Fechamento do ciclo",
    title: "Virada de Ranking fecha a temporada",
    description:
      "A Virada de Ranking é o momento planejado para consolidar o ciclo, organizar destaques e preparar novos objetivos.",
    status: "ranking em formação",
    icon: RefreshCw,
    bullets: [
      "fecha o trimestre",
      "organiza histórico validado",
      "prepara novo ciclo",
      "sem posições reais nesta etapa",
    ],
  },
];

export const segmentationCards: EventCard[] = [
  {
    icon: Gauge,
    title: "Por nível",
    description: "Eventos podem separar atletas por nível para deixar a competição mais justa e legível.",
  },
  {
    icon: Flag,
    title: "Por modalidade",
    description: "Modalidades entram conforme operação, quadras, equipe responsável e validação oficial.",
  },
  {
    icon: BadgeCheck,
    title: "Por categoria",
    description: "Categorias podem organizar formato, regra e jornada sem misturar contextos competitivos.",
  },
  {
    icon: MapPin,
    title: "Por polo",
    description: "Polos em formação permitem expansão local com agenda validada e quadras parceiras.",
  },
];

export const ecosystemFeedFlow = [
  {
    label: "Presença",
    description: "Atleta, equipe ou comunidade participa de evento aprovado e com operação validada.",
  },
  {
    label: "Critérios",
    description: "Dados reais passam por regra, registro, avaliação e confirmação oficial.",
  },
  {
    label: "Ranking e UR Coins",
    description: "Participação e desempenho podem alimentar ranking, UR Coins e recompensas futuras.",
  },
  {
    label: "Mídia",
    description: "Conteúdo, destaques, bastidores e histórias podem ampliar visibilidade da temporada.",
  },
] as const;

export const eventConnectionCards: EventCard[] = [
  {
    icon: Shield,
    title: "Equipes oficiais",
    description:
      "Equipes entram em eventos oficiais após validação de elenco, capitão, identidade, categoria e regras.",
  },
  {
    icon: Handshake,
    title: "Patrocinadores",
    description:
      "Marcas podem ativar eventos, mídia, UR Market e comunidade quando proposta e entregas forem aprovadas.",
  },
  {
    icon: MapPin,
    title: "Quadras parceiras",
    description:
      "Quadras podem se conectar a polos, agenda e experiências locais após validação operacional.",
  },
];

export const agendaPreviewRows = [
  {
    label: "UR Play",
    status: "agenda em formação",
    note: "inscrição será liberada após validação",
  },
  {
    label: "Mini torneio",
    status: "eventos entram após confirmação oficial",
    note: "nível, categoria, modalidade e polo ainda em validação",
  },
  {
    label: "Torneio oficial",
    status: "temporada em formação",
    note: "sem data, horário, local, equipe ou vaga real nesta etapa",
  },
  {
    label: "Virada de Ranking",
    status: "ranking em formação",
    note: "fechamento do ciclo depende de dados oficiais",
  },
] as const;

export const agendaStatusCards: EventCard[] = [
  {
    icon: CheckCircle2,
    title: "Confirmação oficial",
    description:
      "Datas reais entram apenas após confirmação de agenda, equipe, quadra, regulamento, polo e operação.",
  },
  {
    icon: Target,
    title: "Sem calendário real",
    description:
      "Esta página mostra a lógica dos eventos, não horários, vagas, valores, locais ou eventos confirmados.",
  },
  {
    icon: Radio,
    title: "Mídia planejada",
    description:
      "Cobertura, transmissão e conteúdo entram quando houver operação, formato e confirmação oficial.",
  },
];

export const interestFlow = [
  "Atleta demonstra interesse",
  "Equipe UR valida agenda, nível, modalidade e polo",
  "Orientação de inscrição é enviada oficialmente",
  "Participação é liberada após validação",
] as const;

export const interestFields = [
  {
    label: "Tipo de evento",
    value: "agenda em formação",
  },
  {
    label: "Modalidade ou categoria",
    value: "definição após validação",
  },
  {
    label: "Polo desejado",
    value: "polo em formação",
  },
  {
    label: "Status da inscrição",
    value: "inscrição será liberada após validação",
  },
] as const;

export const eventFaq = [
  {
    question: "Eventos UR já têm datas reais?",
    answer:
      "Ainda não. Datas, horários, locais, polos, valores, vagas e eventos reais entram apenas após confirmação oficial.",
  },
  {
    question: "UR Play é a principal porta de entrada?",
    answer:
      "Sim. UR Play é a entrada planejada para observação, nivelamento, histórico, ranking e conexão com a temporada.",
  },
  {
    question: "Mini torneios alimentam ranking?",
    answer:
      "Podem alimentar ranking e mídia quando houver critérios oficiais, dados reais e operação validada.",
  },
  {
    question: "Torneios oficiais envolvem equipes?",
    answer:
      "Sim, dentro da proposta. Equipes entram após validação de elenco, capitão, categoria, regulamento e agenda oficial.",
  },
  {
    question: "O que é a Virada de Ranking?",
    answer:
      "É o fechamento planejado do ciclo da temporada para consolidar histórico, destaques e preparar o próximo trimestre.",
  },
  {
    question: "Patrocinadores e quadras podem participar?",
    answer:
      "Podem se conectar aos eventos após aprovação comercial, validação operacional, definição de polo e confirmação oficial.",
  },
] as const;
