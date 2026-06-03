import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Visão 10 Anos | Ultimate Rivals",
  description: "A visão de longo prazo do Ultimate Rivals — construindo o maior ecossistema de esportes amadores com estrutura profissional do Brasil.",
};

export default function Visao10AnosPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="O Ultimate Rivals foi construído para durar. Nossa visão de 10 anos é transformar o esporte amador brasileiro com tecnologia, comunidade e estrutura profissional acessível a todos."
      eyebrow="Visão de Futuro"
      status="Manifesto e roadmap de longo prazo em preparação"
      title="Construindo o maior ecossistema esportivo do Brasil."
    />
  );
}
