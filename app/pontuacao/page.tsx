import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Sistema de Pontuação | Ultimate Rivals",
  description: "Entenda como funciona o sistema de pontuação do Ultimate Rivals — pontos por presença, vitória, campeonato e multiplicadores por nível.",
};

export default function PontuacaoPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Cada presença vale. Cada vitória pesa. Cada campeonato marca história. O sistema de pontuação do UR recompensa consistência, performance e dedicação com multiplicadores por nível competitivo."
      eyebrow="Pontuação"
      status="Tabela completa de pontuação e multiplicadores em preparação"
      title="Toda ação tem peso no ranking."
    />
  );
}
