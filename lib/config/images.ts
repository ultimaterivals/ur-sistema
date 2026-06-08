/**
 * Image manifest — central source of truth for photography.
 * Real athlete photos (Design Bible: "Fotos reais sempre vencem ilustrações").
 * Components must reference images through this config, never hardcoded paths.
 */

const BASE = "/images/athletes";

/** Landscape 1920x1280 — hero, banners, media tiles. */
export const wide = (n: number) => `${BASE}/ur-${String(n).padStart(2, "0")}.webp`;
/** Portrait 720x900 — ranking, athlete cards. */
export const portrait = (n: number) => `${BASE}/ur-${String(n).padStart(2, "0")}-p.webp`;

export const PHOTO_COUNT = 16;

export const images = {
  heroPrimary: wide(11),
  heroPanel: wide(6),
  finalCta: wide(15),
  hunter: wide(3),
  about: wide(8),
  media: [wide(1), wide(2), wide(4), wide(5), wide(7), wide(9)],
  blog: [wide(10), wide(12), wide(13), wide(14)],
  poles: [wide(2), wide(4), wide(16)],
  levels: [portrait(7), portrait(9), portrait(11)],
} as const;
