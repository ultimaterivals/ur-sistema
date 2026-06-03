import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Quem Somos | Ultimate Rivals",
  description: "A história, visão e missão do Ultimate Rivals — o maior ecossistema de esportes amadores com estrutura profissional do Brasil.",
};

export default function QuemSomosPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="O Ultimate Rivals nasceu de uma convicção: o atleta amador merece estrutura, reconhecimento e história. Conheça nossa origem, os fundadores e a visão que move o ecossistema."
      eyebrow="Institucional"
      status="Página institucional completa em produção"
      title="Por que existimos."
    />
  );
}
