import type { Metadata } from "next";
import { robotoSlab } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "EnfinVous — Le Cercle des Passions Retrouvées",
    template: "%s | EnfinVous",
  },
  description:
    "Les rendez-vous du savoir en visioconférence et ateliers en présentiel pour vivre vos passions. Rejoignez le cercle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${robotoSlab.variable} antialiased`}>
      <head>
        {/* Sans JavaScript, l'IntersectionObserver ne tournera jamais : on
            neutralise alors l'état caché des révélations au scroll pour que tout
            le contenu reste visible (aucune section ni carte invisible). Inerte
            quand le JS est actif — donc aucun décalage d'hydratation. */}
        <noscript>
          <style>{`.reveal-init,.reveal-stagger>*{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
