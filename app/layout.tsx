import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETS — Traduction certifiée, formation en langues et interprétariat à Abidjan",
  description: "English and Translation Services (ETS) — Cabinet de langues à Abidjan. Formation, traduction certifiée, interprétariat et séjours linguistiques. Experts assermentés, validité officielle.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "ETS — Traduction certifiée, formation en langues et interprétariat à Abidjan",
    description: "Votre partenaire stratégique pour briser la barrière de la langue. Formation, traduction et interprétariat par des experts certifiés à Abidjan.",
    url: "https://rosby17.github.io/ets-website/",
    locale: "fr_FR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased text-text-dark bg-white">
        {children}
      </body>
    </html>
  );
}
