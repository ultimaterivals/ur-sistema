import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Polos UR | Ultimate Rivals",
  description: "Os Polos UR são as sedes regionais do ecossistema Ultimate Rivals — quadras parceiras, eventos locais e comunidades ativas.",
};

export default function PolosPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Os Polos UR são centros de atividade regional do ecossistema — com quadras parceiras, calendário de eventos locais, comunidades ativas e representatividade no ranking coletivo."
      eyebrow="Polos UR"
      status="Mapa de polos e detalhes regionais em preparação"
      title="O UR perto de você."
    />
  );
}
