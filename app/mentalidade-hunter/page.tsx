import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Mentalidade Hunter | Ultimate Rivals",
  description: "A Mentalidade Hunter é o código de conduta e desenvolvimento do atleta Ultimate Rivals — foco, presença, evolução e responsabilidade.",
};

export default function MentalidadeHunterPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Hunter não é um título — é uma mentalidade. Foco em evolução, presença consistente, responsabilidade com o jogo e com os companheiros. Conheça os pilares que orientam o atleta UR."
      eyebrow="Mentalidade Hunter"
      status="Conteúdo editorial sendo desenvolvido"
      title="Hunter é quem aparece quando importa."
    />
  );
}
