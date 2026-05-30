export const mainNavigation = [
  { label: "Começar", href: "/" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Temporada", href: "/temporada" },
  { label: "Ecossistema", href: "/ecossistema" },
  { label: "Ranking", href: "/ranking" },
  { label: "Regulamento", href: "/regulamento" },
  { label: "Cadastro", href: "/cadastro" },
] as const;

export const mobileNavigationGroups = [
  {
    label: "Começar",
    items: [
      { label: "Home", href: "/" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Cadastro", href: "/cadastro" },
    ],
  },
  {
    label: "Temporada",
    items: [
      { label: "Temporada 1", href: "/temporada" },
      { label: "Eventos", href: "/eventos" },
      { label: "Polos", href: "/temporada#polos" },
      { label: "Legends", href: "/temporada#legends" },
    ],
  },
  {
    label: "Ecossistema",
    items: [
      { label: "Visão geral", href: "/ecossistema" },
      { label: "Atletas", href: "/atletas" },
      { label: "Equipes", href: "/equipes" },
      { label: "Quadras", href: "/quadras-parceiras" },
    ],
  },
  {
    label: "Ranking",
    items: [
      { label: "Ranking", href: "/ranking" },
      { label: "Regulamento", href: "/regulamento" },
    ],
  },
  {
    label: "Benefícios",
    items: [
      { label: "UR Market", href: "/ur-market" },
      { label: "Patrocinadores", href: "/patrocinadores" },
    ],
  },
] as const;

export const mobileNavigation = [
  { label: "Começar", href: "/" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Temporada", href: "/temporada" },
  { label: "Ecossistema", href: "/ecossistema" },
  { label: "Ranking", href: "/ranking" },
  { label: "Regulamento", href: "/regulamento" },
  { label: "Cadastro", href: "/cadastro" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Eventos", href: "/eventos" },
  { label: "Atletas", href: "/atletas" },
  { label: "Equipes", href: "/equipes" },
  { label: "Patrocinadores", href: "/patrocinadores" },
  { label: "Quadras Parceiras", href: "/quadras-parceiras" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerColumns = [
  {
    title: "Temporada",
    links: [
      { label: "Polos em Disputa", href: "/temporada" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Eventos", href: "/eventos" },
      { label: "UR Legends", href: "/temporada#legends" },
    ],
  },
  {
    title: "Participar",
    links: [
      { label: "Cadastro UR", href: "/cadastro" },
      { label: "Cadastro de atleta", href: "/cadastro#atleta" },
      { label: "Cadastrar equipe", href: "/cadastro#equipe" },
      { label: "Regulamento", href: "/regulamento" },
    ],
  },
  {
    title: "Rankings e benefícios",
    links: [
      { label: "Ranking dos Atletas", href: "/ranking" },
      { label: "Ranking das Equipes", href: "/ranking" },
      { label: "Ranking dos Polos", href: "/ranking" },
      { label: "UR Market", href: "/ur-market" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Ecossistema", href: "/ecossistema" },
      { label: "Mídia UR", href: "/midia" },
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "Quadras parceiras", href: "/quadras-parceiras" },
    ],
  },
] as const;
