"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ANIMATION_DURATION = 2200;

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const [hideIndicator, setHideIndicator] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const enterTimer = setTimeout(() => setEntered(true), 100);
    const unlockTimer = setTimeout(() => {
      setScrollLocked(false);
      document.body.style.overflow = "";
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(unlockTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (scrollLocked) return;

    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
      }
      setHideIndicator(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollLocked]);

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      {/* Full-bleed background photograph */}
      <div ref={bgRef} className="absolute inset-0 -z-20" aria-hidden="true">
        <Image
          src="https://image.shutterstock.com/image-photo/cheerful-senior-women-gray-hair-laughing-600nw-2750100189.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
          style={{
            animation: entered
              ? "hero-ken-burns 8s ease-out 0.2s both"
              : "none",
          }}
        />
      </div>

      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3d3225]/85 via-[#5c4a3a]/70 to-[#2a2520]/85 md:from-[#3d3225]/70 md:via-[#5c4a3a]/55 md:to-[#2a2520]/70"
        aria-hidden="true"
      />

      {/* Warm light overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(196,168,122,0.08) 0%, transparent 70%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Opening vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
          animation: "hero-vignette-open 1.5s ease-out 0.2s both",
        }}
        aria-hidden="true"
      />

      {/* Content with staggered reveal */}
      <div className="relative px-4 text-center text-creme">
        <p
          className={cn(
            "mb-6 font-sans text-[15px] font-medium uppercase tracking-[0.2em] text-creme/60",
            entered ? "opacity-100" : "opacity-0",
          )}
          style={{
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both"
              : "none",
          }}
        >
          Le cercle des eveilles de la vie
        </p>

        <div
          className="mx-auto mb-8 h-px w-20 origin-center bg-gold"
          style={{
            animation: entered
              ? "hero-gold-line 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both"
              : "none",
            transform: "scaleX(0)",
          }}
          aria-hidden="true"
        />

        <h1
          className="mx-auto max-w-3xl font-serif text-[28px] font-normal leading-[1.1] italic sm:text-[36px] md:text-[64px]"
          style={{
            animation: entered
              ? "hero-reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both"
              : "none",
          }}
        >
          Enfin, le temps de vivre
          <br />
          ce qui vous passionne.
        </h1>

        <div
          className="mx-auto mt-8 h-px w-20 origin-center bg-gold"
          style={{
            animation: entered
              ? "hero-gold-line 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both"
              : "none",
            transform: "scaleX(0)",
          }}
          aria-hidden="true"
        />

        <p
          className="mt-8 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-creme/50"
          style={{
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both"
              : "none",
          }}
        >
          Masterclasses en visio &middot; Rencontres en presentiel &middot;
          Escapades culturelles
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{
            animation: entered
              ? "hero-reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both"
              : "none",
          }}
        >
          <Button size="lg">Vous abonner</Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-creme/30 text-creme hover:bg-creme hover:text-foreground"
          >
            Decouvrir le programme
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500",
          hideIndicator ? "opacity-0" : "opacity-100",
        )}
        style={{
          animation: entered
            ? "hero-reveal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.9s both"
            : "none",
        }}
        aria-hidden="true"
      >
        <ChevronDown className="size-5 animate-bounce text-creme/40" />
      </div>
    </section>
  );
}
