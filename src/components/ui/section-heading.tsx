import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  surtitre?: string;
  title: string;
  separator?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({
  surtitre,
  title,
  separator = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-16 text-center", className)}>
      {surtitre && (
        <p className="mb-3 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {surtitre}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-[28px] font-medium leading-tight md:text-[40px]"
      >
        {title}
      </h2>
      {separator && <Separator className="mx-auto mt-6 w-16 bg-gold" />}
    </div>
  );
}
