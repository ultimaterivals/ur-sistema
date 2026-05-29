export const mainNavigation = [
  { label: "Começar", href: "/#como-funciona" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Temporada", href: "/#temporada" },
  { label: "Polos", href: "/#polos" },
  { label: "Ranking", href: "/#rankings" },
  { label: "Legends", href: "/#legends" },
  { label: "Regulamento", href: "/regulamento" },
  { label: "Cadastro", href: "/cadastro" },
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
      { label: "UR Sprint", href: "/#ur-sprint" },
      { label: "Regional", href: "/#regional" },
      { label: "Legends", href: "/#legends" },
    ],
  },
  {
    label: "Ranking",
    items: [
      { label: "Atletas", href: "/#ranking-atletas" },
      { label: "Equipes", href: "/#ranking-equipes" },
      { label: "Polos", href: "/#ranking-polos" },
    ],
  },
  {
    label: "Benefícios",
    items: [
      { label: "Recompensas", href: "/#recompensas" },
      { label: "UR Market", href: "/#ur-market" },
      { label: "Parceiros", href: "/patrocinadores" },
    ],
  },
  {
    label: "Apoio",
    items: [
      { label: "Regulamento", href: "/regulamento" },
      { label: "Ecossistema", href: "/ecossistema" },
      { label: "Quadras", href: "/quadras-parceiras" },
    ],
  },
] as const;

export const mobileNavigation = [
  { label: "Começar", href: "/#como-funciona" },
  { label: "UR Play", href: "/ur-play" },
  { label: "Temporada", href: "/#temporada" },
  { label: "Polos", href: "/#polos" },
  { label: "Ranking", href: "/#rankings" },
  { label: "Legends", href: "/#legends" },
  { label: "Regulamento", href: "/regulamento" },
  { label: "Cadastro", href: "/cadastro" },
  { label: "Recompensas", href: "/#recompensas" },
  { label: "UR Market", href: "/#ur-market" },
  { label: "Patrocinadores", href: "/patrocinadores" },
  { label: "Quadras Parceiras", href: "/quadras-parceiras" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerColumns = [
  {
    title: "Temporada",
    links: [
      { label: "Polos em Disputa", href: "/" },
      { label: "UR Play", href: "/ur-play" },
      { label: "UR Sprint", href: "/#ur-sprint" },
      { label: "UR Legends", href: "/#legends" },
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
      { label: "Ranking dos Atletas", href: "/#ranking-atletas" },
      { label: "Ranking das Equipes", href: "/#ranking-equipes" },
      { label: "Ranking dos Polos", href: "/#ranking-polos" },
      { label: "UR Market", href: "/#ur-market" },
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
