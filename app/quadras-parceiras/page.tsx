import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Quadras Parceiras" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Para quadras" title="Transforme sua quadra em polo" lead="Receba eventos oficiais e faça parte da expansão. Cada quadra é base física da comunidade." />
      <Section>
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Eventos oficiais</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Fotos e mídia</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Atletas e polo</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Parceiros</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Indicadores</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Responsável</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
