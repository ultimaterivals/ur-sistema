import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Ranking } from "@/components/site/home/ranking";

export const metadata: Metadata = { title: "Ranking Oficial" };

export default function RankingPage() {
  return (
    <>
      <PageHero
        eyebrow="Ranking oficial"
        title="Seu ranking é sua temporada registrada"
        lead="Posição, pontos, UR Coins e evolução de cada atleta ao longo da temporada. Top 3 em destaque, histórico individual e disputa por polo."
      />
      <Ranking />
    </>
  );
}
