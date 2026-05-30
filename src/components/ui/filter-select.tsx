import { ChevronDown } from "lucide-react";

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

/**
 * Menu déroulant de filtre — libellé en surtitre + <select> stylé.
 * Présentationnel : la logique de filtrage vit dans le composant parent.
 */
export function FilterSelect({
  label,
  value,
  options,
  onChange,
}: FilterSelectProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-sm border border-foreground/15 bg-background py-2.5 pr-9 pl-3 font-sans text-[15px] text-foreground transition-colors hover:border-sage focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-foreground/40"
          aria-hidden="true"
        />
      </div>
    </label>
  );
}
