import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Premiações | Ultimate Rivals",
  description: "Conheça as premiações do ecossistema Ultimate Rivals — troféus, medalhas, prêmios e reconhecimentos para atletas e equipes destaque.",
};

export default function PremiacoesPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Troféus, medalhas, prêmios em dinheiro e reconhecimento público. As premiações do UR recompensam quem compete com consistência e excelência ao longo da temporada."
      eyebrow="Premiações"
      status="Estrutura de premiação da Temporada 1 sendo finalizada"
      title="Cada conquista tem recompensa."
    />
  );
}
