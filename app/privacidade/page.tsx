import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Privacidade" title="Política de Privacidade" lead="Documento em formação. Esta página será atualizada com o conteúdo oficial antes do lançamento da temporada." />
      <Section>
        <Container className="prose-invert max-w-3xl">
          <p className="text-base leading-7 text-ur-sand/70">
            O conteúdo oficial de Política de Privacidade do Ultimate Rivals será publicado aqui. Em caso de dúvidas,
            entre em contato pelo canal oficial.
          </p>
        </Container>
      </Section>
    </>
  );
}
