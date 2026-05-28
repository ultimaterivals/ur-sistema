export const mainNavigation = [
  { label: "Temporada", href: "/temporada" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Ranking", href: "/ranking" },
  { label: "Eventos", href: "/eventos" },
  { label: "Atletas", href: "/atletas" },
  { label: "Equipes", href: "/equipes" },
  { label: "Mídia", href: "/midia" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Patrocinadores", href: "/patrocinadores" },
  { label: "Quadras", href: "/quadras-parceiras" },
] as const;

export const mobileNavigationGroups = [
  {
    label: "Começar",
    items: [
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Cadastro", href: "/cadastro" },
    ],
  },
  {
    label: "Temporada",
    items: [
      { label: "Modalidades", href: "/#modalidades" },
      { label: "Polos", href: "/#polos" },
      { label: "Eventos", href: "/eventos" },
      { label: "Ranking", href: "/ranking" },
      { label: "Equipes", href: "/equipes" },
    ],
  },
  {
    label: "Evolução",
    items: [
      { label: "Atletas", href: "/atletas" },
      { label: "CT UR", href: "/ct-ur" },
      { label: "Mídia", href: "/midia" },
    ],
  },
  {
    label: "Benefícios",
    items: [
      { label: "UR Market", href: "/ur-market" },
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "Quadras", href: "/quadras-parceiras" },
    ],
  },
  {
    label: "Apoio",
    items: [
      { label: "Regulamento", href: "/regulamento" },
      { label: "Ecossistema", href: "/ecossistema" },
    ],
  },
] as const;

export const mobileNavigation = [
  { label: "Temporada", href: "/temporada" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Cadastro", href: "/cadastro" },
  { label: "Atletas", href: "/atletas" },
  { label: "Equipes", href: "/equipes" },
  { label: "Ranking", href: "/ranking" },
  { label: "Eventos", href: "/eventos" },
  { label: "Mídia", href: "/midia" },
  { label: "CT UR", href: "/ct-ur" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Recompensas", href: "/#recompensas" },
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
      { label: "Temporada", href: "/temporada" },
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "Ranking", href: "/ranking" },
      { label: "Regulamento", href: "/regulamento" },
    ],
  },
  {
    title: "Participar",
    links: [
      { label: "UR Play", href: "/ur-play" },
      { label: "Cadastro UR", href: "/cadastro" },
      { label: "Atletas", href: "/atletas" },
      { label: "Equipes", href: "/equipes" },
      { label: "Cadastro de atleta", href: "/cadastro#atleta" },
    ],
  },
  {
    title: "Negócios",
    links: [
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "Quadras parceiras", href: "/quadras-parceiras" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Contato comercial", href: "/contato" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "Mídia UR", href: "/midia" },
      { label: "Ecossistema", href: "/ecossistema" },
      { label: "WhatsApp", href: "/cadastro#comunidade" },
      { label: "Privacidade", href: "/privacidade" },
    ],
  },
] as const;
