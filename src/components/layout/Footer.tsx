import { Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/rendez-vous-du-savoir", label: "Les rendez-vous du savoir" },
  { href: "/rendez-vous", label: "Ateliers" },
  { href: "/fenetres-sur-le-monde", label: "Fenêtres sur le monde" },
  { href: "/devenir-expert", label: "Vous êtes un professionnel ?" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgu", label: "CGU" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="bg-beige pt-16 pb-8">
      <Container>
        <Separator className="mb-12 bg-gold" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-serif text-2xl font-medium">
              Vivre·Enfin
            </Link>
            <p className="mt-3 font-serif text-base italic text-muted-foreground">
              Apprendre, Partager, Échanger, Découvrir.
            </p>
          </div>

          <div>
            <p className="mb-4 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Découvrir
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-base text-foreground/80 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Informations
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-base text-foreground/80 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Assistance
            </p>
            <a
              href="tel:+33100000000"
              className="inline-flex items-center gap-2 font-sans text-base text-foreground/80 transition-colors hover:text-terracotta"
            >
              <Phone className="size-4" />
              01 00 00 00 00
            </a>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Du lundi au vendredi, 9h-18h
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-foreground/10" />

        <p className="text-center font-sans text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} VivreEnfin. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
}
