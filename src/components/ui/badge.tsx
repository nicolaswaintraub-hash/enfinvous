import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2.5 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.15em] transition-colors md:text-[12px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        visio: "bg-terracotta text-primary-foreground",
        presentiel: "bg-sage text-foreground",
        signature: "bg-gold/20 text-foreground border border-gold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
