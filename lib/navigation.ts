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
  { label: "Sou atleta", href: "/ur-play" },
  { label: "Tenho equipe", href: "/equipes" },
  { label: "Quero patrocinar", href: "/patrocinadores" },
  { label: "Tenho quadra", href: "/#quadras" },
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
      { label: "Atletas", href: "/atletas" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Cadastro de atleta", href: "/atletas" },
      { label: "Cadastro de equipe", href: "/equipes" },
      { label: "Eventos", href: "/eventos" },
      { label: "CT UR", href: "/#ct-ur" },
    ],
  },
  {
    title: "Negócios",
    links: [
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Quadras parceiras", href: "/#quadras" },
      { label: "Mídia Kit", href: "/patrocinadores" },
      { label: "Contato comercial", href: "/patrocinadores" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Instagram", href: "/#comunidade" },
      { label: "YouTube", href: "/#midia" },
      { label: "WhatsApp", href: "/#comunidade" },
      { label: "Blog", href: "/#midia" },
      { label: "Ranking", href: "/ranking" },
    ],
  },
] as const;
