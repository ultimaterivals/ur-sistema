import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Blog | Ultimate Rivals",
  description:
    "Vôlei de areia, futevôlei e beach tennis — técnica, estratégia, desenvolvimento e comunidade no blog do Ultimate Rivals.",
};

export default function BlogPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Vôlei de areia, futevôlei e beach tennis — técnica, estratégia, desenvolvimento e comunidade. O blog do Ultimate Rivals é um espaço de conteúdo para atletas e parceiros da temporada."
      eyebrow="Blog Ultimate Rivals"
      status="Conteúdo em preparação"
      title="Conteúdo que evolui com a temporada."
    />
  );
}
