import {
  BadgePercent,
  BarChart3,
  Camera,
  Coins,
  Dumbbell,
  Gift,
  Handshake,
  HeartHandshake,
  Medal,
  Package,
  RefreshCw,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  Ticket,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MarketCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const marketHeroBadges = [
  "market em formação",
  "benefícios em formação",
  "produtos entram após validação",
  "valores em UR Coins serão definidos oficialmente",
  "patrocinadores entram após aprovação",
] as const;

export const marketIntroCards: MarketCard[] = [
  {
    icon: ShoppingBag,
    title: "Vitrine do ecossistema",
    description: "UR Market organiza recompensas, benefícios, produtos, serviços e ativações em um só lugar.",
  },
  {
    icon: Coins,
    title: "Conexão com UR Coins",
    description: "UR Coins conectam participação, desempenho, ranking e engajamento a benefícios futuros.",
  },
  {
    icon: Handshake,
    title: "Patrocinadores com valor real",
    description: "Marcas podem oferecer benefícios relevantes para atletas, equipes e comunidade.",
  },
];

export const performanceBenefitFlow = [
  {
    label: "Participação",
    description: "Atleta ou equipe participa de UR Play, temporada, ranking e ações oficiais.",
  },
  {
    label: "Validação",
    description: "Dados reais, presença e critérios passam por validação operacional.",
  },
  {
    label: "UR Coins",
    description: "Moedas internas podem reconhecer presença, evolução, conquistas e engajamento.",
  },
  {
    label: "Benefícios",
    description: "Market pode liberar produtos, serviços, descontos, CT UR, experiências e ativações.",
  },
] as const;

export const coinMechanicsCards: MarketCard[] = [
  {
    icon: Coins,
    title: "Saldo em formação",
    description: "Não existe carteira real nesta fase. Valores em UR Coins serão definidos oficialmente.",
  },
  {
    icon: BarChart3,
    title: "Ranking e desempenho",
    description: "Ranking validado pode ser uma das fontes futuras para reconhecimento e recompensas.",
  },
  {
    icon: Sparkles,
    title: "Missões e engajamento",
    description: "Ações oficiais podem gerar leitura de participação, retenção e recorrência.",
  },
];

export const rewardCategories: MarketCard[] = [
  {
    icon: Package,
    title: "Produtos esportivos",
    description: "Itens reais só entram após validação de parceiros, estoque, regras e operação.",
  },
  {
    icon: Dumbbell,
    title: "CT UR",
    description: "Treinos, avaliações e desenvolvimento podem compor benefícios futuros do ecossistema.",
  },
  {
    icon: BadgePercent,
    title: "Descontos e serviços",
    description: "Serviços parceiros podem aparecer com condições oficiais aprovadas.",
  },
  {
    icon: Ticket,
    title: "Experiências",
    description: "Ativações, eventos e vivências podem conectar comunidade, marcas e temporada.",
  },
  {
    icon: Camera,
    title: "Mídia e visibilidade",
    description: "Destaques, conteúdos e oportunidades de mídia podem ser parte da jornada.",
  },
  {
    icon: Gift,
    title: "Recompensas especiais",
    description: "Premiações e benefícios específicos dependem de ciclo, ranking e validação oficial.",
  },
];

export const athleteMarketBenefits: MarketCard[] = [
  {
    icon: Trophy,
    title: "Reconhecimento",
    description: "Desempenho e presença podem gerar acesso futuro a benefícios do Market.",
  },
  {
    icon: Dumbbell,
    title: "Evolução",
    description: "CT UR e serviços parceiros podem ajudar atletas a evoluírem dentro da temporada.",
  },
  {
    icon: Star,
    title: "Recorrência",
    description: "Benefícios criam motivo para voltar, competir, acompanhar ranking e participar da comunidade.",
  },
];

export const teamMarketBenefits: MarketCard[] = [
  {
    icon: Shield,
    title: "Benefícios coletivos",
    description: "Equipes podem acessar recompensas ligadas a ranking coletivo e presença validada.",
  },
  {
    icon: Users,
    title: "Elenco engajado",
    description: "Market ajuda a manter atletas conectados ao ciclo, às missões e aos objetivos da equipe.",
  },
  {
    icon: Medal,
    title: "Premiações por ciclo",
    description: "Premiações futuras dependem de regras, ranking coletivo e validação oficial.",
  },
];

export const sponsorMarketBenefits: MarketCard[] = [
  {
    icon: Handshake,
    title: "Benefício direto",
    description: "Patrocinadores podem entregar valor real a atletas, equipes e comunidade.",
  },
  {
    icon: HeartHandshake,
    title: "Relacionamento",
    description: "Market conecta marca a recorrência, uso, comunidade e jornada esportiva.",
  },
  {
    icon: Target,
    title: "Ativação com contexto",
    description: "A marca entra ligada a ranking, temporada, mídia, UR Coins e comportamento do ecossistema.",
  },
];

export const marketShowcaseItems = [
  {
    title: "Produtos esportivos",
    category: "categoria em formação",
    status: "produtos entram após validação",
  },
  {
    title: "Serviços parceiros",
    category: "benefícios em formação",
    status: "patrocinadores entram após aprovação",
  },
  {
    title: "CT UR",
    category: "desenvolvimento",
    status: "valores em UR Coins serão definidos oficialmente",
  },
  {
    title: "Experiências",
    category: "comunidade",
    status: "market em formação",
  },
] as const;

export const redeemFlow = [
  "Atleta acumula participação validada",
  "UR Coins são calculadas por critérios oficiais",
  "Benefício aprovado entra na vitrine",
  "Resgate real só será liberado após validação",
] as const;

export const ecosystemRelationCards: MarketCard[] = [
  {
    icon: BarChart3,
    title: "Ranking",
    description: "Ranking pode orientar acesso, reconhecimento e recompensas futuras.",
  },
  {
    icon: RefreshCw,
    title: "Temporada",
    description: "Ciclos mantêm benefícios, missões e recompensas conectados ao calendário oficial.",
  },
  {
    icon: Zap,
    title: "UR Play",
    description: "Entrada pelo UR Play pode iniciar presença, histórico e conexão com UR Coins.",
  },
  {
    icon: Dumbbell,
    title: "CT UR",
    description: "Desenvolvimento esportivo pode aparecer como benefício ou recompensa futura.",
  },
];

export const marketFaq = [
  {
    question: "UR Market já vende produtos reais?",
    answer:
      "Ainda não. A página apresenta a estrutura do Market e usa produtos entram após validação para evitar qualquer marketplace real nesta fase.",
  },
  {
    question: "UR Coins já têm valor oficial?",
    answer:
      "Não. Valores em UR Coins serão definidos oficialmente apenas após regras, operação e validação do ecossistema.",
  },
  {
    question: "Atletas já podem resgatar benefícios?",
    answer:
      "Não nesta etapa. Benefícios em formação significa que não há resgate real, checkout, carteira ou integração.",
  },
  {
    question: "Patrocinadores podem entrar no Market?",
    answer:
      "A proposta permite patrocinadores no Market, mas patrocinadores entram após aprovação e validação oficial.",
  },
  {
    question: "Que categorias podem existir?",
    answer:
      "Market pode incluir produtos, serviços, descontos, experiências, CT UR e ativações de patrocinadores.",
  },
  {
    question: "Por que o Market aumenta recorrência?",
    answer:
      "Benefícios conectados a desempenho, ranking e comunidade criam motivo para voltar, competir e acompanhar a temporada.",
  },
] as const;
