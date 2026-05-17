import {
  BadgeCheck,
  BarChart3,
  Camera,
  ClipboardCheck,
  Coins,
  Dumbbell,
  Handshake,
  LineChart,
  MapPin,
  Megaphone,
  Radio,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SponsorCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SponsorFlowItem = {
  label: string;
  description: string;
};

export type SponsorQuota = {
  label: string;
  status: string;
  description: string;
  items: readonly string[];
};

export const sponsorHeroBadges = [
  "cotas em formação",
  "valores definidos após proposta comercial",
  "métricas entram após operação validada",
  "marcas entram após aprovação",
  "relatórios em formação",
] as const;

export const sponsorNarrativeCards: SponsorCard[] = [
  {
    icon: Handshake,
    title: "Jornada, não vitrine",
    description:
      "A marca entra conectada ao caminho do atleta: UR Play, nivelamento, ranking, temporada, mídia e recompensas.",
  },
  {
    icon: Trophy,
    title: "Ativo competitivo",
    description:
      "Patrocínio acompanha histórias, rivalidades, evolução de equipes e momentos de ciclo, não apenas uma exposição pontual.",
  },
  {
    icon: Users,
    title: "Comunidade recorrente",
    description:
      "O ecossistema cria repetição de contato com atletas, equipes, público, polos em formação e conteúdo da temporada.",
  },
];

export const ecosystemAccessCards: SponsorCard[] = [
  {
    icon: Zap,
    title: "UR Play",
    description: "Entrada oficial do atleta, observação, presença validada e começo da jornada pública.",
  },
  {
    icon: BarChart3,
    title: "Ranking",
    description: "Narrativa de evolução, níveis, destaques, equipes e recorrência competitiva.",
  },
  {
    icon: Shield,
    title: "Equipes",
    description: "Identidade coletiva, elenco, rivalidade, torcida, histórico e oportunidades comerciais.",
  },
  {
    icon: Camera,
    title: "Mídia",
    description: "Conteúdo, bastidores, transmissões futuras, highlights e histórias da comunidade.",
  },
  {
    icon: Coins,
    title: "UR Market",
    description: "Canal para benefícios reais, ativações e relacionamento com atletas e público.",
  },
  {
    icon: Dumbbell,
    title: "CT UR",
    description: "Desenvolvimento esportivo, avaliação futura e impacto direto na evolução dos atletas.",
  },
  {
    icon: MapPin,
    title: "Polos",
    description: "Expansão por polos em formação, com ativações locais após validação oficial.",
  },
  {
    icon: Radio,
    title: "Eventos",
    description: "Momentos de comunidade, competição, mídia, experiência e ativação da marca.",
  },
];

export const activationCards: SponsorCard[] = [
  {
    icon: Megaphone,
    title: "Ativação em eventos",
    description: "Presença de marca em eventos e experiências quando agenda, operação e entregas forem validadas.",
  },
  {
    icon: Coins,
    title: "Benefícios no UR Market",
    description: "Produtos, serviços, descontos ou experiências podem entrar no Market após aprovação oficial.",
  },
  {
    icon: Camera,
    title: "Conteúdo e mídia",
    description: "A marca pode se conectar a quadros, bastidores, histórias, highlights e narrativas da temporada.",
  },
  {
    icon: Shield,
    title: "Apoio a equipes",
    description: "Equipes oficiais podem receber ativações ligadas a identidade, torcida, ranking e ciclos.",
  },
  {
    icon: Target,
    title: "Missões e desafios",
    description: "Ações de engajamento podem incentivar participação, presença e recorrência sem inventar métricas reais.",
  },
  {
    icon: Sparkles,
    title: "Experiências de comunidade",
    description: "Benefícios e encontros podem aproximar marca, atletas, público e polos em formação.",
  },
];

export const marketRelationshipFlow: SponsorFlowItem[] = [
  {
    label: "Benefício aprovado",
    description: "A marca propõe uma entrega real, validada comercialmente e operacionalmente pela equipe UR.",
  },
  {
    label: "Entrada no Market",
    description: "O benefício aparece como vitrine planejada, com regras oficiais e sem checkout nesta fase.",
  },
  {
    label: "Atleta acessa",
    description: "UR Coins e critérios oficiais podem orientar acesso futuro a benefícios, produtos e experiências.",
  },
  {
    label: "Relacionamento continua",
    description: "A marca deixa de aparecer uma vez e passa a fazer parte da jornada esportiva recorrente.",
  },
];

export const rankingMediaCards: SponsorCard[] = [
  {
    icon: BarChart3,
    title: "Ranking como narrativa",
    description:
      "Ranking público cria assunto contínuo: evolução, disputa, níveis, equipes, viradas e temporada em formação.",
  },
  {
    icon: Camera,
    title: "Mídia como ativo",
    description:
      "Conteúdo transforma participação em memória, destaque, bastidor e material para comunidade e marcas.",
  },
  {
    icon: LineChart,
    title: "Recorrência comercial",
    description:
      "Eventos, rankings e conteúdos mantêm a marca próxima da rotina esportiva, não apenas de um dia específico.",
  },
];

export const eventsCommunityCards: SponsorCard[] = [
  {
    icon: Radio,
    title: "Eventos por ciclo",
    description:
      "Ativações podem aparecer em UR Play, mini torneios, torneios oficiais e eventos especiais após confirmação.",
  },
  {
    icon: MapPin,
    title: "Polos em formação",
    description:
      "A expansão por polo permite presença local, leitura de comunidade e propostas ajustadas por operação validada.",
  },
  {
    icon: Users,
    title: "Comunidade ativa",
    description:
      "Atletas, equipes, torcida e parceiros formam um ambiente de relacionamento, conteúdo e recorrência.",
  },
];

export const ctImpactCards: SponsorCard[] = [
  {
    icon: Dumbbell,
    title: "Desenvolvimento de atletas",
    description: "CT UR pode conectar treino, avaliação, evolução técnica e oportunidades dentro do ecossistema.",
  },
  {
    icon: BadgeCheck,
    title: "Impacto com critério",
    description: "A marca pode apoiar desenvolvimento esportivo com regras claras, agenda validada e entrega aprovada.",
  },
  {
    icon: Trophy,
    title: "Do treino à oportunidade",
    description: "A jornada pode aproximar atleta de ranking, equipes, Draft, mídia, premiações e temporada.",
  },
];

export const reportingCards: SponsorCard[] = [
  {
    icon: ClipboardCheck,
    title: "Relatórios em formação",
    description:
      "Relatórios comerciais serão estruturados apenas depois de operação, agenda, eventos e dados reais validados.",
  },
  {
    icon: LineChart,
    title: "Métricas futuras",
    description:
      "Métricas entram após operação validada, sem alcance, conversão, público ou números inventados nesta etapa.",
  },
  {
    icon: BarChart3,
    title: "Leitura de ecossistema",
    description:
      "Ranking, mídia, eventos, UR Market e comunidade podem gerar leitura comercial quando houver base oficial.",
  },
];

export const quotaModels: SponsorQuota[] = [
  {
    label: "Cota Comunidade",
    status: "cotas em formação",
    description:
      "Modelo pensado para presença institucional, relacionamento local e benefícios de comunidade após proposta aprovada.",
    items: [
      "marcas entram após aprovação",
      "valores definidos após proposta comercial",
      "entregas reais dependem de validação",
    ],
  },
  {
    label: "Cota Temporada",
    status: "cotas em formação",
    description:
      "Modelo para conectar marca a ranking, mídia, eventos, equipes e viradas de ciclo com entregas oficiais.",
    items: [
      "temporada em formação",
      "métricas entram após operação validada",
      "relatórios em formação",
    ],
  },
  {
    label: "Cota Market",
    status: "cotas em formação",
    description:
      "Modelo para benefícios, produtos, serviços ou experiências no UR Market após aprovação comercial e operacional.",
    items: [
      "benefícios entram após validação",
      "valores definidos após proposta comercial",
      "marcas entram após aprovação",
    ],
  },
];

export const commercialInterestFlow = [
  "Marca registra interesse comercial",
  "Equipe UR avalia aderência, agenda e polo",
  "Proposta define cota, entregas e valores",
  "Entrada acontece após aprovação oficial",
] as const;

export const commercialFormFields = [
  {
    label: "Nome da marca",
    value: "marcas entram após aprovação",
  },
  {
    label: "Objetivo comercial",
    value: "ativação, mídia, UR Market ou comunidade",
  },
  {
    label: "Polo ou modalidade",
    value: "polo em formação",
  },
  {
    label: "Fase atual",
    value: "cotas em formação",
  },
] as const;

export const sponsorFaq = [
  {
    question: "Patrocinar o UR é comprar espaço de logo?",
    answer:
      "Não. A proposta é entrar em um ecossistema contínuo com atletas, equipes, UR Play, ranking, mídia, UR Market, CT UR, eventos e comunidade.",
  },
  {
    question: "Já existem cotas, valores e entregas fechadas?",
    answer:
      "Ainda não. Cotas em formação e valores definidos após proposta comercial significam que entregas reais dependem de aprovação oficial.",
  },
  {
    question: "O UR Market pode ter benefícios de patrocinadores?",
    answer:
      "Sim, como conceito. Produtos, serviços, descontos, experiências e ativações podem entrar no Market após validação e aprovação.",
  },
  {
    question: "A página mostra métricas comerciais reais?",
    answer:
      "Não. Métricas entram após operação validada. Nenhum alcance, público, conversão, contrato ou número real foi inventado.",
  },
  {
    question: "A marca pode apoiar CT UR e desenvolvimento?",
    answer:
      "Pode, dentro de propostas futuras aprovadas. CT UR pode conectar marca a treino, avaliação, evolução e impacto esportivo.",
  },
  {
    question: "Como registrar interesse comercial agora?",
    answer:
      "O formulário é visual nesta fase. Ele demonstra o fluxo de interesse, proposta e aprovação sem backend, CRM ou envio real.",
  },
] as const;
