import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "UR Coins | Ultimate Rivals",
  description: "UR Coins é a moeda interna do ecossistema Ultimate Rivals — acumule, troque e desbloqueie vantagens no UR Market e no UR Play.",
};

export default function URCoinsPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="UR Coins é a moeda interna do ecossistema. Você ganha ao jogar, vencer e participar de eventos. Use no UR Market, em vantagens exclusivas e em benefícios dentro da plataforma."
      eyebrow="UR Coins"
      status="Sistema de moedas sendo integrado com UR Play e UR Market"
      title="Jogue. Acumule. Troque."
    />
  );
}
