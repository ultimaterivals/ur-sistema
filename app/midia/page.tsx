import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Media } from "@/components/site/home/media";

export const metadata: Metadata = { title: "Mídia Oficial" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Mídia Oficial" title="Canal da temporada" lead="Entrevistas, bastidores, coberturas, rankings e transmissões. Se ninguém vê, ninguém lembra." />
      <Media />
    </>
  );
}
