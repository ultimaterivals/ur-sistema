import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Cadastro" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Comece agora" title="Entre para a temporada" lead="Você pode participar individualmente, em dupla ou em equipe. Mesmo sozinho, sua trajetória começa." />
      <Section>
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Atleta individual</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Dupla</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Equipe</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Quadra parceira</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Patrocinador</li>
        <li className="ur-card rounded-2xl p-5 ur-condensed text-base font-medium text-ur-white">Comunidade</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
