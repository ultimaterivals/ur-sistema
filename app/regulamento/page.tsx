import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Scoring } from "@/components/site/home/scoring";

export const metadata: Metadata = { title: "Regulamento" };

export default function RegulamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Regulamento"
        title="Como você soma pontos"
        lead="A tabela oficial de pontuação e UR Coins por ação. Os valores oficiais são divulgados no regulamento de cada temporada."
      />
      <Scoring />
    </>
  );
}
