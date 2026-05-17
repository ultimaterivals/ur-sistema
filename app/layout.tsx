import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ultimaterivals.org"),
  title: {
    default: "Ultimate Rivals | Ecossistema esportivo premium",
    template: "%s | Ultimate Rivals",
  },
  description:
    "Ultimate Rivals profissionaliza o esporte amador com ranking, temporadas, equipes, recompensas, mídia, desenvolvimento e oportunidades reais.",
  openGraph: {
    title: "Ultimate Rivals",
    description:
      "Ecossistema esportivo premium para profissionalizar o esporte amador com ranking, temporada, equipes, mídia e recompensas.",
    images: ["/brand/logo-ur.png"],
    locale: "pt_BR",
    siteName: "Ultimate Rivals",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
