"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  /**
   * Cascade les enfants directs du conteneur un par un (filet doux ~120 ms),
   * plutôt que de révéler le bloc d'un seul tenant. La grille passe l'état
   * caché à ses enfants via la classe `.reveal-stagger` (voir globals.css).
   */
  stagger?: boolean;
  /**
   * Révélation un peu plus marquée (montée + léger « settle ») pour attirer
   * l'œil — réservée à la carte d'abonnement.
   */
  highlight?: boolean;
}

export function FadeIn({
  children,
  className,
  as: Tag = "div",
  stagger = false,
  highlight = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      if (stagger) {
        // Les enfants portent l'état caché ; on déclenche leur cascade.
        el.classList.add("is-revealed");
      } else {
        el.classList.add(
          highlight ? "animate-reveal-up-highlight" : "animate-reveal-up",
        );
      }
    };

    // Arrivée par ancre (#abonnement, #formats…) : un saut programmatique
    // peut déposer la vue directement sur cette section sans que
    // l'IntersectionObserver ne déclenche la révélation, laissant le bloc
    // masqué (opacity-0). Si ce conteneur englobe la cible du hash courant,
    // on le révèle aussitôt.
    const revealIfHashTarget = () => {
      const hash = window.location.hash;
      if (hash.length <= 1) return false;
      try {
        const target = document.querySelector(hash);
        if (target && el.contains(target)) {
          reveal();
          return true;
        }
      } catch {
        // hash non valide comme sélecteur CSS — on ignore.
      }
      return false;
    };

    if (revealIfHashTarget()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      // threshold 0 + bottom rootMargin reveals as soon as the element's top
      // edge enters the viewport. A ratio-based threshold (e.g. 0.15) can never
      // be reached when the element is much taller than the viewport — which is
      // exactly what happens to full-page listings on mobile (single column),
      // leaving them stuck at opacity-0.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    window.addEventListener("hashchange", revealIfHashTarget);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", revealIfHashTarget);
    };
  }, [stagger, highlight]);

  return (
    <Tag
      ref={ref}
      className={cn(
        // L'état caché initial est porté par des classes CSS scopées sous `.js`
        // (voir globals.css) : sans JS, rien n'est masqué — le contenu reste
        // visible. En mode stagger, ce sont les enfants directs qui sont cachés.
        stagger ? "reveal-stagger" : "reveal-init",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
