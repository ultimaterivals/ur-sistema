/**
 * Ranking data — athlete leaderboard.
 * Placeholder season data (no real athletes invented as official results).
 * Structure mirrors the future platform: photo, name, pole, level, points,
 * coins, weekly variation, sparkline of evolution.
 */
import { portrait } from "./images";

export type Level = "N1" | "N2" | "N3";

export type RankedAthlete = {
  position: number;
  name: string;
  pole: string;
  level: Level;
  points: number;
  coins: number;
  variation: number; // positions gained/lost this week
  photo: string;
  spark: number[];
};

export const ranking: RankedAthlete[] = [
  { position: 1, name: "Atleta 01", pole: "Betim", level: "N3", points: 4820, coins: 1240, variation: 2, photo: portrait(11), spark: [12, 18, 22, 30, 41, 48] },
  { position: 2, name: "Atleta 02", pole: "BH", level: "N3", points: 4655, coins: 1180, variation: 1, photo: portrait(7), spark: [20, 24, 27, 33, 40, 46] },
  { position: 3, name: "Atleta 03", pole: "Contagem", level: "N3", points: 4510, coins: 1095, variation: -1, photo: portrait(9), spark: [30, 33, 36, 38, 42, 45] },
  { position: 4, name: "Atleta 04", pole: "BH", level: "N2", points: 4190, coins: 980, variation: 3, photo: portrait(1), spark: [10, 16, 20, 28, 35, 41] },
  { position: 5, name: "Atleta 05", pole: "Nova Lima", level: "N2", points: 3980, coins: 905, variation: 0, photo: portrait(2), spark: [22, 25, 28, 31, 36, 39] },
  { position: 6, name: "Atleta 06", pole: "Betim", level: "N2", points: 3720, coins: 860, variation: 2, photo: portrait(4), spark: [14, 19, 23, 27, 32, 37] },
  { position: 7, name: "Atleta 07", pole: "Contagem", level: "N1", points: 3410, coins: 770, variation: -2, photo: portrait(5), spark: [26, 28, 27, 30, 32, 34] },
  { position: 8, name: "Atleta 08", pole: "BH", level: "N1", points: 3180, coins: 720, variation: 1, photo: portrait(13), spark: [12, 15, 19, 22, 28, 31] },
];

/** Pole standings (regional dispute). */
export const poleStandings = [
  { pole: "Betim", points: 18420, athletes: 42, variation: 1 },
  { pole: "BH", points: 17980, athletes: 51, variation: -1 },
  { pole: "Contagem", points: 15210, athletes: 33, variation: 2 },
  { pole: "Nova Lima", points: 11640, athletes: 24, variation: 0 },
];
