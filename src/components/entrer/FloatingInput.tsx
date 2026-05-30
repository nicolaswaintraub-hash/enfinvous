import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.ComponentProps<"input"> {
  label: string;
  /** Élément posé à droite du champ (ex. bouton œil). */
  trailing?: ReactNode;
  error?: string;
}

export function FloatingInput({
  label,
  id,
  trailing,
  error,
  className,
  ...props
}: FloatingInputProps) {
  return (
    <div>
      <div className="relative">
        <input
          id={id}
          placeholder=" "
          className={cn(
            "peer h-[56px] w-full rounded-sm border bg-background px-3.5 pt-5 pb-1.5 font-sans text-[16px] text-foreground transition-colors focus:outline-none",
            error
              ? "border-destructive focus:border-destructive"
              : "border-foreground/20 focus:border-2 focus:border-terracotta",
            trailing && "pr-12",
            className,
          )}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute top-1.5 left-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-all duration-150",
            "peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case",
            "peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:font-medium peer-focus:tracking-[0.1em] peer-focus:uppercase peer-focus:text-terracotta",
          )}
        >
          {label}
        </label>
        {trailing && (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            {trailing}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 font-sans text-[13px] text-destructive">{error}</p>
      )}
    </div>
  );
}
