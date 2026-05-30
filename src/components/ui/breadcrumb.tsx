import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn("border-b border-foreground/5 bg-background", className)}
    >
      <Container>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-4 font-sans text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-terracotta">
              Accueil
            </Link>
          </li>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-x-2">
                <ChevronRight
                  className="size-3.5 text-foreground/30"
                  aria-hidden="true"
                />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="text-foreground/80"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
