import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RouteScrollManager } from "@/components/layout/route-scroll-manager";

export const metadata: Metadata = {
  metadataBase: new URL("https://ultimaterivals.org"),
  title: {
    default: "Ultimate Rivals | Temporada 1 — Territórios em Disputa",
    template: "%s | Ultimate Rivals",
  },
  description:
    "UR Temporada 1 — Territórios em Disputa. Atletas pontuam, equipes somam, polos disputam respeito. Quem manda na região?",
  icons: {
    icon: "/brand/logo-ur.png",
    shortcut: "/brand/logo-ur.png",
    apple: "/brand/logo-ur.png",
  },
  openGraph: {
    title: "Ultimate Rivals — Temporada 1",
    description: "Quem manda na região? BH, Betim e Contagem entram na disputa.",
    images: ["/brand/logo-ur.png"],
    locale: "pt_BR",
    siteName: "Ultimate Rivals",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RouteScrollManager />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
