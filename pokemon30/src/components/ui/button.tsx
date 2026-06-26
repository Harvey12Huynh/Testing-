import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        glass:
          "liquid-glass text-foreground hover:scale-[1.03] active:scale-[0.99]",
        goldGlass:
          "liquid-glass glass-gold text-foreground hover:scale-[1.03] active:scale-[0.99]",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
        solid:
          "bg-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02]",
      },
      size: {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-2.5 text-sm",
        lg: "px-14 py-5 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "glass", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
