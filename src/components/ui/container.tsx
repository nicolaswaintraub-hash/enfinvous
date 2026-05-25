import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-4 md:px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
