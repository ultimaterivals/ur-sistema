import {
  Award,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Coins,
  Dumbbell,
  Eye,
  Flame,
  Handshake,
  MapPin,
  Medal,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type URPlayCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type URPlayStep = {
  step: string;
  title: string;
  description: string;
};

export const urPlayHighlights = [
  "agenda em formação",
  "polo em formação",
  "ranking em formação",
  "inscrição será liberada após validação",
] as const;

export const urPlayIntroCards: URPlayCard[] = [
  {
    icon: Zap,
    title: "Porta de entrada oficial",
    description:
      "UR Play é o primeiro contato competitivo do atleta com o ecossistema Ultimate Rivals.",
  },
  {
    icon: Eye,
    title: "Observação e jornada",
    description:
      "Cada participação ajuda a formar histórico, percepção de nível, presença e potencial de evolução.",
  },
  {
    icon: BarChart3,
    title: "Ranking em formação",
    description:
      "A estrutura prepara o caminho para ranking validado, sem posições ou dados reais inventados nesta fase.",
  },
];

export const urPlayAudienceCards: URPlayCard[] = [
  {
    icon: Target,
    title: "Atletas individuais",
    description: "Para quem quer competir, ser observado, evoluir por níveis e entrar no radar do UR.",
  },
  {
    icon: Shield,
    title: "Atletas com equipe",
    description: "Para quem já joga em grupo e quer fortalecer presença, histórico e oportunidades coletivas.",
  },
  {
    icon: Flame,
    title: "Novos talentos",
    description: "Para quem ainda não tem time, mas quer construir reputação esportiva dentro da temporada.",
  },
];

export const urPlayComparisonRows = [
  {
    label: "Depois do jogo",
    common: "Experiência costuma terminar quando a partida acaba.",
    urPlay: "Participação alimenta jornada, observação, nivelamento e histórico.",
  },
  {
    label: "Organização",
    common: "Pouco contexto sobre nível, presença, evolução ou continuidade.",
    urPlay: "Proposta conecta agenda, polo, critérios, ranking e oportunidades futuras.",
  },
  {
    label: "Visibilidade",
    common: "Bons jogos podem desaparecer sem registro ou narrativa.",
    urPlay: "Atleta entra no radar de mídia, equipes, Draft, torneios e CT UR.",
  },
] as const;

export const urPlayJourneySteps: URPlayStep[] = [
  {
    step: "01",
    title: "Registre interesse",
    description: "O formulário visual indica a intenção do atleta, sem envio real nesta etapa do MVP.",
  },
  {
    step: "02",
    title: "Escolha modalidade e polo",
    description: "Agenda e polos aparecem como estrutura em formação até validação operacional.",
  },
  {
    step: "03",
    title: "Participe do UR Play",
    description: "Atleta joga, é observado e começa a formar presença dentro da jornada UR.",
  },
  {
    step: "04",
    title: "Passe pelo nivelamento",
    description: "Desempenho ajuda a posicionar o atleta em faixas mais justas de competição.",
  },
  {
    step: "05",
    title: "Entre no ranking",
    description: "Quando houver dados reais validados, a participação poderá alimentar ranking e histórico.",
  },
  {
    step: "06",
    title: "Acesse oportunidades",
    description: "Jornada pode abrir caminho para equipes, Draft, torneios, CT UR e recompensas.",
  },
];

export const athleteBenefits: URPlayCard[] = [
  {
    icon: BarChart3,
    title: "Histórico competitivo",
    description: "Participações deixam rastro esportivo e ajudam a construir reputação ao longo do ciclo.",
  },
  {
    icon: Award,
    title: "Visibilidade",
    description: "Jornada pode virar mídia, destaque, narrativa e oportunidade dentro do ecossistema.",
  },
  {
    icon: Coins,
    title: "UR Coins",
    description: "Moedas internas planejadas para presença, missões, conquistas e engajamento validados.",
  },
  {
    icon: Dumbbell,
    title: "Evolução",
    description: "O CT UR aparece como caminho futuro para técnica, físico, mentalidade e leitura de jogo.",
  },
];

export const teamBenefitsFromURPlay: URPlayCard[] = [
  {
    icon: Users,
    title: "Radar de atletas",
    description: "Equipes poderão observar perfis, presença, evolução e encaixe competitivo.",
  },
  {
    icon: Shield,
    title: "Base para Draft",
    description: "Draft é uma possibilidade futura conectada ao desempenho e à validação do ecossistema.",
  },
  {
    icon: Handshake,
    title: "Conexão comercial",
    description: "Equipes fortes ganham narrativa, mídia e potencial de relacionamento com patrocinadores.",
  },
];

export const rankingLevelingCards: URPlayCard[] = [
  {
    icon: Target,
    title: "Nivelamento justo",
    description: "A proposta é aproximar atletas por nível, modalidade e contexto competitivo.",
  },
  {
    icon: BarChart3,
    title: "Métricas em validação",
    description: "Ranking real só entra quando houver critérios, registros e dados validados.",
  },
  {
    icon: Medal,
    title: "Progressão acompanhável",
    description: "Atleta deve entender onde está, como evolui e quais caminhos pode buscar.",
  },
];

export const rankingFlow = [
  {
    title: "Observação",
    description: "Participação no UR Play com presença, contexto e leitura competitiva.",
  },
  {
    title: "Critérios",
    description: "Métricas e regras entram apenas depois de validação operacional.",
  },
  {
    title: "Nível",
    description: "O atleta passa a competir em faixas mais coerentes com sua evolução.",
  },
  {
    title: "Ranking",
    description: "Histórico e posição só aparecem quando houver dados reais validados.",
  },
] as const;

export const coinsRewardCards: URPlayCard[] = [
  {
    icon: Coins,
    title: "Presença validada",
    description: "UR Coins podem ser ligadas a participação real quando a operação estiver ativa.",
  },
  {
    icon: Sparkles,
    title: "Missões e conquistas",
    description: "Recompensas futuras devem reconhecer evolução, engajamento e consistência.",
  },
  {
    icon: Trophy,
    title: "Market e benefícios",
    description: "Pontuação poderá se conectar ao UR Market e a parceiros em etapas futuras.",
  },
];

export const rewardFlow = [
  "presença validada",
  "missões e conquistas",
  "UR Coins em formação",
  "benefícios futuros",
] as const;

export const poloCards: URPlayCard[] = [
  {
    icon: MapPin,
    title: "Polos em formação",
    description: "Expansão por quadras parceiras depende de validação operacional e calendário real.",
  },
  {
    icon: CalendarDays,
    title: "Agenda em formação",
    description: "Nenhuma data real será publicada antes da confirmação oficial da operação.",
  },
  {
    icon: CheckCircle2,
    title: "Validação antes da inscrição",
    description: "Inscrição será liberada após validação de polo, formato, regulamento e equipe operacional.",
  },
];

export const upcomingURPlays = [
  {
    title: "UR Play Vôlei de Praia",
    modality: "modalidade em validação",
    location: "polo em formação",
    status: "agenda em formação",
  },
  {
    title: "UR Play por nível",
    modality: "formato em formação",
    location: "polo em formação",
    status: "inscrição será liberada após validação",
  },
  {
    title: "UR Play equipes",
    modality: "convocação em formação",
    location: "polo em formação",
    status: "agenda em formação",
  },
] as const;

export const interestFields = [
  "Nome do atleta",
  "Modalidade de interesse",
  "Polo desejado",
  "Nível percebido",
  "Contato para aviso futuro",
] as const;

export const interestFlow = [
  "Atleta registra interesse",
  "Equipe UR valida agenda e polo",
  "Atleta recebe orientação de inscrição",
  "Participação é liberada após validação",
] as const;

export const urPlayFaq = [
  {
    question: "UR Play já tem inscrição ativa?",
    answer:
      "Ainda não. Nesta fase, a página mostra a estrutura da entrada oficial e usa o placeholder inscrição será liberada após validação.",
  },
  {
    question: "UR Play garante entrada no ranking?",
    answer:
      "Entrada no ranking não é automática. Ranking real depende de dados validados, critérios definidos e operação ativa.",
  },
  {
    question: "Preciso ter equipe para participar?",
    answer:
      "Equipe não é requisito. UR Play também é pensado para atletas individuais que querem construir histórico e oportunidades.",
  },
  {
    question: "UR Coins já têm valor real?",
    answer:
      "Nesta etapa, não. UR Coins aparecem como conceito visual planejado para recompensas futuras do ecossistema.",
  },
  {
    question: "Polos já estão confirmados?",
    answer:
      "Polos ainda não estão confirmados. A página usa polo em formação e agenda em formação para evitar qualquer dado real não validado.",
  },
  {
    question: "UR Play pode levar ao CT UR?",
    answer:
      "Sim, como caminho planejado. O CT UR aparece como frente futura de desenvolvimento técnico, físico e mental.",
  },
] as const;
