import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ultimaterivals.org"),
  title: {
    default: "Ultimate Rivals | Temporada 1 — Polos em Disputa",
    template: "%s | Ultimate Rivals",
  },
  description:
    "Jogue, pontue e defenda seu polo. Entre pelo UR Play, suba no ranking oficial, conquiste UR Coins, dispute premiações e construa seu caminho até o UR Legends.",
  icons: {
    icon: "/brand/logo-ur.png",
    shortcut: "/brand/logo-ur.png",
    apple: "/brand/logo-ur.png",
  },
  openGraph: {
    title: "Ultimate Rivals — Temporada 1 • Polos em Disputa",
    description:
      "Infraestrutura esportiva: ranking, premiações, UR Coins, mídia oficial e UR Legends. Eleve o jogo, supere seus limites.",
    images: ["/brand/logo-ur.png"],
    locale: "pt_BR",
    siteName: "Ultimate Rivals",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${anton.variable} ${barlow.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
