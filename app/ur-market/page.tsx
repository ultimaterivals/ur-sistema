import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Market } from "@/components/site/home/market";

export const metadata: Metadata = { title: "UR Market" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="UR Market" title="Vitrine premium" lead="Produtos, serviços, experiências e benefícios acessados por UR Coins. Sua participação ganha valor." />
      <Market />
    </>
  );
}
