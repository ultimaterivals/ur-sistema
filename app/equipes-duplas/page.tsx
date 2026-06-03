import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Equipes e Duplas | Ultimate Rivals",
  description: "Forme equipes e duplas no Ultimate Rivals — compete em formações, acumule pontos coletivos e represente seu polo.",
};

export default function EquipesDuplasPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="No UR você não compete sozinho. Forme duplas, monte equipes e represente seu polo nas disputas coletivas. Pontos individuais e coletivos constroem o ranking de formações."
      eyebrow="Equipes e Duplas"
      status="Sistema de formações sendo integrado com UR Play"
      title="A força do time também é sua."
    />
  );
}
