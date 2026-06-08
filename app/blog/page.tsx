import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Blog } from "@/components/site/home/blog";

export const metadata: Metadata = { title: "Blog Oficial" };

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog oficial"
        title="Acompanhe a história sendo escrita"
        lead="Resultados, bastidores, entrevistas, conteúdos educativos e notícias da temporada. Tudo em um só lugar."
      />
      <Blog />
    </>
  );
}
