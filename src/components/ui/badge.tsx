import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2.5 py-1 font-sans text-[13px] font-medium uppercase tracking-[0.15em] transition-colors md:text-sm",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        visio: "bg-terracotta text-primary-foreground",
        presentiel: "bg-sage text-foreground",
        signature: "badge-signature",
        flag: "bg-creme/85 text-anthracite/85 ring-1 ring-anthracite/10 backdrop-blur-sm [&_svg]:text-anthracite/60",
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
