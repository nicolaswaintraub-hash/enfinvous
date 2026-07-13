"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BETA } from "@/lib/flags";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

/** Navigation principale : les parcours et contenus que l'on parcourt. */
const browseLinks = [
  { href: "/rendez-vous-du-savoir", label: "Les rendez-vous du savoir" },
  { href: "/rendez-vous", label: "Ateliers" },
  { href: "/fenetres-sur-le-monde", label: "Fenêtres sur le monde" },
  { href: "/planning", label: "Planning" },
  { href: "/devenir-expert", label: "Vous êtes un professionnel ?" },
];

/** Liens secondaires (accès au compte), regroupés à droite. */
const actionLinks = [{ href: "/entrer", label: "Se connecter" }];

interface HeaderProps {
  /**
   * Affiche le header en permanence dans son état crème opaque (texte sombre).
   * À utiliser sur les pages qui démarrent sur un fond clair, sans hero sombre.
   */
  solid?: boolean;
}

export function Header({ solid = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const opaque = solid || isScrolled;

  const renderNavLink = (link: { href: string; label: string }) => {
    const active = pathname === link.href;
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "whitespace-nowrap font-sans text-[16px] font-medium transition-colors duration-500 xl:text-[17px]",
          active
            ? opaque
              ? "text-terracotta"
              : "text-gold"
            : opaque
              ? "text-foreground/70 hover:text-foreground"
              : "text-creme/80 hover:text-creme",
        )}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          opaque
            ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(31,34,51,0.06)]"
            : "bg-transparent",
        )}
      >
        <Container
          className={cn(
            "grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-6 transition-all duration-500",
            opaque ? "h-14 md:h-16" : "h-16 md:h-20",
          )}
        >
          {/* Colonne gauche — logo */}
          <Link
            href="/"
            className={cn(
              "col-start-1 justify-self-start font-serif text-xl font-medium tracking-tight transition-colors duration-500 md:text-2xl",
              opaque ? "text-foreground" : "text-creme",
            )}
          >
            Vivre·Enfin
          </Link>

          {/* Colonne centrale — navigation principale, centrée. Révélée à
              1360px (largeur à laquelle les liens tiennent sur une seule ligne) ;
              en dessous, le menu plein écran prend le relais. */}
          <nav className="col-start-2 hidden items-center gap-5 min-[1360px]:flex">
            {browseLinks.map(renderNavLink)}
          </nav>

          {/* Colonne droite — liens secondaires (desktop) + contrôles mobile,
              regroupés dans un seul enfant de grille pour que la nav centrale
              reste centrée quelle que soit la largeur des deux côtés. */}
          <div className="col-start-3 flex items-center justify-end">
            <div className="hidden items-center gap-5 min-[1360px]:flex">
              {actionLinks
                .filter((link) => !BETA || link.href !== "/entrer")
                .map(renderNavLink)}
              {!BETA && (
                <Button
                  size="sm"
                  nativeButton={false}
                  render={(props) => <Link href="/entrer" {...props} />}
                >
                  S'abonner
                </Button>
              )}
            </div>

            {/* Contrôles mobile */}
            <div className="flex items-center gap-3 min-[1360px]:hidden">
              {!BETA && (
                <Button
                  size="sm"
                  className="hidden text-sm sm:inline-flex"
                  nativeButton={false}
                  render={(props) => <Link href="/entrer" {...props} />}
                >
                  S'abonner
                </Button>
              )}
              <button
                type="button"
                className={cn(
                  "relative inline-flex size-10 items-center justify-center rounded-sm transition-colors duration-500",
                  opaque ? "text-foreground" : "text-creme",
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Ouvrir le menu"
              >
                <div className="flex flex-col items-end gap-[5px]">
                  <span
                    className={cn(
                      "block h-[1.5px] w-5 transition-colors duration-500",
                      opaque ? "bg-foreground" : "bg-creme",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-[1.5px] w-3.5 transition-colors duration-500",
                      opaque ? "bg-foreground" : "bg-creme",
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
