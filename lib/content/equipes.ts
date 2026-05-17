import {
  Award,
  BarChart3,
  CalendarDays,
  Camera,
  Coins,
  Crown,
  FileCheck2,
  Flame,
  Handshake,
  IdCard,
  Medal,
  Radio,
  Shield,
  ShoppingBag,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TeamCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TeamStep = {
  step: string;
  title: string;
  description: string;
};

export const teamHeroBadges = [
  "equipes em formação",
  "ranking coletivo em formação",
  "dados reais entram após validação",
  "registro será liberado após validação",
  "temporada em formação",
] as const;

export const teamIdentityCards: TeamCard[] = [
  {
    icon: Shield,
    title: "Identidade competitiva",
    description: "Equipe oficial reúne nome, proposta, elenco, capitão, histórico e presença na temporada.",
  },
  {
    icon: BarChart3,
    title: "Ativo esportivo",
    description: "Resultados, evolução e ranking coletivo ajudam a transformar jogo em trajetória acompanhável.",
  },
  {
    icon: Camera,
    title: "Ativo midiático",
    description: "Rivalidades, bastidores, conteúdo e torcida criam narrativa para mídia e patrocinadores.",
  },
];

export const teamComparisonRows = [
  {
    label: "Identidade",
    group: "Grupo depende de combinação informal e presença eventual.",
    official: "Equipe UR tem identidade, capitão, elenco validado e histórico em formação.",
  },
  {
    label: "Competição",
    group: "Jogos isolados não criam ranking coletivo ou memória de temporada.",
    official: "Participação validada alimenta ranking coletivo, rivalidade e evolução do ciclo.",
  },
  {
    label: "Oportunidade",
    group: "Visibilidade costuma ficar limitada ao círculo de atletas.",
    official: "Equipe pode acessar mídia, Draft, repasses, premiações, UR Coins e oportunidades comerciais.",
  },
] as const;

export const teamEntrySteps: TeamStep[] = [
  {
    step: "01",
    title: "Registro de interesse",
    description: "Capitão ou representante indica intenção de formar equipe oficial, sem envio real nesta fase.",
  },
  {
    step: "02",
    title: "Identidade e capitão",
    description: "Equipe prepara nome, responsável, proposta esportiva e informações básicas para validação.",
  },
  {
    step: "03",
    title: "Elenco em formação",
    description: "Atletas podem vir do grupo atual, do UR Play, de observação futura ou de Draft planejado.",
  },
  {
    step: "04",
    title: "Validação oficial",
    description: "Dados reais entram após validação de regras, aceite, elegibilidade e operação.",
  },
  {
    step: "05",
    title: "Ranking coletivo",
    description: "Equipe entra no ranking coletivo em formação somente quando houver temporada validada.",
  },
];

export const teamBenefits: TeamCard[] = [
  {
    icon: Trophy,
    title: "Competição com continuidade",
    description: "Equipe deixa de viver apenas jogos soltos e passa a disputar ciclos da temporada.",
  },
  {
    icon: Radio,
    title: "Mídia e rivalidade",
    description: "Bastidores, histórias, confrontos e narrativas podem virar conteúdo oficial.",
  },
  {
    icon: Coins,
    title: "UR Coins coletivas",
    description: "Recompensas coletivas são planejadas para presença, engajamento e conquistas validadas.",
  },
  {
    icon: Handshake,
    title: "Valor comercial",
    description: "Identidade forte ajuda patrocinadores a entenderem contexto, torcida e recorrência.",
  },
];

export const collectiveRankingCards: TeamCard[] = [
  {
    icon: BarChart3,
    title: "Ranking coletivo",
    description: "Classificação planejada para desempenho da equipe, presença e evolução no ciclo.",
  },
  {
    icon: CalendarDays,
    title: "Temporada em formação",
    description: "Ciclos oficiais precisam existir antes de qualquer posição pública ou repasse.",
  },
  {
    icon: Medal,
    title: "Repasses e premiações",
    description: "Premiações dependem de ranking validado, regras oficiais e operação ativa.",
  },
];

export const rosterValidationCards: TeamCard[] = [
  {
    icon: Crown,
    title: "Capitão",
    description: "Responsável pela organização inicial, comunicação e alinhamento com a operação UR.",
  },
  {
    icon: Users,
    title: "Elenco",
    description: "Grupo de atletas associado à equipe após critérios, aceite e validação futura.",
  },
  {
    icon: IdCard,
    title: "Identidade",
    description: "Nome, presença visual e posicionamento esportivo precisam seguir regras da temporada.",
  },
  {
    icon: FileCheck2,
    title: "Validação",
    description: "Registro será liberado após validação de dados, elegibilidade, regulamento e operação.",
  },
];

export const draftConnectionCards: TeamCard[] = [
  {
    icon: Zap,
    title: "UR Play como radar",
    description: "UR Play ajuda a observar atletas, níveis, presença e potencial de encaixe em equipes.",
  },
  {
    icon: Target,
    title: "Draft em formação",
    description: "Draft é uma frente futura para conectar atletas observados a equipes oficiais.",
  },
  {
    icon: Shield,
    title: "Ranking como filtro",
    description: "Histórico validado pode ajudar equipes a entenderem perfis e oportunidades.",
  },
];

export const teamCoinsCards: TeamCard[] = [
  {
    icon: Coins,
    title: "UR Coins coletivas",
    description: "Moedas internas podem reconhecer presença, missão coletiva e conquistas validadas.",
  },
  {
    icon: ShoppingBag,
    title: "UR Market",
    description: "Benefícios futuros podem se conectar a produtos, serviços e parceiros do ecossistema.",
  },
  {
    icon: Sparkles,
    title: "Recompensas",
    description: "Recompensas dependem de critérios oficiais, parceiros, calendário e validação operacional.",
  },
];

export const mediaRivalryCards: TeamCard[] = [
  {
    icon: Camera,
    title: "Bastidores",
    description: "Treinos, preparação, elenco e desafios podem se tornar narrativa da temporada.",
  },
  {
    icon: Flame,
    title: "Rivalidade",
    description: "Confrontos recorrentes ajudam a construir torcida, memória e expectativa.",
  },
  {
    icon: Award,
    title: "Torcida e palco",
    description: "Equipe forte cria pertencimento para atletas, comunidade, marcas e mídia.",
  },
];

export const cycleRewardFlow = [
  "temporada em formação",
  "ranking coletivo em formação",
  "critérios oficiais",
  "repasses após validação",
] as const;

export const teamPreviewRows = [
  {
    label: "Equipe oficial",
    value: "equipes em formação",
    note: "sem nomes, escudos, atletas ou elencos reais nesta etapa",
  },
  {
    label: "Ranking coletivo",
    value: "ranking coletivo em formação",
    note: "dados reais entram após validação",
  },
  {
    label: "Capitão e elenco",
    value: "registro será liberado após validação",
    note: "sem cadastro real, login ou banco de dados nesta fase",
  },
  {
    label: "Temporada",
    value: "temporada em formação",
    note: "sem datas, eventos ou repasses reais inventados",
  },
] as const;

export const teamInterestFields = [
  "Nome da equipe",
  "Nome do capitão",
  "Modalidade principal",
  "Polo desejado",
  "Contato para orientação futura",
] as const;

export const teamInterestFlow = [
  "Capitão registra interesse visual",
  "Equipe UR valida critérios e operação",
  "Elenco recebe orientação de registro",
  "Registro será liberado após validação",
] as const;

export const teamFaq = [
  {
    question: "Equipes oficiais já podem se registrar?",
    answer:
      "Ainda não. A página mostra a estrutura planejada e usa registro será liberado após validação para evitar coleta real de dados.",
  },
  {
    question: "Equipe oficial precisa ter capitão?",
    answer:
      "Sim. A proposta prevê um capitão ou representante para comunicação, organização inicial e validação futura.",
  },
  {
    question: "Ranking coletivo já tem equipes reais?",
    answer:
      "Não. Ranking coletivo em formação significa que nenhum nome, escudo, posição, elenco ou pontuação real será exibido nesta etapa.",
  },
  {
    question: "UR Play ajuda a formar equipes?",
    answer:
      "Sim. UR Play é a porta de observação planejada para atletas, Draft, ranking e formação de equipes futuras.",
  },
  {
    question: "Equipes podem disputar repasses?",
    answer:
      "Podem disputar em etapas futuras, desde que exista temporada validada, ranking coletivo, regras oficiais e operação ativa.",
  },
  {
    question: "Dados reais entram quando?",
    answer:
      "Dados reais entram após validação oficial de regulamento, elegibilidade, agenda, política de dados e operação.",
  },
] as const;
