import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Patrocinadores" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Parceiros oficiais" title="Existe público aqui" lead="Patrocinadores participam do ecossistema: premiações, benefícios, Market, ativações, experiências e mídia." />
      <Section>
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Premiações</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Benefícios</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">UR Market</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Ativações</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Experiências</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Mídia</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
