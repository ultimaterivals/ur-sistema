import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://ultimaterivals.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ultimate Rivals — Temporada 1",
    template: "%s · Ultimate Rivals",
  },
  description:
    "Ecossistema competitivo de esportes de praia em Minas Gerais. Entre pelo UR Play, construa ranking, represente seu polo e viva a Temporada 1 em Belo Horizonte, Betim e Contagem.",
  keywords: [
    "beach volleyball",
    "futevôlei",
    "beach tennis",
    "UR Play",
    "Ultimate Rivals",
    "esporte amador",
    "ranking esportivo",
    "Belo Horizonte",
    "Betim",
    "Contagem",
    "temporada esportiva",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ultimate Rivals",
    title: "Ultimate Rivals — Temporada 1",
    description:
      "Entre pelo UR Play, jogue no seu nível, construa ranking e represente seu polo. Ecossistema de esportes de praia em BH, Betim e Contagem.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ultimate Rivals — Temporada 1",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Rivals — Temporada 1",
    description:
      "Ecossistema competitivo de esportes de praia. UR Play · UR Sprint · UR Series · UR Legends.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" style={{backgroundColor: "#0A0A0B"}}>
      <body className="bg-ur-black text-ur-white font-body antialiased" style={{backgroundColor: "#0A0A0B"}}>
        <Header />
        <main id="main-content" className="min-h-dvh" style={{backgroundColor: "#0A0A0B"}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
