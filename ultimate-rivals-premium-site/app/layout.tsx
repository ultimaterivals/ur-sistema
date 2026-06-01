import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ultimate Rivals — Temporada 1",
  description: "Ecossistema esportivo para organizar, profissionalizar e valorizar o esporte amador. UR Play, UR Sprint, UR Series e UR Legends em Belo Horizonte, Betim e Contagem.",
  keywords: ["beach volleyball", "futevôlei", "beach tennis", "UR Play", "Ultimate Rivals", "esporte amador", "ranking"],
  openGraph: {
    title: "Ultimate Rivals — Temporada 1",
    description: "Entre pelo UR Play, jogue no seu nível, construa ranking e represente seu polo.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-ur-black text-ur-white font-body antialiased">
        <Header />
        <main id="main-content" className="min-h-dvh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
