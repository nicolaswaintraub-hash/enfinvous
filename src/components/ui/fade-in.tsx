"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function FadeIn({ children, className, as: Tag = "div" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in");
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
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(
        "opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
