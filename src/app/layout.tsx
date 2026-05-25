import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "EnfinVous — Le Cercle des Passions Retrouvees",
    template: "%s | EnfinVous",
  },
  description:
    "Masterclasses en visioconference et rencontres en presentiel pour vivre vos passions. Rejoignez le cercle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
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
