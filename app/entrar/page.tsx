import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/pages/placeholder-page";

export const metadata: Metadata = {
  title: "Entrar | Ultimate Rivals",
  description: "Acesse sua conta no Ultimate Rivals — entre na plataforma e continue sua jornada no ecossistema.",
};

export default function EntrarPage() {
  return (
    <PlaceholderPage
      cta="Voltar ao início"
      description="Acesse sua conta UR. Se ainda não tem cadastro, crie agora e comece a construir seu histórico no maior ecossistema de esportes amadores do Brasil."
      eyebrow="Acesso"
      status="Autenticação sendo integrada com Supabase Auth"
      title="Bem-vindo de volta."
    />
  );
}
