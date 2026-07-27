import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRightIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "group inline-flex shrink-0 items-center justify-center gap-0 rounded-none",
    "bg-clip-padding text-base font-medium whitespace-nowrap transition-all outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-primary",
        secondary: "bg-card text-card-foreground border border-card",
        outline: "bg-transparent text-current border border-current",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12.5",
        icon: "size-12.5",
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
  asChild = false,
  showArrow = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    showArrow?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {size === "default" && (
        <span className="px-2.5">
          <Slottable>{children}</Slottable>
        </span>
      )}
      {(showArrow || size === "icon") && (
        <span
          className={cn(
            "relative overflow-hidden size-12.5 inline-flex items-center justify-center transition-colors duration-300",
            {
              "border-l border-current":
                size === "default" && variant === "outline",
            },
          )}
        >
          <ArrowUpRightIcon
            size={20}
            data-slot="arrow-left"
            className="absolute -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out will-change-transform"
          />
          <ArrowUpRightIcon
            size={20}
            data-slot="arrow-right"
            className="absolute translate-x-0 translate-y-0 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-300 ease-in-out will-change-transform"
          />
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
