import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Poles } from "@/components/site/home/poles";

export const metadata: Metadata = { title: "Polos em Disputa" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Polos em Disputa" title="Defenda seu polo" lead="Cada polo tem atletas, eventos e identidade própria. Represente sua região e fortaleça sua quadra." />
      <Poles />
    </>
  );
}
