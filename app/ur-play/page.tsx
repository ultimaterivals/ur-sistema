import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Journey } from "@/components/site/home/journey";
import { Container, Section, UrButton } from "@/components/site/primitives";
import { cta } from "@/lib/config/site";

export const metadata: Metadata = { title: "UR Play" };

export default function UrPlayPage() {
  return (
    <>
      <PageHero
        eyebrow="Porta de entrada oficial"
        title="Entre pelo UR Play"
        lead="Participe dos jogos, registre presença, seja nivelado e comece a produzir dados que alimentam seu ranking e suas UR Coins. Todo atleta passa pelo UR Play."
      />
      <Journey />
      <Section tone="deep">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="ur-display max-w-2xl text-4xl text-ur-white sm:text-5xl">Sua trajetória começa agora</h2>
          <UrButton href={cta.primary.href} size="lg">{cta.primary.label}</UrButton>
        </Container>
      </Section>
    </>
  );
}
