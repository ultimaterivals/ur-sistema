export const mainNavigation = [
  { label: "Temporada", href: "/temporada" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Ranking", href: "/ranking" },
  { label: "Eventos", href: "/eventos" },
  { label: "Mídia", href: "/midia" },
  { label: "Atletas", href: "/atletas" },
  { label: "Equipes", href: "/equipes" },
] as const;

export const mobileNavigationGroups = [
  {
    label: "Participar",
    items: [
      { label: "Temporada", href: "/temporada" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Atletas", href: "/atletas" },
      { label: "Cadastro", href: "/cadastro" },
    ],
  },
  {
    label: "Competir",
    items: [
      { label: "Ranking", href: "/ranking" },
      { label: "Eventos", href: "/eventos" },
      { label: "Equipes", href: "/equipes" },
      { label: "Mídia", href: "/midia" },
      { label: "CT UR", href: "/ct-ur" },
    ],
  },
  {
    label: "Benefícios",
    items: [
      { label: "UR Market", href: "/ur-market" },
      { label: "Recompensas", href: "/#recompensas" },
      { label: "Premiações", href: "/#premiacoes" },
      { label: "Regulamento", href: "/regulamento" },
    ],
  },
  {
    label: "Parcerias",
    items: [
      { label: "Ecossistema", href: "/ecossistema" },
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "Quadras Parceiras", href: "/quadras-parceiras" },
      { label: "Contato", href: "/contato" },
    ],
  },
] as const;

export const mobileNavigation = [
  { label: "Temporada", href: "/temporada" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Atletas", href: "/atletas" },
  { label: "Cadastro", href: "/cadastro" },
  { label: "Ranking", href: "/ranking" },
  { label: "Eventos", href: "/eventos" },
  { label: "Equipes", href: "/equipes" },
  { label: "Mídia", href: "/midia" },
  { label: "CT UR", href: "/ct-ur" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Recompensas", href: "/#recompensas" },
  { label: "Premiações", href: "/#premiacoes" },
  { label: "Regulamento", href: "/regulamento" },
  { label: "Ecossistema", href: "/ecossistema" },
  { label: "Patrocinadores", href: "/patrocinadores" },
  { label: "Quadras Parceiras", href: "/quadras-parceiras" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerColumns = [
  {
    title: "Ultimate Rivals",
    links: [
      { label: "O Ecossistema", href: "/ecossistema" },
      { label: "Temporada", href: "/temporada" },
      { label: "Ranking", href: "/ranking" },
      { label: "CT UR", href: "/ct-ur" },
      { label: "Mídia", href: "/midia" },
      { label: "Regulamento", href: "/regulamento" },
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
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Negócios",
    links: [
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Quadras parceiras", href: "/quadras-parceiras" },
      { label: "Mídia Kit", href: "/patrocinadores" },
      { label: "Contato comercial", href: "/contato" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Instagram", href: "/cadastro#comunidade" },
      { label: "Mídia UR", href: "/midia" },
      { label: "WhatsApp", href: "/cadastro#comunidade" },
      { label: "Quadras parceiras", href: "/quadras-parceiras" },
      { label: "Ranking", href: "/ranking" },
      { label: "Privacidade", href: "/privacidade" },
    ],
  },
] as const;
