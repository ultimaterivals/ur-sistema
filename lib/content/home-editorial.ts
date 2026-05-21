import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Camera,
  Coins,
  Dumbbell,
  Handshake,
  MapPin,
  Radio,
  Shield,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteImages } from "@/lib/content/site-images";

export type EditorialCard = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  icon?: LucideIcon;
  imageKey?: keyof typeof siteImages;
  meta?: string;
};

export const ecosystemHighlights: EditorialCard[] = [
  {
    eyebrow: "Entrada oficial",
    title: "UR Play",
    description: "A porta de entrada para jogar, ser visto, iniciar histórico e colocar seu nome no radar do ranking.",
    href: "/ur-play",
    cta: "Entender UR Play",
    icon: Zap,
    imageKey: "urPlayAction",
  },
  {
    eyebrow: "História pública",
    title: "Ranking",
    description: "Seu desempenho, sua presença e sua evolução viram trajetória acompanhável dentro da temporada.",
    href: "/ranking",
    cta: "Ver estrutura",
    icon: BarChart3,
  },
  {
    eyebrow: "Times com identidade",
    title: "Equipes",
    description: "Elenco, capitão, histórico, mídia, rivalidade e ranking coletivo em uma plataforma só.",
    href: "/equipes",
    cta: "Cadastrar equipe",
    icon: Shield,
    imageKey: "teamHuddle",
  },
  {
    eyebrow: "Ciclo recorrente",
    title: "Temporada",
    description: "Ciclos trimestrais conectam UR Play, nivelamento, torneios, ranking e recompensas.",
    href: "/temporada",
    cta: "Ver ciclo",
    icon: CalendarDays,
  },
] as const;

export const entryPaths = [
  { label: "Sou atleta", href: "/cadastro#atleta", icon: Users, description: "Começar no UR Play e construir trajetória." },
  { label: "Tenho equipe", href: "/cadastro#equipe", icon: Shield, description: "Registrar elenco, capitão e identidade." },
  { label: "Quero patrocinar", href: "/cadastro#patrocinador", icon: Handshake, description: "Ativar marca dentro da jornada esportiva." },
  { label: "Tenho quadra", href: "/cadastro#quadra", icon: MapPin, description: "Avaliar polo e calendário recorrente." },
  { label: "Acompanhar comunidade", href: "/cadastro#comunidade", icon: Radio, description: "Receber conteúdos e próximos passos." },
] as const;

export const seasonSignals = [
  { label: "Temporada", value: "próximo ciclo em organização" },
  { label: "Ranking", value: "abre com presença e desempenho" },
  { label: "Agenda", value: "oficial após confirmação" },
] as const;

export const journeyEditorial = [
  { step: "01", title: "Entrar", description: "O atleta ou equipe demonstra interesse pela central oficial." },
  { step: "02", title: "Ser observado", description: "O UR Play inicia a leitura de nível, presença, postura e potencial." },
  { step: "03", title: "Competir", description: "Participações confirmadas alimentam histórico e memória esportiva." },
  { step: "04", title: "Evoluir", description: "Ranking, CT UR e temporada ajudam a transformar jogo em desenvolvimento." },
  { step: "05", title: "Ganhar palco", description: "Mídia, destaques e equipes criam reputação dentro do ecossistema." },
] as const;

export const editorialStories: EditorialCard[] = [
  {
    eyebrow: "Guia",
    title: "O que é o Ultimate Rivals",
    description: "O UR nasce como ecossistema esportivo contínuo para organizar sua jornada, ranking, mídia e oportunidades.",
    href: "/ecossistema",
    cta: "Ler visão",
    icon: ArrowUpRight,
    meta: "base editorial",
  },
  {
    eyebrow: "UR Play",
    title: "Como começa a entrada no ranking",
    description: "A primeira experiência conecta participação, observação, nivelamento e histórico validado.",
    href: "/ur-play",
    cta: "Ver entrada",
    icon: BadgeCheck,
    meta: "entrada oficial",
  },
  {
    eyebrow: "Mídia",
    title: "O atleta amador também merece palco",
    description: "A cobertura UR prepara histórias, bastidores, cortes e memória de temporada sem inventar dados.",
    href: "/midia",
    cta: "Ver mídia",
    icon: Camera,
    imageKey: "mediaCoverage",
    meta: "grade em preparação",
  },
] as const;

export const recognitionCards = [
  { icon: Trophy, title: "Ranking com critério", description: "Seu nome começa a aparecer conforme presença e desempenho." },
  { icon: Coins, title: "UR Coins", description: "Benefícios entram com regras claras e parceiros confirmados." },
  { icon: Camera, title: "Mídia oficial", description: "Conteúdos oficiais acompanham histórias reais da temporada." },
  { icon: Dumbbell, title: "CT UR", description: "Programas e polos entram conforme calendário confirmado." },
] as const;

export const sponsorEditorial = [
  "Eventos e experiências",
  "Ranking e mídia oficial",
  "UR Market e benefícios",
  "CT UR e desenvolvimento",
  "Quadras parceiras",
  "Comunidade e recorrência",
] as const;
