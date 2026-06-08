import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Formats } from "@/components/site/home/formats";

export const metadata: Metadata = { title: "Equipes, Duplas e Atletas" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Equipes, Duplas e Atletas" title="Existe espaço para todos" lead="Participe individualmente, em dupla ou em equipe. O sistema foi criado para que ninguém fique de fora." />
      <Formats />
    </>
  );
}
