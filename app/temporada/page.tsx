import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Journey } from "@/components/site/home/journey";
import { Levels } from "@/components/site/home/levels";
import { Scoring } from "@/components/site/home/scoring";

export const metadata: Metadata = { title: "Temporada 1" };

export default function TemporadaPage() {
  return (
    <>
      <PageHero
        eyebrow="Temporada 1 • Polos em Disputa"
        title="Sua jornada na temporada"
        lead="O sistema foi criado para qualquer atleta entrar e evoluir: UR Play, pontos, UR Coins e a disputa pelo UR Legends."
      />
      <Journey />
      <Levels />
      <Scoring />
    </>
  );
}
