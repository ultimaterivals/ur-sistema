import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { About } from "@/components/site/home/about";

export const metadata: Metadata = { title: "Quem Somos" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Quem Somos" title="Mais do que eventos. Uma infraestrutura esportiva." lead="Conectamos competição, desenvolvimento, mídia, tecnologia, comunidade e oportunidades." />
      <About />
    </>
  );
}
