/**
 * Site-level config: brand, season, navigation, CTAs, ticker.
 * Edit here — never inside components.
 */

export const site = {
  name: "Ultimate Rivals",
  short: "UR",
  tagline: "Eleve o jogo, supere seus limites",
  logo: "/brand/logo-ur.png",
  logo3d: "/brand/logo-ur-3d.png",
} as const;

export const season = {
  label: "Temporada 1",
  subtitle: "Polos em Disputa",
  status: "ABERTA",
  poles: ["BH", "Betim", "Contagem", "Nova Lima"],
} as const;

export const cta = {
  primary: { label: "Entrar no UR Play", href: "/ur-play" },
  secondary: { label: "Como funciona a temporada", href: "/temporada" },
  regulamento: { label: "Ver regulamento", href: "/regulamento" },
} as const;

export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: "Temporada", href: "/temporada" },
  { label: "Ranking", href: "/ranking" },
  { label: "Premiações", href: "/premiacoes" },
  { label: "UR Market", href: "/ur-market" },
  { label: "Polos", href: "/polos" },
  { label: "Mídia", href: "/midia" },
  { label: "Hunter", href: "/hunter" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Competição",
    links: [
      { label: "Ranking Oficial", href: "/ranking" },
      { label: "Temporada", href: "/temporada" },
      { label: "Premiações", href: "/premiacoes" },
      { label: "UR Legends", href: "/legends" },
      { label: "Regulamento", href: "/regulamento" },
    ],
  },
  {
    title: "Ecossistema",
    links: [
      { label: "UR Play", href: "/ur-play" },
      { label: "UR Market", href: "/ur-market" },
      { label: "Polos", href: "/polos" },
      { label: "Equipes e Duplas", href: "/equipes" },
      { label: "Hunter Program", href: "/hunter" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { label: "Mídia Oficial", href: "/midia" },
      { label: "Blog", href: "/blog" },
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "Patrocinadores", href: "/patrocinadores" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

/** Continuous sports ticker shown under the hero. */
export const ticker: string[] = [
  "UR PLAY",
  "BETIM • 42 ATLETAS",
  "RANKING ATUALIZADO",
  "PREMIAÇÃO CONFIRMADA",
  "POLOS EM DISPUTA",
  "BH LIDERA A SEMANA",
  "TEMPORADA 1 ABERTA",
  "UR LEGENDS EM FORMAÇÃO",
  "CONTAGEM • NOVO EVENTO",
];
