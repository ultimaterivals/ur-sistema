import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Awards } from "@/components/site/home/awards";

export const metadata: Metadata = { title: "Premiações" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Premiações" title="Premiações e Repasses" lead="A temporada premia resultados — premiações, repasses, benefícios e UR Coins definidos para cada competição." />
      <Awards />
    </>
  );
}
