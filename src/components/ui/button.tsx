import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-[4px] border border-transparent font-sans text-[15px] font-semibold uppercase tracking-[0.08em] whitespace-nowrap transition-all duration-250 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 md:text-[16px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-foreground min-h-[44px]",
        secondary:
          "border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-primary-foreground min-h-[44px]",
        tertiary:
          "border-none bg-transparent text-foreground underline decoration-gold underline-offset-4 hover:text-terracotta normal-case tracking-normal font-medium text-base",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline normal-case tracking-normal font-medium",
      },
      size: {
        default: "h-12 gap-2 px-7 py-3.5",
        sm: "h-9 gap-1.5 px-4 py-2 text-sm",
        lg: "h-14 gap-2 px-9 py-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
