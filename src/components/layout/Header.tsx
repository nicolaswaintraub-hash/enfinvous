"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/masterclasses-visio", label: "Masterclass Visio" },
  { href: "/rendez-vous", label: "Rendez-vous" },
  { href: "/planning", label: "Planning" },
  { href: "/entrer", label: "Se connecter" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(31,34,51,0.06)]"
          : "bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-500",
          isScrolled ? "h-14 md:h-16" : "h-16 md:h-20",
        )}
      >
        <Link
          href="/"
          className={cn(
            "font-serif text-xl font-medium tracking-tight transition-colors duration-500 md:text-2xl",
            isScrolled ? "text-foreground" : "text-creme",
          )}
        >
          Enfin·Vous
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-base font-medium transition-colors duration-500",
                isScrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-creme/80 hover:text-creme",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm">S'abonner</Button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button size="sm" className="hidden text-sm sm:inline-flex">
            S'abonner
          </Button>
          <button
            type="button"
            className={cn(
              "relative inline-flex size-10 items-center justify-center rounded-sm transition-colors duration-500",
              isScrolled ? "text-foreground" : "text-creme",
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <div className="flex flex-col items-end gap-[5px]">
              <span
                className={cn(
                  "block h-[1.5px] w-5 transition-colors duration-500",
                  isScrolled ? "bg-foreground" : "bg-creme",
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-3.5 transition-colors duration-500",
                  isScrolled ? "bg-foreground" : "bg-creme",
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
