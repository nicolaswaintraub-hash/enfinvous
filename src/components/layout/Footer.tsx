import { Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/masterclasses-visio", label: "Masterclass Visio" },
  { href: "/rendez-vous", label: "Rendez-vous" },
  { href: "/planning", label: "Planning" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions legales" },
  { href: "/cgu", label: "CGU" },
  { href: "/confidentialite", label: "Confidentialite" },
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
              Enfin·Vous
            </Link>
            <p className="mt-3 font-serif text-base italic text-muted-foreground">
              Le cercle des passions retrouvees.
            </p>
          </div>

          <div>
            <p className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Decouvrir
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-foreground/80 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Informations
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-foreground/80 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Assistance
            </p>
            <a
              href="tel:+33100000000"
              className="inline-flex items-center gap-2 font-sans text-sm text-foreground/80 transition-colors hover:text-terracotta"
            >
              <Phone className="size-4" />
              01 00 00 00 00
            </a>
            <p className="mt-2 font-sans text-xs text-muted-foreground">
              Du lundi au vendredi, 9h-18h
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-foreground/10" />

        <p className="text-center font-sans text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} EnfinVous. Tous droits reserves.
        </p>
      </Container>
    </footer>
  );
}
