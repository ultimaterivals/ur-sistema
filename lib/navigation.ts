export const mainNavigation = [
  { label: "Atletas", href: "/atletas" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Ranking", href: "/ranking" },
  { label: "Equipes", href: "/equipes" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Patrocinadores", href: "/patrocinadores" },
] as const;

export const mobileNavigation = [
  { label: "Atletas", href: "/atletas" },
  { label: "Sou atleta", href: "/cadastro#atleta" },
  { label: "Tenho equipe", href: "/cadastro#equipe" },
  { label: "Quero patrocinar", href: "/cadastro#patrocinador" },
  { label: "Tenho quadra", href: "/cadastro#quadra" },
  { label: "Ver ranking", href: "/ranking" },
  { label: "Eventos", href: "/eventos" },
  { label: "UR Market", href: "/ur-market" },
] as const;

export const footerColumns = [
  {
    title: "Ultimate Rivals",
    links: [
      { label: "O Ecossistema", href: "/#ecossistema" },
      { label: "Manifesto", href: "/#comunidade" },
      { label: "Temporada", href: "/temporada" },
      { label: "Ranking", href: "/ranking" },
      { label: "Mídia", href: "/#midia" },
    ],
  },
  {
    title: "Participar",
    links: [
      { label: "Cadastro UR", href: "/cadastro" },
      { label: "Atletas", href: "/atletas" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Cadastro de atleta", href: "/cadastro#atleta" },
      { label: "Cadastro de equipe", href: "/cadastro#equipe" },
      { label: "Eventos", href: "/eventos" },
    ],
  },
  {
    title: "Negócios",
    links: [
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Quadras parceiras", href: "/cadastro#quadra" },
      { label: "Mídia Kit", href: "/patrocinadores" },
      { label: "Contato comercial", href: "/cadastro#patrocinador" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Instagram", href: "/cadastro#comunidade" },
      { label: "YouTube", href: "/#midia" },
      { label: "WhatsApp", href: "/cadastro#whatsapp" },
      { label: "Blog", href: "/#midia" },
      { label: "Ranking", href: "/ranking" },
    ],
  },
] as const;
