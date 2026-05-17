import {
  Award,
  BarChart3,
  Building2,
  CalendarDays,
  Camera,
  CheckCircle2,
  Coins,
  Crown,
  Dumbbell,
  Flame,
  Gift,
  Handshake,
  MapPin,
  Medal,
  PlayCircle,
  Radio,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconContent = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const heroProofs = [
  "Ranking público",
  "Temporada trimestral",
  "UR Coins e recompensas",
  "Mídia oficial UR",
  "Polos em expansão",
] as const;

export const problemCards: IconContent[] = [
  {
    icon: CalendarDays,
    title: "Sem calendário",
    description: "Torneios acontecem de forma solta, sem temporada, sequência ou construção de narrativa.",
  },
  {
    icon: BarChart3,
    title: "Sem ranking confiável",
    description: "O desempenho do atleta não vira histórico público nem valor competitivo reconhecível.",
  },
  {
    icon: Radio,
    title: "Sem visibilidade",
    description: "Grandes atuações desaparecem quando não existe mídia, highlights ou acompanhamento da jornada.",
  },
  {
    icon: Dumbbell,
    title: "Sem desenvolvimento",
    description: "Muitos atletas competem, mas poucos acessam treino, avaliação e evolução contínua.",
  },
  {
    icon: Trophy,
    title: "Sem retorno",
    description: "A experiência costuma terminar no evento, com pouca recompensa e quase nenhum benefício depois.",
  },
  {
    icon: Handshake,
    title: "Sem dados para marcas",
    description: "Patrocinadores precisam de métricas, recorrência e conexão real com a comunidade.",
  },
];

export const pillarCards: IconContent[] = [
  {
    icon: Zap,
    title: "UR Play",
    description: "A porta de entrada para jogar, ser observado, começar histórico e entrar no radar do ranking.",
  },
  {
    icon: TrendingUp,
    title: "Ranking por níveis",
    description: "Desempenho vira posição, narrativa, oportunidade e disputa justa entre perfis próximos.",
  },
  {
    icon: Users,
    title: "Equipes oficiais",
    description: "Times ganham identidade, elenco, ranking coletivo, mídia e chance de repasse financeiro.",
  },
  {
    icon: CalendarDays,
    title: "Temporada trimestral",
    description: "Um ciclo com UR Play, nivelamento, torneios, Virada de Ranking, premiações e novo começo.",
  },
  {
    icon: Coins,
    title: "UR Coins",
    description: "Moedas internas por presença, conquistas, evolução, engajamento e desempenho validado.",
  },
  {
    icon: ShoppingBag,
    title: "UR Market",
    description: "Benefícios, produtos, serviços e ativações de parceiros dentro da jornada do atleta.",
  },
  {
    icon: Dumbbell,
    title: "CT UR",
    description: "Desenvolvimento técnico, físico, mental e estratégico para competir melhor.",
  },
  {
    icon: PlayCircle,
    title: "Mídia oficial",
    description: "Transmissões, bastidores, cortes, histórias e conteúdo para transformar jogo em espetáculo.",
  },
];

export const audienceCards = [
  {
    icon: Target,
    title: "Sou atleta",
    description:
      "Entre no UR Play, dispute ranking, evolua por níveis, acumule UR Coins e busque espaço em equipes oficiais.",
    cta: "Começar minha jornada",
    href: "/ur-play",
  },
  {
    icon: Shield,
    title: "Tenho uma equipe",
    description:
      "Registre seu time, fortaleça identidade, entre no ranking coletivo e prepare sua presença na temporada.",
    cta: "Cadastrar minha equipe",
    href: "/equipes",
  },
  {
    icon: Handshake,
    title: "Quero patrocinar",
    description: "Conecte sua marca a atletas, eventos, mídia, ranking, comunidade e ativações com métricas.",
    cta: "Ver oportunidades comerciais",
    href: "/patrocinadores",
  },
  {
    icon: Building2,
    title: "Tenho uma quadra",
    description: "Transforme sua estrutura em polo UR, receba ativações e participe da expansão regional.",
    cta: "Quero ser polo UR",
    href: "/#quadras",
  },
  {
    icon: Radio,
    title: "Quero acompanhar",
    description: "Siga a temporada, acompanhe conteúdos, torça por atletas e participe da comunidade.",
    cta: "Acompanhar a temporada",
    href: "/temporada",
  },
];

export const athleteJourney = [
  {
    step: "01",
    title: "Cadastre-se",
    description: "Informe modalidade, polo, nível percebido e objetivo dentro do UR.",
  },
  {
    step: "02",
    title: "Entre no UR Play",
    description: "Participe da porta de entrada para jogar, ser observado e começar sua pontuação.",
  },
  {
    step: "03",
    title: "Seja nivelado",
    description: "Seu desempenho ajuda a posicionar você no nível correto.",
  },
  {
    step: "04",
    title: "Suba no ranking",
    description: "Participação, resultado, destaque e evolução alimentam sua posição.",
  },
  {
    step: "05",
    title: "Ganhe visibilidade e UR Coins",
    description: "Histórico vira reputação, recompensas, benefícios, mídia e novas oportunidades.",
  },
  {
    step: "06",
    title: "Entre em equipes, torneios e CT UR",
    description: "Com constância, você pode acessar novas disputas, treinos e premiações.",
  },
];

export const teamBenefits: IconContent[] = [
  {
    icon: BarChart3,
    title: "Ranking coletivo",
    description: "A equipe disputa posição, reconhecimento e evolução dentro da temporada.",
  },
  {
    icon: Coins,
    title: "Repasse financeiro",
    description: "As melhores equipes podem disputar repasses definidos por ciclo.",
  },
  {
    icon: Shield,
    title: "Perfil oficial",
    description: "Elenco, histórico, mídia, resultados e identidade visual preparados para escala.",
  },
  {
    icon: ShoppingBag,
    title: "Mercado interno",
    description: "Atletas podem ser registrados, movimentados e valorizados dentro da lógica UR.",
  },
  {
    icon: Flame,
    title: "Mídia e rivalidade",
    description: "A equipe ganha narrativa, torcida, bastidores e presença nas transmissões.",
  },
];

export const rankingTypes = [
  "Ranking individual",
  "Ranking de equipes",
  "Ranking por nível",
  "Ranking por polo",
  "Ranking por modalidade",
  "Destaques da semana",
] as const;

export const seasonSteps = [
  "UR Play",
  "Nivelamento",
  "Ranking ativo",
  "Mini torneios",
  "Torneios oficiais",
  "Virada de Ranking",
  "Repasses e novo ciclo",
] as const;

export const rewardCards: IconContent[] = [
  {
    icon: Trophy,
    title: "Premiação esportiva",
    description: "Eventos oficiais podem oferecer premiações específicas por nível, categoria e modalidade.",
  },
  {
    icon: Medal,
    title: "Repasses por ranking",
    description: "Atletas e equipes com melhor desempenho no ciclo podem disputar repasses definidos pela temporada.",
  },
  {
    icon: Coins,
    title: "UR Coins",
    description: "Moedas internas por presença, missões, conquistas, engajamento e desempenho validado.",
  },
  {
    icon: Gift,
    title: "Benefícios no Market",
    description: "Produtos, serviços, descontos, treinos e recompensas disponibilizados por UR e parceiros.",
  },
  {
    icon: Camera,
    title: "Visibilidade",
    description: "Conteúdo, entrevistas, rankings, destaques e presença nas narrativas oficiais.",
  },
];

export const marketItems = [
  {
    title: "Produtos esportivos",
    category: "UR Market",
    status: "cat\u00e1logo em forma\u00e7\u00e3o",
  },
  {
    title: "Serviços parceiros",
    category: "Benefícios",
    status: "parcerias em forma\u00e7\u00e3o",
  },
  {
    title: "CT UR",
    category: "Desenvolvimento",
    status: "programas em forma\u00e7\u00e3o",
  },
  {
    title: "Experiências",
    category: "Comunidade",
    status: "ativa\u00e7\u00f5es em forma\u00e7\u00e3o",
  },
];

export const ctPrograms = [
  "Desenvolvimento técnico",
  "Preparação física",
  "Mentalidade e liderança",
  "Análise e evolução",
] as const;

export const mediaFormats = ["Transmissões", "Highlights", "Bastidores", "Rivais em Jogo", "Documentários"] as const;

export const sponsorActivations = ["Eventos", "Ranking", "UR Market", "Mídia", "CT UR", "Relatórios"] as const;

export const courtBenefits = [
  "Fluxo recorrente",
  "Visibilidade",
  "Comunidade",
  "Ativação comercial",
  "Expansão regional",
] as const;

export const eventCards = [
  {
    title: "UR Play Vôlei de Praia",
    modality: "Vôlei de Praia",
    location: "polo em forma\u00e7\u00e3o",
    status: "temporada em forma\u00e7\u00e3o",
    description: "Entrada, nivelamento, ranking e observação.",
  },
  {
    title: "Mini torneio por nível",
    modality: "Formato em forma\u00e7\u00e3o",
    location: "polo em forma\u00e7\u00e3o",
    status: "calend\u00e1rio em forma\u00e7\u00e3o",
    description: "Disputa preparada para níveis próximos e evolução contínua.",
  },
  {
    title: "Virada de Ranking",
    modality: "Temporada trimestral",
    location: "polo em forma\u00e7\u00e3o",
    status: "ranking em forma\u00e7\u00e3o",
    description: "Fechamento de ciclo, narrativa, recompensas e novo começo.",
  },
];

export const communityHighlights: IconContent[] = [
  {
    icon: Crown,
    title: "Cada atleta tem nome",
    description: "A jornada individual deixa de sumir depois do apito final.",
  },
  {
    icon: Shield,
    title: "Cada equipe tem história",
    description: "Times ganham identidade, continuidade e rivalidades acompanháveis.",
  },
  {
    icon: Sparkles,
    title: "Cada temporada tem memoria",
    description: "O ecossistema registra evolução, mídia, ranking e pertencimento.",
  },
];

export const faqItems = [
  {
    question: "O que é o Ultimate Rivals?",
    answer:
      "O Ultimate Rivals é um ecossistema esportivo que une competição, desenvolvimento, ranking, equipes, recompensas, mídia, patrocinadores e comunidade para profissionalizar o esporte amador.",
  },
  {
    question: "O que é o UR Play?",
    answer:
      "É a porta de entrada oficial do UR. Atletas jogam, são observados, começam seu histórico e entram no radar de ranking, equipes e recompensas.",
  },
  {
    question: "Preciso ter equipe para participar?",
    answer:
      "Não. O atleta pode entrar individualmente, participar do UR Play, construir ranking e aguardar oportunidades. Quem já tem equipe também poderá registrar o time.",
  },
  {
    question: "O ranking será público?",
    answer:
      "Sim. O ranking é parte central da experiência, mas nesta fase ele aparece como ranking em forma\u00e7\u00e3o, sem dados reais inventados.",
  },
  {
    question: "Quando meu perfil de atleta aparece?",
    answer:
      "O perfil oficial depende de cadastro completo, aceite de termos, validação administrativa e etapas futuras do produto.",
  },
  {
    question: "O que são UR Coins?",
    answer:
      "São moedas internas do ecossistema, planejadas para recompensar presença, missões, conquistas e engajamento. Nesta fase, são apenas conceito visual.",
  },
  {
    question: "O que é o UR Market?",
    answer: "É a vitrine planejada de recompensas, produtos, serviços, descontos e benefícios da comunidade UR.",
  },
  {
    question: "Como uma marca pode patrocinar?",
    answer:
      "A marca poderá patrocinar eventos, ranking, mídia, CT UR, UR Market, equipes, conteúdos e ativações específicas em etapas futuras.",
  },
  {
    question: "Como uma quadra vira parceira?",
    answer:
      "A quadra poderá se cadastrar como interessada, passar por avaliação e se tornar um polo UR quando a operação estiver validada.",
  },
];

export const finalActions = [
  { label: "Entrar como atleta", href: "/ur-play" },
  { label: "Cadastrar equipe", href: "/equipes" },
  { label: "Patrocinar o UR", href: "/patrocinadores" },
  { label: "Ser quadra parceira", href: "/#quadras" },
] as const;

export const statusItems = [
  { icon: CheckCircle2, label: "Dados reais entram apenas após validação" },
  { icon: Star, label: "temporada em forma\u00e7\u00e3o" },
  { icon: MapPin, label: "polo em forma\u00e7\u00e3o" },
  { icon: Award, label: "ranking em forma\u00e7\u00e3o" },
] as const;
