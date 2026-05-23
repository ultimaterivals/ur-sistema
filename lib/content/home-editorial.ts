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
  { label: "Sou atleta", href: "/cadastro#atleta", icon: Users, description: "Jogar, ser visto e construir trajetória." },
  { label: "Tenho equipe", href: "/cadastro#equipe", icon: Shield, description: "Entrar no radar da temporada, ranking e mídia UR." },
  { label: "Quero patrocinar", href: "/cadastro#patrocinador", icon: Handshake, description: "Aparecer dentro da jornada esportiva." },
  { label: "Tenho quadra", href: "/cadastro#quadra", icon: MapPin, description: "Avaliar minha quadra como polo parceiro." },
  { label: "Quero acompanhar", href: "/cadastro#comunidade", icon: Radio, description: "Receber novidades, bastidores e chamadas." },
] as const;

export const seasonSignals = [
  { label: "Temporada", value: "próximo ciclo em organização" },
  { label: "Ranking", value: "abre com presença e desempenho" },
  { label: "Agenda", value: "oficial após confirmação" },
] as const;

export const journeyEditorial = [
  { step: "01", title: "Você entra no radar", description: "Escolha seu perfil e envie seu cadastro." },
  { step: "02", title: "A equipe UR analisa seu perfil", description: "A entrada acontece com critério para manter organização, equilíbrio e respeito." },
  { step: "03", title: "Você começa pelo caminho certo", description: "UR Play, equipe, ranking, comunidade, parceria ou quadra." },
  { step: "04", title: "Sua participação passa a contar", description: "Presença, desempenho, postura e evolução entram no histórico." },
  { step: "05", title: "Sua história ganha espaço", description: "Ranking, mídia, oportunidades, benefícios e novos desafios." },
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
