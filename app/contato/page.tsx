import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Contato" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Fale com a gente" title="Vamos conversar" lead="Atletas, quadras, parceiros e imprensa: entre em contato com o time Ultimate Rivals." />
      <Section>
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Atletas</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Quadras</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Patrocinadores</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Imprensa</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Comunidade</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Suporte</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
