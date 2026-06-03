import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "UR Legends | Ultimate Rivals",
  description: "O Hall da Fama do Ultimate Rivals — atletas que alcançaram o topo do ranking e são reconhecidos como Legends do ecossistema.",
};

export default function URLegendsPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Legends não se declaram — são reconhecidos. O UR Legends é o topo do ranking histórico, reservado a atletas que acumularam pontuação suficiente para entrar para o Hall da Fama do Ultimate Rivals."
      eyebrow="UR Legends"
      status="Hall da Fama sendo constituído com os primeiros atletas da Temporada 1"
      title="O topo do ranking tem nome."
    />
  );
}
