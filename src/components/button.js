import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils.js";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md border [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white/20 text-primary hover:bg-white/30 dark:bg-white/10 dark:text-primary-dark dark:hover:bg-white/20",
        destructive: "bg-red-200/20 text-red-700 hover:bg-red-200/30 dark:bg-red-700/20 dark:text-red-200",
        outline: "border border-white/30 text-white hover:bg-white/20 dark:border-white/30 dark:text-white dark:hover:bg-white/10",
        secondary: "bg-white/20 text-gray-800 hover:bg-white/30 dark:bg-white/10 dark:text-gray-200",
        ghost: "hover:bg-white/10 dark:hover:bg-white/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// eslint-disable-next-line react/prop-types
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});

Button.displayName = "Button";

export { Button, buttonVariants };
