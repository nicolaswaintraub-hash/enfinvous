"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/masterclasses-visio", label: "Masterclass Visio" },
  { href: "/rendez-vous", label: "Rendez-vous" },
  { href: "/planning", label: "Planning" },
  { href: "/entrer", label: "Se connecter" },
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col transition-all duration-500",
        open
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-anthracite/95 backdrop-blur-md" />

      <div className="relative flex h-16 shrink-0 items-center justify-between px-4">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif text-xl font-medium text-creme"
        >
          Enfin·Vous
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-10 items-center justify-center text-creme/80 transition-colors hover:text-creme"
          aria-label="Fermer le menu"
        >
          <X className="size-5" strokeWidth={1.5} />
        </button>
      </div>

      <nav className="relative flex flex-1 flex-col items-center justify-center gap-1 px-8">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "py-3 font-serif text-[28px] font-medium text-creme/90 transition-all duration-500 hover:text-gold",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{
              transitionDelay: open ? `${150 + i * 80}ms` : "0ms",
            }}
          >
            {link.label}
          </Link>
        ))}

        <Separator className="my-6 w-16 bg-gold" />

        <div
          className={cn(
            "transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{
            transitionDelay: open ? `${150 + navLinks.length * 80}ms` : "0ms",
          }}
        >
          <Button size="lg" className="min-w-[200px]" onClick={onClose}>
            S'abonner
          </Button>
        </div>
      </nav>

      <div className="relative px-8 pb-8 text-center">
        <p className="font-serif text-base italic text-creme/40">
          Le cercle des eveilles de la vie.
        </p>
      </div>
    </div>
  );
}
