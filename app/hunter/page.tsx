import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Metodologia Hunter | Ultimate Rivals",
  description:
    "Hunter não é olheiro. É mentalidade. Conheça a metodologia de desenvolvimento do Ultimate Rivals.",
};

export default function HunterPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Hunter não é olheiro. É mentalidade. A Metodologia Hunter orienta o desenvolvimento de atletas e equipes dentro do ecossistema Ultimate Rivals — com critério, direção e evolução contínua."
      eyebrow="Metodologia"
      status="Conteúdo em preparação"
      title="Hunter não é olheiro. É mentalidade."
    />
  );
}
