export const mainNavigation = [
  { label: "Começar", href: "/#hero" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Temporada", href: "/temporada" },
  { label: "Ranking", href: "/ranking" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Mídia", href: "/midia" },
] as const;

export const mobileNavigationGroups = [
  {
    label: "Principal",
    items: [
      { label: "Começar", href: "/" },
      { label: "UR Play", href: "/ur-play" },
      { label: "Temporada", href: "/temporada" },
      { label: "Ranking", href: "/ranking" },
      { label: "Entrar", href: "/cadastro" },
    ],
  },
  {
    label: "Explorar",
    items: [
      { label: "Ecossistema", href: "/ecossistema" },
      { label: "Atletas", href: "/atletas" },
      { label: "Equipes e Duplas", href: "/equipes" },
      { label: "Polos e Quadras", href: "/quadras-parceiras" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Mídia", href: "/midia" },
    ],
  },
  {
    label: "Institucional",
    items: [
      { label: "Metodologia Hunter", href: "/hunter" },
      { label: "Blog", href: "/blog" },
      { label: "Regulamento", href: "/regulamento" },
      { label: "Cadastro", href: "/cadastro" },
      { label: "Patrocinadores", href: "/patrocinadores" },
    ],
  },
] as const;

export const mobileNavigation = [
  { label: "Começar", href: "/" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Temporada", href: "/temporada" },
  { label: "Ranking", href: "/ranking" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Mídia", href: "/midia" },
  { label: "Ecossistema", href: "/ecossistema" },
  { label: "Atletas", href: "/atletas" },
  { label: "Equipes", href: "/equipes" },
  { label: "Patrocinadores", href: "/patrocinadores" },
  { label: "Quadras Parceiras", href: "/quadras-parceiras" },
  { label: "Regulamento", href: "/regulamento" },
  { label: "Cadastro", href: "/cadastro" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerColumns = [
  {
    title: "Jornada",
    links: [
      { label: "UR Play", href: "/ur-play" },
      { label: "UR Sprint", href: "/temporada" },
      { label: "UR Series", href: "/temporada" },
      { label: "UR Legends", href: "/temporada#legends" },
    ],
  },
  {
    title: "Ecossistema",
    links: [
      { label: "Cadastro UR", href: "/cadastro" },
      { label: "Atletas", href: "/atletas" },
      { label: "Equipes e Duplas", href: "/equipes" },
      { label: "Polos e Quadras", href: "/quadras-parceiras" },
    ],
  },
  {
    title: "Ranking e Market",
    links: [
      { label: "Ranking dos Atletas", href: "/ranking" },
      { label: "Ranking das Equipes", href: "/ranking" },
      { label: "Ranking dos Polos", href: "/ranking" },
      { label: "UR Market", href: "/ur-market" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Metodologia Hunter", href: "/hunter" },
      { label: "Blog", href: "/blog" },
      { label: "Regulamento", href: "/regulamento" },
      { label: "Patrocinadores", href: "/patrocinadores" },
    ],
  },
] as const;
